import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark to-primary py-12 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">About Our Church</h1>
          <p className="text-white/90">A community of believers committed to Jesus Christ and the three angels’ messages.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-primary">Who We Are</h2>
            <p className="mb-4 text-text-muted">Malindi South Seventh-day Adventist Church is a local congregation under the Kenya Coast Field of the East Kenya Union Conference.</p>
            <p className="mb-4 text-text-muted">We exist to proclaim the everlasting gospel of Jesus Christ, to make disciples, and to prepare a people for His soon return.</p>
            <p className="text-text-muted">We worship on the seventh-day Sabbath (Saturday), following the example of Jesus and the clear teaching of Scripture.</p>
          </div>
          <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light p-12 shadow-lg">
            <Image src="/assets/logo.svg" alt="SDA Symbol" width={160} height={160} />
          </div>
        </div>
      </section>
      <section className="bg-bg-alt py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary">Our Mission</h2>
          <p className="mb-8 text-text-muted">Making disciples of Jesus Christ who live as His loving witnesses and proclaim the everlasting gospel of the Three Angels’ Messages.</p>
          <div className="rounded-xl bg-gradient-to-br from-primary to-primary-light px-8 py-10 text-white shadow-lg">
            <blockquote className="mb-3 text-xl italic">“Fear God and give glory to Him, for the hour of His judgment has come…”</blockquote>
            <cite className="text-accent-light not-italic">— Revelation 14:7</cite>
          </div>
        </div>
      </section>
    </>
  );
}
