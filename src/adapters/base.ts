import type { Status } from "../const";
import type { HassEntity, HomeAssistant } from "../types";

export type { Status } from "../const";

export type Duration = { minutes: number };

export interface ServiceCall {
  domain: string;
  service: string;
  serviceData?: Record<string, any>;
}

export interface KeepWarmInfo {
  active: boolean;
  remaining?: Duration;
  configured?: Duration;
  holdTemperature?: number;
}

export interface WaterHeaterAdapter {
  current: number;
  target: number;
  min: number;
  max: number;
  status: Status;
  keepWarm: KeepWarmInfo;
  lifted?: boolean;
  fault?: string | null;
  setTarget(t: number): ServiceCall;
  turnOn?(): ServiceCall;
  turnOff?(): ServiceCall;
  setKeepWarmMinutes?(minutes: number): ServiceCall;
}

export type AdapterId = "standard" | "xiaomi_miot";

export interface AdapterContext {
  hass: HomeAssistant;
  keepWarmRemainingEntity?: HassEntity;
}

export interface AdapterFactory {
  id: AdapterId;
  /** Return true if this adapter can drive the given entity. */
  matches(entity: HassEntity): boolean;
  /** Build the adapter from current entity state. */
  build(entity: HassEntity, ctx: AdapterContext): WaterHeaterAdapter;
}

const factories: AdapterFactory[] = [];

export function registerAdapter(factory: AdapterFactory): void {
  factories.push(factory);
}

export function pickAdapter(
  entity: HassEntity,
  override?: "auto" | AdapterId
): AdapterFactory {
  if (override && override !== "auto") {
    const found = factories.find((f) => f.id === override);
    if (!found) throw new Error(`No adapter registered with id "${override}"`);
    return found;
  }
  const matched = factories.find((f) => f.matches(entity));
  if (!matched) throw new Error(`No adapter matched entity "${entity.entity_id}"`);
  return matched;
}
