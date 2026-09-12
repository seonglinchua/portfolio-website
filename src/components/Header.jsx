import { List, Moon, Sun, X } from '@phosphor-icons/react';
import { useEffect, useRef, useState } from 'react';
import { BrandMark } from './BrandMark';

const navigationItems = [
  { label: 'Build', href: '#build', sectionId: 'build' },
  { label: 'Knowledge', href: '#pillar-knowledge', sectionId: 'pillar-knowledge' },
  { label: 'Design', href: '#design', sectionId: 'design' },
  { label: 'Lab', href: '#pillar-lab', sectionId: 'pillar-lab' },
  { label: 'About', href: '#about', sectionId: 'about' },
];
const pillarIds = new Set(['build', 'pillar-knowledge', 'design', 'pillar-lab']);

export function Header({ theme, onThemeChange }) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const navigationRef = useRef(null);
  const menuButtonRef = useRef(null);
  const closeMenu = (restoreFocus = false) => {
    setOpen(false);
    if (restoreFocus) requestAnimationFrame(() => menuButtonRef.current?.focus());
  };

  useEffect(() => {
    const pillarsSection = document.getElementById('pillars');
    const narrativeSections = [
      document.getElementById('about'),
      document.getElementById('contact'),
    ].filter(Boolean);
    let frameId;

    const updateActiveSection = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12);
        const readingLine = window.innerHeight * 0.32;
        const pillarBounds = pillarsSection?.getBoundingClientRect();
        const isReadingPillars = pillarBounds
          && pillarBounds.top <= readingLine
          && pillarBounds.bottom >= readingLine;

        if (isReadingPillars) {
          const hashTarget = window.location.hash.slice(1);
          setActiveSection(pillarIds.has(hashTarget) ? hashTarget : '');
          return;
        }

        const visible = narrativeSections
          .filter((section) => {
            const bounds = section.getBoundingClientRect();
            return bounds.top <= readingLine && bounds.bottom >= readingLine;
          })
          .at(-1);

        setActiveSection(visible?.id || '');
      });
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    window.addEventListener('hashchange', updateActiveSection);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
      window.removeEventListener('hashchange', updateActiveSection);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => navigationRef.current?.querySelector('a')?.focus());

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeMenu(true);
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = [...headerRef.current.querySelectorAll('a[href], button:not([disabled])')]
        .filter((element) => element.offsetParent !== null);
      const first = focusable[0];
      const last = focusable.at(-1);

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 841px)');
    const handleDesktopChange = (event) => {
      if (event.matches) setOpen(false);
    };

    desktop.addEventListener('change', handleDesktopChange);
    return () => desktop.removeEventListener('change', handleDesktopChange);
  }, []);

  return (
    <header className={scrolled ? 'site-header is-scrolled' : 'site-header'} ref={headerRef}>
      <div className="shell header-inner">
        <BrandMark />
        <nav ref={navigationRef} id="primary-navigation" className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Primary">
          {navigationItems.map(({ label, href, sectionId }) => (
            <a
              href={href}
              key={href}
              onClick={() => {
                setActiveSection(sectionId);
                closeMenu();
              }}
              aria-current={activeSection === sectionId ? 'location' : undefined}
            >
              {label}
            </a>
          ))}
          <a
            className="nav-cta mobile-contact"
            href="#contact"
            onClick={() => {
              setActiveSection('contact');
              closeMenu();
            }}
            aria-current={activeSection === 'contact' ? 'location' : undefined}
          >
            Contact
          </a>
        </nav>
        <div className="header-actions">
          <a
            className="nav-cta desktop-contact"
            href="#contact"
            onClick={() => setActiveSection('contact')}
            aria-current={activeSection === 'contact' ? 'location' : undefined}
          >
            Contact
          </a>
          <button className="icon-button" type="button" onClick={onThemeChange} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>
            {theme === 'light' ? <Moon /> : <Sun />}
          </button>
          <button ref={menuButtonRef} className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}>
            {open ? <X /> : <List />}
          </button>
        </div>
      </div>
      {open && <button className="nav-backdrop" type="button" tabIndex="-1" aria-label="Close navigation" onClick={() => closeMenu(true)} />}
    </header>
  );
}
