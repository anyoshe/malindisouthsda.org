"use client";
import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => { setStatus("sent"); (e.target as HTMLFormElement).reset(); setTimeout(() => setStatus("idle"), 4000); }, 800);
  }

  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark to-primary py-12 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">Contact Us</h1>
          <p className="text-white/90">We would love to hear from you.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-xl font-semibold text-primary">Church Information</h3>
            <div className="space-y-4 text-text-muted">
              <p><strong className="text-primary">Location:</strong><br />Malindi South SDA Church<br />Kenya Coast Field, Kenya</p>
              <p><strong className="text-primary">Sabbath Schedule:</strong><br />Sabbath School — 9:00 AM<br />Divine Service — 11:00 AM<br />Afternoon — 2:00 PM</p>
              <p><strong className="text-primary">Midweek Prayer:</strong><br />Wednesday — 6:00 PM</p>
              <p><strong className="text-primary">YouTube:</strong><br />
                <a href="https://www.youtube.com/@MalindiSouthSDAChurchChoir" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">
                  Malindi South SDA Church Choir
                </a>
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md sm:p-8">
            <h3 className="mb-5 text-xl font-semibold text-primary">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="name" required placeholder="Your Name" className="w-full rounded-lg border border-slate-300 bg-bg px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              <input name="email" type="email" required placeholder="Email Address" className="w-full rounded-lg border border-slate-300 bg-bg px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              <textarea name="message" required rows={4} placeholder="Your message..." className="w-full rounded-lg border border-slate-300 bg-bg px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              <button type="submit" disabled={status === "sending"} className="w-full rounded-full bg-accent py-3 font-semibold text-primary-dark hover:bg-accent-light disabled:opacity-60">
                {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent! ✓" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
