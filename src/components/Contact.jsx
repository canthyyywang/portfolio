import { Mail, MessageSquare, Phone } from 'lucide-react';

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactItems = [
    {
      id: 'email',
      icon: <Mail className="w-5 h-5" aria-hidden="true" />,
      label: 'Email',
      value: '1978673140@qq.com',
      href: 'mailto:1978673140@qq.com',
    },
    {
      id: 'phone',
      icon: <Phone className="w-5 h-5" aria-hidden="true" />,
      label: 'Phone',
      value: '15271882112',
      href: 'tel:+8615271882112',
    },
    {
      id: 'wechat',
      icon: <MessageSquare className="w-5 h-5" aria-hidden="true" />,
      label: 'WeChat',
      value: 'Canthy116',
      href: null,
    },
  ];

  return (
    <footer
      id="contact"
      className="bg-slate-900 text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 rounded-t-[2rem] sm:rounded-t-[3rem] md:rounded-t-[5rem]"
      role="contentinfo"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl font-black mb-6 sm:mb-8 text-blue-400"
            >
              联系我
            </h2>
            <p className="text-slate-400 mb-10 sm:mb-12 max-w-md text-sm sm:text-base leading-relaxed">
              目前正在寻求体验设计专家、AI交互设计等相关职位机会。欢迎交流关于 AI 体验架构设计的见解。
            </p>

            <div className="space-y-4 sm:space-y-6">
              {contactItems.map((item) => {
                const content = (
                  <>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                        {item.label}
                      </div>
                      <div className="text-base sm:text-lg text-slate-200">
                        {item.value}
                      </div>
                    </div>
                  </>
                );

                const className =
                  'flex items-center gap-3 sm:gap-4 group cursor-pointer rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 p-1 -m-1';

                if (item.href) {
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      className={className}
                      aria-label={`${item.label}: ${item.value}`}
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div key={item.id} className={className}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col justify-end items-start md:items-end">
            <div className="text-left md:text-right space-y-3 sm:space-y-4">
              <p className="text-lg sm:text-xl italic font-light text-slate-300">
                &ldquo;感谢您的时间与阅读。&rdquo;
              </p>
              <p
                className="text-4xl sm:text-5xl md:text-6xl font-black opacity-10"
                aria-hidden="true"
              >
                WANG QIMENG
              </p>
            </div>
            <button
              type="button"
              onClick={scrollToTop}
              className="mt-10 sm:mt-12 text-sm font-bold text-slate-500 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded"
              aria-label="返回页面顶部"
            >
              BACK TO TOP ↑
            </button>
          </div>
        </div>

        <div className="mt-16 sm:mt-24 pt-6 sm:pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between text-slate-500 text-xs gap-4">
          <div>© 2025 WANG QIMENG. ALL RIGHTS RESERVED.</div>
          <div>BUILT FOR AI-NATIVE EXPERIENCE DESIGN</div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
