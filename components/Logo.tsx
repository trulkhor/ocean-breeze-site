import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizes = {
    sm: { width: 160, height: 40, textSize: 10, subSize: 7 },
    md: { width: 220, height: 54, textSize: 13, subSize: 8 },
    lg: { width: 300, height: 72, textSize: 17, subSize: 11 },
  };
  const s = sizes[size];

  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="Ocean Breeze Recovery Housing - Home">
      <svg
        width={s.width}
        height={s.height}
        viewBox="0 0 220 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Sun */}
        <circle cx="22" cy="14" r="5" fill="#F97316" opacity="0.9" />
        {/* Palm trunk */}
        <path
          d="M20 48 Q22 38 25 28 Q27 22 26 16"
          stroke="#0D9488"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Palm fronds */}
        <path d="M26 16 Q18 10 10 13" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M26 16 Q20 8 24 4" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M26 16 Q32 8 38 10" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M26 16 Q34 14 40 18" stroke="#0D9488" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M26 16 Q16 18 12 22" stroke="#0D9488" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        {/* Coconuts */}
        <circle cx="26" cy="18" r="2" fill="#F97316" opacity="0.8" />
        {/* Ocean wave */}
        <path
          d="M6 44 Q10 40 14 44 Q18 48 22 44 Q26 40 30 44 Q34 48 38 44 Q42 40 46 44"
          stroke="#0D9488"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M8 49 Q12 45 16 49 Q20 53 24 49 Q28 45 32 49 Q36 53 40 49 Q44 45 46 49"
          stroke="#0D9488"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        {/* Text: Ocean Breeze */}
        <text
          x="54"
          y="22"
          fontSize={s.textSize}
          fontWeight="700"
          fill="#0D9488"
          fontFamily="Arial, Helvetica, sans-serif"
          letterSpacing="0.5"
        >
          OCEAN BREEZE
        </text>
        {/* Text: Recovery Housing */}
        <text
          x="54"
          y="36"
          fontSize={s.subSize + 1}
          fontWeight="600"
          fill="#F97316"
          fontFamily="Arial, Helvetica, sans-serif"
          letterSpacing="0.8"
        >
          RECOVERY HOUSING
        </text>
        {/* Tagline */}
        <text
          x="54"
          y="48"
          fontSize={s.subSize - 1}
          fill="#6b7280"
          fontFamily="Arial, Helvetica, sans-serif"
          letterSpacing="0.3"
        >
          West Palm Beach, FL
        </text>
      </svg>
    </Link>
  );
}
