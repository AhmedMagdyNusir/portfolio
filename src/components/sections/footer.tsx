import { author, socialLinks } from "@/lib/constants";

export default function Footer({ className = "" }: { className?: string }) {
  return (
    <footer className={`${className}`}>
      <div className="container flex flex-col flex-wrap items-center justify-between gap-4 py-8 sm:flex-row">
        <div className="text-sm text-gray-100 sm:text-base">
          Copyright © {new Date().getFullYear()} {author.name}
        </div>

        <div className="flex justify-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              title={social.name}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-center h-9 w-9 rounded-lg border border-gray-800 bg-gray-900 text-gray-300 transition-colors hover:bg-gray-800 hover:text-gray-200"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
