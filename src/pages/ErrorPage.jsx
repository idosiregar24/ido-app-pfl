import React from "react";
import { useNavigate } from "react-router-dom";

// ══════════════════════════════════════════════════════
//  SVG Illustrations — tiap error punya karakter sendiri
// ══════════════════════════════════════════════════════

export const DinoIllustration = () => (
  <svg viewBox="0 0 320 260" width="320" height="260" xmlns="http://www.w3.org/2000/svg">
    <style>{`
      @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
      @keyframes blink { 0%,90%,100%{transform:scaleY(1)} 95%{transform:scaleY(0.1)} }
      @keyframes crack { 0%{opacity:0;transform:scale(0.8)} 100%{opacity:1;transform:scale(1)} }
      .dino { animation: float 3s ease-in-out infinite; transform-origin: center bottom; }
      .eye { animation: blink 4s ease-in-out infinite; transform-origin: center; }
    `}</style>
    {/* 404 digits */}
    <text x="30" y="180" fontFamily="Georgia,serif" fontSize="160" fontWeight="900"
      fill="none" stroke="#e8d5a3" strokeWidth="3" opacity="0.35">4</text>
    <text x="230" y="180" fontFamily="Georgia,serif" fontSize="160" fontWeight="900"
      fill="none" stroke="#e8d5a3" strokeWidth="3" opacity="0.35">4</text>
    {/* Egg bottom */}
    <ellipse cx="160" cy="215" rx="55" ry="22" fill="#f0dfa0" />
    <ellipse cx="126" cy="220" rx="22" ry="10" fill="#e8d090" transform="rotate(-15,126,220)" />
    {/* Egg shell back */}
    <path d="M115 215 Q130 170 160 165 Q190 170 205 215 Z" fill="#f5e8b0" />
    {/* Spots on egg */}
    <circle cx="148" cy="200" r="5" fill="#e8d090" opacity="0.7" />
    <circle cx="170" cy="195" r="4" fill="#e8d090" opacity="0.7" />
    <circle cx="183" cy="207" r="3" fill="#e8d090" opacity="0.7" />
    {/* Dino body */}
    <g className="dino">
      <ellipse cx="160" cy="155" rx="32" ry="38" fill="#2a9d8f" />
      {/* Belly */}
      <ellipse cx="160" cy="162" rx="20" ry="26" fill="#52b8ac" opacity="0.6" />
      {/* Head */}
      <ellipse cx="160" cy="108" rx="30" ry="28" fill="#2a9d8f" />
      {/* Snout */}
      <path d="M148 122 Q160 138 172 122" fill="#2a9d8f" />
      <path d="M150 130 Q160 142 170 130" fill="#52b8ac" opacity="0.5" />
      {/* Teeth */}
      <path d="M153 128 L156 135 L159 128" fill="white" />
      <path d="M161 128 L164 133 L167 128" fill="white" />
      {/* Eye */}
      <circle cx="152" cy="104" r="8" fill="white" />
      <circle className="eye" cx="154" cy="104" r="5" fill="#1a3a38" />
      <circle cx="155" cy="102" r="2" fill="white" />
      {/* Spikes */}
      <path d="M160 80 L155 65 L160 75 L165 60 L168 78" fill="#1d7a6e" />
      {/* Arm waving */}
      <path d="M180 148 Q200 138 205 125 Q210 115 202 118" stroke="#2a9d8f" strokeWidth="10" fill="none" strokeLinecap="round" />
      <circle cx="202" cy="118" r="8" fill="#2a9d8f" />
      {/* Fingers */}
      <path d="M200 114 L207 108" stroke="#1d7a6e" strokeWidth="3" strokeLinecap="round" />
      <path d="M203 112 L212 110" stroke="#1d7a6e" strokeWidth="3" strokeLinecap="round" />
    </g>
    {/* Broken egg piece */}
    <g style={{ animation: "crack 0.5s ease-out forwards" }}>
      <path d="M108 218 Q118 200 132 210 Q120 225 108 218Z" fill="#f0dfa0" />
      <path d="M110 212 L118 205 L126 210" fill="none" stroke="#e0c870" strokeWidth="1.5" />
    </g>
  </svg>
);

export const LockIllustration = () => (
  <svg viewBox="0 0 320 260" width="320" height="260" xmlns="http://www.w3.org/2000/svg">
    <style>{`
      @keyframes shake { 0%,100%{transform:rotate(0)} 20%{transform:rotate(-8deg)} 40%{transform:rotate(8deg)} 60%{transform:rotate(-5deg)} 80%{transform:rotate(5deg)} }
      @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      .lock { animation: shake 2s ease-in-out infinite; transform-origin: center; }
      .warn { animation: pulse 1.5s ease-in-out infinite; }
    `}</style>
    <text x="20" y="185" fontFamily="Georgia,serif" fontSize="160" fontWeight="900"
      fill="none" stroke="#e8d5a3" strokeWidth="3" opacity="0.3">4</text>
    <text x="225" y="185" fontFamily="Georgia,serif" fontSize="160" fontWeight="900"
      fill="none" stroke="#e8d5a3" strokeWidth="3" opacity="0.3">1</text>
    <g className="lock">
      {/* Lock body */}
      <rect x="118" y="140" width="84" height="72" rx="14" fill="#e6a817" />
      <rect x="130" y="152" width="60" height="48" rx="8" fill="#c8890a" />
      {/* Keyhole */}
      <circle cx="160" cy="170" r="12" fill="#1a3a1a" />
      <rect x="155" y="170" width="10" height="18" rx="3" fill="#1a3a1a" />
      {/* Lock shackle */}
      <path d="M135 140 Q135 95 160 92 Q185 95 185 140" fill="none" stroke="#e6a817" strokeWidth="16" strokeLinecap="round" />
      <path d="M135 140 Q135 95 160 92 Q185 95 185 140" fill="none" stroke="#c8890a" strokeWidth="8" strokeLinecap="round" />
      {/* Warning icon */}
      <g className="warn">
        <polygon points="160,58 148,78 172,78" fill="#e63946" />
        <text x="160" y="76" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">!</text>
      </g>
    </g>
  </svg>
);

export const BadRequestIllustration = () => (
  <svg viewBox="0 0 320 260" width="320" height="260" xmlns="http://www.w3.org/2000/svg">
    <style>{`
      @keyframes wobble { 0%,100%{transform:rotate(-3deg)} 50%{transform:rotate(3deg)} }
      @keyframes blink2 { 0%,85%,100%{transform:scaleY(1)} 90%{transform:scaleY(0.05)} }
      .robot { animation: wobble 2.5s ease-in-out infinite; transform-origin: center; }
      .reye { animation: blink2 3s ease-in-out infinite; transform-origin:center; }
    `}</style>
    <text x="20" y="185" fontFamily="Georgia,serif" fontSize="160" fontWeight="900"
      fill="none" stroke="#e8d5a3" strokeWidth="3" opacity="0.3">4</text>
    <text x="215" y="185" fontFamily="Georgia,serif" fontSize="160" fontWeight="900"
      fill="none" stroke="#e8d5a3" strokeWidth="3" opacity="0.3">0</text>
    <g className="robot">
      {/* Antenna */}
      <line x1="160" y1="62" x2="160" y2="80" stroke="#78c8e0" strokeWidth="3" />
      <circle cx="160" cy="58" r="6" fill="#e63946" />
      {/* Head */}
      <rect x="125" y="80" width="70" height="58" rx="10" fill="#78c8e0" />
      <rect x="133" y="88" width="54" height="42" rx="6" fill="#4a9ab5" />
      {/* Eyes */}
      <g className="reye">
        <rect x="138" y="96" width="16" height="16" rx="4" fill="#1a3a4a" />
        <rect x="166" y="96" width="16" height="16" rx="4" fill="#1a3a4a" />
        <circle cx="146" cy="104" r="4" fill="#00e5ff" />
        <circle cx="174" cy="104" r="4" fill="#00e5ff" />
      </g>
      {/* Mouth — X shape for error */}
      <line x1="145" y1="118" x2="175" y2="122" stroke="#e63946" strokeWidth="3" strokeLinecap="round" />
      <line x1="150" y1="123" x2="170" y2="117" stroke="#e63946" strokeWidth="3" strokeLinecap="round" />
      {/* Ears */}
      <rect x="113" y="94" width="12" height="20" rx="4" fill="#5ab0cc" />
      <rect x="195" y="94" width="12" height="20" rx="4" fill="#5ab0cc" />
      {/* Body */}
      <rect x="128" y="140" width="64" height="52" rx="10" fill="#78c8e0" />
      <rect x="138" y="150" width="44" height="32" rx="6" fill="#4a9ab5" />
      {/* Chest light */}
      <circle cx="160" cy="166" r="8" fill="#e63946" opacity="0.9" />
      {/* Arms */}
      <rect x="104" y="142" width="22" height="12" rx="6" fill="#78c8e0" />
      <rect x="194" y="142" width="22" height="12" rx="6" fill="#78c8e0" />
      {/* Legs */}
      <rect x="135" y="192" width="18" height="24" rx="6" fill="#5ab0cc" />
      <rect x="167" y="192" width="18" height="24" rx="6" fill="#5ab0cc" />
    </g>
  </svg>
);

export const ForbiddenIllustration = () => (
  <svg viewBox="0 0 320 260" width="320" height="260" xmlns="http://www.w3.org/2000/svg">
    <style>{`
      @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      @keyframes glow { 0%,100%{opacity:0.6;r:44} 50%{opacity:1;r:48} }
      .ring { animation: spin 8s linear infinite; transform-origin:160px 155px; }
      .gring { animation: glow 2s ease-in-out infinite; transform-origin:160px 155px; }
    `}</style>
    <text x="20" y="185" fontFamily="Georgia,serif" fontSize="160" fontWeight="900"
      fill="none" stroke="#e8d5a3" strokeWidth="3" opacity="0.3">4</text>
    <text x="215" y="185" fontFamily="Georgia,serif" fontSize="160" fontWeight="900"
      fill="none" stroke="#e8d5a3" strokeWidth="3" opacity="0.3">3</text>
    {/* Glow */}
    <circle cx="160" cy="155" r="56" fill="#e63946" opacity="0.12" />
    <circle className="gring" cx="160" cy="155" r="44" fill="none" stroke="#e63946" strokeWidth="2" strokeDasharray="8 4" opacity="0.6" />
    {/* Spinning outer ring */}
    <circle className="ring" cx="160" cy="155" r="52" fill="none" stroke="#e63946" strokeWidth="3" strokeDasharray="20 12" opacity="0.4" />
    {/* No-entry circle */}
    <circle cx="160" cy="155" r="40" fill="#e63946" />
    <circle cx="160" cy="155" r="32" fill="#fff" />
    {/* Diagonal bar */}
    <line x1="132" y1="127" x2="188" y2="183" stroke="#e63946" strokeWidth="18" strokeLinecap="round" />
    {/* Center icon — eye with slash */}
    <circle cx="160" cy="155" r="14" fill="#e63946" opacity="0.15" />
    <path d="M144 155 Q160 140 176 155 Q160 170 144 155Z" fill="#e63946" />
    <circle cx="160" cy="155" r="5" fill="white" />
    <line x1="132" y1="127" x2="188" y2="183" stroke="#e63946" strokeWidth="18" strokeLinecap="round" />
  </svg>
);

// ══════════════════════════════════════════════════════
//  ErrorPage Component
// ══════════════════════════════════════════════════════

/**
 * @param {object}  props
 * @param {number|string} props.errorCode    - Kode error, misal 404, 400, 401, 403
 * @param {string}  props.description        - Pesan / deskripsi error
 * @param {React.ReactNode} props.errorImage - Ilustrasi / gambar yang ditampilkan
 * @param {function} props.onBack            - Handler tombol kembali (opsional)
 */
export default function ErrorPage({ errorCode, description, errorImage, onBack }) {
  const navigate = useNavigate();
  const errorMessages = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Page Not Found",
  };

  const label = errorMessages[errorCode] ?? "Unknown Error";

  const handleBack = onBack || (() => navigate("/"));

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(ellipse at 60% 40%, #0d4f3c 0%, #073d2e 60%, #041f18 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background circles */}
      <div style={{
        position: "absolute", width: 400, height: 400,
        borderRadius: "50%", border: "1px solid rgba(255,255,255,0.03)",
        top: "50%", left: "50%", transform: "translate(-50%,-50%)"
      }} />
      <div style={{
        position: "absolute", width: 600, height: 600,
        borderRadius: "50%", border: "1px solid rgba(255,255,255,0.02)",
        top: "50%", left: "50%", transform: "translate(-50%,-50%)"
      }} />

      {/* Illustration */}
      <div style={{ marginBottom: "0.5rem", filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.4))" }}>
        {errorImage}
      </div>

      {/* Error Label */}
      <p style={{
        color: "rgba(255,255,255,0.4)",
        fontSize: "0.75rem",
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        marginBottom: "0.25rem",
        fontWeight: 600,
      }}>
        Error {errorCode}
      </p>

      {/* Error Title */}
      <h1 style={{
        color: "#f5e8b0",
        fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
        fontWeight: 700,
        margin: "0 0 0.5rem",
        textAlign: "center",
        letterSpacing: "0.02em",
      }}>
        {label}
      </h1>

      {/* Description */}
      <p style={{
        color: "rgba(255,255,255,0.55)",
        fontSize: "0.95rem",
        textAlign: "center",
        maxWidth: 380,
        lineHeight: 1.65,
        marginBottom: "2rem",
      }}>
        {description}
      </p>

      {/* Back Button */}
      <button
        onClick={handleBack}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "transparent",
          border: "2px solid rgba(245,232,176,0.6)",
          color: "#f5e8b0",
          padding: "0.65rem 1.8rem",
          borderRadius: "9999px",
          fontSize: "0.95rem",
          fontWeight: 600,
          cursor: "pointer",
          transition: "all 0.2s ease",
          letterSpacing: "0.04em",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = "rgba(245,232,176,0.12)";
          e.currentTarget.style.borderColor = "#f5e8b0";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.borderColor = "rgba(245,232,176,0.6)";
        }}
      >
        ← Back To Home
      </button>
    </div>
  );
}

// ══════════════════════════════════════════════════════
//  Error Config Map
// ══════════════════════════════════════════════════════

export const ERROR_CONFIG = {
  404: {
    errorCode: 404,
    description: "Oops! It seems you followed a broken link. The page you're looking for has hatched and wandered off somewhere.",
    errorImage: <DinoIllustration />,
  },
  400: {
    errorCode: 400,
    description: "Your request couldn't be understood by the server. It looks like something went wrong with the data you sent. Please check and try again.",
    errorImage: <BadRequestIllustration />,
  },
  401: {
    errorCode: 401,
    description: "You need to be authenticated to access this resource. Please log in with valid credentials to continue.",
    errorImage: <LockIllustration />,
  },
  403: {
    errorCode: 403,
    description: "Access denied. You don't have permission to view this page. Contact your administrator if you believe this is a mistake.",
    errorImage: <ForbiddenIllustration />,
  },
};
