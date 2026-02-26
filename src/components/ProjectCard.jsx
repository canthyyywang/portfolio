import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ title, subtitle, tag }) => (
  <article
    className="group relative bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 cursor-pointer overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
    tabIndex={0}
  >
    <div
      className="absolute top-0 left-0 w-1 h-0 bg-blue-600 group-hover:h-full transition-all duration-500"
      aria-hidden="true"
    />
    <div className="flex justify-between items-start mb-3 sm:mb-4">
      <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">
        {tag}
      </span>
      <ArrowRight
        className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all flex-shrink-0"
        aria-hidden="true"
      />
    </div>
    <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
      {title}
    </h3>
    <p className="text-slate-600 text-sm leading-relaxed">{subtitle}</p>
    <div
      className="mt-6 sm:mt-8 h-24 sm:h-32 bg-slate-50 rounded-lg flex items-center justify-center border border-dashed border-slate-200"
      aria-hidden="true"
    >
      <span className="text-slate-400 text-xs italic">Project Visual Preview Coming Soon</span>
    </div>
  </article>
);

export default ProjectCard;
