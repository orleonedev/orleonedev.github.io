import type { ReactNode } from 'react';
import { FaLinkedin, FaGithub, FaMedium, FaXTwitter, FaInstagram, FaTwitch, FaDiscord } from 'react-icons/fa6';

export type SocialId = 'linkedin' | 'github' | 'medium' | 'x' | 'instagram' | 'twitch' | 'discord';

export interface Social {
  id: SocialId;
  name: string;
  url: string;
  icon: ReactNode;
}

// Single source for social links (hero, Connect page, footer).
export const socials: Social[] = [
  { id: 'linkedin', name: 'LinkedIn', url: 'https://www.linkedin.com/in/orleonedev', icon: <FaLinkedin /> },
  { id: 'github', name: 'GitHub', url: 'https://github.com/orleonedev', icon: <FaGithub /> },
  { id: 'medium', name: 'Medium', url: 'https://medium.com/@orleone.dev', icon: <FaMedium /> },
  { id: 'x', name: 'X', url: 'https://x.com/orleonx_dev', icon: <FaXTwitter /> },
  { id: 'instagram', name: 'Instagram', url: 'https://www.instagram.com/orleonx_dev', icon: <FaInstagram /> },
  { id: 'twitch', name: 'Twitch', url: 'https://www.twitch.tv/orleonx_dev', icon: <FaTwitch /> },
  { id: 'discord', name: 'Discord', url: 'https://discord.com/users/orleonedev', icon: <FaDiscord /> },
];

export const pickSocials = (ids: SocialId[]) =>
  ids.map((id) => socials.find((s) => s.id === id)).filter((s): s is Social => s !== undefined);
