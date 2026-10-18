export type Language = "en" | "hi";

export interface TranslationData {
  nav: {
    brandName: string;
    brandRole: string;
    home: string;
    about: string;
    practice: string;
    cases: string;
    media: string;
    blog: string;
    contact: string;
    raiseQuery: string;
    portal: string;
    langSwitch: string;
  };
  footer: {
    brandCopy: string;
    barNote: string;
    practiceHeading: string;
    quickLinksHeading: string;
    officeHeading: string;
    selectedMatters: string;
    legalInsights: string;
    clientPortal: string;
    privacyDisclaimer: string;
    chambersLocation: string;
    chambersAddress: string;
    rights: string;
    noSolicitation: string;
  };
  common: {
    backToWebsite: string;
    readMore: string;
    readAnalysis: string;
    viewAll: string;
    discussMatter: string;
    viewExpertise: string;
    raiseLegalQuery: string;
    explorePractice: string;
    consultationNotice: string;
    disclaimerTitle: string;
    close: string;
    status: {
      ongoing: string;
      reported: string;
      concluded: string;
      won: string;
      underReview: string;
    };
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroCopy: string;
    heroNote: string;
    advocateName: string;
    advocateSpecialty: string;
    stats: { number: string; label: string }[];
    editableNote: string;
    aboutEyebrow: string;
    aboutTitle: string;
    aboutQuote: string;
    aboutP1: string;
    aboutP2: string;
    aboutBtn: string;
    practiceEyebrow: string;
    practiceTitle: string;
    practiceCopy: string;
    whoEyebrow: string;
    whoTitle: string;
    whoCopy: string;
    whoList: string[];
    casesEyebrow: string;
    casesTitle: string;
    casesCopy: string;
    viewAllMatters: string;
    insightsEyebrow: string;
    insightsTitle: string;
    viewAllInsights: string;
  };
  queryBanner: {
    eyebrow: string;
    title: string;
    button: string;
  };
  practice: {
    eyebrow: string;
    title: string;
    copy: string;
    items: {
      no: string;
      title: string;
      copy: string;
      tags: string[];
      points: string[];
    }[];
  };
  cases: {
    eyebrow: string;
    title: string;
    copy: string;
    filters: string[];
    yearLabel: string;
    allYears: string;
    statusLabel: string;
    allStatuses: string;
    list: {
      category: string;
      title: string;
      court: string;
      year: string;
      status: "Ongoing" | "Reported" | "Concluded" | "Won" | "Under Review";
    }[];
  };
  caseDetail: {
    backLink: string;
    heroEyebrow: string;
    title: string;
    metaForum: string;
    metaYear: string;
    metaRef: string;
    confidential: string;
    sidebarLinks: { id: string; label: string }[];
    overviewEyebrow: string;
    overviewTitle: string;
    overviewP: string;
    blocks: {
      no: string;
      title: string;
      copy: string;
    }[];
    disclaimerTitle: string;
    disclaimerP: string;
  };
  query: {
    eyebrow: string;
    title: string;
    copy: string;
    guidelinesEyebrow: string;
    guidelinesTitle: string;
    guidelinesList: string[];
    privacyBoxTitle: string;
    privacyBoxP: string;
    successEyebrow: string;
    successTitle: string;
    successP: string;
    submitAnother: string;
    sec1Title: string;
    sec1Sub: string;
    sec2Title: string;
    sec2Sub: string;
    fullName: string;
    fullNamePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    prefContact: string;
    prefOptions: string[];
    serviceCategory: string;
    serviceOptions: string[];
    subject: string;
    subjectPlaceholder: string;
    queryLabel: string;
    queryPlaceholder: string;
    docsLabel: string;
    consentText: string;
    submitBtn: string;
  };
  portal: {
    leftEyebrow: string;
    leftTitle: string;
    leftP: string;
    leftFoot: string;
    signinEyebrow: string;
    signupEyebrow: string;
    signinTitle: string;
    signupTitle: string;
    signinSub: string;
    signupSub: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    passLabel: string;
    passSignupLabel: string;
    passPlaceholder: string;
    signinBtn: string;
    signupBtn: string;
    switchSignup: string;
    switchSignin: string;
    returnToWeb: string;
  };
  dashboard: {
    adminEyebrow: string;
    clientEyebrow: string;
    adminTitle: string;
    clientTitle: string;
    adminRole: string;
    clientRole: string;
    adminNav: string[];
    clientNav: string[];
    adminMetrics: { value: string; label: string; note: string }[];
    clientMetrics: { value: string; label: string; note: string }[];
    activeMatterEyebrow: string;
    activeMatterTitle: string;
    forum: string;
    nextHearing: string;
    reference: string;
    viewCaseDetails: string;
    recentUpdatesHeading: string;
    viewAllUpdates: string;
    timeline: { title: string; date: string; status: "complete" | "current" | "upcoming" }[];
    updates: { title: string; text: string; date: string }[];
    inboxEyebrow: string;
    inboxTitle: string;
    reviewBtn: string;
    inboxCols: string[];
    inboxRows: { client: string; category: string; received: string; status: string }[];
  };
  editorial: {
    mediaEyebrow: string;
    blogEyebrow: string;
    mediaTitle: string;
    blogTitle: string;
    mediaCopy: string;
    blogCopy: string;
    paperMasthead: string;
    paperSub: string;
    commentEyebrow: string;
    commentQuote: string;
    commentCopy: string;
    readCoverage: string;
    sidebarTitle: string;
    sidebarArticles: string[];
    featuredBlogBadge: string;
    featuredBlogEyebrow: string;
    featuredBlogTitle: string;
    featuredBlogCopy: string;
    readFeatured: string;
    categories: string[];
    articleCards: {
      category: string;
      title: string;
      copy: string;
      readTime: string;
    }[];
  };
  article: {
    backLink: string;
    eyebrow: string;
    title: string;
    deck: string;
    author: string;
    dateMeta: string;
    lead: string;
    p1: string;
    h1: string;
    p2: string;
    quote: string;
    h2: string;
    p3: string;
    disclaimerTitle: string;
    disclaimerP: string;
  };
  about: {
    eyebrow: string;
    title: string;
    copy: string;
    lead: string;
    section1Heading: string;
    section1P: string;
    principlesHeading: string;
    principles: { title: string; copy: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    copy: string;
    officeHeading: string;
    chambersLabel: string;
    chambersText: string;
    emailLabel: string;
    phoneLabel: string;
    appointmentNote: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    sendEnquiry: string;
  };
  privacy: {
    eyebrow: string;
    title: string;
    copy: string;
    sec1Heading: string;
    sec1P: string;
    sec2Heading: string;
    sec2P: string;
    sec3Heading: string;
    sec3P: string;
    sec4Heading: string;
    sec4P: string;
  };
}

export const translations: Record<Language, TranslationData> = {
  en: {
    nav: {
      brandName: "Advocate A. Sharma",
      brandRole: "Armed Forces & Service Law",
      home: "Home",
      about: "About",
      practice: "Practice",
      cases: "Cases",
      media: "Media",
      blog: "Blog",
      contact: "Contact",
      raiseQuery: "Raise Query",
      portal: "Client portal",
      langSwitch: "हिंदी",
    },
    footer: {
      brandCopy: "Focused legal counsel for members of the Armed Forces, CAPF, government services, retired personnel and their families.",
      barNote: "Enrolment details: Bar Council of Delhi [Editable placeholder]",
      practiceHeading: "Practice",
      quickLinksHeading: "Quick links",
      officeHeading: "Chambers & Office",
      selectedMatters: "Selected matters",
      legalInsights: "Legal insights",
      clientPortal: "Client portal",
      privacyDisclaimer: "Privacy & disclaimer",
      chambersLocation: "New Delhi",
      chambersAddress: "High Court & AFT Chambers, New Delhi\n+91 XXXXX XXXXX · office@example.in",
      rights: "© 2025 Advocate A. Sharma. All rights reserved.",
      noSolicitation: "Professional website · No solicitation or advertisement intended",
    },
    common: {
      backToWebsite: "← Return to website",
      readMore: "Read more",
      readAnalysis: "Read analysis",
      viewAll: "View all",
      discussMatter: "Discuss a matter",
      viewExpertise: "View expertise",
      raiseLegalQuery: "Raise a Legal Query",
      explorePractice: "Explore Practice Areas",
      consultationNotice: "Meetings and consultations are strictly by prior appointment.",
      disclaimerTitle: "Professional Disclaimer",
      close: "Close",
      status: {
        ongoing: "Ongoing",
        reported: "Reported",
        concluded: "Concluded",
        won: "Won",
        underReview: "Under Review",
      },
    },
    home: {
      heroEyebrow: "LEGAL COUNSEL FOR ARMED FORCES & GOVERNMENT PERSONNEL",
      heroTitle: "Experienced Legal Representation for Those Who Serve.",
      heroCopy: "Strategic, diligent and personal counsel across service law, Armed Forces matters and constitutional remedies before the AFT, High Courts & Supreme Court.",
      heroNote: "Based in New Delhi · Representing armed forces & service personnel across India",
      advocateName: "Advocate A. Sharma",
      advocateSpecialty: "Armed Forces & Service Law",
      stats: [
        { number: "20+", label: "Years of Practice" },
        { number: "1,200+", label: "Matters Handled" },
        { number: "85+", label: "Reported Judgments" },
        { number: "30+", label: "Legal Publications" },
      ],
      editableNote: "Practice metrics & milestones",
      aboutEyebrow: "THE PRACTICE",
      aboutTitle: "Clarity in counsel. Resolve in representation.",
      aboutQuote: "“Every service dispute carries a professional career, a family’s security and a future that deserves diligent protection.”",
      aboutP1: "The practice is dedicated to individuals who serve the nation and public institutions. We combine rigorous legal analysis with an intimate understanding of military hierarchies, administrative processes and the human impact of each dispute.",
      aboutP2: "Every engagement begins with a candid assessment—what the law permits, where the service record stands and what course of action best protects the client’s legal rights.",
      aboutBtn: "About the practice",
      practiceEyebrow: "AREAS OF PRACTICE",
      practiceTitle: "Focused legal experience.",
      practiceCopy: "Advice and representation informed by the distinct structures of military regulations, central civil service rules and constitutional remedies.",
      whoEyebrow: "WHO WE HELP",
      whoTitle: "Counsel for every stage of public service.",
      whoCopy: "From an officer facing a career-defining disciplinary inquiry to a veteran pursuing a rightful disability pension, representation remains precise, respectful and steadfast.",
      whoList: [
        "Serving Officers & Personnel (Army, Navy, Air Force)",
        "Paramilitary & CAPF Personnel (BSF, CRPF, CISF, ITBP, SSB, AR)",
        "Veterans, Ex-Servicemen & War Widows",
        "Central & State Government Employees",
      ],
      casesEyebrow: "SELECTED MATTERS",
      casesTitle: "Recent representative work.",
      casesCopy: "Illustrative matter summaries. Client identities and confidential particulars are strictly withheld in accordance with legal ethics.",
      viewAllMatters: "View all matters",
      insightsEyebrow: "LEGAL INSIGHTS",
      insightsTitle: "Law, explained with context.",
      viewAllInsights: "View all insights",
    },
    queryBanner: {
      eyebrow: "SEEKING LEGAL GUIDANCE?",
      title: "Begin with a considered assessment of your matter.",
      button: "Raise a legal query",
    },
    practice: {
      eyebrow: "PRACTICE AREAS",
      title: "Specialist counsel for service and public law.",
      copy: "Focused representation at the intersection of individual service rights, institutional procedures and constitutional guarantees.",
      items: [
        {
          no: "01",
          title: "Armed Forces Law",
          copy: "Litigation before the Armed Forces Tribunal (Principal & Regional Benches) and the Supreme Court of India.",
          tags: ["Army", "Navy", "Air Force", "AFT"],
          points: [
            "Court Martial & Summary Court Martial (SCM/GCM/DCM)",
            "Disability Pension, Rounding-off & Broad-banding claims",
            "Supersession, Confidential Reports (ACR/APAR) & Promotions",
            "Release, Invalidation, Discharge & Pre-mature Retirement",
            "Non-Functional Financial Upgradation (NFFU) & Pay disputes",
          ],
        },
        {
          no: "02",
          title: "CAPF Matters",
          copy: "Representation for central paramilitary officers and personnel under specialized service rules before High Courts.",
          tags: ["BSF", "CRPF", "CISF", "ITBP", "SSB", "Assam Rifles"],
          points: [
            "Departmental Inquiries & Disciplinary Penalties",
            "Compassionate Appointments & Medical Invalidation",
            "Hard Area / Field Posting & Arbitrary Transfer orders",
            "Service Seniority, Promotion Boards & ACP/MACP allowances",
          ],
        },
        {
          no: "03",
          title: "Government Service Law",
          copy: "Advocacy before the Central Administrative Tribunal (CAT), State Administrative Tribunals and High Courts.",
          tags: ["Central Govt", "State Employees", "PSUs", "CAT"],
          points: [
            "Departmental charge-sheets & Rule 14 / Rule 16 inquiries",
            "Fixation of Pension, Gratuity & Withheld Terminal Benefits",
            "Recovery of Alleged Excess Payments Post-Retirement",
            "Regularization, Probation clearance & Contractual Rights",
          ],
        },
        {
          no: "04",
          title: "Constitutional Law & Writs",
          copy: "Invoking extraordinary writ jurisdictions under Article 226 and Article 32 of the Constitution of India.",
          tags: ["High Courts", "Supreme Court", "Writ Jurisdiction"],
          points: [
            "Writ of Certiorari against Arbitrary Administrative Orders",
            "Writ of Mandamus for Enforcement of Statutory Rights",
            "Challenge to Unconstitutional Service Rules & Office Memorandums",
            "Special Leave Petitions (SLP) & Civil Appeals in Supreme Court",
          ],
        },
      ],
    },
    cases: {
      eyebrow: "REPRESENTATIVE WORK",
      title: "Selected matter records.",
      copy: "An overview of legal issues handled across military jurisprudence, central service tribunals and constitutional courts.",
      filters: ["All matters", "Armed Forces", "CAPF", "Government", "Constitutional"],
      yearLabel: "Year",
      allYears: "All years",
      statusLabel: "Status",
      allStatuses: "Any status",
      list: [
        {
          category: "Armed Forces · Disability Pension",
          title: "Interpretation of entitlement rules and causal connection for disability pension after service invalidation",
          court: "Armed Forces Tribunal",
          year: "2025",
          status: "Ongoing",
        },
        {
          category: "Armed Forces · Promotion",
          title: "Challenge to non-empanelment for promotion based on expunged adverse entries in Annual Confidential Report",
          court: "Armed Forces Tribunal",
          year: "2024",
          status: "Won",
        },
        {
          category: "CAPF · Disciplinary Proceedings",
          title: "Judicial review of disproportionate dismissal penalty without compliance with natural justice standards",
          court: "High Court of Delhi",
          year: "2024",
          status: "Reported",
        },
        {
          category: "Government Service · Pay & Recovery",
          title: "Challenge to retrospective recovery of pay and pension benefits from retired civil servant",
          court: "Central Administrative Tribunal",
          year: "2024",
          status: "Won",
        },
        {
          category: "CAPF · Transfer on Medical Grounds",
          title: "Writ petition seeking compassionate posting for serving personnel with chronically ill dependants",
          court: "High Court",
          year: "2025",
          status: "Under Review",
        },
        {
          category: "Armed Forces · Family Pension",
          title: "Resolution of prolonged withholding of special family pension to war widow following bureaucratic disputes",
          court: "Armed Forces Tribunal",
          year: "2023",
          status: "Concluded",
        },
      ],
    },
    caseDetail: {
      backLink: "← Back to selected matters",
      heroEyebrow: "ARMED FORCES · DISABILITY PENSION",
      title: "Interpretation of pension entitlement following invalidation from service",
      metaForum: "Forum",
      metaYear: "Year",
      metaRef: "Matter Reference",
      confidential: "[Confidential / Anonymized]",
      sidebarLinks: [
        { id: "Overview", label: "Overview" },
        { id: "Legal-issue", label: "Legal issue" },
        { id: "Representation", label: "Representation" },
        { id: "Current-status", label: "Current status" },
        { id: "Disclaimer", label: "Disclaimer" },
      ],
      overviewEyebrow: "MATTER OVERVIEW",
      overviewTitle: "The institutional context.",
      overviewP: "The matter concerns statutory interpretation of applicable pension entitlement rules following medical board invalidation from armed service. The factual summary is strictly generalized and omits names, units and case numbers to safeguard confidentiality.",
      blocks: [
        {
          no: "01",
          title: "Legal issue",
          copy: "Whether medical board findings attributing the condition to service conditions in high-altitude postings satisfy statutory entitlement guidelines under the Pension Regulations for the Army, and whether initial rejection was contrary to established Supreme Court precedents.",
        },
        {
          no: "02",
          title: "Legal strategy & Representation",
          copy: "Comprehensive review of service sheets, medical board proceedings, and relevant government instructions; preparation of Original Application before the Armed Forces Tribunal; reliance on governing principles regarding attributable service disability.",
        },
        {
          no: "03",
          title: "Current status",
          copy: "Pleadings are complete and the matter is scheduled for final hearing. No specific outcome is predicted or guaranteed.",
        },
      ],
      disclaimerTitle: "Professional Disclaimer",
      disclaimerP: "This summary is published solely for educational and informational purposes in accordance with Bar Council of India norms. Past cases do not guarantee future results in any pending or prospective matter.",
    },
    query: {
      eyebrow: "LEGAL QUERY INTAKE",
      title: "Submit details of your matter.",
      copy: "Share the essential facts below. Your submission is received in strict legal confidence and evaluated with utmost care.",
      guidelinesEyebrow: "BEFORE YOU BEGIN",
      guidelinesTitle: "A concise overview helps us provide clear initial direction.",
      guidelinesList: [
        "Chronicle key dates, postings and the sequence of events.",
        "Mention specific orders, show-cause notices or rejection letters received.",
        "Upload only relevant documents (order copies, inquiry findings, representations).",
      ],
      privacyBoxTitle: "Strict Professional Privilege",
      privacyBoxP: "All communications are maintained with confidentiality. Submitting this form initiates an intake evaluation and does not by itself establish a formal advocate-client relationship.",
      successEyebrow: "SUBMISSION SUCCESSFUL",
      successTitle: "Your legal query has been received.",
      successP: "Thank you for providing the facts. The office will review the record and contact you through your specified communication channel.",
      submitAnother: "Submit another query",
      sec1Title: "Contact & Personnel Details",
      sec1Sub: "How may the chambers correspond with you?",
      sec2Title: "Matter Particulars",
      sec2Sub: "Provide a factual summary of the dispute.",
      fullName: "Full Name & Rank (if applicable)",
      fullNamePlaceholder: "e.g. Major R. K. Sharma / Sh. Rajesh Kumar",
      email: "Email Address",
      emailPlaceholder: "officer@example.com",
      phone: "Mobile Number",
      phonePlaceholder: "+91 98765 43210",
      prefContact: "Preferred Mode of Contact",
      prefOptions: ["Phone Call", "WhatsApp Message", "Email Correspondence"],
      serviceCategory: "Service Branch / Organization",
      serviceOptions: [
        "Indian Army",
        "Indian Navy",
        "Indian Air Force",
        "Border Security Force (BSF)",
        "Central Reserve Police Force (CRPF)",
        "Central Industrial Security Force (CISF)",
        "ITBP / SSB / Assam Rifles",
        "Central Government Civilian Employee",
        "State Government Employee",
        "Veteran / Retired Personnel",
        "Spouse / Dependant Family Member",
      ],
      subject: "Subject / Nature of Dispute",
      subjectPlaceholder: "e.g., Wrongful denial of disability pension / Disciplinary penalty appeal",
      queryLabel: "Summary of Facts & Relief Sought",
      queryPlaceholder: "Detail the date of enlistment/joining, orders received, adverse actions taken, representations filed, and the remedy you seek...",
      docsLabel: "Attach Supporting Documents (PDF, DOCX, Images up to 25MB)",
      consentText: "I confirm that the facts stated above are accurate to my knowledge and acknowledge that this inquiry is subject to professional verification and chamber conflict check.",
      submitBtn: "Submit Legal Query",
    },
    portal: {
      leftEyebrow: "SECURE CLIENT ACCESS",
      leftTitle: "Your legal matter, transparent and accessible.",
      leftP: "Track case status, upcoming tribunal hearing dates, filed petitions and chamber orders securely through a private portal.",
      leftFoot: "256-Bit Encrypted · Bar Council of India Compliant",
      signinEyebrow: "CLIENT LOGIN",
      signupEyebrow: "REQUEST ACCESS",
      signinTitle: "Welcome back.",
      signupTitle: "Request portal access.",
      signinSub: "Sign in with your verified client credentials.",
      signupSub: "Portal access is granted to active clients upon verification.",
      nameLabel: "Full Name",
      namePlaceholder: "Your full name",
      emailLabel: "Registered Email Address",
      emailPlaceholder: "client@example.com",
      passLabel: "Password",
      passSignupLabel: "Choose a secure password",
      passPlaceholder: "••••••••••••",
      signinBtn: "Sign In Securely",
      signupBtn: "Submit Access Request",
      switchSignup: "New client? Request portal credentials",
      switchSignin: "Already registered? Sign in here",
      returnToWeb: "← Return to website",
    },
    dashboard: {
      adminEyebrow: "CHAMBER MANAGEMENT",
      clientEyebrow: "CLIENT WORKSPACE",
      adminTitle: "Chamber Practice Overview",
      clientTitle: "Welcome, Client Workspace",
      adminRole: "Senior Advocate Chambers",
      clientRole: "Matter ID · AFT-2025-089",
      adminNav: ["Overview", "Client Registry", "Case Dossiers", "Publications", "Media", "Query Inbox", "Chamber Settings"],
      clientNav: ["Overview", "My Case", "Court Documents", "Chamber Messages", "Profile"],
      adminMetrics: [
        { value: "48", label: "Active Clients", note: "+3 enrolled this month" },
        { value: "27", label: "Ongoing Cases", note: "6 hearings this week" },
        { value: "08", label: "New Inquiries", note: "Pending initial review" },
        { value: "14", label: "Reported Judgments", note: "Published in law journals" },
      ],
      clientMetrics: [
        { value: "01", label: "Active Matter", note: "Armed Forces Tribunal" },
        { value: "18 Jul", label: "Next Hearing", note: "Final argument listing" },
        { value: "08", label: "Case Documents", note: "All pleadings uploaded" },
        { value: "02", label: "New Updates", note: "Reply affidavit filed" },
      ],
      activeMatterEyebrow: "CURRENT MATTER",
      activeMatterTitle: "Disability Pension Entitlement Application",
      forum: "Armed Forces Tribunal (PB, New Delhi)",
      nextHearing: "18 July 2025",
      reference: "OA No. 142/2025",
      viewCaseDetails: "View full case dossier",
      recentUpdatesHeading: "Chronological Case Updates",
      viewAllUpdates: "View all logs",
      timeline: [
        { title: "Matter Intake & Consultation", date: "12 Jan 2025", status: "complete" },
        { title: "Medical Record Audit & Precedents", date: "28 Jan 2025", status: "complete" },
        { title: "Original Application Filed in AFT", date: "15 Feb 2025", status: "complete" },
        { title: "Notice Issued to Union of India", date: "18 Mar 2025", status: "complete" },
        { title: "Next Hearing (Counter Affidavit)", date: "18 Jul 2025", status: "current" },
        { title: "Final Hearing & Judgement", date: "Scheduled 2025", status: "upcoming" },
      ],
      updates: [
        { title: "Hearing date confirmed by Registry", text: "The Principal Bench has listed OA 142/2025 for final counter verification.", date: "Today" },
        { title: "Counter Affidavit served by Respondents", text: "Union of India has filed reply. Chamber is drafting rejoinder.", date: "14 Jun" },
        { title: "Chamber Conference completed", text: "Strategy review completed with advocate in chambers.", date: "02 Jun" },
      ],
      inboxEyebrow: "INTAKE MANAGEMENT",
      inboxTitle: "Recent Client Inquiries",
      reviewBtn: "Open Full Inbox",
      inboxCols: ["Applicant", "Service Wing", "Received Date", "Status", "Action"],
      inboxRows: [
        { client: "Subedar R. K. Mehta", category: "Indian Army", received: "Today, 10:24 AM", status: "New Inquiry" },
        { client: "Inspector S. Biswas", category: "BSF", received: "Yesterday", status: "Under Review" },
        { client: "Wg Cdr P. Nair (Retd)", category: "Indian Air Force", received: "12 Jun 2025", status: "Consultation Scheduled" },
        { client: "Sh. Kuldeep Singh", category: "Central Govt", received: "10 Jun 2025", status: "Response Sent" },
      ],
    },
    editorial: {
      mediaEyebrow: "PUBLIC RECORD & COMMENTARY",
      blogEyebrow: "LEGAL ARTICLES & DISCOURSES",
      mediaTitle: "Commentary in the public domain.",
      blogTitle: "Legal analysis for those who serve.",
      mediaCopy: "Selected media contributions, symposium presentations, and insights into key developments in military jurisprudence.",
      blogCopy: "Rigorous, analytical writing dissecting service rules, administrative justice, and constitutional protections.",
      paperMasthead: "THE SERVICE LAW CHRONICLE",
      paperSub: "AUTHORITATIVE · INDEPENDENT · JURISPRUDENTIAL",
      commentEyebrow: "EXPERT OPINION",
      commentQuote: "“The contemporaneous service record is the foundation upon which military justice is sustained or compromised.”",
      commentCopy: "A scholarly analysis of administrative fairness, speaking orders, and the non-derogable requirement of reasoned decisions when dealing with military careers.",
      readCoverage: "Read full analysis",
      sidebarTitle: "Key Discussions in this Edition",
      sidebarArticles: [
        "Doctrine of Promissory Estoppel in Central Service Rules",
        "Disability Pension Entitlement: Precedents from Dharamvir Singh to present",
        "Procedural Regularity in Summary Court Martial Proceedings",
      ],
      featuredBlogBadge: "FEATURED DISCOURSE / 01",
      featuredBlogEyebrow: "ADMINISTRATIVE LAW · 12 MIN READ",
      featuredBlogTitle: "Reasoned decisions are not a procedural formality. They are a constitutional safeguard.",
      featuredBlogCopy: "Why a speaking order is mandatory in quasi-judicial inquiries, what constitutes an intelligible decision, and how appellate review remedies administrative lacunae.",
      readFeatured: "Read complete article",
      categories: ["All", "Armed Forces", "CAPF", "Disability Pension", "Court Martial", "Pay & Seniority", "High Court Rulings"],
      articleCards: [
        {
          category: "Armed Forces Law",
          title: "Fair consideration in promotion boards: Decoding the legal standards",
          copy: "Examining when expunged ACR remarks warrant a fresh Special Review Board (SRB) under AFT directions.",
          readTime: "8 min read",
        },
        {
          category: "Pension Regulations",
          title: "Disability pension: Burden of proof, medical causality and rounding off",
          copy: "How the legal presumption of sound health at enlistment applies under Army Pension Regulations.",
          readTime: "10 min read",
        },
        {
          category: "CAPF Jurisprudence",
          title: "Proportionality doctrine in paramilitary disciplinary dismissals",
          copy: "Judicial intervention in cases where punishments shocking to the judicial conscience are imposed.",
          readTime: "7 min read",
        },
        {
          category: "Central Civil Services",
          title: "Recovery of excess salary or pension post-retirement: The legal shield",
          copy: "A review of the Supreme Court's landmark Rafiq Masih principles protecting retired employees.",
          readTime: "9 min read",
        },
      ],
    },
    article: {
      backLink: "← Back to legal insights",
      eyebrow: "SERVICE LAW & ADMINISTRATIVE JUSTICE",
      title: "Reasoned decisions are not a formality. They are a safeguard.",
      deck: "A comprehensive examination of speaking orders, the statutory duty to evaluate material records, and the preservation of administrative integrity.",
      author: "Advocate A. Sharma",
      dateMeta: "12 June 2025 · 12 min read · Supreme Court & AFT Practice",
      lead: "In the realm of public employment and military service, an administrative order never operates in isolation. It holds the power to abruptly reshape decades of dedicated service, honor, family welfare, and financial security.",
      p1: "A reasoned order is the fundamental hallmark of natural justice. When an administrative or commanding authority issues a decision affecting a service member's career or pension, it must demonstrate on the face of the record that relevant considerations were weighed and irrelevant prejudices discarded.",
      h1: "The Core Requisites of a Legally Sustainable Speaking Order",
      p2: "Courts have repeatedly held that an administrative decision cannot hide behind cryptic or mechanical phrases such as 'after due consideration' or 'found devoid of merit'. A valid order must expressly articulate:",
      quote: "“Reasons are the bridge connecting the record before an authority to the final conclusion it announces. Without reasons, an order is an arbitrary fiat.”",
      h2: "The Indispensable Role of the Contemporaneous Record",
      p3: "Every medical examination, annual appraisal, confidential report, and formal representation constitutes an unalterable link in the chain of service. In litigation before the Armed Forces Tribunal and the High Courts, success fundamentally depends upon the chronological integrity of this documentary record.",
      disclaimerTitle: "Notice to Readers",
      disclaimerP: "This article is formulated strictly for jurisprudential awareness and educational reference. It does not constitute formal legal counsel. For advice on specific matters, consultation based on individual case files is required.",
    },
    about: {
      eyebrow: "ABOUT THE CHAMBERS",
      title: "Independent counsel. Institutional understanding.",
      copy: "A premier legal practice anchored in military jurisprudence, public service regulations, and the human lives behind every official file.",
      lead: "The practice provides dedicated, strategic representation to officers and soldiers of the Armed Forces, personnel of the Central Armed Police Forces, government servants, and military families across India.",
      section1Heading: "Method Before Momentum.",
      section1P: "Every brief begins with a forensic analysis of the record: service records, convening orders, charge-sheets, medical categorization boards, and governing service rules. We provide objective, candid counsel—never encouraging frivolous litigation, but vigorously prosecuting every legitimate entitlement before competent courts.",
      principlesHeading: "Foundations of Chamber Practice",
      principles: [
        { title: "Clarity & Candor", copy: "Providing straightforward legal evaluation so clients know precisely where they stand legally before committing to litigation." },
        { title: "Meticulous Diligence", copy: "Every pleading is drafted with precision, citing verified service rules and binding Supreme Court precedents." },
        { title: "Absolute Confidentiality", copy: "Military and personal documents are guarded under strict attorney-client privilege." },
        { title: "Dignified Advocacy", copy: "Courteous yet resolute representation in courtrooms, upholding the highest standards of the Indian Bar." },
      ],
    },
    contact: {
      eyebrow: "CONTACT & CHAMBERS",
      title: "A considered first conversation.",
      copy: "For professional consultations, case review appointments, or official chamber correspondence, reach our New Delhi office.",
      officeHeading: "Chambers Information",
      chambersLabel: "New Delhi Chambers",
      chambersText: "Chamber Block, High Court & Armed Forces Tribunal Complex\nNew Delhi - 110001, India",
      emailLabel: "Official Correspondence",
      phoneLabel: "Chamber Clerk / Enquiries",
      appointmentNote: "Note: In-person chamber conferences are strictly scheduled by prior appointment.",
      formName: "Full Name",
      formEmail: "Email Address",
      formMessage: "Brief message or appointment request",
      sendEnquiry: "Send Chamber Enquiry",
    },
    privacy: {
      eyebrow: "LEGAL NOTICE & PRIVACY",
      title: "Professional information, responsibly presented.",
      copy: "Transparency regarding information processing, Bar Council of India regulations, and digital privacy.",
      sec1Heading: "Compliance with Bar Council of India Rules",
      sec1P: "This website does not solicit work or advertise legal services. Under Rule 36 of the Bar Council of India Rules, this digital presence is maintained solely for informational purposes to provide general understanding of service and armed forces law.",
      sec2Heading: "No Advocate-Client Relationship",
      sec2P: "Accessing this website, submitting an inquiry, or sending documentation does not create an advocate-client relationship. Such a relationship is established only upon formal acceptance of a vakalatnama/engagement letter after due conflict checks.",
      sec3Heading: "Confidentiality & Privacy",
      sec3P: "Information shared through online query forms is utilized solely to assess the matter and contact the sender. We do not sell, disclose, or distribute client information to third parties.",
      sec4Heading: "Anonymized Case References",
      sec4P: "All summaries of representative cases featured on this platform are strictly anonymized. Specific identifiers, unit numbers, and names have been withheld to respect client privacy and judicial ethics.",
    },
  },
  hi: {
    nav: {
      brandName: "अधिवक्ता ए. शर्मा",
      brandRole: "सशस्त्र बल एवं सेवा कानून विशेषज्ञ",
      home: "मुखपृष्ठ",
      about: "परिचय",
      practice: "कार्यक्षेत्र",
      cases: "निस्तारित वाद",
      media: "समाचार व टिप्पणी",
      blog: "विधिक आलेख",
      contact: "संपर्क",
      raiseQuery: "विधिक परामर्श",
      portal: "मुवक्किल पोर्टल",
      langSwitch: "English",
    },
    footer: {
      brandCopy: "भारतीय सशस्त्र बलों (थल सेना, नौसेना, वायु सेना), सीएपीएफ, केंद्रीय एवं राज्य कर्मचारियों, पूर्व सैनिकों तथा उनके परिवारों के लिए समर्पित विधिक परामर्श एवं प्रतिनिधित्व।",
      barNote: "पंजीकरण विवरण: बार काउंसिल ऑफ दिल्ली [संपादनीय विवरण]",
      practiceHeading: "प्रमुख कार्यक्षेत्र",
      quickLinksHeading: "त्वरित लिंक",
      officeHeading: "कार्यालय व चैंबर",
      selectedMatters: "प्रतिनिधिक वाद",
      legalInsights: "विधिक आलेख",
      clientPortal: "मुवक्किल पोर्टल",
      privacyDisclaimer: "गोपनीयता व अस्वीकरण",
      chambersLocation: "नई दिल्ली",
      chambersAddress: "उच्च न्यायालय एवं एएफटी चैंबर ब्लॉक, नई दिल्ली\n+91 XXXXX XXXXX · office@example.in",
      rights: "© 2025 अधिवक्ता ए. शर्मा। सर्वाधिकार सुरक्षित।",
      noSolicitation: "व्यावसायिक एवं सूचनात्मक वेबसाइट · किसी प्रकार का विज्ञापन या याचना निषिद्ध है",
    },
    common: {
      backToWebsite: "← मुख्य वेबसाइट पर लौटें",
      readMore: "विस्तार से पढ़ें",
      readAnalysis: "विश्लेषण पढ़ें",
      viewAll: "सभी देखें",
      discussMatter: "मामले पर चर्चा करें",
      viewExpertise: "विशेषज्ञता देखें",
      raiseLegalQuery: "विधिक परामर्श मांगें",
      explorePractice: "कार्यक्षेत्र का अन्वेषण करें",
      consultationNotice: "परामर्श एवं व्यक्तिगत भेंट केवल पूर्व निर्धारित समय (Appointment) पर मान्य है।",
      disclaimerTitle: "व्यावसायिक अस्वीकरण",
      close: "बंद करें",
      status: {
        ongoing: "प्रक्रियाधीन",
        reported: "रिपोर्टेड वाद",
        concluded: "निस्तारित",
        won: "सफल वाद",
        underReview: "पुनरावलोकन में",
      },
    },
    home: {
      heroEyebrow: "सशस्त्र बलों एवं शासकीय कार्मिकों के लिए समर्पित विधिक परामर्श",
      heroTitle: "राष्ट्र की सेवा करने वालों के लिए अनुभवी एवं सुदृढ़ कानूनी प्रतिनिधित्व।",
      heroCopy: "सशस्त्र बल अधिकरण (AFT), उच्च न्यायालयों एवं भारत के सर्वोच्च न्यायालय में सेवा कानून, सैन्य मामलों तथा संवैधानिक उपचारों के लिए रणनीतिक, निष्ठावान एवं व्यक्तिगत कानूनी पैरवी।",
      heroNote: "नई दिल्ली स्थित चैंबर · संपूर्ण भारत में सेवारत एवं सेवानिवृत्त जवानों का प्रतिनिधित्व",
      advocateName: "अधिवक्ता ए. शर्मा",
      advocateSpecialty: "सशस्त्र बल एवं सेवा विधि विशेषज्ञ",
      stats: [
        { number: "20+", label: "वर्षों का विधिक अनुभव" },
        { number: "1,200+", label: "निस्तारित एवं संचालित वाद" },
        { number: "85+", label: "रिपोर्टेड विधिक निर्णय" },
        { number: "30+", label: "विधिक शोध आलेख" },
      ],
      editableNote: "वकालत का संचित अनुभव एवं उपलब्धियां",
      aboutEyebrow: "कार्यप्रणाली एवं उद्देश्य",
      aboutTitle: "स्पष्ट कानूनी मार्गदर्शन। सशक्त अदालती प्रतिनिधित्व।",
      aboutQuote: "“प्रत्येक सेवा विवाद के पीछे एक अधिकारी या जवान का समर्पण, उसके परिवार का भविष्य और एक स्वाभिमानी जीवन जुड़ा होता है, जो निष्पक्ष न्याय का हकदार है।”",
      aboutP1: "हमारा चैंबर उन कार्मिकों के अधिकारों की रक्षा के लिए समर्पित है जो राष्ट्र और लोक संस्थाओं की सेवा करते हैं। हम सूक्ष्म कानूनी विश्लेषण को सैन्य नियमावलियों, प्रशासनिक प्रक्रियाओं और मानवीय संवेदनाओं के साथ संतुलित करते हैं।",
      aboutP2: "प्रत्येक मामले की शुरुआत निष्पक्ष एवं सत्यपरक आकलन से होती है—विधिक स्थिति क्या है, सेवा अभिलेख (Record) क्या कहता है और मुवक्किल के हितों की रक्षा हेतु कौन सा कदम सर्वोत्तम होगा।",
      aboutBtn: "चैंबर का विस्तृत परिचय",
      practiceEyebrow: "विधिक कार्यक्षेत्र",
      practiceTitle: "विशेषज्ञता युक्त कानूनी अनुभव।",
      practiceCopy: "सैन्य विनियमों, केंद्रीय सिविल सेवा नियमों एवं संवैधानिक प्रावधानों की गहरी समझ पर आधारित विधिक प्रतिनिधित्व।",
      whoEyebrow: "हम किन्हें विधिक सहायता प्रदान करते हैं",
      whoTitle: "लोक सेवा के प्रत्येक चरण में निष्पक्ष विधिक संबल।",
      whoCopy: "अनुशासनात्मक कार्रवाई का सामना कर रहे अधिकारी से लेकर अपनी वाजिब दिव्यांगता पेंशन के लिए प्रयासरत वयोवृद्ध पूर्व सैनिक तक—हमारा दृष्टिकोण सदैव सटीक, मर्यादित और संवेदनशील रहता है।",
      whoList: [
        "सेवारत सैन्य अधिकारी एवं जवान (थल सेना, नौसेना, वायु सेना)",
        "अर्धसैनिक व सीएपीएफ बल (BSF, CRPF, CISF, ITBP, SSB, असम राइफल्स)",
        "पूर्व सैनिक (Ex-Servicemen), वेटरन्स एवं सैन्य वीरांगनाएं",
        "केंद्रीय एवं राज्य सरकार के सिविल कर्मचारी",
      ],
      casesEyebrow: "प्रतिनिधिक वाद",
      casesTitle: "हाल ही में संचालित प्रमुख वाद।",
      casesCopy: "प्रकरणों का सांकेतिक विवरण। विधिक मर्यादा व गोपनीयता के तहत मुवक्किलों की व्यक्तिगत पहचान एवं गोपनीय विवरण पूर्णतः सुरक्षित रखे गए हैं।",
      viewAllMatters: "सभी वाद देखें",
      insightsEyebrow: "विधिक आलेख",
      insightsTitle: "कानून, संदर्भ और व्यावहारिक अर्थ।",
      viewAllInsights: "सभी आलेख देखें",
    },
    queryBanner: {
      eyebrow: "क्या आपको विधिक मार्गदर्शन की आवश्यकता है?",
      title: "अपने मामले के सूक्ष्म एवं तथ्यपरक मूल्यांकन से शुरुआत करें।",
      button: "विधिक परामर्श दर्ज करें",
    },
    practice: {
      eyebrow: "विशेषज्ञ कार्यक्षेत्र",
      title: "सेवा विधि एवं सार्वजनिक कानून में विशिष्ट विधिक परामर्श।",
      copy: "व्यक्तिगत सेवा अधिकारों, संस्थागत प्रक्रियाओं और संवैधानिक गारंटी के संगम पर केंद्रित न्यायिक प्रतिनिधित्व।",
      items: [
        {
          no: "01",
          title: "सशस्त्र बल कानून (Armed Forces Law)",
          copy: "सशस्त्र बल अधिकरण (प्रिंसिपल बेंच व सभी क्षेत्रीय बेंच) तथा भारत के सर्वोच्च न्यायालय में व्यापक पैरवी।",
          tags: ["थल सेना", "नौसेना", "वायु सेना", "AFT"],
          points: [
            "कोर्ट मार्शल एवं समरी कोर्ट मार्शल (SCM / GCM / DCM) की वैधता",
            "दिव्यांगता पेंशन (Disability Pension) एवं राउंडिंग-ऑफ (Rounding-off) के लाभ",
            "पदोन्नति में अनदेखी (Supersession) एवं वार्षिक गोपनीय रिपोर्ट (ACR/APAR) विवाद",
            "अमान्यीकरण (Invalidation), डिस्चार्ज एवं समयपूर्व सेवानिवृत्ति के मामले",
            "वेतन विसंगति, एमएसीपी (MACP) एवं एनएफएफयू (NFFU) से जुड़े अधिकार",
          ],
        },
        {
          no: "02",
          title: "सीएपीएफ एवं अर्धसैनिक बल मामले (CAPF)",
          copy: "केंद्रीय अर्धसैनिक बलों के जवानों एवं अधिकारियों के लिए विशिष्ट सेवा नियमों के तहत उच्च न्यायालयों में प्रतिनिधित्व।",
          tags: ["BSF", "CRPF", "CISF", "ITBP", "SSB", "असम राइफल्स"],
          points: [
            "विभागीय जांच (Departmental Inquiries) एवं अनुशासनात्मक दंड आदेश",
            "अनुकंपा नियुक्ति (Compassionate Appointment) व मेडिकल अनफिट मामले",
            "कठिन क्षेत्र तैनाती, मनमाने स्थानांतरण (Arbitrary Transfer) आदेशों की चुनौती",
            "वरिष्ठता विवाद, पदोन्नति बोर्ड एवं सेवा लाभों का निर्धारण",
          ],
        },
        {
          no: "03",
          title: "सरकारी सेवा विधि (Government Service)",
          copy: "केंद्रीय प्रशासनिक अधिकरण (CAT), राज्य प्रशासनिक अधिकरणों एवं उच्च न्यायालयों में सिविल सेवा मामलों की वकालत।",
          tags: ["केंद्रीय कर्मचारी", "राज्य कर्मचारी", "पीएसयू", "कैट (CAT)"],
          points: [
            "विभागीय आरोप-पत्र (Charge-sheet) एवं नियम 14 / 16 की जांच",
            "पेंशन निर्धारण, ग्रेच्युटी एवं रोके गए सेवानिवृत्ति देयकों की बहाली",
            "सेवानिवृत्ति के उपरांत वेतन वसूली (Recovery) के विरुद्ध संरक्षण",
            "नियमितीकरण (Regularization), परिवीक्षा अवधि एवं संविदात्मक अधिकार",
          ],
        },
        {
          no: "04",
          title: "संवैधानिक विधि एवं रिट याचिकाएं",
          copy: "भारत के संविधान के अनुच्छेद 226 एवं अनुच्छेद 32 के अंतर्गत उच्च न्यायालयों एवं सर्वोच्च न्यायालय में असाधारण रिट अधिकारिता।",
          tags: ["उच्च न्यायालय", "सर्वोच्च न्यायालय", "रिट याचिकाएं"],
          points: [
            "मनमाने प्रशासनिक आदेशों के विरुद्ध उत्प्रेषण रिट (Certiorari)",
            "वैधानिक अधिकारों के क्रियान्वयन हेतु परमादेश रिट (Mandamus)",
            "असंवैधानिक सेवा नियमों एवं कार्यालय ज्ञापनों (OM) को चुनौती",
            "सर्वोच्च न्यायालय में विशेष अनुमति याचिकाएं (SLP) एवं सिविल अपील",
          ],
        },
      ],
    },
    cases: {
      eyebrow: "प्रतिनिधिक वाद",
      title: "प्रमुख संचालित वादों का अभिलेख।",
      copy: "सैन्य न्यायशास्त्र, केंद्रीय सेवा अधिकरणों एवं संवैधानिक न्यायालयों में संचालित विधिक विवादों का सारगर्भित अवलोकन।",
      filters: ["सभी मामले", "सशस्त्र बल", "सीएपीएफ", "सरकारी सेवा", "संवैधानिक"],
      yearLabel: "वर्ष",
      allYears: "सभी वर्ष",
      statusLabel: "स्थिति",
      allStatuses: "सभी स्थितियां",
      list: [
        {
          category: "सशस्त्र बल · दिव्यांगता पेंशन",
          title: "सेवा से अमान्यीकरण के पश्चात दिव्यांगता पेंशन हेतु पात्रता नियमों एवं कार्य-संबंधी कारणता (Attributability) की व्याख्या",
          court: "सशस्त्र बल अधिकरण (AFT)",
          year: "2025",
          status: "Ongoing",
        },
        {
          category: "सशस्त्र बल · पदोन्नति विवाद",
          title: "निरस्त की जा चुकी प्रतिकूल वार्षिक गोपनीय प्रविष्टियों (ACR) के आधार पर पदोन्नति से वंचित किए जाने को चुनौती",
          court: "सशस्त्र बल अधिकरण (AFT)",
          year: "2024",
          status: "Won",
        },
        {
          category: "सीएपीएफ · अनुशासनात्मक कार्रवाई",
          title: "प्राकृतिक न्याय के सिद्धांतों का उल्लंघन कर असंगत एवं मनमाने ढंग से सेवा से बर्खास्तगी आदेश की न्यायिक समीक्षा",
          court: "दिल्ली उच्च न्यायालय",
          year: "2024",
          status: "Reported",
        },
        {
          category: "सरकारी सेवा · वेतन व वसूली",
          title: "सेवानिवृत्त कर्मचारी से पूर्वव्यापी प्रभाव से वेतन एवं पेंशन वसूली के आदेश पर विधिक रोक",
          court: "केंद्रीय प्रशासनिक अधिकरण (CAT)",
          year: "2024",
          status: "Won",
        },
        {
          category: "सीएपीएफ · चिकित्सा आधार पर स्थानांतरण",
          title: "परिवार में गंभीर बीमारी के आधार पर गृह-क्षेत्र के समीप मानवीय तैनाती हेतु रिट याचिका",
          court: "उच्च न्यायालय",
          year: "2025",
          status: "Under Review",
        },
        {
          category: "सशस्त्र बल · पारिवारिक पेंशन",
          title: "प्रशासनिक त्रुटियों के कारण रोकी गई सैन्य वीरांगना की विशेष पारिवारिक पेंशन की संपूर्ण एरियर सहित बहाली",
          court: "सशस्त्र बल अधिकरण (AFT)",
          year: "2023",
          status: "Concluded",
        },
      ],
    },
    caseDetail: {
      backLink: "← प्रतिनिधिक वादों की सूची पर लौटें",
      heroEyebrow: "सशस्त्र बल · दिव्यांगता पेंशन वाद",
      title: "सैन्य सेवा से अमान्यीकरण (Invalidation) के उपरांत पेंशन पात्रता की विधिक व्याख्या",
      metaForum: "न्यायिक मंच",
      metaYear: "वर्ष",
      metaRef: "वाद संदर्भ संख्या",
      confidential: "[गोपनीय / पहचान सुरक्षित]",
      sidebarLinks: [
        { id: "Overview", label: "वाद का सार" },
        { id: "Legal-issue", label: "विधिक प्रश्न" },
        { id: "Representation", label: "वकालत व पैरवी" },
        { id: "Current-status", label: "वर्तमान स्थिति" },
        { id: "Disclaimer", label: "अस्वीकरण" },
      ],
      overviewEyebrow: "मामले का सार",
      overviewTitle: "संस्थागत एवं कानूनी पृष्ठभूमि।",
      overviewP: "यह मामला मेडिकल बोर्ड द्वारा सैन्य सेवा से अमान्य किए जाने के उपरांत सेना पेंशन नियमावली के अंतर्गत लागू नियमों की वैधानिक व्याख्या से संबंधित है। मुवक्किल की गोपनीयता बनाए रखने हेतु नाम, सैन्य इकाई और वाद संख्या का उल्लेख नहीं किया गया है।",
      blocks: [
        {
          no: "01",
          title: "प्रमुख विधिक प्रश्न",
          copy: "क्या उच्च तुंगता (High Altitude) क्षेत्र में तैनाती के दौरान उत्पन्न शारीरिक व्याधि सेना पेंशन विनियमों के तहत सेवा-जनित मानी जाएगी, तथा क्या अधिकरण के समक्ष प्रारंभिक अस्वीकृति आदेश सर्वोच्च न्यायालय के धर्मवीर सिंह निर्णय के सिद्धांतों के प्रतिकूल है?",
        },
        {
          no: "02",
          title: "विधिक रणनीति एवं पैरवी",
          copy: "सेवा अभिलेखों, मेडिकल बोर्ड की कार्यवाही, और प्रासंगिक शासकीय दिशा-निर्देशों का सूक्ष्म परीक्षण; सशस्त्र बल अधिकरण के समक्ष मूल आवेदन (OA) का प्रारूपण तथा सेवा-जनित व्याधि पर स्थापित नज़ीरों की प्रस्तुति।",
        },
        {
          no: "03",
          title: "वर्तमान न्यायिक स्थिति",
          copy: "पक्षकारों के अभिवचन पूर्ण हो चुके हैं और वाद अंतिम बहस हेतु सूचीबद्ध है। किसी विशिष्ट परिणाम का कोई दावा अथवा आश्वासन नहीं दिया जाता।",
        },
      ],
      disclaimerTitle: "व्यावसायिक विधिक अस्वीकरण",
      disclaimerP: "यह विवरण बार काउंसिल ऑफ इंडिया के नियमों के तहत केवल शैक्षणिक एवं सूचनात्मक उद्देश्य से प्रस्तुत किया गया है। पूर्व में निस्तारित वाद किसी नए या भावी मामले में समान परिणाम की गारंटी नहीं देते।",
    },
    query: {
      eyebrow: "विधिक परामर्श एवं प्रकरण विवरण",
      title: "अपने मामले का संक्षिप्त विवरण साझा करें।",
      copy: "नीचे आवश्यक तथ्य दर्ज करें। आपकी जानकारी पूर्ण व्यावसायिक गोपनीयता के साथ विश्लेषित की जाएगी और उचित कानूनी सलाह प्रदान की जाएगी।",
      guidelinesEyebrow: "आरंभ करने से पूर्व",
      guidelinesTitle: "एक स्पष्ट विवरण हमें मामले को गहराई से समझने में मदद करता है।",
      guidelinesList: [
        "भर्ती की तिथि, प्रमुख पदस्थापन और घटनाक्रम का सिलसिलेवार ब्योरा दें।",
        "प्राप्त हुए आदेश, कारण बताओ नोटिस अथवा अस्वीकृति पत्र की जानकारी दें।",
        "केवल प्रासंगिक दस्तावेज (आदेश, जांच रिपोर्ट, अभ्यावेदन की प्रति) संलग्न करें।",
      ],
      privacyBoxTitle: "विधिक विशेषाधिकार एवं गोपनीयता",
      privacyBoxP: "सभी प्रेषित जानकारियां पूर्णतः गोपनीय रखी जाती हैं। इस फॉर्म को जमा करना केवल प्रारंभिक मूल्यांकन हेतु है, यह स्वयं में अधिवक्ता-मुवक्किल संबंध स्थापित नहीं करता।",
      successEyebrow: "विवरण सफलतापूर्वक प्राप्त हुआ",
      successTitle: "आपका विधिक परामर्श अनुरोध दर्ज हो चुका है।",
      successP: "विवरण साझा करने हेतु धन्यवाद। चैंबर आपके दस्तावेजों का अध्ययन कर आपके पसंदीदा माध्यम से यथाशीघ्र संपर्क करेगा।",
      submitAnother: "एक अन्य परामर्श दर्ज करें",
      sec1Title: "व्यक्तिगत व संपर्क विवरण",
      sec1Sub: "चैंबर आपसे किस माध्यम से संपर्क करे?",
      sec2Title: "मामले का तथ्यात्मक विवरण",
      sec2Sub: "विवाद और उससे जुड़े आदेशों का सार प्रदान करें।",
      fullName: "पूरा नाम एवं पदनाम / रैंक (यदि लागू हो)",
      fullNamePlaceholder: "उदा. सूबेदार आर. के. शर्मा / श्री राजेश कुमार",
      email: "ईमेल पता",
      emailPlaceholder: "officer@example.com",
      phone: "मोबाइल नंबर",
      phonePlaceholder: "+91 98765 43210",
      prefContact: "संपर्क का पसंदीदा माध्यम",
      prefOptions: ["फोन कॉल", "व्हाट्सएप संदेश", "ईमेल पत्राचार"],
      serviceCategory: "सेवा संवर्ग / बल का नाम",
      serviceOptions: [
        "भारतीय थल सेना (Indian Army)",
        "भारतीय नौसेना (Indian Navy)",
        "भारतीय वायु सेना (Indian Air Force)",
        "सीमा सुरक्षा बल (BSF)",
        "केंद्रीय रिजर्व पुलिस बल (CRPF)",
        "केंद्रीय औद्योगिक सुरक्षा बल (CISF)",
        "ITBP / SSB / असम राइफल्स",
        "केंद्रीय सिविल कर्मचारी",
        "राज्य सरकार कर्मचारी",
        "पूर्व सैनिक / वेटरन",
        "आश्रित / पारिवारिक सदस्य",
      ],
      subject: "मामले का विषय / विवाद का प्रकार",
      subjectPlaceholder: "उदा. दिव्यांगता पेंशन की अनुचित अस्वीकृति / अनुशासनात्मक आदेश के विरुद्ध अपील",
      queryLabel: "तथ्यों का विवरण एवं अपेक्षित अनुतोष (Relief)",
      queryPlaceholder: "घटना की तिथियां, प्राप्त हुए आदेश, की गई विभागीय कार्रवाई, पूर्व में दिए गए अभ्यावेदन और आप क्या कानूनी राहत चाहते हैं...",
      docsLabel: "प्रासंगिक आदेश या दस्तावेज संलग्न करें (PDF, DOCX, चित्र अधिकतम 25MB)",
      consentText: "मैं पुष्टि करता/करती हूँ कि ऊपर दी गई जानकारी मेरी जानकारी के अनुसार सत्य है और यह परामर्श अनुरोध विधिक नियमों एवं चैंबर की आचार संहिता के अधीन है।",
      submitBtn: "विधिक परामर्श प्रेषित करें",
    },
    portal: {
      leftEyebrow: "सुरक्षित मुवक्किल पोर्टल",
      leftTitle: "आपका मामला—पारदर्शी, व्यवस्थित एवं सुलभ।",
      leftP: "अपने वाद की स्थिति, न्यायालय में आगामी सुनवाई की तिथियां, दाखिल की गई याचिकाएं एवं आदेश अपने निजी डिजिटल स्पेस में सुरक्षित रूप से देखें।",
      leftFoot: "256-बिट सुरक्षित एन्क्रिप्शन · बार काउंसिल ऑफ इंडिया नियमों के अनुकूल",
      signinEyebrow: "मुवक्किल लॉगिन",
      signupEyebrow: "पोर्टल एक्सेस का अनुरोध",
      signinTitle: "स्वागत है।",
      signupTitle: "पोर्टल पहुंच का अनुरोध करें।",
      signinSub: "अपने पंजीकृत क्रेडेंशियल्स से सुरक्षित साइन इन करें।",
      signupSub: "सक्रिय मुवक्किलों को चैंबर द्वारा सत्यापन के पश्चात लॉगिन क्रेडेंशियल प्रदान किए जाते हैं।",
      nameLabel: "पूरा नाम",
      namePlaceholder: "अपना नाम दर्ज करें",
      emailLabel: "पंजीकृत ईमेल पता",
      emailPlaceholder: "client@example.com",
      passLabel: "पासवर्ड",
      passSignupLabel: "सुरक्षित पासवर्ड चुनें",
      passPlaceholder: "••••••••••••",
      signinBtn: "सुरक्षित साइन इन करें",
      signupBtn: "पहुंच अनुरोध प्रेषित करें",
      switchSignup: "नए मुवक्किल हैं? पोर्टल क्रेडेंशियल का अनुरोध करें",
      switchSignin: "पहले से पंजीकृत हैं? यहाँ साइन इन करें",
      returnToWeb: "← मुख्य वेबसाइट पर लौटें",
    },
    dashboard: {
      adminEyebrow: "चैंबर प्रबंधन",
      clientEyebrow: "मुवक्किल कार्यक्षेत्र",
      adminTitle: "चैंबर वकालत का समग्र अवलोकन",
      clientTitle: "सुप्रभात, मुवक्किल डैशबोर्ड",
      adminRole: "वरिष्ठ अधिवक्ता चैंबर",
      clientRole: "मुवक्किल आईडी · AFT-2025-089",
      adminNav: ["सिंहावलोकन", "मुवक्किल पंजी", "वाद विवरण", "विधिक आलेख", "मीडिया", "परामर्श इनबॉक्स", "चैंबर सेटिंग्स"],
      clientNav: ["सिंहावलोकन", "मेरा वाद", "अदालती दस्तावेज", "चैंबर संदेश", "प्रोफाइल"],
      adminMetrics: [
        { value: "48", label: "सक्रिय मुवक्किल", note: "+3 नए वाद इस माह" },
        { value: "27", label: "प्रक्रियाधीन वाद", note: "इस सप्ताह 6 सुनवाईयां" },
        { value: "08", label: "नए परामर्श अनुरोध", note: "समीक्षा हेतु लंबित" },
        { value: "14", label: "रिपोर्टेड निर्णय", note: "विधिक जर्नल्स में प्रकाशित" },
      ],
      clientMetrics: [
        { value: "01", label: "सक्रिय वाद", note: "सशस्त्र बल अधिकरण (AFT)" },
        { value: "18 जुलाई", label: "आगामी सुनवाई", note: "अंतिम बहस हेतु सूचीबद्ध" },
        { value: "08", label: "वाद दस्तावेज", note: "सभी याचिकाएं अपलोड हैं" },
        { value: "02", label: "नवीन अपडेट", note: "जवाबी हलफनामा दाखिल" },
      ],
      activeMatterEyebrow: "वर्तमान सक्रिय वाद",
      activeMatterTitle: "दिव्यांगता पेंशन पात्रता मूल आवेदन (OA)",
      forum: "सशस्त्र बल अधिकरण (प्रिंसिपल बेंच, नई दिल्ली)",
      nextHearing: "18 जुलाई 2025",
      reference: "OA संख्या 142/2025",
      viewCaseDetails: "वाद का संपूर्ण विवरण देखें",
      recentUpdatesHeading: "कालक्रमानुसार अदालती अपडेट",
      viewAllUpdates: "सभी विवरण देखें",
      timeline: [
        { title: "परामर्श व प्रारंभिक समीक्षा", date: "12 जन 2025", status: "complete" },
        { title: "मेडिकल अभिलेख व नज़ीर ऑडिट", date: "28 जन 2025", status: "complete" },
        { title: "एएफटी में मूल आवेदन (OA) दाखिल", date: "15 फर 2025", status: "complete" },
        { title: "केंद्र सरकार को नोटिस जारी", date: "18 मार्च 2025", status: "complete" },
        { title: "आगामी सुनवाई (काउंटर एफिडेविट)", date: "18 जुला 2025", status: "current" },
        { title: "अंतिम बहस एवं निर्णय", date: "संभावित 2025", status: "upcoming" },
      ],
      updates: [
        { title: "रजिस्ट्री द्वारा सुनवाई तिथि निश्चित", text: "प्रिंसिपल बेंच ने OA 142/2025 को काउंटर सत्यापन हेतु सूचीबद्ध किया।", date: "आज" },
        { title: "विपक्षी पक्ष द्वारा जवाबी हलफनामा दाखिल", text: "प्रतिवादियों ने जवाब दाखिल किया, चैंबर द्वारा प्रत्युत्तर तैयार किया जा रहा है।", date: "14 जून" },
        { title: "चैंबर विधिक बैठक संपन्न", text: "अधिवक्ता महोदय के साथ रणनीति की अंतिम समीक्षा पूर्ण हुई।", date: "02 जून" },
      ],
      inboxEyebrow: "परामर्श इनबॉक्स",
      inboxTitle: "हाल ही में प्राप्त विधिक अनुरोध",
      reviewBtn: "संपूर्ण इनबॉक्स खोलें",
      inboxCols: ["आवेदक", "सेवा संवर्ग", "प्राप्ति समय", "स्थिति", "कार्रवाई"],
      inboxRows: [
        { client: "सूबेदार आर. के. मेहता", category: "भारतीय थल सेना", received: "आज, 10:24 AM", status: "नया अनुरोध" },
        { client: "इंस्पेक्टर एस. बिस्वास", category: "सीमा सुरक्षा बल (BSF)", received: "कल", status: "समीक्षाधीन" },
        { client: "विंग कमांडर पी. नायर (से.नि.)", category: "भारतीय वायु सेना", received: "12 जून 2025", status: "परामर्श निर्धारित" },
        { client: "श्री कुलदीप सिंह", category: "केंद्रीय कर्मचारी", received: "10 जून 2025", status: "उत्तर प्रेषित" },
      ],
    },
    editorial: {
      mediaEyebrow: "सार्वजनिक पटल एवं विधिक विचार",
      blogEyebrow: "विधिक आलेख व विश्लेषण",
      mediaTitle: "सार्वजनिक पटल पर कानूनी टिप्पणी।",
      blogTitle: "राष्ट्र के प्रहरियों के लिए विधिक विश्लेषण।",
      mediaCopy: "सैन्य न्यायशास्त्र एवं सेवा कानून के प्रमुख घटनाक्रमों पर प्रकाशित आलेख, साक्षात्कार तथा संगोष्ठियों के विचार।",
      blogCopy: "सेवा नियमों, प्रशासनिक न्याय तथा संवैधानिक अधिकारों पर स्पष्ट, तथ्यपरक और विश्लेषणात्मक लेखन।",
      paperMasthead: "द सर्विस लॉ क्रॉनिकल",
      paperSub: "प्रामाणिक · स्वतंत्र · विधिक न्यायशास्त्र",
      commentEyebrow: "विशेषज्ञ राय",
      commentQuote: "“समकालीन सेवा अभिलेख (Record) ही वह आधारशिला है जिस पर सैन्य न्याय की सत्यता टिकी होती है।”",
      commentCopy: "प्रशासनिक निष्पक्षता, स्पष्ट कारण-सहित आदेश (Speaking Orders) तथा सैन्य अधिकारियों व जवानों के मामलों में समुचित आधारों की अनिवार्यता पर एक विचारोत्तेजक विमर्श।",
      readCoverage: "पूर्ण आलेख पढ़ें",
      sidebarTitle: "इस संस्करण के प्रमुख विषय",
      sidebarArticles: [
        "केंद्रीय सेवा नियमों में वचन-आधारित विबंधन (Promissory Estoppel) का सिद्धांत",
        "दिव्यांगता पेंशन पात्रता: धर्मवीर सिंह बनाम भारत संघ से वर्तमान तक के निर्णय",
        "समरी कोर्ट मार्शल (SCM) कार्यवाही में प्रक्रियात्मक नियमों की अनिवार्यता",
      ],
      featuredBlogBadge: "प्रमुख विधिक आलेख / 01",
      featuredBlogEyebrow: "प्रशासनिक कानून · 12 मिनट पठन",
      featuredBlogTitle: "तर्कसंगत आदेश (Speaking Order) केवल एक औपचारिकता नहीं, बल्कि एक संवैधानिक सुरक्षा-कवच है।",
      featuredBlogCopy: "अर्ध-न्यायिक कार्यवाहियों में कारण-सहित आदेश क्यों अनिवार्य है, एक वैध निर्णय में क्या आवश्यक तत्व होने चाहिए, और अपीलीय मंच प्रशासनिक कमियों का कैसे निवारण करता है।",
      readFeatured: "संपूर्ण आलेख पढ़ें",
      categories: ["सभी", "सशस्त्र बल", "सीएपीएफ", "दिव्यांगता पेंशन", "कोर्ट मार्शल", "वेतन व वरिष्ठता", "उच्च न्यायालय निर्णय"],
      articleCards: [
        {
          category: "सशस्त्र बल कानून",
          title: "पदोन्नति बोर्ड में निष्पक्ष विचार: स्थापित विधिक मानकों की व्याख्या",
          copy: "जब वार्षिक गोपनीय रिपोर्ट (ACR) की प्रतिकूल प्रविष्टि हटाई जाती है, तो विशेष समीक्षा बोर्ड (SRB) के क्या अधिकार हैं।",
          readTime: "8 मिनट पठन",
        },
        {
          category: "पेंशन विनियम",
          title: "दिव्यांगता पेंशन: प्रमाण का भार, चिकित्सीय कारणता और राउंडिंग-ऑफ के नियम",
          copy: "भर्ती के समय पूर्ण स्वस्थ होने की कानूनी उपधारणा सेना पेंशन विनियमों के तहत किस प्रकार लागू होती है।",
          readTime: "10 मिनट पठन",
        },
        {
          category: "सीएपीएफ न्यायशास्त्र",
          title: "अर्धसैनिक अनुशासनात्मक बर्खास्तगी में आनुपातिकता (Proportionality) का सिद्धांत",
          copy: "कठोरतम दंड के मामलों में जहां न्यायपालिका न्यायिक विवेक को झकझोरने वाले दंड आदेशों में हस्तक्षेप करती है।",
          readTime: "7 मिनट पठन",
        },
        {
          category: "केंद्रीय सिविल सेवा",
          title: "सेवानिवृत्ति के उपरांत अधिक वेतन अथवा पेंशन की वसूली पर विधिक संरक्षण",
          copy: "सर्वोच्च न्यायालय के ऐतिहासिक रफ़ीक मसीह निर्णय के सिद्धांत जो सेवानिवृत्त कर्मचारियों की रक्षा करते हैं।",
          readTime: "9 मिनट पठन",
        },
      ],
    },
    article: {
      backLink: "← विधिक आलेखों की सूची पर लौटें",
      eyebrow: "सेवा विधि एवं प्रशासनिक न्याय",
      title: "तर्कसंगत आदेश (Speaking Order) मात्र औपचारिकता नहीं, एक संवैधानिक कवच है।",
      deck: "कारण-सहित आदेश, साक्ष्यों के विधिसम्मत मूल्यांकन की बाध्यता और प्रशासनिक निष्पक्षता के संरक्षण का संपूर्ण विधिक अध्ययन।",
      author: "अधिवक्ता ए. शर्मा",
      dateMeta: "12 जून 2025 · 12 मिनट पठन · सर्वोच्च न्यायालय व एएफटी वकालत",
      lead: "सार्वजनिक सेवा और सैन्य सेवा के क्षेत्र में कोई भी प्रशासनिक आदेश शून्य में कार्य नहीं करता। यह दशकों की कर्तव्यनिष्ठा, सम्मान, पारिवारिक सुरक्षा और भविष्य को प्रभावित करने की शक्ति रखता है।",
      p1: "कारण-सहित आदेश (Speaking Order) प्राकृतिक न्याय का मूल आधार है। जब कोई प्रशासनिक अथवा सैन्य प्राधिकारी किसी कार्मिक के अधिकारों अथवा पेंशन को प्रभावित करने वाला निर्णय लेता है, तो अभिलेख से यह स्पष्ट होना चाहिए कि प्रासंगिक तथ्यों पर विचार किया गया है।",
      h1: "कानूनी रूप से वैध तर्कसंगत आदेश के अनिवार्य लक्षण",
      p2: "अदालतों ने बार-बार यह स्पष्ट किया है कि कोई भी निर्णय 'उचित विचारोपरांत' या 'तथ्यहीन पाए जाने पर' जैसे अस्पष्ट वाक्यांशों की आड़ में नहीं छिप सकता। एक वैध आदेश में निम्नलिखित स्पष्ट होना चाहिए:",
      quote: "“तर्क और कारण ही वह सेतु हैं जो प्राधिकारी के समक्ष प्रस्तुत अभिलेख को उसके अंतिम निर्णय से जोड़ते हैं। बिना कारणों के दिया गया आदेश केवल मनमानी शक्ति का प्रदर्शन है।”",
      h2: "समकालीन अभिलेख (Contemporaneous Record) की अनिवार्य भूमिका",
      p3: "प्रत्येक मेडिकल बोर्ड, वार्षिक मूल्यांकन (ACR/APAR) और अभ्यावेदन सेवा इतिहास की एक अटूट कड़ी होते हैं। सशस्त्र बल अधिकरण अथवा उच्च न्यायालयों में कानूनी विजय मुख्य रूप से इन दस्तावेजी साक्ष्यों की कालक्रमानुसार प्रामाणिकता पर निर्भर करती है।",
      disclaimerTitle: "पाठकों के लिए विशेष सूचना",
      disclaimerP: "यह आलेख केवल विधिक जागरूकता एवं शैक्षणिक विमर्श हेतु संकलित किया गया है। यह किसी भी रूप में औपचारिक कानूनी सलाह नहीं है। विशिष्ट मामलों में पृथक पत्रावली के आधार पर व्यक्तिगत परामर्श आवश्यक होता है।",
    },
    about: {
      eyebrow: "चैंबर परिचय",
      title: "स्वतंत्र कानूनी परामर्श। संस्थागत कार्यप्रणाली की गहरी समझ।",
      copy: "सैन्य न्यायशास्त्र, लोक सेवा नियमों और प्रत्येक पत्रावली से जुड़े मानवीय जीवन के संरक्षण पर आधारित एक प्रतिष्ठित विधिक कार्यप्रणाली।",
      lead: "हमारा चैंबर भारतीय सशस्त्र बलों के वीर जवानों व अधिकारियों, केंद्रीय सशस्त्र पुलिस बलों (CAPF) के कार्मिकों, सरकारी सेवकों एवं उनके परिवारों को समर्पित विधिक प्रतिनिधित्व प्रदान करता है।",
      section1Heading: "प्रक्रिया और विधिक सत्यता पहले।",
      section1P: "प्रत्येक मामले का आरंभ अभिलेखों के गहन परीक्षण से होता है: सेवा पंजिका, कोर्ट मार्शल अथवा जांच आदेश, आरोप-पत्र, मेडिकल बोर्ड रिपोर्ट एवं तत्समय लागू विनियम। हम यथार्थवादी एवं स्पष्ट परामर्श देते हैं—अनावश्यक मुकदमों को कभी बढ़ावा नहीं दिया जाता, किंतु वैध अधिकारों के लिए न्यायालयों में दृढ़ता से संघर्ष किया जाता है।",
      principlesHeading: "चैंबर वकालत के चार आधार-स्तंभ",
      principles: [
        { title: "स्पष्टता व सत्यनिष्ठा", copy: "न्यायालय जाने से पूर्व मुवक्किल को मामले की वास्तविक विधिक स्थिति से स्पष्ट अवगत कराना।" },
        { title: "सूक्ष्म कानूनी तैयारी", copy: "प्रत्येक याचिका का प्रारूपण सेवा नियमों और सर्वोच्च न्यायालय के बाध्यकारी निर्णयों के गहन अध्ययन से तैयार किया जाता है।" },
        { title: "पूर्ण व्यावसायिक गोपनीयता", copy: "सैन्य व व्यक्तिगत दस्तावेज अधिवक्ता-मुवक्किल विशेषाधिकार के तहत पूर्णतः सुरक्षित रहते हैं।" },
        { title: "मर्यादित एवं सशक्त पैरवी", copy: "भारतीय बार की सर्वोच्च गरिमा बनाए रखते हुए न्यायालय में निर्भीक एवं प्रभावशाली प्रतिनिधित्व।" },
      ],
    },
    contact: {
      eyebrow: "संपर्क व चैंबर विवरण",
      title: "एक सार्थक प्रारंभिक विधिक परामर्श।",
      copy: "व्यावसायिक विचार-विमर्श, वाद पत्रावली के मूल्यांकन अथवा आधिकारिक पत्राचार हेतु हमारे नई दिल्ली कार्यालय से संपर्क करें।",
      officeHeading: "कार्यालय व चैंबर विवरण",
      chambersLabel: "नई दिल्ली चैंबर",
      chambersText: "चैंबर ब्लॉक, दिल्ली उच्च न्यायालय एवं सशस्त्र बल अधिकरण परिसर\nनई दिल्ली - 110001, भारत",
      emailLabel: "आधिकारिक पत्राचार",
      phoneLabel: "चैंबर क्लर्क / विधिक पूछताछ",
      appointmentNote: "विशेष सूचना: चैंबर में व्यक्तिगत बैठक केवल पूर्व निर्धारित समय (Appointment) द्वारा ही संभव है।",
      formName: "पूरा नाम",
      formEmail: "ईमेल पता",
      formMessage: "संक्षिप्त संदेश अथवा परामर्श समय का अनुरोध",
      sendEnquiry: "चैंबर संदेश प्रेषित करें",
    },
    privacy: {
      eyebrow: "विधिक सूचना एवं गोपनीयता नीति",
      title: "उत्तरदायित्वपूर्ण एवं पारदर्शी विधिक सूचना।",
      copy: "सूचना प्रबंधन, बार काउंसिल ऑफ इंडिया के नियमों और डिजिटल गोपनीयता से संबंधित नीति।",
      sec1Heading: "बार काउंसिल ऑफ इंडिया के नियमों का अनुपालन",
      sec1P: "यह वेबसाइट किसी भी रूप में वकालत कार्य की याचना अथवा विज्ञापन नहीं करती। बार काउंसिल ऑफ इंडिया के नियम 36 के अनुसार यह केवल सैन्य एवं सेवा विधि की सामान्य विधिक जानकारी प्रदान करने हेतु एक सूचनात्मक मंच है।",
      sec2Heading: "अधिवक्ता-मुवक्किल संबंध की सीमाएं",
      sec2P: "इस वेबसाइट पर आना, कोई परामर्श फॉर्म भरना अथवा ईमेल भेजना स्वतः अधिवक्ता-मुवक्किल संबंध स्थापित नहीं करता। ऐसा संबंध औपचारिक वकालतनामा स्वीकार होने एवं हित-विरोध जांच (Conflict Check) के उपरांत ही बनता है।",
      sec3Heading: "गोपनीयता एवं डाटा सुरक्षा",
      sec3P: "ऑनलाइन परामर्श फॉर्म के माध्यम से प्राप्त विवरण केवल मामले के विधिक मूल्यांकन और संपर्क हेतु प्रयुक्त होता है। हम किसी भी तीसरे पक्ष के साथ कोई जानकारी साझा नहीं करते।",
      sec4Heading: "वादों का सांकेतिक विवरण",
      sec4P: "वेबसाइट पर उल्लिखित सभी प्रतिनिधिक मामले पूरी तरह पहचान-मुक्त (Anonymized) हैं। मुवक्किल की निजता और न्यायिक आचार संहिता के सम्मान में नाम, रेजिमेंट व कोर्ट नंबर गोपनीय रखे गए हैं।",
    },
  },
};
