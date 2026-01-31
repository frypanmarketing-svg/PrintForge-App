import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <Link href="/">
          <img src="/printforge-logo.png"></img>
        </Link>

        <nav>
          <ul>
            <li>
              <Link href="/3d-models">3D MODELS</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
