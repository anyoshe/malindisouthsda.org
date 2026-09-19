import type { Metadata } from "next";

export const metadata: Metadata = { title: "Sermons & Preaching" };

export default function SermonsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark to-primary py-12 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">Sermons & Preaching</h1>
          <p className="text-white/90">Be strengthened by the Word of God.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <div className="mb-8 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-2 text-xl font-semibold text-primary">SABATO — Malindi South SDA Church Choir</h2>
            <p className="mb-4 text-text-muted">Beautiful Sabbath song from our choir.</p>
            <a href="https://www.youtube.com/watch?v=1Jqhbp5BRQ4" target="_blank" rel="noopener noreferrer"
              className="inline-flex rounded-full bg-accent px-6 py-3 font-semibold text-primary-dark hover:bg-accent-light">
              Watch on YouTube
            </a>
          </div>
          <p className="text-text-muted">More sermons coming soon. Visit our choir channel for more music.</p>
          <a href="https://www.youtube.com/@MalindiSouthSDAChurchChoir" target="_blank" rel="noopener noreferrer"
            className="mt-4 inline-block font-semibold text-primary hover:text-accent">
            YouTube Channel →
          </a>
        </div>
      </section>
    </>
  );
}
