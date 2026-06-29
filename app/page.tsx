'use client';

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('government');
  const [navScrolled, setNavScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const emptyForm = {
    name: '', email: '', organization: '', role: '', country: '',
    phone: '', interest: '', message: '', company_website: '',
  };
  const [form, setForm] = useState(emptyForm);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  const updateField = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setFormError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setFormStatus('success');
        setForm(emptyForm);
      } else {
        setFormStatus('error');
        setFormError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setFormStatus('error');
      setFormError('Network error. Please try again, or email info@korahealthafrica.com.');
    }
  };

  const capabilities = [
    {
      icon: '🔗',
      title: 'Universal Data Synthesis',
      description:
        'Connects to Epic, OpenMRS, DHIS2, KenyaEMR, iClinic, and 20+ EMR systems. Ingests paper records, scanned documents, voice notes, and lab results from any source — simultaneously.',
    },
    {
      icon: '📡',
      title: 'Offline-First Architecture',
      description:
        'Edge AI inference runs entirely on-device. No internet required for clinical intelligence. Automatically syncs across facilities when connectivity is restored.',
    },
    {
      icon: '🌍',
      title: 'Population Health Engine',
      description:
        'Real-time disease surveillance across districts. Track vaccination coverage, detect outbreaks early, monitor chronic disease burden, and auto-report to DHIS2 and WHO.',
    },
    {
      icon: '📄',
      title: 'Digitization Intelligence',
      description:
        'Convert paper records, handwritten notes, and legacy files into structured clinical data using OCR and AI. Supports 15+ languages and local handwriting styles.',
    },
    {
      icon: '🧠',
      title: 'Clinical Decision Support',
      description:
        'AI models trained on African patient populations — malaria, sickle cell, TB, HIV/AIDS, hypertension, and maternal health — surface relevant decision aids at the point of care.',
    },
    {
      icon: '📊',
      title: 'Evidence-Grade Outputs',
      description:
        'Every extracted data point links back to its source document and page. Audit trails, source verification, and confidence scoring built in from day one.',
    },
  ];

  type TabKey = 'clinics' | 'health_systems' | 'population' | 'government';

  const tabs: Record<
    TabKey,
    {
      label: string; headline: string; body: string; bullets: string[]; stat: string; statLabel: string;
      panelTitle: string;
      panel: { label: string; value: string; trend: string; alert: boolean }[];
    }
  > = {
    government: {
      label: 'Governments & NGOs',
      headline: 'National health intelligence, without the infrastructure overhaul.',
      body: "Ministries of Health, public health agencies, NGOs, and international health organizations use Kora to see the entire health system in real time — disease burden, service coverage, and population outcomes — without requiring uniform EMR adoption across every facility. Kora unifies paper-based and digital facilities into a single, policy-ready evidence base for national and sub-national decision-making.",
      bullets: [
        'National & sub-national dashboards: disease burden, coverage, and outcomes by state, LGA, and district',
        'Real-time disease surveillance, outbreak early-warning, and notifiable-disease reporting',
        'Automated DHIS2, WHO, IDSR, and donor (PEPFAR, Global Fund, Gavi) reporting — no manual aggregation',
        'Evidence for resource allocation: target funding, staffing, and supplies to the highest-need regions',
        'Program monitoring & evaluation, impact measurement, and grant/compliance reporting',
        'Works with paper-based and digital facilities simultaneously — no facility left invisible',
        'Data sovereignty: de-identified aggregation hosted in-country, aligned to national data-protection law',
      ],
      stat: 'National',
      statLabel: 'Real-time health intelligence across every facility',
      panelTitle: 'National Health Intelligence — Sample View',
      panel: [
        { label: 'States / regions live', value: '36', trend: 'National', alert: false },
        { label: 'Facilities reporting', value: '4,218', trend: '+312', alert: false },
        { label: 'On-time IDSR reports', value: '92.1%', trend: '+6.4%', alert: false },
        { label: 'Essential-medicine stockouts', value: '11 LGAs', trend: 'Action', alert: true },
        { label: 'Active outbreak alerts', value: '3', trend: 'New', alert: true },
        { label: 'Donor reports automated', value: '100%', trend: 'DHIS2/WHO', alert: false },
      ],
    },
    population: {
      label: 'Population Health',
      headline: 'From individual records to national health intelligence.',
      body: "Kora's Population Health Engine transforms fragmented patient records into district-wide and national intelligence ministries can act on. Track disease burden, monitor immunization and maternal-health coverage, detect outbreaks before they spread, model resource needs, and report to WHO and donors — all in real time, even where most facilities are still on paper.",
      bullets: [
        'Disease surveillance dashboards by region, state, LGA, and facility',
        'Outbreak detection with early-warning alerts and case-cluster mapping',
        'Vaccination coverage, immunization-gap, and cold-chain tracking',
        'Maternal, newborn & child health (MNCH) indicators and trends',
        'NCD burden monitoring — diabetes, hypertension, cancer screening',
        'Health-equity analytics: surface underserved populations and access gaps',
        'Automated reporting for DHIS2, WHO IDSR, and donor frameworks',
      ],
      stat: 'Real-time',
      statLabel: 'Population health surveillance & reporting',
      panelTitle: 'Population Surveillance — Sample View',
      panel: [
        { label: 'Districts monitored', value: '774', trend: 'Live', alert: false },
        { label: 'Indicators tracked', value: '120+', trend: 'Active', alert: false },
        { label: 'Malaria cases — Kano North', value: '2,847', trend: '+12%', alert: true },
        { label: 'DPT3 vaccination coverage', value: '73.4%', trend: '+4.2%', alert: false },
        { label: 'Reporting latency', value: '< 24h', trend: 'Real-time', alert: false },
        { label: 'Outbreak early-warnings', value: '5', trend: 'Flagged', alert: true },
      ],
    },
    health_systems: {
      label: 'Health Systems',
      headline: 'Care coordination across every facility.',
      body: 'For hospital networks and multi-facility health systems, Kora provides a unified view of patient care across all locations. Eliminate information silos, reduce redundant referrals, and enable real-time clinical coordination without requiring uniform EMR adoption.',
      bullets: [
        'Unified patient record across all facilities in the network',
        'Aggregate analytics across departments and campuses',
        'Integrates with existing EMR investments — no rip-and-replace',
      ],
      stat: '10+',
      statLabel: 'EMR systems supported simultaneously',
      panelTitle: 'Network Operations — Sample View',
      panel: [
        { label: 'Facilities unified', value: '38', trend: '1 network', alert: false },
        { label: 'EMR systems connected', value: '10+', trend: 'No replace', alert: false },
        { label: 'Records deduplicated', value: '1.2M', trend: 'Merged', alert: false },
        { label: 'Duplicate tests avoided', value: '18%', trend: '↓ cost', alert: false },
        { label: 'Referral turnaround', value: '2.1 days', trend: '-41%', alert: false },
        { label: 'Cross-site record access', value: 'Instant', trend: 'Unified', alert: false },
      ],
    },
    clinics: {
      label: 'Clinics',
      headline: 'Complete patient history. Every visit.',
      body: 'Clinicians at private primary care and pediatric clinics spend 40+ minutes per patient hunting through paper records and disconnected digital systems. Kora synthesizes the complete patient record in under 2 minutes — from any source — so clinicians walk into every encounter fully informed.',
      bullets: [
        'See all prior records from any clinic or hospital the patient visited',
        'Works offline during power or internet outages',
        'Surfaces relevant decision support based on patient history',
        'Reduces duplicate testing and medication errors',
      ],
      stat: '40 min → 2 min',
      statLabel: 'Chart review time',
      panelTitle: 'At the Point of Care — Sample View',
      panel: [
        { label: 'Chart review time', value: '40→2 min', trend: '-95%', alert: false },
        { label: 'Records unified / patient', value: 'All visits', trend: 'Any source', alert: false },
        { label: 'Offline uptime', value: '100%', trend: '0% internet', alert: false },
        { label: 'Decision-support prompts', value: 'On', trend: 'History-aware', alert: false },
        { label: 'Duplicate tests & errors', value: 'Reduced', trend: '↓', alert: false },
        { label: 'Setup per clinic', value: '< 1 day', trend: 'Fast', alert: false },
      ],
    },
  };

  const faqs = [
    {
      q: 'What is Kora?',
      a: "Kora is Africa's Clinical Intelligence Engine — a platform that synthesizes fragmented patient data from multiple EMR systems, paper records, and digital sources into decision-ready clinical intelligence. Think xCures, purpose-built for Africa's healthcare infrastructure.",
    },
    {
      q: 'How does Kora work without internet connectivity?',
      a: "Kora uses an offline-first architecture with edge AI inference. The AI models run entirely on the local device or facility server — no internet required for core clinical functions. When connectivity returns, Kora automatically syncs data and pushes population health updates.",
    },
    {
      q: 'What data sources can Kora integrate with?',
      a: 'Kora integrates with 20+ EMR systems including OpenMRS, DHIS2, KenyaEMR, Epic, iClinic, and legacy systems. It also accepts paper records via scanning/OCR, handwritten notes, voice recordings, lab result PDFs, DICOM images, and exports from any system.',
    },
    {
      q: 'How does Kora assist with digitization?',
      a: "Kora's Digitization Engine converts paper records and handwritten notes into structured clinical data using OCR and AI extraction. It supports 15+ languages and local handwriting styles. No manual data entry required — clinics can digitize years of paper records at scale.",
    },
    {
      q: 'What population health capabilities does Kora offer?',
      a: "Kora's Population Health Engine aggregates de-identified records into real-time district and national dashboards. Features include disease surveillance, vaccination tracking, outbreak detection, NCD burden monitoring, maternal health indicators, and automated DHIS2/WHO reporting.",
    },
    {
      q: 'How does Kora partner with existing EMR systems?',
      a: "Kora integrates with your EMR via HL7 FHIR, OpenMRS REST, DHIS2 API, or custom connectors — reading from and writing back to your system without replacing it. Partners use Kora to enrich patient records at point of care, add population health dashboards, and extend offline capability. Integration typically takes less than a week. Schedule a demo to explore an EMR partnership.",
    },
    {
      q: 'What is the investment opportunity?',
      a: 'Kora is building the infrastructure layer for African healthcare data — a $45B market by 2030. We are currently raising to fund initial deployment across Nigeria, Kenya, and Ghana. Schedule a demo to receive our investor deck and financial model.',
    },
  ];

  const heroStats = [
    { number: '80%', label: 'of African healthcare data is unstructured or paper-based' },
    { number: '15+', label: 'languages supported for paper record OCR and digitization' },
    { number: '2 min', label: 'to synthesize a complete patient record from any source' },
    { number: '0%', label: 'internet required for core clinical AI functions' },
  ];

  return (
    <div className="min-h-screen bg-[#0A1A2F] text-white">

      {/* NAVBAR */}
      <nav
        aria-label="Kora Health main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          navScrolled ? 'bg-[#0A1A2F]/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" aria-label="Kora Health home" className="flex items-center gap-3.5">
            <img src="/kora-mark.webp" alt="" aria-hidden="true" className="h-[84px] w-auto" />
            <div className="flex flex-col items-center justify-center leading-none">
              <span className="display-serif text-4xl md:text-5xl font-bold text-[#FAF5EB] leading-[0.9] tracking-tight">Kora</span>
              <span className="text-[11px] md:text-xs font-semibold tracking-[0.42em] uppercase text-[#EAB308] mt-0.5 [text-indent:0.42em]">Health</span>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-400" role="menubar">
            <a href="#capabilities" title="Kora Platform Capabilities" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#use-cases" title="Who Kora Serves — Clinics, Health Systems, Governments" className="hover:text-white transition-colors">Use Cases</a>
            <a href="#population" title="Population Health Engine for Africa" className="hover:text-white transition-colors">Population Health</a>
            <a href="#how-it-works" title="How Kora Works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#emr-partners" title="EMR Partnership Program" className="hover:text-white transition-colors">EMR Partners</a>
            <a href="#investors" title="Kora Health Investment Opportunity" className="hover:text-white transition-colors">Investors</a>
          </div>
          <a
            href="#contact"
            className="bg-[#2DD4BF] text-[#0A1A2F] font-semibold px-5 py-2 rounded-lg hover:bg-[#1BBFA8] transition-colors text-sm"
          >
            Schedule a Demo
          </a>
        </div>
      </nav>

      <main>

      {/* HERO */}
      <section id="hero" aria-label="Hero — Kora Clinical Intelligence Platform for Africa" className="relative pt-36 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/8 via-transparent to-[#EAB308]/4 pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-[700px] h-[700px] rounded-full bg-[#2DD4BF]/4 blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto py-14">
          <div className="grid md:grid-cols-[3fr_2fr] gap-16 items-center">
            {/* Left — headline + CTAs */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#EAB308]" />
                <span className="text-[#EAB308] text-sm font-semibold tracking-widest uppercase">Africa&apos;s Clinical Intelligence Engine</span>
              </div>
              <h1 className="display-serif text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
                The answer is in your patients&apos; records.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#1BBFA8]">All of them.</span>
              </h1>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                Kora synthesizes fragmented patient data from multiple EMRs, paper records, and digital sources into decision-ready clinical intelligence. Works offline. Digitizes paper. Tracks populations. Built for Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-[#2DD4BF] text-[#0A1A2F] font-bold px-8 py-4 rounded-xl hover:bg-[#1BBFA8] transition-colors text-center">Schedule a Demo</a>
              </div>
            </div>
            {/* Right — stats panel */}
            <div className="grid grid-cols-2 gap-4">
              {heroStats.map((s, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
                  <div className="text-3xl md:text-4xl font-bold text-[#2DD4BF] mb-3">{s.number}</div>
                  <div className="text-sm text-slate-400 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" aria-label="The Problem — Fragmented Healthcare Data in Africa" className="px-6 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto py-14">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#EAB308] text-sm font-semibold uppercase tracking-widest mb-4">The Problem</p>
              <h2 className="display-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Africa doesn&apos;t have a data shortage. It has a <em className="text-[#EAB308] not-italic">clarity crisis.</em>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                African health systems generate enormous clinical data — but 80% is locked in paper records, siloed EMRs, and low-connectivity environments where data can&apos;t move, be read, or be trusted.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                Clinicians spend hours hunting fragmented records. Population insights are invisible. Paper never becomes digital. Critical decisions get made with incomplete information.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { pct: '80%', label: 'Healthcare data is unstructured or paper-based', color: '#EF4444' },
                { pct: '45 min', label: 'Average chart review time per complex patient', color: '#F59E0B' },
                { pct: '60%', label: 'Of African clinics operate in low/no-connectivity zones', color: '#8B5CF6' },
                { pct: '3+', label: 'Disconnected EMR systems per average health network', color: '#3B82F6' },
              ].map((item, i) => (
                <div key={i} className="bg-[#0A1A2F] border border-white/10 rounded-xl p-5 flex items-center gap-5">
                  <div className="text-2xl font-bold min-w-[80px]" style={{ color: item.color }}>{item.pct}</div>
                  <div className="text-slate-400 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION INTRO */}
      <section id="solution" aria-label="The Solution — Kora Clinical Intelligence Engine" className="px-6 text-center">
        <div className="max-w-4xl mx-auto py-14">
          <p className="text-[#EAB308] text-sm font-semibold uppercase tracking-widest mb-4">The Solution</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Kora Clinical Intelligence Engine</h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            Kora retrieves, synthesizes, and structures patient data from every source — EMRs, paper records, scanned documents, and voice — into decision-ready clinical intelligence. Delivered in minutes. Works offline. Scales to populations.
          </p>
        </div>
      </section>

      {/* SOLUTION — IN PRACTICE SCENARIO */}
      <section id="example" aria-label="How Kora Works in Practice — a clinical scenario" className="px-6">
        <div className="max-w-6xl mx-auto pb-14">
          <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/5 to-transparent pointer-events-none" />
            <div className="relative">
              <p className="text-[#EAB308] text-sm font-semibold uppercase tracking-widest mb-4">See It In Practice</p>
              <h3 className="display-serif text-2xl md:text-3xl font-bold text-white mb-5">A first visit, a complete picture.</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-3xl">
                A physician in Nairobi meets <span className="text-white font-semibold">Mrs. Wanjiku, 76</span>, for the first time. She mentions a leukemia diagnosis from a referral hospital three counties away, visits to two other clinics, and hands over a worn folder of paper lab results. Normally, piecing this together takes days of phone calls — or simply never happens. With Kora, the doctor opens one screen.
              </p>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* What Kora does */}
                <div className="space-y-5">
                  {[
                    { icon: '🔗', title: 'Pulls every record', body: "Connects to the referral hospital's EMR, both clinics' systems, and the national registry — gathering scattered visits into one place." },
                    { icon: '📄', title: 'Digitizes the paper folder', body: 'OCR reads the printed lab results and handwritten notes, turning the physical folder into structured clinical data.' },
                    { icon: '🧠', title: 'Synthesizes one timeline', body: 'Builds a unified history: diagnosis, prior chemotherapy, transfusions, current medications, and allergies — deduplicated and source-linked.' },
                    { icon: '⚠️', title: 'Surfaces what matters', body: 'Flags a bleeding-risk interaction with her current therapy and a falling platelet trend that needs attention today.' },
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="text-2xl flex-shrink-0">{step.icon}</div>
                      <div>
                        <div className="text-white font-semibold mb-1">{step.title}</div>
                        <div className="text-slate-400 text-base leading-relaxed">{step.body}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Synthesized record preview */}
                <div className="bg-[#0A1A2F] border border-[#2DD4BF]/20 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
                    <div>
                      <div className="text-white font-bold text-lg leading-tight">Mrs. Wanjiku</div>
                      <div className="text-slate-500 text-xs">76 · Female · Synthesized by Kora</div>
                    </div>
                    <div className="text-[10px] text-[#2DD4BF] border border-[#2DD4BF]/30 rounded-full px-3 py-1 font-semibold uppercase tracking-wider">&lt; 2 min · offline</div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: 'Diagnosis', value: 'Chronic Lymphocytic Leukemia (2022)' },
                      { label: 'Prior treatment', value: '4 cycles chemotherapy · last transfusion Jan 2026' },
                      { label: 'Current medication', value: 'Ibrutinib · Allopurinol' },
                      { label: 'Allergy', value: 'Penicillin' },
                      { label: 'Latest labs (3 wks ago)', value: 'Platelets 88 ↓ · WBC 14.2' },
                    ].map((row, i) => (
                      <div key={i} className="flex items-start justify-between gap-4 border-b border-white/5 pb-3 last:border-0">
                        <div className="text-xs text-slate-500 uppercase tracking-wider flex-shrink-0 pt-0.5">{row.label}</div>
                        <div className="text-sm text-white text-right">{row.value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 space-y-2">
                    <div className="flex items-start gap-2 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                      <span className="text-red-400 text-sm">⚠</span>
                      <span className="text-xs text-red-300 leading-snug">Bleeding-risk: Ibrutinib — review before any anticoagulant or procedure.</span>
                    </div>
                    <div className="flex items-start gap-2 bg-[#EAB308]/10 border border-[#EAB308]/20 rounded-lg px-3 py-2">
                      <span className="text-[#EAB308] text-sm">⚠</span>
                      <span className="text-xs text-[#EAB308] leading-snug">Platelets trending down across last 3 results — recheck CBC today.</span>
                    </div>
                  </div>
                  <div className="mt-4 text-[11px] text-slate-600 italic">* Illustrative scenario for demonstration purposes only.</div>
                </div>
              </div>

              <p className="relative text-slate-300 text-lg leading-relaxed mt-8 max-w-3xl">
                In under two minutes — even with the clinic offline — the physician walks in knowing Mrs. Wanjiku&apos;s full history, current medications, and the alerts that matter. <span className="text-white font-semibold">No phone calls. No missing records. No guesswork.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" aria-label="Kora Platform Capabilities" className="px-6">
        <div className="max-w-7xl mx-auto py-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <div key={i} className="bg-[#0F172A] border border-white/10 rounded-2xl p-7 hover:border-[#2DD4BF]/40 transition-all duration-200 group">
                <div className="text-3xl mb-4">{cap.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-[#2DD4BF] transition-colors">{cap.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="use-cases" aria-label="Who Kora Serves — Clinics, Health Systems, Governments, and NGOs in Africa" className="px-6 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto py-14">
          <p className="text-[#EAB308] text-sm font-semibold uppercase tracking-widest mb-4 text-center">Who We Serve</p>
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Built for every layer of the health system.</h2>
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {(Object.entries(tabs) as [TabKey, typeof tabs[TabKey]][]).map(([key, tab]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeTab === key ? 'bg-[#2DD4BF] text-[#0A1A2F]' : 'border border-white/20 text-slate-400 hover:text-white hover:border-white/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {(Object.entries(tabs) as [TabKey, typeof tabs[TabKey]][]).map(([key, tab]) => (
              <div key={key} className={`grid md:grid-cols-2 gap-12 items-center ${activeTab !== key ? 'hidden' : ''}`}>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-5">{tab.headline}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-6">{tab.body}</p>
                  <ul className="space-y-3">
                    {tab.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <span className="text-[#2DD4BF] mt-0.5 flex-shrink-0 font-bold">✓</span>
                        <span className="text-sm leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#0A1A2F] border border-[#2DD4BF]/20 rounded-2xl p-8">
                  <div className="text-xs text-[#EAB308] font-semibold mb-5 uppercase tracking-widest">{tab.panelTitle}</div>
                  <div className="text-center mb-6 pb-6 border-b border-white/10">
                    <div className="text-5xl font-bold text-[#2DD4BF] mb-2">{tab.stat}</div>
                    <div className="text-slate-400 text-sm">{tab.statLabel}</div>
                  </div>
                  <div className="space-y-4">
                    {tab.panel.map((row, i) => (
                      <div key={i} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0">
                        <div className="text-sm text-slate-400">{row.label}</div>
                        <div className="flex items-center gap-3">
                          <span className="text-white font-semibold text-sm">{row.value}</span>
                          {row.trend && (
                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${row.alert ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>{row.trend}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 text-xs text-slate-600 italic">* Illustrative data for demonstration purposes only.</div>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* POPULATION HEALTH */}
      <section id="population" aria-label="Population Health Engine — Disease Surveillance and Outbreak Detection across Africa" className="px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/5 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto py-14">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#EAB308] text-sm font-semibold uppercase tracking-widest mb-4">Population Health</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                From individual records to national health intelligence.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Kora&apos;s Population Health Engine aggregates de-identified clinical records into real-time district and national dashboards — turning individual patient encounters into system-wide intelligence that drives policy and saves lives.
              </p>
              <div className="space-y-2">
                {[
                  '🦟  Disease surveillance & outbreak early warning',
                  '💉  Vaccination coverage & immunization gap tracking',
                  '🫀  NCD burden monitoring (diabetes, hypertension)',
                  '👶  Maternal, newborn & child health indicators',
                  '🏛️  National & sub-national policy dashboards (state, LGA, district)',
                  '💰  Resource allocation & donor-fund targeting by need',
                  '🌍  Health-equity & access-gap analytics',
                  '📊  Automated DHIS2, WHO IDSR & donor reporting',
                  '🔔  Real-time district-level alert system',
                ].map((item, i) => (
                  <div key={i} className="text-sm text-slate-300 py-1">{item}</div>
                ))}
              </div>

              <div className="mt-8 bg-[#0F172A] border border-[#EAB308]/20 rounded-2xl p-6">
                <div className="text-xs text-[#EAB308] font-semibold mb-3 uppercase tracking-widest">For Ministries of Health &amp; Donors</div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Kora gives government decision-makers a single, real-time evidence base across every facility — even where most still run on paper — so policy, budgets, and emergency response are driven by current data, not last year&apos;s survey.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { metric: '36+', label: 'States / regions on one national view' },
                    { metric: 'IDSR', label: 'WHO-aligned surveillance reporting' },
                    { metric: 'In-country', label: 'Data residency & sovereignty' },
                  ].map((m, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-[#2DD4BF] mb-1">{m.metric}</div>
                      <div className="text-[11px] text-slate-500 leading-snug">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-[#0F172A] border border-[#2DD4BF]/20 rounded-2xl p-8">
              <div className="text-xs text-[#EAB308] font-semibold mb-5 uppercase tracking-widest">Population Dashboard — Sample View</div>
              <div className="space-y-4">
                {[
                  { label: 'Malaria Cases — Kano North', value: '2,847', change: '+12%', alert: true },
                  { label: 'DPT3 Vaccination Coverage', value: '73.4%', change: '+4.2%', alert: false },
                  { label: 'TB Treatment Adherence Rate', value: '81.2%', change: '-2.1%', alert: true },
                  { label: 'Antenatal Care Visits (Q2)', value: '14,203', change: '+8.6%', alert: false },
                  { label: 'Facilities Reporting On-Time', value: '92.1%', change: '+6.4%', alert: false },
                  { label: 'Essential Medicine Stockouts', value: '11 LGAs', change: 'Action', alert: true },
                  { label: 'Active Outbreak Alerts', value: '3', change: 'New', alert: true },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0">
                    <div className="text-sm text-slate-400">{row.label}</div>
                    <div className="flex items-center gap-3">
                      <span className="text-white font-semibold text-sm">{row.value}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${row.alert ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>{row.change}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 text-xs text-slate-600 italic">* Illustrative data for demonstration purposes only.</div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFLINE FIRST */}
      <section id="offline-first" aria-label="Offline-First Architecture for Low-Connectivity African Healthcare Environments" className="px-6 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto py-14">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-[#0A1A2F] border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#2DD4BF] pulse-green" />
                  <span className="text-sm text-slate-400 font-medium">Kora System Status</span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Internet Connection', status: 'Unavailable', color: '#EF4444' },
                    { label: 'Kora AI Engine', status: 'Running ✓', color: '#2DD4BF' },
                    { label: 'Patient Records', status: 'Accessible ✓', color: '#2DD4BF' },
                    { label: 'Clinical Decision Support', status: 'Active ✓', color: '#2DD4BF' },
                    { label: 'Population Dashboards', status: 'Active ✓', color: '#2DD4BF' },
                    { label: 'Records Queued for Sync', status: '47 records', color: '#F59E0B' },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">{row.label}</span>
                      <span className="text-sm font-semibold" style={{ color: row.color }}>{row.status}</span>
                    </div>
                  ))}
                  <div className="mt-2 pt-4 border-t border-white/5 text-xs text-slate-600">
                    Kora automatically syncs and pushes population updates when connectivity restores.
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-[#EAB308] text-sm font-semibold uppercase tracking-widest mb-4">Offline-First Architecture</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Built for Africa&apos;s realities. Works at 0% connectivity.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                60% of African clinics operate in low or no-connectivity environments. Kora&apos;s AI runs entirely on-device via edge inference — no internet required for clinical intelligence, patient records, or decision support.
              </p>
              <div className="space-y-5">
                {[
                  { title: 'Edge AI Inference', body: 'Clinical AI models run locally on-device or on a facility server. Full capability without cloud dependency.' },
                  { title: 'Smart Sync', body: 'When connectivity returns, only changed data syncs — minimizing bandwidth costs on expensive mobile data.' },
                  { title: 'Device-Agnostic', body: 'Runs on low-end Android tablets, laptops, and shared workstations. No specialized hardware required.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1 bg-[#EAB308] rounded-full flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold mb-1">{item.title}</div>
                      <div className="text-slate-400 text-sm leading-relaxed">{item.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DATA SYNTHESIS */}
      <section id="data-synthesis" aria-label="Data Synthesis — Paper Records, EMRs, and Digital Sources" className="px-6">
        <div className="max-w-7xl mx-auto text-center py-14">
          <p className="text-[#EAB308] text-sm font-semibold uppercase tracking-widest mb-4">Data Synthesis</p>
          <h2 className="text-4xl font-bold text-white mb-6">Written. Digital. Spoken. We take it all.</h2>
          <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto">
            Kora doesn&apos;t require data to already be digital. We meet health systems where they are — and bring everything into a unified, structured clinical record.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📝', title: 'Handwritten Notes', body: 'OCR and AI extract clinical data from handwritten patient notes in 15+ languages, including local scripts.' },
              { icon: '🗂️', title: 'Paper Records', body: 'Scan and digitize patient folders, lab slips, prescription history, referral letters, and ward notes.' },
              { icon: '💻', title: 'Multiple EMRs', body: 'Connect OpenMRS, DHIS2, KenyaEMR, Epic, iClinic, and 20+ others simultaneously with zero duplication.' },
              { icon: '🔬', title: 'Lab & Diagnostic Data', body: 'Ingest PDF lab results, DICOM imaging, instrument printouts, and rapid test records from any facility.' },
            ].map((item, i) => (
              <div key={i} className="bg-[#0F172A] border border-white/10 rounded-2xl p-7 text-left hover:border-[#2DD4BF]/30 transition-colors">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" aria-label="How Kora Works — Ingest, Synthesize, Deliver" className="px-6 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto py-14">
          <p className="text-[#EAB308] text-sm font-semibold uppercase tracking-widest mb-4 text-center">How It Works</p>
          <h2 className="text-4xl font-bold text-white mb-16 text-center">From fragmented data to decision-ready intelligence in three steps.</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { step: '01', title: 'Ingest', body: 'Connect your existing EMRs, scan paper records, and upload data in any format — structured or unstructured, digital or handwritten, lab printouts or voice notes.', color: '#2DD4BF' },
              { step: '02', title: 'Synthesize', body: "Kora's engine normalizes, deduplicates, and structures all data into a unified patient record. AI extracts clinical concepts and links every data point back to its source.", color: '#F59E0B' },
              { step: '03', title: 'Deliver', body: 'Clinicians get decision-ready summaries. Population health teams get real-time dashboards. Ministries get automated DHIS2 and WHO reports — all with full audit trails.', color: '#8B5CF6' },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-8xl font-bold mb-4 select-none" style={{ color: item.color, opacity: 0.15 }}>{item.step}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.body}</p>
                {i < 2 && <div className="hidden md:block absolute top-10 -right-5 text-slate-700 text-3xl select-none">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMR PARTNERSHIP */}
      <section id="emr-partners" aria-label="EMR Partnership Program — Integrate Kora with Your Electronic Medical Records System" className="px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EAB308]/5 via-transparent to-[#2DD4BF]/5 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto py-14">
          <div className="text-center mb-16">
            <p className="text-[#EAB308] text-sm font-semibold uppercase tracking-widest mb-4">For EMR Vendors &amp; Health IT Partners</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-3xl mx-auto">
              Make your EMR the most powerful clinical platform in Africa.
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Kora plugs into your existing EMR as an intelligence layer — adding AI-powered data synthesis, population health, and offline capability without displacing a single workflow your clients depend on. Your EMR gets smarter. Your clients get better outcomes. You grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: '⚡',
                title: 'Supercharge Your Product',
                body: "Add cross-system data synthesis, AI clinical decision support, and real-time population dashboards to your EMR product suite — without building it yourself. Kora's API integrates in days, not months.",
              },
              {
                icon: '🔒',
                title: 'Deepen Client Retention',
                body: "Clients who see better outcomes stay longer. When Kora synthesizes the full patient record — including data from outside your EMR — your clients deliver higher-quality care and attribute that value to your platform.",
              },
              {
                icon: '🌍',
                title: 'Expand Your African Reach',
                body: "Kora's offline-first architecture and paper digitization capability extend your EMR into low-connectivity rural and semi-urban markets across Africa that cloud-dependent systems can't serve.",
              },
              {
                icon: '📈',
                title: 'New Revenue Streams',
                body: "Co-sell Kora's population health and government reporting modules alongside your EMR. Partners share in subscription revenue from district dashboards, DHIS2 reporting, and national health analytics.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#0F172A] border border-white/10 rounded-2xl p-7 hover:border-[#EAB308]/40 transition-all duration-200 group">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-[#EAB308] transition-colors">{item.title}</h3>
                <p className="text-slate-400 text-base leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">What EMR partners get</h3>
              <ul className="space-y-5">
                {[
                  { title: 'Bi-directional API integration', body: "Kora reads from and writes back to your EMR via HL7 FHIR, OpenMRS REST, DHIS2 API, or custom connectors — keeping your system the system of record." },
                  { title: 'Patient record enrichment at point of care', body: "When a patient opens in your EMR, Kora automatically surfaces synthesized records from every other facility they've visited — paper records included — directly in your UI." },
                  { title: 'Population health add-on module', body: "Offer your health-system clients real-time district dashboards and automated DHIS2/WHO reporting as a co-branded feature — powered by Kora's aggregation engine." },
                  { title: 'Zero infrastructure burden', body: "Kora runs on the client's existing hardware or Kora's cloud. No new servers, no new contracts for your clients to manage." },
                  { title: 'Shared implementation support', body: "Kora's clinical integration team works alongside your onboarding team at joint accounts — cutting time-to-value for clients without adding to your support load." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-[#EAB308] font-bold flex-shrink-0 mt-1">✓</span>
                    <div>
                      <div className="text-white font-semibold text-base mb-1">{item.title}</div>
                      <div className="text-slate-400 text-base leading-relaxed">{item.body}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-[#0F172A] border border-[#EAB308]/20 rounded-2xl p-8">
                <div className="text-xs text-[#EAB308] font-semibold mb-5 uppercase tracking-widest">How Kora Complements Your EMR</div>
                <div className="space-y-5">
                  {[
                    { you: 'Your EMR captures the encounter', kora: 'Kora brings in every prior record from any source' },
                    { you: 'Your EMR holds the structured data', kora: 'Kora digitizes paper records and adds them to the record' },
                    { you: 'Your EMR serves the facility', kora: 'Kora aggregates across all facilities into population intelligence' },
                    { you: 'Your EMR works online', kora: 'Kora keeps it working when connectivity fails' },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-2 gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                      <div>
                        <div className="text-[10px] text-slate-600 uppercase tracking-wider mb-1">Your EMR</div>
                        <div className="text-white text-sm">{row.you}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-[#2DD4BF]/60 uppercase tracking-wider mb-1">+ Kora</div>
                        <div className="text-[#2DD4BF] text-sm">{row.kora}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { metric: '20+', label: 'EMR systems already integrated' },
                  { metric: '< 1 wk', label: 'Typical API integration time' },
                  { metric: '0', label: 'Rip-and-replace required' },
                ].map((m, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                    <div className="text-2xl font-bold text-[#EAB308] mb-1">{m.metric}</div>
                    <div className="text-xs text-slate-500 leading-snug">{m.label}</div>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="block w-full bg-[#EAB308] text-[#0A1A2F] font-bold px-8 py-4 rounded-xl hover:bg-[#d4a800] transition-colors text-center"
              >
                Schedule a Demo →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTOR */}
      <section id="investors" aria-label="Investor Information — African Digital Health Market Opportunity" className="px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/8 via-transparent to-[#EAB308]/4 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto py-14">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left column — narrative */}
            <div>
              <p className="text-[#EAB308] text-sm font-semibold uppercase tracking-widest mb-4">For Investors</p>
              <h2 className="display-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">The infrastructure layer for African healthcare data.</h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Kora sits at the highest-value layer of the African health tech stack — the clinical data infrastructure that every EMR, diagnostic company, insurer, and ministry will depend on. Founded by a physician and clinical AI consultant with deep expertise in African health systems. Kora was designed and built collaboratively by physicians practicing domestically and abroad — bringing together frontline clinical insight from multiple healthcare environments to create the most comprehensive clinical intelligence system for Africa.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { metric: '$45B', label: 'African digital health market by 2030' },
                  { metric: '1.4B', label: 'People with fragmented or no digital health records' },
                  { metric: '54', label: 'Countries with critical health data infrastructure gaps' },
                ].map((m, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <div className="text-2xl font-bold text-[#2DD4BF] mb-1">{m.metric}</div>
                    <div className="text-xs text-slate-400 leading-snug">{m.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-[#2DD4BF] text-[#0A1A2F] font-bold px-8 py-4 rounded-xl hover:bg-[#1BBFA8] transition-colors text-center">Schedule a Demo</a>
                <a href="#contact" className="border border-white/20 text-white px-8 py-4 rounded-xl hover:bg-white/5 transition-colors text-center">Partner With Us</a>
              </div>
            </div>
            {/* Right column — Why Kora Wins */}
            <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-8 h-full">
              <h3 className="text-white font-bold text-xl mb-6">Why Kora Wins</h3>
              <div className="space-y-5">
                {[
                  { title: 'Offline-first architecture', body: 'Purpose-built for African connectivity realities — clinical AI runs entirely on-device, no cloud required.' },
                  { title: 'Paper + digital synthesis', body: 'No other platform synthesizes both paper and digital data at scale in Africa. This is the moat.' },
                  { title: 'Physician-built, physician-led', body: 'Designed collaboratively by physicians practicing domestically and abroad — comprehensive by design, not by assumption.' },
                  { title: 'Complementary to every EMR', body: 'Not a rip-and-replace play. Kora augments existing EMR investments, reducing sales friction and accelerating adoption.' },
                  { title: 'Dual revenue model', body: 'Clinic and health system subscriptions, plus government and donor revenue streams via population health and DHIS2 reporting.' },
                  { title: 'Proven GTM path', body: 'Private clinics → health systems → national ministries. Each stage funds the next and expands the data network effect.' },
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-[#2DD4BF] font-bold flex-shrink-0 mt-1">✓</span>
                    <div>
                      <div className="text-white font-semibold text-base mb-1">{point.title}</div>
                      <div className="text-slate-400 text-base leading-relaxed">{point.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" aria-label="Frequently Asked Questions about Kora Health" className="px-6 bg-[#0F172A]">
        <div className="max-w-3xl mx-auto py-14">
          <p className="text-[#EAB308] text-sm font-semibold uppercase tracking-widest mb-4 text-center">FAQ</p>
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Frequently asked.</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  aria-expanded={activeFaq === i}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-white font-semibold pr-4">{faq.q}</span>
                  <span className="text-[#2DD4BF] flex-shrink-0 text-xl font-light">{activeFaq === i ? '−' : '+'}</span>
                </button>
                <div className={`px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4 ${activeFaq !== i ? 'hidden' : ''}`}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" aria-label="Schedule a Demo with Kora Health" className="px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/8 via-transparent to-[#EAB308]/4 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto py-20">
          <div className="text-center mb-10">
            <p className="text-[#EAB308] text-sm font-semibold uppercase tracking-widest mb-4">Request a Demo</p>
            <h2 className="display-serif text-4xl md:text-5xl font-bold text-white mb-4">See what Kora looks like in your workflow.</h2>
            <p className="text-slate-400 text-lg">A 30-minute demo with our clinical team. Tell us a little about you and we&apos;ll be in touch.</p>
          </div>

          {formStatus === 'success' ? (
            <div className="bg-[#0F172A] border border-[#2DD4BF]/30 rounded-2xl p-10 text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-white mb-3">Thank you — request received.</h3>
              <p className="text-slate-400">Our team will reach out shortly. For anything urgent, email <a href="mailto:info@korahealthafrica.com" className="text-[#2DD4BF] hover:underline">info@korahealthafrica.com</a>.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#0F172A] border border-white/10 rounded-2xl p-8 space-y-5">
              {/* Honeypot (hidden from humans) */}
              <input
                type="text" name="company_website" tabIndex={-1} autoComplete="off"
                value={form.company_website} onChange={updateField}
                className="hidden" aria-hidden="true"
              />
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-slate-300 mb-2">Full name <span className="text-[#EAB308]">*</span></label>
                  <input id="name" name="name" required value={form.name} onChange={updateField}
                    className="w-full bg-[#0A1A2F] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:border-[#2DD4BF] focus:outline-none transition-colors" placeholder="Dr. Ada Okeke" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-slate-300 mb-2">Work email <span className="text-[#EAB308]">*</span></label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={updateField}
                    className="w-full bg-[#0A1A2F] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:border-[#2DD4BF] focus:outline-none transition-colors" placeholder="you@ministry.gov.ng" />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm text-slate-300 mb-2">Organization <span className="text-[#EAB308]">*</span></label>
                  <input id="organization" name="organization" required value={form.organization} onChange={updateField}
                    className="w-full bg-[#0A1A2F] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:border-[#2DD4BF] focus:outline-none transition-colors" placeholder="Federal Ministry of Health" />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm text-slate-300 mb-2">Role / Title</label>
                  <input id="role" name="role" value={form.role} onChange={updateField}
                    className="w-full bg-[#0A1A2F] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:border-[#2DD4BF] focus:outline-none transition-colors" placeholder="Director, Health Information" />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm text-slate-300 mb-2">Country</label>
                  <input id="country" name="country" value={form.country} onChange={updateField}
                    className="w-full bg-[#0A1A2F] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:border-[#2DD4BF] focus:outline-none transition-colors" placeholder="Nigeria" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm text-slate-300 mb-2">Phone</label>
                  <input id="phone" name="phone" value={form.phone} onChange={updateField}
                    className="w-full bg-[#0A1A2F] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:border-[#2DD4BF] focus:outline-none transition-colors" placeholder="+234 ..." />
                </div>
              </div>
              <div>
                <label htmlFor="interest" className="block text-sm text-slate-300 mb-2">I&apos;m reaching out as a…</label>
                <select id="interest" name="interest" value={form.interest} onChange={updateField}
                  className="w-full bg-[#0A1A2F] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#2DD4BF] focus:outline-none transition-colors">
                  <option value="">Select one</option>
                  <option>Government / Ministry of Health</option>
                  <option>NGO / Donor / Multilateral</option>
                  <option>Hospital / Health System</option>
                  <option>Clinic</option>
                  <option>EMR vendor / Health IT partner</option>
                  <option>Investor</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-slate-300 mb-2">What would you like to see?</label>
                <textarea id="message" name="message" rows={4} value={form.message} onChange={updateField}
                  className="w-full bg-[#0A1A2F] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:border-[#2DD4BF] focus:outline-none transition-colors resize-y" placeholder="Tell us about your facilities, population, or goals." />
              </div>

              {formStatus === 'error' && (
                <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">{formError}</div>
              )}

              <button type="submit" disabled={formStatus === 'submitting'}
                className="w-full bg-[#2DD4BF] text-[#0A1A2F] font-bold px-8 py-4 rounded-xl hover:bg-[#1BBFA8] transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                {formStatus === 'submitting' ? 'Sending…' : 'Request a Demo →'}
              </button>
              <p className="text-xs text-slate-600 text-center">We&apos;ll only use your details to respond to your request.</p>
            </form>
          )}
        </div>
      </section>

      </main>

      {/* FOOTER */}
      <footer aria-label="Kora Health site footer" className="bg-[#0F172A] border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <img src="/kora-logo-light.webp" alt="Kora Health" className="h-[120px] w-auto flex-shrink-0" />
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                Pulse Hub for Africa&apos;s Health Systems. Synthesizing fragmented patient data into decision-ready intelligence — online or offline.
              </p>
              <p className="text-[#EAB308]/60 text-xs mt-3 tracking-wide italic">Rooted in Africa. Built for outcomes.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Platform</h4>
              <ul className="space-y-2 text-slate-500 text-sm">
                <li><a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#population" className="hover:text-white transition-colors">Population Health</a></li>
                <li><a href="#use-cases" className="hover:text-white transition-colors">Use Cases</a></li>
                <li><a href="#emr-partners" className="hover:text-white transition-colors">EMR Partners</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Company</h4>
              <ul className="space-y-2 text-slate-500 text-sm">
                <li><a href="#investors" className="hover:text-white transition-colors">Investors</a></li>
                <li><a href="#emr-partners" className="hover:text-white transition-colors">Partners</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Schedule a Demo</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-slate-600 text-sm">© 2026 Kora Health. All rights reserved.</div>
            <div className="text-slate-600 text-sm italic">Rooted in Africa. Built for outcomes.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
