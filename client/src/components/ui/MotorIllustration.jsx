import { motion } from "framer-motion";

function MotorIllustration() {
  return (
    <svg viewBox="0 0 480 480" className="h-full w-full" fill="none">
      <defs>
        <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4d81ff" />
          <stop offset="100%" stopColor="#0b5fff" />
        </linearGradient>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="240" cy="240" r="150" fill="url(#coreGlow)" />

      <motion.circle
        cx="240"
        cy="240"
        r="168"
        stroke="#243354"
        strokeWidth="1"
        strokeDasharray="2 6"
        fill="none"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "240px 240px" }}
      />

      <circle cx="240" cy="240" r="138" stroke="#2a3a5c" strokeWidth="1.5" fill="none" />

      <motion.g
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "240px 240px" }}
      >
        {Array.from({ length: 36 }).map((_, i) => {
          const angle = (i / 36) * Math.PI * 2;
          const isMajor = i % 3 === 0;
          const r1 = isMajor ? 124 : 130;
          const r2 = 138;
          return (
            <line
              key={i}
              x1={240 + r1 * Math.cos(angle)}
              y1={240 + r1 * Math.sin(angle)}
              x2={240 + r2 * Math.cos(angle)}
              y2={240 + r2 * Math.sin(angle)}
              stroke={isMajor ? "#4d6a9e" : "#2a3a5c"}
              strokeWidth={isMajor ? 2 : 1}
            />
          );
        })}
      </motion.g>

      <circle cx="240" cy="240" r="96" stroke="url(#ringGrad)" strokeWidth="2.5" fill="#0c1730" />
      <circle cx="240" cy="240" r="96" stroke="#0b5fff" strokeWidth="8" strokeOpacity="0.12" fill="none" />

      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "240px 240px" }}
      >
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const cx = 240 + 96 * Math.cos(angle);
          const cy = 240 + 96 * Math.sin(angle);
          return <circle key={i} cx={cx} cy={cy} r="5" fill="#4d81ff" />;
        })}
      </motion.g>

      <circle cx="240" cy="240" r="56" fill="#0f1c3a" stroke="#33517f" strokeWidth="1.5" />
      <circle cx="240" cy="240" r="34" fill="url(#ringGrad)" />
      <circle cx="240" cy="240" r="34" fill="#0b5fff" fillOpacity="0.25" />

      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2 + Math.PI / 6;
        const x1 = 240 + 40 * Math.cos(angle);
        const y1 = 240 + 40 * Math.sin(angle);
        const x2 = 240 + 52 * Math.cos(angle);
        const y2 = 240 + 52 * Math.sin(angle);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0a1a38" strokeWidth="6" strokeLinecap="round" />;
      })}

      <g stroke="#2a3a5c" strokeWidth="1">
        <line x1="240" y1="20" x2="240" y2="66" />
        <line x1="240" y1="414" x2="240" y2="460" />
        <line x1="20" y1="240" x2="66" y2="240" />
        <line x1="414" y1="240" x2="460" y2="240" />
      </g>
      <g>
        <circle cx="240" cy="14" r="3" fill="#4d81ff" />
        <circle cx="240" cy="466" r="3" fill="#4d81ff" />
        <circle cx="14" cy="240" r="3" fill="#4d81ff" />
        <circle cx="466" cy="240" r="3" fill="#4d81ff" />
      </g>
    </svg>
  );
}

export default MotorIllustration;
