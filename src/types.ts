export type WorkflowStageId =
  | 'candidate-concepts'
  | 'prepare-concepts'
  | 'mandatory-gate'
  | 'define-criteria'
  | 'establish-weights'
  | 'route-a'
  | 'route-b'
  | 'final-criteria-weights'
  | 'concept-screening'
  | 'screening-outcome'
  | 'combine-develop'
  | 'shortlisted-concepts'
  | 'detailed-scoring'
  | 'final-decision';

export interface WorkflowStageInfo {
  id: WorkflowStageId;
  stepNumber?: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  category: 'entry' | 'preparation' | 'weighting' | 'screening' | 'scoring' | 'decision';
  nodeType: 'standard' | 'gate' | 'branch' | 'subroute' | 'merge' | 'screening' | 'outcome' | 'develop' | 'shortlist' | 'score' | 'decision';
  icon: string;
  badge?: string;
}

export interface StageMethodologyData {
  id: WorkflowStageId;
  title: string;
  stepNumber?: string;
  purpose: string; // One direct engineering sentence
  why?: string;
  whatHappens: string; // What does the team actually do here?
  howMethod: string; // What method or rule is used?
  stageOutput: string; // What leaves this stage and enters next?
  outputLabel: string;
  keyRules?: { title: string; description: string }[];
  diagramType:
    | 'candidate-concepts'
    | 'prepare-concepts'
    | 'mandatory-gate'
    | 'define-criteria'
    | 'establish-weights'
    | 'route-a'
    | 'route-b'
    | 'final-criteria-weights'
    | 'concept-screening'
    | 'screening-outcome'
    | 'combine-develop'
    | 'shortlisted-concepts'
    | 'detailed-scoring'
    | 'final-decision';
}
