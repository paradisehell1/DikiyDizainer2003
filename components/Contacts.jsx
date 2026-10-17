import { Heart, Label, Polaroid, Tape } from "./Decor";

const Phone = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
  </svg>
);
const Mail = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" />
    <path d="m3 6 9 7 9-7" />
  </svg>
);
const Telegram = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M21 3 3 10.5l6 2.2L11 20l3-4.5L19 19 21 3Z" strokeLinejoin="round" />
    <path d="m9 12.7 12-9.7" />
  </svg>
);

const items = [
  { icon: <Phone />, text: "+7(953)-178-07-10", href: "tel:+79531780710" },
  { icon: <Mail />, text: "daria.ivanOva@yandex.ru", href: "mailto:daria.ivanOva@yandex.ru" },
  { icon: <Telegram />, text: "@mister_d_15", href: "https://t.me/mister_d_15" },
];

export default function Contacts() {
  return (
    <section className="contacts container" id="contacts">
      <div className="contacts__left">
        <Label variant={3} className="contacts__label">Контакты</Label>
        <div className="paper paper--plain tear tear--10">
          <ul>
            {items.map((i) => (
              <li key={i.text}>
                <a href={i.href}>
                  {i.icon}
                  <span>{i.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="contacts__note tear tear--4">
          <span>Давайте превратим идеи в решения</span>
        </p>
      </div>

      <Polaroid className="contacts__photo" src="/images/contact.jpg" alt="">
        <Tape color="lilac" style={{ top: -20, right: -26, width: 130, transform: "rotate(32deg)" }} />
        <Tape color="yellow" style={{ bottom: 40, left: -30, width: 130, transform: "rotate(-4deg)" }} />
        <Heart className="contacts__heart" />
      </Polaroid>
    </section>
  );
}
