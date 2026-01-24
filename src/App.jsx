import { useState } from 'react';
import { 
  Brain, Shield, Cog, Building2, Network, FileText, 
  GitBranch, Zap, HeartPulse, Server, Lightbulb, Users 
} from 'lucide-react';
import Navigation from './components/Navigation';
import ProjectCard from './components/ProjectCard';
import Modal from './components/Modal';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  // The Ultimate 12 Projects
  const projects = [
    {
      id: 1,
      title: "SOMAS",
      subtitle: "Self-Sovereign Multi-Agent System",
      category: "AI Architecture",
      icon: Brain,
      description: "Revolutionary multi-agent framework enabling autonomous coordination without central control. Implements self-sovereign principles where each agent maintains independence while contributing to collective intelligence. Built on advanced state machines and distributed consensus protocols.",
      stats: {
        complexity: "Advanced",
        stack: "Python, gRPC, Redis"
      },
      details: [
        "Autonomous agent coordination without centralized control",
        "Self-sovereign identity and decision-making for each agent",
        "Distributed consensus mechanisms for collective intelligence",
        "Scalable architecture supporting 100+ concurrent agents"
      ]
    },
    {
      id: 2,
      title: "API Toolkit",
      subtitle: "Governance Gateway",
      category: "Governance",
      icon: Shield,
      description: "Enterprise-grade API governance platform providing centralized control over API lifecycle, security policies, and compliance requirements. Features automated policy enforcement, comprehensive audit trails, and real-time monitoring for distributed API ecosystems.",
      stats: {
        complexity: "Advanced",
        stack: "Node.js, Kong, PostgreSQL"
      },
      details: [
        "Centralized API lifecycle management and governance",
        "Automated policy enforcement and compliance checking",
        "Real-time monitoring and analytics dashboard",
        "Comprehensive audit trails for regulatory compliance"
      ]
    },
    {
      id: 3,
      title: "Aether Engine",
      subtitle: "Lifecycle Methodology",
      category: "Methodology",
      icon: Cog,
      description: "Comprehensive 11-state machine methodology for managing complex system lifecycles. Provides structured approach to development, deployment, and evolution of enterprise systems with built-in governance, quality gates, and automated transitions.",
      stats: {
        complexity: "Expert",
        stack: "Conceptual Framework"
      },
      details: [
        "11-state machine covering complete system lifecycle",
        "Built-in governance and quality gates at each transition",
        "Automated state transitions with validation rules",
        "Applicable across all project types and technologies"
      ]
    },
    {
      id: 4,
      title: "Enterprise Imaging",
      subtitle: "Hoag Health System",
      category: "Enterprise",
      icon: Building2,
      description: "Large-scale medical imaging infrastructure serving a major health system. Integrated PACS, VNA, and advanced visualization systems with seamless EHR connectivity. Processes 500K+ studies annually with sub-second retrieval times.",
      stats: {
        complexity: "Expert",
        stack: "DICOM, HL7, Java"
      },
      details: [
        "Integrated PACS and VNA infrastructure",
        "Seamless Epic EHR connectivity",
        "Processes 500,000+ imaging studies annually",
        "Sub-second image retrieval and display"
      ]
    },
    {
      id: 5,
      title: "HL7 Bridge",
      subtitle: "Python Interoperability",
      category: "Enterprise",
      icon: Network,
      description: "High-performance HL7 message processing engine built in Python. Handles complex message transformations, routing rules, and protocol conversions. Processes millions of healthcare transactions daily with guaranteed delivery and comprehensive error handling.",
      stats: {
        complexity: "Advanced",
        stack: "Python, HL7, RabbitMQ"
      },
      details: [
        "Processes millions of HL7 messages daily",
        "Complex message transformation and routing engine",
        "Guaranteed delivery with comprehensive error handling",
        "Support for HL7 v2.x and FHIR protocols"
      ]
    },
    {
      id: 6,
      title: "IT Imaging 2.0",
      subtitle: "Governance Framework",
      category: "Governance",
      icon: FileText,
      description: "Next-generation governance framework for medical imaging informatics. Establishes standards, policies, and procedures for imaging technology lifecycle management. Includes automated compliance monitoring and risk assessment tools.",
      stats: {
        complexity: "Advanced",
        stack: "Policy Framework"
      },
      details: [
        "Comprehensive governance policies and procedures",
        "Automated compliance monitoring and reporting",
        "Risk assessment and mitigation frameworks",
        "Technology lifecycle management guidelines"
      ]
    },
    {
      id: 7,
      title: "APO Agent",
      subtitle: "Recursive Optimization",
      category: "AI Architecture",
      icon: GitBranch,
      description: "Advanced Prompt Optimization agent using recursive self-improvement algorithms. Analyzes prompt effectiveness, generates variations, and continuously optimizes for better AI model responses. Implements reinforcement learning for adaptive optimization strategies.",
      stats: {
        complexity: "Expert",
        stack: "Python, OpenAI, MLflow"
      },
      details: [
        "Recursive self-improvement algorithms",
        "Automated prompt variation generation and testing",
        "Reinforcement learning for optimization strategies",
        "Measurable improvements in response quality metrics"
      ]
    },
    {
      id: 8,
      title: "SMART Router",
      subtitle: "Intelligent Model Selection",
      category: "AI Architecture",
      icon: Zap,
      description: "Intelligent routing system that dynamically selects optimal AI models based on task requirements, cost constraints, and performance targets. Features real-time model performance tracking and automatic failover capabilities.",
      stats: {
        complexity: "Advanced",
        stack: "Python, FastAPI, Redis"
      },
      details: [
        "Dynamic model selection based on task complexity",
        "Cost optimization while maintaining quality targets",
        "Real-time performance tracking and analytics",
        "Automatic failover and load balancing"
      ]
    },
    {
      id: 9,
      title: "CareSelect",
      subtitle: "Epic Activation",
      category: "Enterprise",
      icon: HeartPulse,
      description: "Strategic Epic EHR module activation and optimization. Coordinated implementation of clinical workflows, order sets, and decision support tools. Achieved measurable improvements in clinician efficiency and patient care quality.",
      stats: {
        complexity: "Advanced",
        stack: "Epic, Caché, Mumps"
      },
      details: [
        "Epic module activation and workflow optimization",
        "Custom order sets and clinical decision support",
        "Measurable improvements in clinician efficiency",
        "Enhanced patient care quality metrics"
      ]
    },
    {
      id: 10,
      title: "SOAP Proxy",
      subtitle: "Legacy Translation",
      category: "Enterprise",
      icon: Server,
      description: "Enterprise-grade SOAP to REST translation layer enabling modern applications to communicate with legacy systems. Features intelligent protocol conversion, message transformation, and comprehensive error handling with retry logic.",
      stats: {
        complexity: "Intermediate",
        stack: "Node.js, XML, JSON"
      },
      details: [
        "SOAP to REST protocol translation",
        "Legacy system integration without modification",
        "Intelligent message transformation and validation",
        "Comprehensive error handling and retry logic"
      ]
    },
    {
      id: 11,
      title: "Prompt Taxonomy",
      subtitle: "Strategic Research",
      category: "Strategy",
      icon: Lightbulb,
      description: "Comprehensive classification system for prompt engineering patterns. Analyzes thousands of prompts to identify effective patterns, anti-patterns, and best practices. Provides structured framework for prompt design and evaluation.",
      stats: {
        complexity: "Intermediate",
        stack: "Research, NLP"
      },
      details: [
        "Classification of 1000+ prompt patterns",
        "Identification of effective patterns and anti-patterns",
        "Best practices framework for prompt engineering",
        "Measurable impact on AI response quality"
      ]
    },
    {
      id: 12,
      title: "Well-being Analytics",
      subtitle: "People Strategy",
      category: "Strategy",
      icon: Users,
      description: "Data-driven insights platform for organizational well-being and team health. Analyzes communication patterns, workload distribution, and collaboration metrics to identify burnout risks and optimize team dynamics.",
      stats: {
        complexity: "Intermediate",
        stack: "Python, Analytics, ML"
      },
      details: [
        "Team health and burnout risk detection",
        "Communication and collaboration pattern analysis",
        "Workload distribution optimization",
        "Actionable insights for leadership decisions"
      ]
    }
  ];

  const categories = ['All', 'AI Architecture', 'Enterprise', 'Governance', 'Methodology', 'Strategy'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-mono text-green-500 uppercase tracking-wider">ONLINE</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="gradient-text">Architecting the</span>
            <br />
            <span className="gradient-text">Autonomous Future</span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Engineering systems that think, adapt, and evolve. 
            Building the infrastructure for tomorrow's intelligent enterprises.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">55+</div>
              <div className="text-slate-400 font-mono text-sm">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">34</div>
              <div className="text-slate-400 font-mono text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-slate-400 font-mono text-sm">Enterprise Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">The Ultimate 12</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Flagship projects spanning AI Architecture, Enterprise Solutions, Governance, and Strategy
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-cyan-500 text-white glow-cyan'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
            <span className="text-cyan-400 font-medium">The Aether Methodology</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Engineered for Excellence</span>
          </h2>
          
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Every project follows the Aether 11-state machine methodology - a comprehensive 
            lifecycle approach that ensures quality, governance, and sustainable evolution 
            from conception to continuous optimization.
          </p>
          
          <a
            href="/docs/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 rounded-lg font-semibold transition-all duration-300 glow-cyan"
          >
            Explore the Methodology →
          </a>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Scot LaClair</h3>
              <p className="text-slate-400">Architecting the Autonomous Future</p>
            </div>
            
            <div className="text-center">
              <div className="text-slate-300 mb-1">📍 Newport Beach, CA</div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-green-500">Available</span>
              </div>
            </div>
            
            <div className="text-center md:text-right text-slate-500 text-sm">
              <p>&copy; {new Date().getFullYear()} Scot LaClair</p>
              <p className="font-mono">Enterprise Ready</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <Modal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
