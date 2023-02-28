import { ReactNode } from "react";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

interface Props {
  children: ReactNode;
  href: Url;
}

const linkClass = "underline hover:text-blue-400";

const CustomLink = ({ children, href }: Props) => {
  return (
    <Link className={linkClass} href={href}>
      {children}
    </Link>
  );
};

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100">
      <p className="text-3xl font-semi">QRCode Generator</p>
      <ul className="flex items-center gap-4">
        <li>
          <CustomLink href="/qrcode">API</CustomLink>
        </li>
        <li>
          <CustomLink href="/settings">Settings</CustomLink>
        </li>
        <li>
          <CustomLink href="/">Logout</CustomLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
