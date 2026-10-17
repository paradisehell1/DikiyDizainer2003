import { Flower, Heart, Label, Tape } from "./Decor";

export default function Experience() {
  return (
    <section className="exp container">
      <div className="exp__col exp__col--edu">
        <Label color="yellow" variant={2} className="exp__label">Образование</Label>
        <div className="paper tear tear--7">
          <h3 className="year">
            2021-2025 <span className="brand brand--guap">ГУАП</span>
          </h3>
          <p>Санкт-Петербургский государственный университет аэрокосмического приборостроения</p>
          <p>Направление «Программная инженерия»</p>

          <Label as="h3" variant={3} className="exp__sub">Дополнительно</Label>

          <h3 className="year">
            2023 <span className="brand brand--loft">Loftschool</span>
          </h3>
          <p>Loftschool</p>
          <p>Курс «UX/UI дизайн: базовый уровень»</p>

          <h3 className="year">
            2024 <span className="brand brand--ya">Практикум</span>
          </h3>
          <p>Яндекс.Практикум</p>
          <p>Курс «Дизайнер интерфейсов» (9 месяцев)</p>

          <Heart className="exp__heart" />
          <Tape color="lilac" className="exp__tape--lilac" />
        </div>
      </div>

      <div className="exp__col exp__col--work">
        <Flower className="exp__flower" />
        <Label color="lilac" variant={4} className="exp__label">Опыт работы</Label>
        <Heart className="exp__heart exp__heart--top" />
        <div className="paper tear tear--8">
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
          <Tape color="yellow" className="exp__tape--yellow" />
        </div>
      </div>
    </section>
  );
}
