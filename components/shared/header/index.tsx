import Image from 'next/image';
import Link from 'next/link';
import Menu from './menu';

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href={'/'} className="flex-start ml-4">
            <Image
              src={'/images/logo.webp'}
              alt="logo"
              height={48}
              width={48}
              priority={true}
            />
          </Link>
          <span>Pet Care </span>
        </div>
        <div className="hidden md:block">
          <input placeholder="search" />
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
