import type { Status } from "../const";
import type { HassEntity } from "../types";
import {
  AdapterContext,
  AdapterFactory,
  ServiceCall,
  WaterHeaterAdapter,
} from "./base";

export class XiaomiMiotKettleAdapter implements WaterHeaterAdapter {
  constructor(private entity: HassEntity, private ctx: AdapterContext) {}

  get current(): number {
    return this.entity.attributes.current_temperature ?? 0;
  }

  get target(): number {
    return this.entity.attributes.temperature ?? 0;
  }

  get min(): number {
    return this.entity.attributes.min_temp ?? 40;
  }

  get max(): number {
    return this.entity.attributes.max_temp ?? 99;
  }

  get status(): Status {
    const kettleStatus = this.entity.attributes["kettle.status"];
    const fault = this.entity.attributes["kettle.fault"];

    if (fault && fault !== 0) return "fault";

    switch (kettleStatus) {
      case 1: // Heating
      case 2: // Boiling
        return "heating";
      case 4: // Keep Warm
        return "keeping_warm";
      case 0: // Idle / off at plug
        if (this.entity.state === "off") return "off";
        if (this.current >= this.target - 2 && this.target > 0) {
          return "ready";
        }
        return "idle";
      case 3: // Cooling Down
      default:
        return "idle";
    }
  }

  get keepWarm() {
    const active = this.entity.attributes["kettle.auto_keep_warm"] === true;
    const configuredMinutes = this.entity.attributes["function.keep_warm_time"];
    const holdTemperature = this.entity.attributes["kettle.keep_warm_temperature"];

    // Try to get remaining time from companion entity if provided
    let remaining;
    if (this.ctx.keepWarmRemainingEntity) {
      const state = parseFloat(this.ctx.keepWarmRemainingEntity.state);
      if (!isNaN(state)) {
        remaining = { minutes: state };
      }
    }

    return {
      active,
      remaining,
      configured: configuredMinutes ? { minutes: configuredMinutes } : undefined,
      holdTemperature,
    };
  }

  get lifted(): boolean {
    return this.entity.attributes["function.kettle_lifting"] === true;
  }

  get fault(): string | null {
    const fault = this.entity.attributes["kettle.fault"];
    return fault && fault !== 0 ? `Error ${fault}` : null;
  }

  setTarget(t: number): ServiceCall {
    return {
      domain: "water_heater",
      service: "set_temperature",
      serviceData: {
        entity_id: this.entity.entity_id,
        temperature: t,
      },
    };
  }

  /**
   * Yunmi / MIoT kettles often omit `water_heater.turn_on`. Starting a cycle is done by
   * setting the target temperature (same as dragging the slider or choosing a preset).
   */
  turnOn(): ServiceCall {
    const t =
      typeof this.target === "number" && this.target >= this.min && this.target <= this.max && this.target > 0
        ? this.target
        : this.max;
    return this.setTarget(Math.round(t));
  }

  turnOff(): ServiceCall {
    return {
      domain: "water_heater",
      service: "turn_off",
      serviceData: { entity_id: this.entity.entity_id },
    };
  }

  setKeepWarmMinutes(minutes: number): ServiceCall {
    return {
      domain: "xiaomi_miot",
      service: "set_property",
      serviceData: {
        entity_id: this.entity.entity_id,
        field: "function.keep_warm_time",
        value: minutes,
      },
    };
  }
}

export const XiaomiMiotAdapterFactory: AdapterFactory = {
  id: "xiaomi_miot",
  matches: (entity: HassEntity) => "kettle.status" in entity.attributes,
  build: (entity: HassEntity, ctx: AdapterContext) =>
    new XiaomiMiotKettleAdapter(entity, ctx),
};
