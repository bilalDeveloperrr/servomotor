import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { services } from "../../data/services";

function ContactForm({ defaultService = "", className = "" }) {
  const initialForm = { name: "", email: "", phone: "", company: "", service: defaultService, message: "" };
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <div className={`rounded-2xl border border-slate-200 bg-surface p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-8 ${className}`}>
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex items-center gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
        >
          <CheckCircle2 className="h-5 w-5 shrink-0" />
          Thank you. Your request has been received — our engineering team will contact you shortly.
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy-900">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Anderson"
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy-900">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 (800) 555-0100"
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy-900">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-navy-900">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Your Company Ltd."
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-navy-900">
            Service Required
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Emergency Breakdown">Emergency Breakdown (Urgent)</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy-900">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Describe the equipment and issue you're facing..."
            className="w-full resize-none rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
          />
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(11,95,255,0.55)] transition-colors hover:bg-primary-700 sm:w-auto"
          >
            Submit Inquiry
            <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
