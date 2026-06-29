export default function LegalShell({
  title,
  lastUpdated,
  intro,
  children,
}: {
  title: string;
  lastUpdated: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0A1A2F] text-white flex flex-col">
      <header className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" aria-label="Kora Health home" className="flex items-center gap-3">
            <img src="/kora-mark.webp" alt="" aria-hidden="true" className="h-10 w-auto" />
            <div className="leading-none">
              <span className="display-serif text-2xl font-bold text-[#FAF5EB] align-middle">Kora</span>{' '}
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#EAB308] align-middle">Health</span>
            </div>
          </a>
          <a href="/" className="text-sm text-slate-400 hover:text-white transition-colors">← Back to site</a>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 py-14">
          <h1 className="display-serif text-4xl md:text-5xl font-bold text-white mb-3">{title}</h1>
          <p className="text-slate-500 text-sm mb-8">Last updated: {lastUpdated}</p>
          {intro && <p className="text-slate-300 text-lg leading-relaxed mb-10">{intro}</p>}

          <div className="space-y-5 text-slate-300 leading-relaxed
            [&_h2]:text-white [&_h2]:font-bold [&_h2]:text-xl [&_h2]:mt-10 [&_h2]:mb-3
            [&_h3]:text-white [&_h3]:font-semibold [&_h3]:text-lg [&_h3]:mt-6 [&_h3]:mb-2
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2
            [&_a]:text-[#2DD4BF] [&_a:hover]:underline
            [&_strong]:text-white">
            {children}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
            <a href="/privacy/" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms/" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/security/" className="hover:text-white transition-colors">Security &amp; Trust</a>
            <a href="mailto:info@korahealthafrica.com" className="hover:text-[#2DD4BF] transition-colors">info@korahealthafrica.com</a>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-6 text-slate-600 text-sm">© 2026 Kora Health. All rights reserved. · Rooted in Africa. Built for outcomes.</div>
      </footer>
    </div>
  );
}
