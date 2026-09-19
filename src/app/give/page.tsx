import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tithe & Offerings",
  description: "Return tithe and give offerings to Malindi South SDA Church. Support the mission of the Seventh-day Adventist Church.",
};

export default function GivePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark to-primary py-12 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">Tithe & Offerings</h1>
          <p className="text-white/90">
            “Bring ye all the tithes into the storehouse…” — Malachi 3:10
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-10 rounded-xl border-l-4 border-accent bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-primary">Why We Give</h2>
            <p className="text-text-muted">
              Tithe (10% of income) belongs to God and supports pastors, evangelism, and the worldwide
              work of the church. Offerings express gratitude and fund local ministries, outreach,
              and community care. Giving is an act of worship.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-primary">At Church</h3>
              <p className="mb-3 text-sm text-text-muted">
                Use the tithe envelope during Sabbath services. Indicate tithe, local church
                offerings, and any special projects.
              </p>
              <p className="text-sm font-medium text-accent-dark">Every Sabbath</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-primary">Mobile / M-Pesa</h3>
              <p className="mb-3 text-sm text-text-muted">
                Many Kenyan Adventist churches accept M-Pesa. Please contact the church treasurer
                for the official Paybill / Till number for Malindi South SDA so funds go to the
                correct church account.
              </p>
              <Link href="/contact" className="text-sm font-semibold text-primary hover:text-accent">
                Contact treasurer →
              </Link>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-bg-alt p-6">
            <h3 className="mb-3 text-lg font-semibold text-primary">Official Online Platforms</h3>
            <ul className="space-y-3 text-sm text-text-muted">
              <li>
                <a href="https://adventistgiving.org" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-accent">
                  AdventistGiving.org
                </a>
                {" "}— Official Adventist online giving (search for your local church when available).
              </li>
              <li>
                <a href="https://advent.giving" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-accent">
                  Advent.Giving
                </a>
                {" "}— Tithe & offerings system used by many African Adventist churches, with M-Pesa support.
              </li>
              <li>
                <a href="https://stewardship.adventist.org" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-accent">
                  Stewardship Ministries
                </a>
                {" "}— Teaching and resources on faithful giving.
              </li>
            </ul>
            <p className="mt-4 text-xs text-text-muted">
              Always confirm any Paybill, bank account, or app with the church treasurer or pastor.
              Never send tithe to a personal account.
            </p>
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact" className="inline-flex rounded-full bg-accent px-6 py-3 font-semibold text-primary-dark hover:bg-accent-light">
              Contact Church for Giving Details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
