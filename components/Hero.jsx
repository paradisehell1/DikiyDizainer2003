import { Heart, Tape } from "./Decor";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <img
        className="hero__band"
        src="/Стикеры%20для%20нежного%20скрапбукинга81%201.svg"
        alt=""
        aria-hidden="true"
      />

      <img
        className="hero__blob"
        src="/Стикеры-для-нежного-скрапбукинга11%202.svg"
        alt=""
        aria-hidden="true"
      />
      <h1 className="hero__name">
        Дарья
        <br />
        Иванова
      </h1>
      <div className="hero__role">
        <img
          className="hero__role-img"
          src="/Description.svg"
          alt=""
          aria-hidden="true"
        />
        <span className="hero__role-text">UX/UI designer</span>
      </div>
      <Heart className="hero__heart" />

      <div className="hero__photo">
        <img
          className="hero__flower-img"
          src="/Стикеры%20для%20нежного%20скрапбукинга61%202.svg"
          alt=""
          aria-hidden="true"
        />
        <img
          className="hero__photo-img"
          src="/Стикеры%20для%20нежного%20скрапбукинга31%202.svg"
          alt="Дарья Иванова"
        />
        <Tape color="yellow" className="hero__tape--yellow" />
        <Tape color="lilac" className="hero__tape--lilac-top" />
        <Tape color="lilac" className="hero__tape--lilac-bottom" />
        <Heart className="hero__heart hero__heart--right" />
      </div>
    </section>
  );
}
