import Link from 'next/link';
const Nav = () => {
  return (
    <nav className="nav w-full">
      <div className="z-10  w-full flex-col items-center justify-evenly font-mono text-m  bg-gray-800">
        <ul className="flex flex-row items-center justify-evenly space-x-4">
          <li>
            <Link href="/" className="text-white hover:underline">
              Hem
            </Link>
          </li>
          <li>
            <Link href="/schedule" className="text-white hover:underline">
              Program
            </Link>
          </li>
          <li>
            <Link href="/tickets" className="text-white hover:underline">
              Biljetter
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
