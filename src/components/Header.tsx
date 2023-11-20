import Image from 'next/image';
import Link from 'next/link';
import 'src/app/globals.css';

const Header: React.FC = () => {
  return (
    <div
      className="text-center flex items-left justify-left pt-4 pb-4 pl-2"
      style={{
        backgroundImage: `url(/img/The_Killing_of_A_Sacred_Deer_poster.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: '50% -70%',
      }}
    >
      <Link href="/">
        <Image src={'/logo-74.svg'} alt={'Logo'} width={50} height={100} />
        <h1 className="text-4xl ml-4 header">FlickerFest</h1>
      </Link>
    </div>
  );
};

export default Header;
