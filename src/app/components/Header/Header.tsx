import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-between px-16 py-10 bg-white">
        <div className="text-[38px] font-black tracking-tight select-none text-[#000000]">
            Slick
        </div>
        <nav className="flex items-center justify-center gap-12">
            <a href="/" className="text-[24px] text-[#000000] font-normal hover:text-gray-800 transition-all duration-200">Home</a>
            <a href="/Shop" className="text-[24px] text-[#000000] font-normal hover:text-gray-800 transition-all duration-200">Shop</a>
            <a href="/Collection" className="text-[24px] text-[#000000] font-normal hover:text-gray-800 transition-all duration-200">Collection</a>
            <a href="/customize" className="text-[24px] text-[#000000] font-normal hover:text-gray-800 transition-all duration-200 ">Customize</a>
        </nav>
        <div className="flex items-center justify-center gap-8 ">
            <div>
                <img src="/search.png" alt="search" className="w-7 h-7" />
            </div>
             <div>
                <img src="/cart.png" alt="cart" className="w-7 h-7" />
            </div>
        </div>
    </div>
  );
}
