"use client";
import { useRouter } from 'next/navigation'
import { useState } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { IoLogoWhatsapp, IoCheckmarkCircle } from "react-icons/io5";
import Navbar from "@/component/layout/Navbar";
import Footer from "@/component/layout/Footer";
import TopLayout from "@/component/layout/TopLayout";
import Button from "@/component/ui/button/Button";

// ─── Types ────────────────────────────────────────────────
interface ContactChannel {
  label: string;
  value: string;
  href: string;
  isExternal?: boolean;
  icon: React.ReactNode;
}

interface FormState {
  fullname: string;
  email: string;
  subject: string;
  message: string;
}

// ─── Data ─────────────────────────────────────────────────
const CONTACT_CHANNELS: ContactChannel[] = [
  {
    label: "Email",
    value: "hello@verdant.co",
    href: "mailto:hello@verdant.co",
    icon: <MdEmail size={16} className="text-emerald-600" />,
  },
  {
    label: "Phone",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
    icon: <MdPhone size={16} className="text-emerald-600" />,
  },
  {
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/1234567890",
    isExternal: true,
    icon: <IoLogoWhatsapp size={16} className="text-emerald-600" />,
  },
];

function ContactForm() {
  const [form, setForm] = useState<FormState>({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.fullname || !form.email || !form.message) return;
    // TODO: wire up real submission (e.g. fetch("/api/contact", ...))
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
        <IoCheckmarkCircle size={56} className="text-emerald-500" />
        <h4 className="text-xl font-semibold text-gray-900">Message sent!</h4>
        <p className="text-sm text-gray-500 max-w-xs">
          Thanks for reaching out. We&lsquo;ll get back to you as soon as
          possible.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ fullname: "", email: "", subject: "", message: "" });
          }}
          className="mt-2 text-sm text-emerald-600 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-100 transition";

  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="fullname"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullname"
          value={form.fullname}
          onChange={handleChange}
          className={inputClass}
          placeholder="John Doe"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          value={form.subject}
          onChange={handleChange}
          className={inputClass}
          placeholder="How can we help?"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={inputClass}
          placeholder="Write your message here..."
        />
      </div>

<Button
        title=" Send Message"
        className="w-full bg-[var(--background)] hover:bg-green-700 text-white"
        onClick={handleSubmit}
      />
    
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="">
        <TopLayout
          heroTitle="Contact Us"
          subtitle="Home"
          currentTitle="Contact"
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Two-column card layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left — form */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Send us a message
              </h3>
              <p className="text-sm text-gray-500 mb-7">
                Have a question, complaint, or need help? Feel free to reach
                out.
              </p>
              <ContactForm />
            </div>

            {/* Right — details */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <p className="text-sm font-medium text-emerald-600 mb-5 uppercase tracking-wide">
                  Get in touch
                </p>
                <ul className="space-y-5">
                  {CONTACT_CHANNELS.map((ch) => (
                    <li key={ch.label} className="flex items-start gap-4">
                      <div className="h-9 w-9 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                        {ch.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">
                          {ch.label}
                        </p>
                        <a
                          href={ch.href}
                          target={ch.isExternal ? "_blank" : undefined}
                          rel={ch.isExternal ? "noreferrer" : undefined}
                          className="text-sm font-medium text-gray-800 hover:text-emerald-600 transition-colors"
                        >
                          {ch.value}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8">
                <h3 className="text-white font-bold text-base mb-2">
                  Stay Connected
                </h3>
                <p className="text-gray-400 text-sm mb-5">
                  Follow us for updates and news.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
