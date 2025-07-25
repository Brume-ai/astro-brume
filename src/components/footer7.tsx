import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Logo } from "./Logo";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Plateforme",
    links: [
      { name: "Tarifs", href: "/pricing" },
      { name: "Structures", href: "#" },
      { name: "Agents", href: "#" },
    ],
  },
  {
    title: "Cas d'usage",
    links: [
      { name: "E-Commerce", href: "#" },
      { name: "Glossaires", href: "#" },
      { name: "Pages locales", href: "#" },
      { name: "Articles d'actualités", href: "#" },
    ],
  },
  {
    title: "A propos",
    links: [
      { name: "Mentions légales", href: "/mentions-legales" },
      { name: "Conditions Générales", href: "/conditions-generales-de-service" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const Footer7 = ({
  sections = defaultSections,
  description = "Laissez l'IA rédiger pour vous des contenus parfaitement humains, originaux, optimisés pour le SEO, et qui respectent toujours le ton de votre marque.",
  socialLinks = defaultSocialLinks,
}: Footer7Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <a href="/">
                <Logo />
              </a>
            </div>
            <p className="text-muted-foreground max-w-[70%] text-sm">
              {description}
            </p>
            <ul className="text-muted-foreground flex items-center space-x-6">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="hover:text-primary font-medium">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-3 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Footer7 };
