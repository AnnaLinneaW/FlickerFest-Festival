import Image from 'next/image';
import Link from 'next/link';
import 'src/app/globals.css';

const Header: React.FC = () => {
  return (
    <div className="bg-black-700 text-center flex items-center justify-center mt-8">
      <Link href="/">
        <Image src={'/logo-74.svg'} alt={'Logo'} width={50} height={100} />
        <h1 className="text-4xl ml-4 header">FlickerFest</h1>
      </Link>
    </div>
  );
};

export default Header;
