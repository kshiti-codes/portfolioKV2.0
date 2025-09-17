import React, { useState } from 'react';
import { 
  Code, 
  TrendingUp, 
  Award, 
  Users, 
  Calendar, 
  MapPin, 
  ArrowRight,
  X,
  CheckCircle
} from 'lucide-react';

const ProfessionalEvolution = () => {
  const [activeStage, setActiveStage] = useState(3); // Default to Independent Era
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const stages = [
    {
      id: 0,
      title: "Foundation Years",
      period: "2018-2019",
      subtitle: "Building the Basics",
      description: "Started my development journey, learning core technologies and gaining first industry experience.",
      bgColor: "from-blue-100 to-blue-200",
      skills: ["JavaScript", "React", "CSS", "HTML"],
      icon: Code
    },
    {
      id: 1,
      title: "Skill Development",
      period: "2019-2021",
      subtitle: "Expanding Horizons",
      description: "Diversified experience across different sectors, from government to private enterprises.",
      bgColor: "from-purple-100 to-purple-200",
      skills: ["React", "TypeScript", "Node.js", "MongoDB", "API Design"],
      icon: TrendingUp
    },
    {
      id: 2,
      title: "Enterprise Experience",
      period: "2021-2024",
      subtitle: "Scaling Up",
      description: "Worked with Fortune 500 companies, handling complex enterprise applications.",
      bgColor: "from-green-100 to-green-200",
      skills: ["React", "TypeScript", "GraphQL", "Data Visualization", "Performance Optimization", "Testing"],
      icon: Award
    },
    {
      id: 3,
      title: "Independent Era",
      period: "2024-Present",
      subtitle: "Entrepreneurial Journey",
      description: "Launched independent consultancy, focusing on AI-powered web solutions.",
      bgColor: "from-teal-100 to-cyan-200",
      skills: ["React", "AI Integration", "Data Visualization", "Business Strategy", "Client Management", "Leadership"],
      icon: Users
    }
  ];

  type Company = {
    id: string;
    name: string;
    role: string;
    duration: string;
    logo: string; // For company logo URL or icon identifier
    logotype?: 'url' | 'lucide'; // Type of logo
    color: string;
    borderColor: string;
    achievements: string[];
    description: string;
  };

  const companiesData: Record<number, Company[]> = {
    0: [
      {
        id: 'psvm',
        name: 'PSVM Innova Pvt. Ltd.',
        role: 'Frontend Developer - Mandatory Internship',
        duration: 'May 2018 - Apr 2019',
        logo: './images/company/innova.webp',
        logotype: 'url',
        color: 'from-blue-400 to-blue-600',
        borderColor: 'from-blue-400 to-blue-600',
        achievements: [
          'Built foundational web development skills using HTML5, CSS3, JavaScript, and Bootstrap',
          'Developed responsive user interfaces and learned component-based architecture principles',
          'Gained experience with version control (Git) and collaborative development workflows',
          'Created interactive web applications with DOM manipulation and JavaScript ES6 features',
          'Established understanding of web performance optimization and cross-browser compatibility'
        ],
        description: 'My first professional role where I learned the fundamentals of web development and gained valuable industry experience.'
      },

    ],
    1: [
        {
        id: 'webearl',
        name: 'WebEarl Technology Pvt. Ltd.',
        role: 'Frontend Developer',
        duration: 'May 2019 - Nov 2019',
        logo: './images/company/webearl.png',
        logotype: 'url',
        color: 'from-purple-400 to-purple-600',
        borderColor: 'from-purple-400 to-purple-600',
        achievements: [
          'Transitioned to React.js development, building my first component-based applications',
          'Developed responsive web applications using React hooks and functional components',
          'Implemented state management and API integration for dynamic user interfaces',
          'Enhanced UX/UI implementation skills with modern CSS-in-JS approaches'
        ],
        description: 'Focused on frontend specialization and enhanced my skills in creating beautiful, responsive user interfaces.'
      },
      {
        id: 'bisag',
        name: 'BISAG',
        role: 'Frontend Developer - Machine Learning Focused',
        duration: 'Dec 2019 - Apr 2020',
        logo: './images/company/bisag.jpg',
        logotype: 'url',
        color: 'from-green-400 to-green-600',
        borderColor: 'from-green-400 to-green-600',
        achievements: [
          'Developed React-based public service applications serving 100K+ government users',
          'Integrated machine learning APIs with React frontends for data-driven decision making',
          'Built secure, compliant web applications meeting government security standards',
          'Implemented responsive design systems ensuring accessibility across diverse user bases'
        ],
        description: 'Gained experience in government sector development with focus on public service applications.'
      },
      
    ],
    2: [
        {
        id: 'tatvasoft',
        name: 'Tatvasoft Pvt. Ltd.',
        role: 'Junior Frontend Developer',
        duration: 'Oct 2020 - Mar 2021',
        logo: './images/company/tatvasoft.png',
        logotype: 'url',
        color: 'from-orange-400 to-red-600',
        borderColor: 'from-orange-400 to-red-600',
        achievements: [
          'Developed React applications for international clients across diverse industry verticals',
          'Enhanced technical expertise in React ecosystem including hooks, context API, and lifecycle methods',
          'Improved code quality through implementation of React testing libraries and best practices',
          'Collaborated with cross-functional teams using agile methodologies for React-based solutions',
          'Gained experience in React performance optimization and bundle size reduction techniques'
        ],
        description: 'Expanded my technical expertise while working on diverse international projects.'
      },
      {
        id: 'tcs',
        name: 'Tata Consultancy Services',
        role: 'Senior Frontend Developer',
        duration: 'Apr 2021 - Aug 2024',
        logo: './images/company/tcs.jpeg',
        logotype: 'url',
        color: 'from-blue-600 to-indigo-600',
        borderColor: 'from-blue-600 to-indigo-600',
        achievements: [
          'Architected and developed React/TypeScript applications for Fortune 500 clients including IBM and Moody\'s Analytics',
          'Led React frontend development for enterprise-scale applications serving millions of users',
          'Mentored junior developers in React best practices and established React coding standards across teams',
          'Integrated 8 RESTful APIs improving data loading speed by 35% through React optimization',
          'Achieved 90%+ test coverage using Jest and React Testing Library, reducing post-release defects by 40%'
        ],
        description: 'Led enterprise-level projects for major clients, focusing on scalable and high-performance solutions.'
      }
    ],
    3: [
      {
        id: 'freelance',
        name: 'Independent Consultant',
        role: 'Frontend Developer & AI Specialist',
        duration: 'Sep 2024 - Present',
        logo: '🚀',
        color: 'from-teal-500 to-cyan-500',
        borderColor: 'from-teal-500 to-cyan-500',
        achievements: [
          'Developing React/TypeScript applications with AI API integrations serving 5,000+ monthly users',
          'Building data-rich analytics dashboards using React with real-time data visualization (D3.js, Chart.js)',
          'Integrated machine learning APIs improving user engagement by 45% through intelligent UX',
          'Achieved 99.8% uptime and 60% faster loading times through React performance optimization'
          
        ],
        description: 'Currently building innovative AI-powered solutions as an independent consultant, helping businesses transform digitally.'
      }
    ]
  };

  const openCompanyModal = (company: Company) => {
    setSelectedCompany(company);
  };

  const closeCompanyModal = () => {
    setSelectedCompany(null);
  };

  const currentStageData = stages[activeStage];
  const currentCompanies = companiesData[activeStage] || [];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-3 rounded-full mr-3">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Professional Evolution
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A decade-long journey of continuous learning, growth, and innovation in the world of technology.
          </p>
        </div>

        {/* Stage Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100 w-full max-w-none md:max-w-max">
            <div className="grid grid-cols-4 md:flex md:space-x-2 gap-1 md:gap-0 md:min-w-max">
              {stages.map((stage, index) => {
                const IconComponent = stage.icon;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStage(index)}
                    className={`flex flex-col md:flex-row items-center justify-center md:justify-start px-2 md:px-4 py-2 md:py-3 rounded-xl transition-all duration-300 text-center md:text-left ${
                      activeStage === index
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <IconComponent className="h-3 w-3 md:h-4 md:w-4 mb-1 md:mb-0 md:mr-2" />
                    <span className="font-medium text-xs md:text-sm leading-tight whitespace-nowrap">
                      <span className="hidden md:inline">{stage.title}</span>
                      <span className="md:hidden">{stage.title.split(' ')[0]}</span>
                      <span className="md:hidden block text-[10px] opacity-75">{stage.title.split(' ')[1] || ''}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stage Content */}
        <div className="max-w-6xl mx-auto">
          <div className="transition-all duration-500 ease-in-out">
            {/* Stage Header */}
            <div className={`bg-gradient-to-r ${currentStageData.bgColor} rounded-2xl p-8 mb-8`}>
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="bg-white bg-opacity-30 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 mr-4">
                      {currentStageData.period}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-800">{currentStageData.subtitle}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{currentStageData.description}</p>
                  
                  {/* Key Skills */}
                  <div className="flex flex-wrap gap-2">
                    {currentStageData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-white bg-opacity-50 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium text-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Companies Grid */}
            <div className={`grid gap-6 ${currentCompanies.length === 1 ? 'md:grid-cols-1 max-w-2xl mx-auto' : 'md:grid-cols-2'}`}>
              {currentCompanies.map((company) => (
                <div
                  key={company.id}
                  className="group bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => openCompanyModal(company)}
                >
                  <div className={`h-2 bg-gradient-to-r ${company.borderColor}`}></div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        { company.logotype === 'url' ? (
                          <img src={company.logo} alt={company.name} className="w-12 h-12 md:h-8 md:w-8 mb-1 md:mb-0 md:mr-2 overflow-visible" />
                        ) : (
                          <div className={`w-12 h-12 md:h-8 md:w-8 mb-1 md:mb-0 md:mr-2 flex items-center justify-center rounded-full`}>
                            <span className="text-white text-lg">{company.logo}</span>
                          </div>
                        )}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">{company.name}</h4>
                          <p className="text-teal-600 font-medium text-sm">{company.role}</p>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-teal-500 group-hover:translate-x-1 transition-all duration-300" />
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        {company.duration}
                      </div>
                    </div>

                    {/* Achievements Preview */}
                    <div className="space-y-2">
                      {company.achievements.slice(0, 2).map((achievement, index) => (
                        <div key={index} className="flex items-start text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {achievement}
                        </div>
                      ))}
                      {company.achievements.length > 2 && (
                        <p className="text-xs text-gray-500 ml-4">
                          +{company.achievements.length - 2} more achievements
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Company Modal */}
      {selectedCompany && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                { selectedCompany.logotype === 'url' ? (
                    <img src={selectedCompany.logo} alt={selectedCompany.name} className="w-12 h-12 md:h-8 md:w-8 mb-1 md:mb-0 md:mr-2 overflow-visible" />
                    ) : (
                    <div className={`w-12 h-12 md:h-8 md:w-8 mb-1 md:mb-0 md:mr-2 flex items-center justify-center rounded-full`}>
                        <span className="text-white text-lg">{selectedCompany.logo}</span>
                    </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedCompany.name}</h3>
                  <p className="text-teal-600 font-medium">{selectedCompany.role}</p>
                </div>
              </div>
              <button
                onClick={closeCompanyModal}
                className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center text-gray-600 mb-1">
                  <Calendar className="h-4 w-4 mr-2" />
                  Duration
                </div>
                <p className="font-semibold">{selectedCompany.duration}</p>
              </div>
            </div>

            {selectedCompany.description && (
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Overview</h4>
                <p className="text-gray-700">{selectedCompany.description}</p>
              </div>
            )}

            <div>
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-teal-600" />
                Key Achievements
              </h4>
              <div className="space-y-3">
                {selectedCompany.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProfessionalEvolution;