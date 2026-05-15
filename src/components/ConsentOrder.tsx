import React from 'react';

export default function ConsentOrder() {
  return (
    <div className="min-h-screen bg-slate-100 py-12 md:py-24 print:bg-white print:py-0">
      <div className="max-w-[8.5in] mx-auto bg-white p-8 sm:p-16 lg:p-[1in] shadow-xl text-black font-serif text-[11pt] leading-relaxed relative print:shadow-none print:p-0">
        
        {/* Repeating header for print via print styles or absolute positioning is tricky for multi-page unless we just put it at the top for web. We'll simply format it well. */}
        <div className="flex justify-end mb-12">
          <div className="text-right">
            Court File No: FDSJ-739-2024
          </div>
        </div>
        
        <div className="mb-8 uppercase tracking-wide leading-loose">
          <p>IN THE COURT OF KING'S BENCH OF NEW BRUNSWICK</p>
          <p>FAMILY DIVISION</p>
          <p>JUDICIAL DISTRICT OF SAINT JOHN</p>
          <p className="mt-8 mb-4">BETWEEN:</p>
        </div>

        <div className="ml-12 mb-12">
          <p className="font-bold">EMMA RYAN</p>
          <p className="text-right w-64 mt-2 mb-4">Applicant</p>
          <p className="mb-4">-and-</p>
          <p className="font-bold">CRAIG SCHULZ</p>
          <p className="text-right w-64 mt-2">Respondent</p>
        </div>

        <div className="text-center font-bold font-sans text-xl tracking-widest my-16 border-y-2 border-black py-4">
          CONSENT ORDER
        </div>

        <div className="space-y-6 text-justify">
          <p><span className="font-bold">WHEREAS</span> the parties are the parents of <span className="font-bold">HARPER JUNE ELIZABETH RYAN</span>, born <span className="font-bold">November 12, 2024</span>;</p>

          <p><span className="font-bold">WHEREAS</span> the Applicant filed an Application (Form 81A) on December 16, 2024, seeking an order for child support, decision-making, and parenting time;</p>

          <p><span className="font-bold">WHEREAS</span> the parties have participated in various court appearances and were previously governed by Interim Orders dated October 6, 2025, and March 31, 2026;</p>

          <p><span className="font-bold">WHEREAS</span> the parties have now reached a comprehensive agreement on all outstanding issues regarding parenting and support, which is incorporated herein;</p>

          <p className="font-bold mt-12 mb-6 uppercase">IT IS HEREBY ORDERED AS FOLLOWS:</p>

          {/* Numbered List */}
          <div className="space-y-6 pl-2 pr-2 sm:pr-8">
            <div className="flex gap-4">
              <span className="w-6 shrink-0">1.</span>
              <p><span className="font-bold">Shared Intent:</span> This Order is made in Harper’s best interests and is intended to provide her with stability, predictability, safety, and meaningful relationships with both parents.</p>
            </div>
            
            <div className="flex gap-4">
              <span className="w-6 shrink-0">2.</span>
              <p><span className="font-bold">Parental Primacy (The "Circle of Two"):</span> Parenting decisions and responsibilities belong exclusively to the Mother and the Father. Extended family members and other third parties may support Harper’s life, but they do not possess operational governance or make parenting decisions for her. All operational authority is concentrated within the parents' "Circle of Two."</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">3.</span>
              <p><span className="font-bold">Parallel Parenting, Personalized:</span> This Constitution follows a “parallel parenting” approach, where each parent is responsible for Harper’s day-to-day life during their own time, with clear rules for transitions and communication. It is also personalized to Harper by preserving her bonds with extended family and her community while adding enough structure to fully protect her growth and development.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">4.</span>
              <p><span className="font-bold">Divided Decision-Making Responsibilities:</span> To reduce conflict and allow timely decisions, the parents agree to divide decision-making responsibilities by domain: Health and Related Matters (Father): The Father has final decision-making responsibility for Harper’s medical, dental, therapeutic, and nutritional care. He will give the Mother notice of proposed major decisions and an opportunity to provide input through the co-parenting application, except in emergencies. Education and Extracurricular Matters (Mother): The Mother has final decision-making responsibility for Harper’s education and significant extracurricular activities. She will give the Father notice of proposed major decisions and an opportunity to provide input through the co-parenting application. Day-to-Day Decisions (Each Parent): Each parent may make day-to-day decisions for Harper while she is in that parent’s care.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">5.</span>
              <p><span className="font-bold">Information Access:</span> Both parents shall have direct and independent access to Harper’s medical providers, records, school records, daycare information, and institutional portals. Neither parent shall remove the other from any such system or permit a third party to act as gatekeeper.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">6.</span>
              <p><span className="font-bold">Direct Consultation and Third-Party Exclusion:</span> All major decisions about Harper’s health, education, and significant activities shall be discussed directly between the parents through the agreed co-parenting application. Neither parent shall delegate their decision-making authority or consultation duties to any third party, including extended family members, romantic partners, or legal advocates, for day-to-day administrative matters. Each parent will respond to reasonable requests about major medical or educational decisions within 48 hours where reasonably possible. If a matter remains unresolved and is not urgent, the parents may seek mediation, parenting coordination, or Court direction as needed.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">7.</span>
              <p><span className="font-bold">Relocation and Travel:</span> Harper’s habitual residence shall remain within the greater Saint John area unless otherwise agreed in writing or ordered by the Court. Neither parent shall relocate Harper’s primary residence more than 50 km without written agreement or Court order. International travel requires both parents’ written consent or Court order.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">8.</span>
              <p><span className="font-bold">Stability Phases:</span> Parenting time is structured in three phases to support Harper’s attachments and gradually move into longer, stable blocks: 1. Phase 1 (Transition): Days 1 to 90 on a 3/3 Rotation. 2. Phase 2 (Partnership): Days 91 to 180 on a 4/4 Rotation. 3. Phase 3 (Permanency): Day 181 onward on a 5/5 Rotation.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">9.</span>
              <p><span className="font-bold">Phase 1: 3/3 Rolling Rotation:</span> Pattern: 3 consecutive days with one parent, then 3 consecutive days with the other parent, repeating continuously. Goal: Maximize contact and minimize long gaps as Harper adjusts to regular transitions. Exchanges: Unless otherwise agreed, exchanges occur at 9:00 AM at the home of the parent whose block is beginning.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">10.</span>
              <p><span className="font-bold">Phase 2: 4/4 Equal Blocks:</span> Start: Begins on Day 91 unless both parents agree in writing to adjust the start or the Court orders otherwise. Pattern: 4 consecutive days with one parent, then 4 with the other parent, repeating. Exchanges: Unless otherwise agreed, exchanges occur at 9:00 AM at the home of the parent whose block is beginning.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">11.</span>
              <p><span className="font-bold">Phase 3: 5/5 Equal Blocks:</span> Start: Begins on Day 181 unless both parents agree in writing to adjust the start or the Court orders otherwise. Pattern: 5 consecutive days with one parent, then 5 with the other parent, repeating. Exchanges: Unless otherwise agreed, exchanges occur at 9:00 AM at the home of the parent whose block is beginning.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">12.</span>
              <p><span className="font-bold">Milestone Gift and Overrides:</span> In recognition of the Mother's primary bond and to ensure absolute peace during holiday cycles, the Father irrevocably waives his claim to shared parenting time on the following days annually: Christmas Eve & Christmas Day; Mother's Day; Emma’s Birthday; Harper’s Birthday (November 12th). These days shall belong exclusively to the Mother every single year. Reciprocally, Father’s Day and Father's Birthday belong exclusively to the Father's household. These overrides apply regardless of the active rotation.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">13.</span>
              <p><span className="font-bold">Additional Holidays and School Breaks:</span> The following holiday periods will alternate between the parents each year, unless the parents agree otherwise in writing. These periods override the regular rotation, which resumes immediately after: New Year’s Eve / New Year’s Day, March Break, Easter weekend, Canada Day, Labour Day, Thanksgiving weekend.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">14.</span>
              <p><span className="font-bold">Schedule Changes:</span> No parent may unilaterally change the schedule. Temporary changes may be made by written agreement through the co-parenting application. Permanent changes require written agreement or Court order.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">15.</span>
              <p><span className="font-bold">The Delivery Standard (Drop-Off Only):</span> Transportation responsibilities are structured to ensure absolute punctuality and minimize wait times. All routine handovers proceed via a Drop-Off requirement. The parent concluding their authorized parenting time carries the operational mandate to arrange transit and deliver Harper to the initiating parent’s primary residence.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">16.</span>
              <p><span className="font-bold">Licensed & Sober Transit Standard:</span> Given the rural nature of both residences, the focus is on safety rather than professional couriers. Any licensed and insured driver authorized by the parent may execute transportation. Every driver must meet the legal standard for sobriety with no exceptions. Transportation shall never be used as a barrier to parenting time; it is the parent’s duty to secure a safe ride for Harper.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">17.</span>
              <p><span className="font-bold">Threshold Handoff Protocol:</span> Transitions at the door are to be brief, peaceful, and focused entirely on Harper’s comfort. No logistical debates, financial discussions, or historical grievances shall be aired during the exchange. All information regarding Harper’s recent meals, sleep, or health must be shared through the mandated application prior to the exchange, rather than at the door.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">18.</span>
              <p><span className="font-bold">Schedule Compliance:</span> Arrival times must be strictly honored within a 15-minute grace period. Longer delays should be communicated as soon as possible. Neither parent is required to provide transportation for the other parent's delivery obligation. Each household manages its own logistics independently.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">19.</span>
              <p><span className="font-bold">Safe Care Standard:</span> Harper will not be left in the sole care of any adult who is visibly impaired by alcohol or non-prescribed drugs. Each parent is responsible for ensuring that any adult who is supervising Harper alone is sober and capable of safe care.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">20.</span>
              <p><span className="font-bold">Multi-Generational Homes:</span> Both parents currently live in multi-generational homes. The parents cannot control the choices of other adults in those homes, but they will not leave Harper alone in the care of any impaired adult; and will take reasonable steps to shield Harper from adult conflict, intoxication, and tension.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">21.</span>
              <p><span className="font-bold">Co-Parenting Communication Platform:</span> The co-parenting communication platform selected shall be used for all formal communication. Traditional text messaging and phone calls shall be reserved for emergencies or immediate "doorstep" logistics only.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">22.</span>
              <p><span className="font-bold">Documentation and Accountability:</span> Regardless of the platform selected by the Mother, the parties agree to utilize the following features to ensure accountability. Both parents acknowledge that the exported logs shall serve as the definitive record of parental conduct: Sent, read receipts for all messages; Built-in tone monitoring if available; Mandatory logging of all appointments, school events, and travel on a shared calendar.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">23.</span>
              <p><span className="font-bold">Using One App for Everything:</span> The parents will use one co-parenting app for all non-emergency communication about Harper. The initial platform will be OurFamilyWizard. If the Mother prefers a different recognized co-parenting app, the parents may agree in writing to switch, and the Father will cooperate with that change. The Father will pay the full membership fees for both parents so there is no cost to the Mother.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">24.</span>
              <p><span className="font-bold">The Nightly Check-In:</span> Because it is important for both parents to know Harper is doing well, the parent who has Harper will send a quick "Nightly Update" through the app covering: Eating habits, Health status, Mood, Sleep pattern.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">25.</span>
              <p><span className="font-bold">Sharing Photos:</span> Both parents agree to share photos of Harper’s milestones and daily activities through the app gallery. This ensures both households can see her grow and keep those memories in one safe place.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">26.</span>
              <p><span className="font-bold">Manners and Kindness:</span> Harper picks up on everything around her, especially how the adults in her life get along. Having extended family and friends at Harper’s milestones is a special part of her life, as long as everyone stays polite and friendly. All family members and friends agree to use "Common Manners" whenever Harper is watching. This means no arguing, no mean comments, and keeping things positive.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">27.</span>
              <p><span className="font-bold">Health Records and Appointments:</span> The parents will each maintain access to Harper’s medical information through MyHealthNB or any successor portal, and both may contact health providers directly about Harper. No medical or dental appointment for Harper will be booked or attended without both parents being informed in advance through the co-parenting app, except in emergencies. Both parents will share full information about Harper’s past and current diagnoses, medications, and treatment plans with each other, so Harper’s medical history is complete and consistent.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">28.</span>
              <p><span className="font-bold">School and Learning:</span> To make sure Harper has a steady path for her education, the Mother takes the lead on where Harper goes to school and what she learns. The Mother handles coordinating Harper’s primary school and signing her up for classes, and will keep the Father updated on all school choices, report cards, and big academic dates through the app.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">29.</span>
              <p><span className="font-bold">Father’s Health, Work Capacity, and Current Income:</span> In January 2026, the Father received MRI results relating to workplace falls in 2021 and May 2025, confirming permanent neck and spinal injuries. As a result, he is no longer able to continue his previous roofing work and is transitioning toward safer, predominantly home-based and online employment. There is an active WorkSafeNB claim for loss of earnings linked to these injuries. The outcome of the current claim will determine the Father’s long-term earning capacity and his ability to pay child support. Since Harper’s birth, the Father’s generated income has been less than $20,000 over approximately 18 months. During this time, his primary focus has been recovering from injury, and he has had a limited ability to pay guideline child support to date.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">30.</span>
              <p><span className="font-bold">Child Support Once Income Is Finalized:</span> Once the Father’s WorkSafeNB loss-of-earnings benefits and/or other disability income are finalized (including any retroactive amounts), either parent may request that child support be reviewed and set in accordance with the Federal Child Support Guidelines, based on the Father’s actual income, unless the parents reach a different written agreement or the Court orders otherwise.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">31.</span>
              <p><span className="font-bold">Harper’s Fund (Voluntary Savings Commitment):</span> In addition to any child support that may be payable under the Guidelines or by Court order, the Father intends to establish and maintain “Harper’s Fund” (for example, a Registered Education Savings Plan) and to contribute to it as he is reasonably able, once his income is stabilized. The specific contribution amounts are voluntary and are not intended to reduce or replace any child support obligation. The Father agrees to provide the Mother with periodic statements upon reasonable request.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">32.</span>
              <p><span className="font-bold">Phase 1 Stabilization Window:</span> During Phase 1 (Days 1 to 90), the parents acknowledge that the Father’s income and WorkSafeNB claim are still in flux. The parties agree that this period will be treated as a financial stabilization window while the Father’s claim and income baseline are finalized. Nothing in this Article prevents either parent from revisiting child support during or after Phase 1 if the Father’s income becomes clear.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">33.</span>
              <p><span className="font-bold">Voluntary Mobility Initiative (Capacity Building):</span> The following provisions are voluntary undertakings by the Father and are not intended to replace any child support obligation. To support Harper’s long-term stability, the Father may, as his finances allow, provide a safe, reliable, and insured vehicle for the Mother’s primary use. If such a vehicle is provided, the parents agree that the Mother will, from that point forward, have the capacity to meet both her, and the father’s share of the transportation responsibilities.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">34.</span>
              <p><span className="font-bold">Voluntary Thrive Provision (Direct Supplies and Emergency Flexibility):</span> The following emergency and supply provisions are voluntary commitments by the Father. If, during the Mother’s parenting time, there is a verifiable shortfall in essential supplies (e.g., food, diapers), the Father agrees, where he is reasonably able, to procure and deliver the needed physical items directly upon request made through the app. If the Mother’s financial circumstances materially change such that she requires direct child support payments, the parents agree they will review whether guideline child support should be paid directly to the Mother.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">35.</span>
              <p><span className="font-bold">Fiduciary Accountability and Transparency:</span> The Father acknowledges that verifiable accountability is essential. By committing to disclose his finalized income and to participate in a child support review, he establishes an ongoing structure that helps protect the child’s financial security. These commitments are made in addition to any child support that may be determined under the Federal Child Support Guidelines.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">36.</span>
              <p><span className="font-bold">Solving Disagreements Without Court:</span> Going back to court is stressful for everyone and hard on Harper. This plan makes sure we try to solve things ourselves first. If we have a disagreement about the schedule or a rule, we agree to wait 48 hours and talk it out calmly through the app before doing anything else. If we still cannot agree after 48 hours, we will seek help from a neutral professional such as a mediator or Parenting Coordinator. If we still cannot agree, either of us may apply to the Court, except in urgent safety matters.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">37.</span>
              <p><span className="font-bold">Protecting Harper’s Feelings:</span> Both parents promise to keep Harper’s world positive and happy. Neither parent will say mean things about the other parent when Harper is around. We won't use her as a messenger to send notes back and forth. Harper has the right to love both her Mom and her Dad without feeling caught in the middle. We agree to keep all "grown-up" talk and disagreements away from her.</p>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0">38.</span>
              <p><span className="font-bold">Concluding Clause:</span> This document represents our promise to Harper. We are closing the chapter on the past and moving forward as a team. We agree that these rules are in Harper’s best interest and we commit to following them to give her the happiest, most stable childhood possible. We declare that the information in this Constitution is true and accurate, and that it has been prepared in good faith.</p>
            </div>
          </div>

          <div className="mt-16">
            <p className="font-bold uppercase tracking-widest mb-12">CONSENTED TO AS TO FORM AND CONTENT:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-0 gap-x-12 mb-12">
              <div>
                <div className="h-px bg-black w-full mb-2"></div>
                <p>EMMA RYAN, Applicant</p>
              </div>
              
              <div>
                <div className="h-px bg-black w-full mb-2"></div>
                <p>CRAIG SCHULZ, Respondent</p>
                <p className="text-right">Self-Represented</p>
              </div>

              <div className="mt-8 md:mt-12">
                <div className="h-px bg-black w-full mb-2"></div>
                <p>ERIN M. BEAM</p>
                <p>Counsel for the Applicant</p>
              </div>
            </div>

            <div className="mt-16">
              <p className="flex items-end gap-2">
                <span className="font-bold">DATED AT</span> the City of Saint John, Province of New Brunswick, this 
                <span className="w-16 border-b border-black inline-block"></span> day of 
                <span className="w-24 border-b border-black inline-block"></span> 2026.
              </p>
            </div>

            <div className="mt-24 max-w-lg mx-auto text-center border-t border-black pt-4">
              <p className="font-bold">JUSTICE DANYS R.X. DELAQUIS</p>
              <p>Judge of the Court of King’s Bench of New Brunswick</p>
              <p>Family Division</p>
              <p>Judicial District of Saint John</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
