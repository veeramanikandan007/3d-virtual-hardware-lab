import React, { useState } from 'react';
import {
  X,
  Cpu,
  Layers,
  Zap,
  Activity,
  AlertTriangle,
  FileText,
  Plus,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function ComponentDetails({ component, onClose, onAddToLab }) {
  const [hoveredPin, setHoveredPin] = useState(null);

  if (!component) return null;

  const getPinColor = (type) => {
    switch (type.toLowerCase()) {
      case 'power': return 'bg-red-500 text-white';
      case 'gnd': return 'bg-slate-800 text-white';
      case 'gpio': return 'bg-blue-500 text-white';
      case 'analog': return 'bg-green-500 text-white';
      case 'communication': return 'bg-purple-500 text-white';
      case 'pwm': return 'bg-cyan-500 text-white';
      default: return 'bg-slate-400 text-white';
    }
  };

  const getPinTypeBadge = (type) => {
    return (
      <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase ${getPinColor(type)}`}>
        {type}
      </span>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-5xl h-[85vh] md:h-[75vh] flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
        
        {/* Header */}
        <header className="px-6 py-4 border-b border-slate-200 flex items-center justify-between shrink-0 bg-slate-50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                {component.name}
              </h2>
              <div className="flex items-center gap-3 text-sm font-medium text-slate-500 mt-0.5">
                <span>{component.package}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span className="text-slate-700">{component.voltage}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span>{component.pinsCount} Pins</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (onAddToLab) onAddToLab(component);
                onClose();
              }}
              className="hidden sm:flex px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 items-center gap-2 transition"
            >
              <Plus className="w-4 h-4" />
              Add to Circuit
            </button>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Content Body */}
        <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Column: Docs & Specs */}
          <div className="w-full md:w-[400px] bg-white border-r border-slate-200 flex flex-col shrink-0 overflow-y-auto">
            <div className="p-6 space-y-6">
              
              {/* Description */}
              <section>
                <h3 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-slate-400" /> Description
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {component.description}
                </p>
                {component.datasheetUrl && (
                  <a href={component.datasheetUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-blue-600 hover:text-blue-800">
                    View Datasheet <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </section>

              {/* Specifications */}
              <section>
                <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-slate-400" /> Technical Specs
                </h3>
                <div className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden">
                  <div className="grid grid-cols-2 divide-x divide-y divide-slate-200 text-sm">
                    {Object.entries(component.specs).map(([key, value]) => (
                      <div key={key} className="p-3">
                        <div className="text-xs text-slate-500 capitalize mb-0.5">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        <div className="font-medium text-slate-800">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Common Issues / Warnings */}
              {component.commonIssues && (
                <section>
                  <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2 text-amber-700">
                    <AlertTriangle className="w-4 h-4" /> Common Issues
                  </h3>
                  <ul className="space-y-2">
                    {component.commonIssues.map((issue, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-slate-600 bg-amber-50 p-3 rounded-lg border border-amber-100">
                        <ChevronRight className="w-4 h-4 shrink-0 text-amber-500 mt-0.5" />
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </div>

          {/* Right Column: Pinout */}
          <div className="flex-1 bg-slate-50 flex flex-col relative overflow-hidden">
            <div className="p-4 border-b border-slate-200 bg-white flex items-center justify-between shrink-0">
              <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <Activity className="w-4 h-4 text-slate-400" /> Interactive Pinout
              </h3>
              <div className="flex gap-2">
                {['Power', 'GND', 'GPIO', 'Analog', 'Communication'].map(type => (
                  <span key={type} className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${getPinColor(type)}`}>
                    {type}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 relative flex flex-col items-center">
              
              {/* Responsive Layout for Pins */}
              <div className={`w-full max-w-2xl grid gap-4 ${
                  component.pinout.left && component.pinout.right 
                  ? 'grid-cols-2' 
                  : 'grid-cols-1 max-w-sm'
              }`}>
                
                {/* Left Pins */}
                {component.pinout.left && (
                  <div className="space-y-1">
                    {component.pinout.left.map((pin) => (
                      <div
                        key={pin.id}
                        className={`flex items-center justify-end gap-3 p-2 rounded-lg cursor-default border transition-all ${
                          hoveredPin?.id === pin.id 
                            ? 'bg-blue-50 border-blue-200 shadow-sm scale-105 origin-right' 
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                        onMouseEnter={() => setHoveredPin(pin)}
                        onMouseLeave={() => setHoveredPin(null)}
                      >
                        <div className="text-right">
                          <div className="text-xs font-bold text-slate-800">{pin.name}</div>
                          {pin.altFunctions && pin.altFunctions.length > 0 && (
                            <div className="text-[10px] text-slate-500">
                              {pin.altFunctions.join(', ')}
                            </div>
                          )}
                        </div>
                        {getPinTypeBadge(pin.type)}
                        <div className="w-8 h-6 bg-slate-800 rounded-sm flex items-center justify-center text-[10px] font-mono text-slate-300 border border-slate-900 shadow-inner">
                          {pin.number}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Right Pins */}
                {component.pinout.right && (
                  <div className="space-y-1">
                    {component.pinout.right.map((pin) => (
                      <div
                        key={pin.id}
                        className={`flex items-center justify-start gap-3 p-2 rounded-lg cursor-default border transition-all ${
                          hoveredPin?.id === pin.id 
                            ? 'bg-blue-50 border-blue-200 shadow-sm scale-105 origin-left' 
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                        onMouseEnter={() => setHoveredPin(pin)}
                        onMouseLeave={() => setHoveredPin(null)}
                      >
                        <div className="w-8 h-6 bg-slate-800 rounded-sm flex items-center justify-center text-[10px] font-mono text-slate-300 border border-slate-900 shadow-inner">
                          {pin.number}
                        </div>
                        {getPinTypeBadge(pin.type)}
                        <div className="text-left">
                          <div className="text-xs font-bold text-slate-800">{pin.name}</div>
                          {pin.altFunctions && pin.altFunctions.length > 0 && (
                            <div className="text-[10px] text-slate-500">
                              {pin.altFunctions.join(', ')}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Single list fallback (e.g. for sensors) */}
                {Array.isArray(component.pinout) && (
                  <div className="space-y-2">
                    {component.pinout.map((pin) => (
                      <div
                        key={pin.id}
                        className={`flex items-center justify-start gap-3 p-3 rounded-lg border transition-all ${
                          hoveredPin?.id === pin.id 
                            ? 'bg-blue-50 border-blue-200 shadow-sm scale-105' 
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                        onMouseEnter={() => setHoveredPin(pin)}
                        onMouseLeave={() => setHoveredPin(null)}
                      >
                        <div className="w-8 h-6 bg-slate-800 rounded-sm flex items-center justify-center text-[10px] font-mono text-slate-300 border border-slate-900 shadow-inner">
                          {pin.number}
                        </div>
                        {getPinTypeBadge(pin.type)}
                        <div className="text-left">
                          <div className="text-sm font-bold text-slate-800">{pin.name}</div>
                          {pin.description && (
                            <div className="text-xs text-slate-500">{pin.description}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
              
              {/* Hovered Pin Info Tooltip */}
              {hoveredPin && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white p-4 rounded-xl shadow-2xl border border-slate-700 w-80 pointer-events-none animate-in fade-in zoom-in-95 duration-200 z-10">
                  <div className="flex items-center gap-2 mb-2 border-b border-slate-700 pb-2">
                    {getPinTypeBadge(hoveredPin.type)}
                    <span className="font-bold text-sm">Pin {hoveredPin.number}: {hoveredPin.name}</span>
                  </div>
                  <p className="text-sm text-slate-300">
                    {hoveredPin.description || 'No specific description provided for this pin.'}
                  </p>
                  {hoveredPin.altFunctions && hoveredPin.altFunctions.length > 0 && (
                    <div className="mt-2 text-xs text-slate-400">
                      <strong>Alt:</strong> {hoveredPin.altFunctions.join(', ')}
                    </div>
                  )}
                  {hoveredPin.voltage && (
                    <div className="mt-1 text-xs text-slate-400">
                      <strong>Voltage:</strong> {hoveredPin.voltage}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          
        </div>
        
        {/* Mobile Add to Circuit */}
        <div className="sm:hidden p-4 border-t border-slate-200 bg-white">
           <button
              onClick={() => {
                if (onAddToLab) onAddToLab(component);
                onClose();
              }}
              className="w-full py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add to Circuit
            </button>
        </div>
      </div>
    </div>
  );
}
