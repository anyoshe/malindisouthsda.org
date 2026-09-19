import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/assets/sda-symbol-transparent.png" alt="Seventh-day Adventist Church Logo" width={52} height={52} />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-white">Malindi South SDA</span>
                <span className="text-xs text-slate-400">Seventh-day Adventist</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Proclaiming the everlasting gospel and preparing a people for the second coming of Jesus Christ.
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-accent-light">About Us</Link></li>
              <li><Link href="/sermons" className="hover:text-accent-light">Sermons</Link></li>
              <li><Link href="/events" className="hover:text-accent-light">Events</Link></li>
              <li><Link href="/ministries" className="hover:text-accent-light">Ministries</Link></li>
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
            <h4 className="mb-3 font-semibold text-white">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-accent-light">Contact Us</Link></li>
              <li><a href="https://www.youtube.com/@MalindiSouthSDAChurchChoir" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light">YouTube Choir</a></li>
              <li><a href="https://adventist.org" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light">Adventist.org</a></li>
              <li><a href="https://eku.adventist.org" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light">East Kenya Union</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
          <span>© {new Date().getFullYear()} Malindi South Seventh-day Adventist Church. All rights reserved.</span>
          <span>Part of the <a href="https://adventist.org" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent-light">Worldwide Seventh-day Adventist Church</a></span>
        </div>
      </div>
    </footer>
  );
}
