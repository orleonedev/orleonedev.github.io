export interface Insight {
  id: string;
  type: 'article' | 'social' | 'news' | 'citation';
  platform: 'medium' | 'linkedin' | 'x' | 'instagram' | 'press';
  title: string;
  description: string;
  date: string;
  url: string;
  image?: string;
  featured?: boolean;
  readingTime?: string;
  tags?: string[];
}

export const insights: Insight[] = [
  {
    id: '1',
    type: 'citation',
    platform: 'press',
    featured: true,
    title: "The Future of Mobile Gaming: An Interview with Oreste Leone",
    description: "Discussing the evolution of indie game development and how the 'Lapse' trilogy reached 15 million players globally without a major publisher.",
    date: "Jan 15, 2024",
    url: "https://example.com/interview", // Placeholder
    image: "/src/assets/images/medium_wwdc23.jpeg",
    tags: ["Interview", "Game Dev", "Growth"]
  },
  {
    id: '2',
    type: 'article',
    platform: 'medium',
    title: "Mastering Swift Concurrency: Beyond the Basics",
    description: "A deep dive into actors, Sendable, and structured concurrency patterns for modern iOS applications.",
    date: "Feb 10, 2024",
    url: "https://medium.com/@orleone.dev/mastering-swift-concurrency",
    image: "/src/assets/images/medium_statepattern.jpeg",
    readingTime: "8 min read",
    tags: ["Swift", "iOS", "Architecture"]
  },
  {
    id: '3',
    type: 'social',
    platform: 'linkedin',
    title: "Reflecting on 15M downloads",
    description: "Sharing some behind-the-scenes metrics and the importance of community feedback in the early days of Lapse.",
    date: "Dec 20, 2023",
    url: "https://linkedin.com/posts/orleonedev_15million",
    tags: ["Milestone", "Community"]
  },
  {
    id: '4',
    type: 'article',
    platform: 'medium',
    title: "The State Pattern in SwiftUI",
    description: "How to manage complex UI states cleanly using the State Pattern in your next iOS project.",
    date: "Nov 05, 2023",
    url: "https://medium.com/@orleone.dev/state-pattern-swiftui",
    image: "/src/assets/images/medium_gameplayKit.jpeg",
    readingTime: "6 min read",
    tags: ["Design Patterns", "SwiftUI"]
  },
  {
    id: '5',
    type: 'social',
    platform: 'x',
    title: "Swift 6 is looking amazing!",
    description: "Data race safety by default is a game changer for the ecosystem. Can't wait to migrate our core libraries.",
    date: "Mar 02, 2024",
    url: "https://x.com/orleonedev/status/123",
    tags: ["Swift6", "iOSDev"]
  },
  {
    id: '6',
    type: 'news',
    platform: 'press',
    title: "Top 10 Indie Games to watch in 2024",
    description: "Lapse 2 featured as one of the most innovative narrative-driven mobile games of the year.",
    date: "Jan 05, 2024",
    url: "https://example.com/top-indie-games",
    image: "/src/assets/images/CWS_collaborating_at_scale.jpeg",
    tags: ["Awards", "Gaming"]
  }
];
