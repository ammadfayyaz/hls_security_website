import { motion } from "framer-motion";
import {
  Shield, Bell, Monitor, Camera, Zap, Flame, DoorOpen, Home as HomeIcon,
  Cpu, Wrench, Check, Calendar, ArrowRight, Star, ChevronDown,
  Building2, Factory, ShoppingBag, Warehouse, Banknote, GraduationCap,
  HeartPulse, Radio, HardHat, Crown, Phone,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import {
  primaryServices, secondaryServices, trustIndicators, whyChooseHLS,
  howItWorks, industries, testimonials, faqs,
} from "@/lib/data";
import SEO from "@/components/SEO";

/**
 * HLS Security — Homepage
 * Sentinel Noir Design System: Dark, premium, lead-generation focused
 */

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  bell: Bell, monitor: Monitor, shield: Shield, camera: Camera, zap: Zap,
  flame: Flame, gate: DoorOpen, home: HomeIcon, cpu: Cpu, wrench: Wrench, check: Check,
};

const industryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Residential": HomeIcon, "Corporate Offices": Building2, "Banks": Banknote,
  "Retail": ShoppingBag, "Factories": Factory, "Warehouses": Warehouse,
  "Educational Institutions": GraduationCap, "Healthcare": HeartPulse,
  "Telecommunication Infrastructure": Radio, "Construction Sites": HardHat,
  "Luxury Homes": Crown,
};

export default function Home() {
  return (
    <div className="bg-background">
    <SEO path="/" />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/manus-storage/hero-bg_04af0095.jpg"
            alt="HLS Security — Advanced electronic security systems"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/60 via-[#0B0B0B]/80 to-[#0B0B0B]" />
          <div className="absolute inset-0 mesh-bg" />
        </div>

        {/* Animated scan line */}
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#009DFF]/30 to-transparent" style={{ animation: "scan-line 8s linear infinite" }} />

        <div className="container relative z-10 pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-[#009DFF]" />
              <span className="text-[#009DFF] text-sm font-heading font-semibold uppercase tracking-wider">
                Complete Protection. Intelligent Security.
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
              Professional Security.<br />
              Intelligent Protection.<br />
              <span className="text-gradient">24/7.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mb-10">
              Protect your home, business and assets with advanced intruder alarm systems, professional monitoring and rapid armed response.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="/contact"
                className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white text-base font-heading font-semibold group"
              >
                <Calendar className="w-5 h-5" />
                Request Free Security Assessment
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+15551002470"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass text-white text-base font-heading font-semibold hover:border-[#009DFF]/30 transition-all duration-200"
              >
                <Phone className="w-5 h-5 text-[#009DFF]" />
                Speak to a Security Expert
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-gray-500 animate-bounce" />
        </motion.div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 border-y border-white/5 bg-[#0B0B0B]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {trustIndicators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                className="text-center"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-[#009DFF] mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-gray-400 font-heading font-medium">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Services — The Three Pillars */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-50" />
        <div className="container relative z-10">
          <SectionHeading
            eyebrow="Our Core Services"
            title="Complete Protection, Not Just Installation"
            subtitle="We don't simply install security systems. We provide end-to-end protection through intelligent monitoring and rapid armed response."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {primaryServices.map((service, i) => {
              const Icon = iconMap[service.icon] || Shield;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] }}
                  className="glass-strong rounded-2xl p-8 hover:border-[#009DFF]/20 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#009DFF]/10 flex items-center justify-center mb-6 group-hover:bg-[#009DFF]/20 transition-colors">
                    <Icon className="w-7 h-7 text-[#009DFF]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-[#009DFF] flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/services"
                    className="inline-flex items-center gap-1 text-sm font-heading font-semibold text-[#009DFF] hover:text-[#00B8FF] transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose HLS */}
      <section className="py-24 bg-[#0B0B0B] border-y border-white/5">
        <div className="container">
          <SectionHeading
            eyebrow="Why Choose HLS"
            title="The HLS Advantage"
            subtitle="Six reasons why leading homes and businesses trust HLS for their security."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {whyChooseHLS.map((item, i) => {
              const Icon = iconMap[item.icon] || Shield;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                  className="glass rounded-xl p-6 hover:border-[#009DFF]/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#009DFF]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#009DFF]" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <SectionHeading
            eyebrow="Complete Security Solutions"
            title="Explore Our Full Range of Services"
            subtitle="From intruder alarms to smart automation — everything you need for total protection."
            center
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {[...primaryServices.slice(0, 3), ...secondaryServices].map((service, i) => {
              const Icon = iconMap[service.icon] || Shield;
              return (
                <motion.a
                  key={i}
                  href="/services"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
                  className="glass rounded-xl p-5 hover:border-[#009DFF]/20 hover:bg-white/5 transition-all duration-300 group block"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#009DFF]/10 flex items-center justify-center mb-4 group-hover:bg-[#009DFF]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[#009DFF]" />
                  </div>
                  <h4 className="font-heading text-sm font-semibold text-white mb-1">
                    {service.title}
                  </h4>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {service.description}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-[#0B0B0B] border-y border-white/5">
        <div className="container">
          <SectionHeading
            eyebrow="Industries We Protect"
            title="Security Solutions for Every Sector"
            subtitle="Tailored protection for residential, commercial, industrial, and enterprise environments."
            center
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {industries.map((industry, i) => {
              const Icon = industryIcons[industry] || Building2;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
                  className="glass rounded-xl p-5 flex items-center gap-3 hover:border-[#009DFF]/20 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-[#009DFF] flex-shrink-0" />
                  <span className="text-sm font-heading font-medium text-gray-300">
                    {industry}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-50" />
        <div className="container relative z-10">
          <SectionHeading
            eyebrow="Our Process"
            title="How It Works"
            subtitle="From free survey to 24/7 protection — a seamless path to complete security."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {howItWorks.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="relative"
              >
                <div className="glass-strong rounded-2xl p-8 h-full">
                  <div className="font-display text-5xl font-bold text-[#009DFF]/20 mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-display text-xl font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {i < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-[#009DFF]/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0B0B0B] border-y border-white/5">
        <div className="container">
          <SectionHeading
            eyebrow="Client Testimonials"
            title="Trusted by Those Who Can't Afford to Compromise"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="glass-strong rounded-2xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-[#009DFF] fill-[#009DFF]" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-300 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#009DFF]/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-[#009DFF]">
                      {testimonial.author[0]}
                    </span>
                  </div>
                  <div>
                    <div className="font-heading text-sm font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Your Security Questions, Answered"
            center
          />
          <div className="max-w-3xl mx-auto mt-12">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="glass rounded-xl px-6 border-white/10 data-[state=open]:border-[#009DFF]/20 transition-all"
                >
                  <AccordionTrigger className="text-left font-heading text-base font-semibold text-white hover:text-[#009DFF] transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-24 bg-[#0B0B0B] border-y border-white/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Get Started"
                title="Your Free Security Assessment Awaits"
                subtitle="Book a no-obligation security survey with our experts. We'll assess your property, identify vulnerabilities, and recommend the right solution — completely free."
              />
              <div className="mt-8 space-y-4">
                {[
                  "No obligation, no pressure consultation",
                  "Comprehensive property security survey",
                  "Custom system design and quote",
                  "Expert advice from certified engineers",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#009DFF]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#009DFF]" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}
