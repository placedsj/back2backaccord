import { motion } from 'motion/react';
import { Shield, Users, Heart, ClipboardCheck, Scale, AlertCircle, Phone, Book } from 'lucide-react';
import Calendar from './Calendar';

export default function AccordDocument() {
  return (
    <div className="bg-accord-cream py-12 px-4 min-h-screen font-sans">
      <div className="doc-container max-w-[900px] shadow-2xl relative overflow-hidden">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

        {/* Header Metadata */}
        <div className="flex justify-between items-start border-b border-accord-border pb-4 mb-20">
          <div className="doc-header-meta text-left max-w-[40%]">
            Integrated Parenting Constitution — Harper <br />
            June Elizabeth Ryan
          </div>
          <div className="doc-header-meta text-right">
            FDSJ-739-2024 · Court of King's Bench of <br />
            New Brunswick
          </div>
        </div>

        {/* Cover Section */}
        <section id="cover" className="text-center mb-40">
          <div className="flex justify-center mb-12">
            <Scale size={80} strokeWidth={1} className="text-accord-navy opacity-30" />
          </div>
          <div className="doc-header-meta mb-4">Court of King's Bench of New Brunswick · Family Division</div>
          <h1 className="font-serif text-6xl uppercase tracking-[0.15em] leading-[1.1] mb-8 text-accord-navy">
            Integrated <br /> 
            <span className="text-accord-gold italic">Parenting</span> <br /> 
            Constitution
          </h1>
          <div className="h-0.5 w-60 bg-accord-gold/30 mx-auto mb-8" />
          <p className="font-serif italic text-xl text-slate-500 mb-20 italic">The Standing Back-to-Back Accord</p>
          
          <div className="text-center italic font-serif text-slate-400 mb-20">
            11:11 was our wish. On 11.12 it came true.
          </div>

          <div className="doc-quote-box text-center border-l-0 border-y border-accord-border bg-transparent p-12">
            "Two parents, standing face-to-face, see only conflict. <br />
            Two parents, standing back-to-back, see the threats <br />
            coming at their child. This document turns us around."
          </div>

          <div className="grid grid-cols-2 gap-y-6 text-left max-w-lg mx-auto border border-accord-border p-8 rounded-sm bg-accord-cream/30">
            <div className="doc-header-meta">Child</div>
            <div className="font-medium">Harper June Elizabeth Ryan (born Nov 12, 2024)</div>
            <div className="doc-header-meta">Parents</div>
            <div className="font-medium">Emma Elizabeth Ryan & Craig Alexander Paul Schulz</div>
            <div className="doc-header-meta">Court File</div>
            <div className="font-mono">FDSJ-739-2024</div>
            <div className="doc-header-meta">Jurisdiction</div>
            <div className="font-medium">Saint John, NB</div>
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
              { id: 'XI', label: 'Legacy & Amnesty' },
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
            <span className="italic font-serif font-bold">Harper's Standard is not "adequate." It is incredible.</span> The standard this framework sets for her life is maximum stability, peace, and unfettered love. This document establishes a permanent infrastructure allowing two separate households to operate cooperatively in raising one daughter. Harper June Elizabeth Ryan has the absolute right to:
          </p>
          <div className="space-y-6 mb-12">
            {[
              "Know both her parents as whole, capable, and loving humans.",
              "Wake up every morning knowing exactly where she stands and who is in her corner.",
              "Have her routines, her educational support, and her sense of home fiercely protected across both households.",
              "See her parents standing back-to-back at every moment that matters to her.",
              "Never be used as a messenger, an audience to adult conflict, or a bargaining position."
            ].map((right, i) => (
              <div key={i} className="flex gap-4 items-start bg-slate-50/50 p-4 border-l border-accord-gold/30">
                <Shield size={16} className="text-accord-gold shrink-0 mt-1" />
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

          <h4 className="doc-header-meta mb-4 uppercase tracking-[0.2em] text-[10px]">Article 4.3 — Autonomous Equipment Resourcing</h4>
          <div className="bg-accord-cream p-8 border border-accord-gold/20 text-xs italic leading-relaxed text-slate-700">
            Neither parent utilizes property transit complications as weapons of control. Both the Father's domicile and the Mother's home stand individually capable of clothing, bathing, securing, and properly medicating Harper. Both parental transits feature individualized, certified safety car seats, strictly barring transport disputes.
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
              "Neither parent is authorized to permit the integration of illicit chemical variants into their active biological system within the 24-hour cycle preceding scheduled integration with Harper."
            </div>
            <div className="bg-red-50/50 p-8 border-l-4 border-red-500 italic text-sm text-red-900 font-serif leading-relaxed">
              "The environments immediately encasing Harper shall perpetually abstain from adult intoxication or inebriation levels that reduce defensive response capabilities."
            </div>
          </div>

          <h3 className="doc-article-title border-red-100">Article 5.2 — Live Vitals Observation (The Owlet Protocol)</h3>
          <p className="text-sm leading-relaxed mb-8">
            Recognizing the absolute peace of mind provided by continuous vital oversight—both households universally institute digital monitoring mechanics explicitly restricted to designated resting blocks (e.g., Owlet format architectures).
          </p>
          <div className="bg-slate-900 text-white p-6 rounded-sm text-xs border border-accord-gold/30 font-mono tracking-widest text-center uppercase">
            Hardware deployment and connectivity overhead rest 100% against the Paternal fiscal structure.
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
          <h3 className="doc-article-title">Article 9.1 — Baseline Child Support Standardizations</h3>
          <p className="text-sm leading-relaxed mb-12 italic text-slate-500">
            General daily support formulations correspond tracking directly referencing standardized federal guidelines. Both parents commit to full transparency and automatic annual adjustments based on verified income filings.
          </p>
          
          <h3 className="doc-article-title">Article 9.2 — Capital Cost Sharing Mechanisms</h3>
          <div className="bg-slate-50 p-8 border-l-4 border-accord-gold text-sm italic font-medium leading-relaxed">
            All extracurricular enhancements requiring financial outlay follow a 50/50 dual payment mandate. This is conditional upon mutual pre-approval via OurFamilyWizard recorded correspondence prior to enrollment.
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

        {/* Part XI: Legacy & The Financial Amnesty Declaration */}
        <section id="part11" className="page-break my-40">
          <div className="doc-header-meta text-center mb-4 uppercase">Part XI</div>
          <h2 className="doc-section-title text-5xl text-accord-gold text-right">Legacy & Amnesty</h2>
          <h3 className="doc-article-title border-accord-gold/20">Article 11.1 — The $50,000 Global Wipe & Mutual Clean Slate</h3>
          <p className="text-sm leading-relaxed mb-8 font-medium italic text-slate-500">
            Building a secure future for Harper requires the complete dismantling of lingering systemic hostilities. True co-parenting cannot coexist with outstanding financial retaliation. 
          </p>
          <div className="bg-accord-navy p-10 text-white rounded-sm text-[13px] leading-relaxed italic border-l-8 border-accord-gold mb-16 shadow-lg">
            <span className="font-bold uppercase tracking-widest block mb-4 text-accord-gold">The Formal Provision:</span>
            Effective precisely upon the judicial endorsement and full execution of this Integrated Parenting Constitution, and contingent upon 24 months of material compliance by the maternal household, the Father formally executes a comprehensive, binding legal release. This release fully abandons and permanently waives all pursuit of the approximate $50,000 civil penalty and financial liability currently outstanding. The timeline resets to zero, terminating the financial litigation indefinitely, ensuring all preserved resources are redirected exclusively toward Harper’s welfare.
          </div>
          
          <h3 className="doc-article-title border-accord-gold/20">Article 11.2 — Evidentiary Expungement (The Quiet Restart)</h3>
          <p className="text-sm leading-relaxed mb-12">
            To provide both households with the relational safety required to generate genuine trust, the public footprint of past conflicts must be sanitized. Both parents jointly consent to petition the Court to formally seal all prior interim affidavits, urgent motions, and targeted operational filings. This ensures Harper is permanently protected from future exposure to historical adult conflicts through the public record.
          </p>

          <div className="bg-accord-navy p-12 text-white rounded-lg shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accord-gold/10 rounded-full -mr-16 -mt-16" />
            <h4 className="font-serif italic text-2xl mb-8 text-accord-gold">Article 11.3 — The Architects' Final Vow (For Harper)</h4>
            <div className="space-y-6 font-serif italic text-lg opacity-90 leading-relaxed">
              <p>Harper, by the time you read this, you will have questions about why your childhood looked the way it did. This document was created to protect you — and to protect your mother, and your father.</p>
              <p>We learned that fighting each other only made strangers powerful. Standing back-to-back made us unstoppable. We forgave our past, laid down the armor, and zeroed the debt because you deserved a childhood that wasn't raised in a courtroom.</p>
              <p className="pt-8 text-right text-accord-gold font-bold">All our love, <br /> Mom & Dad</p>
            </div>
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
