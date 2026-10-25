import type { SkillCategory } from '../types';

// Only list things actually used in real work. Order matches the icons in SkillsGrid.
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
      'Swift', 'SwiftUI', 'UIKit', 'Combine', 'Swift Concurrency', 'Objective‑C', 'SPM', 'Xcode',
    ],
  },
  {
    category: 'Apple Frameworks',
    skills: [
      'Core Data', 'Keychain & biometrics', 'Push notifications', 'Deep & universal links',
      'StoreKit & Apple Pay', 'Sign in with Apple', 'WebKit', 'MapKit & Core Location',
      'PassKit & Wallet', 'Localization', 'Accessibility & Dynamic Type',
      'SpriteKit / GameplayKit', 'ARKit / RealityKit',
    ],
  },
  {
    category: 'Architecture & Quality',
    skills: [
      'MVVM + Coordinator', 'Clean Architecture', 'SOLID', 'Reactive programming',
      'Networking & API integration', 'Modularization', 'Dependency & SDK upkeep', 'SwiftLint & SonarQube',
    ],
  },
  {
    category: 'Testing & Shipping',
    skills: [
      'XCTest & XCUITest', 'Swift Testing', 'Test‑driven development', 'Instruments',
      'TestFlight & App Store Connect', 'Fastlane', 'CI/CD & build tooling',
      'Crash & performance monitoring',
    ],
  },
  {
    category: 'Commerce & Growth',
    skills: [
      'Stripe', 'RevenueCat', 'Axerve / Gestpay', 'Salesforce Commerce Cloud', 'CoreMedia CMS',
      'Analytics', 'Remote Config & A/B testing', 'CRM & engagement SDKs', 'ATT & privacy manifests',
    ],
  },
  {
    category: 'Tools & Collaboration',
    skills: [
      'Jira', 'Confluence', 'ServiceNow', 'Figma', 'Git', 'GitLab · Bitbucket · Azure DevOps',
      'Proxyman / Postman',
    ],
  },
  {
    category: 'Beyond iOS',
    skills: [
      'Unity / C#', 'Kotlin', 'Flutter / Dart', 'TypeScript', 'Firebase', 'AWS · Azure · GCP',
    ],
  },
];
