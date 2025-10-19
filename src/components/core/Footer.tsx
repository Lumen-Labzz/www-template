import SiteLogo from "@/components/core/SiteLogo";
import { navLinks, socialLinks } from "@/data";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 bg-primary text-primary-foreground">
      <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <section>
          <div className="flex items-center">
            <SiteLogo />
            <h2 className="text-xl font-bold">WWW-Template</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            WWW-Template provides high-quality templates and creative assets
            designed to help businesses, developers, and creators bring their
            visions to life with ease and style.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Navigation</h2>
          <ul className="space-y-2">
            {navLinks.map((navLink) => (
              <li key={navLink.href}>
                <a
                  href={`#${navLink.href}`}
                  className="flex items-center gap-2 text-sm"
                >
                  <navLink.Icon className="h-4 w-4" />
                  {navLink.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Socials</h2>
          <div className="flex gap-4">
            {socialLinks.map((socialLink) => (
              <a
                key={socialLink.href}
                href={socialLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <socialLink.Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-10 border-t border-border pt-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} WWW-Template. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
