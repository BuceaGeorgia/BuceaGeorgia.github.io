import type { ReactNode } from "react";
import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";

type Hackathon = {
  title: string;
  dates: string;
  location: string;
  description: string;
  image: string;
  win?: string;
  mlh?: string;
  links: { title: string; icon: ReactNode; href: string }[];
};
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Docker } from "@/components/ui/svgs/docker";

export const DATA = {
  name: "Georgia Bucea - Senior ML Engineer",
  initials: "GB",
  url: "https://buceageorgia.github.io",
  location: "San Francisco",
  locationLink: "https://www.google.com/maps/place/san+francisco",
  description:
    "Senior ML Engineer & CTO. I build production computer vision and multimodal AI at the frontier where perception meets robotics, machines that don't just see, but act",
  // The closing "Three things I believe are true" block is left for you to fill in
  // with your own words — replace the placeholder bullets at the end of `summary`.
  summary:
    "CTO of [Getshorts.app](/#work). We build multimodal AI that turns raw footage into finished, creator-specific videos, cutting production from hours to minutes.\n\n" +
    "**Previously:**\n\n" +
    "- Founded [BRINOS](/#work), a clinical computer-vision deeptech startup scoring autism-therapy sessions from camera feeds. Backed by [EIT Digital](https://www.eit.europa.eu/our-activities/opportunities/eit-digitals-venture-incubation-program) and partnered with three therapy centers across Romania.\n" ,
  avatarUrl: "/picofme.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 3, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 4, enabled: true, heading: "Education" },
    skills: { order: 5, enabled: true, heading: "Skills" },
    projects: {
      order: 2, enabled: true,
      label: "Featured Work",
      heading: "Products I've built",
      text: "A few of the products and systems I've taken from research to production, spanning multimodal AI, computer vision, and clinical ML.",
    },
    hackathons: {
      order: 7, enabled: false,
      label: "Hackathons",
      heading: "I like building things",
      text: "During my time in university, I attended {count}+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.",
    },
    photos: {
      order: 6, enabled: false,
      heading: "My Recent Travels",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "If you're building something at the edge of computer vision, multimodal AI, or robotics, or just want to trade ideas about where this field is going, I'd genuinely love to hear from you. My inbox is always open, and I try to reply to everyone. Drop me a line or find me on LinkedIn and GitHub.",
    },
  },
  photos: [
    { src: "/photos/photo1.jpg", alt: "Photo 1" },
    { src: "/photos/photo2.jpg", alt: "Photo 2" },
    { src: "/photos/photo3.jpg", alt: "Photo 3" },
    { src: "/photos/photo4.jpg", alt: "Photo 4" },
    { src: "/photos/photo5.jpg", alt: "Photo 5" },
    { src: "/photos/photo6.jpg", alt: "Photo 6" },
    { src: "/photos/photo7.jpg", alt: "Photo 7" },
    { src: "/photos/photo8.jpg", alt: "Photo 8" },
    { src: "/photos/photo9.jpg", alt: "Photo 9" },
  ],
  skills: [
    { name: "Python", icon: Python },
    { name: "C++", icon: undefined },
    { name: "TypeScript", icon: Typescript },
    { name: "SQL", icon: undefined },
    { name: "PyTorch", icon: undefined },
    { name: "Computer Vision", icon: undefined },
    { name: "OpenCV", icon: undefined },
    { name: "Multimodal AI", icon: undefined },
    { name: "RAG", icon: undefined },
    { name: "LangChain", icon: undefined },
    { name: "LangGraph", icon: undefined },
    { name: "FAISS", icon: undefined },
    { name: "Pinecone", icon: undefined },
    { name: "Neo4j", icon: undefined },
    { name: "FastAPI", icon: undefined },
    { name: "AWS SageMaker", icon: undefined },
    { name: "Apache Spark", icon: undefined },
    { name: "Docker", icon: Docker },
    { name: "FFmpeg", icon: undefined },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "https://relatablecyborg.substack.com/?utm_campaign=profile_chips", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "georgia.bucea@gmail.com",
    tel: "+40753692087",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/BuceaGeorgia",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bucea-georgia/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:georgia.bucea@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Getshorts.app",
      href: "https://getshorts.app",
      badges: ["CTO"],
      location: "San Francisco",
      title: "CTO & ML Engineer",
      logoUrl: "https://www.google.com/s2/favicons?domain=getshorts.app&sz=128",
      start: "January 2025",
      end: undefined,
      description:
        "Shorts AI is a mobile app for video creators that turns raw clips into creator-specific edited videos. Role: CTO & ML Engineer.",
    },
    {
      company: "BRINOS",
      href: "https://brinos-platform.vercel.app/en-US/landing",
      badges: ["Co-founder"],
      location: "Remote",
      title: "ML Engineer & Co-founder",
      logoUrl: "/brinos-logo.png",
      start: "January 2024",
      end: "January 2025",
      description:
        "BRINOS is a computer vision platform for autism therapy centers that scores therapy sessions from security-camera feeds. Role: CEO & ML Developer.",
    },
    {
      company: "Archetype AI",
      href: "https://www.archetypeai.io",
      badges: [],
      location: "United States",
      title: "ML Engineer",
      logoUrl: "https://www.google.com/s2/favicons?domain=archetypeai.io&sz=128",
      start: "August 2023",
      end: "January 2024",
      description:
        "Archetype AI is a US deeptech startup building physical AI for enterprise workflow integration. Role: ML Engineer & Data Engineer.",
    },
    {
      company: "DotLumen",
      href: "https://dotlumen.com",
      badges: [],
      location: "Cluj-Napoca, Romania",
      title: "ML Engineer",
      logoUrl: "https://www.google.com/s2/favicons?domain=dotlumen.com&sz=128",
      start: "August 2022",
      end: "August 2023",
      description:
        ".lumen builds glasses that empower the blind to live a better life. There are 40 million blind people today, and despite all the technological advancements, the most used mobility solutions are the walking cane and the guide dog. The guide dog is unanimously seen as a good option, but there are only 28,000 guide dogs to 40 million individuals with visual disabilities. dotlumen offers a solution that mimics the benefits of a guide dog without the drawbacks that make it a non-scalable solution. Role: ML Engineer & Data Engineer.",
    },
    {
      company: "Emerson",
      href: "https://www.emerson.com",
      badges: [],
      location: "Cluj-Napoca, Romania",
      title: "Data Engineer",
      logoUrl: "https://www.google.com/s2/favicons?domain=emerson.com&sz=128",
      start: "September 2021",
      end: "August 2022",
      description:
        "Emerson is a global automation and engineering company. Role: Data Engineer & Data Analyst.",
    },
    {
      company: "TVARITA",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Computer Vision Researcher (Intern)",
      logoUrl: "https://avatar.vercel.sh/tvarita?size=40",
      start: "July 2020",
      end: "March 2021",
      description:
        "TVARITA is an outsourcing firm supporting a French optics company building smart glasses. Role: Computer Vision Researcher (Intern).",
    },
  ],
  education: [
    {
      school: "Babeș-Bolyai University",
      href: "https://www.ubbcluj.ro",
      degree: "Master's degree, Computational Physics",
      logoUrl: "https://www.google.com/s2/favicons?domain=ubbcluj.ro&sz=128",
      start: "2022",
      end: "",
    },
    {
      school: "Babeș-Bolyai University",
      href: "https://www.ubbcluj.ro",
      degree: "Bachelor's degree, Computer Science",
      logoUrl: "https://www.google.com/s2/favicons?domain=ubbcluj.ro&sz=128",
      start: "2018",
      end: "2021",
    },
    {
      school: "University of Hradec Králové",
      href: "https://www.uhk.cz",
      degree: "Bachelor's degree, Computer Science (Exchange)",
      logoUrl: "https://www.google.com/s2/favicons?domain=uhk.cz&sz=128",
      start: "2019",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Getshorts.app",
      href: "https://getshorts.app",
      dates: "January 2025 - Present",
      active: true,
      description:
        "A multimodal AI video-editing platform for creators that converts raw clips into fully edited, creator-specific videos, cutting production time from hours to minutes. Python backend orchestrating multimodal models (Gemini, Grok) with style-personalization algorithms.",
      technologies: [
        "Python",
        "Multimodal AI",
        "Gemini",
        "Grok",
        "FFmpeg",
        "FastAPI",
      ],
      links: [
        {
          type: "Website",
          href: "https://getshorts.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/getshorts-preview.png",
      video: "",
    },
    {
      title: "BRINOS",
      href: "https://brinos-platform.vercel.app/en-US/landing",
      dates: "January 2024 - January 2025",
      active: false,
      description:
        "A clinical computer-vision platform that scores autism-therapy sessions from security-camera feeds. Translated ADOS clinical guidelines into measurable ML objectives and trained a CNN–LSTM model for spatiotemporal behavior recognition. Piloted across 3 therapy centers and secured first external investment.",
      technologies: [
        "PyTorch",
        "Computer Vision",
        "CNN–LSTM",
        "AWS SageMaker",
        "OpenCV",
        "Python",
      ],
      links: [
        {
          type: "Website",
          href: "https://brinos-platform.vercel.app/en-US/landing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/brinos-preview.png",
      video: "",
    },
  ],
  hackathons: [] as Hackathon[],
} as const;
