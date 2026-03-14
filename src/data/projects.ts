export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  repo: string;
  featured: boolean;
  status: "concluído" | "em progresso" | "Em breve...";
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Tapeworm",
    description:
      "Uma rede social de música voltada para avaliar e conversar sobre música e descobrir novos sons, talvez não tão divulgados pela grande mídia.",
    tags: ["React", "JavaScript", "Axios", "TanStack Query","Figma"],
    link: "https://tapeworm-music-log.vercel.app/",
    repo: "https://github.com/caio-ximenes/TAPEWORM-Music-log",
    featured: true,
    status: "concluído",
    image: "/assets/images/tapeworm.webp",
  },
  {
    id: 2,
    title: "Agile MCP Server",
    description:
      "Um servidor para gestão ágil de projetos. Dê à IA o poder de gerenciar os seus boards e fazer o trabalho repetitivo de documentar tarefas por você.",
    tags: ["Node", "TypeScript", "MCP", "Axios", "Zod"],
    link: "",
    repo: "https://github.com/caio-ximenes/Local-Agile-MCP-Server",
    featured: true,
    image: "/assets/images/agile-mcp.jpg",
    status: "em progresso",
  },
  {
    id: 3,
    title: "Batalha Naval de Terminal",
    description:
      "Jogo desenvolvido em Java na disciplina de POO abordando a maioria dos recursos da linguagem para orientação a objetos.",
    tags: ["Java"],
    link: "",
    repo: "https://github.com/caio-ximenes/BatalhaNavalEmJavaPOO",
    featured: true,
    image: "/assets/images/batalha-naval.jpg",
    status: "concluído",
  },{
    id: 4,
    title: "Site de gestão de processos de monitoria no IBMEC",
    description:
      "Site desenvolvido na disciplina de projeto Front-end para gestão de vagas de monitoria antes manual e com inúmeros gargalos, agora com UI/UX moderno, amigável e organizado.",
    tags: ["React","Figma","Métodos ágeis","Mkdocs","Git"],
    link: "https://projetos-de-extensao.github.io/PFE_25.2_8002_V/",
    repo: "https://github.com/Projetos-de-Extensao/PFE_25.2_8002_V",
    featured: true,
    image: "/assets/images/ibvagas.jpg",
    status: "concluído",
  },
  {
    id: 5,
    title: "API Shipmaster",
    description:
      "API para app fictício de gestão de encomendas para condomínios.",
    tags: ["Node","Express","MongoDB","Prisma"],
    link: "",
    repo: "https://github.com/caio-ximenes/Shipmaster-parcels-api",
    featured: true,
    image: "/assets/images/shipmaster-api.jpeg",
    status: "concluído",
  },{
    id: 6,
    title: "Sistema de alarme residencial",
    description:
      "Sistema simples de alarme com tag RFID e arduino.",
    tags: ["Arduino","RFID","C","C++"],
    link: "",
    repo: "https://github.com/caio-ximenes/Arduino-Ap1",
    featured: true,
    image: "/assets/images/arduino.jpg",
    status: "concluído",
  },{
    id: 7,
    title: "Server de controle de ponto",
    description:
      "Sistema de controle de pontos e atestados para análise de dados e relatórios usando Geolocalização para empresa de contrução civil.",
    tags: ["Node", "TypeScript", "Express", "PostgreSQL", "Prisma","Zod"],
    link: "",
    repo: "",
    featured: true,
    status: "Em breve...",
  }
];
