const links = [
  { href: "#about", label: "Обо мне" },
  { href: "#cases", label: "Кейсы" },
  { href: "#contacts", label: "Контакты" },
];

export default function Header() {
  return (
    <header className="header container">
      <a href="#top" className="logo" aria-label="Иванова Дарья — наверх">
        <img src="/Стикеры%20для%20нежного%20скрапбукинга71%201.svg" alt="" aria-hidden="true" />
        <span className="logo__text">Иванова Дарья</span>
      </a>
      <nav aria-label="Основная навигация">
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
