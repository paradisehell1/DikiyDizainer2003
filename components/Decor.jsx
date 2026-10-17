// Декоративные элементы: скотч, сердечко, цветок, заголовок-стикер, полароид.

export function Tape({ color = "lilac", className = "", style }) {
  const src =
    color === "yellow"
      ? "/Стикеры%20для%20нежного%20скрапбукинга41%204.svg"
      : "/Стикеры%20для%20нежного%20скрапбукинга51%202.svg";
  return (
    <img
      className={`tape-sticker ${className}`}
      style={style}
      src={src}
      alt=""
      aria-hidden="true"
    />
  );
}

export function Heart({ className = "", style }) {
  return (
    <img
      className={`heart ${className}`}
      style={style}
      src="/Стикеры%20для%20нежного%20скрапбукинга91%202.svg"
      alt=""
      aria-hidden="true"
    />
  );
}

export function Flower({ className = "", style }) {
  return (
    <svg className={`flower ${className}`} style={style} viewBox="0 0 120 150" aria-hidden="true">
      <path d="M60 60 C62 95 55 120 50 148" stroke="#8a6a1c" strokeWidth="3" fill="none" strokeLinecap="round" />
      {Array.from({ length: 12 }).map((_, i) => (
        <ellipse
          key={i}
          cx="60"
          cy="34"
          rx="5"
          ry="22"
          fill="#f0b533"
          stroke="#c98a12"
          strokeWidth="1"
          transform={`rotate(${i * 30} 60 56)`}
        />
      ))}
      <circle cx="60" cy="56" r="9" fill="#a9701a" />
    </svg>
  );
}

// Заголовок-стикер на рваной бумаге
export function Label({ children, color = "lilac", variant = 1, className = "", as: Tag = "h2" }) {
  return (
    <Tag className={`label label--${color} tear tear--${variant} ${className}`}>
      <span>{children}</span>
    </Tag>
  );
}

// Рамка-полароид со слотом под фото
export function Polaroid({ src, alt = "", className = "", children }) {
  return (
    <div className={`polaroid ${className}`}>
      <div className="polaroid__inner">
        {src ? <img src={src} alt={alt} /> : <div className="polaroid__empty" aria-hidden="true" />}
      </div>
      {children}
    </div>
  );
}
