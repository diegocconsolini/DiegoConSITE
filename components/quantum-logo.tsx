"use client"

export function QuantumLogo() {
  return (
    <div className="relative w-24 h-24 md:w-32 md:h-32">
      {/* SVG container for the quantum entanglement visualization */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradients for particles */}
          <radialGradient id="warmGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="1" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.8" />
          </radialGradient>
          <radialGradient id="coolGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.8" />
          </radialGradient>

          {/* Glow filters */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connecting waves - pulsing quantum field effect */}
        <g className="animate-pulse" style={{ animationDuration: "3s" }}>
          <path
            d="M 30 60 Q 45 45, 60 60 T 90 60"
            stroke="#8b5cf6"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
            strokeDasharray="5,5"
          >
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
          </path>
          <path
            d="M 30 60 Q 45 75, 60 60 T 90 60"
            stroke="#8b5cf6"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
            strokeDasharray="5,5"
          >
            <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />
          </path>
          <path d="M 30 60 L 90 60" stroke="#8b5cf6" strokeWidth="1.5" fill="none" opacity="0.5">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Warm particle (orange) - rotating clockwise */}
        <g filter="url(#glow)">
          <circle cx="30" cy="60" r="10" fill="url(#warmGradient)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 60 60"
              to="360 60 60"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>
          {/* Particle trail */}
          <circle cx="30" cy="60" r="12" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.3">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 60 60"
              to="360 60 60"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Cool particle (blue) - rotating counter-clockwise */}
        <g filter="url(#glow)">
          <circle cx="90" cy="60" r="10" fill="url(#coolGradient)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 60 60"
              to="0 60 60"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>
          {/* Particle trail */}
          <circle cx="90" cy="60" r="12" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.3">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 60 60"
              to="0 60 60"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Center quantum field pulse */}
        <circle cx="60" cy="60" r="8" fill="#8b5cf6" opacity="0.2">
          <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  )
}
