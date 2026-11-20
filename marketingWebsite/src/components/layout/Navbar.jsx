import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, School } from "lucide-react";
import Button from "../ui/Button.jsx";
import { brand, navLinks } from "../../data/content.js";

function NavItem({ href, children, onClick }) {
  const cls = "text-sm font-medium text-ink/75 transition-colors hover:text-brand";
  return href.startsWith("/#")
    ? <a href={href} onClick={onClick} className={cls}>{children}</a>
    : <Link to={href} onClick={onClick} className={cls}>{children}</Link>;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold" onClick={close}>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-white"><School size={18} /></span>
          {brand.name}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {navLinks.map((l) => <NavItem key={l.label} href={l.href}>{l.label}</NavItem>)}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button as="a" href="#" variant="outline" className="!py-2">Login</Button>
          <Button as="a" href="/#cta" className="!py-2">Get a Free Demo</Button>
        </div>

        <button className="lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-white px-5 pb-5 lg:hidden">
          <nav className="flex flex-col gap-4 py-4" aria-label="Mobile">
            {navLinks.map((l) => <NavItem key={l.label} href={l.href} onClick={close}>{l.label}</NavItem>)}
          </nav>
          <div className="flex gap-3">
            <Button as="a" href="#" variant="outline" className="flex-1">Login</Button>
            <Button as="a" href="/#cta" onClick={close} className="flex-1">Get a Free Demo</Button>
          </div>
        </div>
      )}
    </header>
  );
}
