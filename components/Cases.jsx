"use client";
import { useRef, useState } from "react";

// Сетка из SVG-«бумажек». У каждой можно менять размер и положение
// самой бумажки через style (width/height, top/left, transform).
// Геометрия и координаты фотки — общие для всех, задаются в CSS: .cases__item-photo.
const cases = [
  { id: 1, title: "Функция совместного просмотра для сервиса TVOЁ", href: "#", style: { width: "100%", top: 0, left: 0 } },
  { id: 2, title: "Сайт ресторана «Трактир на Гороховой»", href: "#", style: { width: "100%", top: 0, left: 0 } },
  { id: 3, title: "Внутренняя система управления сайтом для ресторана «Марио»", href: "#", style: { width: "100%", top: 0, left: 0 } },
];

export default function Cases() {
  const gridRef = useRef(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const el = gridRef.current;
    if (!el || !el.children.length) return;
    const stride = el.children[0].offsetWidth + 20; // ширина карточки + gap
    if (!stride) return;
    const index = Math.round(el.scrollLeft / stride);
    setActive(Math.min(cases.length - 1, Math.max(0, index)));
  };

  const scrollTo = (i) => {
    const el = gridRef.current;
    if (!el || !el.children[i]) return;
    const stride = el.children[0].offsetWidth + 20;
    el.scrollTo({ left: i * stride, behavior: "smooth" });
  };

  return (
    <section className="cases container" id="cases">
      <div className="cases__head">
        <div className="cases__heading">
          <img className="cases__heading-img" src="/Heading_cases.svg" alt="" aria-hidden="true" />
          <span className="cases__heading-text">Кейсы</span>
        </div>
      </div>
      <div className="cases__grid" ref={gridRef} onScroll={handleScroll}>
        {cases.map((c) => (
          <div key={c.id} className="cases__item" style={c.style}>
            <img className="cases__item-bg" src="/background_case.svg" alt="" aria-hidden="true" />
            <img className="cases__item-photo" src="/images/Твоё%201.png" alt="" />
            <div className="cases__item-text">
              <h3 className="cases__item-title">{c.title}</h3>
            </div>
            <div className="cases__item-link">
              <a href={c.href}>Смотреть кейс</a>
            </div>
          </div>
        ))}
      </div>
      <div className="cases__dots">
        {cases.map((c, i) => (
          <button
            key={c.id}
            type="button"
            className={`cases__dot${i === active ? " cases__dot--active" : ""}`}
            aria-label={`Кейс ${i + 1}`}
            aria-current={i === active ? "true" : undefined}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>
      <div className="cases__more">
        <a className="btn-outline" href="#">Смотреть все кейсы</a>
      </div>
    </section>
  );
}
