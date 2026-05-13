import { motion } from 'motion/react';
import { Shield, Users, Heart, ClipboardCheck, Scale, AlertCircle, Phone, Book } from 'lucide-react';
import Calendar from './Calendar';

export default function AccordDocument() {
  return (
    <div className="bg-accord-cream py-12 px-4 min-h-screen font-sans">
      <div className="doc-container max-w-[900px] shadow-2xl relative overflow-hidden bg-white mx-auto">
        
        {/* --- PRINT ONLY HEADER (Repeats on every page) --- */}
        <div className="hidden print:flex fixed top-0 left-0 right-0 w-full justify-between items-center text-[10px] uppercase tracking-widest text-slate-500 bg-white pt-8 pb-4 z-50 border-b border-slate-200 px-12">
          <span>FDSJ-739-2024</span>
          <span className="font-bold text-slate-800">The Standing Back-to-Back Accord</span>
          <span>Harper June Elizabeth Ryan</span>
        </div>

        {/* --- PRINT ONLY FOOTER (Repeats on every page) --- */}
        <div className="hidden print:flex fixed bottom-0 left-0 right-0 w-full justify-between items-center text-[10px] uppercase tracking-widest text-slate-500 bg-white pb-8 pt-4 z-50 border-t border-slate-200 px-12">
          <span>Emma Ryan & Craig Schulz</span>
          {/* We leave the center blank so the browser's native page numbers can print here without overlapping */}
          <span className="w-32"></span> 
          <span>Effective: May 4, 2026</span>
        </div>

        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

        {/* Header Metadata - Uniform Spaced Typography (Digital Only) */}
        <div className="border-b border-slate-200 pb-8 mb-24 flex flex-col items-center gap-2 print:hidden">
          <div className="doc-header-meta text-slate-900 font-bold tracking-[0.4em] text-center leading-relaxed">
            The Standing Back-to-Back Accord — Harper June Elizabeth Ryan
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
        <section id="cover" className="text-center flex flex-col justify-center pt-12 pb-8 break-after-page min-h-[90vh] print:min-h-0 print:py-12 relative z-10">
          <div className="flex justify-center mb-16">
            <Scale size={80} strokeWidth={1} className="text-accord-navy opacity-80" />
          </div>
          <div className="text-[10px] mb-8 font-bold text-slate-400 tracking-[0.4em] uppercase">Two Roofs · One Home · One Promise</div>
          <h1 className="font-serif text-[64px] md:text-[80px] uppercase tracking-[-0.02em] leading-[0.95] mb-12 text-accord-navy">
            The Standing <br /> 
            <span className="text-accord-gold italic font-medium pr-4 inline-block">Back-to-Back</span> <br /> 
            Accord
          </h1>
          <div className="h-px w-64 bg-accord-gold/50 mx-auto mb-12" />
          <div className="text-xl italic text-slate-500 mb-24 font-serif lowercase tracking-widest text-opacity-80">parenting agreement</div>
          
          <div className="max-w-2xl mx-auto border-y border-slate-200 py-12 mb-20 bg-white">
            <p className="italic font-serif text-slate-700 text-xl leading-relaxed mb-8 border-b border-slate-100 pb-8">
              "Two parents, standing face-to-face, see only conflict. <br />
              Two parents, standing back-to-back, see the threats <br />
              coming at their child. This document turns us around."
            </p>
            <p className="italic font-serif text-slate-500 text-[15px] leading-relaxed">
              “Two are better than one, because they have a good return for their labor. If either of them falls down, one can help the other up.” — Ecclesiastes 4:9–10
            </p>
          </div>
        </section>

        {/* Section 2 of Cover - Information & Signatures */}
        <section className="break-before-page flex flex-col justify-center min-h-[90vh] py-12 print:min-h-[100vh] print:py-24 gap-24 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto w-full">
            <div className="grid grid-cols-[1fr_2fr] gap-y-10 text-left border border-slate-200 p-12 md:p-16 rounded-sm bg-white shadow-sm mb-32">
              <div className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase pt-1">Child</div>
              <div className="font-medium text-slate-800 text-lg">Harper June Elizabeth Ryan<br/><span className="text-sm text-slate-500 font-normal italic">(born Nov 12, 2024)</span></div>
              
              <div className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase pt-1">Parents</div>
              <div className="font-medium text-slate-800 text-lg">Emma Elizabeth Ryan<br/><span className="text-slate-400 font-normal italic text-sm">&amp;</span><br/>Craig Alexander Paul Schulz</div>
              
              <div className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase pt-1">Court File</div>
              <div className="font-mono tracking-widest text-sm text-slate-800 bg-slate-50 py-2 px-3 inline-block border border-slate-100 rounded-sm">FDSJ-739-2024</div>
              
              <div className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase pt-1">Effective Date</div>
              <div className="font-medium text-slate-800 text-lg">May 4, 2026<br/><span className="text-sm text-slate-500 font-normal italic">Phase 1 Commencement</span></div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-12 text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase gap-16 md:gap-0">
              <div className="flex flex-col gap-4 items-start w-full md:w-72">
                <div className="h-px w-full bg-slate-300" />
                <span>Emma Elizabeth Ryan <br/><span className="opacity-60 lowercase font-normal italic text-xs tracking-normal mt-1 block">mother</span></span>
              </div>
              <div className="flex flex-col gap-4 items-start w-full md:w-72 text-left md:text-right">
                <div className="h-px w-full bg-slate-300" />
                <span className="w-full">Craig Alexander Paul Schulz <br/><span className="opacity-60 lowercase font-normal italic text-xs tracking-normal mt-1 block">father</span></span>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section id="preliminary" className="break-before-page py-24 print:py-12 flex flex-col justify-start relative z-10 bg-white">
          <div className="text-center text-[10px] uppercase font-bold tracking-[0.2em] text-slate-800 border-b border-slate-200 pb-4 mb-20 max-w-4xl mx-auto w-full">Contents</div>
          <h2 className="font-serif text-[56px] text-center text-accord-navy mb-24">Table of Contents</h2>
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex flex-col gap-y-7 max-w-3xl mx-auto w-full font-serif text-lg text-slate-800 px-8">
              {[
                { id: 'I', label: 'Foundation' },
                { id: 'II', label: 'Decision-Making Architecture' },
                { id: 'III', label: 'Parenting Time & Stability Phases' },
                { id: 'IV', label: 'Transitions & Logistics' },
                { id: 'V', label: 'Safety & Verification' },
                { id: 'VI', label: 'Staying In Touch & Updates' },
                { id: 'VII', label: 'Family & Friends (Keeping Things Peaceful)' },
                { id: 'VIII', label: 'Records and Coordination' },
                { id: 'IX', label: 'Money & Support' },
                { id: 'X', label: 'Solving Problems Peacefully' },
                { id: 'XI', label: 'Our Fresh Start' },
                { id: 'SUMMARY', label: 'The Harper Cheat Sheets' },
              ].map(part => (
                <div key={part.id} className="flex justify-between items-end group w-full">
                  <span className="doc-header-meta text-accord-gold font-bold uppercase tracking-[0.2em] text-[10px]">Part {part.id}</span>
                  <div className="flex-1 border-b border-white opacity-0" />
                  <span className="text-xl text-right leading-none">{part.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-24 text-accord-gold/50">
            <span className="w-2 h-2 rounded-full bg-current opacity-30" />
            <span className="w-2 h-2 rounded-full bg-current opacity-60" />
            <span className="w-2 h-2 rounded-full bg-current opacity-30" />
          </div>
        </section>

        {/* Part I: Foundation */}
        <section id="part1" className="break-before-page py-24 print:py-12 relative z-10 bg-white">
          <div className="doc-header-meta text-center mb-4 uppercase">Part I</div>
          <h2 className="doc-section-title text-5xl">Foundation</h2>
          
          <h3 className="doc-article-title">Article 1.1 — Shared Intent</h3>
          <p className="text-sm leading-relaxed mb-8">
            This Agreement is made in Harper’s best interests and is intended to provide her with stability, predictability, safety, and meaningful relationships with both parents.
          </p>

          <h3 className="doc-article-title">Article 1.2 — Parental Primacy (The "Circle of Two")</h3>
          <p className="text-sm leading-relaxed mb-6">
            Parenting decisions and responsibilities belong exclusively to the Mother and the Father. Extended family members and other third parties may support Harper’s life, but they do not possess operational governance or make parenting decisions for her. All operational authority is concentrated within the parents' "Circle of Two."
          </p>

          <h3 className="doc-article-title">Article 1.3 — Parallel Parenting, Personalized</h3>
          <p className="text-sm leading-relaxed mb-6">
            This Agreement follows a “parallel parenting” approach, where each parent is responsible for Harper’s day-to-day life during their own time, with clear rules for transitions and communication. It is also personalized to Harper by preserving her bonds with extended family and her community while adding enough structure to fully protect her growth and development.
          </p>
        </section>

        {/* Part II: Decision-Making Architecture */}
        <section id="part2" className="break-before-page py-24 print:py-12 relative z-10 bg-white">
          <div className="doc-header-meta text-center mb-4 uppercase">Part II</div>
          <h2 className="doc-section-title text-5xl">Decision-Making Architecture</h2>
          
          <h3 className="doc-article-title">Article 2.1 — Divided Decision-Making Responsibilities</h3>
          <p className="mb-8 text-sm leading-relaxed">
            To reduce conflict and allow timely decisions, the parents agree to divide decision-making responsibilities by domain:
          </p>

          <div className="grid grid-cols-1 gap-6 mb-12">
            <div className="border border-accord-border p-6 rounded-sm bg-blue-50/30">
              <div className="doc-header-meta text-blue-900 border-b border-blue-100 pb-2 mb-4 uppercase text-[9px]">Health and Related Matters (Father)</div>
              <ul className="space-y-3 text-[11px] font-semibold text-blue-950">
                <li className="flex gap-2"><span>•</span> The Father has final decision-making responsibility for Harper’s medical, dental, therapeutic, and nutritional care.</li>
                <li className="flex gap-2"><span>•</span> He will give the Mother notice of proposed major decisions and an opportunity to provide input through the co‑parenting application, except in emergencies.</li>
              </ul>
              <div className="mt-3 text-[10px] italic text-blue-800">(Examples: Specialist coordination, pharmacological management, chronic care planning)</div>
            </div>
            
            <div className="border border-accord-border p-6 rounded-sm bg-pink-50/30">
              <div className="doc-header-meta text-pink-900 border-b border-pink-100 pb-2 mb-4 uppercase text-[9px]">Education and Extracurricular Matters (Mother)</div>
              <ul className="space-y-3 text-[11px] font-semibold text-pink-950">
                <li className="flex gap-2"><span>•</span> The Mother has final decision-making responsibility for Harper’s education and significant extracurricular activities.</li>
                <li className="flex gap-2"><span>•</span> She will give the Father notice of proposed major decisions and an opportunity to provide input through the co‑parenting application.</li>
              </ul>
              <div className="mt-3 text-[10px] italic text-pink-800">(Examples: Scholastic pathfinding, primary extracurricular enrollments)</div>
            </div>

            <div className="border border-accord-border p-6 rounded-sm bg-slate-50">
              <div className="doc-header-meta text-slate-800 border-b border-slate-200 pb-2 mb-4 uppercase text-[9px]">Day-to-Day Decisions (Each Parent)</div>
              <ul className="space-y-3 text-[11px] font-semibold text-slate-700">
                <li className="flex gap-2"><span>•</span> Each parent may make day-to-day decisions for Harper while she is in that parent’s care.</li>
              </ul>
              <div className="mt-3 text-[10px] italic text-slate-500">(Examples: Daily lifestyle formatting, aesthetic governance, haircuts, daily grooming)</div>
            </div>
          </div>

          <h3 className="doc-article-title">Article 2.2 — Information Access</h3>
          <p className="text-sm leading-relaxed mb-6">
            Both parents shall have direct and independent access to Harper’s medical providers, records, school records, daycare information, and institutional portals. Neither parent shall remove the other from any such system or permit a third party to act as gatekeeper.
          </p>

          <h3 className="doc-article-title">Article 2.3 — Direct Consultation and Third-Party Exclusion</h3>
          <p className="text-sm leading-relaxed mb-4">
            All major decisions about Harper’s health, education, and significant activities shall be discussed directly between the parents through the agreed co‑parenting application.
          </p>
          <p className="text-sm leading-relaxed mb-4">
            Neither parent shall delegate their decision‑making authority or consultation duties to any third party, including extended family members, romantic partners, or legal advocates, for day‑to‑day administrative matters.
          </p>
          <p className="text-sm leading-relaxed mb-8">
            Each parent will respond to reasonable requests about major medical or educational decisions within 48 hours where reasonably possible. If a matter remains unresolved and is not urgent, the parents may seek mediation, parenting coordination, or Court direction as needed.
          </p>

          <h3 className="doc-article-title">Article 2.4 — Relocation and Travel</h3>
          <p className="text-sm leading-relaxed">
            Harper’s habitual residence shall remain within the greater Saint John area unless otherwise agreed in writing or ordered by the Court. Neither parent shall relocate Harper’s primary residence more than 50 km without written agreement or Court order. International travel requires both parents’ written consent or Court order.
          </p>
        </section>

        {/* Part III: Parenting Time & Stability Phases */}
        <section id="part3" className="break-before-page py-24 print:py-12 relative z-10 bg-white">
          <div className="doc-header-meta text-center mb-4 uppercase">Part III</div>
          <h2 className="doc-section-title text-5xl">Parenting Time & Stability Phases</h2>
          
          <h3 className="doc-article-title">Article 3.1 — Stability Phases</h3>
          <p className="text-sm mb-8">
            Parenting time is structured in three phases to support Harper’s attachments and gradually move into longer, stable blocks:
          </p>

          <div className="overflow-hidden border border-slate-200 rounded-sm mb-8 text-sm text-left">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-3 font-semibold text-slate-800">Phase</th>
                  <th className="p-3 font-semibold text-slate-800">Duration</th>
                  <th className="p-3 font-semibold text-slate-800">Structure</th>
                  <th className="p-3 font-semibold text-slate-800">Pattern</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="p-3 font-medium">Phase 1: Transition</td>
                  <td className="p-3">Days 1–90</td>
                  <td className="p-3">3/3 Rotation</td>
                  <td className="p-3 text-slate-600">3 days with Father, then 3 days with Mother, repeating</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-3 font-medium">Phase 2: Partnership</td>
                  <td className="p-3">Days 91–180</td>
                  <td className="p-3">4/4 Rotation</td>
                  <td className="p-3 text-slate-600">4 days with Father, then 4 days with Mother, repeating</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Phase 3: Permanency</td>
                  <td className="p-3 flex shrink-0">Day 181 onward</td>
                  <td className="p-3">5/5 Rotation</td>
                  <td className="p-3 text-slate-600">5 days with Father, then 5 days with Mother, repeating</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm italic mb-12 text-slate-500">
            There are no separate “alternating Sunday” rules. Each phase operates on simple repeating blocks.
          </p>

          <h3 className="doc-article-title">Article 3.2 — Phase 1: 3/3 Rolling Rotation</h3>
          <ul className="space-y-4 text-sm leading-relaxed mb-8">
            <li><span className="font-bold">Pattern:</span> 3 consecutive days with one parent, then 3 consecutive days with the other parent, repeating continuously.</li>
            <li><span className="font-bold">Goal:</span> Maximize contact and minimize long gaps as Harper adjusts to regular transitions.</li>
            <li><span className="font-bold">Exchanges:</span> Unless otherwise agreed, exchanges occur at 9:00 AM at the home of the parent whose block is beginning.</li>
          </ul>

          <h3 className="doc-article-title">Article 3.3 — Phase 2: 4/4 Equal Blocks</h3>
          <ul className="space-y-4 text-sm leading-relaxed mb-8">
            <li><span className="font-bold">Start:</span> Begins on Day 91 unless both parents agree in writing to adjust the start or the Court orders otherwise.</li>
            <li><span className="font-bold">Pattern:</span> 4 consecutive days with one parent, then 4 with the other parent, repeating.</li>
          </ul>

          <h3 className="doc-article-title">Article 3.4 — Phase 3: 5/5 Equal Blocks</h3>
          <ul className="space-y-4 text-sm leading-relaxed mb-8">
            <li><span className="font-bold">Start:</span> Begins on Day 181 unless both parents agree in writing to adjust the start or the Court orders otherwise.</li>
            <li><span className="font-bold">Pattern:</span> 5 consecutive days with one parent, then 5 with the other parent, repeating.</li>
          </ul>

          <h3 className="doc-article-title">Article 3.5 — Milestone Gift and Overrides</h3>
          <p className="text-sm leading-relaxed mb-4">
            In recognition of the Mother's primary bond and to ensure absolute peace during holiday cycles, the Father irrevocably waives his claim to shared parenting time on the following days annually:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm mb-4 text-slate-700">
            <li>Christmas Eve & Christmas Day</li>
            <li>Mother's Day</li>
            <li>Emma’s Birthday</li>
            <li>Harper’s Birthday (November 12th)</li>
          </ul>
          <p className="text-sm leading-relaxed mb-8">
            These days shall belong exclusively to the Mother every single year. Reciprocally, Father’s Day and the Father’s Birthday belong exclusively to the Father's household. These overrides apply regardless of the active rotation.
          </p>

          <h3 className="doc-article-title">Article 3.6 — Additional Holidays and School Breaks</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm mb-8 text-slate-700">
            <li>New Year’s Eve / New Year’s Day, March Break, Easter weekend, Canada Day, Labour Day, and Thanksgiving weekend will alternate between the parents each year, unless the parents agree otherwise in writing.</li>
            <li>These holiday periods override the regular 3/3, 4/4, or 5/5 rotation for those specific days, and the regular schedule resumes immediately after.</li>
          </ul>

          <h3 className="doc-article-title">Article 3.7 — Schedule Changes</h3>
          <p className="text-sm leading-relaxed mb-8">
            No parent may unilaterally change the schedule. Temporary changes may be made by written agreement through the co-parenting application. Permanent changes require written agreement or Court order.
          </p>

          <div className="mt-16 bg-white p-8 border border-slate-200 rounded-sm">
            <div className="doc-header-meta text-center mb-2 uppercase">Reference</div>
            <h3 className="font-serif text-3xl text-center text-accord-navy mb-4">Schedule Visualization</h3>
            <p className="text-center text-sm italic text-slate-500 mb-8">A visual representation of the rotating schedule, stability phases, and fixed holidays for the 2026 calendar year.</p>
            <Calendar />
            <div className="flex justify-center flex-wrap gap-6 mt-8 p-4 bg-slate-50 border border-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-pink-100 border border-pink-200"></div> Mother</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-100 border border-blue-200"></div> Father</div>
              <div className="flex items-center gap-2 relative"><div className="w-3 h-3 bg-pink-600 ring-2 ring-offset-1 ring-accord-gold relative"></div> <span className="ml-2">Mother's Priority</span></div>
              <div className="flex items-center gap-2 relative"><div className="w-3 h-3 bg-blue-600 ring-2 ring-offset-1 ring-accord-gold relative"></div> <span className="ml-2">Father's Priority</span></div>
            </div>
          </div>

        </section>

        {/* Part IV: Transitions & Logistics */}
        <section id="part4" className="break-before-page py-24 print:py-12 relative z-10 bg-white">
          <div className="doc-header-meta text-center mb-4 uppercase">Part IV</div>
          <h2 className="doc-section-title text-5xl">Transitions & Logistics</h2>
          
          <h3 className="doc-article-title">Article 4.1 — The Delivery Standard (Drop-Off Only)</h3>
          <p className="text-sm leading-relaxed mb-4">
            Transportation responsibilities are structured to ensure absolute punctuality and minimize wait times. All routine handovers proceed via a Drop-Off requirement.
          </p>
          <ul className="space-y-4 text-[13px] font-medium mb-8 bg-slate-50 p-6 border-l-4 border-accord-gold">
            <li><span className="font-bold text-slate-900 not-italic block mb-1 uppercase tracking-wider text-[10px]">The Responsibility</span> The parent concluding their authorized parenting time carries the operational mandate to arrange transit and deliver Harper to the initiating parent’s primary residence.</li>
            <li><span className="font-bold text-slate-900 not-italic block mb-1 uppercase tracking-wider text-[10px]">The Rule</span> You are responsible for the "outbound" journey at the end of your time. This ensures the receiving parent is ready and waiting at their own home.</li>
          </ul>

          <h3 className="doc-article-title">Article 4.2 — Licensed & Sober Transit Standard</h3>
          <p className="text-sm leading-relaxed mb-4">
            Given the rural nature of both residences, the focus is on safety rather than professional couriers.
          </p>
          <ul className="space-y-4 text-[13px] mb-8">
            <li><span className="font-bold text-slate-900">Authorized Drivers:</span> Any licensed and insured driver authorized by the parent (including family members, friends, or the parents themselves) may execute transportation.</li>
            <li><span className="font-bold text-slate-900">The Sobriety Mandate:</span> Every driver must meet the legal standard for sobriety. No exceptions.</li>
            <li><span className="font-bold text-slate-900">Logistical Integrity:</span> Transportation shall never be used as a barrier to parenting time. A lack of personal transportation does not excuse a failure to deliver; it is the parent’s duty to secure a safe ride for Harper.</li>
          </ul>

          <h3 className="doc-article-title">Article 4.3 — Threshold Handoff Protocol</h3>
          <p className="text-sm leading-relaxed mb-4">
            Transitions at the door are to be brief, peaceful, and focused entirely on Harper’s comfort.
          </p>
          <ul className="space-y-4 text-[13px] mb-8">
            <li className="flex gap-3"><Shield size={16} className="text-accord-gold shrink-0 mt-0.5" /> <div><span className="font-bold text-slate-900">Zero Conflict Zone:</span> No logistical debates, financial discussions, or historical grievances shall be aired during the exchange.</div></li>
            <li className="flex gap-3"><Phone size={16} className="text-accord-gold shrink-0 mt-0.5" /> <div><span className="font-bold text-slate-900">The Digital Briefing:</span> All information regarding Harper’s recent meals, sleep, or health must be shared through the mandated application prior to the exchange, rather than at the door.</div></li>
            <li className="flex gap-3"><Users size={16} className="text-accord-gold shrink-0 mt-0.5" /> <div><span className="font-bold text-slate-900">Support Network:</span> While the exchange is primarily between parents, supportive family members or friends are not restricted from the area, provided all conduct remains calm and child-focused.</div></li>
          </ul>

          <h3 className="doc-article-title">Article 4.4 — Non-Interference & Punctuality</h3>
          <ul className="space-y-4 text-[13px] mb-8">
            <li><span className="font-bold text-slate-900">Punctuality:</span> Arrival times must be strictly honored within a 15-minute grace period. Longer delays should be communicated as soon as possible.</li>
            <li><span className="font-bold text-slate-900">No Paternal/Maternal Facilitation:</span> Neither parent is required to provide transportation for the other parent's delivery obligation. Each household manages its own logistics independently.</li>
          </ul>
        </section>

        {/* Part V: Safety & Verification */}
        <section id="part5" className="break-before-page py-24 print:py-12 relative z-10 bg-white">
          <div className="doc-header-meta text-center mb-4 uppercase">Part V</div>
          <h2 className="doc-section-title text-5xl">Safety & Verification</h2>
          
          <h3 className="doc-article-title">Article 5.1 — Safe Care Standard</h3>
          <p className="text-sm leading-relaxed mb-8">
            Harper will not be left in the sole care of any adult who is visibly impaired by alcohol or non‑prescribed drugs. Each parent is responsible for ensuring that any adult who is supervising Harper alone is sober and capable of safe care.
          </p>

          <h3 className="doc-article-title">Article 5.2 — Multi‑Generational Homes</h3>
          <p className="text-sm leading-relaxed mb-4">
            Both parents currently live in multi‑generational homes. The parents cannot control the choices of other adults in those homes, but they will:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm mb-8 text-slate-700">
            <li>Not leave Harper alone in the care of any impaired adult; and</li>
            <li>Take reasonable steps to shield Harper from adult conflict, intoxication, and tension.</li>
          </ul>

          <h3 className="doc-article-title">Article 5.3 — Co-Parenting Communication Platform</h3>
          <p className="text-sm leading-relaxed mb-4">
            The co-parenting communication platform selected under Article 6.1 shall be used for all formal communication.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm mb-8">
            <li><span className="font-bold text-slate-900">The "Stick" Rule:</span> Traditional text messaging and phone calls shall be reserved for emergencies or immediate "doorstep" logistics only.</li>
          </ul>

          <h3 className="doc-article-title">Article 5.4 — Documentation and Accountability</h3>
          <p className="text-sm leading-relaxed mb-4">
            Regardless of the platform selected by the Mother, the parties agree to utilize the following features to maintain a transparent "Source of Truth":
          </p>
          <ul className="space-y-4 text-[13px] mb-8">
            <li><span className="font-bold text-slate-900">Timestamping:</span> Use of sent and read receipts for all messages.</li>
            <li><span className="font-bold text-slate-900">Shared Calendar:</span> Mandatory logging of all appointments, school events, and travel.</li>
            <li><span className="font-bold text-slate-900">Tone Monitoring:</span> Use of built-in "Tone Meters" (if available) to ensure communication remains civil and child-centric.</li>
            <li><span className="font-bold text-slate-900">Court Admissibility:</span> Both parents acknowledge that the exported logs from the selected application shall serve as the definitive record of parental conduct and communication.</li>
          </ul>
        </section>

        {/* Part VI: Staying In Touch & Updates */}
        <section id="part6" className="break-before-page py-24 print:py-12 relative z-10 bg-white">
          <div className="doc-header-meta text-center mb-4 uppercase">Part VI</div>
          <h2 className="doc-section-title text-5xl">Staying In Touch & Updates</h2>
          
          <h3 className="doc-article-title">Article 6.1 — Using One App for Everything</h3>
          <p className="text-sm leading-relaxed mb-4">
            The parents will use one co‑parenting app for all non‑emergency communication about Harper. The initial platform will be OurFamilyWizard. If the Mother prefers a different recognized co‑parenting app (for example, AppClose or TalkingParents), the parents may agree in writing to switch, and the Father will cooperate with that change.
          </p>
          <p className="text-sm leading-relaxed mb-8">
            The Father will pay the full membership fees for both parents so there is no cost to the Mother. Text messages and phone calls are reserved for emergencies or quick “at the door” logistics only; all other communication stays in the app.
          </p>

          <h3 className="doc-article-title">Article 6.2 — The Nightly Check-In</h3>
          <p className="text-sm leading-relaxed mb-4">
            Because it is important for both parents to know Harper is doing well, the parent who has Harper will send a quick "Nightly Update" through the app. This is a simple way to share peace of mind and keep everyone connected to her routine.
          </p>
          <div className="bg-slate-50 p-6 border border-slate-200 mb-8">
            <span className="font-bold text-[10px] uppercase tracking-widest block mb-4 text-slate-800">The Simple Update Checklist</span>
            <p className="text-xs mb-4 text-slate-600">Each night before bed, the parent will send a quick note covering these four points:</p>
            <ul className="space-y-2 text-[13px] text-slate-700">
              <li><span className="font-bold text-slate-900">Eating:</span> (Example: "Ate her dinner well.")</li>
              <li><span className="font-bold text-slate-900">Health:</span> (Example: "No fever, happy and healthy.")</li>
              <li><span className="font-bold text-slate-900">Mood:</span> (Example: "Had a great day playing outside.")</li>
              <li><span className="font-bold text-slate-900">Sleep:</span> (Example: "Tucked in and fast asleep.")</li>
            </ul>
          </div>

          <h3 className="doc-article-title">Article 6.3 — Sharing Photos</h3>
          <p className="text-sm leading-relaxed">
            Both parents agree to share photos of Harper’s milestones and daily activities through the app gallery. This ensures both households can see her grow and keep those memories in one safe place.
          </p>
        </section>

        {/* Part VII: Family & Friends */}
        <section id="part7" className="break-before-page py-24 print:py-12 relative z-10 bg-white">
          <div className="doc-header-meta text-center mb-4 uppercase">Part VII</div>
          <h2 className="doc-section-title text-5xl">Family & Friends (Keeping Things Peaceful)</h2>
          
          <h3 className="doc-article-title">Article 7.1 — Manners and Kindness</h3>
          <p className="text-sm leading-relaxed mb-4">
            Harper picks up on everything around her, especially how the adults in her life get along. Having extended family and friends at Harper’s milestones (like birthdays or school events) is a special part of her life, as long as everyone stays polite and friendly.
          </p>
          <ul className="space-y-4 text-[13px] mb-8 bg-slate-50 p-6 border border-slate-100 rounded-sm">
            <li><span className="font-bold text-slate-900 uppercase tracking-widest block text-[10px] mb-1">The Rule:</span> All family members and friends agree to use "Common Manners" whenever Harper is watching. This means no arguing, no mean comments, and keeping things positive.</li>
            <li><span className="font-bold text-slate-900 uppercase tracking-widest block text-[10px] mb-1">Our Promise:</span> "We are the gatekeepers of Harper's peace. We both agree to make sure our own families follow this rule so Harper always feels safe and happy when we are all together."</li>
          </ul>
        </section>

        {/* Part VIII: Records and Coordination */}
        <section id="part8" className="break-before-page py-24 print:py-12 relative z-10 bg-white">
          <div className="doc-header-meta text-center mb-4 uppercase">Part VIII</div>
          <h2 className="doc-section-title text-5xl">Records and Coordination</h2>
          
          <h3 className="doc-article-title">Article 8.1 — Health Records and Appointments</h3>
          <p className="text-sm leading-relaxed mb-8 text-slate-700">
            The parents will each maintain access to Harper’s medical information through MyHealthNB or any successor portal, and both may contact health providers directly about Harper. No medical or dental appointment for Harper will be booked or attended without both parents being informed in advance through the co‑parenting app, except in emergencies. Both parents will share full information about Harper’s past and current diagnoses, medications, and treatment plans with each other, so Harper’s medical history is complete and consistent.
          </p>

          <h3 className="doc-article-title">Article 8.2 — School and Learning</h3>
          <p className="text-sm leading-relaxed mb-4">
            To make sure Harper has a steady path for her education, the Mother takes the lead on where Harper goes to school and what she learns.
          </p>
          <ul className="space-y-4 text-[13px] mb-8">
            <li><span className="font-bold text-slate-900">The School Lead:</span> The Mother handles coordinating Harper’s primary school and signing her up for classes.</li>
            <li><span className="font-bold text-slate-900">Staying Informed:</span> The Mother will keep the Father updated on all school choices, report cards, and big academic dates through the app.</li>
          </ul>
        </section>

        {/* Part IX: Money & Support */}
        <section id="part9" className="break-before-page py-24 print:py-12 relative z-10 bg-white">
          <div className="doc-header-meta text-center mb-4 uppercase">Part IX</div>
          <h2 className="doc-section-title text-5xl">Money & Support</h2>
          
          <h3 className="doc-article-title">Article 9.1 — Child Support for Now</h3>
          <p className="text-sm leading-relaxed mb-8">
            At this time, neither parent is asking the Court for an order that the other pay ongoing child support. No table child support will be payable until the Father’s WorkSafeNB or disability income has been finalized.
          </p>

          <h3 className="doc-article-title">Article 9.2 — Father’s Future Support</h3>
          <p className="text-sm leading-relaxed mb-8">
            Once the Father’s WorkSafeNB or disability claim is finalized, he will contribute to Harper’s support in an amount based on his income and the Federal Child Support Guidelines, unless the parents agree otherwise in writing or the Court orders a different amount.
          </p>

          <h3 className="doc-article-title">Article 9.3 — Mother’s Financial Privacy</h3>
          <p className="text-sm leading-relaxed mb-8">
            For this Agreement, the Father does not ask for the Mother’s financial disclosure and will not request her bank records or other detailed financial information, unless a Court later requires it.
          </p>

          <h3 className="doc-article-title">Article 9.4 — Extra Expenses (Section 7)</h3>
          <p className="text-sm leading-relaxed mb-8">
            Extraordinary expenses (for example major medical, dental, or education costs beyond the usual routine) will only be shared where both parents have agreed in advance in writing through the co‑parenting app, or as later ordered by the Court.
          </p>
        </section>

        {/* Part X: Solving Problems Peacefully */}
        <section id="part10" className="break-before-page py-24 print:py-12 relative z-10 bg-white">
          <div className="doc-header-meta text-center mb-4 uppercase">Part X</div>
          <h2 className="doc-section-title text-5xl">Solving Problems Peacefully</h2>
          
          <h3 className="doc-article-title">Article 10.1 — Solving Disagreements Without Court</h3>
          <p className="text-sm leading-relaxed mb-4">
            Going back to court is stressful for everyone and hard on Harper. This plan makes sure we try to solve things ourselves first.
          </p>
          <ul className="space-y-4 text-[13px] mb-8 bg-slate-50 p-6 border-l-4 border-accord-gold">
            <li><span className="font-bold text-slate-900 block mb-1">The 48-Hour Rule:</span> If we have a disagreement about the schedule or a rule, we agree to wait 48 hours and talk it out calmly through the app before doing anything else.</li>
            <li><span className="font-bold text-slate-900 block mb-1">Asking for Help:</span> If we still cannot agree after 48 hours, we will seek help from a neutral professional such as a mediator or Parenting Coordinator. The Parenting Coordinator may assist us to implement this Agreement and make recommendations. If we still cannot agree, either of us may apply to the Court, except in urgent safety matters.</li>
          </ul>

          <h3 className="doc-article-title">Article 10.2 — Protecting Harper’s Feelings</h3>
          <p className="text-sm leading-relaxed mb-4">
            Both parents promise to keep Harper’s world positive and happy.
          </p>
          <ul className="space-y-4 text-[13px] mb-8">
            <li><span className="font-bold text-slate-900">The Kindness Rule:</span> Neither parent will say mean things about the other parent when Harper is around. We won't use her as a messenger to send notes back and forth.</li>
            <li><span className="font-bold text-slate-900">Harper’s Right:</span> Harper has the right to love both her Mom and her Dad without feeling caught in the middle. We agree to keep all "grown-up" talk and disagreements away from her.</li>
          </ul>
        </section>

        {/* Part XI: Our Fresh Start */}
        <section id="part11" className="break-before-page py-24 print:py-12 relative z-10 bg-white">
          <div className="doc-header-meta text-center mb-4 uppercase">Part XI</div>
          <h2 className="doc-section-title text-5xl text-accord-gold text-right">Our Fresh Start</h2>
          
          <div className="bg-accord-navy p-12 text-white rounded-sm shadow-2xl relative overflow-hidden mt-8 print:border-2 print:border-accord-navy print:text-slate-900 print:bg-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accord-gold/10 rounded-full -mr-16 -mt-16 print:hidden" />
            <h4 className="font-serif italic text-2xl mb-8 text-accord-gold print:text-accord-navy">Article 11.1 — A Final Vow (To Be Read by Harper One Day)</h4>
            <div className="space-y-6 font-serif italic text-lg opacity-90 leading-relaxed print:opacity-100">
              <p>Harper, by the time you read this, you will have questions about why things looked the way they did when you were little. This document was created to protect you—and to protect your Mother and your Father.</p>
              <p>We learned that fighting each other only made things harder. Standing back-to-back made us a team. We forgave our past, laid down the armor, and ended the court battle because you deserved a childhood that wasn't raised in a courtroom.</p>
              <p className="pt-8 text-right text-accord-gold font-bold print:text-accord-navy">All our love, <br /> Mom & Dad</p>
            </div>
          </div>
        </section>

        {/* THE HARPER CHEAT SHEETS */}
        <section id="summary" className="break-before-page py-24 print:py-12 relative z-10 bg-white">
          <div className="doc-header-meta text-center mb-4 uppercase">Summary</div>
          <h2 className="doc-section-title text-5xl text-center mb-12">The Harper Cheat Sheets</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest border-b-2 border-accord-gold pb-2 mb-6 text-accord-navy">I. The Connection Schedule</h3>
              <div className="grid grid-cols-3 gap-1 bg-accord-navy p-px border border-accord-navy rounded-sm overflow-hidden text-[10px] uppercase tracking-tighter">
                <div className="bg-slate-100 p-3 font-bold text-center">Phase</div>
                <div className="bg-slate-100 p-3 font-bold text-center">The Goal</div>
                <div className="bg-slate-100 p-3 font-bold text-center">The Plan</div>
                
                <div className="bg-white p-3 font-medium text-center flex flex-col justify-center"><span>Phase 1</span> <span className="text-slate-500">(Days 1-90)</span></div>
                <div className="bg-white p-3 text-center flex flex-col justify-center italic">Acclimatization</div>
                <div className="bg-white p-3 text-center flex flex-col justify-center"><span className="font-bold underline text-[9px] uppercase tracking-wider mb-1">3-day rolling shift:</span> <span className="text-slate-500 font-medium">3 days with Dad, then 3 days with Mom</span></div>
                
                <div className="bg-white p-3 font-medium text-center flex flex-col justify-center"><span>Phase 2</span> <span className="text-slate-500">(Days 91-180)</span></div>
                <div className="bg-white p-3 text-center flex flex-col justify-center italic">Equal Partnership</div>
                <div className="bg-white p-3 text-center flex flex-col justify-center"><span className="font-bold underline text-[9px] uppercase tracking-wider mb-1">4-day blocks:</span> <span className="text-slate-500 font-medium">4 days with Dad, then 4 days with Mom</span></div>
                
                <div className="bg-white p-3 font-medium text-center flex flex-col justify-center"><span>Phase 3</span> <span className="text-slate-500">(Day 181 onward)</span></div>
                <div className="bg-white p-3 text-center flex flex-col justify-center italic">Stability</div>
                <div className="bg-white p-3 text-center flex flex-col justify-center"><span className="font-bold underline text-[9px] uppercase tracking-wider mb-1">5-day blocks:</span> <span className="text-slate-500 font-medium">5 days with Dad, then 5 days with Mom</span></div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest border-b-2 border-accord-gold pb-2 mb-6 text-accord-navy">II. Who Handles What?</h3>
              <div className="grid grid-cols-3 gap-1 bg-accord-navy p-px border border-accord-navy rounded-sm overflow-hidden text-[10px] uppercase tracking-tighter">
                <div className="bg-slate-100 p-3 font-bold">Domain</div>
                <div className="bg-slate-100 p-3 font-bold">Lead Role</div>
                <div className="bg-slate-100 p-3 font-bold">The Rule</div>
                
                <div className="bg-white p-3 font-medium flex items-center">Routine Health</div>
                <div className="bg-slate-50 p-3 font-bold text-slate-700 flex items-center">Each Parent</div>
                <div className="bg-white p-3 italic text-slate-600 normal-case tracking-normal">Each parent makes day-to-day decisions during their time.</div>
                
                <div className="bg-white p-3 font-medium flex items-center">Major Health</div>
                <div className="bg-blue-50 p-3 text-blue-900 font-bold border-l-4 border-blue-200 flex items-center">Father</div>
                <div className="bg-white p-3 italic text-slate-600 normal-case tracking-normal">Dad makes final health decisions after giving Mom notice/input.</div>
                
                <div className="bg-white p-3 font-medium flex items-center">School & Learning</div>
                <div className="bg-pink-50 p-3 text-pink-900 font-bold border-l-4 border-pink-200 flex items-center">Mother</div>
                <div className="bg-white p-3 italic text-slate-600 normal-case tracking-normal">Mom makes final school decisions after giving Dad notice/input.</div>
                
                <div className="bg-white p-3 font-medium flex items-center">Daily Style</div>
                <div className="bg-slate-50 p-3 font-bold text-slate-700 flex items-center">Each Parent</div>
                <div className="bg-white p-3 italic text-slate-600 normal-case tracking-normal">Each parent manages haircuts and daily outfits during their time.</div>
                
                <div className="bg-white p-3 font-medium flex items-center">Communication</div>
                <div className="bg-slate-50 p-3 flex items-center text-slate-600 font-bold">Mother's Choice</div>
                <div className="bg-white p-3 italic text-slate-600 normal-case tracking-normal">Emma chooses the app; Dad pays for both accounts.</div>
                
                <div className="bg-white p-3 font-medium flex items-center">Money</div>
                <div className="bg-slate-50 p-3 flex items-center text-slate-600 font-bold">Father's Promise</div>
                <div className="bg-white p-3 italic text-slate-600 normal-case tracking-normal">Dad pays future support; Emma’s papers stay 100% private.</div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest border-b-2 border-accord-gold pb-2 mb-6 text-accord-navy">III. The Peace Dividend (The "Fresh Start")</h3>
              <ul className="space-y-4 bg-slate-50 p-8 border border-slate-200 rounded-sm text-sm">
                <li className="flex gap-3 items-start">
                  <span className="font-bold text-accord-gold shrink-0 mt-0.5">•</span>
                  <div><span className="font-bold text-slate-900">The Birthday Gift:</span> Harper always spends her birthday (Nov 12) and Christmas with her Mom.</div>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="font-bold text-accord-gold shrink-0 mt-0.5">•</span>
                  <div><span className="font-bold text-slate-900">Financial Peace:</span> The Father is not using Harper’s support to criticize or expose the Mother’s finances.</div>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="font-bold text-accord-gold shrink-0 mt-0.5">•</span>
                  <div><span className="font-bold text-slate-900">Direct Talk:</span> No "messengers." Mom and Dad talk directly to each other to keep things peaceful.</div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Execution Section */}
        <section id="execution" className="break-before-page py-24 print:py-12 relative z-10 bg-white">
          <div className="doc-header-meta text-center mb-4 uppercase">Execution</div>
          <h2 className="doc-section-title">Statement of Compliance</h2>
          <p className="text-sm leading-relaxed mb-12">
             This document represents our promise to Harper. We are closing the chapter on the past and moving forward as a team. We agree that these rules are in Harper’s best interest and we commit to following them to give her the happiest, most stable childhood possible.
          </p>

          <div className="border border-accord-border p-12 bg-white rounded-sm">
             <div className="doc-header-meta mb-16 text-center underline tracking-[0.3em]">Parental Commitment Signatures</div>
             
             <div className="flex flex-col gap-16 pb-8">
               
               <div className="flex items-start gap-8 w-full max-w-2xl mx-auto">
                 <div className="flex-1">
                   <div className="h-px bg-slate-800 w-full mb-2"></div>
                   <div className="font-serif uppercase tracking-widest text-sm text-slate-800">EMMA ELIZABETH RYAN, Mother</div>
                 </div>
                 <div className="w-48">
                   <div className="flex items-end gap-2">
                     <span className="font-serif text-sm text-slate-800 tracking-wider">Date:</span>
                     <div className="h-px bg-slate-800 flex-1 mb-1"></div>
                   </div>
                 </div>
               </div>
               
               <div className="flex items-start gap-8 w-full max-w-2xl mx-auto">
                 <div className="flex-1">
                   <div className="h-px bg-slate-800 w-full mb-2"></div>
                   <div className="font-serif uppercase tracking-widest text-sm text-slate-800">CRAIG ALEXANDER PAUL SCHULZ, Father</div>
                 </div>
                 <div className="w-48">
                   <div className="flex items-end gap-2">
                     <span className="font-serif text-sm text-slate-800 tracking-wider">Date:</span>
                     <div className="h-px bg-slate-800 flex-1 mb-1"></div>
                   </div>
                 </div>
               </div>
               
             </div>
          </div>
        </section>

      </div>
    </div>
  );
}