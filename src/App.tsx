import React, { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  RotateCcw,
  Check,
  AlertTriangle,
  HelpCircle,
  Info,
  GitBranch,
  Layers,
  Sparkles,
  Sliders,
  CheckCircle2,
  Users,
  Cpu,
  HeartHandshake,
  Workflow
} from 'lucide-react';

export default function App() {
  // Stage 3: Interactive Gate status demo
  const [gateResult, setGateResult] = useState<'pass' | 'review' | 'fail'>('pass');

  // Stage 5: Weighting route active tab for detailed deep-dive
  const [activeRouteView, setActiveRouteView] = useState<'both' | 'route-a' | 'route-b'>('both');

  // Stage 7: Screening ratings (+ / 0 / −) for the consistent criteria
  const [screenScores, setScreenScores] = useState<Record<string, string>>({
    signal: '+',
    comfort: '+',
    feasibility: '0',
    battery: '−',
    cost: '0',
  });

  // Stage 7: Re-screen loop animation trigger
  const [isLooping, setIsLooping] = useState(false);

  // Cycle screening ratings: + -> 0 -> − -> +
  const cycleScreen = (key: string) => {
    const cur = screenScores[key];
    const next = cur === '+' ? '0' : cur === '0' ? '−' : '+';
    setScreenScores((prev) => ({ ...prev, [key]: next }));
  };

  const triggerReScreen = () => {
    setIsLooping(true);
    setTimeout(() => setIsLooping(false), 800);
  };

  return (
    <div className="min-h-screen bg-[#F6F5F7] text-[#313639] font-sans antialiased selection:bg-[#F48259]/20 selection:text-[#F48259]">
      
      {/* 1. HEADER: Extremely Simple, Clean Space for Logo, No Unnecessary Menus */}
      <header className="sticky top-0 z-50 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#E9E8EB] px-6 sm:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Reserved clean space for official NEXA logo */}
          <div className="w-24 h-6 border-r border-[#E9E8EB] pr-4 flex items-center" title="Reserved space for official NEXA logo">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#909292]/70 select-none">NEXA</span>
          </div>
          <span className="text-sm font-extrabold tracking-wider text-[#313639] uppercase font-mono">
            CONCEPT SELECTION
          </span>
        </div>
        <div className="text-[11px] font-mono text-[#909292] hidden sm:block">
          Engineering Methodology & Workflow
        </div>
      </header>

      {/* 2. MAIN WORKFLOW: The Workflow is the Website */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        
        {/* Intro Banner */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-block px-3 py-1 bg-[#F48259]/10 text-[#F48259] rounded-full text-xs font-mono font-bold tracking-wider uppercase mb-1">
            Standard Operating Sequence
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#313639] tracking-tight">
            NEXA Concept Selection Workflow
          </h1>
          <p className="text-sm text-[#606060] max-w-xl mx-auto font-normal leading-relaxed">
            A single, continuous engineering process from technical candidates to final concept decision. Follow the stages from top to bottom.
          </p>
          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-mono text-[#909292]">
            <span className="text-[#F48259] font-bold">1. Screen First (+ / 0 / −)</span>
            <span>→</span>
            <span className="text-[#41A0DA] font-bold">2. Score Second (1–5 Scale)</span>
          </div>
        </div>

        {/* Vertical Pipeline Container */}
        <div className="space-y-6">

          {/* ==================== STAGE 1: CANDIDATE CONCEPTS ==================== */}
          <section className="bg-[#FFFFFF] border border-[#E9E8EB] rounded-2xl p-6 sm:p-7 shadow-xs relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-[#F48259] tracking-widest uppercase">
                Stage 01
              </span>
              <span className="text-[10px] font-mono text-[#909292] bg-[#F6F5F7] px-2 py-0.5 rounded">
                Inputs
              </span>
            </div>
            <h2 className="text-xl font-bold text-[#313639] mb-1">
              Candidate Concepts
            </h2>
            <p className="text-xs text-[#606060] mb-5 leading-relaxed">
              Start with multiple technically plausible solutions to the same product problem.
            </p>

            {/* Visual: Neutral concept cards / simple engineering sketches */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { title: 'Rigid-Flex Headband', desc: 'Continuous headband chassis with forehead sensor nodes and rear battery ballast.' },
                { title: 'Ear-Hook Peripheral', desc: 'Over-ear bilateral pods utilizing mastoid bone contact for signal pickup.' },
                { title: 'Modular Patch Architecture', desc: 'Adhesive disposable sensor strip paired with a reusable snap-on processing pod.' }
              ].map((variant, i) => (
                <div key={i} className="border border-[#E9E8EB] rounded-xl p-3.5 bg-[#F6F5F7]/40 flex flex-col justify-between">
                  <div>
                    <div className="h-16 bg-[#FFFFFF] rounded-lg border border-[#E9E8EB] border-dashed mb-2.5 flex items-center justify-center text-[#909292] font-mono text-[10px]">
                      Concept Sketch {i + 1}
                    </div>
                    <div className="font-bold text-xs text-[#313639] mb-1">{variant.title}</div>
                    <div className="text-[11px] text-[#606060] leading-snug">{variant.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 text-[11px] text-[#909292] font-mono italic">
              Example: several possible product architectures or form factors may enter the process.
            </div>
          </section>

          {/* Connector Arrow */}
          <div className="flex justify-center -my-2 relative z-10">
            <div className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#E9E8EB] shadow-xs flex items-center justify-center text-[#909292]">
              <ArrowDown className="w-4 h-4" />
            </div>
          </div>


          {/* ==================== STAGE 2: PREPARE CONCEPTS ==================== */}
          <section className="bg-[#FFFFFF] border border-[#E9E8EB] rounded-2xl p-6 sm:p-7 shadow-xs relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-[#41A0DA] tracking-widest uppercase">
                Stage 02
              </span>
              <span className="text-[10px] font-mono text-[#909292] bg-[#F6F5F7] px-2 py-0.5 rounded">
                Alignment
              </span>
            </div>
            <h2 className="text-xl font-bold text-[#313639] mb-1">
              Prepare Concepts
            </h2>
            <p className="text-xs text-[#606060] mb-5 leading-relaxed">
              Bring all concepts to a comparable level of definition before evaluation.
            </p>

            {/* Graphical Example: concept definition -> intended function -> main architecture -> key components -> assumptions -> comparable maturity */}
            <div className="bg-[#F6F5F7]/60 border border-[#E9E8EB] rounded-xl p-4">
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs">
                {[
                  { label: 'Concept Definition', step: '1' },
                  { label: 'Intended Function', step: '2' },
                  { label: 'Main Architecture', step: '3' },
                  { label: 'Key Components', step: '4' },
                  { label: 'Assumptions', step: '5' },
                  { label: 'Comparable Maturity', step: '6' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-full bg-[#FFFFFF] border border-[#E9E8EB] rounded-lg p-2.5 h-full flex flex-col justify-center items-center shadow-2xs">
                      <span className="w-5 h-5 rounded-full bg-[#41A0DA]/10 text-[#41A0DA] font-mono font-bold text-[10px] flex items-center justify-center mb-1">
                        {item.step}
                      </span>
                      <span className="text-[11px] font-semibold text-[#313639] leading-tight">
                        {item.label}
                      </span>
                    </div>
                    {idx < 5 && (
                      <div className="sm:hidden my-1 text-[#909292]">↓</div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] font-mono text-[#41A0DA]">
                <span>Normalization Pipeline</span>
                <span className="text-[#909292]">· Equal detail eliminates maturity bias</span>
              </div>
            </div>
          </section>

          {/* Connector Arrow */}
          <div className="flex justify-center -my-2 relative z-10">
            <div className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#E9E8EB] shadow-xs flex items-center justify-center text-[#909292]">
              <ArrowDown className="w-4 h-4" />
            </div>
          </div>


          {/* ==================== STAGE 3: MANDATORY REQUIREMENTS GATE ==================== */}
          <section className="bg-[#FFFFFF] border border-[#E9E8EB] rounded-2xl p-6 sm:p-7 shadow-xs relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-rose-500 tracking-widest uppercase">
                Stage 03
              </span>
              <span className="text-[10px] font-mono text-rose-600 bg-rose-50 px-2 py-0.5 rounded font-bold">
                Hard Gate
              </span>
            </div>
            <h2 className="text-xl font-bold text-[#313639] mb-1">
              Mandatory Requirements Gate
            </h2>
            <p className="text-xs text-[#606060] mb-5 leading-relaxed">
              Check non-negotiable requirements before trade-offs begin.
            </p>

            {/* Visual: Concept -> Gate -> PASS / REVIEW / FAIL */}
            <div className="bg-[#F6F5F7]/60 border border-[#E9E8EB] rounded-xl p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                
                {/* Concept node */}
                <div className="w-full sm:w-auto px-4 py-3 bg-[#FFFFFF] border border-[#E9E8EB] rounded-xl text-center shadow-2xs">
                  <div className="text-[10px] font-mono text-[#909292] uppercase">Input</div>
                  <div className="text-xs font-bold text-[#313639]">Candidate Concept</div>
                </div>

                <div className="text-[#909292] font-mono">→</div>

                {/* Gate Decisions */}
                <div className="grid grid-cols-3 gap-2 w-full sm:flex-1">
                  <div 
                    onClick={() => setGateResult('pass')}
                    className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                      gateResult === 'pass' 
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-800 font-bold' 
                        : 'bg-[#FFFFFF] border-[#E9E8EB] text-[#606060]'
                    }`}
                  >
                    <div className="text-xs font-bold text-emerald-700">PASS</div>
                    <div className="text-[10px] text-emerald-600 mt-0.5">Continue</div>
                  </div>

                  <div 
                    onClick={() => setGateResult('review')}
                    className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                      gateResult === 'review' 
                        ? 'bg-amber-50 border-amber-500 text-amber-800 font-bold' 
                        : 'bg-[#FFFFFF] border-[#E9E8EB] text-[#606060]'
                    }`}
                  >
                    <div className="text-xs font-bold text-amber-700">REVIEW</div>
                    <div className="text-[10px] text-amber-600 mt-0.5">Investigate / modify</div>
                  </div>

                  <div 
                    onClick={() => setGateResult('fail')}
                    className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                      gateResult === 'fail' 
                        ? 'bg-rose-50 border-rose-500 text-rose-800 font-bold' 
                        : 'bg-[#FFFFFF] border-[#E9E8EB] text-[#606060]'
                    }`}
                  >
                    <div className="text-xs font-bold text-rose-700">FAIL</div>
                    <div className="text-[10px] text-rose-600 mt-0.5">Reject / redesign</div>
                  </div>
                </div>
              </div>

              {/* Example requirement */}
              <div className="mt-4 pt-3 border-t border-[#E9E8EB] flex items-center justify-between text-xs">
                <span className="text-[#606060]">
                  Example mandatory requirement: <strong className="text-[#313639]">e.g., Biocompatibility & Galvanic Skin Safety (&lt;10µA leakage)</strong>
                </span>
                <span className="text-[10px] font-mono text-[#909292]">Non-Negotiable</span>
              </div>
            </div>

            {/* Note */}
            <div className="mt-3 p-3 bg-amber-50/60 border border-amber-200/80 rounded-xl text-xs text-amber-900 leading-relaxed">
              <strong>Mandatory requirements are not weighted trade-offs.</strong> A concept that fails a critical requirement cannot compensate by scoring highly somewhere else.
            </div>
          </section>

          {/* Connector Arrow */}
          <div className="flex justify-center -my-2 relative z-10">
            <div className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#E9E8EB] shadow-xs flex items-center justify-center text-[#909292]">
              <ArrowDown className="w-4 h-4" />
            </div>
          </div>


          {/* ==================== STAGE 4: DEFINE SELECTION CRITERIA ==================== */}
          <section className="bg-[#FFFFFF] border border-[#E9E8EB] rounded-2xl p-6 sm:p-7 shadow-xs relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-[#B073D9] tracking-widest uppercase">
                Stage 04
              </span>
              <span className="text-[10px] font-mono text-[#909292] bg-[#F6F5F7] px-2 py-0.5 rounded">
                Criteria
              </span>
            </div>
            <h2 className="text-xl font-bold text-[#313639] mb-1">
              Define Selection Criteria
            </h2>
            <p className="text-xs text-[#606060] mb-5 leading-relaxed">
              Agree on the factors that will differentiate the concepts.
            </p>

            {/* Small completed example table using the 5 consistent criteria */}
            <div className="border border-[#E9E8EB] rounded-xl overflow-hidden mb-3">
              <div className="bg-[#F6F5F7] px-4 py-2 border-b border-[#E9E8EB] flex items-center justify-between">
                <span className="text-xs font-bold text-[#313639]">Selection Criteria</span>
                <span className="text-[10px] font-mono text-[#909292] italic">
                  Examples only — criteria depend on the project.
                </span>
              </div>
              <div className="divide-y divide-[#E9E8EB] text-xs">
                {[
                  { name: 'Signal Quality', desc: 'Signal-to-noise ratio, motion artifact resistance, and electrode skin contact impedance' },
                  { name: 'Overnight Comfort', desc: 'Physical wearability during 8-hour sleep, minimal local pressure points, breathable contact' },
                  { name: 'Technical Feasibility', desc: 'Subsystem integration complexity, manufacturing assembly yield, firmware readiness' },
                  { name: 'Battery / Power', desc: 'Full-night continuous operating runtime on a single charge with reserve margin' },
                  { name: 'Cost', desc: 'Direct unit bill-of-materials (BOM) target and tooling capital depreciation' }
                ].map((crit, idx) => (
                  <div key={idx} className="px-4 py-2.5 flex items-center justify-between bg-[#FFFFFF] hover:bg-[#F6F5F7]/30">
                    <span className="text-[#313639] font-semibold w-40 shrink-0">e.g., {crit.name}</span>
                    <span className="text-[11px] text-[#606060] flex-1 pr-4">{crit.desc}</span>
                    <span className="text-[10px] text-[#909292] font-mono shrink-0">Differentiator</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality check */}
            <div className="bg-[#F6F5F7] border border-[#E9E8EB] rounded-xl p-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-[#313639] font-mono">
              <span className="text-[#909292] text-[10px] uppercase font-sans font-bold">Quality Check:</span>
              <span className="font-semibold text-emerald-700">Relevant</span>
              <span className="text-[#909292]">•</span>
              <span className="font-semibold text-emerald-700">Distinct</span>
              <span className="text-[#909292]">•</span>
              <span className="font-semibold text-emerald-700">Assessable</span>
              <span className="text-[#909292]">•</span>
              <span className="font-semibold text-emerald-700">Traceable</span>
              <span className="text-[#909292]">•</span>
              <span className="font-semibold text-emerald-700">Neutral</span>
            </div>
          </section>

          {/* Connector Arrow */}
          <div className="flex justify-center -my-2 relative z-10">
            <div className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#E9E8EB] shadow-xs flex items-center justify-center text-[#909292]">
              <ArrowDown className="w-4 h-4" />
            </div>
          </div>


          {/* ==================== STAGE 5: ESTABLISH CRITERIA WEIGHTS ==================== */}
          <section className="bg-[#FFFFFF] border-2 border-[#F2AB27]/30 rounded-2xl p-6 sm:p-7 shadow-xs relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-[#F2AB27] tracking-widest uppercase">
                Stage 05 · Weighting Routes
              </span>
              <span className="text-[10px] font-mono text-[#F2AB27] bg-[#F2AB27]/10 px-2.5 py-0.5 rounded font-bold">
                Alternative Weighting Methods
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#313639] mb-1">
              Establish Criteria Weights
            </h2>
            <p className="text-xs text-[#606060] mb-6 leading-relaxed">
              Determine the relative importance of the agreed criteria.
            </p>

            {/* 5.1 "WHICH ROUTE?" DECISION VISUAL */}
            <div className="bg-[#F6F5F7] border border-[#E9E8EB] rounded-xl p-5 mb-8">
              <div className="text-center max-w-md mx-auto space-y-3">
                <div className="text-[10px] font-mono font-bold text-[#909292] uppercase tracking-wider">
                  Weighting Methodology Decision
                </div>
                <div className="p-3 bg-white border border-[#E9E8EB] rounded-xl shadow-2xs font-semibold text-xs text-[#313639]">
                  Is there a mature, approved QFD with usable technical priorities?
                </div>
                
                {/* Decision Branching Diagram */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="border-t-2 border-l-2 border-[#41A0DA] pt-2 px-2 text-left">
                    <span className="inline-block px-2 py-0.5 bg-rose-50 text-rose-700 font-mono text-[10px] font-bold rounded mb-1">
                      NO
                    </span>
                    <div className="font-bold text-xs text-[#41A0DA]">
                      Route A — Cross-Functional Team Weighting
                    </div>
                    <div className="text-[10px] text-[#606060] mt-0.5">
                      Direct cross-functional importance rating & consensus normalization.
                    </div>
                  </div>

                  <div className="border-t-2 border-r-2 border-[#B073D9] pt-2 px-2 text-right">
                    <span className="inline-block px-2 py-0.5 bg-emerald-50 text-emerald-700 font-mono text-[10px] font-bold rounded mb-1">
                      YES
                    </span>
                    <div className="font-bold text-xs text-[#B073D9]">
                      Route B — QFD-Derived Weighting
                    </div>
                    <div className="text-[10px] text-[#606060] mt-0.5">
                      Translate pre-existing House of Quality engineering priorities directly.
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[10px] font-mono text-[#909292] italic border-t border-[#E9E8EB]">
                  These are alternative weighting methods, not sequential steps. Do not run both simultaneously.
                </div>
              </div>
            </div>

            {/* ROUTE A: STEP-BY-STEP EXPLANATION */}
            <div className="border-2 border-[#41A0DA]/30 rounded-xl p-5 bg-[#FFFFFF] mb-6 shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-0.5 bg-[#41A0DA]/10 text-[#41A0DA] font-mono text-[10px] font-bold rounded">
                  ROUTE A
                </span>
                <span className="text-[10px] font-mono text-[#909292]">Team Consensus Method</span>
              </div>
              
              <h3 className="text-base font-bold text-[#313639] mb-1">
                Route A — Cross-Functional Product Team Weighting
              </h3>
              <p className="text-xs text-[#606060] mb-5 leading-relaxed">
                Use this route when a mature QFD does not already exist. A cross-functional team independently rates how important each criterion is, discusses differences, and then converts the agreed importance values into normalized weights totaling 100%.
              </p>

              {/* Step-by-Step Vertical Process */}
              <div className="space-y-4 border-l-2 border-[#41A0DA]/30 pl-4 ml-1">
                
                {/* Step 1 */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#41A0DA] text-white font-mono text-[10px] font-bold flex items-center justify-center">1</span>
                    <h4 className="font-bold text-xs text-[#313639]">Step 1 — Agree the criteria</h4>
                  </div>
                  <p className="text-[11px] text-[#606060]">
                    The team first agrees which criteria will be used to compare the concepts.
                  </p>
                  <div className="p-2 bg-[#F6F5F7] rounded-lg text-xs font-mono text-[#313639]">
                    Signal Quality • Overnight Comfort • Technical Feasibility • Battery / Power • Cost
                  </div>
                </div>

                {/* Step 2 */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#41A0DA] text-white font-mono text-[10px] font-bold flex items-center justify-center">2</span>
                    <h4 className="font-bold text-xs text-[#313639]">Step 2 — Independent importance rating</h4>
                  </div>
                  <p className="text-[11px] text-[#606060]">
                    Each team member rates the importance of the criterion, not the concepts.
                  </p>

                  {/* Scale Box */}
                  <div className="bg-[#F6F5F7] p-2 rounded-lg text-[10px] font-mono grid grid-cols-5 gap-1 text-center">
                    <span className="bg-white p-1 rounded border border-[#E9E8EB]">1 = Low</span>
                    <span className="bg-white p-1 rounded border border-[#E9E8EB]">2 = Limited</span>
                    <span className="bg-white p-1 rounded border border-[#E9E8EB]">3 = Moderate</span>
                    <span className="bg-white p-1 rounded border border-[#E9E8EB]">4 = High</span>
                    <span className="bg-white p-1 rounded border border-[#E9E8EB] font-bold text-[#41A0DA]">5 = Critical</span>
                  </div>

                  {/* Completed Example Table */}
                  <div className="border border-[#E9E8EB] rounded-lg overflow-hidden text-xs">
                    <table className="w-full text-left">
                      <thead className="bg-[#F6F5F7] border-b border-[#E9E8EB] text-[11px]">
                        <tr>
                          <th className="p-2 font-semibold text-[#313639]">Criterion</th>
                          <th className="p-2 text-center text-[#606060]">Product Eng</th>
                          <th className="p-2 text-center text-[#606060]">Hardware Eng</th>
                          <th className="p-2 text-center text-[#606060]">UX / Human Factors</th>
                          <th className="p-2 text-right font-bold text-[#313639]">Mean</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E9E8EB] bg-[#FFFFFF] text-[11px] font-mono">
                        <tr>
                          <td className="p-2 font-sans font-medium text-[#313639]">Signal Quality</td>
                          <td className="p-2 text-center">5</td>
                          <td className="p-2 text-center">5</td>
                          <td className="p-2 text-center">4</td>
                          <td className="p-2 text-right font-bold text-[#41A0DA]">4.67</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-sans font-medium text-[#313639]">Overnight Comfort</td>
                          <td className="p-2 text-center">4</td>
                          <td className="p-2 text-center">4</td>
                          <td className="p-2 text-center">5</td>
                          <td className="p-2 text-right font-bold text-[#41A0DA]">4.33</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-sans font-medium text-[#313639]">Technical Feasibility</td>
                          <td className="p-2 text-center">4</td>
                          <td className="p-2 text-center">5</td>
                          <td className="p-2 text-center">4</td>
                          <td className="p-2 text-right font-bold text-[#41A0DA]">4.33</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-sans font-medium text-[#313639]">Battery / Power</td>
                          <td className="p-2 text-center">4</td>
                          <td className="p-2 text-center">3</td>
                          <td className="p-2 text-center">4</td>
                          <td className="p-2 text-right font-bold text-[#41A0DA]">3.67</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-sans font-medium text-[#313639]">Cost</td>
                          <td className="p-2 text-center">3</td>
                          <td className="p-2 text-center">3</td>
                          <td className="p-2 text-center">3</td>
                          <td className="p-2 text-right font-bold text-[#41A0DA]">3.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="text-[10px] text-[#909292] font-mono italic">
                    Note: Team members rate independently first to reduce group influence.
                  </div>
                </div>

                {/* Step 3 */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#41A0DA] text-white font-mono text-[10px] font-bold flex items-center justify-center">3</span>
                    <h4 className="font-bold text-xs text-[#313639]">Step 3 — Team discussion</h4>
                  </div>
                  <p className="text-[11px] text-[#606060] leading-relaxed">
                    The team reviews large differences in ratings and confirms that everyone interpreted each criterion consistently.
                  </p>

                  {/* Visual: Three team member cards converging into discussion point */}
                  <div className="p-3 bg-[#F6F5F7] rounded-xl border border-[#E9E8EB] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="px-2 py-1 bg-white border border-[#E9E8EB] rounded text-[10px] font-mono text-[#313639]">
                        Product Eng (5)
                      </div>
                      <div className="px-2 py-1 bg-white border border-[#E9E8EB] rounded text-[10px] font-mono text-[#313639]">
                        Hardware Eng (5)
                      </div>
                      <div className="px-2 py-1 bg-white border border-[#E9E8EB] rounded text-[10px] font-mono text-[#313639]">
                        UX / Human Factors (4)
                      </div>
                    </div>
                    <span className="text-[#41A0DA] font-mono font-bold">↘ ↘ ↙</span>
                    <div className="px-3 py-1.5 bg-[#41A0DA]/10 border border-[#41A0DA]/30 rounded-lg text-[11px] font-bold text-[#41A0DA] flex items-center gap-1.5">
                      <HeartHandshake className="w-4 h-4" />
                      <span>Consensus Alignment Review</span>
                    </div>
                  </div>

                  <div className="text-[10px] text-[#909292] font-mono italic">
                    Rule: Do not imply that the team simply averages numbers without discussion.
                  </div>
                </div>

                {/* Step 4 */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#41A0DA] text-white font-mono text-[10px] font-bold flex items-center justify-center">4</span>
                    <h4 className="font-bold text-xs text-[#313639]">Step 4 — Normalize to 100%</h4>
                  </div>
                  <p className="text-[11px] text-[#606060]">
                    The agreed importance values are converted into percentage weights so that the complete set totals 100%.
                  </p>

                  {/* Completed illustrative result table */}
                  <div className="border border-[#E9E8EB] rounded-lg overflow-hidden text-xs max-w-md">
                    <table className="w-full text-left">
                      <thead className="bg-[#F6F5F7] border-b border-[#E9E8EB]">
                        <tr>
                          <th className="p-2 text-[#313639]">Criterion</th>
                          <th className="p-2 text-right text-[#313639]">Final Example Weight</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E9E8EB] bg-[#FFFFFF] font-mono">
                        <tr>
                          <td className="p-2 font-sans text-[#313639]">Signal Quality</td>
                          <td className="p-2 text-right font-bold text-[#41A0DA]">25%</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-sans text-[#313639]">Overnight Comfort</td>
                          <td className="p-2 text-right font-bold text-[#41A0DA]">25%</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-sans text-[#313639]">Technical Feasibility</td>
                          <td className="p-2 text-right font-bold text-[#41A0DA]">20%</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-sans text-[#313639]">Battery / Power</td>
                          <td className="p-2 text-right font-bold text-[#41A0DA]">15%</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-sans text-[#313639]">Cost</td>
                          <td className="p-2 text-right font-bold text-[#41A0DA]">15%</td>
                        </tr>
                        <tr className="bg-[#F6F5F7]/60 font-bold border-t border-[#E9E8EB]">
                          <td className="p-2 font-sans text-[#313639]">Total</td>
                          <td className="p-2 text-right text-[#313639]">100%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-2.5 bg-[#F6F5F7] rounded-lg text-[11px] text-[#606060] border border-[#E9E8EB]">
                    <strong>Method Summary:</strong> Route A creates weights directly from the cross-functional team's importance assessment.
                  </div>
                  <div className="text-[10px] text-[#909292] font-mono italic">
                    Illustrative example only
                  </div>
                </div>

              </div>
            </div>

            {/* ROUTE B: STEP-BY-STEP EXPLANATION */}
            <div className="border-2 border-[#B073D9]/30 rounded-xl p-5 bg-[#FFFFFF] shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-0.5 bg-[#B073D9]/10 text-[#B073D9] font-mono text-[10px] font-bold rounded">
                  ROUTE B
                </span>
                <span className="text-[10px] font-mono text-[#909292]">QFD Translation Method</span>
              </div>

              <h3 className="text-base font-bold text-[#313639] mb-1">
                Route B — QFD-Derived Weighting
              </h3>
              <p className="text-xs text-[#606060] mb-5 leading-relaxed">
                Use this route when a mature QFD / House of Quality already exists and customer needs have already been translated into engineering priorities.
              </p>

              {/* Step-by-Step Vertical Process */}
              <div className="space-y-4 border-l-2 border-[#B073D9]/30 pl-4 ml-1">
                
                {/* Step 1 */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#B073D9] text-white font-mono text-[10px] font-bold flex items-center justify-center">1</span>
                    <h4 className="font-bold text-xs text-[#313639]">Step 1 — Start from the existing QFD</h4>
                  </div>
                  <p className="text-[11px] text-[#606060]">
                    Example documented customer needs already verified in the House of Quality:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono">
                    <div className="p-2 bg-[#F6F5F7] rounded border border-[#E9E8EB]">Reliable monitoring</div>
                    <div className="p-2 bg-[#F6F5F7] rounded border border-[#E9E8EB]">Comfortable overnight use</div>
                    <div className="p-2 bg-[#F6F5F7] rounded border border-[#E9E8EB]">Full-night operation</div>
                    <div className="p-2 bg-[#F6F5F7] rounded border border-[#E9E8EB]">Easy integration</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#B073D9] text-white font-mono text-[10px] font-bold flex items-center justify-center">2</span>
                    <h4 className="font-bold text-xs text-[#313639]">Step 2 — Use the QFD technical priorities</h4>
                  </div>
                  <p className="text-[11px] text-[#606060] leading-relaxed">
                    The QFD has already connected customer needs to measurable engineering characteristics and calculated their relative technical importance.
                  </p>

                  <div className="border border-[#E9E8EB] rounded-lg overflow-hidden text-xs max-w-md">
                    <table className="w-full text-left">
                      <thead className="bg-[#F6F5F7] border-b border-[#E9E8EB]">
                        <tr>
                          <th className="p-2 font-semibold text-[#313639]">Engineering Priority</th>
                          <th className="p-2 text-right font-semibold text-[#313639]">QFD Priority</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E9E8EB] bg-[#FFFFFF] font-mono text-[11px]">
                        <tr>
                          <td className="p-2 font-sans text-[#313639]">EEG Signal Quality</td>
                          <td className="p-2 text-right font-bold text-[#B073D9]">30%</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-sans text-[#313639]">Wearability / Comfort</td>
                          <td className="p-2 text-right font-bold text-[#B073D9]">25%</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-sans text-[#313639]">Power Efficiency</td>
                          <td className="p-2 text-right font-bold text-[#B073D9]">20%</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-sans text-[#313639]">System Integration</td>
                          <td className="p-2 text-right font-bold text-[#B073D9]">15%</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-sans text-[#313639]">Manufacturing / Cost</td>
                          <td className="p-2 text-right font-bold text-[#B073D9]">10%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#B073D9] text-white font-mono text-[10px] font-bold flex items-center justify-center">3</span>
                    <h4 className="font-bold text-xs text-[#313639]">Step 3 — Map QFD priorities to concept-selection criteria</h4>
                  </div>
                  <div className="space-y-1.5 text-xs font-mono">
                    {[
                      { from: 'EEG Signal Quality', to: 'Signal Quality' },
                      { from: 'Wearability', to: 'Overnight Comfort' },
                      { from: 'Power Efficiency', to: 'Battery / Power' },
                      { from: 'System Integration', to: 'Technical Feasibility / Integration' }
                    ].map((mapping, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 bg-[#F6F5F7] rounded-lg border border-[#E9E8EB]">
                        <span className="text-[#606060]">{mapping.from}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#B073D9]" />
                        <span className="font-bold text-[#313639]">{mapping.to}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 4 */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#B073D9] text-white font-mono text-[10px] font-bold flex items-center justify-center">4</span>
                    <h4 className="font-bold text-xs text-[#313639]">Step 4 — Produce concept-selection weights</h4>
                  </div>
                  <p className="text-[11px] text-[#606060] leading-relaxed">
                    The relevant QFD priorities are normalized into the final criteria weights used in concept selection.
                  </p>
                  
                  <div className="p-3 bg-[#B073D9]/10 border border-[#B073D9]/20 rounded-xl space-y-1.5 text-xs">
                    <div className="font-bold text-[#B073D9]">
                      Important Rule:
                    </div>
                    <p className="text-[#606060] leading-relaxed text-[11px]">
                      QFD provides the source of the weights. It does not replace concept screening or detailed scoring.
                    </p>
                    <p className="text-[#606060] leading-relaxed text-[11px] pt-1 border-t border-[#B073D9]/20">
                      Do not use Route A and Route B simultaneously unless there is a defined method for reconciling the two sources. Normally, select the route that best fits the maturity of the project.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </section>

          {/* Merge Icon */}
          <div className="flex justify-center -my-2 relative z-10">
            <div className="px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#E9E8EB] shadow-xs flex items-center gap-1.5 text-[#909292] text-xs font-mono">
              <span className="text-[#10B981] font-bold">Merge Paths</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#10B981]" />
            </div>
          </div>


          {/* ==================== STAGE 6: FINAL CRITERIA + WEIGHTS ==================== */}
          <section className="bg-[#FFFFFF] border border-[#E9E8EB] rounded-2xl p-6 sm:p-7 shadow-xs relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-[#10B981] tracking-widest uppercase">
                Stage 06
              </span>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                Merged Basis
              </span>
            </div>
            <h2 className="text-xl font-bold text-[#313639] mb-1">
              Final Criteria + Weights
            </h2>
            <p className="text-xs text-[#606060] mb-3 leading-relaxed">
              Both weighting routes produce one agreed evaluation basis.
            </p>

            <div className="p-3 bg-[#F6F5F7] rounded-xl border border-[#E9E8EB] text-xs text-[#606060] mb-4 leading-relaxed">
              Regardless of which weighting route is used, the output is the same type of information: <strong>one agreed set of criteria with weights totaling 100%</strong>.
            </div>

            {/* Completed merged table with exact numbers */}
            <div className="border border-[#E9E8EB] rounded-xl overflow-hidden max-w-md mx-auto mb-3">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#F6F5F7] border-b border-[#E9E8EB]">
                  <tr>
                    <th className="p-3 font-semibold text-[#313639]">Criterion</th>
                    <th className="p-3 text-right font-semibold text-[#313639]">Weight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E9E8EB] bg-[#FFFFFF] font-mono">
                  <tr>
                    <td className="p-3 font-sans text-[#313639]">Signal Quality</td>
                    <td className="p-3 text-right font-bold text-emerald-600">25%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-sans text-[#313639]">Overnight Comfort</td>
                    <td className="p-3 text-right font-bold text-emerald-600">25%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-sans text-[#313639]">Technical Feasibility</td>
                    <td className="p-3 text-right font-bold text-emerald-600">20%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-sans text-[#313639]">Battery / Power</td>
                    <td className="p-3 text-right font-bold text-emerald-600">15%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-sans text-[#313639]">Cost</td>
                    <td className="p-3 text-right font-bold text-emerald-600">15%</td>
                  </tr>
                  <tr className="bg-[#F6F5F7]/60 font-bold border-t border-[#E9E8EB]">
                    <td className="p-3 font-sans text-[#313639]">Total</td>
                    <td className="p-3 text-right text-[#313639]">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-lg text-[11px] text-emerald-900 max-w-md mx-auto text-center font-medium">
              For the following illustrative screening and scoring examples, assume Route A was selected.
            </div>

            <div className="mt-3 text-center text-[10px] text-[#909292] font-mono italic">
              Illustrative example only — not official NEXA criteria or weights.
            </div>
          </section>

          {/* Connector Arrow */}
          <div className="flex justify-center -my-2 relative z-10">
            <div className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#E9E8EB] shadow-xs flex items-center justify-center text-[#909292]">
              <ArrowDown className="w-4 h-4" />
            </div>
          </div>


          {/* ==================== STAGE 7: CONCEPT SCREENING ==================== */}
          <section className="bg-[#FFFFFF] border-2 border-[#F48259]/30 rounded-2xl p-6 sm:p-7 shadow-sm relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-[#F48259] tracking-widest uppercase">
                Stage 07 · Screening First
              </span>
              <span className="text-[10px] font-mono text-white bg-[#F48259] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">
                SCREEN = + / 0 / −
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#313639] mb-1">
              Concept Screening
            </h2>
            <p className="text-xs text-[#606060] mb-5 leading-relaxed">
              Quick reference-based comparison used to reduce and improve the concept set.
            </p>

            {/* Distinction banner */}
            <div className="p-3 bg-[#F48259]/10 border border-[#F48259]/20 rounded-xl mb-4 text-xs text-[#313639] flex flex-col sm:flex-row items-center justify-between gap-2">
              <div>
                <strong className="text-[#F48259]">METHOD RULE:</strong> Screening evaluates concepts strictly against a datum reference:
              </div>
              <div className="flex gap-2 font-mono font-bold text-xs">
                <span className="px-2 py-0.5 bg-white border border-[#E9E8EB] rounded text-emerald-700">+ Better than ref</span>
                <span className="px-2 py-0.5 bg-white border border-[#E9E8EB] rounded text-slate-700">0 Similar</span>
                <span className="px-2 py-0.5 bg-white border border-[#E9E8EB] rounded text-rose-700">− Worse</span>
              </div>
            </div>

            {/* Completed example table using consistent criteria */}
            <div className="border border-[#E9E8EB] rounded-xl overflow-hidden mb-3">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#F6F5F7] border-b border-[#E9E8EB]">
                  <tr>
                    <th className="p-3 font-semibold text-[#313639]">Criterion</th>
                    <th className="p-3 text-center font-semibold text-[#313639]">Reference</th>
                    <th className="p-3 text-center font-semibold text-[#313639]">Headband Candidate</th>
                    <th className="p-3 text-center font-semibold text-[#313639]">Ear-Worn Candidate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E9E8EB] bg-[#FFFFFF]">
                  <tr>
                    <td className="p-3 font-medium text-[#313639]">Signal Quality</td>
                    <td className="p-3 text-center font-mono text-[#909292] bg-[#F6F5F7]/40">Reference</td>
                    <td className="p-3 text-center font-mono font-bold text-emerald-600">+</td>
                    <td className="p-3 text-center font-mono font-bold text-slate-600">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-[#313639]">Overnight Comfort</td>
                    <td className="p-3 text-center font-mono text-[#909292] bg-[#F6F5F7]/40">Reference</td>
                    <td className="p-3 text-center font-mono font-bold text-slate-600">0</td>
                    <td className="p-3 text-center font-mono font-bold text-emerald-600">+</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-[#313639]">Technical Feasibility</td>
                    <td className="p-3 text-center font-mono text-[#909292] bg-[#F6F5F7]/40">Reference</td>
                    <td className="p-3 text-center font-mono font-bold text-slate-600">0</td>
                    <td className="p-3 text-center font-mono font-bold text-slate-600">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-[#313639]">Battery / Power</td>
                    <td className="p-3 text-center font-mono text-[#909292] bg-[#F6F5F7]/40">Reference</td>
                    <td className="p-3 text-center font-mono font-bold text-emerald-600">+</td>
                    <td className="p-3 text-center font-mono font-bold text-emerald-600">+</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-[#313639]">Cost</td>
                    <td className="p-3 text-center font-mono text-[#909292] bg-[#F6F5F7]/40">Reference</td>
                    <td className="p-3 text-center font-mono font-bold text-rose-600">−</td>
                    <td className="p-3 text-center font-mono font-bold text-slate-600">0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-[11px] text-[#909292] font-mono italic mb-6">
              Illustrative example only. Do NOT use 1–5 scoring here.
            </div>

            {/* SCREENING OUTCOME FORK */}
            <div className="pt-4 border-t border-[#E9E8EB] space-y-4">
              <div className="text-xs font-mono font-bold text-[#313639] uppercase tracking-wider text-center">
                Screening Outcome
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* One side: Eliminate */}
                <div className="p-4 bg-rose-50/50 border border-rose-200 rounded-xl">
                  <div className="font-bold text-xs text-rose-800 mb-1">
                    Eliminate Weak Concepts
                  </div>
                  <p className="text-[11px] text-rose-700 leading-snug">
                    Remove concepts that should not continue in their current form.
                  </p>
                </div>

                {/* Other side: Combine / Develop */}
                <div className="p-4 bg-emerald-50/50 border border-emerald-200 rounded-xl">
                  <div className="font-bold text-xs text-emerald-800 mb-1">
                    Combine / Develop Promising Concepts
                  </div>
                  <p className="text-[11px] text-emerald-700 leading-snug">
                    Improve promising concepts before detailed scoring.
                  </p>
                </div>
              </div>

              {/* COMBINE / DEVELOP VISUAL EXAMPLE */}
              <div className="bg-[#F6F5F7] border border-[#E9E8EB] rounded-xl p-4 space-y-3">
                <div className="text-[10px] font-mono font-bold text-[#313639] uppercase">
                  Combine / Develop Example:
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs font-mono text-center">
                  <div className="px-3 py-2 bg-[#FFFFFF] border border-[#E9E8EB] rounded-lg w-full sm:w-auto">
                    Headband: High Signal Quality (+)
                  </div>
                  <span className="text-[#909292] font-bold">+</span>
                  <div className="px-3 py-2 bg-[#FFFFFF] border border-[#E9E8EB] rounded-lg w-full sm:w-auto">
                    Ear-Worn: Ergonomic Comfort (+)
                  </div>
                  <span className="text-[#909292] font-bold">↓</span>
                  <div className="px-3 py-2 bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-lg font-bold w-full sm:w-auto">
                    Improved Hybrid Concept
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-[#606060] pt-2 border-t border-[#E9E8EB]">
                  <div><strong>Improve:</strong> correct a weak feature</div>
                  <div><strong>Combine:</strong> preserve useful characteristics from different concepts</div>
                  <div><strong>Develop:</strong> add enough definition for detailed comparison</div>
                </div>

                {/* Re-screen loop note */}
                <div className="flex items-center justify-between pt-2 border-t border-[#E9E8EB] text-xs">
                  <span className="text-[#606060]">
                    If a concept changes significantly: <strong>Re-screen</strong>
                  </span>
                  <button
                    onClick={triggerReScreen}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FFFFFF] hover:bg-slate-100 border border-[#D8D7DB] rounded text-[11px] font-mono text-[#313639] transition active:scale-95"
                  >
                    <RotateCcw className={`w-3 h-3 text-[#F48259] ${isLooping ? 'animate-spin' : ''}`} />
                    <span>Loop to Screening</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Connector Arrow */}
          <div className="flex justify-center -my-2 relative z-10">
            <div className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#E9E8EB] shadow-xs flex items-center justify-center text-[#909292]">
              <ArrowDown className="w-4 h-4" />
            </div>
          </div>


          {/* ==================== STAGE 8: DEVELOPED / SHORTLISTED CONCEPTS ==================== */}
          <section className="bg-[#FFFFFF] border border-[#E9E8EB] rounded-2xl p-6 sm:p-7 shadow-xs relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-[#B073D9] tracking-widest uppercase">
                Stage 08
              </span>
              <span className="text-[10px] font-mono text-[#909292] bg-[#F6F5F7] px-2 py-0.5 rounded">
                Shortlist
              </span>
            </div>
            <h2 className="text-xl font-bold text-[#313639] mb-1">
              Developed / Shortlisted Concepts
            </h2>
            <p className="text-xs text-[#606060] mb-4 leading-relaxed">
              A smaller, stronger concept set is now ready for detailed evaluation.
            </p>

            {/* Visual: Many concepts -> Screening -> Eliminate / improve -> Few shortlisted concepts */}
            <div className="bg-[#F6F5F7]/60 border border-[#E9E8EB] rounded-xl p-4 mb-3">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs font-mono text-[#313639]">
                <div className="px-3 py-2 bg-[#FFFFFF] border border-[#E9E8EB] rounded-lg">
                  Many initial concepts
                </div>
                <span className="text-[#909292]">↓</span>
                <div className="px-3 py-2 bg-[#F48259]/10 text-[#F48259] border border-[#F48259]/20 rounded-lg font-bold">
                  Screening
                </div>
                <span className="text-[#909292]">↓</span>
                <div className="px-3 py-2 bg-[#FFFFFF] border border-[#E9E8EB] rounded-lg">
                  Eliminate / improve
                </div>
                <span className="text-[#909292]">↓</span>
                <div className="px-3 py-2 bg-emerald-500 text-white rounded-lg font-bold shadow-2xs">
                  2 Shortlisted Concepts
                </div>
              </div>
            </div>

            {/* Two Shortlisted Concepts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-[#FFFFFF] border border-[#E9E8EB] rounded-xl">
                <span className="text-[10px] font-mono font-bold text-[#41A0DA] uppercase">Shortlist 1</span>
                <div className="font-bold text-[#313639] mt-0.5">Developed Headband Concept</div>
                <p className="text-[11px] text-[#606060] mt-1">Refined structural spine with multi-point dry electrodes and counter-balanced rear pod.</p>
              </div>
              <div className="p-3 bg-[#FFFFFF] border border-[#E9E8EB] rounded-xl">
                <span className="text-[10px] font-mono font-bold text-[#B073D9] uppercase">Shortlist 2</span>
                <div className="font-bold text-[#313639] mt-0.5">Developed Ear-Worn Concept</div>
                <p className="text-[11px] text-[#606060] mt-1">Soft silicone ear-hook with bilateral mastoid sensor pads and ultra-low-power Bluetooth chip.</p>
              </div>
            </div>
          </section>

          {/* Connector Arrow */}
          <div className="flex justify-center -my-2 relative z-10">
            <div className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#E9E8EB] shadow-xs flex items-center justify-center text-[#909292]">
              <ArrowDown className="w-4 h-4" />
            </div>
          </div>


          {/* ==================== STAGE 9: DETAILED CONCEPT SCORING ==================== */}
          <section className="bg-[#FFFFFF] border-2 border-[#41A0DA]/30 rounded-2xl p-6 sm:p-7 shadow-sm relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-[#41A0DA] tracking-widest uppercase">
                Stage 09 · Scoring Second
              </span>
              <span className="text-[10px] font-mono text-white bg-[#41A0DA] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">
                SCORE = 1–5 SCALE
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#313639] mb-1">
              Detailed Concept Scoring
            </h2>
            <p className="text-xs text-[#606060] mb-5 leading-relaxed">
              Evaluate shortlisted concepts using the agreed criteria and weights.
            </p>

            {/* Formula callout */}
            <div className="p-3 bg-[#41A0DA]/10 border border-[#41A0DA]/20 rounded-xl mb-4 flex items-center justify-between text-xs">
              <div>
                <strong className="text-[#41A0DA]">Rating scale:</strong> 1–5
              </div>
              <div className="font-mono font-bold text-[#313639]">
                Weighted Result = Rating × Weight
              </div>
            </div>

            {/* Fully completed example table for the two shortlisted concepts */}
            <div className="border border-[#E9E8EB] rounded-xl overflow-hidden mb-3">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#F6F5F7] border-b border-[#E9E8EB] text-[11px]">
                  <tr>
                    <th className="p-2.5 font-semibold text-[#313639]">Criterion</th>
                    <th className="p-2.5 text-center font-semibold text-[#313639]">Weight</th>
                    <th className="p-2.5 text-center font-semibold text-[#313639]">Headband Rating</th>
                    <th className="p-2.5 text-right font-semibold text-[#313639]">Headband Weighted</th>
                    <th className="p-2.5 text-center font-semibold text-[#313639]">Ear-Worn Rating</th>
                    <th className="p-2.5 text-right font-semibold text-[#313639]">Ear-Worn Weighted</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E9E8EB] bg-[#FFFFFF] font-mono text-[11px]">
                  <tr>
                    <td className="p-2.5 font-sans font-medium text-[#313639]">Signal Quality</td>
                    <td className="p-2.5 text-center text-[#606060]">25%</td>
                    <td className="p-2.5 text-center font-bold text-[#313639]">5</td>
                    <td className="p-2.5 text-right font-bold text-[#41A0DA]">1.25</td>
                    <td className="p-2.5 text-center font-bold text-[#313639]">4</td>
                    <td className="p-2.5 text-right font-bold text-[#B073D9]">1.00</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-sans font-medium text-[#313639]">Overnight Comfort</td>
                    <td className="p-2.5 text-center text-[#606060]">25%</td>
                    <td className="p-2.5 text-center font-bold text-[#313639]">4</td>
                    <td className="p-2.5 text-right font-bold text-[#41A0DA]">1.00</td>
                    <td className="p-2.5 text-center font-bold text-[#313639]">5</td>
                    <td className="p-2.5 text-right font-bold text-[#B073D9]">1.25</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-sans font-medium text-[#313639]">Technical Feasibility</td>
                    <td className="p-2.5 text-center text-[#606060]">20%</td>
                    <td className="p-2.5 text-center font-bold text-[#313639]">4</td>
                    <td className="p-2.5 text-right font-bold text-[#41A0DA]">0.80</td>
                    <td className="p-2.5 text-center font-bold text-[#313639]">4</td>
                    <td className="p-2.5 text-right font-bold text-[#B073D9]">0.80</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-sans font-medium text-[#313639]">Battery / Power</td>
                    <td className="p-2.5 text-center text-[#606060]">15%</td>
                    <td className="p-2.5 text-center font-bold text-[#313639]">4</td>
                    <td className="p-2.5 text-right font-bold text-[#41A0DA]">0.60</td>
                    <td className="p-2.5 text-center font-bold text-[#313639]">5</td>
                    <td className="p-2.5 text-right font-bold text-[#B073D9]">0.75</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-sans font-medium text-[#313639]">Cost</td>
                    <td className="p-2.5 text-center text-[#606060]">15%</td>
                    <td className="p-2.5 text-center font-bold text-[#313639]">3</td>
                    <td className="p-2.5 text-right font-bold text-[#41A0DA]">0.45</td>
                    <td className="p-2.5 text-center font-bold text-[#313639]">4</td>
                    <td className="p-2.5 text-right font-bold text-[#B073D9]">0.60</td>
                  </tr>
                  <tr className="bg-[#F6F5F7]/70 font-bold border-t border-[#E9E8EB]">
                    <td className="p-2.5 font-sans text-[#313639]">Total Weighted Score</td>
                    <td className="p-2.5 text-center text-[#313639]">100%</td>
                    <td className="p-2.5 text-center text-[#909292]">—</td>
                    <td className="p-2.5 text-right text-base text-[#41A0DA]">4.10</td>
                    <td className="p-2.5 text-center text-[#909292]">—</td>
                    <td className="p-2.5 text-right text-base text-[#B073D9]">4.40</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Worked calculation callout */}
            <div className="p-3 bg-[#F6F5F7] rounded-xl border border-[#E9E8EB] mb-4 text-xs">
              <div className="font-bold text-[#313639] mb-1 font-mono uppercase text-[10px]">
                Calculation Example (Signal Quality for Headband):
              </div>
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#313639]">
                <span>Weight = 25% (0.25)</span>
                <span className="text-[#909292]">×</span>
                <span>Rating = 5</span>
                <span className="text-[#909292]">=</span>
                <span className="px-2 py-0.5 bg-white border border-[#E9E8EB] rounded font-bold text-[#41A0DA]">
                  0.25 × 5 = 1.25
                </span>
              </div>
            </div>

            {/* Caveat notes */}
            <div className="space-y-1 text-xs text-[#606060] leading-relaxed mb-6">
              <p className="italic text-[10px] text-[#909292] font-mono">
                Illustrative example only — the values do not represent an actual NEXA concept decision.
              </p>
              <p className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 font-medium">
                <strong>Crucial Rule:</strong> A higher weighted total does not automatically determine the final decision. The score supports engineering review and trade-off discussion.
              </p>
            </div>

            {/* VISUALLY PROMINENT SCREEN VS SCORE DISTINCTION & SEQUENCE */}
            <div className="pt-4 border-t border-[#E9E8EB]">
              <div className="text-xs font-mono font-bold text-[#313639] uppercase tracking-wider text-center mb-3">
                Key Methodological Distinction: Screen vs Score
              </div>

              {/* Horizontal Sequence Flow */}
              <div className="bg-[#F6F5F7] p-2.5 rounded-xl border border-[#E9E8EB] flex items-center justify-center gap-2 font-mono text-[10px] text-[#313639] font-bold mb-4 text-center">
                <span className="px-2 py-1 bg-white rounded border border-[#E9E8EB] text-[#F48259]">SCREEN</span>
                <span>→</span>
                <span className="px-2 py-1 bg-white rounded border border-[#E9E8EB]">IMPROVE / ELIMINATE</span>
                <span>→</span>
                <span className="px-2 py-1 bg-white rounded border border-[#E9E8EB]">SHORTLIST</span>
                <span>→</span>
                <span className="px-2 py-1 bg-white rounded border border-[#E9E8EB] text-[#41A0DA]">SCORE</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* SCREEN CARD */}
                <div className="p-4 bg-[#F48259]/5 border border-[#F48259]/20 rounded-xl">
                  <div className="text-sm font-extrabold text-[#F48259] font-mono mb-2">
                    SCREEN
                  </div>
                  <ul className="text-xs space-y-1.5 text-[#606060]">
                    <li><strong className="text-[#313639]">Scale:</strong> + / 0 / −</li>
                    <li><strong className="text-[#313639]">Basis:</strong> Compared with a reference concept</li>
                    <li><strong className="text-[#313639]">Detail:</strong> Coarse / quick</li>
                    <li><strong className="text-[#313639]">Purpose:</strong> Reduce and improve the concept set</li>
                    <li><strong className="text-[#313639]">When:</strong> Before detailed scoring</li>
                  </ul>
                </div>

                {/* SCORE CARD */}
                <div className="p-4 bg-[#41A0DA]/5 border border-[#41A0DA]/20 rounded-xl">
                  <div className="text-sm font-extrabold text-[#41A0DA] font-mono mb-2">
                    SCORE
                  </div>
                  <ul className="text-xs space-y-1.5 text-[#606060]">
                    <li><strong className="text-[#313639]">Scale:</strong> 1–5</li>
                    <li><strong className="text-[#313639]">Basis:</strong> Agreed weighted criteria</li>
                    <li><strong className="text-[#313639]">Detail:</strong> Detailed</li>
                    <li><strong className="text-[#313639]">Purpose:</strong> Compare developed shortlisted concepts</li>
                    <li><strong className="text-[#313639]">When:</strong> After screening and concept development</li>
                  </ul>
                </div>

              </div>
            </div>
          </section>

          {/* Connector Arrow */}
          <div className="flex justify-center -my-2 relative z-10">
            <div className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#E9E8EB] shadow-xs flex items-center justify-center text-[#909292]">
              <ArrowDown className="w-4 h-4" />
            </div>
          </div>


          {/* ==================== STAGE 10: FINAL CONCEPT DECISION ==================== */}
          <section className="bg-[#FFFFFF] border border-[#E9E8EB] rounded-2xl p-6 sm:p-7 shadow-xs relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-emerald-600 tracking-widest uppercase">
                Stage 10 · Outcome
              </span>
              <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                Final Decision
              </span>
            </div>
            <h2 className="text-xl font-bold text-[#313639] mb-1">
              Final Concept Decision
            </h2>
            <p className="text-xs text-[#606060] mb-5 leading-relaxed">
              Engineering review determines which concept moves forward for further development.
            </p>

            {/* Visual: Detailed Scoring -> Engineering Review -> Concept Selected for Further Development */}
            <div className="bg-[#F6F5F7]/60 border border-[#E9E8EB] rounded-xl p-4 sm:p-5 mb-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs font-mono text-center">
                <div className="w-full sm:w-auto px-4 py-3 bg-[#FFFFFF] border border-[#E9E8EB] rounded-xl shadow-2xs">
                  Detailed Scoring (4.10 vs 4.40)
                </div>
                <span className="text-[#909292] font-bold">↓</span>
                <div className="w-full sm:w-auto px-4 py-3 bg-[#FFFFFF] border border-[#E9E8EB] rounded-xl shadow-2xs font-bold text-[#313639]">
                  Cross-Functional Review & Risk Assessment
                </div>
                <span className="text-[#909292] font-bold">↓</span>
                <div className="w-full sm:w-auto px-4 py-3 bg-emerald-600 text-white rounded-xl font-bold shadow-2xs">
                  Concept Selected for Further Development
                </div>
              </div>
            </div>

            {/* Crucial Engineering Note */}
            <div className="p-3 bg-[#F6F5F7] border border-[#E9E8EB] rounded-xl text-xs text-[#606060] leading-relaxed">
              <strong>Core Engineering Rule:</strong> The matrix informs the decision; it does not replace engineering judgement. Do not imply that the mathematically highest score automatically wins without prototype validation, FMEA risk analysis, and team sign-off.
            </div>
          </section>

        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#E9E8EB] bg-[#FFFFFF] py-8 text-center text-xs text-[#909292] font-mono">
        <div>NEXA Concept Selection Workflow · Single Linear Process</div>
      </footer>

    </div>
  );
}
