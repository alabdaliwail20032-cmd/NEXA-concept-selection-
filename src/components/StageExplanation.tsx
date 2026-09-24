import React from 'react';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  HelpCircle,
  Activity,
  Layers,
  FileCheck,
  ChevronRight,
} from 'lucide-react';
import { WorkflowStageId, StageMethodologyData } from '../types';
import { STAGE_METHODOLOGY, WORKFLOW_STAGES } from '../data/nexaData';
import { StageVisualizer } from './StageVisualizer';

interface StageExplanationProps {
  stageId: WorkflowStageId;
  onSelectStage: (id: WorkflowStageId) => void;
}

export const StageExplanation: React.FC<StageExplanationProps> = ({
  stageId,
  onSelectStage,
}) => {
  const stageData = STAGE_METHODOLOGY[stageId];

  // Helper to determine previous and next stage
  const stageOrder: WorkflowStageId[] = [
    'candidate-concepts',
    'prepare-concepts',
    'mandatory-gate',
    'define-criteria',
    'establish-weights',
    'route-a',
    'route-b',
    'final-criteria-weights',
    'concept-screening',
    'screening-outcome',
    'combine-develop',
    'shortlisted-concepts',
    'detailed-scoring',
    'final-decision',
  ];

  const currentIndex = stageOrder.indexOf(stageId);
  const prevStageId = currentIndex > 0 ? stageOrder[currentIndex - 1] : null;
  const nextStageId = currentIndex < stageOrder.length - 1 ? stageOrder[currentIndex + 1] : null;

  const prevStageInfo = prevStageId
    ? WORKFLOW_STAGES.find((s) => s.id === prevStageId)
    : null;
  const nextStageInfo = nextStageId
    ? WORKFLOW_STAGES.find((s) => s.id === nextStageId)
    : null;

  if (!stageData) {
    return (
      <div className="p-8 text-center text-[#606060]">
        Stage details not found.
      </div>
    );
  }

  return (
    <article className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Clean Stage Header: Stage Number, Title, Purpose */}
      <div className="pt-2">
        <div className="text-xs font-mono font-bold tracking-widest text-[#F48259] uppercase mb-1">
          {stageId === 'candidate-concepts'
            ? '01'
            : stageData.stepNumber
            ? String(stageData.stepNumber).padStart(2, '0')
            : String(currentIndex + 1).padStart(2, '0')}
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#313639] tracking-tight">
          {stageData.title}
        </h1>
        <p className="mt-1.5 text-sm sm:text-base text-[#606060] font-normal leading-relaxed">
          {stageData.purpose}
        </p>
      </div>

      {/* Main Visual Explanation (Primary visual space) */}
      <section aria-label="Visual explanation">
        <StageVisualizer stageId={stageId} onNavigateStage={onSelectStage} />
      </section>

      {/* Core Methodology Details: What happens, How, Output */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* WHAT HAPPENS */}
        <div className="bg-[#FFFFFF] border border-[#E9E8EB] rounded-[18px] p-5 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-[#41A0DA]/15 text-[#41A0DA] font-black text-xs flex items-center justify-center">
              ⚡
            </div>
            <h3 className="text-xs font-bold text-[#313639] uppercase tracking-wider">
              What does the team actually do?
            </h3>
          </div>
          <p className="text-xs text-[#606060] leading-relaxed">
            {stageData.whatHappens}
          </p>
        </div>

        {/* HOW */}
        <div className="bg-[#FFFFFF] border border-[#E9E8EB] rounded-[18px] p-5 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-[#F2AB27]/15 text-[#F2AB27] font-black text-xs flex items-center justify-center">
              ⚙
            </div>
            <h3 className="text-xs font-bold text-[#313639] uppercase tracking-wider">
              What method or rule is used?
            </h3>
          </div>
          <p className="text-xs text-[#606060] leading-relaxed">
            {stageData.howMethod}
          </p>
        </div>

        {/* OUTPUT */}
        <div className="bg-[#FFFFFF] border border-[#E9E8EB] rounded-[18px] p-5 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-600 font-black text-xs flex items-center justify-center">
              ✓
            </div>
            <h3 className="text-xs font-bold text-[#313639] uppercase tracking-wider">
              What leaves this stage?
            </h3>
          </div>
          <p className="text-xs text-[#606060] leading-relaxed">
            {stageData.stageOutput}
          </p>
        </div>
      </section>

      {/* Key Methodology Rules (Essential rules only) */}
      {stageData.keyRules && stageData.keyRules.length > 0 && (
        <section className="bg-[#F6F5F7] border border-[#E9E8EB] rounded-[18px] p-5">
          <h3 className="text-xs font-bold text-[#313639] uppercase tracking-wider mb-3">
            Key Engineering Rules & Boundaries
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {stageData.keyRules.map((rule, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] p-3.5 rounded-[14px] border border-[#E9E8EB]"
              >
                <div className="font-bold text-[#313639] mb-1">{rule.title}</div>
                <div className="text-[#606060] leading-snug">{rule.description}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Stage Output & Next Step Hand-off Banner */}
      <section className="bg-[#FFFFFF] border-2 border-[#E9E8EB] rounded-[20px] p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#909292] block">
            Stage Output Hand-Off
          </span>
          <span className="text-sm font-bold text-[#313639] block mt-0.5">
            {stageData.outputLabel}
          </span>
          <span className="text-xs text-[#606060] mt-0.5 block">
            Enters the next stage in the NEXA Concept Selection sequence.
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
          {prevStageInfo && (
            <button
              onClick={() => onSelectStage(prevStageInfo.id)}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-2 rounded-[12px] bg-[#FFFFFF] border border-[#D8D7DB] text-xs font-semibold text-[#606060] hover:text-[#313639] hover:bg-[#F6F5F7] transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>
          )}

          {nextStageInfo && (
            <button
              onClick={() => onSelectStage(nextStageInfo.id)}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-[12px] bg-[#F48259] hover:bg-[#e0724a] text-white text-xs font-bold transition shadow-xs"
            >
              <span>Next: {nextStageInfo.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </section>
    </article>
  );
};
