import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link
        to="/"
        className="rounded-xl border-0 bg-black p-3 font-bold tracking-widest text-white"
      >
        PizzaPe!🍕
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
