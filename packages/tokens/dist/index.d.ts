// @white-diamond/tokens v0.1.0
export interface NeutralColors {
  0: string;
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

export interface FunctionalColors {
  success: string;
  warning: string;
  error: string;
  info: string;
}

export interface Colors {
  neutral: NeutralColors;
  functional: FunctionalColors;
}

export interface Spacing {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  8: string;
  10: string;
  12: string;
  16: string;
}

export interface BorderWidth {
  thin: string;
  standard: string;
  thick: string;
}

export interface BorderColors {
  subtle: string;
  standard: string;
  strong: string;
}

export interface BorderRadius {
  none: string;
}

export interface Borders {
  width: BorderWidth;
  colors: BorderColors;
  radius: BorderRadius;
}

export interface FontSize {
  xs: string;
  sm: string;
  base: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
}

export interface FontWeight {
  normal: string;
  medium: string;
  semibold: string;
  bold: string;
}

export interface LineHeight {
  tight: string;
  standard: string;
  relaxed: string;
}

export interface FontFamily {
  sans: string;
  mono: string;
}

export interface Typography {
  fontSize: FontSize;
  fontWeight: FontWeight;
  lineHeight: LineHeight;
  fontFamily: FontFamily;
}

export interface Shadows {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface AnimationDuration {
  instant: string;
  fast: string;
  standard: string;
  slow: string;
  verySlow: string;
}

export interface AnimationEasing {
  linear: string;
  ease: string;
  easeIn: string;
  easeOut: string;
  easeInOut: string;
}

export interface Animation {
  duration: AnimationDuration;
  easing: AnimationEasing;
}

export interface Tokens {
  colors: Colors;
  spacing: Spacing;
  borders: Borders;
  typography: Typography;
  shadows: Shadows;
  animation: Animation;
}

export declare const colors: Colors;
export declare const spacing: Spacing;
export declare const borders: Borders;
export declare const typography: Typography;
export declare const shadows: Shadows;
export declare const animation: Animation;
declare const tokens: Tokens;
export default tokens;
