
type Props = {
  color?: string
  padding?: string
}

export function OrnamentalRule({
  color = "rgba(180,160,130,0.28)",
  padding = "0",
}: Props) {
  const ornamentColor = color.replace(/[\d.]+\)$/, "0.52)")

  return (
    <div
      aria-hidden="true"
      style={{ width: "100%", padding, lineHeight: 0 }}
    >
      <svg
        width="100%"
        height="32"
        viewBox="0 0 1000 32"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left rule — long */}
        <line x1="0"   y1="16" x2="776" y2="16" stroke={color} strokeWidth="0.75" />

        {/* Right rule — short */}
        <line x1="834" y1="16" x2="1000" y2="16" stroke={color} strokeWidth="0.75" />

        {/* Ornament — fixed size, not stretched with preserveAspectRatio */}
        <g transform="translate(776, 4)">
          <svg width="58" height="24" viewBox="0 0 58 24" overflow="visible">
            {/* Left smaller loop */}
            <path
              d="M6 12 C6 6 12 2 17 5 C22 8 21 14 17 16 C13 18 8 15 8 12"
              stroke={ornamentColor}
              strokeWidth="1.15"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Right larger loop */}
            <path
              d="M17 5 C22 1 32 2 34 8 C36 14 31 20 25 20 C19 20 16 15 17 12"
              stroke={ornamentColor}
              strokeWidth="1.15"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </g>
      </svg>
    </div>
  )
}