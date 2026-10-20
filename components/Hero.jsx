import { Heart, Tape } from "./Decor";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <img
        className="hero__band"
        src="/hero_decore.svg"
        alt=""
        aria-hidden="true"
      />

      <img
        className="hero__blob"
        src="/purple_decore.svg"
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
          src="/heading_yellow.svg"
          alt=""
          aria-hidden="true"
        />
        <span className="hero__role-text">UX/UI designer</span>
      </div>
      <Heart className="hero__heart" />

      <div className="hero__photo">
        <img
          className="hero__flower-img"
          src="/flower.svg"
          alt=""
          aria-hidden="true"
        />
        <div className="hero__photo-frame">
          <img
            className="hero__photo-real"
            src="/images/daria.jpg"
            alt="Дарья Иванова"
          />
          <img
            className="hero__photo-img"
            src="/frame_photo_main.svg"
            alt=""
            aria-hidden="true"
          />
        </div>
        <Tape color="yellow" className="hero__tape--yellow" />
        <Tape color="lilac" className="hero__tape--lilac-top" />
        <Tape color="lilac" className="hero__tape--lilac-bottom" />
        <Heart className="hero__heart hero__heart--right" />
      </div>
    </section>
  );
}
