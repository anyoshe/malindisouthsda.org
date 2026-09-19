import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn & Grow",
  description: "Free online courses, Bible studies, and ministry training from the Seventh-day Adventist Church.",
};

const courses = [
  {
    title: "Adventist Learning Community",
    desc: "Free professional development courses for pastors, teachers, and volunteers. Thousands of ministry resources.",
    href: "https://www.adventistlearningcommunity.com/",
  },
  {
    title: "GC Stewardship Courses",
    desc: "Free online courses on stewardship, giving, and partnership in God’s mission.",
    href: "https://learning.stewardship.adventist.org/",
  },
  {
    title: "Bible Studies Online",
    desc: "Discover, Picture of God, Focus on Prophecy, and more free Bible study guides.",
    href: "https://adventist.org/beliefs/bible/study",
  },
  {
    title: "Sabbath School Lessons",
    desc: "Current Adult, Youth, and Children’s Sabbath School quarterly lessons.",
    href: "https://www.sabbath.school/",
  },
  {
    title: "Hope Channel",
    desc: "Sermons, documentaries, and programs that share the Adventist message worldwide.",
    href: "https://www.hopetv.org/",
  },
  {
    title: "Ellen G. White Writings",
    desc: "Search and read the writings of Ellen G. White online.",
    href: "https://egwwritings.org/",
  },
];

export default function LearnPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark to-primary py-12 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">Learn & Grow</h1>
          <p className="text-white/90">
            Free online courses and resources to strengthen your faith and ministry.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-2xl font-bold text-primary">Seventh-day Adventist Training</h2>
            <p className="mx-auto max-w-xl text-text-muted">
              Official and recommended platforms for Bible study, stewardship, and ministry skills.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border-t-4 border-accent bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="mb-2 text-lg font-semibold text-primary">{c.title}</h3>
                <p className="mb-3 text-sm text-text-muted">{c.desc}</p>
                <span className="text-sm font-semibold text-accent-dark">Open resource →</span>
              </a>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-bg-alt p-8 text-center">
            <h3 className="mb-2 text-xl font-semibold text-primary">Local Training</h3>
            <p className="mb-4 text-text-muted">
              Ask your Sabbath School, Personal Ministries, or Youth leaders about local training,
              baptismal classes, and department workshops at Malindi South SDA.
            </p>
            <Link href="/contact" className="font-semibold text-primary hover:text-accent">
              Contact the church →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
