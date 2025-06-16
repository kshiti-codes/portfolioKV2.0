export interface Experience {
  id: number;
  company: string;
  period: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  isClient?: boolean;
  parentCompany?: string;
  icon?: string; // For company logo URL or icon identifier
  iconType?: 'url' | 'lucide'; // Type of icon
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'PSVM Innova Pvt. Ltd.',
    period: 'May 2018 - June 2018',
    startDate: '2018-05',
    endDate: '2018-06',
    icon: './images/company/innova.webp', // URL to the company logo
    iconType: 'url'
  },
  {
    id: 2,
    company: 'WebEarl Technology Pvt. Ltd.',
    period: 'May 2019 - June 2019',
    startDate: '2019-05',
    endDate: '2019-06',
    icon: './images/company/webearl.png', // URL to the company logo
    iconType: 'url'
  },
  {
    id: 3,
    company: 'BISAG',
    period: 'Dec 2019 - April 2020',
    startDate: '2019-12',
    endDate: '2020-04',
    icon: './images/company/bisag.jpg',
    iconType: 'url'
  },
  {
    id: 4,
    company: 'Tatvasoft Pvt. Ltd.',
    period: 'Oct 2020 - Mar 2021',
    startDate: '2020-10',
    endDate: '2021-03',
    icon: './images/company/tatvasoft.png',
    iconType: 'url'
  },
  {
    id: 5,
    company: 'Tata Consultancy Services',
    period: 'April 2021 - Aug 2024',
    startDate: '2021-04',
    endDate: '2024-08',
    icon: './images/company/tcs.png',
    iconType: 'url'
  },
  {
    id: 6,
    company: 'IBM',
    period: 'Oct 2021 - Dec 2023',
    startDate: '2021-10',
    endDate: '2023-12',
    isClient: true,
    parentCompany: 'TCS',
    icon: './images/company/ibm.webp',
    iconType: 'url'
  },
  {
    id: 7,
    company: 'Moody\'s Analytics',
    period: 'Jan 2024 - Aug 2024',
    startDate: '2024-01',
    endDate: '2024-08',
    isClient: true,
    parentCompany: 'TCS',
    icon: './images/company/moodys.png',
    iconType: 'url'
  },
  {
    id: 8,
    company: 'Freelance',
    period: 'September 2024 - Present',
    startDate: '2024-09',
    endDate: 'present',
    isCurrent: true,
    icon: 'Briefcase',
    iconType: 'lucide'
  }
];