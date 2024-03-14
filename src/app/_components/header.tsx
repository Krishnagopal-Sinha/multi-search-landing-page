import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-10 mt-8">
      <Link href="/" className="hover:underline">
      Multi Search NewTab
      </Link>

    </h2>
  );
};

export default Header;
