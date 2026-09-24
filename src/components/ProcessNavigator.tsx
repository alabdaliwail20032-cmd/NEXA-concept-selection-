import React, { useRef, useEffect } from 'react';
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
  Check,
} from 'lucide-react';
import { WorkflowStageId, WorkflowStageInfo } from '../types';
import { WORKFLOW_STAGES } from '../data/nexaData';

interface ProcessNavigatorProps {
  currentStage: WorkflowStageId;
  onSelectStage: (stageId: WorkflowStageId) => void;
  isMobileDrawer?: boolean;
  onCloseMobileDrawer?: () => void;
}

export const ProcessNavigator: React.FC<ProcessNavigatorProps> = ({
  currentStage,
  onSelectStage,
  isMobileDrawer = false,
  onCloseMobileDrawer,
}) => {
  const activeItemRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Smoothly scroll active stage into view in the navigator
  useEffect(() => {
    if (activeItemRef.current && containerRef.current) {
      activeItemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [currentStage]);

  const handleStageClick = (id: WorkflowStageId) => {
    onSelectStage(id);
    if (isMobileDrawer && onCloseMobileDrawer) {
      onCloseMobileDrawer();
    }
  };

  // Helper to determine stage position relative to current
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

  const currentIndex = stageOrder.indexOf(currentStage);

  const getStatus = (id: WorkflowStageId) => {
    if (id === currentStage) return 'active';
    const index = stageOrder.indexOf(id);
    if (index < currentIndex) return 'completed';
    return 'upcoming';
  };

  // Icon map
  const renderIcon = (id: WorkflowStageId, isSelected: boolean) => {
    const iconClass = isSelected
      ? 'text-[#F48259]'
      : 'text-[#606060] group-hover:text-[#313639]';

    switch (id) {
      case 'candidate-concepts':
        return <Layers className={`w-4 h-4 ${iconClass}`} />;
      case 'prepare-concepts':
        return <FileCheck className={`w-4 h-4 ${iconClass}`} />;
      case 'mandatory-gate':
        return <ShieldCheck className={`w-4 h-4 ${isSelected ? 'text-[#F25D7A]' : 'text-[#F25D7A]/80'}`} />;
      case 'define-criteria':
        return <ListFilter className={`w-4 h-4 ${iconClass}`} />;
      case 'establish-weights':
        return <GitFork className={`w-4 h-4 ${iconClass}`} />;
      case 'route-a':
        return <Users className={`w-3.5 h-3.5 ${isSelected ? 'text-[#F48259]' : 'text-[#606060]'}`} />;
      case 'route-b':
        return <BarChart3 className={`w-3.5 h-3.5 ${isSelected ? 'text-[#41A0DA]' : 'text-[#606060]'}`} />;
      case 'final-criteria-weights':
        return <CheckSquare className={`w-4 h-4 ${iconClass}`} />;
      case 'concept-screening':
        return <Filter className={`w-4 h-4 ${isSelected ? 'text-[#41A0DA]' : 'text-[#606060]'}`} />;
      case 'screening-outcome':
        return <Split className={`w-4 h-4 ${iconClass}`} />;
      case 'combine-develop':
        return <Wrench className={`w-4 h-4 ${isSelected ? 'text-[#F2AB27]' : 'text-[#606060]'}`} />;
      case 'shortlisted-concepts':
        return <Sparkles className={`w-4 h-4 ${isSelected ? 'text-[#F48259]' : 'text-[#606060]'}`} />;
      case 'detailed-scoring':
        return <Table className={`w-4 h-4 ${isSelected ? 'text-[#B073D9]' : 'text-[#606060]'}`} />;
      case 'final-decision':
        return <Award className={`w-4 h-4 ${isSelected ? 'text-[#F48259]' : 'text-[#606060]'}`} />;
      default:
        return <Layers className={`w-4 h-4 ${iconClass}`} />;
    }
  };

  // Node button renderer
  const renderNavNode = (
    id: WorkflowStageId,
    title: string,
    subtitle?: string,
    stepNum?: string,
    isBranch = false
  ) => {
    const isSelected = currentStage === id;
    const status = getStatus(id);

    return (
      <div
        ref={isSelected ? activeItemRef : undefined}
        onClick={() => handleStageClick(id)}
        className={`group relative text-left rounded-[14px] p-2.5 transition-all cursor-pointer border select-none ${
          isSelected
            ? 'bg-[#FFFFFF] border-[#F48259] shadow-md ring-2 ring-[#F48259]/15'
            : status === 'completed'
            ? 'bg-[#FFFFFF]/75 border-[#E9E8EB] hover:bg-[#FFFFFF] hover:border-[#D8D7DB]'
            : 'bg-[#F9F9FA]/80 border-[#E9E8EB] hover:bg-[#FFFFFF] hover:border-[#D8D7DB]'
        }`}
      >
        <div className="flex items-start gap-2.5">
          {/* Icon or Step indicator */}
          <div
            className={`mt-0.5 w-6 h-6 rounded-[8px] flex items-center justify-center shrink-0 text-xs transition-colors ${
              isSelected
                ? 'bg-[#F48259]/15 text-[#F48259] font-bold'
                : status === 'completed'
                ? 'bg-[#313639]/5 text-[#313639]'
                : 'bg-[#E9E8EB]/70 text-[#606060]'
            }`}
          >
            {renderIcon(id, isSelected)}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1">
              <span
                className={`text-xs font-semibold leading-snug truncate ${
                  isSelected
                    ? 'text-[#313639] font-bold'
                    : status === 'completed'
                    ? 'text-[#313639]'
                    : 'text-[#606060] group-hover:text-[#313639]'
                }`}
              >
                {title}
              </span>

              {isSelected && (
                <span className="shrink-0 px-1.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#F48259] text-white">
                  You are here
                </span>
              )}

              {!isSelected && status === 'completed' && (
                <Check className="w-3.5 h-3.5 text-[#313639]/40 shrink-0" />
              )}
            </div>

            {subtitle && (
              <p
                className={`text-[11px] leading-tight mt-0.5 truncate ${
                  isSelected ? 'text-[#606060]' : 'text-[#909292]'
                }`}
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Connector line component
  const Connector = ({ label }: { label?: string }) => (
    <div className="flex flex-col items-center my-1 select-none">
      <div className="w-[1.5px] h-3 bg-[#D8D7DB]" />
      <ArrowDown className="w-3 h-3 text-[#909292] -my-0.5" />
      {label && <span className="text-[9px] text-[#909292] uppercase font-bold tracking-wider">{label}</span>}
    </div>
  );

  return (
    <nav
      ref={containerRef}
      aria-label="Concept Selection Process Map"
      className="flex flex-col h-full overflow-y-auto px-3.5 py-4 scrollbar-thin scrollbar-thumb-[#D8D7DB] scrollbar-track-transparent"
    >
      {/* Navigator Header */}
      <div className="mb-3 px-1">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#606060]">
            Process Navigator
          </span>
          <span className="text-[10px] font-semibold px-2 py-0.5 bg-[#FFFFFF] border border-[#E9E8EB] rounded-full text-[#313639]">
            Step {currentIndex + 1} of {stageOrder.length}
          </span>
        </div>
        <p className="text-[11px] text-[#909292] mt-0.5">
          Select any stage to inspect methodology and artifacts
        </p>
      </div>

      {/* Vertical Workflow Nodes */}
      <div className="flex flex-col space-y-1">
        {/* Stage 0: Candidate Concepts */}
        {renderNavNode('candidate-concepts', 'Candidate Concepts', 'Multiple plausible alternatives')}

        <Connector />

        {/* Stage 1: Prepare Concepts */}
        {renderNavNode('prepare-concepts', '1. Prepare Concepts', 'Make concepts comparable')}

        <Connector />

        {/* Stage 2: Mandatory Requirements Gate */}
        <div className="relative">
          <div className="absolute -left-1 top-2.5 bottom-2.5 w-1 bg-[#F25D7A] rounded-full" />
          {renderNavNode(
            'mandatory-gate',
            '2. Mandatory Gate',
            'Pass / Review / Fail non-negotiables'
          )}
        </div>

        <Connector />

        {/* Stage 3: Define Selection Criteria */}
        {renderNavNode('define-criteria', '3. Define Selection Criteria', 'Relevant • Distinct • Assessable')}

        <Connector />

        {/* Stage 4: Establish Criteria Weights */}
        {renderNavNode('establish-weights', '4. Establish Criteria Weights', 'Two approved weighting routes')}

        {/* Branching Visual: Route A and Route B */}
        <div className="relative mt-2 mb-2 p-2 bg-[#F6F5F7] rounded-[16px] border border-[#E9E8EB]">
          <div className="flex items-center justify-between mb-1.5 px-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#606060] flex items-center gap-1">
              <GitFork className="w-3 h-3 text-[#F48259]" /> Weighting Split
            </span>
            <span className="text-[9px] text-[#909292]">Choose A or B</span>
          </div>

          <div className="grid grid-cols-1 gap-1.5">
            {/* Route A */}
            <div
              onClick={() => handleStageClick('route-a')}
              className={`p-2 rounded-[10px] cursor-pointer text-left border transition-all ${
                currentStage === 'route-a'
                  ? 'bg-[#FFFFFF] border-[#F48259] shadow-sm ring-1 ring-[#F48259]/20'
                  : 'bg-[#FFFFFF]/60 border-[#E9E8EB] hover:bg-[#FFFFFF] hover:border-[#D8D7DB]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-[11px] font-bold ${
                    currentStage === 'route-a' ? 'text-[#F48259]' : 'text-[#313639]'
                  }`}
                >
                  ↙ Route A — Team Workshop
                </span>
                {currentStage === 'route-a' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F48259]" />
                )}
              </div>
              <p className="text-[10px] text-[#606060] mt-0.5">
                Structured independent ratings (1–5)
              </p>
            </div>

            {/* Route B */}
            <div
              onClick={() => handleStageClick('route-b')}
              className={`p-2 rounded-[10px] cursor-pointer text-left border transition-all ${
                currentStage === 'route-b'
                  ? 'bg-[#FFFFFF] border-[#41A0DA] shadow-sm ring-1 ring-[#41A0DA]/20'
                  : 'bg-[#FFFFFF]/60 border-[#E9E8EB] hover:bg-[#FFFFFF] hover:border-[#D8D7DB]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-[11px] font-bold ${
                    currentStage === 'route-b' ? 'text-[#41A0DA]' : 'text-[#313639]'
                  }`}
                >
                  ↘ Route B — QFD-Derived
                </span>
                {currentStage === 'route-b' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41A0DA]" />
                )}
              </div>
              <p className="text-[10px] text-[#606060] mt-0.5">
                House of Quality technical priorities
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center mt-2 pt-1 border-t border-[#E9E8EB]/80 text-[10px] text-[#909292]">
            <span>Both routes reconnect below ↓</span>
          </div>
        </div>

        {/* Merge Node: Final Criteria + Weights */}
        {renderNavNode('final-criteria-weights', 'Final Criteria + Weights', '100% Traceable weight total')}

        <Connector />

        {/* Stage 5: Concept Screening */}
        {renderNavNode('concept-screening', '5. Concept Screening', 'Coarse comparison (+ / 0 / −)')}

        <Connector />

        {/* Stage: Screening Outcome (with Eliminate side exit & Combine/Develop continuing) */}
        <div className="relative p-2 bg-[#F6F5F7] rounded-[16px] border border-[#E9E8EB] my-1">
          <div
            onClick={() => handleStageClick('screening-outcome')}
            className={`p-2 rounded-[10px] cursor-pointer text-left border mb-2 transition-all ${
              currentStage === 'screening-outcome'
                ? 'bg-[#FFFFFF] border-[#F48259] shadow-sm ring-1 ring-[#F48259]/20'
                : 'bg-[#FFFFFF]/70 border-[#E9E8EB] hover:bg-[#FFFFFF]'
            }`}
          >
            <div className="flex items-center justify-between">
              <span
                className={`text-[11px] font-bold ${
                  currentStage === 'screening-outcome' ? 'text-[#F48259]' : 'text-[#313639]'
                }`}
              >
                Screening Outcome
              </span>
              {currentStage === 'screening-outcome' && (
                <span className="px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-[#F48259] text-white">
                  Active
                </span>
              )}
            </div>
            <p className="text-[10px] text-[#606060] mt-0.5">
              Net scores reveal clear path forward
            </p>
          </div>

          {/* Dual Pathways: Side Exit vs Main Route */}
          <div className="space-y-1.5 pl-1">
            {/* Side Exit: Eliminate Weak Concepts */}
            <div className="flex items-center gap-2 p-1.5 rounded-[8px] bg-[#FFFFFF]/60 border border-dashed border-[#F25D7A]/40 text-[#606060]">
              <LogOut className="w-3.5 h-3.5 text-[#F25D7A] shrink-0" />
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-semibold text-[#F25D7A] block leading-tight">
                  Eliminate Weak Concepts
                </span>
                <span className="text-[9px] text-[#909292] block">
                  Side exit leaves process
                </span>
              </div>
            </div>

            {/* Main Continuing Route: Combine / Develop */}
            <div
              onClick={() => handleStageClick('combine-develop')}
              className={`flex items-center gap-2 p-2 rounded-[10px] cursor-pointer border transition-all ${
                currentStage === 'combine-develop'
                  ? 'bg-[#FFFFFF] border-[#F2AB27] shadow-sm ring-1 ring-[#F2AB27]/25'
                  : 'bg-[#FFFFFF] border-[#E9E8EB] hover:border-[#D8D7DB]'
              }`}
            >
              <Wrench
                className={`w-3.5 h-3.5 shrink-0 ${
                  currentStage === 'combine-develop' ? 'text-[#F2AB27]' : 'text-[#606060]'
                }`}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[11px] font-bold ${
                      currentStage === 'combine-develop' ? 'text-[#313639]' : 'text-[#313639]'
                    }`}
                  >
                    Combine / Develop
                  </span>
                  <span className="text-[9px] font-semibold px-1 py-0.2 rounded bg-[#F2AB27]/15 text-[#B87A0B]">
                    Main route
                  </span>
                </div>
                <span className="text-[10px] text-[#606060] block truncate">
                  Improve, combine or re-screen ↺
                </span>
              </div>
            </div>
          </div>
        </div>

        <Connector />

        {/* Stage 6: Developed / Shortlisted Concepts */}
        {renderNavNode('shortlisted-concepts', '6. Developed Shortlist', 'Focused set entering scoring')}

        <Connector />

        {/* Stage 7: Detailed Concept Scoring */}
        {renderNavNode('detailed-scoring', '7. Detailed Concept Scoring', 'Weighted ratings (1–5 scale)')}

        <Connector />

        {/* Final Decision */}
        {renderNavNode('final-decision', 'Final Concept Decision', 'Engineering review & commit')}
      </div>

      {/* Footer methodology note */}
      <div className="mt-6 pt-3 border-t border-[#E9E8EB] text-center">
        <p className="text-[10px] text-[#909292]">
          NEXA Wearables 2026 Internal Standard
        </p>
      </div>
    </nav>
  );
};
