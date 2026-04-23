import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-between px-8 py-5 bg-white">
        <div className="text-2xl font-black text-[#000000]">
            Slick
        </div>
        <nav className="flex items-center gap-8">
            <ul className="flex ">
                <li><a href="/" className="text-[24px] text-[#000000] font-normal">Home</a></li>
                <li><a href="/Shop" className="text-[24px] text-[#000000] font-normal">Shop</a></li>
                <li><a href="/Collection" className="text-[24px] text-[#000000] font-normal">Collection</a></li>
                <li><a href="/customize" className="text-[24px] text-[#000000] font-normal ">Customize</a></li>
            </ul>
        </nav>
        <div className="flex items-center gap-5 ">
            <div>
                <img src="/search.png" alt="" className="w-6 h-6" />
            </div>
             <div>
                <img src="/bag.png" alt="" className="w-6 h-6" />
            </div>
        </div>
    </div>
  );
}
