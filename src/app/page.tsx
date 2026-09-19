import Link from "next/link";

const services = [
  { icon: "📖", title: "Sabbath School", time: "9:00 AM", desc: "Bible study classes for all ages" },
  { icon: "🙏", title: "Divine Service", time: "11:00 AM", desc: "Worship & preaching of the Word" },
  { icon: "💬", title: "Afternoon Program", time: "2:00 PM", desc: "Bible study, AYS & fellowship" },
  { icon: "🌅", title: "Midweek Prayer", time: "Wed 6:00 PM", desc: "Prayer meeting & midweek worship" },
];

const features = [
  { title: "📺 Sermons & Preaching", desc: "Watch or listen to recent messages from the pulpit.", href: "/sermons", linkText: "Browse sermons →" },
  { title: "📅 Upcoming Events", desc: "Stay informed about camp meetings, crusades, and special Sabbaths.", href: "/events", linkText: "View events →" },
  { title: "🤝 Our Ministries", desc: "From Pathfinders and Youth to Choir — find your place to serve.", href: "/ministries", linkText: "Explore ministries →" },
  { title: "ℹ️ About Our Church", desc: "Learn about our mission, beliefs, and the worldwide SDA family.", href: "/about", linkText: "Learn more →" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light py-16 text-white md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,162,39,0.15),transparent_50%)]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <span className="mb-4 inline-block rounded-full border border-accent/40 bg-accent/20 px-4 py-1 text-sm font-semibold tracking-wide text-accent-light">
            Kenya Coast Field • East Kenya Union
          </span>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Welcome to <span className="text-accent-light">Malindi South</span><br />SDA Church
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg text-white/90">
            A loving community of faith where we worship the Creator, study His Word, and prepare for the soon return of Jesus Christ.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/sermons" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-primary-dark transition hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-lg">
              Watch Sermons
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 px-6 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10">
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold text-primary">Join Us This Sabbath</h2>
            <p className="mx-auto max-w-lg text-text-muted">Come and experience the joy of worship, fellowship, and the study of God’s Word.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-md">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light text-2xl text-white">{s.icon}</div>
                <h3 className="mb-1 text-lg font-semibold text-primary">{s.title}</h3>
                <p className="mb-1 text-xl font-bold text-accent-dark">{s.time}</p>
                <p className="text-sm text-text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-alt py-12">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-xl bg-gradient-to-br from-primary to-primary-light px-8 py-10 text-center text-white shadow-lg">
            <blockquote className="mb-3 text-xl italic leading-relaxed md:text-2xl">
              “And this gospel of the kingdom shall be preached in all the world for a witness unto all nations; and then shall the end come.”
            </blockquote>
            <cite className="text-accent-light not-italic">— Matthew 24:14 (KJV)</cite>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold text-primary">Grow With Us</h2>
            <p className="mx-auto max-w-lg text-text-muted">Resources and ministries to help you walk closer with Jesus.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border-t-4 border-accent bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <h3 className="mb-2 text-xl font-semibold text-primary">{f.title}</h3>
                <p className="mb-4 text-text-muted">{f.desc}</p>
                <Link href={f.href} className="font-semibold text-primary hover:text-accent">{f.linkText}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="mb-3 text-3xl font-bold text-primary">We Would Love to Meet You</h2>
          <p className="mb-6 text-text-muted">Whether you are new to the area, searching for truth, or looking for a spiritual home — you are welcome here.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-primary-dark transition hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
