import Link from 'next/link';
import Person from "@mui/icons-material/Person";
import Menu from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";


export default function Header() {
  return (
    <div className='fixed left-0 top-0 w-full ease-in duration-300 bg-slate-600'>
      <div className='flex justify-between items-center xl:justify-center p-4 text-white'>
        <div className='border px-5 py-2'>
          <Link href="/">
            <div>
              PoS Sistem
            </div>
          </Link>
        </div>
        <div className='block xl:hidden'>
          <IconButton size="small" className='hover:bg-white hover:text-slate-600 text-white'>
            <Menu />
          </IconButton>
        </div>
        <div className='fixed right-0 mr-5 hidden xl:flex justify-center items-center'>
          <h1 className='mr-4'>Merhaba, Hesabınıza giriş yapın</h1>
          <Link href="/profile" className='mr-4'>
            <IconButton size="small" className='hover:bg-white hover:text-slate-600 text-white'>
              <Person />
            </IconButton>
          </Link>
          <Link href="/registration" className='border px-5 py-2'>
            Abone Olun
          </Link>
        </div>
      </div>
    </div>
  );
}
