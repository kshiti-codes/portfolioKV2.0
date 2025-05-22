import { Service } from '../types';

export const services: Service[] = [
  {
    id: 1,
    title: 'Web Design',
    description: 'Stunning, responsive websites that look great on all devices and create a lasting impression.',
    icon: 'PaintBucket',
    features: [
      'Custom design mockups',
      'Responsive layouts',
      'User experience optimization',
      'Brand integration',
      'Accessibility compliance'
    ],
    price: 'Starting at $1,500'
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Custom web applications and websites built with modern technologies and best practices.',
    icon: 'Code',
    features: [
      'Front-end development',
      'Back-end development',
      'Database integration',
      'API development',
      'Performance optimization'
    ],
    price: 'Starting at $2,500'
  },
  {
    id: 3,
    title: 'E-commerce Solutions',
    description: 'Complete online stores with product management, secure payments, and order tracking.',
    icon: 'ShoppingCart',
    features: [
      'Product catalog setup',
      'Payment gateway integration',
      'Inventory management',
      'Order processing system',
      'Customer account portal'
    ],
    price: 'Starting at $3,500'
  },
  {
    id: 4,
    title: 'CMS Implementation',
    description: 'Easy-to-use content management systems that allow you to update your website with ease.',
    icon: 'FileText',
    features: [
      'CMS setup and configuration',
      'Custom template development',
      'Content migration',
      'User training',
      'Ongoing support'
    ],
    price: 'Starting at $1,800'
  }
];