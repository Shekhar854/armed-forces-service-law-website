import { FormEvent, ReactNode, useState } from "react";

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
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option}>{option}</option>
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

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`brand ${compact ? "brand-compact" : ""}`}>
      <div className="brand-mark"><span>न्याय</span></div>
      <div>
        <strong>Advocate A. Sharma</strong>
        <small>Armed Forces & Service Law</small>
      </div>
    </div>
  );
}

const navItems: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Practice", page: "practice" },
  { label: "Cases", page: "cases" },
  { label: "Media", page: "media" },
  { label: "Blog", page: "blog" },
  { label: "Contact", page: "contact" },
];

function Navbar({
  page,
  navigate,
  hindi,
  setHindi,
}: {
  page: Page;
  navigate: (page: Page) => void;
  hindi: boolean;
  setHindi: (value: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const go = (next: Page) => {
    navigate(next);
    setOpen(false);
  };
  return (
    <header className="navbar">
      <div className="nav-inner">
        <button className="brand-button" onClick={() => go("home")}><Brand /></button>
        <nav className={open ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
          {navItems.map((item) => (
            <button className={page === item.page ? "nav-link active" : "nav-link"} key={item.page} onClick={() => go(item.page)}>
              {item.label}
            </button>
          ))}
          <button className="language mobile-only" onClick={() => setHindi(!hindi)}>{hindi ? "English" : "हिंदी"}</button>
          <Button className="mobile-only" onClick={() => go("query")}>Raise Query <Arrow /></Button>
        </nav>
        <div className="nav-actions">
          <button className="language" onClick={() => setHindi(!hindi)}>{hindi ? "EN" : "हिंदी"}</button>
          <Button onClick={() => go("query")}>Raise Query <Arrow /></Button>
        </div>
        <button aria-label="Toggle menu" className="menu-button" onClick={() => setOpen(!open)}><MenuIcon open={open} /></button>
      </div>
    </header>
  );
}

function Footer({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <footer className="footer">
      <div className="footer-main shell">
        <div className="footer-brand">
          <Brand />
          <p>Focused legal counsel for members of the Armed Forces, CAPF, government services, retired personnel and their families.</p>
          <p className="bar-note">Enrolment details: [Editable placeholder]</p>
        </div>
        <div>
          <h4>Practice</h4>
          {["Armed Forces", "CAPF", "Government Service", "Constitutional Law"].map((item) => <button key={item} onClick={() => navigate("practice")}>{item}</button>)}
        </div>
        <div>
          <h4>Quick links</h4>
          <button onClick={() => navigate("cases")}>Selected matters</button>
          <button onClick={() => navigate("blog")}>Legal insights</button>
          <button onClick={() => navigate("portal")}>Client portal</button>
          <button onClick={() => navigate("privacy")}>Privacy & disclaimer</button>
        </div>
        <div>
          <h4>Office</h4>
          <p>New Delhi<br />Chamber details: [Editable]</p>
          <p>office@example.in<br />+91 XXXXX XXXXX</p>
        </div>
      </div>
      <div className="footer-bottom shell">
        <span>© 2025 Advocate A. Sharma. All rights reserved.</span>
        <span>Professional website · No solicitation intended</span>
      </div>
    </footer>
  );
}

const practices = [
  { no: "01", title: "Armed Forces Law", copy: "Service disputes, promotion, disciplinary action, pension, pay, transfer, termination and Court Martial matters.", tags: ["Army", "Navy", "Air Force"] },
  { no: "02", title: "CAPF Matters", copy: "Service representation for personnel of BSF, CRPF, CISF, ITBP, SSB and Assam Rifles.", tags: ["Service matters", "Disciplinary"] },
  { no: "03", title: "Government Service", copy: "Departmental proceedings, pension, retirement, salary, seniority and administrative matters.", tags: ["Central", "State", "PSU"] },
  { no: "04", title: "Constitutional Law", copy: "Writ petitions, administrative law, government orders and fundamental rights.", tags: ["High Courts", "Supreme Court"] },
];

const matters = [
  { category: "Armed Forces · Pension", title: "Interpretation of pension entitlement following invalidation from service", court: "Armed Forces Tribunal", year: "2025", status: "Ongoing" },
  { category: "Service · Promotion", title: "Challenge to supersession in departmental promotion proceedings", court: "High Court", year: "2024", status: "Reported" },
  { category: "CAPF · Disciplinary", title: "Judicial review of disproportionate disciplinary penalty", court: "High Court", year: "2024", status: "Concluded" },
];

function Home({ navigate, hindi }: { navigate: (page: Page) => void; hindi: boolean }) {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-content">
            <p className="eyebrow light">{hindi ? "सशस्त्र बल एवं सरकारी कर्मियों के लिए विधिक परामर्श" : "LEGAL COUNSEL FOR ARMED FORCES & GOVERNMENT PERSONNEL"}</p>
            <Heading level={1}>{hindi ? "सेवा करने वालों के लिए अनुभवी कानूनी प्रतिनिधित्व।" : "Experienced Legal Representation for Those Who Serve."}</Heading>
            <p className="hero-copy">Strategic, diligent and personal counsel across service law, Armed Forces matters and constitutional remedies.</p>
            <div className="button-row">
              <Button variant="light" onClick={() => navigate("query")}>Raise a Legal Query <Arrow /></Button>
              <Button variant="secondary" onClick={() => navigate("practice")}>Explore Practice Areas</Button>
            </div>
            <div className="hero-note"><span className="gold-line" /> Based in New Delhi · Representing clients across India</div>
          </div>
          <div className="portrait-wrap">
            <img alt="Professional advocate seated in an office" src={portrait} />
            <div className="portrait-caption">
              <span>Advocate A. Sharma</span>
              <small>Service & Constitutional Law</small>
            </div>
          </div>
        </div>
      </section>

      <section className="stats shell">
        {[
          ["XX+", "Years of Practice"],
          ["XXX+", "Matters Handled"],
          ["XX+", "Reported Matters"],
          ["XX+", "Publications"],
        ].map(([number, label]) => <div className="stat" key={label}><strong>{number}</strong><span>{label}</span></div>)}
        <p className="editable-note">Editable practice information</p>
      </section>

      <section className="section shell about-preview">
        <div className="editorial-index">A</div>
        <div>
          <SectionTitle eyebrow="THE PRACTICE" title="Clarity in counsel. Resolve in representation." />
          <blockquote>“Every service matter carries a professional history, a family’s concern and a future that deserves careful protection.”</blockquote>
        </div>
        <div className="about-copy">
          <p>The practice is dedicated to individuals who serve the nation and public institutions. We combine close legal analysis with an understanding of service structures, administrative processes and the human impact of each dispute.</p>
          <p>Every engagement begins with a candid assessment—what the law permits, where the record stands and what course best protects the client’s interests.</p>
          <Button variant="text" onClick={() => navigate("about")}>About the practice <Arrow /></Button>
        </div>
      </section>

      <section className="section practice-section">
        <div className="shell">
          <SectionTitle eyebrow="AREAS OF PRACTICE" title="Focused legal experience." copy="Advice and representation informed by the distinct structures of service and public law." />
          <div className="practice-grid">
            {practices.map((item) => (
              <button className="practice-card" key={item.no} onClick={() => navigate("practice")}>
                <span className="card-no">{item.no}</span>
                <Heading level={3}>{item.title}</Heading>
                <p>{item.copy}</p>
                <div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <span className="card-link">View expertise <Arrow /></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell who">
        <div className="who-title">
          <SectionTitle eyebrow="WHO WE HELP" title="Counsel for every stage of service." />
          <p>From an officer facing a career-defining decision to a family pursuing a rightful pension, representation remains precise, respectful and responsive.</p>
        </div>
        <div className="audience-list">
          {["Serving personnel & officers", "Retired personnel & veterans", "Spouses, dependants & families", "Central & state employees"].map((item, index) => (
            <div key={item}><span>0{index + 1}</span><strong>{item}</strong><Chevron /></div>
          ))}
        </div>
      </section>

      <section className="section cases-preview">
        <div className="shell">
          <div className="title-row">
            <SectionTitle inverse eyebrow="SELECTED MATTERS" title="Recent representative work." copy="Illustrative matter summaries. Client identities and confidential details are withheld." />
            <Button variant="secondary" onClick={() => navigate("cases")}>View all matters</Button>
          </div>
          <div className="case-list">
            {matters.map((matter, index) => <CaseCard key={matter.title} matter={matter} index={index} onClick={() => navigate("case-detail")} />)}
          </div>
        </div>
      </section>

      <section className="section shell insights">
        <div className="title-row">
          <SectionTitle eyebrow="LEGAL INSIGHTS" title="Law, explained with context." />
          <Button variant="text" onClick={() => navigate("blog")}>View all insights <Arrow /></Button>
        </div>
        <div className="article-grid">
          <ArticleCard featured navigate={navigate} />
          <ArticleCard category="Pension" title="Understanding disability pension: the record, causation and review" navigate={navigate} />
          <ArticleCard category="Service Law" title="When can a departmental penalty be challenged?" navigate={navigate} />
        </div>
      </section>
      <QueryBanner navigate={navigate} />
    </>
  );
}

function CaseCard({ matter, index, onClick }: { matter: typeof matters[number]; index: number; onClick: () => void }) {
  return (
    <button className="case-card" onClick={onClick}>
      <span className="case-index">0{index + 1}</span>
      <div className="case-main"><span className="case-category">{matter.category}</span><Heading level={3}>{matter.title}</Heading></div>
      <div className="case-meta"><span>{matter.court}</span><span>{matter.year}</span><span className={`status status-${matter.status.toLowerCase()}`}>{matter.status}</span></div>
      <Arrow />
    </button>
  );
}

function ArticleCard({ category = "Armed Forces", title = "What fair consideration in promotion matters actually requires", featured = false, navigate }: { category?: string; title?: string; featured?: boolean; navigate: (page: Page) => void }) {
  return (
    <button className={`article-card ${featured ? "article-featured" : ""}`} onClick={() => navigate("article")}>
      <div className="article-art"><span>{featured ? "FIELD NOTE / 01" : "LEGAL NOTE"}</span><div className="art-lines" /></div>
      <div className="article-body">
        <span className="case-category">{category} · 8 min read</span>
        <Heading level={3}>{title}</Heading>
        <p>A practical view of the legal principles, records and remedies that may shape the matter.</p>
        <span className="card-link">Read analysis <Arrow /></span>
      </div>
    </button>
  );
}

function QueryBanner({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <section className="query-banner">
      <div className="shell query-inner">
        <div>
          <p className="eyebrow light">SEEKING LEGAL GUIDANCE?</p>
          <Heading>Begin with a considered assessment of your matter.</Heading>
        </div>
        <Button variant="light" onClick={() => navigate("query")}>Raise a legal query <Arrow /></Button>
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

function PracticePage({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <>
      <PageHero eyebrow="PRACTICE AREAS" title="Specialist counsel for service and public law." copy="Focused representation at the intersection of individual rights, institutional processes and public duty." />
      <section className="section shell">
        <div className="detail-grid">
          {practices.map((item) => (
            <article className="detail-card" key={item.no}>
              <span className="card-no">{item.no}</span>
              <Heading level={2}>{item.title}</Heading>
              <p>{item.copy}</p>
              <ul>
                {(item.no === "01" ? ["Service disputes & promotion", "Disciplinary proceedings", "Pension, pay & allowances", "Transfer & termination", "Court Martial proceedings"] :
                  item.no === "02" ? ["BSF, CRPF & CISF", "ITBP, SSB & Assam Rifles", "Departmental inquiries", "Service benefits & retirement"] :
                  item.no === "03" ? ["Departmental proceedings", "Seniority & salary", "Pension & retirement", "Administrative decisions"] :
                  ["Writ petitions", "Administrative law", "Government orders", "Fundamental rights"]).map((x) => <li key={x}>{x}</li>)}
              </ul>
              <Button variant="text" onClick={() => navigate("query")}>Discuss a matter <Arrow /></Button>
            </article>
          ))}
        </div>
      </section>
      <QueryBanner navigate={navigate} />
    </>
  );
}

function CasesPage({ navigate }: { navigate: (page: Page) => void }) {
  const [category, setCategory] = useState("All matters");
  return (
    <>
      <PageHero eyebrow="REPRESENTATIVE WORK" title="Selected matters." copy="An overview of legal issues handled across service, Armed Forces, CAPF and constitutional law." />
      <section className="section shell">
        <div className="filter-bar">
          {["All matters", "Armed Forces", "CAPF", "Government", "Constitutional"].map((item) => <button className={category === item ? "filter active" : "filter"} key={item} onClick={() => setCategory(item)}>{item}</button>)}
          <label className="filter-select">Year <select><option>All years</option><option>2025</option><option>2024</option></select></label>
          <label className="filter-select">Status <select><option>Any status</option><option>Ongoing</option><option>Reported</option><option>Concluded</option><option>Won</option><option>Under Review</option></select></label>
        </div>
        <div className="case-list light-cases">
          {[...matters, ...matters.map((matter, i) => ({ ...matter, title: ["Challenge to recovery of service benefits after retirement", "Review of transfer order on compassionate grounds", "Entitlement to revised pay fixation under applicable rules"][i], status: ["Won", "Under Review", "Concluded"][i] }))].map((matter, index) => <CaseCard key={`${matter.title}-${index}`} matter={matter} index={index + 1} onClick={() => navigate("case-detail")} />)}
        </div>
      </section>
    </>
  );
}

function CaseDetail({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <>
      <section className="case-detail-hero">
        <div className="shell narrow">
          <button className="back-link" onClick={() => navigate("cases")}>← Back to selected matters</button>
          <span className="status status-ongoing">Ongoing</span>
          <p className="eyebrow light">ARMED FORCES · PENSION</p>
          <Heading level={1}>Interpretation of pension entitlement following invalidation from service</Heading>
          <div className="matter-meta"><span>Forum<br /><strong>Armed Forces Tribunal</strong></span><span>Year<br /><strong>2025</strong></span><span>Reference<br /><strong>[Confidential]</strong></span></div>
        </div>
      </section>
      <section className="section shell case-content">
        <aside>
          {["Overview", "Legal issue", "Representation", "Current status", "Disclaimer"].map((x, i) => <a className={i === 0 ? "active" : ""} href={`#${x.replace(" ", "-")}`} key={x}>{x}</a>)}
        </aside>
        <article>
          <p className="eyebrow" id="Overview">MATTER OVERVIEW</p>
          <Heading>The context.</Heading>
          <p>The matter concerns interpretation of applicable pension provisions following invalidation from service. The summary is intentionally general and does not disclose the client’s identity, case number or confidential instructions.</p>
          <div className="legal-block" id="Legal-issue"><span>01</span><div><Heading level={3}>Legal issue</Heading><p>Whether the relevant service and medical record satisfies the statutory conditions for pension entitlement, and the scope of review available before the appropriate forum.</p></div></div>
          <div className="legal-block" id="Representation"><span>02</span><div><Heading level={3}>Representation</Heading><p>Review of the service record, medical documentation, applicable regulations and precedents; preparation of pleadings and representation before the forum.</p></div></div>
          <div className="legal-block" id="Current-status"><span>03</span><div><Heading level={3}>Current status</Heading><p>The matter remains pending. No statement on outcome is made or implied.</p></div></div>
          <div className="disclaimer" id="Disclaimer"><strong>Professional disclaimer</strong><p>This summary is informational only. Past matters do not guarantee a similar result and no reader should rely on this description as legal advice.</p></div>
        </article>
      </section>
      <QueryBanner navigate={navigate} />
    </>
  );
}

function QueryPage() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent) => { event.preventDefault(); setSent(true); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return (
    <>
      <PageHero eyebrow="LEGAL QUERY" title="Tell us about your matter." copy="Share the essential details below. Your information will be reviewed with professional care and confidentiality." />
      <section className="section shell form-layout">
        <div className="form-intro">
          <p className="eyebrow">BEFORE YOU BEGIN</p>
          <Heading level={3}>A focused note helps us understand where to begin.</Heading>
          <ol><li><span>01</span>Outline the key facts and dates.</li><li><span>02</span>Identify any order or notice received.</li><li><span>03</span>Attach only relevant documents.</li></ol>
          <div className="privacy-note"><strong>Your information is treated responsibly.</strong><p>Submitting this form does not by itself create an advocate-client relationship.</p></div>
        </div>
        {sent ? (
          <div className="success-panel"><span className="success-check">✓</span><p className="eyebrow">SUBMISSION COMPLETE</p><Heading>Your query has been received.</Heading><p>Thank you for sharing the details. The office will review your submission and respond using your preferred contact method.</p><Button onClick={() => setSent(false)}>Submit another query</Button></div>
        ) : (
          <form className="query-form" onSubmit={submit}>
            <div className="form-section"><span>01</span><div><Heading level={3}>Your details</Heading><p>How may we reach you?</p></div></div>
            <div className="form-grid"><Field label="Full name" placeholder="Enter your full name" required /><Field label="Email address" type="email" placeholder="name@example.com" required /><Field label="Phone number" type="tel" placeholder="+91" required /><Field label="Preferred contact" options={["Phone", "Email", "WhatsApp"]} required /></div>
            <div className="form-section"><span>02</span><div><Heading level={3}>Your matter</Heading><p>Provide a brief, factual summary.</p></div></div>
            <div className="form-grid"><Field label="Service category" options={["Armed Forces", "CAPF", "Government employee", "Retired personnel", "Family / dependant", "Other"]} required /><Field label="Subject" placeholder="Brief subject of your matter" required /><Field label="Your query" type="textarea" placeholder="Describe the relevant facts, dates and any order received..." required /><Field label="Supporting documents (optional)" type="file" /></div>
            <label className="consent"><input required type="checkbox" /> <span>I have read the disclaimer and understand that this submission does not create an advocate-client relationship.</span></label>
            <Button type="submit">Submit legal query <Arrow /></Button>
          </form>
        )}
      </section>
    </>
  );
}

function Portal({ navigate }: { navigate: (page: Page) => void }) {
  const [signup, setSignup] = useState(false);
  return (
    <section className="portal">
      <div className="portal-brand"><Brand /><div><p className="eyebrow light">SECURE CLIENT ACCESS</p><Heading level={1}>Your matter, organised and accessible.</Heading><p>Review case updates, upcoming dates and documents through a dedicated, private workspace.</p></div><small>Secure access · Confidential information</small></div>
      <div className="login-wrap">
        <div className="login-panel">
          <p className="eyebrow">{signup ? "CREATE ACCESS" : "CLIENT PORTAL"}</p>
          <Heading>{signup ? "Request an account." : "Welcome back."}</Heading>
          <p>{signup ? "Access is created after verification by the office." : "Sign in to view your case workspace."}</p>
          <form onSubmit={(e) => { e.preventDefault(); navigate("dashboard"); }}>
            {signup && <Field label="Full name" placeholder="Your name" required />}
            <Field label="Email address" type="email" placeholder="name@example.com" required />
            <Field label={signup ? "Create password" : "Password"} type="text" placeholder="••••••••" required />
            <Button type="submit" className="full">{signup ? "Request access" : "Sign in securely"} <Arrow /></Button>
          </form>
          <button className="switch-auth" onClick={() => setSignup(!signup)}>{signup ? "Already registered? Sign in" : "New client? Request portal access"}</button>
          <button className="back-site" onClick={() => navigate("home")}>← Return to website</button>
        </div>
      </div>
    </section>
  );
}

const timeline = [
  ["Registered", "12 Mar 2025", "complete"],
  ["Documents reviewed", "18 Mar 2025", "complete"],
  ["Petition filed", "02 Apr 2025", "complete"],
  ["First hearing", "24 Apr 2025", "current"],
  ["Next hearing", "18 Jul 2025", "upcoming"],
  ["Final order", "Pending", "upcoming"],
];

function Dashboard({ navigate, admin = false }: { navigate: (page: Page) => void; admin?: boolean }) {
  return (
    <div className="dashboard-shell">
      <aside className="sidebar">
        <Brand compact />
        <nav>
          {(admin ? ["Overview", "Clients", "Cases", "Articles", "Media", "Queries", "Settings"] : ["Overview", "My cases", "Documents", "Messages", "Profile"]).map((item, i) => <button className={i === 0 ? "active" : ""} key={item}><span>{["⌂", "◇", "□", "≡", "○", "✉", "⚙"][i]}</span>{item}{item === "Messages" && <b>2</b>}</button>)}
        </nav>
        <button className="sidebar-exit" onClick={() => navigate("home")}>← Back to website</button>
      </aside>
      <main className="dashboard">
        <div className="dash-top"><div><p className="eyebrow">{admin ? "ADMINISTRATION" : "CLIENT PORTAL"}</p><Heading>{admin ? "Practice overview" : "Good morning, Client."}</Heading></div><div className="user-chip"><span>{admin ? "AS" : "RK"}</span><div><strong>{admin ? "A. Sharma" : "R. Kumar"}</strong><small>{admin ? "Administrator" : "Client ID · CL-0048"}</small></div></div></div>
        <div className="metric-grid">
          {(admin ? [["48", "Active clients", "+3 this month"], ["27", "Open cases", "6 awaiting action"], ["08", "New queries", "Needs review"], ["12", "Published articles", "2 drafts"]] : [["02", "Active cases", "1 upcoming hearing"], ["04", "Recent updates", "Last 30 days"], ["12", "Documents", "2 newly added"], ["02", "Messages", "Unread"]]).map(([value, label, note]) => <div className="metric" key={label}><span>{label}</span><strong>{value}</strong><small>{note}</small></div>)}
        </div>
        {admin ? <AdminTable /> : (
          <div className="dash-grid">
            <section className="dash-card case-summary">
              <div className="dash-card-head"><div><p className="eyebrow">ACTIVE MATTER</p><Heading level={3}>Pension entitlement matter</Heading></div><span className="status status-ongoing">Ongoing</span></div>
              <div className="mini-meta"><span>Forum<strong>Armed Forces Tribunal</strong></span><span>Next hearing<strong>18 Jul 2025</strong></span><span>Reference<strong>MAT-2025-014</strong></span></div>
              <div className="timeline">{timeline.map(([name, date, status]) => <div className={`timeline-item ${status}`} key={name}><i /><span><strong>{name}</strong><small>{date}</small></span></div>)}</div>
              <Button variant="text" onClick={() => navigate("client-case")}>View case details <Arrow /></Button>
            </section>
            <section className="dash-card updates"><div className="dash-card-head"><Heading level={3}>Recent updates</Heading><button>View all</button></div>
              {[
                ["Hearing date confirmed", "The next date has been listed for 18 July 2025.", "Today"],
                ["Document added", "Reply affidavit has been uploaded.", "10 Jun"],
                ["Office note", "Brief conference completed with counsel.", "28 May"],
              ].map(([title, text, date]) => <div className="update" key={title}><i /><div><strong>{title}</strong><p>{text}</p></div><small>{date}</small></div>)}
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

function AdminTable() {
  return (
    <section className="dash-card admin-table">
      <div className="dash-card-head"><div><p className="eyebrow">INBOX</p><Heading level={3}>Recent legal queries</Heading></div><Button>Review queries</Button></div>
      <div className="table-head"><span>Client</span><span>Category</span><span>Received</span><span>Status</span><span /></div>
      {[["R. Mehta", "Armed Forces", "Today, 10:24", "New"], ["S. Biswas", "CAPF", "Yesterday", "Reviewing"], ["P. Nair", "Pension", "12 Jun 2025", "Responded"], ["K. Singh", "Government", "11 Jun 2025", "New"]].map((row) => <div className="table-row" key={row[0]}>{row.map((cell, i) => <span key={cell}>{i === 0 && <i>{cell.split(" ").map(x => x[0]).join("")}</i>}{cell}</span>)}<button>•••</button></div>)}
    </section>
  );
}

function EditorialPage({ type, navigate }: { type: "media" | "blog"; navigate: (page: Page) => void }) {
  return (
    <>
      <PageHero eyebrow={type === "media" ? "IN THE NEWS" : "LEGAL INSIGHTS"} title={type === "media" ? "Commentary in the public record." : "Analysis for those who serve."} copy={type === "media" ? "Selected commentary and contributions on developments in service and public law." : "Clear, practical writing on the decisions, processes and rights that shape public service."} />
      <section className="section shell">
        {type === "media" ? (
          <>
            <div className="newspaper-feature"><div className="paper-mast"><span>THE PUBLIC LAW REVIEW</span><small>INDEPENDENT · INFORMED · CURRENT</small></div><div className="paper-grid"><div><p className="eyebrow">EXPERT COMMENT</p><Heading level={1}>“The record is often where a service matter is won or lost.”</Heading><p>A discussion on administrative fairness, speaking orders and the importance of preserving contemporaneous records.</p><Button variant="text">Read coverage <Arrow /></Button></div><div className="paper-sidebar"><strong>Also in this edition</strong><p>Understanding reasoned administrative decisions</p><p>Pension reform and pending representations</p><p>Procedural fairness in disciplinary review</p></div></div></div>
            <div className="carousel-controls"><span>01 / 04</span><div><button>←</button><button>→</button></div></div>
          </>
        ) : (
          <><div className="featured-blog"><div className="article-art"><span>FEATURED ANALYSIS / 01</span><div className="art-lines" /></div><div><p className="eyebrow">SERVICE LAW · 12 MIN READ</p><Heading level={1}>Reasoned decisions are not a formality. They are a safeguard.</Heading><p>Why speaking orders matter, what a legally adequate decision should contain, and how an incomplete record may affect review.</p><Button onClick={() => navigate("article")}>Read featured analysis <Arrow /></Button></div></div>
          <div className="filter-bar compact">{["All", "Service", "Armed Forces", "CAPF", "Pension", "Pay", "Government", "Judgments"].map((x, i) => <button className={i === 0 ? "filter active" : "filter"} key={x}>{x}</button>)}</div>
          <div className="article-grid blog-grid"><ArticleCard navigate={navigate} /><ArticleCard category="Pension" title="Disability pension and the importance of medical records" navigate={navigate} /><ArticleCard category="CAPF" title="Proportionality in disciplinary proceedings" navigate={navigate} /><ArticleCard category="Government" title="What makes an administrative order reviewable?" navigate={navigate} /></div></>
        )}
      </section>
    </>
  );
}

function GenericPage({ page, navigate }: { page: Page; navigate: (page: Page) => void }) {
  const content = page === "about"
    ? ["ABOUT THE PRACTICE", "Independent counsel. Institutional understanding.", "A focused practice built around service law, public duty and the people behind every record."]
    : page === "contact"
      ? ["CONTACT", "A considered first conversation.", "For appointments, professional enquiries or chamber correspondence, contact the office below."]
      : ["PRIVACY & DISCLAIMER", "Professional information, responsibly presented.", "How this website handles information, legal notices and the limits of online content."];
  return (
    <>
      <PageHero eyebrow={content[0]} title={content[1]} copy={content[2]} />
      <section className="section shell narrow prose-page">
        {page === "about" ? <><p className="lead">The practice serves Armed Forces personnel, CAPF members, government officers, retired personnel and their families with careful, independent legal representation.</p><Heading>Method before momentum.</Heading><p>Each engagement begins with the record: service documents, orders, dates, applicable rules and the remedy available. Advice is candid and proportionate to the issue, with no claim or assurance made beyond what the facts and law support.</p><Heading level={3}>Principles of practice</Heading><div className="value-grid">{["Clarity", "Diligence", "Confidentiality", "Respect"].map((x, i) => <div key={x}><span>0{i + 1}</span><strong>{x}</strong><p>Professional care at every stage of the engagement.</p></div>)}</div></> :
          page === "contact" ? <div className="contact-grid"><div><Heading>Office details</Heading><p><strong>Chambers</strong><br />[Editable office address]<br />New Delhi, India</p><p><strong>Email</strong><br />office@example.in</p><p><strong>Telephone</strong><br />+91 XXXXX XXXXX</p><p className="bar-note">Meetings are by prior appointment.</p></div><form className="query-form"><Field label="Name" required /><Field label="Email" type="email" required /><Field label="Message" type="textarea" required /><Button>Send enquiry</Button></form></div> :
          <><Heading>Website information</Heading><p>The material on this website is for general informational purposes only. It is not legal advice, does not constitute a solicitation, and should not be relied upon as a substitute for advice based on the facts of a specific matter.</p><Heading level={3}>No advocate-client relationship</Heading><p>Sending a query or email does not by itself create an advocate-client relationship. Such a relationship arises only after conflicts and other professional requirements are satisfied and an engagement is expressly accepted.</p><Heading level={3}>Privacy</Heading><p>Information voluntarily submitted through this website is used to assess and respond to the enquiry. Please do not send confidential or time-sensitive information before an engagement is confirmed.</p><Heading level={3}>Case summaries</Heading><p>Any matter summaries are anonymised and illustrative. Outcomes depend on facts and applicable law; past results do not assure future outcomes.</p></>}
      </section>
      <QueryBanner navigate={navigate} />
    </>
  );
}

function ArticlePage({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <>
      <section className="article-hero"><div className="shell reading"><button className="back-link" onClick={() => navigate("blog")}>← Back to legal insights</button><p className="eyebrow light">SERVICE LAW · ANALYSIS</p><Heading level={1}>Reasoned decisions are not a formality. They are a safeguard.</Heading><p className="article-deck">A practical note on speaking orders, the duty to consider relevant material and the value of a complete administrative record.</p><div className="article-byline"><span>AS</span><div><strong>Advocate A. Sharma</strong><small>12 June 2025 · 12 min read</small></div></div></div></section>
      <article className="article-prose reading"><p className="lead">In public and service law, a decision often affects more than an immediate claim. It may alter seniority, pension, career progression or the standing of a person who has served for decades.</p><p>A reasoned decision demonstrates that the authority has identified the question, considered the relevant record and reached a conclusion through an intelligible process.</p><Heading>What a speaking order should show</Heading><p>The form will vary, but a defensible order ordinarily identifies the material facts, the governing provision, the principal submissions and the reasons for accepting or rejecting them.</p><blockquote>Reasons are the bridge between the material before an authority and the conclusion it reaches.</blockquote><Heading level={3}>The record matters</Heading><p>Representations, medical papers, service entries and prior correspondence should be organised chronologically. A complete record allows both the authority and any reviewing forum to understand what was before the decision-maker.</p><div className="disclaimer"><strong>Note to readers</strong><p>This article is general information and not legal advice. Legal options depend on the facts, applicable rules and forum.</p></div></article>
      <QueryBanner navigate={navigate} />
    </>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [hindi, setHindi] = useState(false);
  const navigate = (next: Page) => { setPage(next); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const portalPage = page === "portal" || page === "dashboard" || page === "admin" || page === "client-case";

  if (page === "portal") return <Portal navigate={navigate} />;
  if (page === "dashboard" || page === "client-case") return <Dashboard navigate={navigate} />;
  if (page === "admin") return <Dashboard navigate={navigate} admin />;

  return (
    <div className="app">
      {!portalPage && <Navbar page={page} navigate={navigate} hindi={hindi} setHindi={setHindi} />}
      <main>
        {page === "home" && <Home navigate={navigate} hindi={hindi} />}
        {page === "practice" && <PracticePage navigate={navigate} />}
        {page === "cases" && <CasesPage navigate={navigate} />}
        {page === "case-detail" && <CaseDetail navigate={navigate} />}
        {page === "query" && <QueryPage />}
        {(page === "media" || page === "blog") && <EditorialPage type={page} navigate={navigate} />}
        {page === "article" && <ArticlePage navigate={navigate} />}
        {(page === "about" || page === "contact" || page === "privacy") && <GenericPage page={page} navigate={navigate} />}
      </main>
      {!portalPage && <Footer navigate={navigate} />}
      <button className="portal-fab" onClick={() => navigate("portal")}>Client portal <Arrow /></button>
    </div>
  );
}
