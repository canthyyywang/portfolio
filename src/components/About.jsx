import { useMemo } from 'react';
import {
  BarChart3,
  Cpu,
  Layers,
  Target,
  Workflow,
} from 'lucide-react';

const RadarChart = ({ stats }) => {
  const size = 280;
  const center = size / 2;
  const radius = size * 0.4;
  const angleStep = (Math.PI * 2) / stats.length;

  const points = useMemo(() => {
    return stats.map((s, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const r = (s.value / 5) * radius;
      return {
        x: center + r * Math.cos(angle),
        y: center + r * Math.sin(angle),
      };
    });
  }, [stats, radius, center, angleStep]);

  const pathData =
    `M ${points[0].x} ${points[0].y} ` +
    points.slice(1).map((p) => `L ${p.x} ${p.y}`).join(' ') +
    ' Z';

  return (
    <div className="relative flex flex-col items-center" role="img" aria-label="个人能力雷达图">
      <svg width={size} height={size} className="overflow-visible" aria-hidden="true">
        {/* Grids */}
        {[1, 2, 3, 4, 5].map((tick) => (
          <path
            key={tick}
            d={
              stats
                .map((_, i) => {
                  const angle = i * angleStep - Math.PI / 2;
                  const r = (tick / 5) * radius;
                  const x = center + r * Math.cos(angle);
                  const y = center + r * Math.sin(angle);
                  return (i === 0 ? 'M' : 'L') + ` ${x} ${y}`;
                })
                .join(' ') + ' Z'
            }
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="1"
          />
        ))}
        {/* Axes */}
        {stats.map((_, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="#e2e8f0"
              strokeWidth="1"
            />
          );
        })}
        {/* Data Path */}
        <path
          d={pathData}
          fill="rgba(37, 99, 235, 0.2)"
          stroke="#2563eb"
          strokeWidth="2"
        />
        {/* Labels */}
        {stats.map((s, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const labelR = radius + 25;
          const x = center + labelR * Math.cos(angle);
          const y = center + labelR * Math.sin(angle);
          return (
            <text
              key={s.label}
              x={x}
              y={y}
              fontSize="10"
              textAnchor="middle"
              className="fill-slate-600 font-medium"
              style={{ dominantBaseline: 'middle' }}
            >
              {s.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

const About = () => {
  const radarStats = [
    { label: '数据洞察与策略', value: 5 },
    { label: '全链路体验设计', value: 5 },
    { label: '设计系统与组件库', value: 5 },
    { label: 'AI 交互设计', value: 4.5 },
    { label: '跨职能协作影响力', value: 5 },
    { label: '设计工具与AI应用', value: 4 },
  ];

  const philosophyItems = [
    {
      icon: <BarChart3 className="w-5 h-5" aria-hidden="true" />,
      title: '数据层',
      desc: '通过全局指标与漏斗结构定位系统性体验问题，而非局部修补。',
    },
    {
      icon: <Workflow className="w-5 h-5" aria-hidden="true" />,
      title: '决策层',
      desc: '将模糊用户意图拆解为可被模型理解与反馈的结构化路径。',
    },
    {
      icon: <Cpu className="w-5 h-5" aria-hidden="true" />,
      title: '系统层',
      desc: '通过高复用组件与交互范式，降低模型不可控带来的认知成本。',
    },
  ];

  const goals = [
    { label: '未来目标：需求定义前置', icon: <Target className="w-4 h-4" aria-hidden="true" /> },
    { label: '未来目标：跨职能决策建模', icon: <Layers className="w-4 h-4" aria-hidden="true" /> },
  ];

  const dataCards = [
    { val: '+10%', label: '核心转化漏斗提升', desc: '通过数据洞察推动需求升级' },
    { val: '50%', label: '研发交付效率提升', desc: '构建覆盖 2 条业务线的 Chat 组件库' },
    { val: '75%', label: '运营素材产出提升', desc: '成功引入 AIGC 设计工作流' },
    { val: '2+', label: '团队覆盖与培训', desc: '撰写手册并组织多场业务培训' },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-slate-50/50"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left: Portrait & Philosophy */}
          <div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start mb-10 md:mb-12">
              <div className="relative flex-shrink-0 group">
                <div
                  className="absolute -inset-2 bg-gradient-to-br from-blue-600 to-blue-300 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"
                  aria-hidden="true"
                />
                <div className="relative w-40 h-52 sm:w-48 sm:h-64 overflow-hidden rounded-2xl border border-white shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                    alt="王启萌个人肖像照"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x533?text=Portrait';
                      e.target.alt = '头像占位图';
                    }}
                  />
                </div>
              </div>

              <div className="pt-0 md:pt-2">
                <h2
                  id="about-heading"
                  className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 flex items-center gap-3"
                >
                  <span className="w-8 h-1 bg-blue-600 rounded-full" aria-hidden="true" />
                  设计理解
                </h2>
                <p className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
                  体验设计不仅是界面优化，<br />
                  而是对模型不确定性的结构化收敛。
                </p>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {philosophyItems.map((item, idx) => (
                <div key={item.title} className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="mt-10 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm italic text-slate-600 text-sm leading-relaxed border-l-4 border-l-blue-600">
              &ldquo;我的工作重点不是&ldquo;画界面&rdquo;，而是构建可持续运转的 AI 体验架构。&rdquo;
            </blockquote>
          </div>

          {/* Right: Radar & Stats */}
          <div className="flex flex-col items-center">
            <div className="w-full bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-sm relative mb-6 sm:mb-8">
              <div className="mb-6 sm:mb-8 text-center">
                <h3 className="text-base sm:text-lg font-bold text-slate-800">
                  个人能力雷达
                </h3>
                <p className="text-xs text-slate-500">Capabilities Radar Chart</p>
              </div>
              <div className="flex justify-center">
                <RadarChart stats={radarStats} />
              </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-3 sm:gap-4">
              {goals.map((goal, i) => (
                <div
                  key={goal.label}
                  className="p-3 sm:p-4 rounded-xl bg-blue-600 text-white flex items-center gap-2 sm:gap-3"
                >
                  {goal.icon}
                  <span className="text-xs font-medium leading-tight">{goal.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Data Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 md:mt-20">
          {dataCards.map((card, i) => (
            <div
              key={card.label}
              className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-100 text-center hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300"
            >
              <div className="text-2xl sm:text-3xl font-black text-blue-600 mb-1 tracking-tight">
                {card.val}
              </div>
              <div className="text-sm font-bold text-slate-800 mb-2">{card.label}</div>
              <div className="text-xs text-slate-500 leading-relaxed">{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
