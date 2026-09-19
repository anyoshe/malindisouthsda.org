import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bulletins & Announcements",
  description: "Weekly church bulletins and announcements from Malindi South SDA Church.",
};

export default function BulletinsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark to-primary py-12 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">Bulletins & Announcements</h1>
          <p className="text-white/90">
            Stay informed about worship order, events, and church life.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-8 rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
            <div className="mb-4 text-4xl">📄</div>
            <h2 className="mb-2 text-xl font-semibold text-primary">Weekly Bulletin</h2>
            <p className="mb-4 text-text-muted">
              Sabbath bulletins will be published here as PDFs or online pages. Church communication
              leaders can upload each week’s bulletin for members who could not attend.
            </p>
            <p className="text-sm text-text-muted">
              Coming soon — check back after each Sabbath, or contact the church clerk / communication
              department to receive the bulletin by WhatsApp or email.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-bg-alt p-5">
              <h3 className="mb-2 font-semibold text-primary">What you’ll find</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-text-muted">
                <li>Order of service</li>
                <li>Announcements</li>
                <li>Upcoming events</li>
                <li>Prayer requests</li>
                <li>Offering schedule</li>
              </ul>
            </div>
            <div className="rounded-xl bg-bg-alt p-5">
              <h3 className="mb-2 font-semibold text-primary">Get updates</h3>
              <p className="mb-3 text-sm text-text-muted">
                Follow our YouTube choir channel and contact the church to join announcement groups.
              </p>
              <Link href="/contact" className="text-sm font-semibold text-primary hover:text-accent">
                Contact us →
              </Link>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/events" className="inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-light">
              View Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
