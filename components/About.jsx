import { Heart, Label, Polaroid, Tape } from "./Decor";

const tools = [
  { name: "Figma", mark: "F" },
  { name: "Adobe Illustrator", mark: "Ai" },
  { name: "Adobe Photoshop", mark: "Ps" },
];

export default function About() {
  return (
    <section className="about container" id="about">
      <Polaroid className="about__photo" src="/images/about.jpg" alt="Дарья за работой">
        <Tape color="lilac" className="about__tape--lilac" />
        <Tape color="yellow" className="about__tape--yellow" />
        <Heart className="about__heart" />
      </Polaroid>

      <div className="about__text">
        <Label variant={1} className="about__label">Обо мне</Label>
        <div className="paper tear tear--5">
          <p>
            Привет! Меня зовут Дарья, я UX/UI дизайнер уровня junior+.
            <br />
            Активно развиваюсь в сфере UX/UI дизайна: создаю удобные и понятные продукты. Мне важно,
            чтобы дизайн не только выглядел красиво, но и решал реальные задачи пользователей и бизнеса.
            Стремлюсь к профессиональному росту и интересным проектам
          </p>
        </div>
        <ul className="tools tear tear--6" aria-label="Инструменты">
          {tools.map((t) => (
            <li key={t.name} title={t.name} aria-label={t.name}>
              {t.mark}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
