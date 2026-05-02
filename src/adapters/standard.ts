import type { Status } from "../const";
import type { HassEntity } from "../types";
import {
  AdapterContext,
  AdapterFactory,
  ServiceCall,
  WaterHeaterAdapter,
} from "./base";

export class StandardWaterHeaterAdapter implements WaterHeaterAdapter {
  constructor(private entity: HassEntity, private ctx: AdapterContext) {}

  get current(): number {
    return this.entity.attributes.current_temperature ?? 0;
  }

  get target(): number {
    return this.entity.attributes.temperature ?? 0;
  }

  get min(): number {
    return this.entity.attributes.min_temp ?? 0;
  }

  get max(): number {
    return this.entity.attributes.max_temp ?? 100;
  }

  get status(): Status {
    const state = this.entity.state;
    if (state === "off") return "off";
    if (state === "heating" || state === "heat") return "heating";

    // Derived "ready" state for kettles/heaters
    if (this.current >= this.target - 2 && this.target > 0) {
      return "ready";
    }

    return "idle";
  }

  get keepWarm() {
    return {
      active: this.entity.state === "heat_pump" || this.entity.state === "eco", // Example mapping
    };
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

  turnOn(): ServiceCall {
    return {
      domain: "water_heater",
      service: "turn_on",
      serviceData: { entity_id: this.entity.entity_id },
    };
  }

  turnOff(): ServiceCall {
    return {
      domain: "water_heater",
      service: "turn_off",
      serviceData: { entity_id: this.entity.entity_id },
    };
  }
}

export const StandardAdapterFactory: AdapterFactory = {
  id: "standard",
  matches: (entity: HassEntity) =>
    entity.entity_id.startsWith("water_heater.") &&
    !("kettle.status" in entity.attributes),
  build: (entity: HassEntity, ctx: AdapterContext) =>
    new StandardWaterHeaterAdapter(entity, ctx),
};
