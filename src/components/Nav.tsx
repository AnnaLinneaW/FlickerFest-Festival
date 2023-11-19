import Link from 'next/link';
const Nav = () => {
  return (
    <nav className="nav w-full">
      <div className="z-10  w-full flex-col items-center justify-evenly font-mono text-sm  bg-gray-800">
        <ul className="flex flex-row items-center justify-evenly m-6 space-x-4">
          <li>
            <Link href="/" className="text-white hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/schedule" className="text-white hover:underline">
              Schedule
            </Link>
          </li>
          <li>
            <Link href="/tickets" className="text-white hover:underline">
              Tickets
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
