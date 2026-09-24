import React from 'react';
import {
  ArrowRight,
  ArrowDown,
  CheckCircle,
  AlertTriangle,
  XCircle,
  ShieldCheck,
  Check,
  RotateCcw,
  Sparkles,
  GitFork,
  CheckSquare,
  Users,
  BarChart3,
  LogOut,
  Sliders,
  HelpCircle,
  Wrench,
  Layers,
} from 'lucide-react';
import { WorkflowStageId } from '../types';

interface StageVisualizerProps {
  stageId: WorkflowStageId;
  onNavigateStage?: (id: WorkflowStageId) => void;
}

export const StageVisualizer: React.FC<StageVisualizerProps> = ({
  stageId,
  onNavigateStage,
}) => {
  switch (stageId) {
    // ----------------------------------------------------
    // STAGE 0: CANDIDATE CONCEPTS
    // ----------------------------------------------------
    case 'candidate-concepts':
      return (
        <div className="bg-[#FFFFFF] border border-[#E9E8EB] rounded-[22px] p-6 sm:p-8 shadow-sm space-y-6">
          {/* Top: Design / Product Problem */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full max-w-xl p-4 bg-[#F6F5F7] border border-[#D8D7DB] rounded-[16px]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#606060] block mb-1">
                Engineering Ingestion
              </span>
              <h4 className="text-sm font-bold text-[#313639]">
                Product / Design Problem
              </h4>
              <p className="text-xs text-[#606060] mt-1">
                The functional requirements, user needs, and operating constraints defining the product scope.
              </p>
            </div>

            {/* Down Connector */}
            <div className="flex flex-col items-center my-2">
              <span className="text-[10px] font-bold text-[#909292] uppercase tracking-wider mb-0.5">
                Multiple Possible Solutions
              </span>
              <div className="w-[1.5px] h-4 bg-[#D8D7DB]" />
              <ArrowDown className="w-3.5 h-3.5 text-[#909292] -my-1" />
            </div>
          </div>

          {/* Center: Candidate Concept Set */}
          <div className="p-5 sm:p-6 bg-[#F6F5F7] rounded-[20px] border border-[#E9E8EB] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E9E8EB] pb-3">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#F48259] block">
                  Methodology Scope
                </span>
                <h3 className="text-base font-bold text-[#313639]">
                  Candidate Concept Set
                </h3>
              </div>
              <div className="px-3 py-1 bg-white border border-[#D8D7DB] rounded-full text-xs font-semibold text-[#313639] shrink-0 self-start sm:self-auto">
                Multiple technically plausible concepts enter the selection process
              </div>
            </div>

            {/* 4 Neutral, Unlabeled Concept Cards with Abstract Internal Representations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-1">
              {/* Abstract Concept Card 1: Modular Partitioned Layout */}
              <div className="bg-white border-2 border-[#E9E8EB] rounded-[16px] p-4 flex flex-col justify-between h-44 shadow-2xs hover:border-[#D8D7DB] transition">
                <div className="flex items-center justify-between text-[#909292]">
                  <div className="w-7 h-7 rounded-[8px] bg-[#F6F5F7] border border-[#E9E8EB] flex items-center justify-center text-[#606060]">
                    <Layers className="w-3.5 h-3.5 text-[#F48259]" />
                  </div>
                  <span className="text-[10px] font-mono text-[#909292]">Plausible Alt.</span>
                </div>
                {/* Abstract wireframe schematic */}
                <div className="my-auto py-2">
                  <div className="grid grid-cols-2 gap-1.5 h-16 p-2 bg-[#F6F5F7] rounded-[10px] border border-[#E9E8EB]">
                    <div className="bg-white rounded-md border border-[#D8D7DB] flex items-center justify-center">
                      <div className="w-3 h-1 bg-[#D8D7DB] rounded-full" />
                    </div>
                    <div className="bg-white rounded-md border border-[#D8D7DB] flex items-center justify-center">
                      <div className="w-3 h-1 bg-[#D8D7DB] rounded-full" />
                    </div>
                    <div className="col-span-2 bg-[#E9E8EB]/80 rounded-md flex items-center justify-center">
                      <div className="w-8 h-1 bg-[#D8D7DB] rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="text-[11px] font-medium text-[#606060] text-center">
                  Modular Partitioning
                </div>
              </div>

              {/* Abstract Concept Card 2: Central Hub & Bus Layout */}
              <div className="bg-white border-2 border-[#E9E8EB] rounded-[16px] p-4 flex flex-col justify-between h-44 shadow-2xs hover:border-[#D8D7DB] transition">
                <div className="flex items-center justify-between text-[#909292]">
                  <div className="w-7 h-7 rounded-[8px] bg-[#F6F5F7] border border-[#E9E8EB] flex items-center justify-center text-[#606060]">
                    <Sparkles className="w-3.5 h-3.5 text-[#41A0DA]" />
                  </div>
                  <span className="text-[10px] font-mono text-[#909292]">Plausible Alt.</span>
                </div>
                {/* Abstract wireframe schematic */}
                <div className="my-auto py-2">
                  <div className="relative h-16 p-2 bg-[#F6F5F7] rounded-[10px] border border-[#E9E8EB] flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white border border-[#D8D7DB] flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-[#41A0DA]/60" />
                    </div>
                    <div className="absolute w-12 h-[1px] bg-[#D8D7DB]" />
                    <div className="absolute h-12 w-[1px] bg-[#D8D7DB]" />
                  </div>
                </div>
                <div className="text-[11px] font-medium text-[#606060] text-center">
                  Hub & Peripheral Architecture
                </div>
              </div>

              {/* Abstract Concept Card 3: Layered Stack Layout */}
              <div className="bg-white border-2 border-[#E9E8EB] rounded-[16px] p-4 flex flex-col justify-between h-44 shadow-2xs hover:border-[#D8D7DB] transition">
                <div className="flex items-center justify-between text-[#909292]">
                  <div className="w-7 h-7 rounded-[8px] bg-[#F6F5F7] border border-[#E9E8EB] flex items-center justify-center text-[#606060]">
                    <GitFork className="w-3.5 h-3.5 text-[#F2AB27]" />
                  </div>
                  <span className="text-[10px] font-mono text-[#909292]">Plausible Alt.</span>
                </div>
                {/* Abstract wireframe schematic */}
                <div className="my-auto py-2">
                  <div className="flex flex-col justify-between h-16 p-2 bg-[#F6F5F7] rounded-[10px] border border-[#E9E8EB]">
                    <div className="h-2.5 bg-white rounded border border-[#D8D7DB]" />
                    <div className="h-2.5 bg-white rounded border border-[#D8D7DB]" />
                    <div className="h-2.5 bg-white rounded border border-[#D8D7DB]" />
                  </div>
                </div>
                <div className="text-[11px] font-medium text-[#606060] text-center">
                  Layered Vertical Stacking
                </div>
              </div>

              {/* Abstract Concept Card 4: Integrated Monolithic Footprint */}
              <div className="bg-white border-2 border-[#E9E8EB] rounded-[16px] p-4 flex flex-col justify-between h-44 shadow-2xs hover:border-[#D8D7DB] transition">
                <div className="flex items-center justify-between text-[#909292]">
                  <div className="w-7 h-7 rounded-[8px] bg-[#F6F5F7] border border-[#E9E8EB] flex items-center justify-center text-[#606060]">
                    <Wrench className="w-3.5 h-3.5 text-[#B073D9]" />
                  </div>
                  <span className="text-[10px] font-mono text-[#909292]">Plausible Alt.</span>
                </div>
                {/* Abstract wireframe schematic */}
                <div className="my-auto py-2">
                  <div className="h-16 p-2 bg-[#F6F5F7] rounded-[10px] border border-[#E9E8EB] flex items-center justify-center">
                    <div className="w-full h-full bg-white rounded-md border border-[#D8D7DB] p-1.5 flex flex-col justify-center gap-1">
                      <div className="w-full h-1 bg-[#D8D7DB] rounded" />
                      <div className="w-2/3 h-1 bg-[#D8D7DB] rounded" />
                    </div>
                  </div>
                </div>
                <div className="text-[11px] font-medium text-[#606060] text-center">
                  Integrated Monolithic Chassis
                </div>
              </div>
            </div>

            <div className="p-3 bg-white rounded-[14px] border border-[#E9E8EB] text-xs text-[#606060] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-medium text-[#313639]">
                <strong>Key Principle:</strong> We are not evaluating yet. We are establishing what plausible alternatives exist.
              </span>
              <span className="text-[11px] font-semibold text-[#F48259] shrink-0">
                Plausible alternatives
              </span>
            </div>
          </div>

          {/* Transition Hand-off to Stage 1: Prepare Concepts */}
          <div className="flex flex-col items-center">
            <div className="w-[1.5px] h-4 bg-[#D8D7DB]" />
            <ArrowDown className="w-3.5 h-3.5 text-[#909292] -my-1" />

            <div
              onClick={() => onNavigateStage && onNavigateStage('prepare-concepts')}
              className="mt-2 w-full max-w-xl group cursor-pointer bg-white hover:bg-[#F6F5F7] border-2 border-[#D8D7DB] hover:border-[#F48259] rounded-[16px] p-4 transition-all shadow-xs flex items-center justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F48259] block">
                  Next Step Transition
                </span>
                <span className="text-xs font-bold text-[#313639] group-hover:text-[#F48259]">
                  Candidate Concept Set → Next: Prepare Concepts
                </span>
                <p className="text-[11px] text-[#606060] mt-0.5">
                  Before comparison begins, the concepts must be brought to a comparable level of definition.
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#F48259] shrink-0 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      );

    // ----------------------------------------------------
    // STAGE 1: PREPARE CONCEPTS
    // ----------------------------------------------------
    case 'prepare-concepts':
      return (
        <div className="bg-[#FFFFFF] border border-[#E9E8EB] rounded-[20px] p-6 shadow-sm space-y-6">
          <div className="text-xs font-bold text-[#606060] uppercase tracking-wider">
            Concept Normalization Architecture
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Raw Inconsistent Left */}
            <div className="md:col-span-5 bg-[#F6F5F7] border border-dashed border-[#D8D7DB] rounded-[16px] p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#313639]">
                  Inconsistent Raw Proposals
                </span>
                <span className="text-[10px] bg-[#E9E8EB] text-[#606060] px-2 py-0.5 rounded-full font-medium">
                  Variable Detail
                </span>
              </div>
              <div className="space-y-2 text-xs text-[#606060]">
                <div className="p-2 bg-white rounded-[10px] border border-[#E9E8EB]">
                  <span className="font-semibold text-[#313639]">Concept 1:</span> High-fidelity CAD model
                </div>
                <div className="p-2 bg-white rounded-[10px] border border-[#E9E8EB]">
                  <span className="font-semibold text-[#313639]">Concept 2:</span> One-line napkin sketch
                </div>
                <div className="p-2 bg-white rounded-[10px] border border-[#E9E8EB]">
                  <span className="font-semibold text-[#313639]">Concept 3:</span> Hardware block diagram
                </div>
              </div>
            </div>

            {/* Transform Arrow */}
            <div className="md:col-span-2 flex flex-col items-center justify-center py-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F48259] mb-1">
                Standardize
              </span>
              <div className="w-8 h-8 rounded-full bg-[#F48259]/15 text-[#F48259] flex items-center justify-center">
                <ArrowRight className="w-4 h-4 hidden md:block" />
                <ArrowDown className="w-4 h-4 md:hidden" />
              </div>
            </div>

            {/* Standardized Right */}
            <div className="md:col-span-5 bg-[#FFFFFF] border-2 border-[#F48259] rounded-[16px] p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#313639]">
                  Comparable Concept Cards
                </span>
                <span className="text-[10px] bg-[#F48259]/15 text-[#F48259] px-2 py-0.5 rounded-full font-bold">
                  Equal Maturity
                </span>
              </div>
              <p className="text-[11px] text-[#606060] mb-2">
                All alternatives structured with 8 consistent engineering attributes:
              </p>
              <div className="grid grid-cols-2 gap-1.5 text-[11px] text-[#313639]">
                <span className="p-1 bg-[#F6F5F7] rounded">✓ Intended function</span>
                <span className="p-1 bg-[#F6F5F7] rounded">✓ Operating principle</span>
                <span className="p-1 bg-[#F6F5F7] rounded">✓ Key architecture</span>
                <span className="p-1 bg-[#F6F5F7] rounded">✓ Major interfaces</span>
                <span className="p-1 bg-[#F6F5F7] rounded">✓ Use interaction</span>
                <span className="p-1 bg-[#F6F5F7] rounded">✓ Assumptions</span>
                <span className="p-1 bg-[#F6F5F7] rounded">✓ Unresolved questions</span>
                <span className="p-1 bg-[#F6F5F7] rounded">✓ Visual representation</span>
              </div>
            </div>
          </div>
        </div>
      );

    // ----------------------------------------------------
    // STAGE 2: MANDATORY REQUIREMENTS GATE
    // ----------------------------------------------------
    case 'mandatory-gate':
      return (
        <div className="bg-[#FFFFFF] border border-[#E9E8EB] rounded-[20px] p-6 shadow-sm space-y-6">
          <div className="text-xs font-bold text-[#606060] uppercase tracking-wider">
            Mandatory Requirement Filtering Logic
          </div>

          {/* Tri-Branch Gateway Diagram */}
          <div className="flex flex-col items-center">
            {/* Input Concept */}
            <div className="px-5 py-2.5 rounded-[12px] bg-[#F6F5F7] border border-[#E9E8EB] text-xs font-bold text-[#313639] shadow-xs">
              Candidate Concept Set
            </div>

            <div className="w-[1.5px] h-5 bg-[#D8D7DB] my-1" />
            <ArrowDown className="w-3.5 h-3.5 text-[#909292] -my-1" />

            {/* The Gate */}
            <div className="my-2 px-6 py-3 rounded-[14px] bg-[#313639] text-white flex items-center gap-2.5 shadow-md">
              <ShieldCheck className="w-5 h-5 text-[#F25D7A]" />
              <div>
                <span className="text-xs font-bold tracking-wide uppercase block">
                  Mandatory Requirements Gate
                </span>
                <span className="text-[10px] text-slate-300">
                  Safety • Core Function • Regulatory Compliance
                </span>
              </div>
            </div>

            <div className="w-[1.5px] h-5 bg-[#D8D7DB] my-1" />

            {/* 3 Outcome Dispositions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mt-2">
              {/* PASS */}
              <div className="p-3.5 rounded-[14px] bg-emerald-50 border border-emerald-200 text-center">
                <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  PASS
                </div>
                <div className="text-[11px] font-semibold text-emerald-700 mt-1">
                  Action: Continue
                </div>
                <p className="text-[10px] text-emerald-600/90 mt-1">
                  Requirement satisfied with adequate evidence for this stage.
                </p>
              </div>

              {/* REVIEW */}
              <div className="p-3.5 rounded-[14px] bg-amber-50 border border-amber-200 text-center">
                <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-amber-800">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  REVIEW
                </div>
                <div className="text-[11px] font-semibold text-amber-700 mt-1">
                  Action: Investigate / Modify
                </div>
                <p className="text-[10px] text-amber-600/90 mt-1">
                  Evidence is incomplete or feasible modification needed.
                </p>
              </div>

              {/* FAIL */}
              <div className="p-3.5 rounded-[14px] bg-rose-50 border border-rose-200 text-center">
                <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-rose-800">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  FAIL
                </div>
                <div className="text-[11px] font-semibold text-rose-700 mt-1">
                  Action: Reject / Redesign
                </div>
                <p className="text-[10px] text-rose-600/90 mt-1">
                  Violates non-negotiable constraint in its current form.
                </p>
              </div>
            </div>
          </div>

          {/* Core Non-Tradeoff Callout */}
          <div className="p-4 bg-[#F25D7A]/10 border-l-4 border-[#F25D7A] rounded-r-[14px]">
            <span className="text-xs font-bold text-[#F25D7A] uppercase tracking-wider block mb-1">
              Absolute Engineering Boundary
            </span>
            <p className="text-xs text-[#313639] leading-relaxed">
              Mandatory requirements are <strong>never weighted trade-offs</strong>. A critical failure
              in safety or regulatory compliance cannot be redeemed by a high score in user comfort or cost.
            </p>
          </div>
        </div>
      );

    // ----------------------------------------------------
    // STAGE 3: DEFINE SELECTION CRITERIA
    // ----------------------------------------------------
    case 'define-criteria':
      return (
        <div className="bg-[#FFFFFF] border border-[#E9E8EB] rounded-[20px] p-6 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="text-xs font-bold text-[#606060] uppercase tracking-wider">
              Selection Criteria Definition & Quality Check
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F6F5F7] border border-[#E9E8EB] rounded-full text-[11px] font-semibold text-[#606060]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F48259]" />
              <span>Project-Defined Criteria • Non-Mandatory Examples</span>
            </div>
          </div>

          {/* Selection Criteria Table (Project-Specific Placeholders) */}
          <div className="bg-white rounded-[16px] border border-[#E9E8EB] overflow-hidden shadow-2xs">
            {/* Table Header Context Bar: Visual communication that each NEXA project defines its own criteria */}
            <div className="bg-[#F6F5F7] px-4 py-3 border-b border-[#E9E8EB] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#313639]">
                  Selection Criteria Table
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white border border-[#D8D7DB] text-[#606060]">
                  Project-Specific Definition
                </span>
              </div>
              <div className="text-[11px] text-[#606060] italic">
                Each NEXA project defines its own criteria • Example placeholders only (not fixed or mandatory)
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#FAFAFA] border-b border-[#E9E8EB] text-[#606060]">
                    <th className="p-3 font-bold">Selection Criterion (Example Placeholders)</th>
                    <th className="p-3 font-bold">Focus Area (Project-Defined)</th>
                    <th className="p-3 font-bold">5-Point Quality Standard</th>
                    <th className="p-3 font-bold text-center">Evaluation Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E9E8EB]">
                  {[
                    {
                      name: 'e.g., Technical Feasibility',
                      desc: 'Architecture complexity, component maturity, execution risk',
                      check: 'Distinct • Assessable',
                      role: 'Weighted Trade-off',
                    },
                    {
                      name: 'e.g., Performance',
                      desc: 'Throughput, speed, energy efficiency, system response',
                      check: 'Relevant • Neutral',
                      role: 'Weighted Trade-off',
                    },
                    {
                      name: 'e.g., User Experience',
                      desc: 'Ergonomics, interface clarity, cognitive load, ease of use',
                      check: 'Distinct • Relevant',
                      role: 'Weighted Trade-off',
                    },
                    {
                      name: 'e.g., Manufacturability',
                      desc: 'Fabrication yields, assembly tolerances, tooling investment',
                      check: 'Assessable • Traceable',
                      role: 'Weighted Trade-off',
                    },
                    {
                      name: 'e.g., Cost',
                      desc: 'BOM cost target, unit production cost, capital expenditure',
                      check: 'Relevant • Neutral',
                      role: 'Weighted Trade-off',
                    },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F6F5F7] transition-colors">
                      <td className="p-3 font-bold text-[#313639] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F48259]" />
                        <span>{row.name}</span>
                      </td>
                      <td className="p-3 text-[#606060]">{row.desc}</td>
                      <td className="p-3 text-[#606060]">
                        <span className="px-2 py-0.5 rounded-md bg-[#F6F5F7] border border-[#E9E8EB] text-[11px] font-medium text-[#313639]">
                          {row.check}
                        </span>
                      </td>
                      <td className="p-3 text-center">
                        <span className="px-2 py-0.5 rounded-full bg-[#F48259]/10 text-[#F48259] text-[10px] font-bold">
                          {row.role}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Note on Safety exclusion from weighted table */}
            <div className="p-3 bg-[#F6F5F7] border-t border-[#E9E8EB] text-[11px] text-[#606060] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
              <span>
                <strong>Methodology Guardrail:</strong> Non-negotiable requirements (e.g., Safety & Regulatory) are resolved at the <em>Stage 2 Mandatory Gate</em> and excluded from weighted trade-offs.
              </span>
              <span className="font-semibold text-[#313639] shrink-0">
                100% project-customizable
              </span>
            </div>
          </div>

          {/* 5-Point Quality Check Table/Badges */}
          <div>
            <div className="text-xs font-bold text-[#313639] mb-2.5">
              The 5 Mandatory Quality Checks (Applied to All Custom Criteria)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
              {[
                { name: 'Relevant', desc: 'Directly influences the decision outcome.' },
                { name: 'Distinct', desc: 'Does not duplicate another criterion.' },
                { name: 'Assessable', desc: 'Can be rated consistently with current data.' },
                { name: 'Traceable', desc: 'Its reason for inclusion is understood.' },
                { name: 'Neutral', desc: 'Does not unfairly favor one specific concept.' },
              ].map((item) => (
                <div
                  key={item.name}
                  className="p-3 bg-white rounded-[12px] border border-[#E9E8EB] text-center"
                >
                  <div className="text-xs font-bold text-[#F48259]">{item.name}</div>
                  <div className="text-[10px] text-[#606060] mt-1 leading-snug">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3.5 bg-[#F6F5F7] rounded-[14px] border border-[#E9E8EB] text-xs text-[#606060]">
            <span className="font-semibold text-[#313639]">Anti-Double Counting Rule:</span>{' '}
            Merge criteria that measure essentially the same technical aspect to avoid distorting total weight.
          </div>
        </div>
      );

    // ----------------------------------------------------
    // STAGE 4: ESTABLISH CRITERIA WEIGHTS
    // ----------------------------------------------------
    case 'establish-weights':
      return (
        <div className="bg-[#FFFFFF] border border-[#E9E8EB] rounded-[20px] p-6 shadow-sm space-y-6">
          <div className="text-xs font-bold text-[#606060] uppercase tracking-wider">
            Approved Weighting Routes
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Route A Card */}
            <div
              onClick={() => onNavigateStage?.('route-a')}
              className="p-5 rounded-[18px] bg-[#FFFFFF] border-2 border-[#F48259]/30 hover:border-[#F48259] cursor-pointer transition shadow-xs group"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-[10px] bg-[#F48259]/15 text-[#F48259]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F48259] block">
                    Route A
                  </span>
                  <h4 className="text-sm font-bold text-[#313639]">
                    Cross-Functional Product Team Workshop
                  </h4>
                </div>
              </div>
              <p className="text-xs text-[#606060] leading-relaxed mt-2">
                Structured independent ratings (1–5) by Product, Engineering, Design, and Operations.
                Ideal for early-stage or internal architecture decisions where QFD is not yet mature.
              </p>
              <div className="mt-4 pt-3 border-t border-[#E9E8EB] flex items-center justify-between text-xs font-semibold text-[#F48259]">
                <span>Inspect Route A Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Route B Card */}
            <div
              onClick={() => onNavigateStage?.('route-b')}
              className="p-5 rounded-[18px] bg-[#FFFFFF] border-2 border-[#41A0DA]/30 hover:border-[#41A0DA] cursor-pointer transition shadow-xs group"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-[10px] bg-[#41A0DA]/15 text-[#41A0DA]">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#41A0DA] block">
                    Route B
                  </span>
                  <h4 className="text-sm font-bold text-[#313639]">
                    QFD-Derived Weighting
                  </h4>
                </div>
              </div>
              <p className="text-xs text-[#606060] leading-relaxed mt-2">
                Existing House of Quality technical priorities become the basis of weights.
                Used when customer needs and engineering specifications are already mature.
              </p>
              <div className="mt-4 pt-3 border-t border-[#E9E8EB] flex items-center justify-between text-xs font-semibold text-[#41A0DA]">
                <span>Inspect Route B Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-[#F6F5F7] rounded-[14px] border border-[#E9E8EB] text-center text-xs text-[#606060]">
            Both approved routes produce one traceable input: <strong>Agreed Criteria + Weights summing to 100%</strong>.
          </div>
        </div>
      );

    // ----------------------------------------------------
    // ROUTE A: TEAM WORKSHOP
    // ----------------------------------------------------
    case 'route-a':
      return (
        <div className="bg-[#FFFFFF] border border-[#E9E8EB] rounded-[20px] p-6 shadow-sm space-y-6">
          <div className="text-xs font-bold text-[#606060] uppercase tracking-wider">
            Route A Weighting Sequence
          </div>

          {/* Sequential Process Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center text-xs">
            {[
              { step: '1', title: 'Agreed Criteria', desc: 'Remove gates from weighted list' },
              { step: '2', title: 'Independent Rating', desc: 'Individual 1–5 ratings pre-discussion' },
              { step: '3', title: 'Team Discussion', desc: 'Review rating discrepancies' },
              { step: '4', title: 'Calculate Mean', desc: 'Compute average team importance' },
              { step: '5', title: 'Normalize', desc: 'Scale so weights total 100%' },
            ].map((s) => (
              <div
                key={s.step}
                className="p-3 bg-[#F6F5F7] rounded-[12px] border border-[#E9E8EB] flex flex-col justify-between"
              >
                <div>
                  <div className="w-5 h-5 mx-auto rounded-full bg-[#F48259]/20 text-[#F48259] font-bold text-[10px] flex items-center justify-center mb-1.5">
                    {s.step}
                  </div>
                  <div className="font-bold text-[#313639]">{s.title}</div>
                </div>
                <div className="text-[10px] text-[#606060] mt-1">{s.desc}</div>
              </div>
            ))}
          </div>

          {/* Importance Scale 1 to 5 */}
          <div>
            <div className="text-xs font-bold text-[#313639] mb-2">
              Methodology Importance Scale (1–5)
            </div>
            <div className="grid grid-cols-5 gap-2 text-center text-xs">
              {[
                { rating: '1', label: 'Low' },
                { rating: '2', label: 'Limited' },
                { rating: '3', label: 'Moderate' },
                { rating: '4', label: 'High' },
                { rating: '5', label: 'Critical' },
              ].map((r) => (
                <div
                  key={r.rating}
                  className="p-2 rounded-[10px] bg-white border border-[#D8D7DB]"
                >
                  <div className="font-bold text-[#F48259] text-sm">{r.rating}</div>
                  <div className="text-[11px] text-[#606060] mt-0.5">{r.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Math normalization formula */}
          <div className="p-4 bg-[#F6F5F7] rounded-[14px] border border-[#E9E8EB] font-mono text-xs text-[#313639] space-y-1">
            <div className="text-[#F48259] font-bold">
              Mean Importance: I_i = (Σ Participant Ratings) / N
            </div>
            <div>
              Normalized Weight: W_i = (I_i / Σ I) × 100%
            </div>
            <div className="text-[11px] text-[#606060] font-sans">
              Final criteria weights must total exactly 100%.
            </div>
          </div>
        </div>
      );

    // ----------------------------------------------------
    // ROUTE B: QFD-DERIVED WEIGHTING
    // ----------------------------------------------------
    case 'route-b':
      return (
        <div className="bg-[#FFFFFF] border border-[#E9E8EB] rounded-[20px] p-6 shadow-sm space-y-6">
          <div className="text-xs font-bold text-[#606060] uppercase tracking-wider">
            Route B — From QFD to Weights
          </div>

          {/* Simple 3-step transition */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 bg-[#F6F5F7] rounded-[16px] border border-[#E9E8EB]">
            <div className="flex-1 p-3 bg-white rounded-[12px] border border-[#D8D7DB] text-center">
              <span className="text-[10px] uppercase font-bold text-[#41A0DA] block">Step 1</span>
              <span className="text-xs font-bold text-[#313639]">Existing Mature QFD</span>
              <span className="text-[10px] text-[#606060] block mt-0.5">Validated Customer Needs</span>
            </div>

            <ArrowRight className="w-4 h-4 text-[#909292] shrink-0 hidden sm:block" />
            <ArrowDown className="w-4 h-4 text-[#909292] shrink-0 sm:hidden" />

            <div className="flex-1 p-3 bg-white rounded-[12px] border border-[#D8D7DB] text-center">
              <span className="text-[10px] uppercase font-bold text-[#41A0DA] block">Step 2</span>
              <span className="text-xs font-bold text-[#313639]">Technical Priorities</span>
              <span className="text-[10px] text-[#606060] block mt-0.5">What-vs-How 0/1/3/9 matrix</span>
            </div>

            <ArrowRight className="w-4 h-4 text-[#909292] shrink-0 hidden sm:block" />
            <ArrowDown className="w-4 h-4 text-[#909292] shrink-0 sm:hidden" />

            <div className="flex-1 p-3 bg-[#41A0DA]/10 rounded-[12px] border border-[#41A0DA]/40 text-center">
              <span className="text-[10px] uppercase font-bold text-[#41A0DA] block">Step 3</span>
              <span className="text-xs font-bold text-[#313639]">Concept-Selection Weights</span>
              <span className="text-[10px] text-[#606060] block mt-0.5">Normalized to 100%</span>
            </div>
          </div>

          {/* Key Engineering Guardrails */}
          <div className="space-y-2 text-xs">
            <div className="p-3 bg-white rounded-[12px] border border-[#E9E8EB] text-[#313639]">
              <strong>Usage rule:</strong> Use this route when a sufficiently mature QFD already provides traceable technical priorities.
            </div>
            <div className="p-3 bg-white rounded-[12px] border border-[#E9E8EB] text-[#313639]">
              <strong>Methodology boundary:</strong> QFD provides the weight source; it does not replace downstream Concept Screening or Detailed Scoring.
            </div>
          </div>

          <div className="p-4 bg-[#F6F5F7] rounded-[14px] border border-[#E9E8EB] font-mono text-xs text-[#313639]">
            <div className="text-[#41A0DA] font-bold">
              Raw Priority: T_j = Σ (C_i × R_ij) &nbsp; [R_ij ∈ &#123;0, 1, 3, 9&#125;]
            </div>
            <div>Normalized Weight: W_j = (T_j / Σ T) × 100%</div>
          </div>
        </div>
      );

    // ----------------------------------------------------
    // MERGE: FINAL CRITERIA + WEIGHTS
    // ----------------------------------------------------
    case 'final-criteria-weights':
      return (
        <div className="bg-[#FFFFFF] border border-[#E9E8EB] rounded-[20px] p-6 shadow-sm space-y-6">
          <div className="text-xs font-bold text-[#606060] uppercase tracking-wider">
            Reconnection of Approved Weighting Routes
          </div>

          {/* Convergence Graphic */}
          <div className="p-5 bg-[#F6F5F7] rounded-[16px] border border-[#E9E8EB] flex flex-col items-center">
            {/* Two source routes */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              <div className="p-3 bg-white rounded-[12px] border border-[#F48259]/40 text-center text-xs font-bold text-[#F48259]">
                Route A — Team Workshop
              </div>
              <div className="p-3 bg-white rounded-[12px] border border-[#41A0DA]/40 text-center text-xs font-bold text-[#41A0DA]">
                Route B — QFD Priorities
              </div>
            </div>

            {/* Merge Arrows */}
            <div className="flex items-center justify-center my-2 text-xs font-bold text-[#909292]">
              <span>↘ Both Routes Merge ↙</span>
            </div>

            {/* Convergence Output Box */}
            <div className="p-4 bg-white rounded-[14px] border-2 border-[#313639] text-center w-full max-w-md shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#606060] block">
                Single Unified Input
              </span>
              <span className="text-sm font-bold text-[#313639] block mt-0.5">
                Final Criteria + 100% Weights
              </span>
              <span className="text-[11px] text-[#606060] block mt-1">
                One agreed set of criteria + one traceable set of weights
              </span>
            </div>

            <div className="w-[1.5px] h-4 bg-[#D8D7DB] my-1" />
            <ArrowDown className="w-3.5 h-3.5 text-[#909292] -my-1" />

            {/* Downstream Stage */}
            <div className="mt-2 px-5 py-2 rounded-[10px] bg-[#FFFFFF] border border-[#D8D7DB] text-xs font-semibold text-[#313639]">
              Proceeds to: <strong>Concept Screening</strong>
            </div>
          </div>

          <div className="p-3.5 bg-[#FFFFFF] border-l-4 border-[#313639] rounded-r-[12px] text-xs text-[#313639]">
            <strong>Unified Methodology:</strong> The two weighting routes now merge completely.
            There are not two different downstream concept-selection processes.
          </div>
        </div>
      );

    // ----------------------------------------------------
    // STAGE 5: CONCEPT SCREENING
    // ----------------------------------------------------
    case 'concept-screening':
      return (
        <div className="bg-[#FFFFFF] border border-[#E9E8EB] rounded-[20px] p-6 shadow-sm space-y-6">
          <div className="text-xs font-bold text-[#606060] uppercase tracking-wider">
            Screening Matrix Mechanics (+ / 0 / −)
          </div>

          {/* Screening ≠ Scoring Big Callout Banner */}
          <div className="p-4 bg-[#41A0DA]/10 border-2 border-[#41A0DA] rounded-[16px] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <span className="text-xs font-black tracking-wider text-[#41A0DA] uppercase block">
                CORE PRINCIPLE: SCREENING ≠ SCORING
              </span>
              <span className="text-xs text-[#313639] mt-0.5 block">
                Screening is <strong>coarse + comparative + reference-based</strong>. It does not use 1–5 ratings or weights.
              </span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0 bg-white px-3 py-1.5 rounded-full border border-[#41A0DA]/30 text-xs font-bold text-[#41A0DA]">
              Scale: + &nbsp; 0 &nbsp; −
            </div>
          </div>

          {/* Matrix Diagram */}
          <div className="overflow-x-auto border border-[#E9E8EB] rounded-[16px]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#F6F5F7] border-b border-[#E9E8EB] text-[#606060]">
                  <th className="p-3">Selection Criteria</th>
                  <th className="p-3 text-center bg-[#E9E8EB]/50">Reference / Datum</th>
                  <th className="p-3 text-center">Candidate Option 1</th>
                  <th className="p-3 text-center">Candidate Option 2</th>
                  <th className="p-3 text-center">Candidate Option 3</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E9E8EB]">
                {[
                  ['e.g., Technical Feasibility', '0 (Baseline)', '+ (Better)', '+ (Better)', '− (Worse)'],
                  ['e.g., Performance', '0 (Baseline)', '+ (Better)', '0 (Same)', '+ (Better)'],
                  ['e.g., User Experience', '0 (Baseline)', '− (Worse)', '+ (Better)', '+ (Better)'],
                  ['e.g., Manufacturability', '0 (Baseline)', '+ (Better)', '− (Worse)', '0 (Same)'],
                  ['e.g., Cost', '0 (Baseline)', '0 (Same)', '+ (Better)', '− (Worse)'],
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F6F5F7]/60">
                    <td className="p-3 font-semibold text-[#313639]">{row[0]}</td>
                    <td className="p-3 text-center text-[#909292] bg-[#F6F5F7]/30">{row[1]}</td>
                    <td className="p-3 text-center font-bold text-emerald-600">{row[2]}</td>
                    <td className="p-3 text-center font-bold text-amber-600">{row[3]}</td>
                    <td className="p-3 text-center font-bold text-rose-600">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3.5 bg-[#F6F5F7] rounded-[14px] border border-[#E9E8EB] text-xs text-[#606060] flex items-center justify-between">
            <span>
              Net Score (+es minus −es) reveals relative strengths and flaws.
            </span>
            <span className="font-semibold text-[#313639]">
              Feeds directly into: Screening Outcome
            </span>
          </div>
        </div>
      );

    // ----------------------------------------------------
    // STAGE: SCREENING OUTCOME
    // ----------------------------------------------------
    case 'screening-outcome':
      return (
        <div className="bg-[#FFFFFF] border border-[#E9E8EB] rounded-[20px] p-6 shadow-sm space-y-6">
          <div className="text-xs font-bold text-[#606060] uppercase tracking-wider">
            Screening Outcome Dispositions
          </div>

          {/* Visual Fork: Elimination vs Development */}
          <div className="p-5 bg-[#F6F5F7] rounded-[18px] border border-[#E9E8EB] flex flex-col items-center">
            <div className="px-5 py-2 bg-white rounded-[12px] border border-[#D8D7DB] text-xs font-bold text-[#313639] shadow-xs">
              Screened Concepts
            </div>

            <div className="w-[1.5px] h-4 bg-[#D8D7DB] my-1" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-2">
              {/* Elimination side exit */}
              <div className="p-4 rounded-[16px] bg-rose-50/70 border border-dashed border-rose-300 text-left">
                <div className="flex items-center gap-2 text-rose-700 font-bold text-xs">
                  <LogOut className="w-4 h-4 text-rose-500" />
                  Eliminate Weak Concepts
                </div>
                <div className="text-[11px] font-semibold text-rose-800 mt-1">
                  Side Exit — Leaves the Process
                </div>
                <p className="text-[11px] text-rose-700/80 mt-1 leading-relaxed">
                  Concepts with fundamental flaws and no compensating strengths are removed and archived with rationale.
                </p>
              </div>

              {/* Combine / Develop main continuation */}
              <div className="p-4 rounded-[16px] bg-white border-2 border-[#F2AB27] shadow-sm text-left">
                <div className="flex items-center gap-2 text-[#313639] font-bold text-xs">
                  <Wrench className="w-4 h-4 text-[#F2AB27]" />
                  Combine / Develop Concepts
                </div>
                <div className="text-[11px] font-bold text-[#F2AB27] mt-1">
                  Main Continuation Route
                </div>
                <p className="text-[11px] text-[#606060] mt-1 leading-relaxed">
                  Promising concepts advance to active engineering refinement: strengthen weaknesses or combine subsystems.
                </p>
              </div>
            </div>
          </div>
        </div>
      );

    // ----------------------------------------------------
    // STAGE: COMBINE / DEVELOP CONCEPTS
    // ----------------------------------------------------
    case 'combine-develop':
      return (
        <div className="bg-[#FFFFFF] border border-[#E9E8EB] rounded-[20px] p-6 shadow-sm space-y-6">
          <div className="text-xs font-bold text-[#606060] uppercase tracking-wider">
            Refinement Cycle & The 4 Engineering Actions
          </div>

          {/* The Refinement Loop Diagram */}
          <div className="p-4 bg-[#F6F5F7] rounded-[16px] border border-[#E9E8EB]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center text-xs">
              <div className="p-2.5 bg-white rounded-[10px] border border-[#D8D7DB] font-semibold text-[#313639]">
                Screening Findings
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#909292] hidden sm:block" />
              <ArrowDown className="w-3.5 h-3.5 text-[#909292] sm:hidden" />

              <div className="p-2.5 bg-white rounded-[10px] border border-[#D8D7DB] font-semibold text-[#313639]">
                Identify Strengths & Weaknesses
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#909292] hidden sm:block" />
              <ArrowDown className="w-3.5 h-3.5 text-[#909292] sm:hidden" />

              <div className="p-2.5 bg-[#F2AB27]/15 rounded-[10px] border border-[#F2AB27]/40 font-bold text-[#313639]">
                Improve / Combine / Develop
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#909292] hidden sm:block" />
              <ArrowDown className="w-3.5 h-3.5 text-[#909292] sm:hidden" />

              <div className="p-2.5 bg-white rounded-[10px] border border-[#D8D7DB] font-semibold text-[#313639]">
                Shortlist Entry
              </div>
            </div>

            <div className="mt-3 text-center">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#F48259] bg-white px-3 py-1 rounded-full border border-[#F48259]/30">
                <RotateCcw className="w-3 h-3" />
                If significantly changed: Return to Screening before proceeding
              </span>
            </div>
          </div>

          {/* 4 Engineering Actions Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-[14px] bg-white border border-[#E9E8EB]">
              <span className="font-bold text-[#313639] block">1. Improve</span>
              <p className="text-[#606060] mt-1 leading-snug">
                Correct a weak feature in an otherwise promising concept without altering the core architecture.
              </p>
            </div>
            <div className="p-3.5 rounded-[14px] bg-white border border-[#E9E8EB]">
              <span className="font-bold text-[#313639] block">2. Combine</span>
              <p className="text-[#606060] mt-1 leading-snug">
                Preserve strong characteristics from different concepts where appropriate without adding unnecessary complexity.
              </p>
            </div>
            <div className="p-3.5 rounded-[14px] bg-white border border-[#E9E8EB]">
              <span className="font-bold text-[#313639] block">3. Develop</span>
              <p className="text-[#606060] mt-1 leading-snug">
                Add enough technical definition to support a more detailed, granular numerical comparison.
              </p>
            </div>
            <div className="p-3.5 rounded-[14px] bg-white border border-[#E9E8EB]">
              <span className="font-bold text-[#313639] block">4. Re-screen</span>
              <p className="text-[#606060] mt-1 leading-snug">
                If the concept changes substantially during combination, re-screen against the reference before scoring.
              </p>
            </div>
          </div>
        </div>
      );

    // ----------------------------------------------------
    // STAGE 6: DEVELOPED / SHORTLISTED CONCEPTS
    // ----------------------------------------------------
    case 'shortlisted-concepts':
      return (
        <div className="bg-[#FFFFFF] border border-[#E9E8EB] rounded-[20px] p-6 shadow-sm space-y-6">
          <div className="text-xs font-bold text-[#606060] uppercase tracking-wider">
            Funneling to Focused Concept Shortlist
          </div>

          {/* Linear Funnel Visual */}
          <div className="p-5 bg-[#F6F5F7] rounded-[18px] border border-[#E9E8EB]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center text-xs">
              <div className="p-3 bg-white rounded-[12px] border border-[#D8D7DB] flex-1">
                <span className="text-[10px] uppercase font-bold text-[#909292] block">Initial</span>
                <span className="font-bold text-[#313639] block mt-0.5">Many Concepts</span>
                <span className="text-[10px] text-[#606060]">Broad exploration</span>
              </div>

              <ArrowRight className="w-4 h-4 text-[#909292] shrink-0 hidden sm:block" />
              <ArrowDown className="w-4 h-4 text-[#909292] shrink-0 sm:hidden" />

              <div className="p-3 bg-white rounded-[12px] border border-[#D8D7DB] flex-1">
                <span className="text-[10px] uppercase font-bold text-[#41A0DA] block">Filter</span>
                <span className="font-bold text-[#313639] block mt-0.5">Screening</span>
                <span className="text-[10px] text-[#606060]">Eliminate / Develop</span>
              </div>

              <ArrowRight className="w-4 h-4 text-[#909292] shrink-0 hidden sm:block" />
              <ArrowDown className="w-4 h-4 text-[#909292] shrink-0 sm:hidden" />

              <div className="p-3 bg-[#F48259]/15 rounded-[12px] border-2 border-[#F48259] flex-1 shadow-sm">
                <span className="text-[10px] uppercase font-bold text-[#F48259] block">Output Set</span>
                <span className="font-bold text-[#313639] block mt-0.5">Smaller Stronger Set</span>
                <span className="text-[10px] text-[#606060]">Ready for Scoring</span>
              </div>

              <ArrowRight className="w-4 h-4 text-[#909292] shrink-0 hidden sm:block" />
              <ArrowDown className="w-4 h-4 text-[#909292] shrink-0 sm:hidden" />

              <div className="p-3 bg-white rounded-[12px] border border-[#D8D7DB] flex-1">
                <span className="text-[10px] uppercase font-bold text-[#909292] block">Next</span>
                <span className="font-bold text-[#313639] block mt-0.5">Detailed Scoring</span>
                <span className="text-[10px] text-[#606060]">1–5 Matrix</span>
              </div>
            </div>
          </div>

          {/* Three Direct Clarifications */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded-[12px] border border-[#E9E8EB]">
              <span className="font-bold text-[#313639] block mb-1">Where they came from</span>
              <p className="text-[#606060] leading-snug">
                Surviving concepts that passed screening and were refined, combined or developed.
              </p>
            </div>
            <div className="p-3 bg-white rounded-[12px] border border-[#E9E8EB]">
              <span className="font-bold text-[#313639] block mb-1">What this stage means</span>
              <p className="text-[#606060] leading-snug">
                The concept set has been distilled to only the high-potential options worth detailed evaluation.
              </p>
            </div>
            <div className="p-3 bg-white rounded-[12px] border border-[#E9E8EB]">
              <span className="font-bold text-[#313639] block mb-1">What happens next</span>
              <p className="text-[#606060] leading-snug">
                Proceed directly to Detailed Concept Scoring using agreed criteria and weights.
              </p>
            </div>
          </div>
        </div>
      );

    // ----------------------------------------------------
    // STAGE 7: DETAILED CONCEPT SCORING
    // ----------------------------------------------------
    case 'detailed-scoring':
      return (
        <div className="bg-[#FFFFFF] border border-[#E9E8EB] rounded-[20px] p-6 shadow-sm space-y-6">
          <div className="text-xs font-bold text-[#606060] uppercase tracking-wider">
            Detailed Scoring Inputs & Mechanics
          </div>

          {/* Inputs -> Matrix */}
          <div className="p-4 bg-[#F6F5F7] rounded-[16px] border border-[#E9E8EB]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-white rounded-md border border-[#D8D7DB] font-semibold text-[#313639]">
                  Shortlisted Concepts
                </span>
                <span className="text-[#909292] font-bold">+</span>
                <span className="px-2.5 py-1 bg-white rounded-md border border-[#D8D7DB] font-semibold text-[#313639]">
                  Criteria
                </span>
                <span className="text-[#909292] font-bold">+</span>
                <span className="px-2.5 py-1 bg-white rounded-md border border-[#D8D7DB] font-semibold text-[#313639]">
                  Weights (100%)
                </span>
              </div>

              <div className="flex items-center gap-1.5 font-bold text-[#B073D9]">
                <ArrowRight className="w-4 h-4 hidden sm:block" />
                <ArrowDown className="w-4 h-4 sm:hidden" />
                <span>Detailed Scoring Matrix (1–5 Scale)</span>
              </div>
            </div>
          </div>

          {/* Formula */}
          <div className="p-3.5 bg-white rounded-[14px] border border-[#E9E8EB] font-mono text-xs text-[#313639] text-center">
            <span className="text-[#B073D9] font-bold">
              Formula: S_k = Σ (W_i / 100 × R_ik)
            </span>
            <span className="text-[11px] text-[#606060] font-sans block mt-0.5">
              Raw Rating (1–5) multiplied by normalized weight (summing to total score out of 5.00)
            </span>
          </div>

          {/* SCREEN vs SCORE Comparison Graphic */}
          <div>
            <div className="text-xs font-bold text-[#313639] mb-2.5">
              Screening vs. Detailed Scoring Comparison
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {/* Screen */}
              <div className="p-4 rounded-[14px] bg-[#F6F5F7] border border-[#E9E8EB]">
                <div className="text-xs font-bold text-[#41A0DA] uppercase tracking-wider mb-1">
                  SCREEN
                </div>
                <div className="text-base font-bold text-[#313639] mb-2">
                  + &nbsp;/&nbsp; 0 &nbsp;/&nbsp; −
                </div>
                <ul className="space-y-1.5 text-[#606060] text-xs">
                  <li>• Reference-based baseline</li>
                  <li>• Coarse comparative evaluation</li>
                  <li>• Reduces and improves candidate alternatives</li>
                </ul>
              </div>

              {/* Score */}
              <div className="p-4 rounded-[14px] bg-white border-2 border-[#B073D9]/50 shadow-sm">
                <div className="text-xs font-bold text-[#B073D9] uppercase tracking-wider mb-1">
                  SCORE
                </div>
                <div className="text-base font-bold text-[#313639] mb-2">
                  1 &nbsp;to&nbsp; 5
                </div>
                <ul className="space-y-1.5 text-[#606060] text-xs">
                  <li>• Weighted criteria (100% total)</li>
                  <li>• Detailed numerical resolution</li>
                  <li>• Compares shortlisted surviving concepts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );

    // ----------------------------------------------------
    // STAGE: FINAL CONCEPT DECISION
    // ----------------------------------------------------
    case 'final-decision':
      return (
        <div className="bg-[#FFFFFF] border border-[#E9E8EB] rounded-[20px] p-6 shadow-sm space-y-6">
          <div className="text-xs font-bold text-[#606060] uppercase tracking-wider">
            Decision Framework & Statuses
          </div>

          {/* Flow sequence */}
          <div className="p-4 bg-[#F6F5F7] rounded-[16px] border border-[#E9E8EB]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center text-xs">
              <div className="p-2.5 bg-white rounded-[10px] border border-[#D8D7DB] font-semibold text-[#313639] flex-1">
                Detailed Scoring Matrix
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#909292] hidden sm:block" />
              <ArrowDown className="w-3.5 h-3.5 text-[#909292] sm:hidden" />

              <div className="p-2.5 bg-white rounded-[10px] border border-[#D8D7DB] font-semibold text-[#313639] flex-1">
                Engineering Review
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#909292] hidden sm:block" />
              <ArrowDown className="w-3.5 h-3.5 text-[#909292] sm:hidden" />

              <div className="p-2.5 bg-[#F48259]/15 rounded-[10px] border border-[#F48259]/40 font-bold text-[#313639] flex-1">
                Selected Concept Decision
              </div>
            </div>
          </div>

          {/* The 5 Formal Status Dispositions */}
          <div>
            <div className="text-xs font-bold text-[#313639] mb-2.5">
              Five Standard Decision Dispositions
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs text-center">
              {[
                { status: 'Select', desc: 'Proceed to detailed development', color: 'emerald' },
                { status: 'Develop', desc: 'Modify defined weaknesses first', color: 'amber' },
                { status: 'Investigate', desc: 'Additional testing/evidence required', color: 'blue' },
                { status: 'Hold', desc: 'Retain as credible backup alternative', color: 'purple' },
                { status: 'Reject', desc: 'Do not continue in current form', color: 'rose' },
              ].map((item) => (
                <div
                  key={item.status}
                  className="p-3 bg-white rounded-[12px] border border-[#E9E8EB] flex flex-col justify-between"
                >
                  <div className="font-bold text-[#313639]">{item.status}</div>
                  <div className="text-[10px] text-[#606060] mt-1 leading-snug">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3.5 bg-white border-l-4 border-[#F48259] rounded-r-[12px] text-xs text-[#313639]">
            <strong>Engineering Review Rule:</strong> A higher total score indicates stronger performance,
            but it does not replace engineering judgment. The team reviews scores alongside evidence confidence,
            sensitivity, and risks before signing the decision record.
          </div>
        </div>
      );

    default:
      return null;
  }
};
