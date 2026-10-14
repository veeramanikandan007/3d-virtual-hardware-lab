import React from 'react';
import {
  Activity,
  Zap,
  Thermometer,
  AlertTriangle,
  Info,
  CheckCircle2,
  XCircle,
  Play
} from 'lucide-react';
import { speechService, SPEECH_PRIORITY } from '../../services/speechService';

export default function DiagnosticPanel({ customDiagnostics, onDiagnosticsUpdate }) {
  
  const injectFault = (type) => {
    if (!customDiagnostics || !onDiagnosticsUpdate || !customDiagnostics.faultPresets) return;
    
    let preset = null;
    if (type === 'SHORT_CIRCUIT') {
      preset = customDiagnostics.faultPresets.find(p => p.id === 'fault-short');
    } else if (type === 'OVERVOLTAGE') {
      preset = customDiagnostics.faultPresets.find(p => p.id === 'fault-overvoltage');
    }

    if (preset) {
      speechService.speak(preset.speechText, {
        priority: preset.type === 'critical' ? SPEECH_PRIORITY.CRITICAL : SPEECH_PRIORITY.HIGH,
        tag: preset.id
      });
      
      const newChecks = customDiagnostics.checks.map(c => 
        c.id === preset.mutations.failingCheck.id ? preset.mutations.failingCheck : c
      );
      
      if (!newChecks.find(c => c.id === preset.mutations.failingCheck.id)) {
        newChecks.unshift(preset.mutations.failingCheck);
      }

      onDiagnosticsUpdate({
        ...customDiagnostics,
        healthScore: preset.mutations.healthScore,
        status: preset.mutations.status,
        rails: preset.mutations.rails,
        checks: newChecks
      });
    }
  };

  if (!customDiagnostics || !customDiagnostics.rails) {
    return (
      <div className="p-4 text-center text-slate-500 text-sm">
        Diagnostics data unavailable. Connect Member 2 engine.
      </div>
    );
  }

  const getHealthColor = (score) => {
    if (score >= 90) return 'text-green-600 bg-green-500';
    if (score >= 70) return 'text-amber-600 bg-amber-500';
    return 'text-red-600 bg-red-500';
  };

  const healthClasses = getHealthColor(customDiagnostics.healthScore).split(' ');
  const healthTextColor = healthClasses[0];
  const healthBgColor = healthClasses[1];

  const v5Rail = customDiagnostics.rails.find(r => r.id === 'v5') || { value: 0, unit: 'V' };
  const v33Rail = customDiagnostics.rails.find(r => r.id === 'v33') || { value: 0, unit: 'V' };
  const currentRail = customDiagnostics.rails.find(r => r.id === 'iTotal') || { value: 0, unit: 'mA' };
  const tempRail = customDiagnostics.rails.find(r => r.id === 'tCore') || { value: 0, unit: '°C' };

  const failedOrWarningChecks = customDiagnostics.checks.filter(c => c.status === 'fail' || c.status === 'warning');

  return (
    <div className="flex flex-col gap-6">
      
      {/* Header / Overall Health */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
            <Activity className="w-5 h-5 text-slate-400" />
            Circuit Health
          </h3>
          <span className={`text-2xl font-black ${healthTextColor}`}>
            {customDiagnostics.healthScore}%
          </span>
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <div 
            className={`h-full ${healthBgColor} transition-all duration-500`}
            style={{ width: `${customDiagnostics.healthScore}%` }}
          />
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-semibold text-slate-500">5V Rail</span>
            <Zap className="w-4 h-4 text-amber-500" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className={`text-lg font-bold ${v5Rail.value < 4.5 ? 'text-red-600' : 'text-slate-800'}`}>
              {v5Rail.value.toFixed(2)}
            </span>
            <span className="text-xs text-slate-500">{v5Rail.unit}</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-semibold text-slate-500">3.3V Rail</span>
            <Zap className="w-4 h-4 text-amber-500" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className={`text-lg font-bold ${v33Rail.value > 3.6 ? 'text-red-600' : 'text-slate-800'}`}>
              {v33Rail.value.toFixed(2)}
            </span>
            <span className="text-xs text-slate-500">{v33Rail.unit}</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-semibold text-slate-500">Current</span>
            <Activity className="w-4 h-4 text-blue-500" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className={`text-lg font-bold ${currentRail.value > 1000 ? 'text-red-600' : 'text-slate-800'}`}>
              {currentRail.value.toFixed(0)}
            </span>
            <span className="text-xs text-slate-500">{currentRail.unit}</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-semibold text-slate-500">Temperature</span>
            <Thermometer className="w-4 h-4 text-red-500" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-bold text-slate-800">
              {tempRail.value.toFixed(1)}
            </span>
            <span className="text-xs text-slate-500">{tempRail.unit}</span>
          </div>
        </div>
      </div>

      {/* Manual Test Triggers */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
        <h4 className="text-xs font-bold text-slate-800 mb-3 uppercase tracking-wider">Simulate Faults</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => injectFault('OVERVOLTAGE')}
            className="flex-1 py-2 px-2 bg-amber-50 text-amber-700 border border-amber-200 rounded-lg text-xs font-bold hover:bg-amber-100 transition"
          >
            Overvoltage
          </button>
          <button 
            onClick={() => injectFault('SHORT_CIRCUIT')}
            className="flex-1 py-2 px-2 bg-red-50 text-red-700 border border-red-200 rounded-lg text-xs font-bold hover:bg-red-100 transition"
          >
            Short Circuit
          </button>
        </div>
      </div>

      {/* Diagnostics Event Log */}
      <div className="bg-white rounded-xl border border-slate-200 flex flex-col shadow-sm overflow-hidden flex-1 min-h-[200px]">
        <div className="px-4 py-3 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <h4 className="text-sm font-bold text-slate-800">Event Log</h4>
          <button className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded hover:bg-blue-100 flex items-center gap-1">
            <Play className="w-3 h-3" /> Run Tests
          </button>
        </div>
        <div className="p-2 space-y-2 overflow-y-auto">
          {failedOrWarningChecks.length === 0 ? (
            <div className="text-center p-4 text-slate-500 text-sm flex flex-col items-center">
              <CheckCircle2 className="w-8 h-8 text-green-500 mb-2" />
              Circuit is operating nominally.
            </div>
          ) : (
            failedOrWarningChecks.map(err => {
              const isCrit = err.status === 'fail';
              const isWarn = err.status === 'warning';
              
              let bg = 'bg-slate-50 border-slate-200';
              let icon = <Info className="w-4 h-4 text-slate-500" />;
              
              if (isCrit) {
                bg = 'bg-red-50 border-red-200';
                icon = <XCircle className="w-4 h-4 text-red-600" />;
              } else if (isWarn) {
                bg = 'bg-amber-50 border-amber-200';
                icon = <AlertTriangle className="w-4 h-4 text-amber-500" />;
              }

              return (
                <div key={err.id} className={`p-3 rounded-lg border flex gap-3 ${bg}`}>
                  <div className="mt-0.5 shrink-0">{icon}</div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase ${
                        isCrit ? 'bg-red-100 text-red-800' : isWarn ? 'bg-amber-100 text-amber-800' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {isCrit ? 'CRITICAL' : 'WARNING'}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium truncate">{err.category}</span>
                    </div>
                    <p className="text-xs font-medium text-slate-800 leading-tight">
                      {err.details}
                    </p>
                    {(isCrit || isWarn) && (
                       <button className="mt-2 text-[10px] font-bold text-blue-600 hover:underline">
                         [Inspect Connection]
                       </button>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      
    </div>
  );
}
