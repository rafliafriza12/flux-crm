import Link from "next/link";
import { cn } from "@/lib/utils";
import { APP_CONFIG } from "@/config/app.config";

export interface FooterProps {
  className?: string;
}

const footerLinks = {
  product: [
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Documentation", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

const socialLinks = [
  { icon: "ri-github-fill", href: "https://github.com", label: "GitHub" },
  { icon: "ri-twitter-x-fill", href: "https://twitter.com", label: "Twitter" },
  { icon: "ri-linkedin-fill", href: "https://linkedin.com", label: "LinkedIn" },
];

function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("border-t border-brand/30 bg-deep", className)}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <i className="ri-code-s-slash-line text-2xl text-primary" />
              <span className="text-lg font-bold text-secound font-heading">
                {APP_CONFIG.NAME}
              </span>
            </div>
            <p className="text-sm text-secound/70">{APP_CONFIG.DESCRIPTION}</p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secound/50 hover:text-foreground transition"
                  aria-label={link.label}
                >
                  <i className={cn(link.icon, "text-xl")} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-secound font-heading">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-secound/70 hover:text-secound transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-secound font-heading">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-secound/70 hover:text-secound transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-secound font-heading">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-secound/70 hover:text-secound transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-secound/30 pt-8">
          <p className="text-center text-sm text-secound/60">
            © {new Date().getFullYear()} {APP_CONFIG.NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
