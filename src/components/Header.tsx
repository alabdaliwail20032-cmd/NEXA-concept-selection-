import React from 'react';
import { NexaLogo } from './NexaLogo';
import { Presentation, BookOpen, ArrowLeft, Network } from 'lucide-react';

interface HeaderProps {
  isDetailView: boolean;
  onReturnToFullWorkflow: () => void;
  onTogglePresentation: () => void;
  onOpenReference: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isDetailView,
  onReturnToFullWorkflow,
  onTogglePresentation,
  onOpenReference,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF] border-b border-[#E9E8EB] px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all">
      {/* Official NEXA Logo & Concept Selection Brand Mark */}
      <div
        className="flex items-center cursor-pointer"
        onClick={onReturnToFullWorkflow}
        title="Return to full workflow"
      >
        <NexaLogo size="md" showSubtitle={true} />
      </div>

      {/* Header Controls: Secondary Priority */}
      <div className="flex items-center gap-2 sm:gap-2.5">
        {/* Detail State Control: ← Full Workflow */}
        {isDetailView ? (
          <button
            onClick={onReturnToFullWorkflow}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#FFFFFF] hover:bg-[#F6F5F7] text-[#313639] border border-[#D8D7DB] rounded-[10px] transition shadow-2xs active:scale-98"
            aria-label="Return to Full Workflow Map"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#F48259]" />
            <span className="font-bold">Full Workflow</span>
          </button>
        ) : (
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#F6F5F7] text-[#606060] rounded-[10px] border border-[#E9E8EB]">
            <Network className="w-3.5 h-3.5 text-[#F48259]" />
            <span>Full Workflow</span>
          </div>
        )}

        {/* Working Templates (Secondary Utility) */}
        <button
          onClick={onOpenReference}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#FFFFFF] hover:bg-[#F6F5F7] text-[#606060] hover:text-[#313639] border border-[#E9E8EB] rounded-[10px] transition"
        >
          <BookOpen className="w-3.5 h-3.5 text-[#909292]" />
          <span className="hidden md:inline">Working Templates</span>
        </button>

        {/* Presentation Mode (Secondary Utility) */}
        <button
          onClick={onTogglePresentation}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#313639] hover:bg-[#1E2327] text-white rounded-[10px] transition active:scale-98 shadow-2xs"
        >
          <Presentation className="w-3.5 h-3.5 text-white" />
          <span className="hidden sm:inline">Presentation Mode</span>
        </button>
      </div>
    </header>
  );
};
