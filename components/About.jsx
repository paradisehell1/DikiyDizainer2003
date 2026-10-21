import { Heart, Tape } from "./Decor";

export default function About() {
  return (
    <section className="about container" id="about">
      <div className="about__photo">
        <img className="about__photo-img" src="/frame_photo.svg"  />
    
    
      </div>

      <div className="about__text">
        <div className="about__heading">
          <img className="about__heading-img" src="/Heading_purple.svg" alt="" aria-hidden="true" />
          <span className="about__heading-text">Обо мне</span>
        </div>
        <div className="about__paper">
          <img className="about__paper-img" src="/paper.svg" alt="" aria-hidden="true" />
          <p className="about__paper-text">
            Привет! Меня зовут Дарья, я UX/UI дизайнер уровня junior+.
            <br />
            Активно развиваюсь в сфере UX/UI дизайна: создаю удобные и понятные продукты. Мне важно,
            чтобы дизайн не только выглядел красиво, но и решал реальные задачи пользователей и бизнеса.
            <br />
            Стремлюсь к профессиональному росту и интересным проектам
          </p>
        </div>
        <div className="about__skills">
          <img className="about__skills-img" src="/skills.svg" alt="Инструменты: Figma, Adobe Illustrator, Adobe Photoshop" />
        </div>
      </div>
    </section>
  );
}
