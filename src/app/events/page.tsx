import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Events & Announcements" };

export default function EventsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark to-primary py-12 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">Events & Announcements</h1>
          <p className="text-white/90">Stay connected with the life of the church.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-3xl space-y-4 px-4">
          {[
            { day: "Every", month: "Sabbath", title: "Sabbath Worship", desc: "Sabbath School 9:00 AM • Divine Service 11:00 AM • Afternoon 2:00 PM" },
            { day: "Wed", month: "Weekly", title: "Midweek Prayer Meeting", desc: "Prayer, testimony, and study of the Word • 6:00 PM" },
          ].map((e) => (
            <div key={e.title} className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">
              <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-primary text-white">
                <span className="text-lg font-bold">{e.day}</span>
                <span className="text-xs uppercase">{e.month}</span>
              </div>
              <div>
                <h3 className="font-semibold text-primary">{e.title}</h3>
                <p className="text-sm text-text-muted">{e.desc}</p>
              </div>
            </div>
          ))}
          <div className="pt-6 text-center">
            <Link href="/contact" className="inline-flex rounded-full bg-accent px-6 py-3 font-semibold text-primary-dark hover:bg-accent-light">
              Submit an Announcement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
