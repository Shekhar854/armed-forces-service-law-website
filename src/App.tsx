import { FormEvent, ReactNode, useEffect, useState } from "react";
import { Language, translations } from "./translations";

type Page =
  | "home"
  | "about"
  | "practice"
  | "cases"
  | "case-detail"
  | "media"
  | "blog"
  | "article"
  | "query"
  | "contact"
  | "portal"
  | "dashboard"
  | "client-case"
  | "admin"
  | "privacy";

const portrait =
  "https://images.unsplash.com/photo-1742981365880-698cfb84492d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1100&h=1300";

const Chevron = ({ direction = "right" }: { direction?: "right" | "down" }) => (
  <svg
    aria-hidden="true"
    className={`icon ${direction === "down" ? "rotate" : ""}`}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path d="m9 18 6-6-6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
  </svg>
);

const Arrow = () => (
  <svg aria-hidden="true" className="icon" fill="none" viewBox="0 0 24 24">
    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
  </svg>
);

const MenuIcon = ({ open }: { open: boolean }) => (
  <svg aria-hidden="true" className="menu-icon" fill="none" viewBox="0 0 24 24">
    {open ? (
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    ) : (
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    )}
  </svg>
);

function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "text" | "light";
  type?: "button" | "submit";
  className?: string;
}) {
  return (
    <button className={`button button-${variant} ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

function Heading({
  children,
  level = 2,
  className = "",
}: {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4;
  className?: string;
}) {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4";
  return <Tag className={`heading heading-${level} ${className}`}>{children}</Tag>;
}

function Field({
  label,
  type = "text",
  placeholder,
  options,
  required,
}: {
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "file";
  placeholder?: string;
  options?: string[];
  required?: boolean;
}) {
  return (
    <label className={`field ${type === "textarea" ? "field-wide" : ""}`}>
      <span>{label}</span>
      {options ? (
        <select required={required}>
          <option value="">{options[0]?.startsWith("Select") || options[0]?.startsWith("चुनें") ? options[0] : "Select an option / विकल्प चुनें"}</option>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea placeholder={placeholder} required={required} rows={5} />
      ) : (
        <input accept={type === "file" ? ".pdf,.doc,.docx,.jpg,.png" : undefined} placeholder={placeholder} required={required} type={type} />
      )}
    </label>
  );
}

function SectionTitle({
  eyebrow,
  title,
  copy,
  inverse = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  inverse?: boolean;
}) {
  return (
    <div className={`section-title ${inverse ? "inverse" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <Heading>{title}</Heading>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

function Brand({ compact = false, lang = "en" }: { compact?: boolean; lang?: Language }) {
  const t = translations[lang];
  return (
    <div className={`brand ${compact ? "brand-compact" : ""}`}>
      <div className="brand-mark"><span>न्याय</span></div>
      <div>
        <strong>{t.nav.brandName}</strong>
        <small>{t.nav.brandRole}</small>
      </div>
    </div>
  );
}

function Navbar({
  page,
  navigate,
  lang,
  setLang,
}: {
  page: Page;
  navigate: (page: Page) => void;
  lang: Language;
  setLang: (lang: Language) => void;
}) {
  const [open, setOpen] = useState(false);
  const t = translations[lang];

  const navLinks: { label: string; page: Page }[] = [
    { label: t.nav.home, page: "home" },
    { label: t.nav.about, page: "about" },
    { label: t.nav.practice, page: "practice" },
    { label: t.nav.cases, page: "cases" },
    { label: t.nav.media, page: "media" },
    { label: t.nav.blog, page: "blog" },
    { label: t.nav.contact, page: "contact" },
  ];

  const go = (next: Page) => {
    navigate(next);
    setOpen(false);
  };

  const toggleLanguage = () => {
    setLang(lang === "en" ? "hi" : "en");
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        <button className="brand-button" onClick={() => go("home")}>
          <Brand lang={lang} />
        </button>
        <nav className={open ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
          {navLinks.map((item) => (
            <button
              className={page === item.page ? "nav-link active" : "nav-link"}
              key={item.page}
              onClick={() => go(item.page)}
            >
              {item.label}
            </button>
          ))}
          <button className="language mobile-only" onClick={toggleLanguage}>
            {t.nav.langSwitch}
          </button>
          <Button className="mobile-only" onClick={() => go("query")}>
            {t.nav.raiseQuery} <Arrow />
          </Button>
        </nav>
        <div className="nav-actions">
          <button
            className="language"
            onClick={toggleLanguage}
            title={lang === "en" ? "हिंदी में बदलें" : "Switch to English"}
          >
            {t.nav.langSwitch}
          </button>
          <Button onClick={() => go("query")}>
            {t.nav.raiseQuery} <Arrow />
          </Button>
        </div>
        <button
          aria-label="Toggle menu"
          className="menu-button"
          onClick={() => setOpen(!open)}
        >
          <MenuIcon open={open} />
        </button>
      </div>
    </header>
  );
}

function Footer({ navigate, lang }: { navigate: (page: Page) => void; lang: Language }) {
  const t = translations[lang];

  return (
    <footer className="footer">
      <div className="footer-main shell">
        <div className="footer-brand">
          <Brand lang={lang} />
          <p>{t.footer.brandCopy}</p>
          <p className="bar-note">{t.footer.barNote}</p>
        </div>
        <div>
          <h4>{t.footer.practiceHeading}</h4>
          {t.practice.items.map((item) => (
            <button key={item.no} onClick={() => navigate("practice")}>
              {item.title}
            </button>
          ))}
        </div>
        <div>
          <h4>{t.footer.quickLinksHeading}</h4>
          <button onClick={() => navigate("cases")}>{t.footer.selectedMatters}</button>
          <button onClick={() => navigate("blog")}>{t.footer.legalInsights}</button>
          <button onClick={() => navigate("portal")}>{t.footer.clientPortal}</button>
          <button onClick={() => navigate("privacy")}>{t.footer.privacyDisclaimer}</button>
        </div>
        <div>
          <h4>{t.footer.officeHeading}</h4>
          <p>
            <strong>{t.footer.chambersLocation}</strong>
            <br />
            {t.footer.chambersAddress}
          </p>
        </div>
      </div>
      <div className="footer-bottom shell">
        <span>{t.footer.rights}</span>
        <span>{t.footer.noSolicitation}</span>
      </div>
    </footer>
  );
}

function QueryBanner({ navigate, lang }: { navigate: (page: Page) => void; lang: Language }) {
  const t = translations[lang];
  return (
    <section className="query-banner">
      <div className="shell query-inner">
        <div>
          <p className="eyebrow light">{t.queryBanner.eyebrow}</p>
          <Heading>{t.queryBanner.title}</Heading>
        </div>
        <Button variant="light" onClick={() => navigate("query")}>
          {t.queryBanner.button} <Arrow />
        </Button>
      </div>
    </section>
  );
}

function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <section className="page-hero">
      <div className="shell narrow">
        <p className="eyebrow light">{eyebrow}</p>
        <Heading level={1}>{title}</Heading>
        <p>{copy}</p>
      </div>
    </section>
  );
}

function Home({ navigate, lang }: { navigate: (page: Page) => void; lang: Language }) {
  const t = translations[lang];

  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-content">
            <p className="eyebrow light">{t.home.heroEyebrow}</p>
            <Heading level={1}>{t.home.heroTitle}</Heading>
            <p className="hero-copy">{t.home.heroCopy}</p>
            <div className="button-row">
              <Button variant="light" onClick={() => navigate("query")}>
                {t.common.raiseLegalQuery} <Arrow />
              </Button>
              <Button variant="secondary" onClick={() => navigate("practice")}>
                {t.common.explorePractice}
              </Button>
            </div>
            <div className="hero-note">
              <span className="gold-line" /> {t.home.heroNote}
            </div>
          </div>
          <div className="portrait-wrap">
            <img alt={t.home.advocateName} src={portrait} />
            <div className="portrait-caption">
              <span>{t.home.advocateName}</span>
              <small>{t.home.advocateSpecialty}</small>
            </div>
          </div>
        </div>
      </section>

      <section className="stats shell">
        {t.home.stats.map((item) => (
          <div className="stat" key={item.label}>
            <strong>{item.number}</strong>
            <span>{item.label}</span>
          </div>
        ))}
        <p className="editable-note">{t.home.editableNote}</p>
      </section>

      <section className="section shell about-preview">
        <div className="editorial-index">§</div>
        <div>
          <SectionTitle eyebrow={t.home.aboutEyebrow} title={t.home.aboutTitle} />
          <blockquote>{t.home.aboutQuote}</blockquote>
        </div>
        <div className="about-copy">
          <p>{t.home.aboutP1}</p>
          <p>{t.home.aboutP2}</p>
          <Button variant="text" onClick={() => navigate("about")}>
            {t.home.aboutBtn} <Arrow />
          </Button>
        </div>
      </section>

      <section className="section practice-section">
        <div className="shell">
          <SectionTitle
            eyebrow={t.home.practiceEyebrow}
            title={t.home.practiceTitle}
            copy={t.home.practiceCopy}
          />
          <div className="practice-grid">
            {t.practice.items.map((item) => (
              <button
                className="practice-card"
                key={item.no}
                onClick={() => navigate("practice")}
              >
                <span className="card-no">{item.no}</span>
                <Heading level={3}>{item.title}</Heading>
                <p>{item.copy}</p>
                <div className="tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <span className="card-link">
                  {t.common.viewExpertise} <Arrow />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell who">
        <div className="who-title">
          <SectionTitle eyebrow={t.home.whoEyebrow} title={t.home.whoTitle} />
          <p>{t.home.whoCopy}</p>
        </div>
        <div className="audience-list">
          {t.home.whoList.map((item, index) => (
            <div key={item}>
              <span>0{index + 1}</span>
              <strong>{item}</strong>
              <Chevron />
            </div>
          ))}
        </div>
      </section>

      <section className="section cases-preview">
        <div className="shell">
          <div className="title-row">
            <SectionTitle
              inverse
              eyebrow={t.home.casesEyebrow}
              title={t.home.casesTitle}
              copy={t.home.casesCopy}
            />
            <Button variant="secondary" onClick={() => navigate("cases")}>
              {t.home.viewAllMatters}
            </Button>
          </div>
          <div className="case-list">
            {t.cases.list.slice(0, 3).map((matter, index) => (
              <CaseCard
                key={matter.title}
                matter={matter}
                index={index}
                lang={lang}
                onClick={() => navigate("case-detail")}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section shell insights">
        <div className="title-row">
          <SectionTitle eyebrow={t.home.insightsEyebrow} title={t.home.insightsTitle} />
          <Button variant="text" onClick={() => navigate("blog")}>
            {t.home.viewAllInsights} <Arrow />
          </Button>
        </div>
        <div className="article-grid">
          {t.editorial.articleCards.slice(0, 3).map((article, i) => (
            <ArticleCard
              key={article.title}
              category={article.category}
              title={article.title}
              copy={article.copy}
              readTime={article.readTime}
              featured={i === 0}
              lang={lang}
              navigate={navigate}
            />
          ))}
        </div>
      </section>
      <QueryBanner navigate={navigate} lang={lang} />
    </>
  );
}

function CaseCard({
  matter,
  index,
  lang,
  onClick,
}: {
  matter: { category: string; title: string; court: string; year: string; status: "Ongoing" | "Reported" | "Concluded" | "Won" | "Under Review" };
  index: number;
  lang: Language;
  onClick: () => void;
}) {
  const t = translations[lang];
  const statusKey = matter.status.toLowerCase().replace(" ", "") as keyof typeof t.common.status;
  const statusLabel = t.common.status[statusKey] || matter.status;

  return (
    <button className="case-card" onClick={onClick}>
      <span className="case-index">0{index + 1}</span>
      <div className="case-main">
        <span className="case-category">{matter.category}</span>
        <Heading level={3}>{matter.title}</Heading>
      </div>
      <div className="case-meta">
        <span>{matter.court}</span>
        <span>{matter.year}</span>
        <span className={`status status-${matter.status.toLowerCase().replace(" ", "-")}`}>
          {statusLabel}
        </span>
      </div>
      <Arrow />
    </button>
  );
}

function ArticleCard({
  category,
  title,
  copy,
  readTime,
  featured = false,
  lang,
  navigate,
}: {
  category: string;
  title: string;
  copy?: string;
  readTime?: string;
  featured?: boolean;
  lang: Language;
  navigate: (page: Page) => void;
}) {
  const t = translations[lang];
  return (
    <button
      className={`article-card ${featured ? "article-featured" : ""}`}
      onClick={() => navigate("article")}
    >
      <div className="article-art">
        <span>{featured ? "FIELD NOTE / 01" : "LEGAL NOTE"}</span>
        <div className="art-lines" />
      </div>
      <div className="article-body">
        <span className="case-category">{category} · {readTime || "8 min"}</span>
        <Heading level={3}>{title}</Heading>
        <p>{copy || (lang === "hi" ? "विधिक सिद्धांतों, साक्ष्यों एवं न्यायिक उपचारों का एक व्यावहारिक दृष्टिकोण।" : "A practical view of the legal principles, records and remedies that shape the matter.")}</p>
        <span className="card-link">
          {t.common.readAnalysis} <Arrow />
        </span>
      </div>
    </button>
  );
}

function PracticePage({ navigate, lang }: { navigate: (page: Page) => void; lang: Language }) {
  const t = translations[lang];
  return (
    <>
      <PageHero
        eyebrow={t.practice.eyebrow}
        title={t.practice.title}
        copy={t.practice.copy}
      />
      <section className="section shell">
        <div className="detail-grid">
          {t.practice.items.map((item) => (
            <article className="detail-card" key={item.no}>
              <span className="card-no">{item.no}</span>
              <Heading level={2}>{item.title}</Heading>
              <p>{item.copy}</p>
              <ul>
                {item.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <Button variant="text" onClick={() => navigate("query")}>
                {t.common.discussMatter} <Arrow />
              </Button>
            </article>
          ))}
        </div>
      </section>
      <QueryBanner navigate={navigate} lang={lang} />
    </>
  );
}

function CasesPage({ navigate, lang }: { navigate: (page: Page) => void; lang: Language }) {
  const t = translations[lang];
  const [selectedFilter, setSelectedFilter] = useState(0);

  return (
    <>
      <PageHero
        eyebrow={t.cases.eyebrow}
        title={t.cases.title}
        copy={t.cases.copy}
      />
      <section className="section shell">
        <div className="filter-bar">
          {t.cases.filters.map((item, idx) => (
            <button
              className={selectedFilter === idx ? "filter active" : "filter"}
              key={item}
              onClick={() => setSelectedFilter(idx)}
            >
              {item}
            </button>
          ))}
          <label className="filter-select">
            {t.cases.yearLabel}{" "}
            <select>
              <option>{t.cases.allYears}</option>
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
            </select>
          </label>
          <label className="filter-select">
            {t.cases.statusLabel}{" "}
            <select>
              <option>{t.cases.allStatuses}</option>
              <option>{t.common.status.ongoing}</option>
              <option>{t.common.status.won}</option>
              <option>{t.common.status.reported}</option>
              <option>{t.common.status.concluded}</option>
            </select>
          </label>
        </div>
        <div className="case-list light-cases">
          {t.cases.list.map((matter, index) => (
            <CaseCard
              key={`${matter.title}-${index}`}
              matter={matter}
              index={index}
              lang={lang}
              onClick={() => navigate("case-detail")}
            />
          ))}
        </div>
      </section>
      <QueryBanner navigate={navigate} lang={lang} />
    </>
  );
}

function CaseDetail({ navigate, lang }: { navigate: (page: Page) => void; lang: Language }) {
  const t = translations[lang];

  return (
    <>
      <section className="case-detail-hero">
        <div className="shell narrow">
          <button className="back-link" onClick={() => navigate("cases")}>
            {t.caseDetail.backLink}
          </button>
          <span className="status status-ongoing">{t.common.status.ongoing}</span>
          <p className="eyebrow light">{t.caseDetail.heroEyebrow}</p>
          <Heading level={1}>{t.caseDetail.title}</Heading>
          <div className="matter-meta">
            <span>
              {t.caseDetail.metaForum}
              <br />
              <strong>Armed Forces Tribunal</strong>
            </span>
            <span>
              {t.caseDetail.metaYear}
              <br />
              <strong>2025</strong>
            </span>
            <span>
              {t.caseDetail.metaRef}
              <br />
              <strong>{t.caseDetail.confidential}</strong>
            </span>
          </div>
        </div>
      </section>

      <section className="section shell case-content">
        <aside>
          {t.caseDetail.sidebarLinks.map((x, i) => (
            <a className={i === 0 ? "active" : ""} href={`#${x.id}`} key={x.id}>
              {x.label}
            </a>
          ))}
        </aside>
        <article>
          <p className="eyebrow" id="Overview">{t.caseDetail.overviewEyebrow}</p>
          <Heading>{t.caseDetail.overviewTitle}</Heading>
          <p>{t.caseDetail.overviewP}</p>
          {t.caseDetail.blocks.map((block) => (
            <div className="legal-block" id={block.no === "01" ? "Legal-issue" : block.no === "02" ? "Representation" : "Current-status"} key={block.no}>
              <span>{block.no}</span>
              <div>
                <Heading level={3}>{block.title}</Heading>
                <p>{block.copy}</p>
              </div>
            </div>
          ))}
          <div className="disclaimer" id="Disclaimer">
            <strong>{t.caseDetail.disclaimerTitle}</strong>
            <p>{t.caseDetail.disclaimerP}</p>
          </div>
        </article>
      </section>
      <QueryBanner navigate={navigate} lang={lang} />
    </>
  );
}

function QueryPage({ lang }: { lang: Language }) {
  const [sent, setSent] = useState(false);
  const t = translations[lang];

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setSent(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <PageHero
        eyebrow={t.query.eyebrow}
        title={t.query.title}
        copy={t.query.copy}
      />
      <section className="section shell form-layout">
        <div className="form-intro">
          <p className="eyebrow">{t.query.guidelinesEyebrow}</p>
          <Heading level={3}>{t.query.guidelinesTitle}</Heading>
          <ol>
            {t.query.guidelinesList.map((item, idx) => (
              <li key={item}>
                <span>0{idx + 1}</span>
                {item}
              </li>
            ))}
          </ol>
          <div className="privacy-note">
            <strong>{t.query.privacyBoxTitle}</strong>
            <p>{t.query.privacyBoxP}</p>
          </div>
        </div>

        {sent ? (
          <div className="success-panel">
            <span className="success-check">✓</span>
            <p className="eyebrow">{t.query.successEyebrow}</p>
            <Heading>{t.query.successTitle}</Heading>
            <p>{t.query.successP}</p>
            <Button onClick={() => setSent(false)}>
              {t.query.submitAnother}
            </Button>
          </div>
        ) : (
          <form className="query-form" onSubmit={submit}>
            <div className="form-section">
              <span>01</span>
              <div>
                <Heading level={3}>{t.query.sec1Title}</Heading>
                <p>{t.query.sec1Sub}</p>
              </div>
            </div>
            <div className="form-grid">
              <Field
                label={t.query.fullName}
                placeholder={t.query.fullNamePlaceholder}
                required
              />
              <Field
                label={t.query.email}
                type="email"
                placeholder={t.query.emailPlaceholder}
                required
              />
              <Field
                label={t.query.phone}
                type="tel"
                placeholder={t.query.phonePlaceholder}
                required
              />
              <Field
                label={t.query.prefContact}
                options={t.query.prefOptions}
                required
              />
            </div>

            <div className="form-section">
              <span>02</span>
              <div>
                <Heading level={3}>{t.query.sec2Title}</Heading>
                <p>{t.query.sec2Sub}</p>
              </div>
            </div>
            <div className="form-grid">
              <Field
                label={t.query.serviceCategory}
                options={t.query.serviceOptions}
                required
              />
              <Field
                label={t.query.subject}
                placeholder={t.query.subjectPlaceholder}
                required
              />
              <Field
                label={t.query.queryLabel}
                type="textarea"
                placeholder={t.query.queryPlaceholder}
                required
              />
              <Field
                label={t.query.docsLabel}
                type="file"
              />
            </div>

            <label className="consent">
              <input required type="checkbox" />
              <span>{t.query.consentText}</span>
            </label>
            <Button type="submit">
              {t.query.submitBtn} <Arrow />
            </Button>
          </form>
        )}
      </section>
    </>
  );
}

function Portal({ navigate, lang }: { navigate: (page: Page) => void; lang: Language }) {
  const [signup, setSignup] = useState(false);
  const t = translations[lang];

  return (
    <section className="portal">
      <div className="portal-brand">
        <Brand lang={lang} />
        <div>
          <p className="eyebrow light">{t.portal.leftEyebrow}</p>
          <Heading level={1}>{t.portal.leftTitle}</Heading>
          <p>{t.portal.leftP}</p>
        </div>
        <small>{t.portal.leftFoot}</small>
      </div>
      <div className="login-wrap">
        <div className="login-panel">
          <p className="eyebrow">
            {signup ? t.portal.signupEyebrow : t.portal.signinEyebrow}
          </p>
          <Heading>
            {signup ? t.portal.signupTitle : t.portal.signinTitle}
          </Heading>
          <p>
            {signup ? t.portal.signupSub : t.portal.signinSub}
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate("dashboard");
            }}
          >
            {signup && (
              <Field
                label={t.portal.nameLabel}
                placeholder={t.portal.namePlaceholder}
                required
              />
            )}
            <Field
              label={t.portal.emailLabel}
              type="email"
              placeholder={t.portal.emailPlaceholder}
              required
            />
            <Field
              label={signup ? t.portal.passSignupLabel : t.portal.passLabel}
              type="password"
              placeholder={t.portal.passPlaceholder}
              required
            />
            <Button type="submit" className="full">
              {signup ? t.portal.signupBtn : t.portal.signinBtn} <Arrow />
            </Button>
          </form>
          <button className="switch-auth" onClick={() => setSignup(!signup)}>
            {signup ? t.portal.switchSignin : t.portal.switchSignup}
          </button>
          <button className="back-site" onClick={() => navigate("home")}>
            {t.portal.returnToWeb}
          </button>
        </div>
      </div>
    </section>
  );
}

function Dashboard({
  navigate,
  lang,
  admin = false,
}: {
  navigate: (page: Page) => void;
  lang: Language;
  admin?: boolean;
}) {
  const t = translations[lang];
  const navList = admin ? t.dashboard.adminNav : t.dashboard.clientNav;
  const metrics = admin ? t.dashboard.adminMetrics : t.dashboard.clientMetrics;

  return (
    <div className="dashboard-shell">
      <aside className="sidebar">
        <Brand compact lang={lang} />
        <nav>
          {navList.map((item, i) => (
            <button className={i === 0 ? "active" : ""} key={item}>
              <span>{["⌂", "◇", "□", "≡", "○", "✉", "⚙"][i % 7]}</span>
              {item}
              {item === (lang === "hi" ? "चैंबर संदेश" : "Chamber Messages") && <b>2</b>}
            </button>
          ))}
        </nav>
        <button className="sidebar-exit" onClick={() => navigate("home")}>
          {t.common.backToWebsite}
        </button>
      </aside>

      <main className="dashboard">
        <div className="dash-top">
          <div>
            <p className="eyebrow">
              {admin ? t.dashboard.adminEyebrow : t.dashboard.clientEyebrow}
            </p>
            <Heading>
              {admin ? t.dashboard.adminTitle : t.dashboard.clientTitle}
            </Heading>
          </div>
          <div className="user-chip">
            <span>{admin ? "AS" : "RK"}</span>
            <div>
              <strong>{admin ? "A. Sharma" : "R. Kumar"}</strong>
              <small>{admin ? t.dashboard.adminRole : t.dashboard.clientRole}</small>
            </div>
          </div>
        </div>

        <div className="metric-grid">
          {metrics.map((m) => (
            <div className="metric" key={m.label}>
              <span>{m.label}</span>
              <strong>{m.value}</strong>
              <small>{m.note}</small>
            </div>
          ))}
        </div>

        {admin ? (
          <AdminTable lang={lang} />
        ) : (
          <div className="dash-grid">
            <section className="dash-card case-summary">
              <div className="dash-card-head">
                <div>
                  <p className="eyebrow">{t.dashboard.activeMatterEyebrow}</p>
                  <Heading level={3}>{t.dashboard.activeMatterTitle}</Heading>
                </div>
                <span className="status status-ongoing">{t.common.status.ongoing}</span>
              </div>
              <div className="mini-meta">
                <span>
                  {lang === "hi" ? "न्यायिक मंच" : "Forum"}
                  <strong>{t.dashboard.forum}</strong>
                </span>
                <span>
                  {lang === "hi" ? "आगामी सुनवाई" : "Next hearing"}
                  <strong>{t.dashboard.nextHearing}</strong>
                </span>
                <span>
                  {lang === "hi" ? "वाद संदर्भ" : "Reference"}
                  <strong>{t.dashboard.reference}</strong>
                </span>
              </div>
              <div className="timeline">
                {t.dashboard.timeline.map((step) => (
                  <div className={`timeline-item ${step.status}`} key={step.title}>
                    <i />
                    <span>
                      <strong>{step.title}</strong>
                      <small>{step.date}</small>
                    </span>
                  </div>
                ))}
              </div>
              <Button variant="text" onClick={() => navigate("client-case")}>
                {t.dashboard.viewCaseDetails} <Arrow />
              </Button>
            </section>

            <section className="dash-card updates">
              <div className="dash-card-head">
                <Heading level={3}>{t.dashboard.recentUpdatesHeading}</Heading>
                <button>{t.dashboard.viewAllUpdates}</button>
              </div>
              {t.dashboard.updates.map((item) => (
                <div className="update" key={item.title}>
                  <i />
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                  <small>{item.date}</small>
                </div>
              ))}
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

function AdminTable({ lang }: { lang: Language }) {
  const t = translations[lang];

  return (
    <section className="dash-card admin-table">
      <div className="dash-card-head">
        <div>
          <p className="eyebrow">{t.dashboard.inboxEyebrow}</p>
          <Heading level={3}>{t.dashboard.inboxTitle}</Heading>
        </div>
        <Button>{t.dashboard.reviewBtn}</Button>
      </div>
      <div className="table-head">
        {t.dashboard.inboxCols.map((col) => (
          <span key={col}>{col}</span>
        ))}
      </div>
      {t.dashboard.inboxRows.map((row) => (
        <div className="table-row" key={row.client}>
          <span>
            <i>{row.client.split(" ").map((x) => x[0]).join("")}</i>
            {row.client}
          </span>
          <span>{row.category}</span>
          <span>{row.received}</span>
          <span>{row.status}</span>
          <button>•••</button>
        </div>
      ))}
    </section>
  );
}

function EditorialPage({
  type,
  navigate,
  lang,
}: {
  type: "media" | "blog";
  navigate: (page: Page) => void;
  lang: Language;
}) {
  const t = translations[lang];

  return (
    <>
      <PageHero
        eyebrow={type === "media" ? t.editorial.mediaEyebrow : t.editorial.blogEyebrow}
        title={type === "media" ? t.editorial.mediaTitle : t.editorial.blogTitle}
        copy={type === "media" ? t.editorial.mediaCopy : t.editorial.blogCopy}
      />
      <section className="section shell">
        {type === "media" ? (
          <>
            <div className="newspaper-feature">
              <div className="paper-mast">
                <span>{t.editorial.paperMasthead}</span>
                <small>{t.editorial.paperSub}</small>
              </div>
              <div className="paper-grid">
                <div>
                  <p className="eyebrow">{t.editorial.commentEyebrow}</p>
                  <Heading level={1}>{t.editorial.commentQuote}</Heading>
                  <p>{t.editorial.commentCopy}</p>
                  <Button variant="text">
                    {t.editorial.readCoverage} <Arrow />
                  </Button>
                </div>
                <div className="paper-sidebar">
                  <strong>{t.editorial.sidebarTitle}</strong>
                  {t.editorial.sidebarArticles.map((art) => (
                    <p key={art}>{art}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="carousel-controls">
              <span>01 / 04</span>
              <div>
                <button>←</button>
                <button>→</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="featured-blog">
              <div className="article-art">
                <span>{t.editorial.featuredBlogBadge}</span>
                <div className="art-lines" />
              </div>
              <div>
                <p className="eyebrow">{t.editorial.featuredBlogEyebrow}</p>
                <Heading level={1}>{t.editorial.featuredBlogTitle}</Heading>
                <p>{t.editorial.featuredBlogCopy}</p>
                <Button onClick={() => navigate("article")}>
                  {t.editorial.readFeatured} <Arrow />
                </Button>
              </div>
            </div>
            <div className="filter-bar compact">
              {t.editorial.categories.map((x, i) => (
                <button className={i === 0 ? "filter active" : "filter"} key={x}>
                  {x}
                </button>
              ))}
            </div>
            <div className="article-grid blog-grid">
              {t.editorial.articleCards.map((card) => (
                <ArticleCard
                  key={card.title}
                  category={card.category}
                  title={card.title}
                  copy={card.copy}
                  readTime={card.readTime}
                  lang={lang}
                  navigate={navigate}
                />
              ))}
            </div>
          </>
        )}
      </section>
      <QueryBanner navigate={navigate} lang={lang} />
    </>
  );
}

function GenericPage({
  page,
  navigate,
  lang,
}: {
  page: Page;
  navigate: (page: Page) => void;
  lang: Language;
}) {
  const t = translations[lang];

  if (page === "about") {
    return (
      <>
        <PageHero
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          copy={t.about.copy}
        />
        <section className="section shell narrow prose-page">
          <p className="lead">{t.about.lead}</p>
          <Heading>{t.about.section1Heading}</Heading>
          <p>{t.about.section1P}</p>
          <Heading level={3}>{t.about.principlesHeading}</Heading>
          <div className="value-grid">
            {t.about.principles.map((pr, i) => (
              <div key={pr.title}>
                <span>0{i + 1}</span>
                <strong>{pr.title}</strong>
                <p>{pr.copy}</p>
              </div>
            ))}
          </div>
        </section>
        <QueryBanner navigate={navigate} lang={lang} />
      </>
    );
  }

  if (page === "contact") {
    return (
      <>
        <PageHero
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          copy={t.contact.copy}
        />
        <section className="section shell narrow prose-page">
          <div className="contact-grid">
            <div>
              <Heading>{t.contact.officeHeading}</Heading>
              <p>
                <strong>{t.contact.chambersLabel}</strong>
                <br />
                {t.contact.chambersText}
              </p>
              <p>
                <strong>{t.contact.emailLabel}</strong>
                <br />
                office@example.in
              </p>
              <p>
                <strong>{t.contact.phoneLabel}</strong>
                <br />
                +91 XXXXX XXXXX
              </p>
              <p className="bar-note">{t.contact.appointmentNote}</p>
            </div>
            <form
              className="query-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert(lang === "hi" ? "संदेश प्रेषित किया गया।" : "Message sent to chambers.");
              }}
            >
              <Field label={t.contact.formName} required />
              <Field label={t.contact.formEmail} type="email" required />
              <Field label={t.contact.formMessage} type="textarea" required />
              <Button type="submit">{t.contact.sendEnquiry}</Button>
            </form>
          </div>
        </section>
        <QueryBanner navigate={navigate} lang={lang} />
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow={t.privacy.eyebrow}
        title={t.privacy.title}
        copy={t.privacy.copy}
      />
      <section className="section shell narrow prose-page">
        <Heading>{t.privacy.sec1Heading}</Heading>
        <p>{t.privacy.sec1P}</p>
        <Heading level={3}>{t.privacy.sec2Heading}</Heading>
        <p>{t.privacy.sec2P}</p>
        <Heading level={3}>{t.privacy.sec3Heading}</Heading>
        <p>{t.privacy.sec3P}</p>
        <Heading level={3}>{t.privacy.sec4Heading}</Heading>
        <p>{t.privacy.sec4P}</p>
      </section>
      <QueryBanner navigate={navigate} lang={lang} />
    </>
  );
}

function ArticlePage({ navigate, lang }: { navigate: (page: Page) => void; lang: Language }) {
  const t = translations[lang];

  return (
    <>
      <section className="article-hero">
        <div className="shell reading">
          <button className="back-link" onClick={() => navigate("blog")}>
            {t.article.backLink}
          </button>
          <p className="eyebrow light">{t.article.eyebrow}</p>
          <Heading level={1}>{t.article.title}</Heading>
          <p className="article-deck">{t.article.deck}</p>
          <div className="article-byline">
            <span>AS</span>
            <div>
              <strong>{t.article.author}</strong>
              <small>{t.article.dateMeta}</small>
            </div>
          </div>
        </div>
      </section>

      <article className="article-prose reading">
        <p className="lead">{t.article.lead}</p>
        <p>{t.article.p1}</p>
        <Heading>{t.article.h1}</Heading>
        <p>{t.article.p2}</p>
        <blockquote>{t.article.quote}</blockquote>
        <Heading level={3}>{t.article.h2}</Heading>
        <p>{t.article.p3}</p>
        <div className="disclaimer">
          <strong>{t.article.disclaimerTitle}</strong>
          <p>{t.article.disclaimerP}</p>
        </div>
      </article>

      <QueryBanner navigate={navigate} lang={lang} />
    </>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("site_language");
      if (saved === "hi" || saved === "en") return saved;
    }
    return "en";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("site_language", lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const navigate = (next: Page) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const portalPage =
    page === "portal" ||
    page === "dashboard" ||
    page === "admin" ||
    page === "client-case";

  const t = translations[lang];

  return (
    <div className="app" lang={lang}>
      {!portalPage && (
        <Navbar
          page={page}
          navigate={navigate}
          lang={lang}
          setLang={setLang}
        />
      )}

      <main>
        {page === "home" && <Home navigate={navigate} lang={lang} />}
        {page === "practice" && <PracticePage navigate={navigate} lang={lang} />}
        {page === "cases" && <CasesPage navigate={navigate} lang={lang} />}
        {page === "case-detail" && <CaseDetail navigate={navigate} lang={lang} />}
        {page === "query" && <QueryPage lang={lang} />}
        {(page === "media" || page === "blog") && (
          <EditorialPage type={page} navigate={navigate} lang={lang} />
        )}
        {page === "article" && <ArticlePage navigate={navigate} lang={lang} />}
        {(page === "about" || page === "contact" || page === "privacy") && (
          <GenericPage page={page} navigate={navigate} lang={lang} />
        )}
        {page === "portal" && <Portal navigate={navigate} lang={lang} />}
        {(page === "dashboard" || page === "client-case") && (
          <Dashboard navigate={navigate} lang={lang} />
        )}
        {page === "admin" && <Dashboard navigate={navigate} lang={lang} admin />}
      </main>

      {!portalPage && <Footer navigate={navigate} lang={lang} />}

      {!portalPage && (
        <button className="portal-fab" onClick={() => navigate("portal")}>
          {t.nav.portal} <Arrow />
        </button>
      )}
    </div>
  );
}
