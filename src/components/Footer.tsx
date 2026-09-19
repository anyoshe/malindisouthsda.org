import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@MalindiSouthSDAChurchChoir",
    label: "Malindi South SDA Church Choir",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Adventist.org",
    href: "https://adventist.org",
    label: "Worldwide SDA Church",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    name: "East Kenya Union",
    href: "https://eku.adventist.org",
    label: "East Kenya Union Conference",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/sda-symbol-transparent.png"
                alt="Seventh-day Adventist Church Logo"
                width={52}
                height={52}
              />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-white">Malindi South SDA</span>
                <span className="text-xs text-slate-400">Seventh-day Adventist</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Proclaiming the everlasting gospel and preparing a people for the second
              coming of Jesus Christ.
            </p>
            {/* Social icons */}
            <div className="flex flex-wrap gap-3 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-accent hover:text-primary-dark"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-accent-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/sermons" className="hover:text-accent-light">
                  Sermons
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-accent-light">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/ministries" className="hover:text-accent-light">
                  Ministries
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-white">Worship</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Sabbath School — 9:00 AM</li>
              <li>Divine Service — 11:00 AM</li>
              <li>Afternoon — 2:00 PM</li>
              <li>Prayer Meeting — Wed 6 PM</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-white">Follow & Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.youtube.com/@MalindiSouthSDAChurchChoir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-light"
                >
                  YouTube — Church Choir
                </a>
              </li>
              <li>
                <a
                  href="https://adventist.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-light"
                >
                  Adventist.org
                </a>
              </li>
              <li>
                <a
                  href="https://eku.adventist.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-light"
                >
                  East Kenya Union
                </a>
              </li>
              <li>
                <a
                  href="https://eku.adventist.org/kenya-coast-field/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-light"
                >
                  Kenya Coast Field
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Malindi South Seventh-day Adventist Church. All
            rights reserved.
          </span>
          <span>
            Part of the{" "}
            <a
              href="https://adventist.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-accent-light"
            >
              Worldwide Seventh-day Adventist Church
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
