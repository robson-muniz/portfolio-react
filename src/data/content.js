export const site = {
    name: "Robson Muniz",
    role: "Senior web developer",
    location: "Coimbra, Portugal",
    availability: "Open to Germany, EU, and remote",
    languages: ["Portuguese", "English", "German (basic)"],
    email: "robsonmuniz.me@gmail.com",
    url: "https://robsonmuniz.com",
    resume: "/Robson_Muniz_Resume.pdf",
    github: "https://github.com/robson-muniz",
    linkedin: "https://www.linkedin.com/in/robsonmuniz/",
    twitter: "https://x.com/WebDevMadeEasy",
    product: {
        name: "ReactLaunch",
        url: "https://reactlaunch.dev/",
    },
};

export const launchForge = {
    name: "LaunchForge",
    live: "https://launchforge-21ma.vercel.app/",
    github: "https://github.com/robson-muniz/launchforge",
};

export const navItems = [
    { id: "work", label: "Work", href: "#work" },
    { id: "about", label: "About", href: "#about" },
    { id: "stack", label: "Stack", href: "#stack" },
    { id: "contact", label: "Contact", href: "#contact" },
];

export const featuredProject = {
    id: "secureauth-kit",
    name: "SecureAuth Kit",
    kicker: "Featured",
    status: "Commercial product",
    github: "https://github.com/robson-muniz/secureauth-kit",
    gumroad: "https://robmuniz.gumroad.com/l/SecureAuthKit",
    image: "/projects/secureauth-kit.png",
    summary:
        "A reusable authentication foundation for product work — so registration, login, and password recovery are treated as application infrastructure, not a one-off form on every new build.",
    problem:
        "Authentication is rarely the novel part of a product. The cost is the repeat: sign up, sign in, reset a password, then the edge cases that only appear after the first version ships. Rebuilding that surface on every project slows down the work that actually differentiates the product.",
    solution:
        "SecureAuth Kit extracts those flows into a kit that a React application can consume. The goal is not a marketing claim about unbreakable security. It is a practical contract: a client talks to a defined auth layer, sessions persist across requests, and recovery is part of the same system rather than an afterthought.",
    engineering: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Argon2",
        "JWT",
        "HTTP-only cookies",
        "Email flows",
    ],
    decisions: [
        {
            title: "Reuse the expensive part",
            body: "Login, registration, and password recovery are the flows that consume calendar time. The kit treats them as a product surface to be owned once, then reused.",
        },
        {
            title: "A contract, not a pile of forms",
            body: "The client is a consumer of authentication, not the place where session rules are improvised. That keeps UI work separate from how identity is established and kept.",
        },
        {
            title: "Recovery is in scope",
            body: "A login screen without account recovery is unfinished. The kit includes the path back into the product, not only the happy path in.",
        },
    ],
    result:
        "The work shows how I approach product engineering: identify a recurring cost, give it a clear boundary, and ship the surrounding application against that boundary. It is the kind of system I would rather own than rebuild.",
    architecture: [
        {
            id: "client",
            label: "React client",
            detail: "Typed UI for register, login, and recovery.",
        },
        {
            id: "kit",
            label: "Auth kit",
            detail: "Shared flows and session handling.",
        },
        {
            id: "session",
            label: "Session",
            detail: "Authenticated state across requests.",
        },
        {
            id: "app",
            label: "Protected app",
            detail: "Routes and data that require a signed-in user.",
        },
    ],
};


export const selectedWork = [
    {
        id: "launchforge",
        name: "LaunchForge",
        category: "SaaS foundation",
        description:
            "Downloadable source kits for authentication, data, and payments, with a product marketplace for teams building their next app.",
        problem:
            "Founders repeat the same setup work for identity, persistence, and checkout before they can build the feature that makes their product different.",
        engineering:
            "Next.js and TypeScript with Auth.js, Prisma, PostgreSQL, and Stripe. Reusable source kits give each product concern a clear boundary.",
        result:
            "A working foundation teams can adapt instead of wiring the same product plumbing from scratch.",
        tech: ["Next.js", "TypeScript", "Auth.js", "Prisma", "PostgreSQL", "Stripe"],
        image: "/projects/launchforge-hero.webp",
        live: launchForge.live,
        github: launchForge.github,
        status: "Case study",
    },
    {
        id: "crypto-commerce",
        name: "CryptoCommerce",
        category: "Marketplace",
        description:
            "A digital marketplace with Bitcoin checkout, unique derived payment addresses, and a Prisma-backed catalog.",
        problem:
            "Selling digital goods against on-chain payments without exposing wallet keys or reusing addresses.",
        engineering:
            "Next.js App Router with Server Actions, PostgreSQL via Prisma, NextAuth, and BIP32/BIP39 address derivation. Private-key material stays off the client. Inputs are validated with Zod before they hit the database.",
        result:
            "A marketplace flow that keeps address derivation and order persistence on the server, with validated inputs before data reaches PostgreSQL.",
        tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Bitcoin", "Zod"],
        image: "/projects/crypto-commerce.png",
        live: "https://www.cryptocommerce.pt",
        github: "https://github.com/robson-muniz/crypto-commerce",
    },
    {
        id: "reactlaunch",
        name: "ReactLaunch",
        category: "Product",
        description:
            "A production Next.js foundation with a founder-facing landing page, Stripe checkout, and Supabase auth.",
        problem:
            "Shipping a page that can charge money usually means weeks of wiring landing, billing, and session handling before the product itself exists.",
        engineering:
            "Typed Stripe checkout and webhook handling, Supabase email authentication with session handling and row-level security, and a mobile-first landing system intended to be cloned and deployed rather than rebuilt.",
        tech: ["Next.js", "TypeScript", "Supabase Auth", "Stripe", "PostgreSQL"],
        image: "/projects/Reactlaunch.png",
        live: "https://reactlaunch.dev/",
    },
    {
        id: "ai-invoice-manager",
        name: "AI Invoice Manager",
        category: "SaaS",
        description:
            "A Next.js invoicing application with authentication, Stripe, email delivery, and PDF generation.",
        problem:
            "Invoicing is a full product: identity, payments, documents, and mail, not a table of line items.",
        engineering:
            "Next.js, Prisma, NextAuth with a Prisma adapter, Stripe, Nodemailer, React Hook Form, Zod, and TanStack Query. The stack is the same shape as a small billed SaaS, not a UI prototype.",
        result:
            "Authentication, billing, invoice documents, and email delivery work together as one product flow.",
        tech: ["Next.js", "TypeScript", "Prisma", "NextAuth", "Stripe", "Nodemailer", "Zod"],
        image: "/projects/ai-invoice-manager.png",
        github: "https://github.com/robson-muniz/ai-invoice-manager",
        status: "Source on GitHub",
    },
    {
        id: "github-finder",
        name: "GitHub Finder",
        category: "Application",
        description:
            "A typed GitHub user search with debounced suggestions, keyboard navigation, and cached fetches.",
        problem:
            "Talking to a rate-limited API from a search field without flooding the network or trapping keyboard users.",
        engineering:
            "React and TypeScript with TanStack Query for cache and status, a debounce hook for the typeahead, and arrow-key selection in the suggestion list. Recent searches persist in localStorage.",
        tech: ["React", "TypeScript", "TanStack Query", "Vite"],
        image: "/githubfinder.png",
        live: "https://github-finder-swart-five.vercel.app/",
        github: "https://github.com/robson-muniz/github-finder",
    },
    {
        id: "shopstyle",
        name: "ShopStyle",
        category: "Interface",
        description:
            "An e-commerce UI with search, category filters, wishlist, and a cart that survives reloads.",
        problem:
            "A storefront that still works as an application: catalog, detail, and cart state have to stay coherent.",
        engineering:
            "React with Context for cart state, DummyJSON as the catalog API, and localStorage persistence. Tailwind and Framer Motion are used for layout and motion, not as a substitute for state design.",
        tech: ["React", "Vite", "Tailwind CSS", "Context API"],
        image: "/projects/shopstyle.png",
        live: "https://shopping-cart-ui-ul6a.vercel.app/",
        github: "https://github.com/robson-muniz/shopping-cart-ui",
    },
];

export const additionalWork = [
    {
        id: "coinverter",
        name: "Coinverter",
        description: "Currency conversion against live rates, with a small, readable UI.",
        tech: ["React", "JavaScript", "REST API"],
        live: "https://coinverter-mu.vercel.app/",
        github: "https://github.com/robson-muniz/coinverter",
    },
];

export const stack = [
    {
        title: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
        title: "Backend / data",
        items: ["Node.js", "PostgreSQL", "Prisma", "Supabase"],
    },
    {
        title: "Product / infrastructure",
        items: ["Stripe", "Authentication", "REST APIs", "Git / GitHub"],
    },
];
