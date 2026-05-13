import React from 'react';

export default function FormalCourtAccord() {
  return (
    <div className="bg-gray-100 min-h-screen font-serif text-black print:bg-white relative">
      
      {/* --- PRINT REPEATING HEADER --- */}
      {/* Pinned absolutely to the top of the window, bg-white prevents text showing through */}
      <div className="hidden print:flex fixed top-0 left-0 right-0 h-[1in] flex-col justify-end pb-2 text-[10px] uppercase text-black bg-white z-50 px-12 border-b border-black font-sans">
        <div className="flex justify-between items-end w-full">
          <span>Harper June Elizabeth Ryan</span>
          <span>Court File No.: FDSJ-739-2024</span>
        </div>
      </div>

      {/* --- PRINT REPEATING FOOTER --- */}
      {/* Pinned absolutely to the bottom */}
      <div className="hidden print:flex fixed bottom-0 left-0 right-0 h-[0.75in] flex-col justify-start pt-2 text-[10px] uppercase tracking-widest text-black bg-white z-50 px-12 border-t border-black">
        <div className="flex justify-between items-start w-full">
          <span className="lowercase">11:11 was our wish. and on 11.12.2024 you came through.</span>
          <span className="w-32"></span> {/* Leaves center blank for browser page numbers */}
          <span>Effective: May 20, 2026</span>
        </div>
      </div>

      {/* MAIN DOCUMENT CONTAINER */}
      <div className="max-w-[850px] mx-auto bg-white shadow-xl min-h-screen print:shadow-none print:max-w-none print:w-full print:m-0">
        
        {/* THE TABLE HACK: Forces margins on every printed page */}
        <table className="w-full text-left">
          <thead className="hidden print:table-header-group">
            <tr><td><div className="h-[1.1in]" /></td></tr>
          </thead>
          
          <tfoot className="hidden print:table-footer-group">
            <tr><td><div className="h-[0.8in]" /></td></tr>
          </tfoot>

          <tbody>
            <tr>
              <td className="p-12 md:p-20 print:p-12 print:pt-0">
                
                {/* COVER PAGE (COURT PLEADING FORMAT) */}
                <section className="relative min-h-[90vh] print:min-h-0 print:break-after-page pt-12 print:pt-0">
                  
                  {/* FILED STAMP BOX */}
                  <div className="absolute top-0 right-0 border-2 border-black p-3 w-48 text-[11px] font-sans print:top-0">
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
                  <div className="text-center mb-6 font-bold uppercase text-sm tracking-wide">
                    Harper June Elizabeth Ryan’s Standing Back-to-Back Accord
                  </div>
                  
                  <div className="text-center mt-20 mb-16">
                    <h1 className="text-xl font-bold uppercase tracking-widest leading-relaxed">
                      IN THE COURT OF KING'S BENCH OF NEW BRUNSWICK <br />
                      FAMILY DIVISION <br />
                      JUDICIAL DISTRICT OF SAINT JOHN
                    </h1>
                  </div>

                  <div className="text-center mb-16 space-y-4">
                    <div className="font-bold uppercase tracking-widest">BETWEEN:</div>
                    <div className="font-bold text-lg uppercase tracking-widest">EMMA ELIZABETH RYAN</div>
                    <div>Applicant</div>
                    <div className="py-2">— AND —</div>
                    <div className="font-bold text-lg uppercase tracking-widest">CRAIG ALEXANDER PAUL SCHULZ</div>
                    <div>Respondent</div>
                  </div>

                  {/* DOCUMENT TITLE */}
                  <div className="text-center mb-16 text-2xl font-bold uppercase tracking-widest">
                    INTEGRATED PARENTING CONSTITUTION
                  </div>

                  {/* CASE INFO GRID */}
                  <div className="border-t-2 border-black pt-4 text-sm mt-16 max-w-2xl mx-auto">
                    <div className="grid grid-cols-[1fr_2fr] pb-4">
                      <div className="font-bold uppercase tracking-widest">CHILD</div>
                      <div>Harper June Elizabeth Ryan (born November 12, 2024)</div>
                    </div>
                    <div className="grid grid-cols-[1fr_2fr] pb-4">
                      <div className="font-bold uppercase tracking-widest">PARENTS</div>
                      <div>Emma Elizabeth Ryan; Craig Alexander Paul Schulz</div>
                    </div>
                    <div className="grid grid-cols-[1fr_2fr] pb-4">
                      <div className="font-bold uppercase tracking-widest">COURT FILE</div>
                      <div>FDSJ-739-2024</div>
                    </div>
                    <div className="grid grid-cols-[1fr_2fr] pb-4">
                      <div className="font-bold uppercase tracking-widest">JURISDICTION</div>
                      <div>Judicial District of Saint John</div>
                    </div>
                    <div className="grid grid-cols-[1fr_2fr] pb-4">
                      <div className="font-bold uppercase tracking-widest">EFFECTIVE DATE</div>
                      <div>May 20, 2026</div>
                    </div>
                  </div>

                  <div className="mt-24 text-center text-sm px-12">
                    <p className="mb-2">
                      "Two parents, standing face-to-face, see only conflict. Two parents, standing back-to-back,
                    </p>
                    <p>
                      see the threats coming at their child. This document turns us around."
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
                  <h2 className="text-xl font-bold uppercase text-center mb-8 border-b border-black pb-2">Part IX: Financial Stewardship</h2>
                  
                  <h3 className="font-bold text-lg underline mb-2">Article 9.1 — Father’s Health, Work Capacity, and Current Income</h3>
                  <p className="text-sm leading-relaxed mb-4 text-justify">
                    In January 2026, the Father received MRI results relating to workplace falls in 2021 and May 2025, confirming permanent neck and spinal injuries. As a result, he is no longer able to continue his previous rope and roofing work and is transitioning toward safer, predominantly home-based and online employment.
                  </p>
                  <p className="text-sm leading-relaxed mb-4 text-justify">
                    There is an active WorkSafeNB claim for loss of earnings linked to these injuries, following an earlier approved WorkSafeNB claim for related medical expenses. The outcome of the current claim will determine the Father’s long-term earning capacity and his ability to pay child support.
                  </p>
                  <p className="text-sm leading-relaxed mb-6 text-justify">
                    Since Harper’s birth, the Father’s generated income has been less than $20,000 over approximately 18 months. During this time, his primary focus has been recovering from injury, learning to represent himself in legal matters, working on his health and character, and being a safe, consistent presence in Harper’s life. As a result, he has had a limited ability to pay guideline child support to date.
                  </p>

                  <h3 className="font-bold text-lg underline mb-2">Article 9.2 — Child Support Once Income Is Finalized</h3>
                  <p className="text-sm leading-relaxed mb-4 text-justify">
                    Once the Father’s WorkSafeNB loss-of-earnings benefits and/or other disability income are finalized (including any retroactive amounts), either parent may request that child support be reviewed and set in accordance with the Federal Child Support Guidelines, based on the Father’s actual income, unless the parents reach a different written agreement or the Court orders otherwise.
                  </p>
                  <p className="text-sm leading-relaxed mb-6 text-justify">
                    Any review of support may consider the Father’s finalized income information, including any backdated benefits, and the parenting time structure set out in this Agreement.
                  </p>

                  <h3 className="font-bold text-lg underline mb-2">Article 9.3 — Harper’s Fund (Voluntary Savings Commitment)</h3>
                  <p className="text-sm leading-relaxed mb-4 text-justify">
                    In addition to any child support that may be payable under the Guidelines or by Court order, the Father intends to establish and maintain “Harper’s Fund” (for example, a Registered Education Savings Plan or other savings or investment vehicle in the child’s name) and to contribute to it as he is reasonably able, once his income is stabilized.
                  </p>
                  <p className="text-sm leading-relaxed mb-4 text-justify">
                    The purpose of Harper’s Fund is to build long-term savings for Harper’s future needs, such as education, housing, or starting a business. The specific contribution amounts, investment choices, and administration of Harper’s Fund are voluntary and are not intended to reduce or replace any child support obligation that may be determined under the applicable law.
                  </p>
                  <p className="text-sm leading-relaxed mb-6 text-justify">
                    The Father agrees to provide the Mother with periodic statements for Harper’s Fund upon reasonable request, so that both parents can see the fund’s progress for Harper’s benefit.
                  </p>

                  <h3 className="font-bold text-lg underline mb-2">Article 9.4 — Phase 1 Stabilization Window</h3>
                  <p className="text-sm leading-relaxed mb-4 text-justify">
                    During Phase 1 of this Agreement (Days 1 to 90), the parents acknowledge that the Father’s income and WorkSafeNB claim are still in flux. The parties agree that this period will be treated as a financial stabilization window while the Father’s claim and income baseline are finalized and his transition to new work begins.
                  </p>
                  <p className="text-sm leading-relaxed mb-6 text-justify">
                    Nothing in this Article prevents either parent, or the Court, from revisiting child support during or after Phase 1 if the Father’s income becomes clear or if it becomes unreasonable to delay a support determination in light of the child’s needs.
                  </p>

                  <h3 className="font-bold text-lg underline mb-2">Article 9.5 — Voluntary Mobility Initiative (Capacity Building)</h3>
                  <p className="text-sm leading-relaxed mb-4 text-justify">
                    The following provisions are voluntary undertakings by the Father and are not intended to reduce or replace any child support obligation that may be determined under the Guidelines or by Court order. To support Harper’s long-term stability and reduce the logistical burden on extended family members, the Father may, as his finances allow, provide a safe, reliable, and insured vehicle for the Mother’s primary use. If the Father is able to do this, the vehicle is intended to serve as a primary means of transportation for Harper between households and for her appointments and activities.
                  </p>
                  <p className="text-sm leading-relaxed mb-6 text-justify">
                    If such a vehicle is provided, the parents agree that the Mother will, from that point forward, have the capacity to meet her share of the transportation responsibilities under Article 4.1, subject to any further agreements they may make in writing.
                  </p>

                  <h3 className="font-bold text-lg underline mb-2">Article 9.6 — Voluntary Thrive Provision (Direct Supplies and Emergency Flexibility)</h3>
                  <p className="text-sm leading-relaxed mb-4 text-justify">
                    The following emergency and supply provisions are voluntary commitments by the Father to support the child’s immediate needs and do not limit the Mother’s right to seek child support through the Court if required. The parents acknowledge that the child’s immediate daily needs in both households are the first priority. If, during the Mother’s parenting time, there is a verifiable shortfall in essential supplies for Harper (for example food, diapers, necessary clothing, or other basic care items), the Father agrees, where he is reasonably able to do so, to procure and deliver the needed physical items directly to Harper’s residence upon request made through the co-parenting application.
                  </p>
                  <p className="text-sm leading-relaxed mb-6 text-justify">
                    If the Mother’s financial circumstances materially change such that she requires direct child support payments to maintain Harper’s basic standard of living, the parents agree that either of them may raise this issue through the co-parenting application, and they will then review whether guideline child support should be paid directly to the Mother in accordance with Article 9.2.
                  </p>

                  <h3 className="font-bold text-lg underline mb-2">Article 9.7 — Fiduciary Accountability and Transparency</h3>
                  <p className="text-sm leading-relaxed mb-6 text-justify">
                    The Father acknowledges that verifiable accountability is essential to this Agreement. By committing to disclose his finalized income, to participate in a child support review once his WorkSafeNB claim is determined, and to place any long-term savings for Harper in a dedicated fund with regular statements available to the Mother, he establishes an ongoing, legally enforceable structure that helps protect the child’s financial security from parental financial instability.
                  </p>
                  <p className="text-sm leading-relaxed mb-6 text-justify">
                    These commitments are made in addition to, and not in place of, any child support that may be determined under the Federal Child Support Guidelines or ordered by the Court in the future.
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
                  
                  <div className="text-sm leading-relaxed space-y-4 text-justify px-4">
                    <p>Harper, by the time you read this, you will have questions about why things looked the way they did when you were little. This document was created to protect you—and to protect your Mother and your Father. We learned that fighting each other only made things harder. Standing back-to-back made us a team. We forgave our past, laid down the armor, and ended the court battle because you deserved a childhood that wasn't raised in a courtroom.</p>
                    
                    <p className="pt-8 font-bold">All our love,</p>
                    <p className="font-bold">Mom & Dad</p>
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

              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}