import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 'platform',
      tag: 'Platform',
      title: 'AI 开放平台体验重塑',
      subtitle: '从获客漏斗重塑到复杂编排破局，解决开发者工具链路断裂问题。',
    },
    {
      id: 'system',
      tag: 'System',
      title: '智能化 Chat 组件库',
      subtitle: '用结构化交互收敛 AI 不确定性，建立跨业务线的交互范式。',
    },
    {
      id: 'empowerment',
      tag: 'Empowerment',
      title: '超越边界的体验赋能',
      subtitle: 'AI 辅助设计工具链的落地实践，提升团队整体产出效率与质量。',
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <h2
              id="projects-heading"
              className="text-2xl sm:text-3xl font-black mb-2 sm:mb-4 flex items-center gap-3"
            >
              <span className="w-8 h-1 bg-blue-600 rounded-full" aria-hidden="true" />
              精选案例
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Selected Case Studies of 2025
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 sm:px-4 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-widest">
              Experience Design
            </span>
            <span className="px-3 sm:px-4 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-widest">
              AI Agent
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              tag={project.tag}
              title={project.title}
              subtitle={project.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
