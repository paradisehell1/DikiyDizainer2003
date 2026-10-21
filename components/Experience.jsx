import { Heart, Tape } from "./Decor";

export default function Experience() {
  return (
    <section className="exp container">
      <div className="exp__col exp__col--edu">
        <div className="exp__role">
          <img className="exp__role-img" src="/heading_yellow.svg" alt="" aria-hidden="true" />
          <span className="exp__role-text">Образование</span>
        </div>
        <div className="exp__paper exp__paper--edu">
          <div className="exp__paper-img">
            <img className="exp__paper-svg" src="/paper_education.svg" alt="" aria-hidden="true" />
            <div className="exp__paper-content">
              <h3 className="year">
                2021-2025 <img className="brand--guap-img" src="/GUAP.svg" alt="ГУАП" />
              </h3>
              <p>Санкт-Петербургский государственный университет аэрокосмического приборостроения</p>
              <p>Направление «Программная инженерия»</p>

              <div className="exp__sub">
                <img className="exp__sub-img" src="/Heading_purple.svg" alt="" aria-hidden="true" />
                <span className="exp__sub-text">Дополнительно</span>
              </div>

              <h3 className="year">
                2023 <img className="brand--loft-img" src="/loftschool%201.svg" alt="Loftschool" />
              </h3>
              <p>Loftschool</p>
              <p>Курс «UX/UI дизайн: базовый уровень»</p>

              <h3 className="year">
                2024 <img className="brand--ya-img" src="/yandex-practicum(2025)-full%201.svg" alt="Яндекс.Практикум" />
              </h3>
              <p>Яндекс.Практикум</p>
              <p>Курс «Дизайнер интерфейсов» (9 месяцев)</p>
            </div>
          </div>
          <Tape color="lilac" className="exp__tape--lilac" />
        </div>
      </div>

      <div className="exp__col exp__col--work">
        <img className="exp__flower-img" src="/flower.svg" alt="" aria-hidden="true" />
        <div className="exp__label">
          <img className="exp__label-img" src="/heading_purple2.svg" alt="" aria-hidden="true" />
          <span className="exp__label-text">Опыт работы</span>
        </div>
        <div className="exp__paper exp__paper--work">
          <div className="exp__paper-img">
            <img className="exp__paper-svg" src="/paper_work_experience.svg" alt="" aria-hidden="true" />
            <div className="exp__paper-content">
              <h3>U-FUTURE</h3>
              <p className="strong">Январь 2025-Май 2025</p>
              <h4>Стажер UX/UI дизайнер</h4>
              <p>Проектировала лендинги для различных сфер бизнеса: e-commerce, недвижимости и туризма</p>

              <h3>Ресторанный холдинг</h3>
              <p className="strong">Апрель 2025-Август 2026</p>
              <h4>UX/UI дизайнер+проект-менеджер</h4>
              <p>
                Разрабатывала сайты для ресторанов и проектировала интерфейсы внутренних систем
                управления сайтами.
                <br />
                Вела проекты от постановки задач до запуска, взаимодействуя с заказчиками и разработчиками
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
