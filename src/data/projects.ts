import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'color-madness',
    title: 'Color Madness',
    description: 'A fast-paced color-matching game for iOS.',
    image: '/oldPortfolioFiles/assets/img/ColorMadness.png',
    tags: ['iOS', 'Swift', 'SpriteKit'],
    appStoreUrl: 'https://apps.apple.com/us/app/color-madness/id1506403817',
    featured: true,
  },
  {
    id: 'gumieats-store',
    title: 'GumiEats Store',
    description: 'A mock e-commerce store for a fictional character.',
    image: '/oldPortfolioFiles/assets/img/GumiEatsStore.png',
    tags: ['React', 'TypeScript', 'MUI'],
    gitHubUrl: 'https://github.com/orleonedev/GumiEatsStore',
    websiteUrl: 'https://orleonedev.github.io/GumiEatsStore/',
    featured: true,
  },
];
