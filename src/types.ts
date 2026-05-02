export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, any>;
  last_changed?: string;
  last_updated?: string;
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  callService(domain: string, service: string, serviceData?: Record<string, any>): Promise<void>;
  locale?: { language: string };
  localize?(key: string, ...args: any[]): string;
}

export type ActionConfig =
  | { action: "more-info"; entity?: string }
  | { action: "toggle"; entity?: string }
  | { action: "navigate"; navigation_path: string }
  | { action: "url"; url_path: string }
  | { action: "call-service"; service: string; service_data?: Record<string, unknown> }
  | { action: "none" };

export interface PresetConfig {
  label: string;
  temperature: number;
  icon?: string;
  auto_start?: boolean;
}

export interface WaterHeaterCardConfig {
  type: "custom:water-heater-card";
  entity: string;
  icon?: string;
  name?: string;
  adapter?: "auto" | "standard" | "xiaomi_miot";
  keep_warm_remaining_entity?: string;
  presets?: PresetConfig[];
  show_slider?: boolean;
  show_presets?: boolean;
  show_power?: boolean;
  compact?: boolean;
  /** Long-press duration (milliseconds) before firing `hold_action`. Default ~550 ms. */
  hold_ms?: number;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
  
  // Customizations
  layout?: "default" | "sparse" | "dense";
  roundness?: "default" | "square" | "pill";
  animations?: boolean;
  primary_info?: string;
  secondary_info?: string;
  temp_presets?: number[];
  keep_warm_presets?: Array<{ label: string; value: number }>;
  theme_colors?: {
    off?: string;
    idle?: string;
    heating?: string;
    keeping_warm?: string;
    ready?: string;
    fault?: string;
  };
}
