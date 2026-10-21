import { Heart, Tape } from "./Decor";

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
        <div className="contacts__heading">
          <img className="contacts__heading-img" src="/heading_yellow.svg" alt="" aria-hidden="true" />
          <span className="contacts__heading-text">Контакты</span>
        </div>
        <div className="contacts__paper">
          <img className="contacts__paper-img" src="/paper.svg" alt="" aria-hidden="true" />
          <div className="contacts__paper-content">
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
        </div>
      </div>

      <div className="contacts__note">
        <img className="contacts__note-img" src="/purple_decor.svg" alt="" aria-hidden="true" />
        <span className="contacts__note-text">Давайте превратим идеи в решения</span>
      </div>

      <div className="contacts__photo">
        <div className="contacts__photo-frame">
          <img className="contacts__photo-real" src="/images/contact.jpg" alt="" />
          <img className="contacts__photo-img" src="/frame_photo.svg"  />
        </div>
        <Tape color="lilac" className="contacts__tape--lilac" />
        <Tape color="yellow" className="contacts__tape--yellow" />
        <Heart className="contacts__heart" />
      </div>
    </section>
  );
}
