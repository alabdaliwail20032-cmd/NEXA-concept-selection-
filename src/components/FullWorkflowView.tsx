import React from 'react';
import {
  Layers,
  FileCheck,
  ShieldCheck,
  ListFilter,
  GitFork,
  Users,
  BarChart3,
  CheckSquare,
  Filter,
  Split,
  Wrench,
  Sparkles,
  Table,
  Award,
  ArrowDown,
  ArrowRight,
  LogOut,
  RotateCcw,
  ChevronRight,
} from 'lucide-react';
import { WorkflowStageId } from '../types';

interface FullWorkflowViewProps {
  onSelectStage: (stageId: WorkflowStageId) => void;
}

export const FullWorkflowView: React.FC<FullWorkflowViewProps> = ({ onSelectStage }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-8 animate-fade-in">
      {/* Title & Introduction */}
      <div className="text-center max-w-3xl mx-auto space-y-2.5">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border border-[#E9E8EB] rounded-full text-xs font-semibold text-[#606060] shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#F48259]" />
          <span>Interactive Engineering Methodology Map</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#313639] tracking-tight">
          NEXA Concept Selection Process
        </h1>
        <p className="text-sm sm:text-base text-[#606060] leading-relaxed">
          From diverse candidate alternatives to a committed engineering design decision. Click any stage to inspect its purpose, rules, and methodology.
        </p>
      </div>

      {/* Main Interactive Workflow Diagram Container */}
      <div className="bg-[#FFFFFF] border border-[#E9E8EB] rounded-[24px] p-6 sm:p-10 shadow-sm relative">
        <div className="flex flex-col items-center max-w-3xl mx-auto space-y-3">

          {/* STAGE 0: CANDIDATE CONCEPTS */}
          <div
            onClick={() => onSelectStage('candidate-concepts')}
            className="w-full group cursor-pointer bg-[#F6F5F7] hover:bg-[#FFFFFF] border-2 border-[#E9E8EB] hover:border-[#F48259] rounded-[20px] p-5 transition-all shadow-xs hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[12px] bg-[#FFFFFF] border border-[#D8D7DB] flex items-center justify-center text-[#F48259] group-hover:scale-105 transition-transform shadow-2xs">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#909292]">Starting Point</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#E9E8EB] text-[#606060] font-semibold">Multiple Alternatives</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#313639] group-hover:text-[#F48259] transition-colors">
                    Candidate Concepts
                  </h3>
                </div>
              </div>
              <div className="flex items-center text-xs font-semibold text-[#606060] group-hover:text-[#F48259] transition-colors">
                <span className="hidden sm:inline mr-1">Inspect Stage</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
            <p className="text-xs text-[#606060] mt-2 sm:pl-[52px]">
              Establish the set of multiple plausible technical alternatives before evaluation begins.
            </p>
          </div>

          {/* Down Connector */}
          <div className="flex flex-col items-center my-0.5">
            <div className="w-[2px] h-5 bg-[#D8D7DB]" />
            <ArrowDown className="w-3.5 h-3.5 text-[#909292] -my-1" />
          </div>

          {/* STAGE 1: PREPARE CONCEPTS */}
          <div
            onClick={() => onSelectStage('prepare-concepts')}
            className="w-full group cursor-pointer bg-[#F6F5F7] hover:bg-[#FFFFFF] border-2 border-[#E9E8EB] hover:border-[#F48259] rounded-[20px] p-5 transition-all shadow-xs hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[12px] bg-[#FFFFFF] border border-[#D8D7DB] flex items-center justify-center text-[#F48259] group-hover:scale-105 transition-transform shadow-2xs">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#909292]">Stage 1</span>
                  <h3 className="text-base sm:text-lg font-bold text-[#313639] group-hover:text-[#F48259] transition-colors">
                    1. Prepare Concepts
                  </h3>
                </div>
              </div>
              <div className="flex items-center text-xs font-semibold text-[#606060] group-hover:text-[#F48259] transition-colors">
                <span className="hidden sm:inline mr-1">Inspect Stage</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
            <p className="text-xs text-[#606060] mt-2 sm:pl-[52px]">
              Bring all candidate alternatives to a comparable level of definition and maturity before evaluation begins.
            </p>
          </div>

          {/* Down Connector */}
          <div className="flex flex-col items-center my-0.5">
            <div className="w-[2px] h-5 bg-[#D8D7DB]" />
            <ArrowDown className="w-3.5 h-3.5 text-[#909292] -my-1" />
          </div>

          {/* STAGE 2: MANDATORY REQUIREMENTS GATE */}
          <div
            onClick={() => onSelectStage('mandatory-gate')}
            className="w-full group cursor-pointer bg-[#FFFFFF] border-2 border-[#F25D7A]/50 hover:border-[#F25D7A] rounded-[20px] p-5 transition-all shadow-xs hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[12px] bg-[#F25D7A]/10 border border-[#F25D7A]/30 flex items-center justify-center text-[#F25D7A] group-hover:scale-105 transition-transform shadow-2xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#F25D7A]">Stage 2 • Gate</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F25D7A]/15 text-[#F25D7A] font-bold">Go / No-Go</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#313639] group-hover:text-[#F25D7A] transition-colors">
                    2. Mandatory Requirements Gate
                  </h3>
                </div>
              </div>
              <div className="flex items-center text-xs font-semibold text-[#606060] group-hover:text-[#F25D7A] transition-colors">
                <span className="hidden sm:inline mr-1">Inspect Stage</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
            <p className="text-xs text-[#606060] mt-2 sm:pl-[52px]">
              Pass / Review / Fail non-negotiable constraints. Absolute requirements are never weighted or traded off.
            </p>
          </div>

          {/* Down Connector */}
          <div className="flex flex-col items-center my-0.5">
            <div className="w-[2px] h-5 bg-[#D8D7DB]" />
            <ArrowDown className="w-3.5 h-3.5 text-[#909292] -my-1" />
          </div>

          {/* STAGE 3: DEFINE SELECTION CRITERIA */}
          <div
            onClick={() => onSelectStage('define-criteria')}
            className="w-full group cursor-pointer bg-[#F6F5F7] hover:bg-[#FFFFFF] border-2 border-[#E9E8EB] hover:border-[#F48259] rounded-[20px] p-5 transition-all shadow-xs hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[12px] bg-[#FFFFFF] border border-[#D8D7DB] flex items-center justify-center text-[#F48259] group-hover:scale-105 transition-transform shadow-2xs">
                  <ListFilter className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#909292]">Stage 3</span>
                  <h3 className="text-base sm:text-lg font-bold text-[#313639] group-hover:text-[#F48259] transition-colors">
                    3. Define Selection Criteria
                  </h3>
                </div>
              </div>
              <div className="flex items-center text-xs font-semibold text-[#606060] group-hover:text-[#F48259] transition-colors">
                <span className="hidden sm:inline mr-1">Inspect Stage</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
            <p className="text-xs text-[#606060] mt-2 sm:pl-[52px]">
              Assemble criteria passing the 5-point quality test: Relevant, Distinct, Assessable, Traceable, and Neutral.
            </p>
          </div>

          {/* Down Connector */}
          <div className="flex flex-col items-center my-0.5">
            <div className="w-[2px] h-5 bg-[#D8D7DB]" />
            <ArrowDown className="w-3.5 h-3.5 text-[#909292] -my-1" />
          </div>

          {/* STAGE 4: ESTABLISH CRITERIA WEIGHTS + BRANCHING */}
          <div className="w-full bg-[#FFFFFF] border-2 border-[#E9E8EB] rounded-[22px] p-5 space-y-4">
            <div
              onClick={() => onSelectStage('establish-weights')}
              className="group cursor-pointer flex items-center justify-between pb-3 border-b border-[#E9E8EB]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[12px] bg-[#F6F5F7] border border-[#D8D7DB] flex items-center justify-center text-[#F48259]">
                  <GitFork className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#909292]">Stage 4</span>
                  <h3 className="text-base sm:text-lg font-bold text-[#313639] group-hover:text-[#F48259] transition-colors">
                    4. Establish Criteria Weights
                  </h3>
                </div>
              </div>
              <div className="flex items-center text-xs font-semibold text-[#606060] group-hover:text-[#F48259] transition-colors">
                <span className="hidden sm:inline mr-1">Inspect Weighting</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            <p className="text-xs text-[#606060]">
              Select between two approved weighting paths based on available system architecture documentation:
            </p>

            {/* Branch Cards: Route A & Route B */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
              {/* Route A */}
              <div
                onClick={() => onSelectStage('route-a')}
                className="group cursor-pointer p-4 bg-[#F6F5F7] hover:bg-[#FFFFFF] border-2 border-[#E9E8EB] hover:border-[#F48259] rounded-[16px] transition shadow-2xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#F48259]" />
                    <span className="text-xs font-bold text-[#313639] group-hover:text-[#F48259]">
                      Route A: Team Workshop
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FFFFFF] border border-[#D8D7DB] text-[#606060] font-semibold">
                    1–5 Ratings
                  </span>
                </div>
                <p className="text-[11px] text-[#606060] leading-relaxed">
                  Cross-functional independent ratings (1–5) normalized to sum to exactly 100%.
                </p>
              </div>

              {/* Route B */}
              <div
                onClick={() => onSelectStage('route-b')}
                className="group cursor-pointer p-4 bg-[#F6F5F7] hover:bg-[#FFFFFF] border-2 border-[#E9E8EB] hover:border-[#41A0DA] rounded-[16px] transition shadow-2xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-[#41A0DA]" />
                    <span className="text-xs font-bold text-[#313639] group-hover:text-[#41A0DA]">
                      Route B: QFD-Derived
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FFFFFF] border border-[#D8D7DB] text-[#606060] font-semibold">
                    House of Quality
                  </span>
                </div>
                <p className="text-[11px] text-[#606060] leading-relaxed">
                  Weights extracted directly from Quality Function Deployment technical priorities.
                </p>
              </div>
            </div>

            {/* Merge notice */}
            <div className="text-center pt-2 text-[11px] font-semibold text-[#909292]">
              Both routes reconnect into Final Criteria & Weights ↓
            </div>
          </div>

          {/* Down Connector */}
          <div className="flex flex-col items-center my-0.5">
            <div className="w-[2px] h-5 bg-[#D8D7DB]" />
            <ArrowDown className="w-3.5 h-3.5 text-[#909292] -my-1" />
          </div>

          {/* MERGE: FINAL CRITERIA + WEIGHTS */}
          <div
            onClick={() => onSelectStage('final-criteria-weights')}
            className="w-full group cursor-pointer bg-[#F6F5F7] hover:bg-[#FFFFFF] border-2 border-[#E9E8EB] hover:border-[#313639] rounded-[20px] p-5 transition-all shadow-xs hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[12px] bg-[#FFFFFF] border border-[#D8D7DB] flex items-center justify-center text-[#313639] group-hover:scale-105 transition-transform shadow-2xs">
                  <CheckSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#909292]">Convergence</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">100% Normalized</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#313639] group-hover:text-[#F48259] transition-colors">
                    Final Criteria + Weights
                  </h3>
                </div>
              </div>
              <div className="flex items-center text-xs font-semibold text-[#606060] group-hover:text-[#F48259] transition-colors">
                <span className="hidden sm:inline mr-1">Inspect Stage</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
            <p className="text-xs text-[#606060] mt-2 sm:pl-[52px]">
              Lock the approved evaluation criteria and normalized percentage weights before concept evaluation starts.
            </p>
          </div>

          {/* Down Connector */}
          <div className="flex flex-col items-center my-0.5">
            <div className="w-[2px] h-5 bg-[#D8D7DB]" />
            <ArrowDown className="w-3.5 h-3.5 text-[#909292] -my-1" />
          </div>

          {/* STAGE 5: CONCEPT SCREENING */}
          <div
            onClick={() => onSelectStage('concept-screening')}
            className="w-full group cursor-pointer bg-[#F6F5F7] hover:bg-[#FFFFFF] border-2 border-[#E9E8EB] hover:border-[#41A0DA] rounded-[20px] p-5 transition-all shadow-xs hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[12px] bg-[#FFFFFF] border border-[#D8D7DB] flex items-center justify-center text-[#41A0DA] group-hover:scale-105 transition-transform shadow-2xs">
                  <Filter className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#909292]">Stage 5</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#41A0DA]/15 text-[#41A0DA] font-bold">Scale: + / 0 / −</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#313639] group-hover:text-[#41A0DA] transition-colors">
                    5. Concept Screening
                  </h3>
                </div>
              </div>
              <div className="flex items-center text-xs font-semibold text-[#606060] group-hover:text-[#41A0DA] transition-colors">
                <span className="hidden sm:inline mr-1">Inspect Stage</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
            <p className="text-xs text-[#606060] mt-2 sm:pl-[52px]">
              Coarse comparative matrix evaluated against a defined reference concept (Datum). Screening is not scoring.
            </p>
          </div>

          {/* Down Connector */}
          <div className="flex flex-col items-center my-0.5">
            <div className="w-[2px] h-5 bg-[#D8D7DB]" />
            <ArrowDown className="w-3.5 h-3.5 text-[#909292] -my-1" />
          </div>

          {/* SCREENING OUTCOME: ELIMINATION VS COMBINE/DEVELOP */}
          <div className="w-full bg-[#FFFFFF] border-2 border-[#E9E8EB] rounded-[22px] p-5 space-y-4">
            <div
              onClick={() => onSelectStage('screening-outcome')}
              className="group cursor-pointer flex items-center justify-between pb-3 border-b border-[#E9E8EB]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[12px] bg-[#F6F5F7] border border-[#D8D7DB] flex items-center justify-center text-[#F48259]">
                  <Split className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#909292]">Evaluation Decision</span>
                  <h3 className="text-base sm:text-lg font-bold text-[#313639] group-hover:text-[#F48259] transition-colors">
                    Screening Outcome Dispositions
                  </h3>
                </div>
              </div>
              <div className="flex items-center text-xs font-semibold text-[#606060] group-hover:text-[#F48259] transition-colors">
                <span className="hidden sm:inline mr-1">Inspect Dispositions</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Side Exit vs Main Route */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {/* Side Exit */}
              <div className="p-4 bg-rose-50/50 border border-dashed border-rose-300 rounded-[16px] space-y-1.5">
                <div className="flex items-center gap-2 text-rose-700 font-bold text-xs">
                  <LogOut className="w-4 h-4" />
                  <span>Eliminate Weak Concepts (Side Exit)</span>
                </div>
                <p className="text-[11px] text-[#606060] leading-relaxed">
                  Concepts with persistent fundamental flaws or negative net scores leave the process here.
                </p>
              </div>

              {/* Main Continuation Route: Combine / Develop */}
              <div
                onClick={() => onSelectStage('combine-develop')}
                className="group cursor-pointer p-4 bg-[#F6F5F7] hover:bg-[#FFFFFF] border-2 border-[#F2AB27]/50 hover:border-[#F2AB27] rounded-[16px] transition shadow-2xs space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#313639] font-bold text-xs group-hover:text-[#B87A0B]">
                    <Wrench className="w-4 h-4 text-[#F2AB27]" />
                    <span>Combine / Develop (Main Route)</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#F2AB27]/20 text-[#B87A0B]">
                    Iteration Loop ↺
                  </span>
                </div>
                <p className="text-[11px] text-[#606060] leading-relaxed">
                  Improve surviving concepts, combine complementary strengths, and re-screen until a superior set emerges.
                </p>
              </div>
            </div>
          </div>

          {/* Down Connector */}
          <div className="flex flex-col items-center my-0.5">
            <div className="w-[2px] h-5 bg-[#D8D7DB]" />
            <ArrowDown className="w-3.5 h-3.5 text-[#909292] -my-1" />
          </div>

          {/* STAGE 6: DEVELOPED / SHORTLISTED CONCEPTS */}
          <div
            onClick={() => onSelectStage('shortlisted-concepts')}
            className="w-full group cursor-pointer bg-[#F6F5F7] hover:bg-[#FFFFFF] border-2 border-[#E9E8EB] hover:border-[#F48259] rounded-[20px] p-5 transition-all shadow-xs hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[12px] bg-[#FFFFFF] border border-[#D8D7DB] flex items-center justify-center text-[#F48259] group-hover:scale-105 transition-transform shadow-2xs">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#909292]">Stage 6</span>
                  <h3 className="text-base sm:text-lg font-bold text-[#313639] group-hover:text-[#F48259] transition-colors">
                    6. Developed Shortlist
                  </h3>
                </div>
              </div>
              <div className="flex items-center text-xs font-semibold text-[#606060] group-hover:text-[#F48259] transition-colors">
                <span className="hidden sm:inline mr-1">Inspect Stage</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
            <p className="text-xs text-[#606060] mt-2 sm:pl-[52px]">
              Focused set of 2–4 surviving, refined concepts ready for high-resolution weighted scoring.
            </p>
          </div>

          {/* Down Connector */}
          <div className="flex flex-col items-center my-0.5">
            <div className="w-[2px] h-5 bg-[#D8D7DB]" />
            <ArrowDown className="w-3.5 h-3.5 text-[#909292] -my-1" />
          </div>

          {/* STAGE 7: DETAILED CONCEPT SCORING */}
          <div
            onClick={() => onSelectStage('detailed-scoring')}
            className="w-full group cursor-pointer bg-[#F6F5F7] hover:bg-[#FFFFFF] border-2 border-[#E9E8EB] hover:border-[#B073D9] rounded-[20px] p-5 transition-all shadow-xs hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[12px] bg-[#FFFFFF] border border-[#D8D7DB] flex items-center justify-center text-[#B073D9] group-hover:scale-105 transition-transform shadow-2xs">
                  <Table className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#909292]">Stage 7</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#B073D9]/15 text-[#B073D9] font-bold">1–5 Anchored Scale</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#313639] group-hover:text-[#B073D9] transition-colors">
                    7. Detailed Concept Scoring
                  </h3>
                </div>
              </div>
              <div className="flex items-center text-xs font-semibold text-[#606060] group-hover:text-[#B073D9] transition-colors">
                <span className="hidden sm:inline mr-1">Inspect Stage</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
            <p className="text-xs text-[#606060] mt-2 sm:pl-[52px]">
              Multi-criteria weighted sum rating: S_k = Σ (W_i × R_ik) providing high numerical discrimination.
            </p>
          </div>

          {/* Down Connector */}
          <div className="flex flex-col items-center my-0.5">
            <div className="w-[2px] h-5 bg-[#D8D7DB]" />
            <ArrowDown className="w-3.5 h-3.5 text-[#909292] -my-1" />
          </div>

          {/* FINAL DECISION */}
          <div
            onClick={() => onSelectStage('final-decision')}
            className="w-full group cursor-pointer bg-[#313639] hover:bg-[#1E2327] text-white rounded-[20px] p-5 transition-all shadow-md hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[12px] bg-white/10 flex items-center justify-center text-[#F48259] group-hover:scale-105 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Final Milestone</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#F48259] text-white font-bold">Commitment Record</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Final Concept Decision
                  </h3>
                </div>
              </div>
              <div className="flex items-center text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                <span className="hidden sm:inline mr-1">Inspect Decision</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
            <p className="text-xs text-slate-300 mt-2 sm:pl-[52px]">
              Five standard dispositions (Select, Develop, Investigate, Hold, Reject) reviewed by engineering leadership. Scores inform judgment; they do not replace it.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
