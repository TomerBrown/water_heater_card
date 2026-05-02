export const STATUS_VALUES = [
  "off",
  "idle",
  "heating",
  "keeping_warm",
  "ready",
  "fault",
] as const;

export type Status = (typeof STATUS_VALUES)[number];

export const STATUS_COLORS: Record<Status, string> = {
  off: "var(--whc-color-off, var(--disabled-color))",
  idle: "var(--whc-color-idle, var(--primary-text-color))",
  heating: "var(--whc-color-heating, #ff9800)",
  keeping_warm: "var(--whc-color-keeping_warm, #2196f3)",
  ready: "var(--whc-color-ready, var(--success-color))",
  fault: "var(--whc-color-fault, var(--error-color))",
};

export const STATUS_ICONS: Record<Status, string> = {
  off: "mdi:kettle-off",
  idle: "mdi:kettle",
  heating: "mdi:kettle-steam",
  keeping_warm: "mdi:kettle-steam",
  ready: "mdi:kettle",
  fault: "mdi:kettle-alert",
};

export const DEFAULT_ICON = "mdi:kettle";

export const DEFAULT_PRESETS: readonly {
  label: string;
  temperature: number;
  icon?: string;
}[] = [
  { label: "Boil", temperature: 99, icon: "mdi:kettle-steam" },
  { label: "Tea", temperature: 80 },
  { label: "Coffee", temperature: 92 },
  { label: "Baby", temperature: 40 },
];
