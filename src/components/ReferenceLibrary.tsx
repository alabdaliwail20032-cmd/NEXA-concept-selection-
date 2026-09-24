import React, { useState } from 'react';
import { X, FileText, CheckSquare, Table, Download, Printer } from 'lucide-react';

interface ReferenceLibraryProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReferenceLibrary: React.FC<ReferenceLibraryProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'quick-ref' | 'screening-tmpl' | 'scoring-tmpl' | 'qfd-tmpl'>('quick-ref');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#313639]/50 backdrop-blur-md">
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#FFFFFF] border border-[#E9E8EB] rounded-[24px] shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E9E8EB] bg-[#FFFFFF]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#F48259]/15 text-[#F48259] rounded-xl border border-[#F48259]/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#313639]">NEXA Working Templates & Quick Reference</h2>
              <p className="text-xs text-[#606060]">Standardized engineering forms from NEXA Concept Selection Guidelines</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#313639] hover:bg-[#F6F5F7] bg-[#FFFFFF] rounded-[12px] transition border border-[#D8D7DB]"
            >
              <Printer className="w-3.5 h-3.5 text-[#F48259]" /> Print / Export
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#606060] hover:text-[#313639] hover:bg-[#F6F5F7] rounded-[12px] transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#E9E8EB] bg-[#F6F5F7] px-6 gap-2 overflow-x-auto">
          {[
            { id: 'quick-ref', label: 'Facilitator Quick Reference', icon: CheckSquare },
            { id: 'screening-tmpl', label: 'Screening Template (+ / 0 / −)', icon: Table },
            { id: 'scoring-tmpl', label: 'Detailed Scoring Template (1–5)', icon: Table },
            { id: 'qfd-tmpl', label: 'Compact QFD Template', icon: FileText },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition whitespace-nowrap ${
                  isActive
                    ? 'border-[#F48259] text-[#F48259] bg-[#F48259]/10'
                    : 'border-transparent text-[#606060] hover:text-[#313639] hover:bg-[#FFFFFF]/40'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#606060] text-sm">
          {activeTab === 'quick-ref' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#F6F5F7] p-4 rounded-[16px] border border-[#E9E8EB]">
                  <h3 className="font-bold text-[#F48259] mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#F48259]/20 flex items-center justify-center text-xs">1</span>
                    Before the Session
                  </h3>
                  <ul className="space-y-2 text-xs text-[#313639]">
                    <li className="flex items-start gap-2">✓ Define the decision scope</li>
                    <li className="flex items-start gap-2">✓ Prepare comparable concepts</li>
                    <li className="flex items-start gap-2">✓ Identify mandatory gates</li>
                    <li className="flex items-start gap-2">✓ Choose Route A or Route B</li>
                    <li className="flex items-start gap-2">✓ Invite the right functions</li>
                  </ul>
                </div>

                <div className="bg-[#F6F5F7] p-4 rounded-[16px] border border-[#E9E8EB]">
                  <h3 className="font-bold text-[#F2AB27] mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#F2AB27]/20 flex items-center justify-center text-xs">2</span>
                    During the Session
                  </h3>
                  <ul className="space-y-2 text-xs text-[#313639]">
                    <li className="flex items-start gap-2">✓ Confirm criteria</li>
                    <li className="flex items-start gap-2">✓ Set or confirm weights</li>
                    <li className="flex items-start gap-2">✓ Screen against a reference</li>
                    <li className="flex items-start gap-2">✓ Combine / improve concepts</li>
                    <li className="flex items-start gap-2">✓ Score shortlisted concepts</li>
                    <li className="flex items-start gap-2">✓ Record evidence confidence</li>
                  </ul>
                </div>

                <div className="bg-[#F6F5F7] p-4 rounded-[16px] border border-[#E9E8EB]">
                  <h3 className="font-bold text-[#41A0DA] mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#41A0DA]/20 flex items-center justify-center text-xs">3</span>
                    After the Session
                  </h3>
                  <ul className="space-y-2 text-xs text-[#313639]">
                    <li className="flex items-start gap-2">✓ Run sensitivity review</li>
                    <li className="flex items-start gap-2">✓ Resolve critical disagreements</li>
                    <li className="flex items-start gap-2">✓ Record decision status</li>
                    <li className="flex items-start gap-2">✓ Assign next actions</li>
                    <li className="flex items-start gap-2">✓ Archive matrices & evidence</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-[#F48259]/10 border border-[#F48259]/30 rounded-[16px]">
                <h4 className="font-bold text-[#F48259] mb-1">Core Health-Wearable Rule</h4>
                <p className="text-xs text-[#606060] leading-relaxed">
                  Critical safety, core-function and applicable clinical or regulatory constraints are gates. They are not trade-offs that can be offset by a high score elsewhere.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'screening-tmpl' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-[#313639] text-base">Concept Screening Matrix Template</h3>
                <span className="text-xs px-2.5 py-1 bg-[#F6F5F7] rounded-lg text-[#606060]">Scale: + / 0 / −</span>
              </div>
              <div className="overflow-x-auto border border-[#E9E8EB] rounded-[16px]">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-[#F6F5F7] text-[#606060] border-b border-[#E9E8EB]">
                      <th className="p-3">Evaluation Criterion</th>
                      <th className="p-3 text-center">Datum / Reference</th>
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
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-[#F6F5F7]">
                        <td className="p-3 font-medium text-[#313639]">{row[0]}</td>
                        <td className="p-3 text-center text-[#909292] bg-[#F6F5F7]/40">{row[1]}</td>
                        <td className="p-3 text-center text-emerald-600 font-bold">{row[2]}</td>
                        <td className="p-3 text-center text-amber-600 font-bold">{row[3]}</td>
                        <td className="p-3 text-center text-rose-600 font-bold">{row[4]}</td>
                      </tr>
                    ))}
                    <tr className="bg-[#F6F5F7] font-bold text-[#313639] border-t border-[#E9E8EB]">
                      <td className="p-3">Net Score (+es minus −es)</td>
                      <td className="p-3 text-center">0</td>
                      <td className="p-3 text-center text-emerald-600 font-bold">+2</td>
                      <td className="p-3 text-center text-amber-600 font-bold">+1</td>
                      <td className="p-3 text-center text-rose-600 font-bold">0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'scoring-tmpl' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-[#313639] text-base">Detailed Weighted Scoring Template</h3>
                <span className="text-xs px-2.5 py-1 bg-[#F6F5F7] rounded-lg text-[#606060]">Scale: 1 to 5</span>
              </div>
              <div className="overflow-x-auto border border-[#E9E8EB] rounded-[16px]">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-[#F6F5F7] text-[#606060] border-b border-[#E9E8EB]">
                      <th className="p-3">Evaluation Criterion (Example Placeholders)</th>
                      <th className="p-3 text-center">Weight % (W_i)</th>
                      <th className="p-3 text-center">Shortlisted Concept 1 (Rating & Score)</th>
                      <th className="p-3 text-center">Shortlisted Concept 2 (Rating & Score)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E9E8EB]">
                    {[
                      ['e.g., Technical Feasibility', 'W_1 %', 'R_11 (W_1 × R_11)', 'R_12 (W_1 × R_12)'],
                      ['e.g., Performance', 'W_2 %', 'R_21 (W_2 × R_21)', 'R_22 (W_2 × R_22)'],
                      ['e.g., User Experience', 'W_3 %', 'R_31 (W_3 × R_31)', 'R_32 (W_3 × R_32)'],
                      ['e.g., Manufacturability', 'W_4 %', 'R_41 (W_4 × R_41)', 'R_42 (W_4 × R_42)'],
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-[#F6F5F7]">
                        <td className="p-3 font-medium text-[#313639]">{row[0]}</td>
                        <td className="p-3 text-center text-[#F48259] font-mono">{row[1]}</td>
                        <td className="p-3 text-center text-[#606060] font-mono">{row[2]}</td>
                        <td className="p-3 text-center text-[#606060] font-mono">{row[3]}</td>
                      </tr>
                    ))}
                    <tr className="bg-[#F6F5F7] font-bold text-[#313639] border-t border-[#E9E8EB]">
                      <td className="p-3">Total Formula: S_k = Σ (W_i × R_ik)</td>
                      <td className="p-3 text-center text-[#F48259]">100%</td>
                      <td className="p-3 text-center text-[#B073D9] text-sm">Total S_1 (1.00–5.00)</td>
                      <td className="p-3 text-center text-[#B073D9] text-sm">Total S_2 (1.00–5.00)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'qfd-tmpl' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-[#313639] text-base">Compact QFD House of Quality Mapping</h3>
                <span className="text-xs px-2.5 py-1 bg-[#F6F5F7] rounded-lg text-[#606060]">Route B Weighting</span>
              </div>
              <p className="text-xs text-[#606060]">
                Maps customer needs (WHATs) via 0/1/3/9 relationship strengths to engineering characteristics (HOWs) to compute normalized technical priorities ($W_j$).
              </p>
              <div className="p-4 bg-[#F6F5F7] rounded-[16px] border border-[#E9E8EB] space-y-3 font-mono text-xs">
                <div className="text-[#F48259] font-bold">Formula: T_j = Σ (C_i × R_ij)</div>
                <div className="text-[#313639]">Normalized Weight: W_j = (T_j / Σ T) × 100%</div>
                <div className="text-[#606060]">Sum of all $W_j$ must equal exactly 100%.</div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#F6F5F7] border-t border-[#E9E8EB] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold bg-[#FFFFFF] hover:bg-[#E9E8EB] text-[#313639] rounded-[12px] transition border border-[#D8D7DB]"
          >
            Close reference
          </button>
        </div>
      </div>
    </div>
  );
};
