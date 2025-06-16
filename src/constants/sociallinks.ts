export interface SocialLink {
    name: string;
    url: string;
    icon: string;
    color?: string; // Optional color for the icon
}
export const socialLinks: SocialLink[] = [
  {
    name: 'Slack',
    url: 'https://kshitis-worspace.slack.com/team/U090PREEWLD',
    icon: 'slack'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/kshiti-codes',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kshitipatel1999/',
    icon: 'linkedin'
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/kshiti_de',
    icon: 'hackerrank'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/being_unsocial',
    icon: 'instagram',
  },
  {
    name: 'Pinterest',
    url: 'https://www.pinterest.com/ktpfiverr', 
    icon: 'pinterest',
  }
];