// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="navbar">
      <div className="container">
        <Link href="/" className="brand">
          MyPortfolio
        </Link>
        <nav>
          <ul className="nav-list">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
