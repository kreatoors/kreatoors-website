const service_1 = "/images/services/hero1.png";
const service_2 = "/images/services/hero2.png";
const service_3 = "/images/services/hero3.png";
const service_4 = "/images/services/hero4.png";
const service_5 = "/images/services/hero5.png";
const service_6 = "/images/services/hero6.png";

export const servicesData = {
  "corporate-influencing": {
    h1: (
      <h1 className="text-[34px] sm:text-3xl md:text-4xl lg:text-[42px] leading-tight">
        <span className="font-playfair italic ">Corporate</span> <span>Influencing</span>
      </h1>
    ),
    description:
      "Your personal brand is your most powerful asset in today's professional landscape. Elevate your Influence with a positioning as a trusted voice in your industry.",
    heroImage: service_1,
    coreServices: [
      {
        id: "brand-strategy",
        title: "Personal Brand Strategy & Positioning",
        description: "We create comprehensive programs that drive real impact through:",
        content: ["Program strategy goals and alignment", "AI-optimized templates", "Strategic content calendars and themes"],
      },

      {
        id: "digital-presence",
        title: "Digital Leadership Presence ",
        description: "We enhance your online impact by: ",
        content: ["Optimizing executive profiles and leadership stories.", "Creating visual identities and building media presence."],
      },
      {
        id: "content-strategy",
        title: "Content Strategy & Creation",
        description: "We transform your expertise into actionable thought leadership with:",
        content: ["Tailored content strategies aligned with your goals.", "Leadership content calendars backed by data-driven performance insights"],
      },
      {
        id: "thought-leadership",
        title: "Thought Leadership Development",
        description: "We position you as a leading voice in your industry through::",
        content: ["Speaking engagements, event placements, and strategic media outreach.", "Expanding your influence via curated expert networks."],
      },
    ],
    impactItems: [
      "Enhanced visibility and industry recognition",
      "Attraction of premium clients and strategic partnerships",
      "Solidified authority and leadership reputation",
      "Measurable growth of your personal brand",
    ],
    buttontxt: "Build Corporate Influencer Programme Now",
    ctaTitle: (
      <h1 className="text-[29px] sm:text-3xl md:text-4xl lg:text-[42px]  md:leading-[65px] lg:leading-[70px] text-white">
        Ready to Turn Your Expertise into Influence that means <span className="font-playfair">Business Success?</span>
      </h1>
    ),
  },

  "employee-brand-development": {
    h1: (
      <h1 className="text-[34px] sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[60px]">
        <span className="inline-block font-playfair italic  mr-2">Employer</span>
        <span>Brand Development</span>
      </h1>
    ),
    description:
      "Top talents want more than just a job. They want purpose, growth, and an authentic workplace. Build a brand that resonates with both candidates and employees.",
    heroImage: service_2,
    coreServices: [
      {
        id: "strategic-foundation",
        title: "EVP & Culture Strategy",
        description: "We lay the foundation of your talent brand through:",
        content: [
          "Core EVP development and culture narratives..",
          "Talent market and competitive analysis.",
          "Brand voice frameworks for authentic messaging.",
        ],
      },
      {
        id: "engagement-activation",
        title: "Culture Storytelling ",
        description: "We bring your culture to life by:",
        content: [
          "Showcasing employee success stories and culture videos.",
          "Designing targeted campaigns and career site content. ",
          "Highlighting authentic testimonials. ",
        ],
      },
      {
        id: "impact",
        title: "Candidate Experience ",
        description: "We optimize touchpoints with: ",
        content: ["Journey mapping, strategic content, and onboarding narratives.", "Alumni advocacy and employee experience programs."],
      },
    ],
    impactItems: ["Enhanced talent attraction", "Improved candidate quality", "Stronger culture alignment", "Reduced recruitment costs"],
    buttontxt: "Activate Employee Voices Now",
    ctaTitle: (
      <h1 className="text-[29px] sm:text-3xl md:text-4xl lg:text-[42px] md:leading-[64px] text-white">
        Ready to Build a Standout
        <br />
        <span className="font-playfair italic inline-block mt-2">Employer Brand?</span>
      </h1>
    ),
  },

  "employer-content-creation": {
    h1: (
      <h1 className="text-[34px] sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
        <span className="inline-block font-playfair italic  mr-2">Employee</span>
        <span className="mt-4 block">Content Creation</span>
      </h1>
    ),
    description:
      "Your employees are your brand's most powerful storytellers. Their authentic voices build trust, drive engagement, and create impact in ways traditional marketing cannot achieve.",
    heroImage: service_3,
    coreServices: [
      {
        id: "evp-culture",
        title: "Build Strategic Foundations",
        description: "We craft impactful EGC programs with: ",
        content: [
          "Defined goals, content themes, and tailored strategies.",
          "AI-powered tools to streamline employee content creation.",
          "Frameworks to encourage and guide authentic storytelling. ",
        ],
      },
      {
        id: "culture-storytelling",
        title: "Drive Content Excellence",
        description: "We empower employees to share their stories through: ",
        content: [
          "Storytelling workshops and hands-on content training. ",
          "User-friendly tools and best practice resources.",
          "Alignment with both personal and professional branding. ",
        ],
      },
      {
        id: "candidate-experience",
        title: "Engage & Amplify",
        description: "We help you sustain content creation momentum with: ",
        content: ["Onboarding, training, and motivational incentives. ", "Recognition systems that highlight standout contributions. "],
      },
      {
        id: "candidate-experience-",
        title: "Measure & Optimise",
        description: "We track EGC success by providing:",
        content: ["Data-driven insights and ROI analysis.", "Continuous improvement recommendations to maximise impact.  "],
      },
    ],
    impactItems: [
      "Scaled authentic content creation",
      "Increased employee engagement and participation",
      "Boosted brand credibility and trust",
      "Measurable audience reach and business growth",
    ],
    buttontxt: "Activate Employee Voices Now",
    ctaTitle: (
      <h1 className="text-[29px] max-w-2xl space-y-3 sm:text-3xl md:text-4xl lg:text-[42px] leading-tight  text-white">
        Ready to <i className="font-playfair italic inline-block">Build Employee Stories</i> <div className="mt-2">Into Brand Power?</div>
      </h1>
    ),
  },

  "internal-communications-culture": {
    h1: (
      <h1 className="text-[30px] sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
        <div className="block md:hidden">
          Internal <i className="font-playfair">Communications</i> & Culture
        </div>
        <div className="hidden md:block">
          Internal
          <span className="font-playfair italic px-3 mt-4 ">Communications</span>
          <span className=" block mt-2 md:mt-4"> & Culture</span>
        </div>
      </h1>
    ),
    description:
      "Struggling to stay aligned in today's hybrid world? Strong internal comms is essential. We help build communication frameworks that turn silos into engaged, aligned workforces.",
    heroImage: service_4,

    coreServices: [
      {
        id: "strategic-foundation",
        title: "Strategy Development",
        description: "We create impactful communication frameworks by: ",
        content: [
          " Designing organization-wide strategies and optimizing channels.",

          "Developing content guidelines and leadership communication plans.",

          "Building message cascading systems for seamless alignment. ",
        ],
      },
      {
        id: "knowledge-learning",
        title: "Content & Change Management",
        description: "We drive engagement and clarity through: ",
        content: ["  Strategic campaigns and change management communications.", "Culture initiatives and crisis response protocols. "],
      },
      {
        id: "events-networking",
        title: "Channel Optimization",
        description: "We enhance communication impact by: ",
        content: ["Auditing channel effectiveness and integrating platforms.", "Optimizing message delivery and tracking with analytics."],
      },
      {
        id: "community-management",
        title: "Resource Development",
        description: "We equip teams with tools for success, including:",
        content: [
          "Communication toolkits, guides, templates, and training materials. ",
          "Leadership resources to strengthen alignment and engagement. ",
        ],
      },
    ],

    impactItems: ["Enhanced team alignment", "Increased engagement", "Improved information flow", "Higher Talent Retention"],
    buttontxt: "Break Your Silos Today",
    ctaDescription: "Let's create a personal brand strategy that sets you apart.",
    ctaTitle: (
      <h1 className="text-[29px] sm:text-3xl md:text-4xl lg:text-[42px] md:leading-[60px] text-white">
        <span className="">
          Ready to Break Down Silos and Build a<span className=" block mt-3 font-playfair italic ">Connected Workforce?</span>
        </span>
      </h1>
    ),
  },

  "advocacy-content-governance": {
    h1: (
      <h1 className="text-[34px] sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
        Advocacy &<span className="font-playfair italic   pr-3 mt-4 block">Content Governance</span>
      </h1>
    ),
    description:
      "We balance empowerment with content control, ensuring advocacy aligns with organisational goals while safeguarding your brand’s integrity.",
    heroImage: service_5,

    coreServices: [
      {
        id: "strategic-foundation",
        title: "Build Strategic Advocacy ",
        description: "We establish frameworks to mobilise advocacy efforts while maintaining control with:",
        content: [
          "Advocacy governance structures that ensure consistency and alignment with brand values. ",
          "Defined roles and responsibilities for employees as brand advocates. ",
          "Strategies to scale advocacy across the organisation while protecting the brand’s integrity. ",
        ],
      },
      {
        id: "content-change-management ",
        title: "Governance & Brand Protection ",
        description: "We safeguard your brand with: ",
        content: [
          "Robust policies, workflows, and compliance tools. ",
          "Scalable frameworks to align employee voices with brand standards. ",
          "Escalation paths for mitigating risks and managing crises.",
        ],
      },
      {
        id: "channel-optimization",
        title: "Educate & Empower",
        description: "We ensure advocates are ready to represent your brand through:",
        content: [
          "Advocacy training workshops and leadership coaching. ",
          "Tools and resources to guide compliant content creation. ",
          "Recognition systems to foster long-term advocacy.",
        ],
      },

      {
        id: "resource-development",
        title: "Monitor & Refine",
        description: "We optimize touchpoints with:",
        content: ["Journey mapping, strategic content, and onboarding narratives.", "Alumni advocacy and employee experience programs. "],
      },
    ],
    impactItems: [
      "Enhanced brand reach through aligned employee advocacy",
      "Stronger governance for consistent brand representation",
      "Increased trust and credibility among key audiences",
      "Measurable advocacy-driven growth and engagement",
    ],
    buttontxt: "Build Advocacy with Integrity",
    ctaDescription: "Let's create a personal brand strategy that sets you apart.",
    ctaTitle: (
      <h1 className="text-[29px] sm:text-3xl md:text-4xl lg:text-[42px] md:leading-[60px] text-white">
        Ready to
        <span className="font-playfair italic px-3">Build Advocacy</span>
        That Drives Trust and Brand Integrity?
      </h1>
    ),
  },

  "community-building-management": {
    h1: (
      <h1 className="text-[34px] sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[60px]">
        <span className="font-playfair italic pr-3">Community</span>
        Building & Management
      </h1>
    ),
    description:
      "Strong communities are the cornerstone of trust, collaboration, and long-term engagement. We build exclusive spaces where people connect, learn, and grow together.",
    heroImage: service_6,

    coreServices: [
      {
        id: "strategic-foundation",
        title: "Strategic Foundation & Custom Design",
        description: "We design purposeful communities by:",
        content: [
          "Developing strategies, roadmaps, and engagement frameworks. ",
          "Mapping member journeys and selecting the right platforms ",
          "Crafting compelling value propositions to drive participation. ",
        ],
      },
      {
        id: "content-change-management ",
        title: "Knowledge & Learning",
        description: "We deliver growth experiences through:",
        content: ["Expert-led masterclasses, peer mentorships, and resource hubs. ", "Knowledge-sharing systems and best practice libraries."],
      },
      {
        id: "channel-optimization",
        title: "Events & Networking",
        description: "We create meaningful connections via:",
        content: ["Roundtables, expert panels, workshops, and virtual meetups. ", "Networking programs that foster collaboration and trust. "],
      },

      {
        id: "resource-development",
        title: " Community Management",
        description: "We ensure sustainable growth by:",
        content: [
          "Driving engagement initiatives and curating impactful content.",
          "Managing member success programs and optimizing growth with analytics. ",
        ],
      },
    ],
    impactItems: ["Network effects activated", "Knowledge multiplication", "Stronger industry presence", "Enhanced professional development"],
    buttontxt: "Build Your Community Today",
    ctaDescription: "Ready to Maximise Community Network Effects?",
    ctaTitle: (
      <h1 className="text-[29px] max-w-2xl mx-auto sm:text-3xl md:text-4xl lg:text-[42px] md:leading-[60px] text-white">
        Ready to Maximise <span className="font-playfair italic  ">Community Network Effects?</span>
      </h1>
    ),
  },
};

export const servicesDataDe = {
  "corporate-influencing": {
    h1: (
      <h1 className="text-[34px] sm:text-3xl md:text-4xl lg:text-[42px] lg:leading-[58px]">
        <span className="font-playfair italic ">Unternehmens</span> <span>Beeinflussung</span>
      </h1>
    ),
    description:
      "Ihre persönliche Marke ist Ihr wertvollstes Asset in der heutigen Berufswelt. Steigern Sie Ihren Einfluss, indem Sie sich als vertrauenswürdige Stimme in Ihrer Branche positionieren.",
    heroImage: service_1,
    coreServices: [
      {
        id: "brand-strategy",
        title: "Persönliche Markenstrategie & Positionierung",
        description: "Wir entwickeln Ihre einzigartige Positionierung mit:",
        content: [
          "Entwicklung einer Führungspersönlichkeit und überzeugende Führungsgeschichten.",
          "Strategische Differenzierung zur Festigung Ihrer Branchenautorität.",
        ],
      },

      {
        id: "digital-presence",
        title: "Digitale Führungspräsenz ",
        description: "Wir steigern Ihre Online-Wirkung durch: ",
        content: ["Optimierung von Executive-Profilen und Führungsgeschichten.", "Erstellung visueller Identitäten und Aufbau einer Medienpräsenz."],
      },
      {
        id: "content-strategy",
        title: "Content-Strategie & Erstellung",
        description: "Wir verwandeln Ihre Expertise in umsetzbare Thought Leadership mit:",
        content: [
          "Maßgeschneiderte Content-Strategien, die auf Ihre Ziele abgestimmt sind.",
          "Führungskalender für Inhalte mit datengestützten Leistungskennzahlen.",
        ],
      },
      {
        id: "thought-leadership",
        title: "Entwicklung von Thought Leadership",
        description: "Wir positionieren Sie als führende Stimme in Ihrer Branche durch:",
        content: ["Vorträge, Veranstaltungen und strategische Medienkontakte.", "Erweiterung Ihres Einflusses durch kuratierte Expertennetzwerke."],
      },
    ],
    impactItems: [
      "Erhöhte Sichtbarkeit und Branchenanerkennung",
      "Gewinnung von Premium-Kunden und strategischen Partnerschaften",
      "Gefestigte Autorität und Führungsreputation",
      "Messbares Wachstum Ihrer persönlichen Marke",
    ],
    buttontxt: "Jetzt Corporate Influencer Programm aufbauen",
    ctaTitle: (
      <h1 className="text-[29px] sm:text-3xl md:text-4xl lg:text-[42px]  md:leading-[65px] lg:leading-[70px] text-white">
        Bereit, Ihre Expertise in Einfluss zu verwandeln, der Erfolg bedeutet <span className="font-playfair">Business?</span>
      </h1>
    ),
  },

  "employee-brand-development": {
    h1: (
      <h1 className="text-[34px] sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[60px]">
        <span className="inline-block font-playfair italic  mr-2">Mitarbeiter</span>
        <span>Markenentwicklung</span>
      </h1>
    ),
    description:
      "Top-Talente suchen mehr als nur einen Job. Sie wollen Sinn, Wachstum und einen authentischen Arbeitsplatz. Bauen Sie eine Marke auf, die sowohl bei Kandidaten als auch bei Mitarbeitern Resonanz findet.",
    heroImage: service_2,
    coreServices: [
      {
        id: "strategic-foundation",
        title: "EVP & Kulturstrategie",
        description: "Wir legen die Grundlage Ihrer Talentmarke durch:",
        content: [
          "Entwicklung von EVP-Kernwerten und Kulturgeschichten.",
          "Talentmarktforschung und Wettbewerbsanalyse.",
          "Markenstimmen-Frameworks für authentische Kommunikation.",
        ],
      },
      {
        id: "engagement-activation",
        title: "Kultur Storytelling ",
        description: "Wir erwecken Ihre Kultur zum Leben durch:",
        content: [
          "Präsentation von Erfolgsgeschichten der Mitarbeiter und Kulturvideos.",
          "Gestaltung gezielter Kampagnen und Karriere-Webseiten-Inhalte.",
          "Authentische Testimonials hervorheben.",
        ],
      },
      {
        id: "impact",
        title: "Kandidatenerfahrung ",
        description: "Wir optimieren Berührungspunkte mit: ",
        content: ["Reiseführer, strategische Inhalte und Onboarding-Narrative.", "Alumni-Advocacy und Mitarbeitererfahrungsprogramme."],
      },
    ],
    impactItems: ["Erhöhte Talentanziehung", "Verbesserte Kandidatenqualität", "Stärkere Kulturübereinstimmung", "Reduzierte Rekrutierungskosten"],
    buttontxt: "Aktivieren Sie Mitarbeiterstimmen jetzt",
    ctaTitle: (
      <h1 className="text-[29px] sm:text-3xl md:text-4xl lg:text-[42px] md:leading-[64px] text-white">
        Bereit, eine herausragende
        <br />
        <span className="font-playfair italic inline-block mt-2">Arbeitgebermarke zu schaffen?</span>
      </h1>
    ),
  },

  "employer-content-creation": {
    h1: (
      <h1 className="text-[34px] sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
        <span className="inline-block font-playfair italic  mr-2">Arbeitgeber</span>
        <span className="mt-4 block">Content-Erstellung</span>
      </h1>
    ),
    description:
      "Ihre Mitarbeiter sind die mächtigsten Geschichtenerzähler Ihrer Marke. Ihre authentischen Stimmen schaffen Vertrauen, steigern das Engagement und erzeugen Wirkung auf eine Weise, die traditionelles Marketing nicht erreichen kann.",
    heroImage: service_3,
    coreServices: [
      {
        id: "evp-culture",
        title: "Strategische Grundlagen aufbauen",
        description: "Wir gestalten wirkungsvolle EGC-Programme mit: ",
        content: [
          "Definierte Ziele, Inhaltsthemen und maßgeschneiderte Strategien.",
          "AI-unterstützte Tools zur Vereinfachung der Content-Erstellung von Mitarbeitern.",
          "Rahmenwerke zur Förderung und Anleitung authentischen Storytellings.",
        ],
      },
      {
        id: "culture-storytelling",
        title: "Content-Exzellenz vorantreiben",
        description: "Wir befähigen Mitarbeiter, ihre Geschichten zu teilen durch: ",
        content: [
          "Storytelling-Workshops und praxisorientiertes Content-Training.",
          "Benutzerfreundliche Tools und Best-Practice-Ressourcen.",
          "Ausrichtung sowohl mit persönlichem als auch professionellem Branding.",
        ],
      },
      {
        id: "candidate-experience",
        title: "Engagieren & Verstärken",
        description: "Wir helfen Ihnen, die Content-Erstellung mit folgenden Maßnahmen fortzusetzen:",
        content: ["Onboarding, Schulungen und motivierende Anreize.", "Anerkennungssysteme, die herausragende Beiträge hervorheben."],
      },
      {
        id: "candidate-experience-",
        title: "Messen & Optimieren",
        description: "Wir verfolgen den Erfolg von EGC mit:",
        content: ["Datenbasierte Einblicke und ROI-Analyse.", "Empfehlungen zur kontinuierlichen Verbesserung, um die Wirkung zu maximieren."],
      },
    ],
    impactItems: [
      "Skalierte authentische Content-Erstellung",
      "Erhöhtes Mitarbeiterengagement und -beteiligung",
      "Gesteigerte Markenbekanntheit und Vertrauen",
      "Messbare Reichweite und Geschäftswachstum",
    ],
    buttontxt: "Aktivieren Sie Mitarbeiterstimmen jetzt",
    ctaTitle: (
      <h1 className="text-[29px] max-w-2xl space-y-3 sm:text-3xl md:text-4xl lg:text-[42px] leading-tight  text-white">
        Bereit, <i className="font-playfair italic inline-block">Mitarbeitergeschichten zu</i>{" "}
        <div className="mt-2">In Markenstärke umzuwandeln?</div>
      </h1>
    ),
  },

  "internal-communications-culture": {
    h1: (
      <h1 className="text-[30px] sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
        <div className="block md:hidden">
          Interne <i className="font-playfair">Kommunikation</i> & Kultur
        </div>
        <div className="hidden md:block">
          Interne
          <span className="font-playfair italic px-3 mt-4 ">Kommunikation</span>
          <span className=" block mt-2 md:mt-4"> & Kultur</span>
        </div>
      </h1>
    ),
    description:
      "Haben Sie Schwierigkeiten, sich in der heutigen hybriden Welt abzustimmen? Eine starke interne Kommunikation ist entscheidend. Wir helfen dabei, Kommunikationsrahmen zu entwickeln, die Silos in engagierte, ausgerichtete Arbeitskräfte verwandeln.",
    heroImage: service_4,

    coreServices: [
      {
        id: "strategic-foundation",
        title: "Strategieentwicklung",
        description: "Wir schaffen wirkungsvolle Kommunikationsrahmen durch: ",
        content: [
          "Organisationweite Strategien und Kanaloptimierungen.",
          "Entwicklung von Inhaltsrichtlinien und Kommunikationsplänen für Führungskräfte.",
          "Aufbau von Nachrichtensystemen für nahtlose Abstimmung.",
        ],
      },
      {
        id: "knowledge-learning",
        title: "Content & Change Management",
        description: "Wir fördern Engagement und Klarheit durch: ",
        content: ["Strategische Kampagnen und Change-Management-Kommunikation.", "Kulturinitiativen und Krisenreaktionsprotokolle."],
      },
      {
        id: "events-networking",
        title: "Channel-Optimierung",
        description: "Wir steigern die Kommunikationswirkung durch: ",
        content: ["Audits der Kanalwirkung und Plattformintegration.", "Optimierung der Nachrichtenlieferung und Tracking mit Analytik."],
      },
      {
        id: "community-management",
        title: "Ressourcenentwicklung",
        description: "Wir statten Teams mit Tools für den Erfolg aus, einschließlich:",
        content: [
          "Kommunikationstools, Handbücher, Vorlagen und Schulungsmaterialien.",
          "Führungsressourcen zur Stärkung von Ausrichtung und Engagement.",
        ],
      },
    ],

    impactItems: ["Erhöhte Teamabstimmung", "Erhöhtes Engagement", "Verbesserter Informationsfluss", "Höhere Talentbindung"],
    buttontxt: "Brechen Sie Ihre Silos heute auf",
    ctaDescription: "Lassen Sie uns eine persönliche Markenstrategie entwickeln, die Sie abhebt.",
    ctaTitle: (
      <h1 className="text-[29px] sm:text-3xl md:text-4xl lg:text-[42px] md:leading-[60px] text-white">
        <span className="">
          Bereit, Silos aufzubrechen und eine
          <span className=" block mt-3 font-playfair italic ">Verbundene Arbeitskraft aufzubauen?</span>
        </span>
      </h1>
    ),
  },

  "advocacy-content-governance": {
    h1: (
      <h1 className="text-[34px] sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
        Interessenvertretung
        <span className="font-playfair italic   pr-3 mt-4 block">& Content-Governance</span>
      </h1>
    ),
    description:
      "Wir balancieren Empowerment mit Inhaltskontrolle und stellen sicher, dass Advocacy mit den Zielen der Organisation übereinstimmt und gleichzeitig die Integrität Ihrer Marke gewahrt bleibt.",
    heroImage: service_5,

    coreServices: [
      {
        id: "strategic-foundation",
        title: "Strategische Advocacy aufbauen",
        description: "Wir etablieren Frameworks, um Advocacy-Aktivitäten zu mobilisieren und gleichzeitig die Kontrolle zu wahren mit:",
        content: [
          "Advocacy-Governance-Strukturen, die Konsistenz und Übereinstimmung mit den Markenwerten sicherstellen.",
          "Definierte Rollen und Verantwortlichkeiten für Mitarbeiter als Markenbotschafter.",
          "Strategien zur Skalierung von Advocacy über die Organisation hinweg, während die Integrität der Marke geschützt wird.",
        ],
      },
      {
        id: "content-change-management ",
        title: "Governance & Markenschutz ",
        description: "Wir schützen Ihre Marke mit: ",
        content: [
          "Robuste Richtlinien, Workflows und Compliance-Tools.",
          "Skalierbare Frameworks zur Ausrichtung der Mitarbeiterstimmen auf Markenstandards.",
          "Eskaliertpfade zur Risikominderung und Krisenbewältigung.",
        ],
      },
      {
        id: "channel-optimization",
        title: "Ausbildung & Befähigung",
        description: "Wir stellen sicher, dass Ihre Befürworter bereit sind, Ihre Marke zu vertreten durch:",
        content: [
          "Advocacy-Schulungen und Führungskräfte-Coaching.",
          "Tools und Ressourcen, um die Erstellung konformer Inhalte zu unterstützen.",
          "Anerkennungssysteme, um langfristige Advocacy zu fördern.",
        ],
      },

      {
        id: "resource-development",
        title: "Überwachung & Verfeinerung",
        description: "Wir optimieren Touchpoints mit:",
        content: ["Journey Mapping, strategische Inhalte und Onboarding-Narrative.", "Alumni-Advocacy und Mitarbeitererfahrungsprogramme."],
      },
    ],
    impactItems: [
      "Erhöhte Markenreichweite durch ausgerichtete Mitarbeiter-Advocacy",
      "Stärkere Governance für konsistente Markenrepräsentation",
      "Erhöhtes Vertrauen und Glaubwürdigkeit bei wichtigen Zielgruppen",
      "Messbares Wachstum und Engagement durch Advocacy",
    ],
    buttontxt: "Advocacy mit Integrität aufbauen",
    ctaDescription: "Lassen Sie uns eine persönliche Markenstrategie entwickeln, die Sie abhebt.",
    ctaTitle: (
      <h1 className="text-[29px] sm:text-3xl md:text-4xl lg:text-[42px] md:leading-[60px] text-white">
        Bereit zu
        <span className="font-playfair italic px-3">Advocacy aufzubauen</span>
        Die Vertrauen und Markenintegrität antreibt?
      </h1>
    ),
  },

  "community-building-management": {
    h1: (
      <h1 className="text-[34px] sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[60px]">
        <span className="font-playfair italic pr-3">Community</span>
        Aufbau & Verwaltung
      </h1>
    ),
    description:
      "Starke Gemeinschaften sind das Fundament für Vertrauen, Zusammenarbeit und langfristiges Engagement. Wir schaffen exklusive Räume, in denen Menschen sich verbinden, lernen und gemeinsam wachsen.",
    heroImage: service_6,

    coreServices: [
      {
        id: "strategic-foundation",
        title: "Strategische Grundlage & maßgeschneiderte Gestaltung",
        description: "Wir entwerfen sinnvolle Gemeinschaften durch:",
        content: [
          "Entwicklung von Strategien, Roadmaps und Engagement-Rahmenwerken.",
          "Abbildung von Mitgliederreisen und Auswahl der richtigen Plattformen.",
          "Erstellung überzeugender Wertversprechen, die die Teilnahme fördern.",
        ],
      },
      {
        id: "content-change-management ",
        title: "Wissen & Lernen",
        description: "Wir bieten Wachstums-Erfahrungen durch:",
        content: ["Expertengestützte Masterclasses, Peer-Mentorships und Ressourcen-Hubs.", "Wissensteilungssysteme und Best-Practice-Bibliotheken."],
      },
      {
        id: "channel-optimization",
        title: "Veranstaltungen & Networking",
        description: "Wir schaffen sinnvolle Verbindungen durch:",
        content: ["Runde Tische, Expertengruppen, Workshops und virtuelle Meetups.", "Netzwerkprogramme, die Zusammenarbeit und Vertrauen fördern."],
      },

      {
        id: "resource-development",
        title: "Community Management",
        description: "Wir gewährleisten nachhaltiges Wachstum durch:",
        content: [
          "Engagement-Initiativen und kuratierte, wirkungsvolle Inhalte.",
          "Management von Mitgliedererfolgsprogrammen und Optimierung des Wachstums mit Analyse-Tools.",
        ],
      },
    ],
    impactItems: ["Aktivierte Netzwerkeffekte", "Wissensmultiplikation", "Stärkere Branchenpräsenz", "Erweiterte berufliche Entwicklung"],
    buttontxt: "Bauen Sie Ihre Community noch heute auf",
    ctaDescription: "Bereit, die Netzwerkeffekte Ihrer Community zu maximieren?",
    ctaTitle: (
      <h1 className="text-[29px] max-w-2xl mx-auto sm:text-3xl md:text-4xl lg:text-[42px] md:leading-[60px] text-white">
        Bereit, <span className="font-playfair italic  ">Netzwerkeffekte Ihrer Community zu maximieren?</span>
      </h1>
    ),
  },
};
