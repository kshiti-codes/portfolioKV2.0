import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'The Master Magical Key - Digital Book',
    description: 'Architected full-scale digital book marketplace processing 1500+ transactions with 98% success rate, featuring subscription management, interactive reading interface, and comprehensive admin analytics. Managed 1000+ users, 50+ coaches, and 300+ booking sessions with integrated PayPal payments and email campaigns.',
    image: './images/projects/mmk.png',
    category: 'E-commerce',
    technologies: ['React', 'TailwindCSS', 'MySQL', 'PayPal API', 'Laravel & PHP'],
    link: 'https://mastermagicalkey.com/',
    featured: true,
    content: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">🔮 The Master Magical Key - E-commerce Digital Book Platform</h3>
          <p class="text-gray-700 mb-4">A comprehensive e-commerce platform for digital books featuring advanced subscription management, interactive reading interfaces, and powerful analytics.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-green-50 p-4 rounded-lg text-center">
            <div class="text-3xl font-bold text-green-600">1000+</div>
            <div class="text-sm text-gray-600">Beta Users Managed</div>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg text-center">
            <div class="text-3xl font-bold text-blue-600">1500+</div>
            <div class="text-sm text-gray-600">Transactions Processed</div>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg text-center">
            <div class="text-3xl font-bold text-purple-600">98%</div>
            <div class="text-sm text-gray-600">Payment Success Rate</div>
          </div>
        </div>

        <div>
          <h4 class="text-xl font-semibold mb-3">🚀 Key Features Implemented</h4>
          <ul class="space-y-2">
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>Digital Bookstore:</strong> 50+ books with 1000+ chapters, interactive reading interface with page-turning animations</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>Subscription System:</strong> Monthly and lifetime subscriptions with automated billing via PayPal</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>Coach Management:</strong> 20+ coaches, 300+ booked sessions with calendar integration</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>Video Platform:</strong> 50+ training videos with 10,000+ tracked views</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>Analytics Dashboard:</strong> Real-time sales tracking with Chart.js visualizations</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-xl font-semibold mb-3">🛠️ Technical Implementation</h4>
          <div class="bg-gray-50 p-4 rounded-lg">
            <ul class="space-y-2">
              <li><strong>Backend:</strong> Laravel 8+ with 15+ database tables and 30+ relationships</li>
              <li><strong>Frontend:</strong> React components with TailwindCSS, 90% test coverage</li>
              <li><strong>Payment Integration:</strong> PayPal REST API with 5+ webhook handlers</li>
              <li><strong>Testing:</strong> 100+ PHPUnit tests covering core functionality</li>
              <li><strong>Security:</strong> Role-based access control, CSRF protection, input sanitization</li>
            </ul>
          </div>
        </div>

        <div>
          <h4 class="text-xl font-semibold mb-3">📈 Performance & Impact</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-yellow-50 p-4 rounded-lg">
              <div class="font-semibold text-yellow-800">Email Campaigns</div>
              <div class="text-sm text-gray-600">50+ campaigns sent with 25% average open rate</div>
            </div>
            <div class="bg-red-50 p-4 rounded-lg">
              <div class="font-semibold text-red-800">Load Testing</div>
              <div class="text-sm text-gray-600">Successfully tested with 100 concurrent users</div>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 2,
    title: 'Real-time Analytics Dashboard',
    description: 'A single-screen React dashboard built with RTK Query and Emotion-js featuring interactive charts (pie, bar, line), real-time search, and glass morphism UI design. Demonstrates advanced frontend skills including performance optimization with useMemo, conditional API queries, debounced search functionality, and responsive CSS Grid layouts for optimal user experience.',
    image: './images/projects/analyticsdashboard.png',
    category: 'Web Application',
    technologies: ['React Hooks', 'RTK Query', ' Emotion-js', 'Recharts', 'TailwindCSS'],
    link: 'https://realtimeanalyticsdashboard.netlify.app/',
    featured: false,
    content: ``
  },
  {
    id: 3,
    title: 'Shopping Cart Simulator',
    description: 'A React application demonstrating advanced state management with useReducer, useMemo optimization, and custom hooks. Features dynamic inventory management, real-time calculations, category filtering, and responsive design—showcasing modern React patterns and scalable component architecture for real-world applications.',
    image: './images/projects/shoppingcartsimulator.png',
    category: 'Web Application',
    technologies: ['React state management', 'hooks', 'React patterns', 'responsive design'],
    link: 'https://shoppingcartsimulator.netlify.app/',
    featured: false,
    content: ``
  },
  {
    id: 4,
    title: 'IBM Engineering Lifecycle Management',
    description: 'Built enterprise-scale reporting UI using React, TypeScript, and Graphite framework with 85% test coverage and 30% performance improvement on large datasets. Collaborated with cross-functional teams to deliver WCAG 2.1 AA compliant components serving thousands of engineering professionals globally.',
    image: './images/projects/JRS.png',
    category: 'Enterprise & Business Solutions',
    technologies: ['React', 'TypeScript', 'Graphite Framework', 'Jest', 'REST APIs'],
    link: 'https://www.ibm.com/docs/en/engineering-lifecycle-management-suite/lifecycle-management/7.0.3?topic=service-jazz-reporting-components',
    featured: true
  },
  {
    id: 5,
    title: 'Moody\'s Analytics - CreditLens™ Platform',
    description: 'Developed high-performance financial platform interfaces using React, TypeScript, and GraphQL with 90% test coverage and 40% defect reduction. Implemented advanced code splitting and lazy loading techniques while mentoring junior developers and maintaining enterprise-grade code quality standards.',
    image: './images/projects/creditlense.jpg',
    category: 'FinTech',
    technologies: ['React', 'GraphQL', 'JavaScript', 'TypeScript', 'Redux'],
    link: 'https://www.moodyscre.com/products/creditlens-cre/',
    featured: true,
    content: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">🏦 Moody's Analytics - CreditLens™ Platform</h3>
          <p class="text-gray-700 mb-4">Senior Frontend Developer role developing complex financial interfaces for enterprise clients using cutting-edge React architecture.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-blue-50 p-4 rounded-lg text-center">
            <div class="text-3xl font-bold text-blue-600">90%</div>
            <div class="text-sm text-gray-600">Test Coverage Achieved</div>
          </div>
          <div class="bg-green-50 p-4 rounded-lg text-center">
            <div class="text-3xl font-bold text-green-600">40%</div>
            <div class="text-sm text-gray-600">Defect Reduction</div>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg text-center">
            <div class="text-3xl font-bold text-purple-600">50+</div>
            <div class="text-sm text-gray-600">React Components</div>
          </div>
        </div>

        <div>
          <h4 class="text-xl font-semibold mb-3">🎯 Key Achievements</h4>
          <ul class="space-y-2">
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>Architecture:</strong> Designed scalable React/TypeScript architecture with Redux state management</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>Performance:</strong> Implemented code splitting, lazy loading, and memoization for optimal performance</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>Testing:</strong> Established comprehensive Jest testing framework covering 90% of codebase</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>Mentorship:</strong> Guided 3+ junior developers on React best practices and testing methodologies</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-xl font-semibold mb-3">🛠️ Technical Stack & Implementation</h4>
          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 class="font-semibold mb-2">Frontend Technologies</h5>
                <ul class="space-y-1 text-sm">
                  <li>• React with TypeScript for type safety</li>
                  <li>• GraphQL for efficient data fetching</li>
                  <li>• Redux for predictable state management</li>
                  <li>• Jest for comprehensive testing</li>
                </ul>
              </div>
              <div>
                <h5 class="font-semibold mb-2">Development Practices</h5>
                <ul class="space-y-1 text-sm">
                  <li>• Component-based architecture</li>
                  <li>• GitFlow branching strategy</li>
                  <li>• Code review and documentation</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 class="text-xl font-semibold mb-3">👥 Collaboration & Leadership</h4>
          <div class="space-y-3">
            <div class="bg-blue-50 p-3 rounded">
              <strong>Cross-functional Collaboration:</strong> Worked with product managers, UX designers, backend engineers, and QA teams in sprint ceremonies
            </div>
            <div class="bg-green-50 p-3 rounded">
              <strong>Knowledge Sharing:</strong> Documented technical decisions and architecture on Confluence for team transparency
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <strong>Code Quality:</strong> Established testing best practices and code review guidelines maintaining high quality standards
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 6,
    title: 'Website Translation Plugin',
    description: 'Developed automated JavaScript plugin that extracts website content, translates into 10+ languages, and generates ready-to-use i18n files with zero manual effort. Handles 1000+ DOM nodes efficiently with API-agnostic design, saving developers weeks of internationalization work.',
    image: './images/projects/websiteTransPlugin.webp',
    category: 'Web Application',
    technologies: ['JavaScript (ES6+)', 'API Integration', 'Browser Extension Development', 'i18n File Generation'],
    github: 'https://github.com/kshiti-codes/website-translator-plugin',
    featured: false,
    content: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">🌐 Website Translation Plugin</h3>
          <p class="text-gray-700 mb-4">Intelligent JavaScript plugin that automates text extraction, translation, and i18n file generation for multi-language website support.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-blue-50 p-4 rounded-lg text-center">
            <div class="text-3xl font-bold text-blue-600">1000+</div>
            <div class="text-sm text-gray-600">DOM Nodes Handled</div>
          </div>
          <div class="bg-green-50 p-4 rounded-lg text-center">
            <div class="text-3xl font-bold text-green-600">10+</div>
            <div class="text-sm text-gray-600">Languages Supported</div>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg text-center">
            <div class="text-3xl font-bold text-purple-600">&lt;10s</div>
            <div class="text-sm text-gray-600">Processing Time</div>
          </div>
        </div>

        <div>
          <h4 class="text-xl font-semibold mb-3">🚀 Core Features</h4>
          <ul class="space-y-2">
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>Smart DOM Extraction:</strong> Recursive traversal preserving structure while filtering noise</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>API Agnostic:</strong> Compatible with Google Translate, DeepL, and other translation services</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>Batch Processing:</strong> Optimized API calls with rate limit compliance</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>i18n Generation:</strong> Ready-to-use JSON/JS files for React, Vue, Angular</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>Dual Deployment:</strong> Works as script tag or browser extension</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-xl font-semibold mb-3">⚡ Performance & Compatibility</h4>
          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 class="font-semibold mb-2">Performance Metrics</h5>
                <ul class="space-y-1 text-sm">
                  <li>• Handles 1000+ DOM nodes without lag</li>
                  <li>• <10s processing for medium pages</li>
                  <li>• <2s processing for small pages</li>
                  <li>• Optimized batching algorithm</li>
                </ul>
              </div>
              <div>
                <h5 class="font-semibold mb-2">Browser Support</h5>
                <ul class="space-y-1 text-sm">
                  <li>• Chrome, Firefox, Edge compatible</li>
                  <li>• Static and dynamic sites supported</li>
                  <li>• React, Vue, plain HTML tested</li>
                  <li>• Cross-platform functionality</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 class="text-xl font-semibold mb-3">🛠️ Developer Experience</h4>
          <div class="space-y-3">
            <div class="bg-blue-50 p-3 rounded">
              <strong>Easy Integration:</strong> Simple setup with CDN or local installation options
            </div>
            <div class="bg-green-50 p-3 rounded">
              <strong>Comprehensive Documentation:</strong> Complete README with setup guides and examples
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <strong>Customizable UI:</strong> Configurable overlay controls with color and position options
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <strong>Error Handling:</strong> Robust retry logic and detailed error logging
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 7,
    title: 'Super Resolution using GAN',
    description: 'Engineered cutting-edge AI system combining Generative Adversarial Networks with Residual Dense Networks to enhance image resolution with superior visual quality. Achieved state-of-the-art results using advanced deep learning techniques, making it applicable to photography, medical imaging, and satellite imagery enhancement.',
    image: './images/projects/gan.jpg',
    category: 'AI & Machine Learning',
    technologies: ['Python', 'TensorFlow/Keras', 'Generative Adversarial Networks', 'Neural Network Optimization'],
    link: '#',
    featured: false,
    content: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">🤖 Image Super-Resolution using GANs & RDNs</h3>
          <p class="text-gray-700 mb-4">Sophisticated deep learning system combining Generative Adversarial Networks with Residual Dense Networks for high-quality image enhancement.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-purple-50 p-4 rounded-lg text-center">
            <div class="text-3xl font-bold text-purple-600">86</div>
            <div class="text-sm text-gray-600">Training Epochs</div>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg text-center">
            <div class="text-3xl font-bold text-blue-600">1000</div>
            <div class="text-sm text-gray-600">Batches Processed</div>
          </div>
          <div class="bg-green-50 p-4 rounded-lg text-center">
            <div class="text-3xl font-bold text-green-600">DIV2K</div>
            <div class="text-sm text-gray-600">Dataset Used</div>
          </div>
        </div>

        <div>
          <h4 class="text-xl font-semibold mb-3">🧠 Technical Architecture</h4>
          <ul class="space-y-2">
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>GAN Framework:</strong> Generator and Discriminator networks with competitive adversarial training</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>Residual Dense Networks:</strong> Advanced feature extraction with C=6, D=20, G=64, G0=64 parameters</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>Dual Learning:</strong> Global and Local Residual Learning for comprehensive feature preservation</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>Advanced Loss Functions:</strong> VGG19-based perceptual loss for enhanced visual quality</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-xl font-semibold mb-3">🎯 Implementation Highlights</h4>
          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 class="font-semibold mb-2">Training Strategy</h5>
                <ul class="space-y-1 text-sm">
                  <li>• Two-phase alternating training</li>
                  <li>• Stable convergence methodology</li>
                  <li>• Real-time monitoring via TensorBoard</li>
                  <li>• 32×32 patch augmentation</li>
                </ul>
              </div>
              <div>
                <h5 class="font-semibold mb-2">Model Variants</h5>
                <ul class="space-y-1 text-sm">
                  <li>• Small RDN: PSNR-optimized</li>
                  <li>• Large RDN: Advanced noise canceling</li>
                  <li>• Multiple pre-trained configurations</li>
                  <li>• Flexible architecture design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 class="text-xl font-semibold mb-3">🚀 Deployment Features</h4>
          <div class="space-y-3">
            <div class="bg-blue-50 p-3 rounded">
              <strong>Easy Installation:</strong> Streamlined setup via pip package management system
            </div>
            <div class="bg-green-50 p-3 rounded">
              <strong>Batch Processing:</strong> Predictor class for handling entire image folders efficiently
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <strong>Flexible I/O:</strong> Configurable input/output directory structures for various use cases
            </div>
          </div>
        </div>

        <div>
          <h4 class="text-xl font-semibold mb-3">🌟 Practical Applications</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h5 class="font-semibold text-yellow-800 mb-2">Photography Enhancement</h5>
              <p class="text-sm text-gray-600">Professional image upscaling for print media and digital content</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg">
              <h5 class="font-semibold text-blue-800 mb-2">Medical Imaging</h5>
              <p class="text-sm text-gray-600">Potential applications in diagnostic image clarity and analysis</p>
            </div>
            <div class="bg-green-50 p-4 rounded-lg">
              <h5 class="font-semibold text-green-800 mb-2">Satellite Imagery</h5>
              <p class="text-sm text-gray-600">Geographic and surveillance image enhancement capabilities</p>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg">
              <h5 class="font-semibold text-purple-800 mb-2">Digital Media</h5>
              <p class="text-sm text-gray-600">Content enhancement for web and mobile applications</p>
            </div>
          </div>
        </div>

        <div>
          <h4 class="text-xl font-semibold mb-3">📈 Results & Impact</h4>
          <div class="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
            <p class="text-gray-700">Successfully demonstrated state-of-the-art image super-resolution capabilities with dramatic improvements in image clarity, detail preservation, and overall quality across diverse image types including food photography, geometric patterns, and human subjects.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 8,
    title: 'Sign Language Recognition Survey',
    description: 'Developed and compared high-accuracy machine learning models (SVM: 99.79%, CNN: 99.83%) for American Sign Language recognition using 27,455+ training images. Created production-ready Jupyter notebooks with comprehensive documentation, advancing accessibility technology through cutting-edge computer vision.',
    image: './images/projects/SLR.png',
    category: 'AI & Machine Learning',
    technologies: ['Python', 'TensorFlow/Keras','scikit-learn', 'Computer Vision '],
    github: 'https://github.com/kshiti-codes/Sign-Language-Recognition-CNN',
    featured: false
  },
  {
    id: 9,
    title: 'Care for Each - Field Force Management Tool',
    description: 'Built enterprise-grade field force management system with real-time personnel tracking, automated reporting, and comprehensive analytics dashboard. Achieved 40% reduction in data loading time through advanced query optimization and caching strategies, managing 100+ field personnel efficiently.',
    image: './images/projects/careForEach.webp',
    category: 'Enterprise & Business Solutions',
    technologies: ['Laravel', 'MySQL', 'JavaScript', 'PHP'],
    link: 'https://github.com/kshiti-codes/CareForEach',
    featured: true,
    content: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">👥 Care for Each - Field Force Management Tool</h3>
          <p class="text-gray-700 mb-4">Comprehensive field force management system enabling real-time tracking, task management, and communication for on-field personnel.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-green-50 p-4 rounded-lg text-center">
            <div class="text-3xl font-bold text-green-600">40%</div>
            <div class="text-sm text-gray-600">Data Loading Improvement</div>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg text-center">
            <div class="text-3xl font-bold text-blue-600">90%+</div>
            <div class="text-sm text-gray-600">Test Coverage</div>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg text-center">
            <div class="text-3xl font-bold text-purple-600">100%</div>
            <div class="text-sm text-gray-600">Mobile Responsive</div>
          </div>
        </div>

        <div>
          <h4 class="text-xl font-semibold mb-3">🚀 Core Features</h4>
          <ul class="space-y-2">
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>Real-time Personnel Tracking:</strong> Live location tracking with geolocation integration</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>Task Management:</strong> Assignment and status tracking with automated notifications</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>Attendance System:</strong> Smart attendance logging via mobile devices</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>Communication Hub:</strong> Real-time messaging between field staff and management</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>Analytics Dashboard:</strong> Performance metrics and attendance reporting</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-xl font-semibold mb-3">⚡ Performance Optimizations</h4>
          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 class="font-semibold mb-2">Database Optimization</h5>
                <ul class="space-y-1 text-sm">
                  <li>• Efficient schema design with proper indexing</li>
                  <li>• Optimized queries with eager loading</li>
                  <li>• 40% reduction in data loading time</li>
                  <li>• Redis caching implementation</li>
                </ul>
              </div>
              <div>
                <h5 class="font-semibold mb-2">Frontend Performance</h5>
                <ul class="space-y-1 text-sm">
                  <li>• Mobile-first responsive design</li>
                  <li>• Real-time updates with minimal latency</li>
                  <li>• Interactive dashboards and maps</li>
                  <li>• Bootstrap customization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 class="text-xl font-semibold mb-3">🛠️ Technical Implementation</h4>
          <div class="space-y-3">
            <div class="bg-blue-50 p-3 rounded">
              <strong>Backend:</strong> Laravel framework with RESTful API design, comprehensive test coverage with PHPUnit
            </div>
            <div class="bg-green-50 p-3 rounded">
              <strong>Database:</strong> MySQL with normalized tables, spatial indexes for geolocation queries
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <strong>Caching:</strong> Redis/Memcached for frequently accessed data with smart invalidation policies
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <strong>Documentation:</strong> Comprehensive API documentation with Swagger integration
            </div>
          </div>
        </div>

        <div>
          <h4 class="text-xl font-semibold mb-3">📊 Impact & Results</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-green-50 p-4 rounded-lg">
              <div class="font-semibold text-green-800">Operational Efficiency</div>
              <div class="text-sm text-gray-600">Enhanced real-time tracking and communication improved field operations significantly</div>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg">
              <div class="font-semibold text-blue-800">Mobile Experience</div>
              <div class="text-sm text-gray-600">Mobile-friendly UI improved field usability and adoption rates</div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 10,
    title: 'Spend Sage - Personal Finance App',
    description: 'Designed intuitive expense tracking application with interactive data visualizations using Chart.js, category filtering, and real-time financial insights. Built with React and Redux for seamless user experience, helping users make informed financial decisions through comprehensive budget management.',
    image: './images/projects/spendsage.webp',
    category: 'Web Application',
    technologies: ['React', 'Chart.js', 'Redux', 'Typescript'],
    github: 'https://github.com/kshiti-codes/SpendSage',
    featured: false
  },
  {
    id: 11,
    title: 'BookLand - Second Hand Book Platform',
    description: 'Built a comprehensive e-commerce ecosystem with smart geolocation search, integrated wallet system, and AI-powered recommendations that promoted sustainability through book reuse. Delivered full-stack solution with secure payment processing, real-time notifications, and optimized MySQL queries for seamless user experience.',
    image: './images/projects/booland.jpg',
    category: 'E-commerce',
    technologies: ['Laravel & PHP', 'MySQL', 'JavaScript', 'Payment Gateway'],
    github: 'https://github.com/kshiti-codes/Book-Land',
    featured: false,
    content: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">📚 BookLand - Sustainable Book Marketplace</h3>
          <p class="text-gray-700 mb-4">Second-hand book buying and selling platform promoting sustainability with advanced search capabilities and secure payment integration.</p>
        </div>

        <div>
          <h4 class="text-xl font-semibold mb-3">🌱 Sustainability Focus</h4>
          <div class="bg-green-50 p-4 rounded-lg mb-4">
            <p class="text-green-800">Designed to promote <strong>reuse and sustainability</strong> by encouraging second-hand book circulation, contributing to environmental conservation while making books accessible.</p>
          </div>
        </div>

        <div>
          <h4 class="text-xl font-semibold mb-3">🔍 Smart Features</h4>
          <ul class="space-y-2">
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>Location-Based Search:</strong> Geolocation integration with spatial indexing for finding nearby books</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>Smart Recommendations:</strong> AI-powered suggestions based on purchase history and browsing patterns</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>Integrated Wallet:</strong> Secure payment system with PayPal/Stripe integration</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>User Verification:</strong> Email verification system to ensure credibility</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-xl font-semibold mb-3">💡 Technical Implementation</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h5 class="font-semibold text-blue-800 mb-2">Backend Features</h5>
              <ul class="text-sm space-y-1">
                <li>• Laravel authentication scaffolding</li>
                <li>• CRUD operations for book listings</li>
                <li>• Spatial indexes for location queries</li>
                <li>• Transaction history tracking</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg">
              <h5 class="font-semibold text-purple-800 mb-2">Frontend Design</h5>
              <ul class="text-sm space-y-1">
                <li>• Mobile-first responsive layouts</li>
                <li>• Dynamic filtering and sorting</li>
                <li>• Real-time form validations</li>
                <li>• Interactive modals and alerts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 12,
    title: 'The Last Step - University Portal',
    description: 'Developed a complete academic management system handling 1000+ students with role-based authentication, automated progress tracking, and real-time grading workflows. Created intuitive dashboards for both students and supervisors with comprehensive reporting and notification systems using CodeIgniter and Bootstrap.',
    image: './images/projects/theLastStep.jpeg',
    category: 'Web Application',
    technologies: ['CodeIgniter', 'MySQL', 'JavaScript'],
    featured: false
  }
];