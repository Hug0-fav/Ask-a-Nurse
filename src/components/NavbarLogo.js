import Link from "next/link";
import Image from "next/image";

export default function NavbarLogo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      {/* Logo */}
      <Image src="/name.png" alt="Jennie’s Blog Logo" width={128} height={32} />
    </Link>
  );
}
