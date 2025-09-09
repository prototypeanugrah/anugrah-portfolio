import { Experience, Project, Education, SocialLink } from '@/types'
import { getAssetPath } from './assets'

export const personalInfo = {
  name: 'Anugrah Vaishnav',
  title: 'ML Engineer & Data Scientist',
  description: 'Data science enthusiast building real-world AI application solutions. Experienced in computer vision, NLP, and biomedical data analysis. Currently seeking opportunities for an ML Engineer or Data Scientist.',
  email: 'vaishnav.anugrah123@gmail.com',
  location: 'Lowell, MA',
  phone: '(978)-569-6430'
}

export const socialLinks: SocialLink[] = [
  {
    platform: 'email',
    url: 'mailto:vaishnav.anugrah123@gmail.com',
    icon: 'fas fa-envelope',
    label: 'Email'
  },
  {
    platform: 'linkedin',
    url: 'https://linkedin.com/in/anvaishnav',
    icon: 'fab fa-linkedin',
    label: 'LinkedIn'
  },
  {
    platform: 'github',
    url: 'https://github.com/prototypeanugrah',
    icon: 'fab fa-github',
    label: 'GitHub'
  },
  {
    platform: 'twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'fab fa-twitter',
    label: 'Twitter'
  }
]

export const education: Education[] = [
  {
    id: 'ms-cs',
    degree: 'Master of Science in Computer Science',
    institution: 'University of Massachusetts Lowell (GPA - 3.85/4)',
    duration: 'Sep 2023 - May 2025',
    description: 'Relevant courses: Machine Learning, Natural Language Processing, Computer Vision, Data Science in Healthcare, and Deep Learning and Large Language Models',
    imageUrl: getAssetPath('/images/education/uml.svg'),
    imagePlaceholder: {
      icon: 'fas fa-file-alt',
      text: 'University of Massachusetts Lowell'
    }
  },
  {
    id: 'be-electronics',
    degree: 'Bachelor of Engineering in Electronics',
    institution: 'Ramaiah Institute of Technology, India (GPA - 8.3/10)',
    duration: 'Sep 2017 - May 2021',
    description: 'Strong foundation in mathematics, electronics, and computer science principles',
    imageUrl: getAssetPath('/images/education/ramaiah.png'),
    imagePlaceholder: {
      icon: 'fas fa-graduation-cap',
      text: 'Ramaiah Institute of Technology'
    }
  }
]

export const workExperience: Experience[] = [
  {
    id: 'financial-analyst',
    title: 'Financial Data Analyst',
    company: 'University of Massachusetts Lowell',
    duration: 'Mar 2025 - May 2025',
    keywords: ['Topic Modeling', 'NLP', 'Financial Analysis'],
    description: ["Curated dataset of 40000 S1 IPO reports from SEC's Edgar Archives and implemented **Latent Dirichlet Allocation (LDA)** and **TF-IDF vectorizer** for financial text analysis to identify key topics from IPO financial reports"],
    type: 'work',
    imageUrl: getAssetPath('/images/work-ex/uml.svg'),
    imagePlaceholder: {
      icon: 'fas fa-file-alt',
      text: 'University of Massachusetts Lowell'
    }
  },
  {
    id: 'portcast-analyst',
    title: 'Data Analyst',
    company: 'Portcast',
    duration: 'Aug 2022 - May 2023',
    keywords: ['Time Series Forecasting', 'SQL', 'Tableau'],
    description: ["Contributed to **Port Arrival Forecasting** by integrating real-time maritime data (AIS). Automated report generation workflows, saved 10+ hours of manual QA weekly, and built **Tableau dashboards** to monitor port delays and vessel performance"],
    type: 'work',
    imageUrl: getAssetPath('/images/work-ex/portcast.svg'),
    imagePlaceholder: {
      icon: 'fas fa-ship',
      text: 'Portcast'
    }
  },
  {
    id: 'eai-analyst',
    title: 'Data Analyst',
    company: 'Equipped Analytical Intelligence',
    duration: 'Nov 2021 - Aug 2022',
    keywords: ['Cash Flow Forecasting', 'Shiny-R', 'Data Visualization'],
    description: ["Worked on **predictive modeling** for **cash flow forecasting** for alternative investors. Migrated visualization codebase to modern tech stack in **Shiny-R**. Increased reporting efficiency by 30%, saved 10+ hours of manual QA monthly"],
    type: 'work',
    imageUrl: getAssetPath('/images/work-ex/eai.svg'),
    imagePlaceholder: {
      icon: 'fas fa-chart-line',
      text: 'Equipped Analytical Intelligence'
    }
  }
]

export const researchExperience: Experience[] = [
  {
    id: 'colonoscopy-3d',
    title: 'Enhanced 3D Reconstruction in Colonoscopy',
    company: 'University of Massachusetts Lowell',
    advisor: 'Dr. Yu Cao - Biomedical Computation and Visualization Lab',
    duration: 'Masters Thesis',
    keywords: ['Computer Vision', '3D Reconstruction', 'PyTorch'],
    description: ["Fine-tuned **DepthAnything V2** on SimCol3D synthetic colonoscopy RGB-D dataset for **monocular depth estimation** and **3D reconstruction**. Surpassed prior SOTA by **10–15%** on L1 and RMSE metrics for **depth estimation**"],
    type: 'research',
    imageUrl: getAssetPath('/images/research/colonoscopy.png'),
    imagePlaceholder: {
      icon: 'fas fa-cube',
      text: '3D Reconstruction Visualization'
    },
    thesisLink: 'https://drive.google.com/file/d/1P43P9O8mY0V5j4Jo6YtmFdcOCAa2xf6n/view?usp=sharing'
  },
  {
    id: 'covid-antidepressants',
    title: 'Effect of Antidepressants on COVID-19 Trajectory',
    company: 'University of Massachusetts Lowell',
    advisor: 'Dr. Rachel Melamed - Computational Disease Biology Lab',
    duration: 'Research Project',
    keywords: ['Biomedical Informatics', 'PyTorch', 'Graph Neural Networks'],
    description: ["Led research study to investigate **causal relationships** between antidepressant use and COVID-19 outcomes using Electronic Health Records (EHR). Implemented **causal ML models**: S/T learners, TARNet, **GNN and VAE** in PyTorch."],
    type: 'research',
    imageUrl: getAssetPath('/images/research/TARNet.png'),
    imagePlaceholder: {
      icon: 'fas fa-virus',
      text: 'COVID-19 Research Analysis'
    }
  }
]

export const projects: Project[] = [
  {
    id: 'intellitrek',
    title: 'IntelliTrek: A Conversational AI for Smart Trail Discovery',
    type: 'AI Agent Project',
    duration: 'Recent',
    keywords: ['Multi-Agents System', 'LangGraph', 'LangChain'],
    description: ["Developed a **multi-agent AI chatbot** for **personalized trail recommendations** by orchestrating location analysis, trail search, and real-time weather evaluation agents. Used **LangGraph** for agentic workflow and context understanding using **LLM APIs**"],
    links: [
      { type: 'github', url: 'https://github.com/prototypeanugrah/IntelliTrek', label: 'View on GitHub' }
    ],
    imageUrl: getAssetPath('/images/projects/intellitrek.png'),
    imagePlaceholder: {
      icon: 'fas fa-route',
      text: 'Trail Discovery AI System'
    }
  },
  // {
  //   id: 'docusage-ai',
  //   title: 'DocuSage AI - Advanced RAG Document Analysis Agent',
  //   type: 'AI Agent Project',
  //   duration: 'Recent',
  //   keywords: ['AI Agents', 'RAG', 'LangChain'],
  //   description: ["Built IntelliPDF AI agent, a PDF intelligence platform that enables advanced document search, summarization, and Q&A using **LLM APIs**"],
  //   links: [
  //     { type: 'github', url: 'https://github.com/prototypeanugrah/DocuSage-AI', label: 'View on GitHub' }
  //   ],
  //   imagePlaceholder: {
  //     icon: 'fas fa-file-text',
  //     text: 'Document AI Analysis'
  //   }
  // },
  {
    id: 'medical-rag-chatbot',
    title: 'Pharmacology Chatbot',
    type: 'Medical AI Project',
    duration: 'Recent',
    keywords: ['AI Agents', 'RAG', 'LangChain'],
    description: ["Built a pharmacology chatbot that enables advanced document search, summarization, and Q&A using **OpenAI**. Used  **Agentic RAG with Knowledge Graph** to enable the chatbot to answer questions about the pharmacology of the drugs."],
    links: [
      { type: 'github', url: 'https://github.com/prototypeanugrah/medical-rag-agent', label: 'View on GitHub' }
    ],
    imageUrl: getAssetPath('/images/projects/medical-rag.svg'),
    imagePlaceholder: {
      icon: 'fas fa-file-text',
      text: 'Pharmacology Chatbot'
    }
  },
  {
    id: 'image-captioning',
    title: 'Human-Centric Evaluation of CoT-Based Image Captioning',
    type: 'Research Project',
    duration: 'Research',
    keywords: ['Image Captioning', 'Human Survey', 'LLaVA'],
    description: ["Conducted analysis of image captioning models applying chain-of-thought (CoT) conditioning to captions generated by the LLaVA model on the VisualGenome dataset. Conducted human surveys to evaluate caption quality and compared results against LLM-as-judge."],
    links: [
      { type: 'github', url: 'https://github.com/prototypeanugrah/Elevating-Image-Captioning-via-Chain-of-Thought-Conditioning', label: 'View on GitHub' }
    ],
    imageUrl: getAssetPath('/images/projects/image-captioning.png'),
    imagePlaceholder: {
      icon: 'fas fa-image',
      text: 'Image Captioning Analysis'
    }
  },
  {
    id: 'correlated-topic-models',
    title: 'Correlated Topic Models',
    type: 'Open Source',
    duration: 'Open Source',
    keywords: ['NLP', 'Open Source Software', 'Topic Modeling'],
    description: ["Developed the first **open-source PyTorch implementation** of correlated topic models using **Automatic Differentiation Variational Inference**"],
    links: [
      { type: 'pypi', url: 'https://pypi.org/project/ctm-pytorch-advi/', label: 'View on PyPI' },
      { type: 'github', url: 'https://github.com/prototypeanugrah/Correlated-Topic-Models-ADVI', label: 'View on GitHub' }
    ],
    imageUrl: getAssetPath('/images/projects/ctm.jpg'),
    imagePlaceholder: {
      icon: 'fas fa-sitemap',
      text: 'Topic Modeling Visualization'
    }
  },
  {
    id: 'machine-unlearning',
    title: 'Machine Unlearning for Multimodal LLMs',
    type: 'Research Project',
    duration: 'Research',
    keywords: ['Machine Unlearning', 'LoRA', 'DeepSpeed'],
    description: ["Implemented **machine unlearning framework** to selectively \'forget\' data in **LLaVA multimodal LLM**. Fine-tuned LLaVA using **LoRA adapters** with **DeepSpeed** for distributed computing. Evaluated using ROUGE and LLM-as-judge metrics."],
    links: [
      { type: 'github', url: 'https://github.com/prototypeanugrah/Machine-Unlearning-for-Multimodal-LLMs', label: 'View on GitHub' }
    ],
    imageUrl: getAssetPath('/images/projects/unlearning.png'),
    imagePlaceholder: {
      icon: 'fas fa-brain',
      text: 'Machine Unlearning Diagram'
    }
  },
  {
    id: 'chest-xray',
    title: 'Chest X-ray Report Generation',
    type: 'Medical AI Project',
    duration: 'Research',
    keywords: ['Retrieval Modeling', 'CLIP', 'Medical AI'],
    description: [
      "Created a **retrieval-based system** for generating clinical X-ray reports using a **fine-tuned CLIP model**. Retrieved semantically aligned sentences from **MIMIC-CXR** medical corpora for accurate reporting."
    ],
    imageUrl: getAssetPath('/images/projects/cxr-repair.jpg'),
    imagePlaceholder: {
      icon: 'fas fa-x-ray',
      text: 'Chest X-ray Analysis'
    }
  }
]