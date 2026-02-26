import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const tags = ['数据驱动', '设计工程化', '跨职能协作'];

  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center px-4 sm:px-6 overflow-hidden"
      aria-label="欢迎区域"
    >
      {/* Background decor */}
      <div
        className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-50 rounded-full blur-[120px] opacity-60"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[30%] bg-blue-100 rounded-full blur-[100px] opacity-40"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full relative z-10 pt-16 sm:pt-20">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold mb-6 sm:mb-8 animate-fade-in"
          role="status"
          aria-label="作品集年份 2025-2026"
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
          </span>
          PORTFOLIO 2025-2026
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter text-slate-900 mb-4 sm:mb-6 leading-none">
          王启萌 <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            UI/UX DESIGNER
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-500 mb-8 sm:mb-12 max-w-2xl font-light leading-relaxed">
          在高复杂度 AI 系统中，设计人类与模型的责任边界与协作路径。
        </p>

        <div className="flex flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-16">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-white border border-slate-200 text-slate-600 text-xs sm:text-sm font-medium hover:border-blue-400 transition-colors shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={scrollToAbout}
          className="flex items-center gap-3 sm:gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-lg"
          aria-label="向下滚动到关于我"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900 flex items-center justify-center text-white group-hover:bg-blue-600 transition-all duration-300">
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
          </div>
          <span className="font-bold tracking-widest text-xs sm:text-sm uppercase">
            Explore My Vision
          </span>
        </button>
      </div>
    </header>
  );
};

export default Hero;
