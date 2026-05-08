import { Scale } from 'lucide-react';

export default function ReplyAffidavit() {
  return (
    <div className="bg-white py-12 px-4 min-h-screen font-serif text-black selection:bg-blue-100">
      <div className="max-w-[750px] mx-auto p-12 border border-slate-200 shadow-sm bg-white print:border-none print:shadow-none">
        {/* Court Header */}
        <div className="text-center mb-12 border-b-2 border-black pb-8">
          <div className="flex justify-center mb-4 no-print">
            <Scale size={40} className="text-slate-400" />
          </div>
          <h1 className="font-bold text-xl uppercase tracking-wider mb-2">In the Court of King's Bench of New Brunswick</h1>
          <h2 className="font-bold text-lg uppercase tracking-wide mb-1">Family Division</h2>
          <div className="flex justify-between items-center mt-4 text-sm font-mono">
            <span>Court File No.:</span>
            <span className="font-bold">FDSJ-739-2024</span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="font-bold text-2xl uppercase underline underline-offset-8">Respondent's Short Affidavit in Reply</h2>
        </div>

        {/* Formal Opening */}
        <div className="mb-10 text-sm leading-relaxed">
          <p className="mb-6 font-bold italic">I, CRAIG ALEXANDER PAUL SCHULZ, MAKE OATH AND SAY:</p>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <span className="font-bold">1.</span>
              <div>
                <span className="font-bold uppercase mr-2 text-xs border-b border-black">Categorical Denial of Allegations:</span>
                I have read the Applicant’s Affidavit. I categorically deny the allegations of physical and emotional abuse, coercive control, and neglect contained within it. While I acknowledge that the period surrounding Harper’s birth was highly stressful for both parties, I have never intentionally harmed Emma or Harper, and there has been no finding by any Court or agency that I pose a risk to my daughter.
              </div>
            </div>

            <div className="flex gap-4">
              <span className="font-bold">2.</span>
              <div>
                <span className="font-bold uppercase mr-2 text-xs border-b border-black">Procedural Irregularity of the Applicant’s Affidavit:</span>
                I respectfully advise the Court that the Applicant’s foundational affidavit was commissioned by Kerrie Garland (Ryan), the Applicant’s sister-in-law. This reliance on a close family member to commission sworn evidence in a custody proceeding constitutes a severe conflict of interest that compromises the impartiality of the record.
              </div>
            </div>

            <div className="flex gap-4">
              <span className="font-bold">3.</span>
              <div>
                <span className="font-bold uppercase mr-2 text-xs border-b border-black">The Verified Institutional Baseline:</span>
                Rather than engage in adversarial litigation over historical hearsay, I rely on the objective, verified assessments of independent institutions. Over the past 14 months, I have been assessed, audited, and cleared by multiple provincial and federal authorities. Specifically:
                <ul className="list-disc ml-6 mt-4 space-y-2 font-medium">
                  <li><span className="font-bold underline">Department of Social Development:</span> Closed their protection file and formally cleared me for unrestricted, unsupervised parenting time.</li>
                  <li><span className="font-bold underline">Provincial Court of New Brunswick:</span> On March 11, 2026, issued a zero-condition, non-custodial sentence in a related matter, determining that no state monitoring, probation, or testing was necessary.</li>
                  <li><span className="font-bold underline">Horizon Health Network:</span> Chief Privacy Officer audit confirmed medical stability.</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="font-bold">4.</span>
              <div>
                <span className="font-bold uppercase mr-2 text-xs border-b border-black">Medical/Access Interference:</span>
                Since Harper's birth, I have consistently prioritized her health and stability. However, my ability to parent has been repeatedly obstructed through unauthorized alterations to Harper's feeding schedules, the exclusion of my input regarding medical care, and the periodic withholding of parenting time without valid clinical justification. These historical interferences necessitate the clear, enforceable boundaries defined in the attached Accord.
              </div>
            </div>

            <div className="flex gap-4">
              <span className="font-bold">5.</span>
              <div>
                <span className="font-bold uppercase mr-2 text-xs border-b border-black">The Pivot (The Standing Back-to-Back Accord):</span>
                I am not seeking to punish the Applicant or remove Harper from her care. My sole goal is to establish a safe, predictable framework where Harper has two capable parents. To that end, rather than continuing to litigate past disputes, I have submitted <span className="italic font-bold underline">The Standing Back-to-Back Accord</span>. This proposed Integrated Parenting Constitution establishes equal 50/50 parenting time, strict safety and communication boundaries, and prioritizes Harper's future stability over our past conflict. I am fully prepared to co-parent under these protocols immediately.
              </div>
            </div>
          </div>
        </div>

        {/* Signature Area */}
        <div className="mt-20 pt-10 border-t border-slate-200">
           <div className="grid grid-cols-2 gap-10">
             <div className="space-y-12">
               <div className="border-b border-black pt-10 pb-1">
                 <span className="text-[10px] uppercase font-mono text-slate-400">Signature of Respondent</span>
               </div>
               <div className="border-b border-black pt-10 pb-1">
                 <span className="text-[10px] uppercase font-mono text-slate-400">Signature of Commissioner</span>
               </div>
             </div>
             <div className="text-right flex flex-col justify-end italic text-slate-400 text-xs">
               <p>Sworn/Affirmed before me at Saint John, NB</p>
               <p className="mt-4">This ________ day of May, 2026</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
