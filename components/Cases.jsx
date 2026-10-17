import { Heart, Label } from "./Decor";

// Положите превью в public/images/ и укажите ссылки на кейсы
const cases = [
  { title: "Функция совместного просмотра для сервиса TVOЁ", image: "/images/case-tvoe.png", href: "#" },
  { title: "Сайт ресторана «Трактир на Гороховой»", image: "/images/case-traktir.png", href: "#" },
  { title: "Внутренняя система управления сайтом для ресторана «Марио»", image: "/images/case-mario.png", href: "#" },
];

export default function Cases() {
  return (
    <section className="cases container" id="cases">
      <div className="cases__head">
        <Label variant={3}>Кейсы</Label>
        <a className="btn-outline" href="#">Смотреть все кейсы</a>
      </div>
      <ul className="cases__grid">
        {cases.map((c) => (
          <li key={c.title} className="case tear tear--9">
            <div className="case__shot">
              <img src={c.image} alt="" loading="lazy" />
            </div>
            <Heart className="case__heart" />
            <h3>{c.title}</h3>
            <a href={c.href} className="case__link">Смотреть кейс</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
