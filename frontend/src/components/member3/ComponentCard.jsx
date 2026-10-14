import React from 'react';
import {
  Cpu,
  Eye,
  Plus,
  Activity,
  Gauge,
  Layers,
  Zap,
  ToggleRight,
  Radio,
  Wifi,
  TerminalSquare
} from 'lucide-react';

export default function ComponentCard({
  component,
  onInspect,
  onAdd,
  isSelected = false,
}) {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Microcontrollers': return <Cpu className="w-5 h-5 text-blue-600" />;
      case 'Sensors': return <Activity className="w-5 h-5 text-green-600" />;
      case 'Actuators': return <Gauge className="w-5 h-5 text-amber-600" />;
      case 'Displays': return <Layers className="w-5 h-5 text-purple-600" />;
      case 'Passives': return <Zap className="w-5 h-5 text-red-500" />;
      case 'Prototyping': return <ToggleRight className="w-5 h-5 text-sky-500" />;
      default: return <Radio className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <div
      className={`group flex flex-col bg-white rounded-xl border p-4 transition-all duration-200 ${
        isSelected
          ? 'border-blue-500 shadow-md ring-1 ring-blue-500/50'
          : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
      }`}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
          {getCategoryIcon(component.category)}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold text-slate-800 truncate">
            {component.name}
          </h3>
          <p className="text-xs text-slate-500 truncate">
            {component.package}
          </p>
        </div>
      </div>

      <p className="text-xs text-slate-600 line-clamp-2 mb-3 h-8">
        {component.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-2 py-1 text-[10px] font-semibold rounded bg-slate-100 text-slate-700 flex items-center gap-1">
          <Zap className="w-3 h-3" />
          {component.voltage}
        </span>
        <span className="px-2 py-1 text-[10px] font-semibold rounded bg-slate-100 text-slate-700 flex items-center gap-1">
          <TerminalSquare className="w-3 h-3" />
          {component.pinsCount} Pins
        </span>
        {component.connectivity && (
          <span className="px-2 py-1 text-[10px] font-semibold rounded bg-blue-50 text-blue-700 flex items-center gap-1 truncate max-w-full">
            <Wifi className="w-3 h-3" />
            {component.connectivity}
          </span>
        )}
      </div>

      <div className="mt-auto grid grid-cols-2 gap-2">
        <button
          onClick={() => onInspect && onInspect(component)}
          className="py-2 px-3 rounded-lg text-xs font-semibold bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900 flex items-center justify-center gap-1.5 transition active:scale-[0.98]"
        >
          <Eye className="w-4 h-4" />
          View Details
        </button>

        <button
          onClick={() => onAdd && onAdd(component)}
          className="py-2 px-3 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center gap-1.5 transition active:scale-[0.98]"
        >
          <Plus className="w-4 h-4" />
          Add to Circuit
        </button>
      </div>
    </div>
  );
}
