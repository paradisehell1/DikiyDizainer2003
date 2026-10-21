import { Heart, Tape } from "./Decor";

export default function Hero() {
  return (
    <section className="hero" id="top">
     

      <div className="hero__name">
        <img
          className="hero__name-img"
          src="/purple_decore.svg"
          alt=""
          aria-hidden="true"
        />
        <h1 className="hero__name-text">
          Дарья
          <br />
          Иванова
        </h1>
      </div>
      <div className="hero__role">
        <img
          className="hero__role-img"
          src="/heading_yellow.svg"
          alt=""
          aria-hidden="true"
        />
        <span className="hero__role-text">UX/UI designer</span>
      </div>
      <Tape color="yellow" className="hero__tape--yellow" />

      <div className="hero__photo">
        <img
          className="hero__photo-img"
          src="/frame_photo_main.svg"
          alt="Дарья Иванова"
        />
      </div>
    </section>
  );
}
