import Link from "next/link";
import type { ReactNode } from "react";
import {
  MessageSquare,
  Users,
  Layout,
  Send,
  Bot,
  Clock,
  BarChart3,
  Shield,
  GitBranch,
  BrainCircuit,
  Building2,
  Home,
  Stethoscope,
  GraduationCap,
  Plane,
  ShieldCheck,
  HeartHandshake,
  ShoppingBag,
  Truck,
  Landmark,
  Briefcase,
  HardHat,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <Navbar />
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <IndustriesSection />
      <HowItWorks />
      <StatsSection />
      <BenefitsSection />
      <SecuritySection />
      <PricingSection />
      <TestimonialsSection />
      <FinalCta />
      <Footer />
    </div>
  );
}

// ---------------------------------------------------------------
// Navbar
// ---------------------------------------------------------------
function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Amisi Genuine Logo" className="h-9 w-9 object-contain rounded-xl" />
          <span className="text-lg font-bold text-white">
            Amisi <span className="text-primary">Genuine</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#features" className="text-sm text-slate-400 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#industries" className="text-sm text-slate-400 hover:text-white transition-colors">
            Industries
          </Link>
          <Link href="#pricing" className="text-sm text-slate-400 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" className="text-slate-300 hover:text-white text-sm">
              Sign in
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm h-9">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

// ---------------------------------------------------------------
// Hero
// ---------------------------------------------------------------
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800/60">
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:pb-32 lg:pt-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Trusted by growing businesses across Africa
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Turn WhatsApp Conversations Into{" "}
              <span className="text-primary">Customers</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              Manage contacts, track sales opportunities, automate follow-ups,
              send broadcasts, and collaborate with your team from a single
              WhatsApp-powered CRM platform. No complicated setup. No servers
              to manage. Just sign up and start growing your business.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-base"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 text-base"
                >
                  Book a Demo
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-800/60 pt-8">
              <div>
                <p className="text-2xl font-bold text-white">10K+</p>
                <p className="mt-1 text-xs text-slate-500">Conversations Managed Daily</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">99.9%</p>
                <p className="mt-1 text-xs text-slate-500">Platform Uptime</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">4.9★</p>
                <p className="mt-1 text-xs text-slate-500">Customer Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right - Mockup */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Background glow */}
              <div className="pointer-events-none absolute -inset-12 rounded-full bg-primary/5 blur-3xl" />
              <div className="relative grid gap-4 sm:grid-cols-2">
                {/* WhatsApp Chat Window */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 backdrop-blur">
                  <div className="mb-4 flex items-center gap-3 border-b border-slate-800 pb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
                      <MessageSquare className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Customer</p>
                      <p className="text-xs text-slate-500">Online</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="rounded-2xl rounded-bl-sm bg-slate-800 p-3 text-sm text-slate-300">
                      Hello, I would like a quotation.
                    </div>
                    <div className="rounded-2xl rounded-br-sm bg-primary/20 p-3 text-sm text-white">
                      Thank you for reaching out. I&apos;ve created a sales
                      opportunity and assigned it to our team.
                    </div>
                    <div className="space-y-2 border-t border-slate-800 pt-3">
                      {[
                        "✓ Lead Created",
                        "✓ Contact Added",
                        "✓ Follow-up Scheduled",
                        "✓ Opportunity Moved to Proposal Stage",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-xs text-slate-500"
                        >
                          <CheckCircle className="h-3 w-3 text-emerald-400" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CRM Dashboard Preview */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 backdrop-blur">
                  <div className="mb-4 border-b border-slate-800 pb-3">
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                      Dashboard
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "New Leads", value: "45", change: "+12%", up: true },
                      { label: "Qualified", value: "22", change: "+8%", up: true },
                      { label: "Proposal Sent", value: "15", change: "+3%", up: true },
                      { label: "Negotiation", value: "8", change: "-2%", up: false },
                      { label: "Won Deals", value: "6", change: "+25%", up: true },
                      { label: "Revenue", value: "KES 2.4M", change: "+18%", up: true },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-lg border border-slate-800 bg-slate-950/50 p-3"
                      >
                        <p className="text-[10px] text-slate-500">{item.label}</p>
                        <p className="mt-0.5 text-base font-bold text-white">
                          {item.value}
                        </p>
                        <p
                          className={`text-[10px] font-medium ${
                            item.up ? "text-emerald-400" : "text-red-400"
                          }`}
                        >
                          {item.change} vs last month
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------
// Problem Section
// ---------------------------------------------------------------
function ProblemSection() {
  return (
    <section className="border-b border-slate-800/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Your Customers Are On WhatsApp.{" "}
            <span className="text-primary">Is Your CRM There Too?</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Most businesses juggle WhatsApp conversations with outdated
            spreadsheets or expensive CRM tools that don&apos;t integrate with
            the world&apos;s most popular messaging platform.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Lost Conversations",
              desc: "Customer messages buried in personal chats with no history or context.",
            },
            {
              title: "Missed Follow-ups",
              desc: "No reminders or automation — hot leads go cold.",
            },
            {
              title: "Disorganized Contacts",
              desc: "Scattered across phones, notebooks, and spreadsheets.",
            },
            {
              title: "No Pipeline Visibility",
              desc: "Zero insight into your sales process or team performance.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-800 bg-slate-900/30 p-6"
            >
              <p className="font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------
// Features
// ---------------------------------------------------------------
function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: "Contact Management",
      desc: "Automatically organize customer data from WhatsApp conversations with custom fields, tags, and full interaction history.",
    },
    {
      icon: Layout,
      title: "Sales Pipeline",
      desc: "Track opportunities from inquiry to closed deal with a Kanban board. Drag deals through custom stages.",
    },
    {
      icon: MessageSquare,
      title: "Team Inbox",
      desc: "Multiple agents can collaborate on conversations, assign chats, leave internal notes, and never miss a message.",
    },
    {
      icon: Send,
      title: "Broadcast Messaging",
      desc: "Send campaigns to customer segments using Meta-approved message templates with delivery tracking.",
    },
    {
      icon: Bot,
      title: "Workflow Automation",
      desc: "Automate reminders, follow-ups, and tasks so your team focuses on selling, not data entry.",
    },
    {
      icon: Clock,
      title: "Customer Timeline",
      desc: "View complete interaction history for every contact — messages, deals, notes, and status changes.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      desc: "Real-time KPIs on conversations, response times, deal values, and team performance.",
    },
    {
      icon: Shield,
      title: "Role-Based Access",
      desc: "Control what each team member can see and do. Owner, admin, agent, and viewer roles.",
    },
    {
      icon: GitBranch,
      title: "Multi-Department",
      desc: "Sales, support, marketing, and operations working together in a shared workspace.",
    },
    {
      icon: BrainCircuit,
      title: "AI Assistance",
      desc: "Generate response suggestions, conversation summaries, and actionable recommendations.",
    },
  ];

  return (
    <section id="features" className="border-b border-slate-800/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Everything You Need to{" "}
            <span className="text-primary">Sell on WhatsApp</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            A complete CRM platform built for the way modern businesses
            communicate.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-slate-800 bg-slate-900/30 p-6 transition-colors hover:border-slate-700"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------
// Industries
// ---------------------------------------------------------------
function IndustriesSection() {
  const industries = [
    { icon: Building2, title: "SMEs", desc: "Manage customer relationships without expensive enterprise tools." },
    { icon: Home, title: "Real Estate", desc: "Track property inquiries, schedule viewings, and close deals." },
    { icon: Stethoscope, title: "Healthcare", desc: "Manage patient appointments, follow-ups, and referrals." },
    { icon: GraduationCap, title: "Schools & Training", desc: "Handle admissions, parent communication, and student records." },
    { icon: Plane, title: "Travel & Tours", desc: "Manage bookings, itineraries, and customer inquiries." },
    { icon: ShieldCheck, title: "Insurance", desc: "Track leads, policy renewals, and claims processing." },
    { icon: HeartHandshake, title: "NGOs", desc: "Coordinate donors, beneficiaries, and field communications." },
    { icon: ShoppingBag, title: "Retail", desc: "Handle orders, customer inquiries, and loyalty programs." },
    { icon: Truck, title: "Logistics", desc: "Track shipments, delivery updates, and customer communication." },
    { icon: Landmark, title: "Financial Services", desc: "Manage client relationships, appointments, and compliance." },
    { icon: Briefcase, title: "Professional Services", desc: "Consulting, legal, and advisory client management." },
    { icon: HardHat, title: "Construction", desc: "Project inquiries, contractor coordination, and client updates." },
  ];

  return (
    <section id="industries" className="border-b border-slate-800/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Built for{" "}
            <span className="text-primary">Every Industry</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            From small businesses to large enterprises, Amisi Genuine CRM adapts
            to your workflow.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="rounded-xl border border-slate-800 bg-slate-900/30 p-5 transition-colors hover:border-slate-700"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                <ind.icon className="h-4 w-4 text-primary" />
              </div>
              <h3 className="font-semibold text-white text-sm">{ind.title}</h3>
              <p className="mt-1 text-xs text-slate-500">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------
// How It Works
// ---------------------------------------------------------------
function HowItWorks() {
  const steps = [
    { num: "01", title: "Create Account", desc: "Sign up in under 2 minutes. No credit card required." },
    { num: "02", title: "Connect WhatsApp", desc: "Link your WhatsApp Business number securely." },
    { num: "03", title: "Import Contacts", desc: "Sync your existing contacts or add new ones." },
    { num: "04", title: "Manage Leads", desc: "Track conversations, create deals, and move them through pipelines." },
    { num: "05", title: "Automate Follow-Ups", desc: "Set up workflows to nurture leads automatically." },
    { num: "06", title: "Close More Sales", desc: "Convert conversations into customers with data-driven insights." },
  ];

  return (
    <section className="border-b border-slate-800/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Get Started in{" "}
            <span className="text-primary">Minutes</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            From sign-up to closing your first deal — it&apos;s that fast.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {i < steps.length - 1 && (
                <div className="absolute left-6 top-14 hidden h-12 w-px bg-gradient-to-b from-primary/40 to-transparent lg:block" />
              )}
              <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
                  {step.num}
                </div>
                <h3 className="font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------
// Stats
// ---------------------------------------------------------------
function StatsSection() {
  return (
    <section className="border-b border-slate-800/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-primary/5 to-slate-900/50 p-12">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "10,000+", label: "Conversations Daily" },
              { value: "99.9%", label: "Platform Uptime" },
              { value: "50+", label: "Countries Served" },
              { value: "24/7", label: "Dedicated Support" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------
// Benefits
// ---------------------------------------------------------------
function BenefitsSection() {
  const benefits = [
    "Faster response times across all customer conversations",
    "Better customer engagement with context-rich interactions",
    "Increased sales conversion rates with pipeline tracking",
    "Improved team productivity through automation",
    "Centralized communication — no more switching apps",
    "Business intelligence and reporting at your fingertips",
    "Scalable growth — from 1 user to 100+",
  ];

  return (
    <section className="border-b border-slate-800/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            More Conversations. More Conversions.{" "}
            <span className="text-primary">Less Manual Work.</span>
          </h2>
        </div>

        <div className="mt-16 mx-auto max-w-2xl space-y-4">
          {benefits.map((b) => (
            <div key={b} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
                <CheckCircle className="h-3 w-3 text-primary" />
              </div>
              <p className="text-slate-300">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------
// Security
// ---------------------------------------------------------------
function SecuritySection() {
  return (
    <section className="border-b border-slate-800/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Enterprise Security{" "}
            <span className="text-primary">You Can Trust</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Your data is protected by industry-standard encryption and
            infrastructure hosted on reliable cloud providers.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Shield, title: "Encrypted", desc: "End-to-end encrypted communications" },
            { icon: Shield, title: "Secure Cloud", desc: "Enterprise-grade cloud infrastructure" },
            { icon: Shield, title: "Daily Backups", desc: "Automated backups with point-in-time recovery" },
            { icon: Shield, title: "Access Control", desc: "Role-based permissions and audit logs" },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-slate-800 bg-slate-900/30 p-6 text-center"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-white">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------
// Pricing
// ---------------------------------------------------------------
function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      desc: "For small teams getting started with WhatsApp CRM.",
      popular: false,
      features: [
        "Up to 2 team members",
        "1 WhatsApp number",
        "Contact management",
        "Basic pipeline",
        "Email support",
      ],
    },
    {
      name: "Growth",
      price: "KES 1,500",
      period: "/month",
      desc: "For growing businesses ready to scale.",
      popular: true,
      features: [
        "Up to 10 team members",
        "3 WhatsApp numbers",
        "Advanced pipelines",
        "Broadcast messaging",
        "Workflow automation",
        "Analytics dashboard",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      desc: "For large organizations with custom needs.",
      popular: false,
      features: [
        "Unlimited team members",
        "Unlimited WhatsApp numbers",
        "AI assistance",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
        "24/7 phone support",
      ],
    },
  ];

  return (
    <section id="pricing" className="border-b border-slate-800/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Simple, Transparent{" "}
            <span className="text-primary">Pricing</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Start free. Upgrade as you grow. No hidden fees.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.popular
                  ? "border-primary/50 bg-primary/5 shadow-lg shadow-primary/5"
                  : "border-slate-800 bg-slate-900/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="ml-1 text-sm text-slate-400">
                  {plan.period}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-400">{plan.desc}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <Button
                  className={`mt-8 w-full h-10 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Amisi Genuine CRM transformed how we manage customer relationships. Our response time dropped by 60% and sales increased 35% in the first quarter.",
      author: "Sarah Wanjiku",
      role: "CEO, Kenya Homes Realty",
      rating: 5,
    },
    {
      quote: "Finally, a CRM that actually works with WhatsApp. Our team adopted it immediately. The pipeline tracking alone has been worth it.",
      author: "James Ochieng",
      role: "Operations Director, SafariLink Tours",
      rating: 5,
    },
    {
      quote: "We went from scattered spreadsheets to a centralized system in days. The automation features saved us countless hours on follow-ups.",
      author: "Grace Mwangi",
      role: "Founder, Grace Beauty Supply",
      rating: 5,
    },
  ];

  return (
    <section className="border-b border-slate-800/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Trusted by{" "}
            <span className="text-primary">Businesses Like Yours</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="rounded-xl border border-slate-800 bg-slate-900/30 p-6"
            >
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-slate-300">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 border-t border-slate-800 pt-4">
                <p className="text-sm font-semibold text-white">{t.author}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------
// Final CTA
// ---------------------------------------------------------------
function FinalCta() {
  return (
    <section className="border-b border-slate-800/60 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/5 to-slate-900/50 p-12 lg:p-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Manage Every Customer Relationship{" "}
            <span className="text-primary">From WhatsApp</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Join thousands of businesses using Amisi Genuine CRM to streamline
            communication, improve customer experience, and increase sales.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-base"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 text-base"
              >
                Request a Live Demo
              </Button>
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Secure Cloud Hosting &bull; Automated Backups &bull; Enterprise Security &bull; Dedicated Support
          </p>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------
// Footer
// ---------------------------------------------------------------
function Footer() {
  return (
    <footer className="border-t border-slate-800/60 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="Amisi Genuine Logo" className="h-8 w-8 object-contain rounded-lg" />
              <span className="font-bold text-white">
                Amisi <span className="text-primary">Genuine</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-500">
              WhatsApp CRM solutions for modern businesses.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Product</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><span className="text-slate-600">About</span></li>
              <li><span className="text-slate-600">Blog</span></li>
              <li><span className="text-slate-600">Careers</span></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><span className="text-slate-600">Privacy</span></li>
              <li><span className="text-slate-600">Terms</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800/60 pt-6 text-center text-sm text-slate-600">
          &copy; {new Date().getFullYear()} Amisi Genuine Enterprises. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
