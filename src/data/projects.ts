export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  repo: string;
  featured: boolean;
  color: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Neural Dashboard",
    description: "Real-time analytics dashboard with AI-powered insights, drag-and-drop widgets, and live data streaming via WebSockets.",
    tags: ["React", "TypeScript", "WebSocket", "D3.js"],
    link: "#",
    repo: "#",
    featured: true,
    color: "#CFFF8B",
  },
  {
    id: 2,
    title: "Orbita CLI",
    description: "A developer toolkit CLI that scaffolds full-stack projects, automates CI/CD pipelines and generates boilerplate in seconds.",
    tags: ["Node.js", "Bash", "Docker", "GitHub Actions"],
    link: "#",
    repo: "#",
    featured: true,
    color: "#CFFF8B",
  },
  {
    id: 3,
    title: "Syne UI",
    description: "Open-source component library built with accessibility-first principles, dark mode by default and zero runtime JS.",
    tags: ["Astro", "CSS", "WCAG", "Web Components"],
    link: "#",
    repo: "#",
    featured: false,
    color: "#CFFF8B",
  },
  {
    id: 4,
    title: "Flux API Gateway",
    description: "High-performance API gateway handling auth, rate limiting, caching and request routing for microservices architectures.",
    tags: ["Go", "Redis", "gRPC", "Kubernetes"],
    link: "#",
    repo: "#",
    featured: false,
    color: "#CFFF8B",
  },
  {
    id: 5,
    title: "Void Notes",
    description: "Minimalist markdown note-taking app with end-to-end encryption, offline-first PWA and seamless cloud sync.",
    tags: ["Vue 3", "IndexedDB", "Crypto API", "PWA"],
    link: "#",
    repo: "#",
    featured: false,
    color: "#CFFF8B",
  },
  {
    id: 6,
    title: "Phantom Auth",
    description: "Zero-knowledge authentication system using passkeys and biometric verification — no passwords, no leaks.",
    tags: ["WebAuthn", "TypeScript", "Rust", "PostgreSQL"],
    link: "#",
    repo: "#",
    featured: false,
    color: "#CFFF8B",
  },
];
