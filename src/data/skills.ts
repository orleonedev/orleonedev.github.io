import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Team & Delivery',
    skills: [
      'Technical analysis', 'Architecture decisions', 'Sprint planning & estimates', 'Code review',
      'Release coordination', 'Monitoring & incidents', 'Technical documentation', 'Hiring interviews',
      'Onboarding teammates', 'Cross‑functional alignment', 'Agile / Scrum',
    ],
  },
  {
    category: 'iOS Platform',
    skills: [
      'Swift', 'SwiftUI', 'UIKit', 'Combine', 'Swift Concurrency', 'Core Data',
      'Accessibility', 'Analytics', 'ARKit / RealityKit', 'Objective‑C', 'SPM',
    ],
  },
  {
    category: 'Architecture & Quality',
    skills: [
      'MVVM + Coordinator', 'Clean Architecture', 'SOLID', 'Reactive programming',
      'Test‑driven development', 'CI/CD & build tooling', 'Dependency & SDK upkeep', 'Networking & API integration',
    ],
  },
  {
    category: 'Beyond iOS',
    skills: [
      'Unity / C#', 'Kotlin', 'Flutter / Dart', 'TypeScript', 'Firebase',
      'AWS · Azure · GCP', 'Git', 'Proxyman / Postman',
    ],
  },
];
