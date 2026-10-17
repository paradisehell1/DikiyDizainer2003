import { Flower, Heart, Polaroid, Tape } from "./Decor";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__band hero__band--yellow" aria-hidden="true" />
      <div className="hero__band hero__band--lilac" aria-hidden="true" />

      <div className="hero__blob tear tear--big" aria-hidden="true" />
      <h1 className="hero__name">
        Дарья
        <br />
        Иванова
      </h1>
      <p className="hero__role tear tear--3">
        <span>UX/UI designer</span>
      </p>
      <Heart className="hero__heart" />

      <div className="hero__photo">
        <div className="hero__photo-yellow tear tear--4" aria-hidden="true" />
        <Flower className="hero__flower" />
        <Polaroid src="/images/daria.jpg" alt="Дарья Иванова">
          <Tape color="yellow" style={{ top: -22, left: 40, width: 120, transform: "rotate(-4deg)" }} />
          <Tape color="lilac" style={{ top: -26, right: 20, width: 110, transform: "rotate(8deg)" }} />
          <Tape color="lilac" style={{ bottom: -18, right: 30, width: 130, transform: "rotate(-6deg)" }} />
        </Polaroid>
        <Heart className="hero__heart hero__heart--right" />
      </div>
    </section>
  );
}
