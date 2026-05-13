import React from 'react';

export default function FormalCourtAccord() {
  return (
    <div className="bg-gray-100 py-12 px-4 min-h-screen font-serif text-black print:bg-white print:py-0 print:px-0">
      <div className="max-w-[850px] mx-auto bg-white shadow-xl min-h-screen p-12 md:p-20 relative print:shadow-none print:p-0 print:max-w-none">
        
        {/* --- PRINT REPEATING HEADER --- */}
        <div className="hidden print:flex fixed top-0 left-0 right-0 w-full justify-between items-end text-[10px] uppercase tracking-widest text-black bg-transparent z-50 border-b border-black pb-2 print:-mt-[0.75in]">
          <span>FDSJ-739-2024</span>
          <span className="font-bold">Integrated Parenting Constitution</span>
          <span>Harper June Elizabeth Ryan</span>
        </div>

        {/* --- PRINT REPEATING FOOTER --- */}
        <div className="hidden print:flex fixed bottom-0 left-0 right-0 w-full justify-between items-start text-[10px] uppercase tracking-widest text-black bg-transparent z-50 border-t border-black pt-2 print:-mb-[0.75in]">
          <span>Emma Ryan & Craig Schulz</span>
          <span className="w-32"></span> {/* Page number placeholder */}
          <span>Effective: May 4, 2026</span>
        </div>

        {/* COVER PAGE (COURT PLEADING FORMAT) */}
        <section className="relative min-h-[90vh] print:min-h-0 break-after-page pt-12 print:pt-0">
          
          {/* FILED STAMP BOX */}
          <div className="absolute top-0 right-0 border-2 border-black p-3 w-48 text-[11px] font-sans">
            <div className="font-bold text-center border-b border-black pb-1 mb-2 tracking-widest">FILED</div>
            <div className="flex justify-between items-end mb-3">
              <span>Date:</span>
              <div className="border-b border-black w-32 h-4"></div>
            </div>
            <div className="flex justify-between items-end mb-3">
              <span>Time:</span>
              <div className="border-b border-black w-32 h-4"></div>
            </div>
            <div className="flex justify-between items-end">
              <span>Clerk:</span>
              <div className="border-b border-black w-32 h-4"></div>
            </div>
          </div>

          {/* COURT HEADER */}
          <div className="text-center mt-32 mb-16">
            <h1 className="text-xl font-bold uppercase tracking-widest leading-relaxed">
              Court of King's Bench of New Brunswick <br />
              Family Division
            </h1>
          </div>

          {/* DOCUMENT TITLE */}
          <div className="text-center mb-16 border-y-2 border-black py-8">
            <h2 className="text-2xl font-bold uppercase tracking-widest mb-2">Integrated Parenting Constitution</h2>
            <h3 className="text-xl italic">The Standing Back-to-Back Accord</h3>
            <p className="mt-4 text-sm font-bold">11:11 was our wish. On 11.12 it came true.</p>
          </div>

          {/* CASE INFO GRID */}
          <div className="border-2 border-black text-sm">
            <div className="grid grid-cols-[1fr_2fr] border-b border-black">
              <div className="p-4 border-r border-black font-bold uppercase">Child</div>
              <div className="p-4">Harper June Elizabeth Ryan (born November 12, 2024)</div>
            </div>
            <div className="grid grid-cols-[1fr_2fr] border-b border-black">
              <div className="p-4 border-r border-black font-bold uppercase">Parents</div>
              <div className="p-4">Emma Elizabeth Ryan & Craig Alexander Paul Schulz</div>
            </div>
            <div className="grid grid-cols-[1fr_2fr] border-b border-black">
              <div className="p-4 border-r border-black font-bold uppercase">Court File</div>
              <div className="p-4 font-bold">FDSJ-739-2024</div>
            </div>
            <div className="grid grid-cols-[1fr_2fr] border-b border-black">
              <div className="p-4 border-r border-black font-bold uppercase">Jurisdiction</div>
              <div className="p-4">Judicial District of Saint John</div>
            </div>
            <div className="grid grid-cols-[1fr_2fr] border-b border-black">
              <div className="p-4 border-r border-black font-bold uppercase">Effective Date</div>
              <div className="p-4">May 4, 2026</div>
            </div>
          </div>

          <div className="mt-24 text-center italic text-lg leading-relaxed px-12">
            <p className="mb-6">
              "Two parents, standing face-to-face, see only conflict. <br />
              Two parents, standing back-to-back, see the threats <br />
              coming at their child. This document turns us around."
            </p>
            <p className="text-base">
              “Two are better than one, because they have a good return for their labor. If either of them falls down, one can help the other up.” — Ecclesiastes 4:9–10
            </p>
          </div>
        </section>

        {/* --- PART I --- */}
        <section className="print:break-before-page py-12 print:py-8">
          <h2 className="text-xl font-bold uppercase text-center mb-8 border-b border-black pb-2">Part I: Foundation</h2>
          
          <h3 className="font-bold text-lg underline mb-2">Article 1.1 — Shared Intent</h3>
          <p className="text-sm leading-relaxed mb-6 text-justify">
            This Agreement is made in Harper’s best interests and is intended to provide her with stability, predictability, safety, and meaningful relationships with both parents.
          </p>

          <h3 className="font-bold text-lg underline mb-2">Article 1.2 — Parental Primacy (The "Circle of Two")</h3>
          <p className="text-sm leading-relaxed mb-6 text-justify">
            Parenting decisions and responsibilities belong exclusively to the Mother and the Father. Extended family members and other third parties may support Harper’s life, but they do not possess operational governance or make parenting decisions for her. All operational authority is concentrated within the parents' "Circle of Two."
          </p>

          <h3 className="font-bold text-lg underline mb-2">Article 1.3 — Parallel Parenting, Personalized</h3>
          <p className="text-sm leading-relaxed mb-6 text-justify">
            This Agreement follows a “parallel parenting” approach, where each parent is responsible for Harper’s day-to-day life during their own time, with clear rules for transitions and communication. It is also personalized to Harper by preserving her bonds with extended family and her community while adding enough structure to fully protect her growth and development.
          </p>
        </section>

        {/* --- PART II --- */}
        <section className="print:break-before-page py-12 print:py-8">
          <h2 className="text-xl font-bold uppercase text-center mb-8 border-b border-black pb-2">Part II: Decision-Making Architecture</h2>
          
          <h3 className="font-bold text-lg underline mb-2">Article 2.1 — Divided Decision-Making Responsibilities</h3>
          <p className="text-sm leading-relaxed mb-4 text-justify">
            To reduce conflict and allow timely decisions, the parents agree to divide decision-making responsibilities by domain:
          </p>

          <div className="space-y-4 mb-8">
            <div className="border border-black p-4">
              <h4 className="font-bold uppercase text-sm mb-2">Health and Related Matters (Father)</h4>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>The Father has final decision-making responsibility for Harper’s medical, dental, therapeutic, and nutritional care.</li>
                <li>He will give the Mother notice of proposed major decisions and an opportunity to provide input through the co‑parenting application, except in emergencies.</li>
              </ul>
            </div>
            
            <div className="border border-black p-4">
              <h4 className="font-bold uppercase text-sm mb-2">Education and Extracurricular Matters (Mother)</h4>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>The Mother has final decision-making responsibility for Harper’s education and significant extracurricular activities.</li>
                <li>She will give the Father notice of proposed major decisions and an opportunity to provide input through the co‑parenting application.</li>
              </ul>
            </div>

            <div className="border border-black p-4">
              <h4 className="font-bold uppercase text-sm mb-2">Day-to-Day Decisions (Each Parent)</h4>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>Each parent may make day-to-day decisions for Harper while she is in that parent’s care.</li>
              </ul>
            </div>
          </div>

          <h3 className="font-bold text-lg underline mb-2">Article 2.2 — Information Access</h3>
          <p className="text-sm leading-relaxed mb-6 text-justify">
            Both parents shall have direct and independent access to Harper’s medical providers, records, school records, daycare information, and institutional portals. Neither parent shall remove the other from any such system or permit a third party to act as gatekeeper.
          </p>

          <h3 className="font-bold text-lg underline mb-2">Article 2.3 — Direct Consultation and Third-Party Exclusion</h3>
          <p className="text-sm leading-relaxed mb-4 text-justify">
            All major decisions about Harper’s health, education, and significant activities shall be discussed directly between the parents through the agreed co‑parenting application.
          </p>
          <p className="text-sm leading-relaxed mb-4 text-justify">
            Neither parent shall delegate their decision‑making authority or consultation duties to any third party, including extended family members, romantic partners, or legal advocates, for day‑to‑day administrative matters.
          </p>
          <p className="text-sm leading-relaxed mb-6 text-justify">
            Each parent will respond to reasonable requests about major medical or educational decisions within 48 hours where reasonably possible. If a matter remains unresolved and is not urgent, the parents may seek mediation, parenting coordination, or Court direction as needed.
          </p>

          <h3 className="font-bold text-lg underline mb-2">Article 2.4 — Relocation and Travel</h3>
          <p className="text-sm leading-relaxed mb-6 text-justify">
            Harper’s habitual residence shall remain within the greater Saint John area unless otherwise agreed in writing or ordered by the Court. Neither parent shall relocate Harper’s primary residence more than 50 km without written agreement or Court order. International travel requires both parents’ written consent or Court order.
          </p>
        </section>

        {/* --- PART III --- */}
        <section className="print:break-before-page py-12 print:py-8">
          <h2 className="text-xl font-bold uppercase text-center mb-8 border-b border-black pb-2">Part III: Parenting Time & Stability Phases</h2>
          
          <h3 className="font-bold text-lg underline mb-2">Article 3.1 — Stability Phases</h3>
          <p className="text-sm mb-4">
            Parenting time is structured in three phases to support Harper’s attachments and gradually move into longer, stable blocks:
          </p>

          <div className="border border-black mb-8 text-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border border-black p-2 bg-gray-50 print:bg-white">Phase</th>
                  <th className="border border-black p-2 bg-gray-50 print:bg-white">Duration</th>
                  <th className="border border-black p-2 bg-gray-50 print:bg-white">Structure</th>
                  <th className="border border-black p-2 bg-gray-50 print:bg-white">Pattern</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black p-2 font-bold">Phase 1: Transition</td>
                  <td className="border border-black p-2">Days 1–90</td>
                  <td className="border border-black p-2">3/3 Rotation</td>
                  <td className="border border-black p-2">3 days with Father, then 3 days with Mother</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold">Phase 2: Partnership</td>
                  <td className="border border-black p-2">Days 91–180</td>
                  <td className="border border-black p-2">4/4 Rotation</td>
                  <td className="border border-black p-2">4 days with Father, then 4 days with Mother</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold">Phase 3: Permanency</td>
                  <td className="border border-black p-2">Day 181 onward</td>
                  <td className="border border-black p-2">5/5 Rotation</td>
                  <td className="border border-black p-2">5 days with Father, then 5 days with Mother</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-bold text-lg underline mb-2">Article 3.2 — Phase 1: 3/3 Rolling Rotation</h3>
          <ul className="list-disc pl-5 text-sm space-y-2 mb-6">
            <li><span className="font-bold">Pattern:</span> 3 consecutive days with one parent, then 3 consecutive days with the other parent, repeating continuously.</li>
            <li><span className="font-bold">Goal:</span> Maximize contact and minimize long gaps as Harper adjusts to regular transitions.</li>
            <li><span className="font-bold">Exchanges:</span> Unless otherwise agreed, exchanges occur at 9:00 AM at the home of the parent whose block is beginning.</li>
          </ul>

          <h3 className="font-bold text-lg underline mb-2">Article 3.3 — Phase 2: 4/4 Equal Blocks</h3>
          <ul className="list-disc pl-5 text-sm space-y-2 mb-6">
            <li><span className="font-bold">Start:</span> Begins on Day 91 unless both parents agree in writing to adjust the start or the Court orders otherwise.</li>
            <li><span className="font-bold">Pattern:</span> 4 consecutive days with one parent, then 4 with the other parent, repeating.</li>
          </ul>

          <h3 className="font-bold text-lg underline mb-2">Article 3.4 — Phase 3: 5/5 Equal Blocks</h3>
          <ul className="list-disc pl-5 text-sm space-y-2 mb-6">
            <li><span className="font-bold">Start:</span> Begins on Day 181 unless both parents agree in writing to adjust the start or the Court orders otherwise.</li>
            <li><span className="font-bold">Pattern:</span> 5 consecutive days with one parent, then 5 with the other parent, repeating.</li>
          </ul>

          <h3 className="font-bold text-lg underline mb-2">Article 3.5 — Milestone Gift and Overrides</h3>
          <p className="text-sm leading-relaxed mb-4 text-justify">
            In recognition of the Mother's primary bond and to ensure absolute peace during holiday cycles, the Father irrevocably waives his claim to shared parenting time on the following days annually:
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1 mb-4">
            <li>Christmas Eve & Christmas Day</li>
            <li>Mother's Day</li>
            <li>Emma’s Birthday</li>
            <li>Harper’s Birthday (November 12th)</li>
          </ul>
          <p className="text-sm leading-relaxed mb-6 text-justify">
            These days shall belong exclusively to the Mother every single year. Reciprocally, Father’s Day and the Father’s Birthday belong exclusively to the Father's household. These overrides apply regardless of the active rotation.
          </p>

          <h3 className="font-bold text-lg underline mb-2">Article 3.6 — Additional Holidays and School Breaks</h3>
          <ul className="list-disc pl-5 text-sm space-y-2 mb-6">
            <li>New Year’s Eve / New Year’s Day, March Break, Easter weekend, Canada Day, Labour Day, and Thanksgiving weekend will alternate between the parents each year, unless the parents agree otherwise in writing.</li>
            <li>These holiday periods override the regular 3/3, 4/4, or 5/5 rotation for those specific days, and the regular schedule resumes immediately after.</li>
          </ul>

          <h3 className="font-bold text-lg underline mb-2">Article 3.7 — Schedule Changes</h3>
          <p className="text-sm leading-relaxed mb-6 text-justify">
            No parent may unilaterally change the schedule. Temporary changes may be made by written agreement through the co-parenting application. Permanent changes require written agreement or Court order.
          </p>
        </section>

        {/* --- PART IV --- */}
        <section className="print:break-before-page py-12 print:py-8">
          <h2 className="text-xl font-bold uppercase text-center mb-8 border-b border-black pb-2">Part IV: Transitions & Logistics</h2>
          
          <h3 className="font-bold text-lg underline mb-2">Article 4.1 — The Delivery Standard (Drop-Off Only)</h3>
          <p className="text-sm leading-relaxed mb-4 text-justify">
            Transportation responsibilities are structured to ensure absolute punctuality and minimize wait times. All routine handovers proceed via a Drop-Off requirement.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-2 mb-6">
            <li><span className="font-bold">The Responsibility:</span> The parent concluding their authorized parenting time carries the operational mandate to arrange transit and deliver Harper to the initiating parent’s primary residence.</li>
            <li><span className="font-bold">The Rule:</span> You are responsible for the "outbound" journey at the end of your time. This ensures the receiving parent is ready and waiting at their own home.</li>
          </ul>

          <h3 className="font-bold text-lg underline mb-2">Article 4.2 — Licensed & Sober Transit Standard</h3>
          <p className="text-sm leading-relaxed mb-4 text-justify">
            Given the rural nature of both residences, the focus is on safety rather than professional couriers.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-2 mb-6">
            <li><span className="font-bold">Authorized Drivers:</span> Any licensed and insured driver authorized by the parent (including family members, friends, or the parents themselves) may execute transportation.</li>
            <li><span className="font-bold">The Sobriety Mandate:</span> Every driver must meet the legal standard for sobriety. No exceptions.</li>
            <li><span className="font-bold">Logistical Integrity:</span> Transportation shall never be used as a barrier to parenting time. A lack of personal transportation does not excuse a failure to deliver; it is the parent’s duty to secure a safe ride for Harper.</li>
          </ul>

          <h3 className="font-bold text-lg underline mb-2">Article 4.3 — Threshold Handoff Protocol</h3>
          <p className="text-sm leading-relaxed mb-4 text-justify">
            Transitions at the door are to be brief, peaceful, and focused entirely on Harper’s comfort.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-2 mb-6">
            <li><span className="font-bold">Zero Conflict Zone:</span> No logistical debates, financial discussions, or historical grievances shall be aired during the exchange.</li>
            <li><span className="font-bold">The Digital Briefing:</span> All information regarding Harper’s recent meals, sleep, or health must be shared through the mandated application prior to the exchange, rather than at the door.</li>
            <li><span className="font-bold">Support Network:</span> While the exchange is primarily between parents, supportive family members or friends are not restricted from the area, provided all conduct remains calm and child-focused.</li>
          </ul>

          <h3 className="font-bold text-lg underline mb-2">Article 4.4 — Non-Interference & Punctuality</h3>
          <ul className="list-disc pl-5 text-sm space-y-2 mb-6">
            <li><span className="font-bold">Punctuality:</span> Arrival times must be strictly honored within a 15-minute grace period. Longer delays should be communicated as soon as possible.</li>
            <li><span className="font-bold">No Paternal/Maternal Facilitation:</span> Neither parent is required to provide transportation for the other parent's delivery obligation. Each household manages its own logistics independently.</li>
          </ul>
        </section>

        {/* --- PART V --- */}
        <section className="print:break-before-page py-12 print:py-8">
          <h2 className="text-xl font-bold uppercase text-center mb-8 border-b border-black pb-2">Part V: Safety & Verification</h2>
          
          <h3 className="font-bold text-lg underline mb-2">Article 5.1 — Safe Care Standard</h3>
          <p className="text-sm leading-relaxed mb-6 text-justify">
            Harper will not be left in the sole care of any adult who is visibly impaired by alcohol or non‑prescribed drugs. Each parent is responsible for ensuring that any adult who is supervising Harper alone is sober and capable of safe care.
          </p>

          <h3 className="font-bold text-lg underline mb-2">Article 5.2 — Multi‑Generational Homes</h3>
          <p className="text-sm leading-relaxed mb-4 text-justify">
            Both parents currently live in multi‑generational homes. The parents cannot control the choices of other adults in those homes, but they will:
          </p>
          <ul className="list-disc pl-5 text-sm space-y-2 mb-6">
            <li>Not leave Harper alone in the care of any impaired adult; and</li>
            <li>Take reasonable steps to shield Harper from adult conflict, intoxication, and tension.</li>
          </ul>

          <h3 className="font-bold text-lg underline mb-2">Article 5.3 — Co-Parenting Communication Platform</h3>
          <p className="text-sm leading-relaxed mb-4 text-justify">
            The co-parenting communication platform selected under Article 6.1 shall be used for all formal communication.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-2 mb-6">
            <li><span className="font-bold">The "Stick" Rule:</span> Traditional text messaging and phone calls shall be reserved for emergencies or immediate "doorstep" logistics only.</li>
          </ul>

          <h3 className="font-bold text-lg underline mb-2">Article 5.4 — Documentation and Accountability</h3>
          <p className="text-sm leading-relaxed mb-4 text-justify">
            Regardless of the platform selected by the Mother, the parties agree to utilize the following features to maintain a transparent "Source of Truth":
          </p>
          <ul className="list-disc pl-5 text-sm space-y-2 mb-6">
            <li><span className="font-bold">Timestamping:</span> Use of sent and read receipts for all messages.</li>
            <li><span className="font-bold">Shared Calendar:</span> Mandatory logging of all appointments, school events, and travel.</li>
            <li><span className="font-bold">Tone Monitoring:</span> Use of built-in "Tone Meters" (if available) to ensure communication remains civil and child-centric.</li>
            <li><span className="font-bold">Court Admissibility:</span> Both parents acknowledge that the exported logs from the selected application shall serve as the definitive record of parental conduct and communication.</li>
          </ul>
        </section>

        {/* --- PART VI --- */}
        <section className="print:break-before-page py-12 print:py-8">
          <h2 className="text-xl font-bold uppercase text-center mb-8 border-b border-black pb-2">Part VI: Staying In Touch & Updates</h2>
          
          <h3 className="font-bold text-lg underline mb-2">Article 6.1 — Using One App for Everything</h3>
          <p className="text-sm leading-relaxed mb-4 text-justify">
            The parents will use one co‑parenting app for all non‑emergency communication about Harper. The initial platform will be OurFamilyWizard. If the Mother prefers a different recognized co‑parenting app (for example, AppClose or TalkingParents), the parents may agree in writing to switch, and the Father will cooperate with that change.
          </p>
          <p className="text-sm leading-relaxed mb-6 text-justify">
            The Father will pay the full membership fees for both parents so there is no cost to the Mother. Text messages and phone calls are reserved for emergencies or quick “at the door” logistics only; all other communication stays in the app.
          </p>

          <h3 className="font-bold text-lg underline mb-2">Article 6.2 — The Nightly Check-In</h3>
          <p className="text-sm leading-relaxed mb-4 text-justify">
            Because it is important for both parents to know Harper is doing well, the parent who has Harper will send a quick "Nightly Update" through the app. This is a simple way to share peace of mind and keep everyone connected to her routine. Each night before bed, the parent will send a quick note covering:
          </p>
          <ul className="list-disc pl-5 text-sm space-y-2 mb-6">
            <li><span className="font-bold">Eating:</span> (Example: "Ate her dinner well.")</li>
            <li><span className="font-bold">Health:</span> (Example: "No fever, happy and healthy.")</li>
            <li><span className="font-bold">Mood:</span> (Example: "Had a great day playing outside.")</li>
            <li><span className="font-bold">Sleep:</span> (Example: "Tucked in and fast asleep.")</li>
          </ul>

          <h3 className="font-bold text-lg underline mb-2">Article 6.3 — Sharing Photos</h3>
          <p className="text-sm leading-relaxed mb-6 text-justify">
            Both parents agree to share photos of Harper’s milestones and daily activities through the app gallery. This ensures both households can see her grow and keep those memories in one safe place.
          </p>
        </section>

        {/* --- PART VII --- */}
        <section className="print:break-before-page py-12 print:py-8">
          <h2 className="text-xl font-bold uppercase text-center mb-8 border-b border-black pb-2">Part VII: Family & Friends (Keeping Things Peaceful)</h2>
          
          <h3 className="font-bold text-lg underline mb-2">Article 7.1 — Manners and Kindness</h3>
          <p className="text-sm leading-relaxed mb-4 text-justify">
            Harper picks up on everything around her, especially how the adults in her life get along. Having extended family and friends at Harper’s milestones (like birthdays or school events) is a special part of her life, as long as everyone stays polite and friendly.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-2 mb-6">
            <li><span className="font-bold">The Rule:</span> All family members and friends agree to use "Common Manners" whenever Harper is watching. This means no arguing, no mean comments, and keeping things positive.</li>
            <li><span className="font-bold">Our Promise:</span> "We are the gatekeepers of Harper's peace. We both agree to make sure our own families follow this rule so Harper always feels safe and happy when we are all together."</li>
          </ul>
        </section>

        {/* --- PART VIII --- */}
        <section className="print:break-before-page py-12 print:py-8">
          <h2 className="text-xl font-bold uppercase text-center mb-8 border-b border-black pb-2">Part VIII: Records and Coordination</h2>
          
          <h3 className="font-bold text-lg underline mb-2">Article 8.1 — Health Records and Appointments</h3>
          <p className="text-sm leading-relaxed mb-6 text-justify">
            The parents will each maintain access to Harper’s medical information through MyHealthNB or any successor portal, and both may contact health providers directly about Harper. No medical or dental appointment for Harper will be booked or attended without both parents being informed in advance through the co‑parenting app, except in emergencies. Both parents will share full information about Harper’s past and current diagnoses, medications, and treatment plans with each other, so Harper’s medical history is complete and consistent.
          </p>

          <h3 className="font-bold text-lg underline mb-2">Article 8.2 — School and Learning</h3>
          <p className="text-sm leading-relaxed mb-4 text-justify">
            To make sure Harper has a steady path for her education, the Mother takes the lead on where Harper goes to school and what she learns.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-2 mb-6">
            <li><span className="font-bold">The School Lead:</span> The Mother handles coordinating Harper’s primary school and signing her up for classes.</li>
            <li><span className="font-bold">Staying Informed:</span> The Mother will keep the Father updated on all school choices, report cards, and big academic dates through the app.</li>
          </ul>
        </section>

        {/* --- PART IX --- */}
        <section className="print:break-before-page py-12 print:py-8">
          <h2 className="text-xl font-bold uppercase text-center mb-8 border-b border-black pb-2">Part IX: Money & Support</h2>
          
          <h3 className="font-bold text-lg underline mb-2">Article 9.1 — Child Support for Now</h3>
          <p className="text-sm leading-relaxed mb-6 text-justify">
            At this time, neither parent is asking the Court for an order that the other pay ongoing child support. No table child support will be payable until the Father’s WorkSafeNB or disability income has been finalized.
          </p>

          <h3 className="font-bold text-lg underline mb-2">Article 9.2 — Father’s Future Support</h3>
          <p className="text-sm leading-relaxed mb-6 text-justify">
            Once the Father’s WorkSafeNB or disability claim is finalized, he will contribute to Harper’s support in an amount based on his income and the Federal Child Support Guidelines, unless the parents agree otherwise in writing or the Court orders a different amount.
          </p>

          <h3 className="font-bold text-lg underline mb-2">Article 9.3 — Mother’s Financial Privacy</h3>
          <p className="text-sm leading-relaxed mb-6 text-justify">
            For this Agreement, the Father does not ask for the Mother’s financial disclosure and will not request her bank records or other detailed financial information, unless a Court later requires it.
          </p>

          <h3 className="font-bold text-lg underline mb-2">Article 9.4 — Extra Expenses (Section 7)</h3>
          <p className="text-sm leading-relaxed mb-6 text-justify">
            Extraordinary expenses (for example major medical, dental, or education costs beyond the usual routine) will only be shared where both parents have agreed in advance in writing through the co‑parenting app, or as later ordered by the Court.
          </p>
        </section>

        {/* --- PART X --- */}
        <section className="print:break-before-page py-12 print:py-8">
          <h2 className="text-xl font-bold uppercase text-center mb-8 border-b border-black pb-2">Part X: Solving Problems Peacefully</h2>
          
          <h3 className="font-bold text-lg underline mb-2">Article 10.1 — Solving Disagreements Without Court</h3>
          <p className="text-sm leading-relaxed mb-4 text-justify">
            Going back to court is stressful for everyone and hard on Harper. This plan makes sure we try to solve things ourselves first.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-2 mb-6">
            <li><span className="font-bold">The 48-Hour Rule:</span> If we have a disagreement about the schedule or a rule, we agree to wait 48 hours and talk it out calmly through the app before doing anything else.</li>
            <li><span className="font-bold">Asking for Help:</span> If we still cannot agree after 48 hours, we will seek help from a neutral professional such as a mediator or Parenting Coordinator. The Parenting Coordinator may assist us to implement this Agreement and make recommendations. If we still cannot agree, either of us may apply to the Court, except in urgent safety matters.</li>
          </ul>

          <h3 className="font-bold text-lg underline mb-2">Article 10.2 — Protecting Harper’s Feelings</h3>
          <p className="text-sm leading-relaxed mb-4 text-justify">
            Both parents promise to keep Harper’s world positive and happy.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-2 mb-6">
            <li><span className="font-bold">The Kindness Rule:</span> Neither parent will say mean things about the other parent when Harper is around. We won't use her as a messenger to send notes back and forth.</li>
            <li><span className="font-bold">Harper’s Right:</span> Harper has the right to love both her Mom and her Dad without feeling caught in the middle. We agree to keep all "grown-up" talk and disagreements away from her.</li>
          </ul>
        </section>

        {/* --- PART XI --- */}
        <section className="print:break-before-page py-12 print:py-8">
          <h2 className="text-xl font-bold uppercase text-center mb-8 border-b border-black pb-2">Part XI: Our Fresh Start</h2>
          
          <h3 className="font-bold text-lg underline mb-4">Article 11.1 — A Final Vow (To Be Read by Harper One Day)</h3>
          <div className="italic text-sm leading-relaxed space-y-4 text-justify border border-black p-6">
            <p>Harper, by the time you read this, you will have questions about why things looked the way they did when you were little. This document was created to protect you—and to protect your Mother and your Father.</p>
            <p>We learned that fighting each other only made things harder. Standing back-to-back made us a team. We forgave our past, laid down the armor, and ended the court battle because you deserved a childhood that wasn't raised in a courtroom.</p>
            <p className="pt-4 text-right font-bold not-italic">All our love, <br /> Mom & Dad</p>
          </div>
        </section>

        {/* --- EXECUTION & SIGNATURES --- */}
        <section className="print:break-before-page py-12 print:py-8">
          <h2 className="text-xl font-bold uppercase text-center mb-8 border-b border-black pb-2">Statement of Compliance</h2>
          <p className="text-sm leading-relaxed mb-16 text-justify">
             This document represents our promise to Harper. We are closing the chapter on the past and moving forward as a team. We agree that these rules are in Harper’s best interest and we commit to following them to give her the happiest, most stable childhood possible. We declare that the information in this Constitution is true and accurate, and that it has been prepared in good faith.
          </p>

          {/* SIGNATURE BLOCK */}
          <div className="flex flex-col gap-12 mb-16">
            <div className="flex items-start gap-8 w-full">
              <div className="flex-1">
                <div className="h-px bg-black w-full mb-2"></div>
                <div className="uppercase tracking-widest text-sm font-bold">EMMA ELIZABETH RYAN</div>
                <div className="text-xs italic">Mother</div>
              </div>
              <div className="w-48">
                <div className="flex items-end gap-2">
                  <span className="text-sm font-bold">Date:</span>
                  <div className="h-px bg-black flex-1 mb-1"></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-8 w-full">
              <div className="flex-1">
                <div className="h-px bg-black w-full mb-2"></div>
                <div className="uppercase tracking-widest text-sm font-bold">CRAIG ALEXANDER PAUL SCHULZ</div>
                <div className="text-xs italic">Father / Self-Represented Litigant</div>
              </div>
              <div className="w-48">
                <div className="flex items-end gap-2">
                  <span className="text-sm font-bold">Date:</span>
                  <div className="h-px bg-black flex-1 mb-1"></div>
                </div>
              </div>
            </div>
          </div>

          {/* JURAT / COMMISSIONER BLOCK */}
          <div className="border-t-2 border-black pt-8 mt-12 grid grid-cols-2 gap-12">
            
            {/* Left Column: Judicial Endorsement */}
            <div>
              <h3 className="font-bold underline uppercase mb-4 text-sm">Judicial Endorsement</h3>
              <p className="text-xs mb-16">
                The terms of this Integrated Parenting Constitution are hereby endorsed and ordered by the Court.
              </p>
              <div className="h-px bg-black w-full mb-2"></div>
              <p className="text-[10px] uppercase font-bold text-center">Justice / Master of the Court of King's Bench</p>
            </div>

            {/* Right Column: Commissioner of Oaths */}
            <div>
              <h3 className="font-bold underline uppercase mb-4 text-sm">Acknowledgment</h3>
              <p className="text-xs mb-6">
                SWORN (or AFFIRMED) before me at the City of Saint John, in the Province of New Brunswick, this ______ day of __________________, 2026.
              </p>
              
              <div className="mt-12">
                <div className="h-px bg-black w-full mb-2"></div>
                <p className="text-[10px] uppercase font-bold text-center">Commissioner of Oaths / Notary Public</p>
                <p className="text-[10px] text-center">Province of New Brunswick</p>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}