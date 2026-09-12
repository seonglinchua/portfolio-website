import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../sections/Hero';
import { Pillars } from '../sections/Pillars';
import { FeaturedWork } from '../sections/FeaturedWork';
import { Process } from '../sections/Process';
import { Knowledge } from '../sections/Knowledge';
import { AILab } from '../sections/AILab';
import { RatStory } from '../sections/RatStory';
import { Contact } from '../sections/Contact';
import { Footer } from '../components/Footer';

export function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('nezha-theme') || 'light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('nezha-theme', theme);
  }, [theme]);

  return (
    <>
      <span id="top" className="page-top-anchor" aria-hidden="true" />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header theme={theme} onThemeChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      <main id="main-content">
        <Hero />
        <Pillars />
        <FeaturedWork />
        <Process />
        <Knowledge />
        <AILab />
        <RatStory />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
