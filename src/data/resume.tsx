import { Icons } from "@/components/icons";
import { ResumeCard } from "@/components/resume-card";
import { ResumeIcon } from "@radix-ui/react-icons";
import { CodeIcon, HomeIcon, NotebookIcon } from "lucide-react";
import { Document } from "postcss";

export const DATA = {
  name: "Izzat Karimov",
  initials: "IK",
  url: "https://izzat-karimov.vercel.app",
  location: "Warsaw, Poland",
  locationLink: "https://www.google.com/maps/place/warsaw",
  description:
    "Software Engineer & Computer Engineering Student",
  summary:
    "I am currently pursuing a fellowship at [Headstarter AI](https://headstarter.co), where I am busy with building AI projects, receiving coaching from FAANG engineers, and building my final project with my team with the goal of getting 1000 users on the on the waitlist.",
  resume: "Download My [Resume](https://www.linkedin.com/in/izzat-karimov/)",
  avatarUrl: "/izzat-karimov.jpeg",
  skills: [
    "Python",
    "Java",
    "JavaScript",
    "Django",
    "Spring Boot",
    "React",
    "Next.js",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "AWS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "izzatcodes@gmail.com",
    tel: "+48 578 217 483",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/izzatkarimov",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/izzat-karimov/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/notifications",
        icon: Icons.x,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "https://www.gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Headstarer AI",
      href: "https://headstarter.co",
      badges: [],
      location: "Remote",
      title: "Software Engineering Fellow",
      logoUrl: "/headstarter.jpg",
      start: "July 2024",
      end: "Sep 2024",
      description:
        "Built 5+ AI apps using NextJS, OpenAI, Pinecone, StripeAPI with 98 percent accuracy as seen by 1000 users. \- Developer projects from design to deployment leading 4+ engineering fellows using MVC design patterns. Coached by Amazon, Bloomberg, and Capital One engineers on Agile, CI/CD, Git, and microservice patterns",
    },
    {
      company: "Upwork",
      href: "https://upwork.com",
      badges: [],
      location: "Remote",
      title: "Freelance Backend Engineer",
      logoUrl: "/upwork.svg",
      start: "Jan 2024",
      end: "Present",
      description:
        "Developed 10+ backend applications using Django, Spring Boot, and NodeJS. Worked with 20+ clients to deliver high-quality software solutions. Managed 5+ projects from design to deployment.",
    },
  ],
  education: [
    {
      school: "Vistula University",
      href: "https://vistula.edu.pl",
      degree: "Bachelor's Degree in Computer Engineering",
      logoUrl: "/Vistula.jpg",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "E-Commerce Platform",
      href: "https://github.com/izzatkarimov",
      dates: "Dec 2023 - Dec 2023",
      active: true,
      description:
        "An e-commerce platform that allows users to log in, log out, add items to the cart, and purchase items using Paypal.",
      technologies: [
        "Python",
        "Django",
        "PayPal API",
        "Bootstrap",
        "CSS",
        "HTML",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/izzatkarimov",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Dockerized Django App",
      href: "https://github.com/izzatkarimov",
      dates: "June 2024 - Feb 2024",
      active: true,
      description:
        "Dockerized Django App with User Authentication, CRUD Operations, and REST API.",
      technologies: [
        "Python",
        "Django",
        "Django REST Framework",
        "Docker",
        "PostgreSQL",
        "Bootstrap",
        "CSS",
        "HTML",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/izzatkarimov",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/izzatkarimov",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;

