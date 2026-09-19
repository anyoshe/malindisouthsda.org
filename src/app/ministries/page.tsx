import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Ministries" };

const ministries = [
  {
    title: "Sabbath School",
    desc: "Bible study for all ages. Children, youth, and adult classes that deepen understanding of Scripture and fellowship.",
    icon: "📖",
  },
  {
    title: "Church Choir",
    desc: "Leading worship through song. The Malindi South SDA Church Choir shares beautiful music on Sabbath and special occasions.",
    icon: "🎤",
  },
  {
    title: "Pathfinders",
    desc: "A worldwide Adventist youth organization that builds character, skills, and love for God and nature through activities and camping.",
    logo: "/assets/pathfinder-logo.jpg",
  },
  {
    title: "Adventist Youth (AY)",
    desc: "Youth programs that inspire young people to live for Jesus, develop leadership, and share their faith with boldness.",
    logo: "/assets/ay-logo.jpg",
  },
  {
    title: "Adventurer Club",
    desc: "Fun, faith-based activities for children ages 4–9 that teach love for Jesus, nature, and service.",
    logo: "/assets/adventurer-logo.jpg",
  },
  {
    title: "Women’s Ministries",
    desc: "Encouraging and equipping women for service, spiritual growth, and mutual support in the home, church, and community.",
    icon: "👩",
  },
  {
    title: "Men’s Ministries",
    desc: "Building godly men who lead their families and serve the church with integrity, prayer, and purpose.",
    icon: "👨",
  },
  {
    title: "Children’s Ministries",
    desc: "Nurturing the youngest members through Sabbath School, Vacation Bible School, and age-appropriate programs.",
    icon: "🧒",
  },
  {
    title: "Health Ministries",
    desc: "Promoting the Adventist health message — lifestyle, temperance, and caring for the body as the temple of the Holy Spirit.",
    icon: "💚",
  },
  {
    title: "Community Services",
    desc: "Reaching out in practical love: food, clothing, visitation, and support for those in need around us.",
    icon: "🤝",
  },
  {
    title: "Personal Ministries",
    desc: "Equipping members for soul-winning, Bible studies, literature distribution, and public evangelism.",
    icon: "📢",
  },
  {
    title: "Prayer Ministries",
    desc: "Intercessory prayer groups and prayer meetings that undergird every other ministry of the church.",
    icon: "🙏",
  },
];

export default function MinistriesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark to-primary py-12 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">Our Ministries</h1>
          <p className="text-white/90">
            Every member has a place to grow and to serve. Discover where you can plug in.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ministries.map((m) => (
              <div
                key={m.title}
                className="rounded-xl border border-transparent bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-md"
              >
                {m.logo ? (
                  <div className="mb-4 flex h-20 items-center justify-center">
                    <Image
                      src={m.logo}
                      alt={`${m.title} logo`}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="mb-3 text-4xl">{m.icon}</div>
                )}
                <h3 className="mb-2 text-lg font-semibold text-primary">{m.title}</h3>
                <p className="text-sm text-text-muted">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-alt py-16 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="mb-3 text-3xl font-bold text-primary">Ready to Serve?</h2>
          <p className="mb-6 text-text-muted">
            Talk to any of the department leaders or the church elders. There is a place for
            your gifts in the body of Christ.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-accent px-6 py-3 font-semibold text-primary-dark transition hover:bg-accent-light"
          >
            Contact the Church
          </Link>
        </div>
      </section>
    </>
  );
}
