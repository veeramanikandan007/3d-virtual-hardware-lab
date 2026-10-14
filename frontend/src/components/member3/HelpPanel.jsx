import React, { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Volume2,
  AlertTriangle
} from 'lucide-react';
import { MOCK_LAB_GUIDES } from '../../data/member3MockData';
import { speechService, SPEECH_PRIORITY } from '../../services/speechService';

export default function HelpPanel() {
  const [activeLabIndex, setActiveLabIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const activeLab = MOCK_LAB_GUIDES[activeLabIndex];
  const stepData = activeLab.steps[currentStep];
  const isLastStep = currentStep === activeLab.steps.length - 1;

  const playStepAudio = (text) => {
    speechService.speak(text, { priority: SPEECH_PRIORITY.NORMAL });
  };

  const handleNext = () => {
    if (isLastStep) return;
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    playStepAudio(activeLab.steps[nextStep].instruction);
  };

  const handlePrev = () => {
    if (currentStep === 0) return;
    const prevStep = currentStep - 1;
    setCurrentStep(prevStep);
    // Don't auto-play audio on previous to avoid spam, user can click icon
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 relative">
      
      {/* Course Header */}
      <div className="p-5 border-b border-slate-200 bg-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-800">{activeLab.title}</h2>
            <p className="text-xs font-medium text-slate-500">{activeLab.difficulty}</p>
          </div>
        </div>
        <p className="text-sm text-slate-600 mt-3">{activeLab.description}</p>
      </div>

      {/* Progress Bar */}
      <div className="bg-slate-200 h-1 w-full">
        <div 
          className="bg-indigo-600 h-full transition-all duration-300"
          style={{ width: `${((currentStep + 1) / activeLab.steps.length) * 100}%` }}
        />
      </div>

      {/* Step Content */}
      <div className="flex-1 overflow-y-auto p-5">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
            Step {currentStep + 1} of {activeLab.steps.length}
          </span>
          <button 
            onClick={() => playStepAudio(stepData.instruction)}
            className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 flex items-center justify-center transition"
            title="Read Aloud"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>

        <h3 className="text-lg font-bold text-slate-800 mb-6 leading-tight">
          {stepData.instruction}
        </h3>

        {/* Expected Wiring */}
        {stepData.expectedConnections && stepData.expectedConnections.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Required Connections</h4>
            <div className="space-y-2">
              {stepData.expectedConnections.map((conn, idx) => (
                <div key={idx} className="flex items-center justify-between bg-white border border-slate-200 p-3 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-slate-700">{conn.from}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                  <span className="text-sm font-medium text-slate-700">{conn.to}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Safety Warning */}
        {stepData.safetyWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3 shadow-sm">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 font-medium">
              {stepData.safetyWarning}
            </p>
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="p-4 border-t border-slate-200 bg-white flex items-center justify-between mt-auto">
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className="px-4 py-2 text-sm font-semibold text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>

        {isLastStep ? (
          <button
            onClick={() => {
              setCurrentStep(0);
              speechService.speak('Lab completed! Great job.', { priority: SPEECH_PRIORITY.HIGH });
            }}
            className="px-6 py-2 text-sm font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition flex items-center gap-2 shadow-sm"
          >
            Finish <CheckCircle2 className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-6 py-2 text-sm font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition flex items-center gap-2 shadow-sm"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

    </div>
  );
}
