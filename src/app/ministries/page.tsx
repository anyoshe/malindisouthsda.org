import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Ministries" };

const items = [
  { icon: "📖", title: "Sabbath School" },
  { icon: "🎤", title: "Church Choir" },
  { icon: "⛺", title: "Pathfinders" },
  { icon: "🌟", title: "Adventist Youth (AYS)" },
  { icon: "👩", title: "Women’s Ministries" },
  { icon: "👨", title: "Men’s Ministries" },
  { icon: "🧒", title: "Children’s Ministries" },
  { icon: "💚", title: "Health Ministries" },
  { icon: "🤝", title: "Community Services" },
  { icon: "📢", title: "Personal Ministries" },
  { icon: "💰", title: "Stewardship" },
  { icon: "🙏", title: "Prayer Ministries" },
];

export default function MinistriesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark to-primary py-12 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">Our Ministries</h1>
          <p className="text-white/90">Every member has a place to grow and to serve.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((m) => (
            <div key={m.title} className="rounded-xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-3 text-4xl">{m.icon}</div>
              <h3 className="text-lg font-semibold text-primary">{m.title}</h3>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/contact" className="inline-flex rounded-full bg-accent px-6 py-3 font-semibold text-primary-dark hover:bg-accent-light">
            Contact the Church
          </Link>
        </div>
      </section>
    </>
  );
}
