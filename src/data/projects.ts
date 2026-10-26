// Parked: not routed while Showcase is hidden — see docs/showcase-study.md.
import lapsebothImage from '../assets/images/projects/lapseboth.png';
import markAppIconImage from '../assets/images/projects/markAppIcon.png';
import wPImage from '../assets/images/projects/WP.png';
import obsessiveOdysseyImage from '../assets/images/projects/ObsessiveOdyssey.png';
import colorMadnessImage from '../assets/images/projects/ColorMadness.png';
import rDOImage from '../assets/images/projects/RDO.png';
import unveilImage from '../assets/images/projects/Unveil.png';
import gumiEatsStoreImage from '../assets/images/projects/GumiEatsStore.png';
import thorneyAppIconImage from '../assets/images/projects/ThorneyAppIcon.png';
import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'lapse-games',
    title: 'Lapse Games',
    description: 'Mobile Strategy games based on a Sci-Fi narrative. The series has over 15 million downloads on iOS and Android.',
    image: lapsebothImage,
    tags: ['Unity', 'Game Design', 'C#'],
    websiteUrl: 'https://linktr.ee/lapsegames',
    featured: true,
  },
  {
    id: 'mark-app',
    title: 'mark',
    description: 'A SwiftUI macOS tool created for the Apple Developer Academy to enhance Challenge Based Learning.',
    image: markAppIconImage,
    tags: ['SwiftUI', 'macOS', 'iOS'],
    gitHubUrl: 'https://github.com/orleonedev/markProject',
    featured: true,
  },
  {
    id: 'willpower',
    title: 'WillPower - Magello Battle',
    description: 'An iOS Arcade Game made in 3 days with SpriteKit and GameplayKit, available on the App Store.',
    image: wPImage,
    tags: ['SpriteKit', 'GameKit', 'iOS'],
    appStoreUrl: 'https://apps.apple.com/it/app/willpower-magello-battle/id1615802592?l=en',
    gitHubUrl: 'https://github.com/orleonedev/WillPowerProject',
    featured: true,
  },
  {
    id: 'obsessive-odyssey',
    title: 'Obsessive Odyssey',
    description: 'Winner of the Randstad Technologies Game Dev Hackathon. A mobile strategy game about balancing life and passion.',
    image: obsessiveOdysseyImage,
    tags: ['Unity', 'UI', 'Gameplay'],
    gitHubUrl: 'https://github.com/orleonedev/FlyingPigs-Hackaton',
    websiteUrl: 'https://wipegaming.it/news/favola-maiali-volanti-obsessive-odissey#',
  },
  {
    id: 'color-madness',
    title: 'Color Madness',
    description: 'A "Simon-says" game made in just 16 hours during a Game Jam with SpriteKit and GameplayKit.',
    image: colorMadnessImage,
    tags: ['SpriteKit', 'GameKit', 'iOS'],
    gitHubUrl: 'https://github.com/orleonedev/ColorMadnessProject',
  },
  {
    id: 'reapers-day-off',
    title: 'Reaper\'s Day Off',
    description: 'An iOS and iPadOS game made with SpriteKit and GameplayKit.',
    image: rDOImage,
    tags: ['SpriteKit', 'GameKit', 'iOS'],
    appStoreUrl: 'https://apps.apple.com/it/app/reapers-day-off/id1622800202?l=en',
    gitHubUrl: 'https://github.com/orleonedev/ReapersDayOffProject',
  },
  {
    id: 'unveil-prelude',
    title: 'Un:Veil - Prelude',
    description: 'A demo for a story-driven RPG made with SpriteKit and GameplayKit.',
    image: unveilImage,
    tags: ['SpriteKit', 'GameKit', 'RPG'],
    gitHubUrl: 'https://github.com/orleonedev/UnveilPreludeProject',
  },
  {
    id: 'gumi-eats',
    title: 'WWDC22 | GumiEats',
    description: 'A Tamagotchi-like game in SwiftUI and SpriteKit with a pizza-making minigame. Swift Student Challenge Winner.',
    image: gumiEatsStoreImage,
    tags: ['SwiftUI', 'SpriteKit', 'WWDC'],
    gitHubUrl: 'https://github.com/orleonedev/WWDC22GumiEats',
  },
  {
    id: 'thorney',
    title: 'WWDC23 | Thorney',
    description: 'An endless side-scroller game made in SwiftUI and SpriteKit. Swift Student Challenge Winner.',
    image: thorneyAppIconImage,
    tags: ['SwiftUI', 'SpriteKit', 'WWDC'],
    gitHubUrl: 'https://github.com/orleonedev/WWDC23Thorney',
  },
];