import { motion } from 'motion/react';
import { Shield, Users, Heart, ClipboardCheck, Scale, AlertCircle, Phone, Book } from 'lucide-react';
import Calendar from './Calendar';

export default function AccordDocument() {
  return (
    <div className="bg-accord-cream py-12 px-4 min-h-screen font-sans">
      <div className="doc-container max-w-[900px] shadow-2xl relative overflow-hidden">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

        {/* Header Metadata - Uniform Spaced Typography */}
        <div className="border-b border-slate-200 pb-8 mb-24 flex flex-col items-center gap-2">
          <div className="doc-header-meta text-slate-900 font-bold tracking-[0.4em] text-center leading-relaxed">
            Integrated Parenting Constitution — Harper June Elizabeth Ryan
          </div>
          <div className="flex flex-col items-center gap-1 opacity-60">
            <div className="doc-header-meta text-[9px] tracking-[0.2em]">FDSJ — 739 — 2024 · Court of King's Bench of New Brunswick</div>
            <div className="doc-header-meta text-[9px] tracking-[0.15em]">Family Division · Judicial District of Saint John</div>
          </div>
          <div className="doc-header-meta text-[9px] italic opacity-40 mt-1 tracking-normal font-serif">
            "11:11 was our wish. On 11.12 it came true."
          </div>
        </div>

        {/* Cover Section */}
        <section id="cover" className="text-center mb-40">
          <div className="flex justify-center mb-12">
            <Scale size={80} strokeWidth={1} className="text-accord-navy opacity-30" />
          </div>
          <div className="doc-header-meta mb-6 opacity-60 tracking-[0.3em]">Two Roofs · One Home · One Promise</div>
          <h1 className="font-serif text-[72px] md:text-8xl uppercase tracking-tighter leading-[0.85] mb-8 text-accord-navy">
            The <br /> 
            <span className="text-accord-gold italic font-medium">Standing</span> <br /> 
            Accord
          </h1>
          <div className="h-0.5 w-48 bg-accord-gold/30 mx-auto mb-8" />
          <div className="doc-header-meta text-lg italic text-slate-400 mb-12 font-serif lowercase tracking-widest">Integrated Parenting Constitution</div>
          
          <div className="doc-quote-box text-center border-l-0 border-y border-accord-border bg-transparent p-12 mb-20">
            "Two parents, standing face-to-face, see only conflict. <br />
            Two parents, standing back-to-back, see the threats <br />
            coming at their child. This document turns us around."
          </div>

          <div className="grid grid-cols-2 gap-y-6 text-left max-w-lg mx-auto border border-accord-border p-8 rounded-sm bg-accord-cream/30 mb-20">
            <div className="doc-header-meta">Child</div>
            <div className="font-medium">Harper June Elizabeth Ryan (born Nov 12, 2024)</div>
            <div className="doc-header-meta">Parents</div>
            <div className="font-medium">Emma Elizabeth Ryan & Craig Alexander Paul Schulz</div>
            <div className="doc-header-meta">Court File</div>
            <div className="font-mono tracking-widest text-xs">FDSJ-739-2024</div>
            <div className="doc-header-meta">Effective Date</div>
            <div className="font-medium underline decoration-accord-gold/30">May 4, 2026 — Phase 1 Commencement</div>
          </div>

          <div className="flex justify-between items-center max-w-lg mx-auto px-4 doc-header-meta text-[9px] opacity-40">
             <div className="flex flex-col gap-1 items-start">
               <div className="h-px w-32 bg-slate-400 mb-1" />
               <span>Signature of Mother</span>
             </div>
             <div className="flex flex-col gap-1 items-end">
               <div className="h-px w-32 bg-slate-400 mb-1" />
               <span>Signature of Father</span>
             </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section id="preliminary" className="page-break my-40">
          <div className="text-center uppercase tracking-widest text-[11px] mb-8 py-2 border-y border-accord-border">Contents</div>
          <h2 className="doc-section-title">Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-2xl mx-auto font-serif">
            {[
              { id: 'I', label: 'The Foundation' },
              { id: 'II', label: 'Custody & Residence' },
              { id: 'III', label: 'Parenting Time & Stability' },
              { id: 'IV', label: 'Transitions & Logistics' },
              { id: 'V', label: 'Safety & Verification' },
              { id: 'VI', label: 'Digital Wall Protocol' },
              { id: 'VII', label: 'Third-Party Boundaries' },
              { id: 'VIII', label: 'Decision-Making' },
              { id: 'IX', label: 'Financial Stewardship' },
              { id: 'X', label: 'Dispute Resolution' },
              { id: 'XI', label: 'Legacy, Amnesty & Trials' },
              { id: 'SUMMARY', label: 'The Cheat Sheets' },
              { id: 'APPENDICES', label: 'A through H' },
            ].map(part => (
              <div key={part.id} className="flex justify-between items-end group cursor-pointer border-b border-transparent hover:border-accord-gold/20 transition-all py-1">
                <span className="doc-header-meta text-accord-gold font-bold">Part {part.id}</span>
                <span className="text-sm text-right">{part.label}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-20">
            <span className="w-2 h-2 rounded-full bg-accord-gold/30" />
            <span className="w-2 h-2 rounded-full bg-accord-gold/60" />
            <span className="w-2 h-2 rounded-full bg-accord-gold/30" />
          </div>
        </section>

        {/* Part I: The Foundation */}
        <section id="part1" className="page-break my-40">
          <div className="doc-header-meta text-center mb-4 uppercase">Part I</div>
          <h2 className="doc-section-title text-5xl">The Foundation</h2>
          <h3 className="doc-article-title">Article 1.1 — Preamble and Purpose</h3>
          <p className="leading-relaxed mb-8 text-[15px]">
            <span className="italic font-serif font-bold text-accord-navy text-lg block mb-4 underline decoration-accord-gold/30 underline-offset-8">Harper's Standard — Not Fine. Incredible.</span> 
            Harper June Elizabeth Ryan does not get "fine." She does not get "adequate." She does not get the bare minimum that the system considers acceptable. The standard this Constitution sets for her life is not stability. It is incredible — because that is what she is, and she has earned nothing less.
          </p>
          <div className="space-y-6 mb-12">
            {[
              "Know both her parents as whole, capable, loving humans — not as adversaries she was caught between.",
              "Wake up every morning knowing exactly where she stands and who is in her corner.",
              "Have her faith, her routines, her people, and her sense of home protected — across both households.",
              "See her parents standing back-to-back at every moment that matters to her.",
              "Never be used as a message, a weapon, a witness, or a bargaining chip again."
            ].map((right, i) => (
              <div key={i} className="flex gap-4 items-start bg-slate-50/50 p-4 border-l border-accord-gold/30">
                <Scale size={16} className="text-accord-gold shrink-0 mt-1" />
                <p className="text-sm font-medium italic text-slate-700">{right}</p>
              </div>
            ))}
          </div>

          <h3 className="doc-article-title">Article 1.2 — Statement of Shared Intent</h3>
          <p className="text-sm leading-relaxed mb-8">
            The parents enter into this Agreement with the shared understanding that the era of adversarial litigation must immediately conclude for the benefit of the child. Both parties agree to completely pivot toward a cooperative, forward-looking dynamic.
          </p>

          <h3 className="doc-article-title">Article 1.3 — The "Circle of Two" Protocol (Parental Primacy)</h3>
          <p className="text-sm leading-relaxed mb-6">
            The operational authority, legal right, and day-to-day obligation to raise Harper belong strictly, equally, and exclusively to Craig Alexander Paul Schulz and Emma Elizabeth Ryan. While extended families on both sides are deeply loved, welcome, and valued components of Harper’s support system, they possess zero operational governance.
          </p>
          <div className="bg-accord-navy text-white p-6 font-serif italic text-sm border-l-4 border-accord-gold">
            "All operational authority is concentrated within the parents' 'Circle of Two.' If conflict arises involving extended family dynamics, that conflict is shielded from Harper and resolved strictly between Mom and Dad."
          </div>
        </section>

        {/* Part II: Custody & Decision-Making Architecture */}
        <section id="part2" className="page-break my-40">
          <div className="doc-header-meta text-center mb-4 uppercase">Part II</div>
          <h2 className="doc-section-title text-5xl">Custody & Decision-Making Architecture</h2>
          <h3 className="doc-article-title">Article 2.1 — Parallel Decision-Making Allocation</h3>
          <p className="mb-8 text-sm leading-relaxed">
            To minimize gridlock, ensure rapid execution of care, and prevent logistical disputes, parental authority is structurally allocated. While Harper lives under a Shared Parenting regime, the day-to-day administrative portfolio is divided by specialty.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="border border-accord-border p-6 rounded-sm bg-blue-50/30">
              <div className="doc-header-meta text-blue-900 border-b border-blue-100 pb-2 mb-4 uppercase text-[9px]">Paternal Portfolio: Lead Administrative Authority</div>
              <ul className="space-y-3 text-[11px] font-semibold text-blue-950">
                <li className="flex gap-2"><span>▸</span> Primary healthcare & pharmacological care</li>
                <li className="flex gap-2"><span>▸</span> Selection of GPs, specialists, & dental professionals</li>
                <li className="flex gap-2"><span>▸</span> Long-term financial stewardship (RESP, Trust)</li>
                <li className="flex gap-2"><span>▸</span> International travel & passports</li>
              </ul>
            </div>
            <div className="border border-accord-border p-6 rounded-sm bg-pink-50/30">
              <div className="doc-header-meta text-pink-900 border-b border-pink-100 pb-2 mb-4 uppercase text-[9px]">Maternal Portfolio: Lead Administrative Authority</div>
              <ul className="space-y-3 text-[11px] font-semibold text-pink-950">
                <li className="flex gap-2"><span>▸</span> Formal educational enrollments & scholastic pathfinding</li>
                <li className="flex gap-2"><span>▸</span> Primary extracurricular & enrichment enrollments</li>
                <li className="flex gap-2"><span>▸</span> Lifestyle formatting (haircuts, daily aesthetics)</li>
                <li className="flex gap-2"><span>▸</span> Cultural programming during her parenting blocks</li>
              </ul>
            </div>
          </div>

          <h3 className="doc-article-title">Article 2.2 — Information Sharing and Unfettered Access</h3>
          <p className="text-xs leading-relaxed mb-6 italic text-slate-500">
            Specialized decision-making reduces conflict, but it requires radical communication. The decision-making parent is mandated to inform the non-decision-making parent of any major milestone, appointment, or alteration within 48 hours utilizing the mandated application.
          </p>
          <div className="bg-slate-50 p-6 border border-slate-200 text-sm">
            Neither parent may disconnect the other from institutional tracking mechanisms. Both parents explicitly hold independent, unfettered access to Harper's digital medical charts, healthcare portals, and educational correspondence files.
          </div>

          <h3 className="doc-article-title">Article 2.3 — Habitual Residence Protections</h3>
          <p className="text-sm leading-relaxed">
            Harper’s permanent country of habitual residence remains Canada, localized specifically within the greater jurisdiction of Saint John, New Brunswick. Under no condition shall either parent relocate Harper’s primary living base in excess of a 50-kilometer radius without comprehensive written agreement through the application or formal authorization via the Dispute Resolution mechanisms.
          </p>
        </section>

        {/* Part III: Parenting Time & Stability */}
        <section id="part3" className="page-break my-40">
          <div className="doc-header-meta text-center mb-4 uppercase">Part III</div>
          <h2 className="doc-section-title text-5xl">Parenting Time & Stability</h2>
          <h3 className="doc-article-title">Article 3.1 — Foundational Maximization of Contact</h3>
          <p className="text-sm italic mb-8">
            Parenting time belongs to the child, governed exclusively by Harper’s biological need to establish continuous attachment cycles to both her mother and her father without triggering long separation anxieties.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-slate-50 p-4 border border-slate-100">
              <div className="doc-header-meta mb-2 uppercase text-[9px]">Phase 1: The Gentle Transition</div>
              <div className="text-[10px] font-bold uppercase mb-1">Weeks 1-4</div>
              <p className="text-[10px] text-slate-500 leading-tight">Father's primary residence, accommodating daytime acclimatization and increasing overnight contacts for the Mother.</p>
            </div>
            <div className="bg-slate-50 p-4 border border-slate-100">
              <div className="doc-header-meta mb-2 uppercase text-[9px]">Phase 2: Mid-Term Rhythm</div>
              <div className="text-[10px] font-bold uppercase mb-1">Weeks 5-12</div>
              <p className="text-[10px] text-slate-500 leading-tight">Establishing a rapid 3-3-3 schedule specifically mapped to Harper's capacity to adjust.</p>
            </div>
            <div className="bg-slate-50 p-4 border border-slate-100 border-accord-gold shadow-sm">
              <div className="doc-header-meta mb-2 text-accord-gold font-bold uppercase text-[9px]">Phase 3: Permanent Rotation</div>
              <div className="text-[10px] font-bold uppercase mb-1 underline decoration-accord-gold/30 underline-offset-4">3-3-3-3 Loop</div>
              <p className="text-[10px] text-slate-500 leading-tight">Full 50/50 balance loop (Mon-Wed Father, Thu-Sat Mother, Rotating Sundays).</p>
            </div>
          </div>

          <h3 className="doc-article-title">Article 3.4 — The Maternal Milestone Gift & Priority Holidays</h3>
          <div className="doc-quote-box mb-12 italic bg-white border-accord-gold/20 text-center text-sm font-serif leading-relaxed">
            "Christmas Eve & Christmas Day, Mother's Day, Emma's Birthday, and Harper's (Nov 12) Birthday shall belong exclusively to the Mother every single year."
          </div>

          <div className="doc-header-meta mb-8 uppercase text-center tracking-widest bg-slate-50 py-2">Provisional 2026 Rotation Schedule</div>
          <Calendar />
        </section>

        {/* Part IV: Transitions & Logistics */}
        <section id="part4" className="page-break my-40">
          <div className="doc-header-meta text-center mb-4 uppercase">Part IV</div>
          <h2 className="doc-section-title text-5xl">Transitions & Logistics</h2>
          <h3 className="doc-article-title">Article 4.1 — The Mandatory Delivery Matrix (Drop-Off Standard)</h3>
          <p className="text-sm leading-relaxed mb-8">
            Transportation responsibilities define co-parenting peace. All routine handovers proceed unilaterally via a standardized Drop-Off requirement. The Parent successfully concluding their authorized custodial timeline carries the strict operational mandate to execute secure vehicle transit delivering Harper cleanly to the initiating parent's primary designated threshold.
          </p>
          <div className="bg-accord-navy text-white p-6 font-mono text-[11px] uppercase tracking-widest text-center border-l-4 border-accord-gold mb-12">
            You drive when your time ends; you never wait.
          </div>

          <h3 className="doc-article-title">Article 4.2 — Parent-Only Curbside Implementation</h3>
          <p className="text-sm leading-relaxed mb-6 font-serif italic text-slate-500">
            Intersections between households represent the peak exposure window for residual tension. Consequently, the Parent-Only standard governs unconditionally:
          </p>
          <ul className="space-y-4 text-[13px] font-medium mb-12">
            <li className="flex gap-3 bg-slate-50 p-4 border-l border-accord-gold/20 italic">
              <Users size={16} className="text-accord-gold shrink-0 mt-0.5" />
              <span>Only the Mother, the Father, or a neutral licensed courier may occupy the visual perimeter during any child exchange.</span>
            </li>
            <li className="flex gap-3 bg-slate-50 p-4 border-l border-accord-gold/20 italic">
              <Shield size={16} className="text-accord-gold shrink-0 mt-0.5" />
              <span>Zero outside extended relatives (Grandparents), romantic associations, or friends may appear at the boundary.</span>
            </li>
            <li className="flex gap-3 bg-slate-50 p-4 border-l border-accord-gold/20 italic">
              <Phone size={16} className="text-accord-gold shrink-0 mt-0.5" />
              <span>No logistical debates shall occur within physical proximity to Harper at the door. Briefings belong to OFW exclusively.</span>
            </li>
          </ul>

          <h4 className="doc-header-meta mb-4 uppercase tracking-[0.2em] text-[10px]">Article 4.4 — The Licensed Transit & High-Duty of Care Standard</h4>
          <div className="bg-slate-50 p-8 border border-slate-100 rounded-sm">
            <ul className="space-y-4 text-xs italic leading-relaxed text-slate-700">
              <li className="flex gap-2"><span>•</span> <span className="font-bold text-slate-900 not-italic">Independent Transit Responsibility:</span> The Mother is responsible for providing her own transportation to the Father's residence for all designated access periods, arriving and departing punctually without paternal facilitation.</li>
              <li className="flex gap-2"><span>•</span> <span className="font-bold text-slate-900 not-italic">Authorized Professional Transit:</span> The Father is fully authorized to utilize professional transit services (including taxis, ride-shares, or designated, licensed third-party family members) for medical or logistical needs.</li>
              <li className="flex gap-2"><span>•</span> <span className="font-bold text-slate-900 not-italic">Prohibition on Logistical Sabotage:</span> Neither party shall propose or demand access schedules designed to exploit the other parent's logistical limitations. Any use of transportation as a barrier to parenting time shall be viewed as a material breach.</li>
              <li className="flex gap-2"><span>•</span> <span className="font-bold text-slate-900 not-italic">The Professional Support Baseline:</span> The Father's household utilizes professional Personal Support Worker (PSW) care during standard daytime hours, satisfying requirements for additional supervision or third-party monitoring during his parenting time.</li>
            </ul>
          </div>
        </section>

        {/* Part V: Safety & Verification */}
        <section id="part5" className="page-break my-40">
          <div className="doc-header-meta text-center mb-4 uppercase">Part V</div>
          <h2 className="doc-section-title text-5xl text-red-950">Safety & Verification</h2>
          <h3 className="doc-article-title border-red-100">Article 5.1 — The Absolute Zero Impairment Standard</h3>
          <p className="text-sm leading-relaxed mb-8 font-medium text-red-900/80">
            Safeguarding Harper establishes the primary obligation of both custodians. The physiological environment housing Harper must hold definitive boundaries to protect unencumbered shared custody:
          </p>
          <div className="space-y-6 mb-12">
            <div className="bg-red-50/50 p-8 border-l-4 border-red-500 italic text-sm text-red-900 font-serif leading-relaxed">
              <span className="font-bold block mb-2 not-italic underline uppercase tracking-tighter">5.2 b — The Sobriety Requirement</span>
              The parent shall not be left alone with Harper or provide care for Harper if they are under the influence of alcohol or non-prescribed drugs. The standard for impairment shall be equivalent to the legal standard for operating a motor vehicle. If a parent is unable to be sober and provide care for Harper, they must immediately notify the other parent to arrange for Harper's transfer. While this restriction applies only to the parents' conduct, both parents commit to maintaining a safe and sober environment for Harper.
            </div>
          </div>

          <h3 className="doc-article-title border-red-100">Article 5.3 — OurFamilyWizard Transparency</h3>
          <div className="bg-slate-50 p-8 border border-slate-200 text-xs italic leading-relaxed text-slate-700">
            <span className="font-bold block mb-2 not-italic underline uppercase tracking-tighter">5.6 — Documentation and Accountability</span>
            The parties shall utilize the documentation and logging features of OurFamilyWizard (OFW), including login history, message timestamps (sent and read receipts), and documented call activity to maintain a transparent and comprehensive court-admissible source of truth regarding all parental communications and application usage.
          </div>
        </section>

        {/* Part VI: Digital Wall Protocol */}
        <section id="part6" className="page-break my-40">
          <div className="doc-header-meta text-center mb-4 uppercase">Part VI</div>
          <h2 className="doc-section-title text-5xl">Digital Wall Protocol</h2>
          <h3 className="doc-article-title">Article 6.1 — Universal Communication Shield</h3>
          <p className="text-sm leading-relaxed mb-8">
            Absolutely every solitary update, request, alteration inquiry, photo share, or timeline discussion transfers functionally behind OurFamilyWizard (OFW) encryption firewalls exclusively. Voice dials or SMS texts trigger only referencing Level One Medical Hospital deployments requiring urgent reaction vectors.
          </p>
          <div className="bg-accord-gold/10 p-6 border-y border-accord-gold/20 text-center mb-12 italic text-sm text-accord-navy font-semibold">
            (The Father unconditionally absorbs overarching administrative costs mapping toward full-tier OFW memberships for both parents).
          </div>

          <h3 className="doc-article-title">Article 6.2 — Evening Baseline Certification (The Wellness Handshake)</h3>
          <p className="text-sm leading-relaxed mb-6 font-serif italic text-slate-500">
            Because Harper transitions actively bridging disconnected adult calendars, a standardized digital summary effectively diminishes unnecessary psychological concern. During turnover phases, custodians verify normal systemic operational baselines:
          </p>
          <div className="bg-slate-50 p-8 border border-slate-200 italic font-serif text-sm border-l-4 border-accord-gold">
            <span className="text-accord-gold font-bold uppercase tracking-widest block mb-2 text-xs">Standardized Brief:</span>
            "Harper engaged standard routines, eating successfully, ambient temperature holds positive, displaying high vocal energies, currently asleep."
          </div>
        </section>

        {/* Part VII: Third-Party Boundaries */}
        <section id="part7" className="page-break my-40">
          <div className="doc-header-meta text-center mb-4 uppercase">Part VII</div>
          <h2 className="doc-section-title text-5xl">Third-Party Boundaries</h2>
          <h3 className="doc-article-title">Article 7.1 — Standard Baseline Civility Protocol</h3>
          <p className="text-sm leading-relaxed mb-8 font-serif italic">
            Harper's overall developmental environment absorbs conversational discord incredible actively. Extended family attendance at Harper’s milestones is a privilege contingent on exhibiting perfect, un-escalated social courtesy ("Common Manners") when interacting in Harper's sightline.
          </p>
          <div className="doc-quote-box text-center bg-transparent border-y border-accord-border p-12 italic text-lg leading-loose font-serif">
            "We are the Gatekeepers of her Peace. We hold direct accountability for enforcing this standard among our respective families."
          </div>
        </section>

        {/* Part VIII: Decision-Making Operations */}
        <section id="part8" className="page-break my-40">
          <div className="doc-header-meta text-center mb-4 uppercase">Part VIII</div>
          <h2 className="doc-section-title text-5xl">Decision-Making Operations</h2>
          <h3 className="doc-article-title">Article 8.1 — Rapid Healthcare Alignment</h3>
          <p className="text-sm leading-relaxed mb-8 italic">
            Eliminating procedural delay protects Harper above generalized ego dynamics. One dedicated clinical controller navigates direct vaccination and therapeutic tracking pipelines uninhibited by administrative friction.
          </p>
          <div className="bg-blue-50/50 p-6 border-l-4 border-blue-200 mb-12">
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-900 mb-2">Clinical Mandate</h4>
            <p className="text-xs text-blue-800">The Father maintains the singular clinical dossier, ensuring medical consistency across all providers (Article 2.1 Ref).</p>
          </div>

          <h3 className="doc-article-title text-pink-900 border-pink-100">Article 8.2 — Forward Academic Positioning</h3>
          <p className="text-sm leading-relaxed mb-8 italic">
            Assigning educational selections and foundational scholastic timelines natively alongside the designated operational mother profile cleanly removes internal dispute formats regarding developmental schooling matrices.
          </p>
          <div className="bg-pink-50/50 p-6 border-l-4 border-pink-200">
            <h4 className="text-xs font-bold uppercase tracking-widest text-pink-900 mb-2">Scholastic Mandate</h4>
            <p className="text-xs text-pink-800">The Mother maintains lead decision-making over all academic pathfinding and primary school selection (Article 2.1 Ref).</p>
          </div>
        </section>

        {/* Part IX: Financial Stewardship */}
        <section id="part9" className="page-break my-40">
          <div className="doc-header-meta text-center mb-4 uppercase">Part IX</div>
          <h2 className="doc-section-title text-5xl">Financial Stewardship</h2>
          
          <h3 className="doc-article-title scale-x-105 origin-left">Article 9.1 — The 90-Day Administrative Stabilization Period</h3>
          <p className="text-sm leading-relaxed mb-8">
            To ensure that all long-term financial calculations are based on a verified and stable baseline, both parents agree to a <span className="font-bold text-accord-navy">90-day Administrative Stay</span> on the finalization of child support amounts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-50 p-6 border-l border-accord-gold">
              <span className="font-bold text-[10px] uppercase tracking-widest block mb-2 text-accord-gold">Purpose</span>
              <p className="text-xs italic">This window allows for the resolution of pending third-party administrative applications (WorkSafeNB and related disability filings) which will dictate the permanent fiscal baseline for the Father’s household.</p>
            </div>
            <div className="bg-slate-50 p-6 border-l border-accord-gold">
              <span className="font-bold text-[10px] uppercase tracking-widest block mb-2 text-accord-gold">Interim Status Quo</span>
              <p className="text-xs italic">During this 90-day period, the "Status Quo" of daily residency and logistical support shall be maintained without the triggering of new financial liabilities or accrual of arrears.</p>
            </div>
          </div>

          <h3 className="doc-article-title">Article 9.2 — Correction of Clerical Error (January 2025)</h3>
          <p className="text-sm leading-relaxed mb-8 italic text-slate-600">
            The parties acknowledge that the "Child Support" designation appearing on initial court filings in January 2025 was a clerical artifact resulting from administrative duplication and does not reflect the Father's intent or the actual needs of the child at that time. By signing this Accord, both parties agree that <span className="font-bold text-accord-navy">any prior claims or "snowballed" arrears originating from that specific clerical error are hereby voided, withdrawn, and permanently expunged from the record.</span>
          </p>

          <h3 className="doc-article-title">Article 9.3 — Unilateral Waiver of Maternal Financial Disclosure</h3>
          <p className="text-sm leading-relaxed mb-6 font-medium">
            In the interest of Harper’s immediate peace and to prevent the unnecessary intrusion of legal discovery into the Mother's household, the Father formally and irrevocably <span className="text-red-700">waives all rights back-dated to Feb 2024</span> to the Mother’s financial disclosure:
          </p>
          <div className="space-y-4 mb-12">
            <div className="flex gap-4 items-start bg-blue-50/50 p-6 border-l-4 border-blue-200">
              <ClipboardCheck size={20} className="text-blue-600 shrink-0" />
              <div>
                <span className="font-bold text-xs uppercase tracking-widest text-blue-900 block mb-1">The Paternal Gift</span>
                <p className="text-xs text-blue-800 leading-relaxed italic">The Mother is hereby relieved of any obligation to provide T1 Generals, Notices of Assessment, bank statements, or proof of income to the Father or the Court for the purpose of this proceeding.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-blue-50/50 p-6 border-l-4 border-blue-200">
              <Shield size={20} className="text-blue-600 shrink-0" />
              <div>
                <span className="font-bold text-xs uppercase tracking-widest text-blue-900 block mb-1">Third-Party Non-Interference</span>
                <p className="text-xs text-blue-800 leading-relaxed italic">The Father explicitly declines to investigate or involve third-party financial entities, powers of attorney, or external associations connected to the Mother’s residence. This "Privacy Shield" is established to protect the Mother's domain from litigation bleed-off.</p>
              </div>
            </div>
          </div>

          <h3 className="doc-article-title">Article 9.4 — Paternal Transparency Standard</h3>
          <p className="text-sm leading-relaxed mb-8">
            While the Mother is relieved of disclosure, the Father shall maintain a <span className="font-bold">100% transparency standard</span> regarding his finalized WorkSafeNB or disability status for the sole purpose of setting the "Harper Baseline." This disclosure is unilateral and does not trigger a requirement for the Mother to respond with her own financials.
          </p>

          <h3 className="doc-article-title">Article 9.5 — Section 7 (Extraordinary Expense) Framework</h3>
          <p className="text-sm leading-relaxed mb-8">
            Neither parent shall commit Harper to a financial obligation (e.g., high-cost extracurriculars) without a <span className="font-bold">48-hour digital consent window</span> via OurFamilyWizard. Costs for approved medical, dental, or educational expenses exceeding the defined threshold shall be cost-shared proportionally or paid directly to the provider.
          </p>

          <h3 className="doc-article-title">Article 9.6 — The "One Truth" Financial Amnesty</h3>
          <div className="bg-accord-gold p-8 text-accord-navy font-bold text-center uppercase tracking-[0.2em] shadow-xl text-xs rounded-sm">
            This Part IX serves as a permanent release. Historical financial disputes—including the 2025 clerical error—shall never be resurrected so long as material compliance with this Accord is maintained.
          </div>
        </section>

        {/* Part X: Dispute Resolution & Enforcement */}
        <section id="part10" className="page-break my-40">
          <div className="doc-header-meta text-center mb-4 uppercase">Part X</div>
          <h2 className="doc-section-title text-5xl">Dispute Resolution & Enforcement</h2>
          <h3 className="doc-article-title border-red-100">Article 10.1 — Pre-Litigation Diversion Sequences</h3>
          <p className="text-sm leading-relaxed mb-8">
            Children absorb the ambient trauma of ongoing family litigation, which actively degrades their baseline security. This framework expressly blocks arbitrary returns to Court. When interpretational disputes or scheduling conflicts arise, they are subject to strict diversion protocols:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50/50 p-6 border-l-2 border-red-500">
              <span className="font-bold text-red-900 text-xs block mb-2 underline tracking-widest uppercase">The 48-Hour Shield</span>
              <p className="text-xs text-red-800 italic">All disputes must first undergo a 48-hour digital negotiation cooling period using respectful, de-escalated language exclusively via the mandated communication portal.</p>
            </div>
            <div className="bg-red-50/50 p-6 border-l-2 border-red-500">
              <span className="font-bold text-red-900 text-xs block mb-2 underline tracking-widest uppercase">Arbitration Trigger</span>
              <p className="text-xs text-red-800 italic">If unresolved, the matter is automatically referred to a mutually retained, out-of-province Parenting Coordinator (MSW or equivalent clinical authority). This Coordinator holds binding authority to issue rapid, logistical resolutions, bypassing the financial and psychological drain of standard family court litigation.</p>
            </div>
          </div>

          <h3 className="doc-article-title border-red-200">Article 10.2 — Emotional Integrity (The Anti-Alienation Commandment)</h3>
          <p className="text-sm font-semibold text-red-900/80 leading-relaxed italic border border-red-100 p-8 rounded-sm bg-red-50/20">
            Both parents are bound by an absolute mandate to protect Harper’s emotional sanctuary. Neither parent shall degrade, demean, interrogate, or emotionally weaponize the child against the other household. Harper holds the fundamental right to an environment entirely free from critical terminology targeting an absent parent. Any violation of this standard, including the use of Harper as a messenger or exposing her to adult conflicts, constitutes a material breach of this Constitution and warrants immediate referral for therapeutic intervention or supervised step-down measures.
          </p>
        </section>

        {/* Part XI: Legacy & The Mutual Amnesty Declaration */}
        <section id="part11" className="page-break my-40">
          <div className="doc-header-meta text-center mb-4 uppercase">Part XI</div>
          <h2 className="doc-section-title text-5xl text-accord-gold text-right">Legacy & Amnesty</h2>
          <h3 className="doc-article-title border-accord-gold/20">Article 11.1 — The Mutual Clean Slate & Litigation Waiver</h3>
          <p className="text-sm leading-relaxed mb-8 font-medium italic text-slate-500">
            Building a secure future for Harper requires the complete dismantling of lingering systemic hostilities. True co-parenting cannot coexist with the perpetual threat of financial or legal retaliation from the past. 
          </p>
          <div className="bg-accord-navy p-10 text-white rounded-sm text-[13px] leading-relaxed italic border-l-8 border-accord-gold mb-16 shadow-lg text-justify">
            <span className="font-bold uppercase tracking-widest block mb-4 text-accord-gold">The Formal Provision:</span>
            Effective precisely upon the judicial endorsement and full execution of this Integrated Parenting Constitution, both parties definitively and fully execute a comprehensive, binding mutual release. This release abandons and permanently waives all pursuit of any civil claims, costs, damages, or financial liabilities—including all anticipated trial costs and legal fees—relative to the prior era of conflict. The timeline resets to zero, terminating all active and potential litigation indefinitely, ensuring all preserved family resources are redirected exclusively toward Harper’s welfare and future stability.
          </div>
          
          <h3 className="doc-article-title border-accord-gold/20">Article 11.2 — Evidentiary Expungement (The Quiet Restart)</h3>
          <p className="text-sm leading-relaxed mb-12">
            To provide both households with the relational safety required to generate genuine trust, the public footprint of past conflicts must be sanitized. Both parents jointly consent to petition the Court to formally seal all prior interim affidavits, urgent motions, and targeted operational filings. This ensures Harper is permanently protected from future exposure to historical adult conflicts through the public record.
          </p>

          <h3 className="doc-article-title border-accord-gold/20">Article 11.3 — Trial Avoidance & Economic Realignment</h3>
          <p className="text-sm leading-relaxed mb-12 italic text-slate-600">
            The parents acknowledge that the rejection of this comprehensive Accord would likely necessitate a full trial, with projected legal and clinical costs exceeding ten times the currently anticipated baseline. The execution of this Constitution serves as a definitive economic and psychological stop-loss, preserving family resources for Harper's benefit that would otherwise be permanently lost to fees and adversarial litigation.
          </p>

          <div className="bg-accord-navy p-12 text-white rounded-lg shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accord-gold/10 rounded-full -mr-16 -mt-16" />
            <h4 className="font-serif italic text-2xl mb-8 text-accord-gold">Article 11.4 — The Architects' Final Vow (For Harper)</h4>
            <div className="space-y-6 font-serif italic text-lg opacity-90 leading-relaxed">
              <p>Harper, by the time you read this, you will have questions about why your childhood looked the way it did. This document was created to protect you — and to protect your mother, and your father.</p>
              <p>We learned that fighting each other only made strangers powerful. Standing back-to-back made us unstoppable. We forgave our past, laid down the armor, and ended the litigation because you deserved a childhood that wasn't raised in a courtroom.</p>
              <p className="pt-8 text-right text-accord-gold font-bold">All our love, <br /> Mom & Dad</p>
            </div>
          </div>
        </section>

        {/* Summary Architecture: The Harper Cheat Sheets */}
        <section id="summary" className="page-break my-40">
          <div className="doc-header-meta text-center mb-4 uppercase">Summary Architecture</div>
          <h2 className="doc-section-title text-5xl text-center mb-12">The Harper Cheat Sheets</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest border-b-2 border-accord-gold pb-2 mb-6 text-accord-navy">I. The Core Protocols</h3>
              <div className="grid grid-cols-3 gap-1 bg-accord-navy p-px border border-accord-navy rounded-sm overflow-hidden text-[10px] uppercase tracking-tighter">
                <div className="bg-slate-100 p-3 font-bold">Component</div>
                <div className="bg-slate-100 p-3 font-bold">Standard</div>
                <div className="bg-slate-100 p-3 font-bold">Requirement</div>
                
                <div className="bg-white p-3 font-medium">Schedule Phase 1</div>
                <div className="bg-white p-3 truncate italic">Gentle Step-Up (4 Weeks)</div>
                <div className="bg-white p-3">Graduated to 2 overnights</div>
                
                <div className="bg-white p-3 font-medium">Schedule Phase 2</div>
                <div className="bg-white p-3 truncate italic">3-3-3 Rotation</div>
                <div className="bg-white p-3">Infant acclimatization</div>
                
                <div className="bg-white p-3 font-medium">Schedule Phase 3</div>
                <div className="bg-white p-3 truncate italic">5-5-5-5 Rotation</div>
                <div className="bg-white p-3">Joint Custody Stability Phase</div>
                
                <div className="bg-white p-3 font-medium">Digital Wall</div>
                <div className="bg-white p-3 truncate italic">OurFamilyWizard (OFW)</div>
                <div className="bg-white p-3">Father pays 100% of "Essentials"</div>
                
                <div className="bg-white p-3 font-medium">Transitions</div>
                <div className="bg-white p-3 truncate italic">Curbside at Residence</div>
                <div className="bg-white p-3">100% Civil, no adult conflict</div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest border-b-2 border-accord-gold pb-2 mb-6 text-accord-navy">II. Decision-Making Architecture</h3>
              <div className="grid grid-cols-3 gap-1 bg-accord-navy p-px border border-accord-navy rounded-sm overflow-hidden text-[10px] uppercase tracking-tighter">
                <div className="bg-slate-100 p-3 font-bold">Domain</div>
                <div className="bg-slate-100 p-3 font-bold">Authority</div>
                <div className="bg-slate-100 p-3 font-bold">Requirement</div>
                
                <div className="bg-white p-3 font-medium">Medical / Dental</div>
                <div className="bg-white p-3 text-blue-900 font-bold border border-blue-100 bg-blue-50/50">Father (Sole)</div>
                <div className="bg-white p-3 italic">48-Hour Notice to Mother</div>
                
                <div className="bg-white p-3 font-medium">Education</div>
                <div className="bg-white p-3 text-pink-900 font-bold border border-pink-100 bg-pink-50/50">Mother (Sole)</div>
                <div className="bg-white p-3 italic">Mother holds final authority</div>
                
                <div className="bg-white p-3 font-medium">Daily Lifestyle</div>
                <div className="bg-white p-3 text-pink-900 font-bold border border-pink-100 bg-pink-50/50">Mother (Lead)</div>
                <div className="bg-white p-3 italic">During her parenting time</div>
                
                <div className="bg-white p-3 font-medium">Financial</div>
                <div className="bg-white p-3 text-blue-900 font-bold border border-blue-100 bg-blue-50/50">Father (Lead)</div>
                <div className="bg-white p-3 italic text-blue-800">100% Maternal Waiver active</div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest border-b-2 border-accord-gold pb-2 mb-6 text-accord-navy">III. The Peace Dividend & Legacy</h3>
              <div className="grid grid-cols-3 gap-1 bg-accord-navy p-px border border-accord-navy rounded-sm overflow-hidden text-[10px] uppercase tracking-tighter">
                <div className="bg-slate-100 p-3 font-bold">Incentive</div>
                <div className="bg-slate-100 p-3 font-bold">Requirement</div>
                <div className="bg-slate-100 p-3 font-bold">Reward</div>
                
                <div className="bg-white p-3 font-medium">The Sunrise Clause</div>
                <div className="bg-white p-3 italic">Ongoing peaceful co-parenting</div>
                <div className="bg-white p-3 font-bold text-accord-gold">Pathway to Shared Governance</div>
                
                <div className="bg-white p-3 font-medium">The Trial Avoidance Provision</div>
                <div className="bg-white p-3 italic text-red-700 font-bold">Cessation of litigation</div>
                <div className="bg-white p-3 font-bold text-accord-gold uppercase tracking-tighter">Mutual Release & Economic Stop-Loss</div>
                
                <div className="bg-white p-3 font-medium">The 2026 Reset</div>
                <div className="bg-white p-3 italic">Execution of this Accord</div>
                <div className="bg-white p-3 font-bold text-accord-gold uppercase tracking-tighter">Baseline for Harper's Stability</div>
                
                <div className="bg-white p-3 font-medium">The Quiet Restart</div>
                <div className="bg-white p-3 italic">Continued compliance</div>
                <div className="bg-white p-3 font-bold text-accord-gold uppercase tracking-tighter">Expungement of past filings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Appendices */}
        <section id="appendices" className="page-break my-40">
          <div className="doc-header-meta text-center mb-4 uppercase">Appendices</div>
          <h2 className="doc-section-title text-5xl mb-12">A through G</h2>
          
          <div className="space-y-8">
            {[
              { id: 'A', title: 'Substance Screening Protocols', content: 'Designated Facility: Dynacare Laboratories. Standard: 13-Panel Screen (Urine/Hair Follicle/EtG). All testing must comply with SAMHSA chain-of-custody standards.' },
              { id: 'B', title: 'Therapist & Parenting Coordinator Information', content: 'Out-of-province professional for binding arbitration. Requires mutual consent releases.' },
              { id: 'C', title: 'Co-Parenting Application Standards', content: 'Platform: OurFamilyWizard. Requirements: ToneMeter enabled, GPS check-ins, 24-hr response.' },
              { id: 'D', title: 'Transportation Record', content: 'Historical log establishing the Father\'s historic absorption of all logistical burdens.' },
              { id: 'E', title: 'The "Exhibit Generator" Monthly Report', content: 'Voluntary disclosure by the Father, including certification of sobriety and community engagement.' },
              { id: 'F', title: 'Crisis Contact Information', content: 'Notification tree for emergency services, child welfare, and medical emergencies.' },
              { id: 'G', title: 'Master Schedule of Institutional Clearances', content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-4 text-[10px] uppercase font-bold tracking-tight">
                  <div className="flex justify-between border-b border-accord-gold/10 pb-1"><span>Saint John Police Force</span><span className="text-accord-gold">Cleared #25-2390069</span></div>
                  <div className="flex justify-between border-b border-accord-gold/10 pb-1"><span>Provincial Court (NB)</span><span className="text-accord-gold">Zero-Condition</span></div>
                  <div className="flex justify-between border-b border-accord-gold/10 pb-1"><span>Social Development NB</span><span className="text-accord-gold">Unrestricted Cleared</span></div>
                  <div className="flex justify-between border-b border-accord-gold/10 pb-1"><span>Horizon Health Audit</span><span className="text-accord-gold">Medically Stable</span></div>
                  <div className="flex justify-between border-b border-accord-gold/10 pb-1"><span>Dynacare Labs</span><span className="text-accord-gold">13-Panel Negative</span></div>
                  <div className="flex justify-between border-b border-accord-gold/10 pb-1"><span>Canada Revenue Agency</span><span className="text-accord-gold">Audited/Accepted</span></div>
                  <div className="flex justify-between border-b border-accord-gold/10 pb-1"><span>WorkSafeNB</span><span className="text-accord-gold">C5-C6 Management</span></div>
                  <div className="flex justify-between border-b border-accord-gold/10 pb-1"><span>RCMP / KVRPF</span><span className="text-accord-gold">Zero History</span></div>
                  <div className="flex justify-between border-b border-accord-gold/10 pb-1"><span>Victim Services</span><span className="text-accord-gold">Compliant/Engaged</span></div>
                </div>
              ) }
            ].map(app => (
              <div key={app.id} className="bg-accord-gold/5 p-8 border border-accord-gold/20 rounded-sm">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-accord-gold mb-2 italic">Appendix {app.id} — {app.title}</h4>
                <div className="text-[13px] leading-relaxed italic text-slate-700">{app.content}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Execution Section */}
        <section id="execution" className="page-break my-40 pb-20">
          <div className="doc-header-meta text-center mb-4 uppercase">Execution</div>
          <h2 className="doc-section-title">Statement of Compliance & Global Implementation</h2>
          <p className="text-sm leading-relaxed mb-12">
            This Integrated Parenting Constitution represents the voluntary and comprehensive conclusion regarding familial restabilization. Having executed this final draft, the parents acknowledge the immense personal effort invested to close this chapter and dedicate this framework solely to high-functioning cooperative parenting.
          </p>

          <div className="border border-accord-border p-12 bg-white rounded-sm">
             <div className="doc-header-meta mb-12 text-center underline tracking-[0.3em]">Parental Commitment Signatures</div>
             <p className="text-[11px] italic mb-12 text-slate-500">
               We sign without duress, acting exclusively as Harper's mother and father, committed fully to a healthy two-roof future.
             </p>

             <div className="grid grid-cols-2 gap-20 mt-20 h-20 border-b border-accord-border">
               <div className="self-end pb-2 font-serif uppercase tracking-widest text-[10px]">Craig Alexander Paul Schulz, Father</div>
               <div className="self-end pb-2 font-serif uppercase tracking-widest text-[10px]">Date Signed</div>
             </div>
             
             <div className="grid grid-cols-2 gap-20 mt-20 h-20 border-b border-accord-border">
               <div className="self-end pb-2 font-serif uppercase tracking-widest text-[10px]">Emma Elizabeth Ryan, Mother</div>
               <div className="self-end pb-2 font-serif uppercase tracking-widest text-[10px]">Date Signed</div>
             </div>
          </div>
        </section>

        {/* Footer Accent */}
        <div className="pt-20 border-t border-accord-border text-center opacity-30 no-print">
          <Book className="mx-auto mb-4" />
          <div className="doc-header-meta">Two Roofs · One Home · One Promise</div>
        </div>
      </div>
    </div>
  );
}
