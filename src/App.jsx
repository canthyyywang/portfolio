import { Navbar, Hero, About, Projects, Contact } from './components';

function App() {
  return (
    <div
      className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-700"
      style={{ fontFamily: '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif' }}
    >
      <a
        href="#home"
        className="skip-link"
      >
        跳到主内容
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
