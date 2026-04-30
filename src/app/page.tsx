import Header from "./components/Header/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans overflow-hidden">
      <Header />


      <section className="relative flex items-stretch min-h-[calc(100vh-140px)]">
        <div className="flex flex-col justify-center w-1/2 px-16 pr-8 py-16 z-10 gap-10 bg-white">
          <h1 className="text-[98px] font-semibold leading-none text-black tracking-tight">
            Find Your
            <br />
            Sole Mate
            <br />
            With Us
          </h1>
          <p className="text-[#000000] opacity-70 font-normal text-[28px]   leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consectetur <br />
            Adipiscing Elit, Sed Do Eiusmod.
          </p>
          <button className="bg-black text-white text-[28px] font-semibold w-60 h-22.5 px-8 py-4 hover:scale-105 transition-all duration-200 cursor-pointer">
            Shop Now
          </button>
        </div>

        <div className="relative flex items-center justify-center w-1/2 bg-[#e7e7e7] overflow-hidden">
         
          <div
            className="absolute inset-0 flex items-center justify-start overflow-hidden"
            aria-hidden="true"
          >
            <span
              className="text-[170px] font-black text-white leading-none tracking-tight"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
                opacity: 1,
                marginLeft: "-43px",
              }}
            >
              ULTIMATE
            </span>
          </div>

          <div className="absolute w-130 h-130 rounded-full bg-white/60 left-1/2 top-1/2 -translate-x-1/2 translate-y-[-55%]" />

          <div className="relative z-10 flex flex-col items-center -mt-12">
            <div className="w-242.5 h-145 relative">
              <img
                src="/slickpro.png"
                alt="Trendy Slick Pro"
                className="object-contain drop-shadow-2xl hover:rotate-10 transition-all duration-1000"
              />
            </div>

            <div className="text-center mt-4">
              <h2 className="text-[38px] font-medium text-black">Trendy Slick Pro</h2>
              <p className="text-[32px] font-medium text-[#000000] opacity-50">₹ 3999.00</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}