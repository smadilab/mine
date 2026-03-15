import type { Lang } from "@/utils/translations/i18n-config";

export type CaseStudyMeta = {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  client: string;
  industry: string;
  focus: string;
  year: string;
};

export type CaseStudy = CaseStudyMeta & {
  heroSubtitle: string;
  context: string;
  challenge: string;
  challengeList?: string[];
  solution: string;
  systemsBuilt: string[];
  outcome: string;
  lessons?: string;
  lessonsInsight?: string;
};

const caseStudiesEn: CaseStudy[] = [
  {
    slug: "rotana-star",
    title: "Rotana Star Car Rental",
    excerpt:
      "Building a digital infrastructure for a luxury car rental company — booking, operations, and financial workflows.",
    tags: ["Booking Systems", "Operations", "Payments"],
    client: "Rotana Star",
    industry: "Car Rental",
    focus: "Digital Infrastructure",
    year: "2025 - Present",
    heroSubtitle:
      "Designing and building systems that power bookings, operations, and customer experience.",
    context:
      "Rotana Star operates in the luxury car rental market. The company needed a modern digital infrastructure to manage customer bookings, internal operations, and financial workflows. Traditional processes were fragmented and relied heavily on manual coordination.",
    challenge: "The business required a structured digital system that could:",
    challengeList: [
      "manage online bookings",
      "coordinate operational workflows",
      "handle customer interactions",
      "integrate payments and financial processes",
    ],
    solution:
      "I worked on designing and building a digital platform that connects customer-facing experiences with internal operational systems. The goal was to transform scattered processes into a structured digital workflow.",
    systemsBuilt: [
      "Online booking infrastructure",
      "Operational management tools",
      "Customer workflow automation",
      "Payment integrations",
      "Digital interfaces for both staff and customers",
    ],
    outcome:
      "The result was a digital platform that supports daily operations, improves customer experience, and provides a foundation for future growth.",
    lessons: "Key Insight",
    lessonsInsight:
      "Service companies often struggle not because of marketing or demand, but because their internal systems cannot support growth. Building the right infrastructure changes that.",
  },
  {
    slug: "tesaa",
    title: "Tesaa News Platform",
    excerpt:
      "Designing and building a multilingual digital news platform powered by automated translation workflows.",
    tags: ["Media Platform", "Automation", "AI"],
    client: "Tesaa",
    industry: "Digital Media",
    focus: "Multilingual Publishing",
    year: "2024 - Present",
    heroSubtitle:
      "Building a multilingual digital news platform powered by automation and AI.",
    context:
      "Tesaa was created to explore how digital media platforms can scale using automation and AI-powered workflows. The goal was to publish news content in Arabic and automatically translate it into multiple languages.",
    challenge:
      "Traditional newsrooms rely heavily on manual translation and publishing workflows, which makes scaling content across languages difficult.",
    solution:
      "The platform was designed around automated workflows that combine content management systems with AI-based translation processes.",
    systemsBuilt: [
      "Multilingual publishing architecture",
      "AI-powered translation workflows",
      "Content automation pipelines",
      "Scalable digital media infrastructure",
    ],
    outcome:
      "A platform capable of publishing content across multiple languages while maintaining editorial oversight.",
  },
  {
    slug: "bunud",
    title: "Bunud Legal Knowledge System",
    excerpt:
      "Exploring how AI can structure legal knowledge and assist research and drafting workflows.",
    tags: ["AI", "Legal Tech", "Knowledge Systems"],
    client: "Bunud",
    industry: "Legal Technology",
    focus: "AI & Knowledge Systems",
    year: "2024 - 2025",
    heroSubtitle: "Exploring AI applications in legal knowledge systems.",
    context:
      "Bunud was an experimental platform exploring how artificial intelligence could be applied within the legal domain.",
    challenge:
      "Legal knowledge is complex and difficult to structure in ways that allow intelligent systems to interact with it effectively.",
    solution:
      "The project focused on structuring legal information and designing workflows that allow AI systems to assist in legal research and drafting.",
    systemsBuilt: [
      "Structured legal knowledge models",
      "AI-assisted research workflows",
      "Document drafting experiments",
    ],
    outcome:
      "Although the platform was later paused, the experiment provided valuable insights into how AI interacts with structured knowledge in professional fields.",
  },
  {
    slug: "pin-properties",
    title: "Pin Properties",
    excerpt:
      "Exploring digital systems and data-driven workflows in the real estate sector.",
    tags: ["Real Estate", "Platforms", "Data"],
    client: "Pin Properties",
    industry: "Real Estate",
    focus: "Digital Systems",
    year: "2025 - 2026",
    heroSubtitle: "Exploring digital systems in the real estate sector.",
    context:
      "I worked on digital systems within the real estate sector, exploring how property platforms and data-driven workflows can improve how real estate businesses operate.",
    challenge:
      "Real estate operations often rely on fragmented tools and manual processes. The sector needed structured digital systems to manage listings, inquiries, and transactions.",
    solution:
      "The project explored designing data-driven platforms and workflows that could streamline property management and customer interactions.",
    systemsBuilt: [
      "Property listing systems",
      "Data-driven workflow design",
      "Customer inquiry management",
    ],
    outcome:
      "Explored how digital systems can improve real estate operations and customer experience.",
  },
];

const caseStudiesAr: CaseStudy[] = [
  {
    slug: "rotana-star",
    title: "Rotana Star Car Rental",
    excerpt:
      "بناء بنية رقمية لشركة تأجير سيارات فاخرة — الحجوزات والعمليات وسير العمل المالي.",
    tags: ["نظم الحجز", "العمليات", "المدفوعات"],
    client: "Rotana Star",
    industry: "تأجير السيارات",
    focus: "البنية الرقمية",
    year: "2025 - حتى الآن",
    heroSubtitle: "تصميم وبناء نظم تشغّل الحجوزات والعمليات وتجربة العملاء.",
    context:
      "تعمل Rotana Star في سوق تأجير السيارات الفاخرة. احتاجت الشركة إلى بنية رقمية حديثة لإدارة حجوزات العملاء والعمليات الداخلية وسير العمل المالي. كانت العمليات التقليدية مجزأة وتعتمد بشكل كبير على التنسيق اليدوي.",
    challenge: "احتاج العمل إلى نظام رقمي منظم يمكنه:",
    challengeList: [
      "إدارة الحجوزات الإلكترونية",
      "تنسيق سير العمل التشغيلي",
      "معالجة تفاعلات العملاء",
      "دمج المدفوعات والعمليات المالية",
    ],
    solution:
      "عملت على تصميم وبناء منصة رقمية تربط تجارب العملاء بالنظم التشغيلية الداخلية. الهدف كان تحويل العمليات المبعثرة إلى سير عمل رقمي منظم.",
    systemsBuilt: [
      "بنية حجز إلكتروني",
      "أدوات إدارة العمليات",
      "أتمتة سير عمل العملاء",
      "تكاملات الدفع",
      "واجهات رقمية للموظفين والعملاء",
    ],
    outcome:
      "النتيجة كانت منصة رقمية تدعم العمليات اليومية وتحسّن تجربة العملاء وتوفّر أساساً للنمو المستقبلي.",
    lessons: "الرؤية الأساسية",
    lessonsInsight:
      "شركات الخدمات غالباً لا تكافح بسبب التسويق أو الطلب، بل لأن نظمها الداخلية لا تستطيع دعم النمو. بناء البنية التحتية الصحيحة يغيّر ذلك.",
  },
  {
    slug: "tesaa",
    title: "Tesaa News Platform",
    excerpt:
      "تصميم وبناء منصة إخبارية رقمية متعددة اللغات مدعومة بسير عمل ترجمة آلي.",
    tags: ["منصة إعلامية", "الأتمتة", "الذكاء الاصطناعي"],
    client: "Tesaa",
    industry: "الإعلام الرقمي",
    focus: "النشر متعدد اللغات",
    year: "2024 - حتى الآن",
    heroSubtitle:
      "بناء منصة إخبارية رقمية متعددة اللغات مدعومة بالأتمتة والذكاء الاصطناعي.",
    context:
      "أُنشئت Tesaa لاستكشاف كيف يمكن لمنصات الإعلام الرقمي أن تتوسع باستخدام الأتمتة وسير العمل المدعوم بالذكاء الاصطناعي. الهدف كان نشر المحتوى الإخباري بالعربية وترجمته تلقائياً إلى لغات متعددة.",
    challenge:
      "تعتمد غرف الأخبار التقليدية بشكل كبير على الترجمة والنشر اليدوي، مما يجعل توسيع المحتوى عبر اللغات صعباً.",
    solution:
      "صُمّمت المنصة حول سير عمل آلي يجمع بين نظم إدارة المحتوى وعمليات الترجمة القائمة على الذكاء الاصطناعي.",
    systemsBuilt: [
      "بنية نشر متعددة اللغات",
      "سير عمل ترجمة مدعوم بالذكاء الاصطناعي",
      "خطوط أتمتة المحتوى",
      "بنية إعلامية رقمية قابلة للتوسع",
    ],
    outcome:
      "منصة قادرة على نشر المحتوى عبر لغات متعددة مع الحفاظ على الرقابة التحريرية.",
  },
  {
    slug: "bunud",
    title: "Bunud Legal Knowledge System",
    excerpt:
      "استكشاف كيف يمكن للذكاء الاصطناعي تنظيم المعرفة القانونية والمساعدة في البحث والمسودة.",
    tags: ["الذكاء الاصطناعي", "التكنولوجيا القانونية", "نظم المعرفة"],
    client: "Bunud",
    industry: "التكنولوجيا القانونية",
    focus: "الذكاء الاصطناعي ونظم المعرفة",
    year: "2024 - 2025",
    heroSubtitle: "استكشاف تطبيقات الذكاء الاصطناعي في نظم المعرفة القانونية.",
    context:
      "كانت Bunud منصة تجريبية استكشفت كيف يمكن تطبيق الذكاء الاصطناعي في المجال القانوني.",
    challenge:
      "المعرفة القانونية معقدة وصعبة التنظيم بطرق تسمح لأنظمة ذكية بالتفاعل معها بفعالية.",
    solution:
      "ركّز المشروع على تنظيم المعلومات القانونية وتصميم سير العمل الذي يسمح لأنظمة الذكاء الاصطناعي بالمساعدة في البحث القانوني والمسودة.",
    systemsBuilt: [
      "نماذج معرفة قانونية منظمة",
      "سير عمل بحث مدعوم بالذكاء الاصطناعي",
      "تجارب مسودة المستندات",
    ],
    outcome:
      "رغم توقف المنصة لاحقاً، قدمت التجربة رؤى قيمة حول تفاعل الذكاء الاصطناعي مع المعرفة المنظمة في المجالات المهنية.",
  },
  {
    slug: "pin-properties",
    title: "Pin Properties",
    excerpt:
      "استكشاف النظم الرقمية وسير العمل القائم على البيانات في قطاع العقارات.",
    tags: ["العقارات", "المنصات", "البيانات"],
    client: "Pin Properties",
    industry: "العقارات",
    focus: "النظم الرقمية",
    year: "2025 - 2026",
    heroSubtitle: "استكشاف النظم الرقمية في قطاع العقارات.",
    context:
      "عملت على نظم رقمية في قطاع العقارات، واستكشفت كيف يمكن للمنصات العقارية وسير العمل القائم على البيانات تحسين طريقة عمل أعمال العقارات.",
    challenge:
      "عمليات العقارات تعتمد غالباً على أدوات مجزأة وعمليات يدوية. احتاج القطاع إلى نظم رقمية منظمة لإدارة القوائم والاستفسارات والمعاملات.",
    solution:
      "استكشف المشروع تصميم منصات وسير عمل قائمة على البيانات يمكنها تبسيط إدارة العقارات وتفاعلات العملاء.",
    systemsBuilt: [
      "نظم قوائم العقارات",
      "تصميم سير العمل القائم على البيانات",
      "إدارة استفسارات العملاء",
    ],
    outcome:
      "استكشاف كيف يمكن للنظم الرقمية تحسين عمليات العقارات وتجربة العملاء.",
  },
];

export function getCaseStudies(lang: Lang): CaseStudyMeta[] {
  const studies = lang === "ar" ? caseStudiesAr : caseStudiesEn;
  return studies.map(
    ({ slug, title, excerpt, tags, client, industry, focus, year }) => ({
      slug,
      title,
      excerpt,
      tags,
      client,
      industry,
      focus,
      year,
    }),
  );
}

export function getCaseStudyBySlug(slug: string, lang: Lang): CaseStudy | null {
  const studies = lang === "ar" ? caseStudiesAr : caseStudiesEn;
  return studies.find((s) => s.slug === slug) ?? null;
}

export function getAdjacentCaseStudies(
  slug: string,
  lang: Lang,
): { previous: CaseStudyMeta | null; next: CaseStudyMeta | null } {
  const studies = getCaseStudies(lang);
  const currentIndex = studies.findIndex((s) => s.slug === slug);
  if (currentIndex === -1) return { previous: null, next: null };
  const previous =
    currentIndex < studies.length - 1 ? studies[currentIndex + 1] : null;
  const next = currentIndex > 0 ? studies[currentIndex - 1] : null;
  return { previous, next };
}
