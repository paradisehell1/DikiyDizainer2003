const links = [
  { href: "#about", label: "Обо мне" },
  { href: "#cases", label: "Кейсы" },
  { href: "#contacts", label: "Контакты" },
];

export default function Header() {
  return (
    <header className="header container">
      <a href="#top" className="logo tear tear--2" aria-label="Иванова Дарья — наверх">
        <span>Иванова Дарья</span>
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
