export const Colors = {
  light: {
    text: "#0F172A",
    muted: "#64748B",
    background: "#F8FAFC",
    card: "#FFFFFF",
    border: "#E2E8F0",
    primary: "#4F46E5",
    onPrimary: "#FFFFFF",
    onService: "#FFFFFF",
  },

  dark: {
    text: "#F1F5F9",
    muted: "#94A3B8",
    background: "#0B1220",
    card: "#182132",
    border: "#2A3446",
    primary: "#A5B4FC",
    onPrimary: "#0B1220",
    onService: "#FFFFFF",
  },
} as const;

export type Theme = (typeof Colors)[keyof typeof Colors];

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const FontSize = {
  small: 13,
  body: 16,
  title: 20,
  hero: 28,
} as const;

export const Radius = {
  sm: 8,
  md: 12,
  lg: 16,
  pill: 999,
} as const;
