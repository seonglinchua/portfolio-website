import { articles } from '../data/siteContent';
import { SectionIntro } from '../components/SectionIntro';

export function Knowledge() {
  return (
    <section className="section section--tint knowledge-section" id="knowledge">
      <div className="shell">
        <SectionIntro eyebrow="05 — Knowledge" title="Learn once. Reuse often." description="Recent guides, architecture notes, and case studies that turn project experience into durable knowledge." />
        <div className="article-grid">
          {articles.map((article) => (
            <article className="article-card" key={article.title}>
              <div className="article-image">
                <img src={article.image} alt="" width="1536" height="1024" loading="lazy" />
              </div>
              <div className="article-body">
                <p className="article-meta"><span>{article.format}</span><span>{article.date} · {article.readTime}</span></p>
                <h3>{article.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
