export default function BrutalistButton() {
    return (
      <button className="relative flex items-center group rounded-sm brutalist-button w-[169px] h-[58px] bg-black text-white font-bold border-4 border-white outline outline-4 outline-black shadow-[6px_6px_0_#00a4ef] transition-all duration-100 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none active:bg-white active:text-black active:border-black overflow-hidden">
  
        {/* Button Text */}
        <div className="flex flex-col leading-[1.2] transform transition-transform group-hover:skew-x-[-5deg] group-active:skew-x-[5deg]">
          <span className="text-[16px] uppercase ml-3">Joint Ventures</span>
        </div>
  
        {/* Sliding Animation */}
        <div className="absolute inset-0 left-[-100%] bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 group-hover:opacity-100 animate-slide"></div>
      </button>
    );
  }
  