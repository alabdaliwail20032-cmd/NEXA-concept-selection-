import React, { useEffect, useState } from 'react';
import { WORKFLOW_STAGES, STAGE_METHODOLOGY } from '../data/nexaData';
import { WorkflowStageId } from '../types';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Map,
} from 'lucide-react';
import { NexaLogo } from './NexaLogo';
import { ProcessNavigator } from './ProcessNavigator';
import { StageVisualizer } from './StageVisualizer';

interface PresentationModeProps {
  currentStageId: WorkflowStageId;
  onSelectStage: (id: WorkflowStageId) => void;
  onClose: () => void;
}

export const PresentationMode: React.FC<PresentationModeProps> = ({
  currentStageId,
  onSelectStage,
  onClose,
}) => {
  const [focusMode, setFocusMode] = useState(false);

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

  const currentIndex = stageOrder.indexOf(currentStageId);
  const currentStageData = STAGE_METHODOLOGY[currentStageId];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        if (currentIndex < stageOrder.length - 1) {
          onSelectStage(stageOrder[currentIndex + 1]);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentIndex > 0) {
          onSelectStage(stageOrder[currentIndex - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose, onSelectStage, stageOrder]);

  const handleNext = () => {
    if (currentIndex < stageOrder.length - 1) {
      onSelectStage(stageOrder[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectStage(stageOrder[currentIndex - 1]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#F6F5F7] text-[#313639] flex flex-col overflow-hidden">
      {/* Top Presentation Control Bar */}
      <header className="shrink-0 bg-[#FFFFFF] border-b border-[#E9E8EB] px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <NexaLogo size="sm" showSubtitle={false} />
          <div className="h-4 w-[1px] bg-[#D8D7DB]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#606060]">
            Presentation Mode
          </span>
          <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#F48259]/15 text-[#B4552F]">
            Slide {currentIndex + 1} of {stageOrder.length}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Toggle Focus Mode */}
          <button
            onClick={() => setFocusMode(!focusMode)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-[10px] border transition ${
              focusMode
                ? 'bg-[#313639] text-white border-[#313639]'
                : 'bg-[#FFFFFF] text-[#606060] hover:text-[#313639] border-[#E9E8EB]'
            }`}
            title={focusMode ? 'Show Process Navigator' : 'Focus Mode (Hide Navigator)'}
          >
            {focusMode ? (
              <>
                <Map className="w-3.5 h-3.5 text-[#F48259]" />
                <span>Show Process</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Focus Mode</span>
              </>
            )}
          </button>

          <span className="text-[11px] text-[#909292] hidden md:inline">
            Arrow keys / Space to navigate • Esc to exit
          </span>

          <button
            onClick={onClose}
            className="p-1.5 text-[#606060] hover:text-[#313639] hover:bg-[#F6F5F7] rounded-[10px] border border-[#E9E8EB] transition"
            aria-label="Close presentation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Presentation Body: Persistent Process on Left + Visual on Right */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Process Navigator (Preserves Context) */}
        {!focusMode && (
          <aside className="w-72 lg:w-80 shrink-0 bg-[#FFFFFF] border-r border-[#E9E8EB] overflow-hidden hidden sm:block">
            <ProcessNavigator
              currentStage={currentStageId}
              onSelectStage={onSelectStage}
            />
          </aside>
        )}

        {/* Right Stage Explanation & Visuals */}
        <main className="flex-1 overflow-y-auto p-6 sm:p-10 flex flex-col justify-between">
          <div className="max-w-4xl mx-auto w-full space-y-6">
            {/* Slide Header */}
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#F48259]">
                NEXA Concept Selection Guideline
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#313639] tracking-tight mt-1">
                {currentStageData?.title}
              </h2>
              <p className="text-base text-[#606060] font-normal leading-relaxed mt-2">
                {currentStageData?.purpose}
              </p>
            </div>

            {/* Central Graphic */}
            <div className="my-4">
              <StageVisualizer
                stageId={currentStageId}
                onNavigateStage={onSelectStage}
              />
            </div>

            {/* Core Methodology Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-[14px] bg-[#FFFFFF] border border-[#E9E8EB]">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#41A0DA] mb-1">
                  What the team does
                </div>
                <p className="text-xs text-[#606060] leading-relaxed">
                  {currentStageData?.whatHappens}
                </p>
              </div>

              <div className="p-4 rounded-[14px] bg-[#FFFFFF] border border-[#E9E8EB]">
                <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 mb-1">
                  What leaves this stage
                </div>
                <p className="text-xs text-[#606060] leading-relaxed">
                  {currentStageData?.stageOutput}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Presentation Slide Navigators */}
          <footer className="shrink-0 mt-8 pt-4 border-t border-[#E9E8EB] flex items-center justify-between max-w-4xl mx-auto w-full">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-[12px] text-xs font-semibold border transition ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed bg-transparent border-[#E9E8EB] text-[#909292]'
                  : 'bg-[#FFFFFF] border-[#D8D7DB] text-[#313639] hover:bg-[#F6F5F7]'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Slide</span>
            </button>

            <span className="text-xs font-semibold text-[#606060]">
              {currentIndex + 1} / {stageOrder.length}
            </span>

            <button
              onClick={handleNext}
              disabled={currentIndex === stageOrder.length - 1}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-[12px] text-xs font-bold transition shadow-xs ${
                currentIndex === stageOrder.length - 1
                  ? 'opacity-40 cursor-not-allowed bg-transparent border border-[#E9E8EB] text-[#909292]'
                  : 'bg-[#F48259] hover:bg-[#e0724a] text-white'
              }`}
            >
              <span>Next Slide</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </footer>
        </main>
      </div>
    </div>
  );
};
