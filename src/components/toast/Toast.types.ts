export interface TimerProps {
  duration: number;
}

export interface ToastProps {
  content: string;
  type: "positive" | "negative" | "neutral" | null;
  title?: string;
  format?: {
    icon?: "left" | "right" | "both";
  };
  position?: "tl" | "tr" | "bl" | "br" | "cl" | "cr" | "cb" | "ct";
  icon?: string | string[];
  loading?: boolean;
  timed?: number;
}
