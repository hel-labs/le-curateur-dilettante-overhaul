type Variant =
  | "curve-down"
  | "curve-up"
  | "concave-down"
  | "concave-up"
  | "tilt-left"
  | "tilt-right"
  | "jagged"
  | "wave"

type Props = {
  fill: string
  variant?: Variant
  height?: number
  className?: string
}

export function CurveSeparator({
  fill,
  variant = "curve-down",
  height = 80,
  className = "",
}: Props) {
  const paths: Record<Variant, string> = {
    "curve-down": "M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z",

    "curve-up": "M0,80 C360,0 1080,0 1440,80 L1440,0 L0,0 Z",

    "concave-down": "M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z",

    "concave-up": "M0,0 C360,80 1080,80 1440,0 L1440,0 L0,0 Z",

    "tilt-left": "M0,0 L1440,60 L1440,80 L0,80 Z",

    "tilt-right": "M0,60 L1440,0 L1440,80 L0,80 Z",

    jagged:
      "M0,40 L120,10 L240,55 L360,5 L480,50 L600,15 L720,45 L840,8 L960,48 L1080,12 L1200,52 L1320,18 L1440,40 L1440,80 L0,80 Z",

    wave: "M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z",
  }

  return (
    <svg
      viewBox={`0 0 1440 ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={`block w-full ${className}`}
      style={{ height, display: "block" }}
      aria-hidden="true"
    >
      <path d={paths[variant]} fill={fill} />
    </svg>
  )
}
