import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  FastForward,
  Clock,
  Activity,
  Sliders,
  ThermometerSun,
  Droplets,
  Ruler,
  Sun
} from 'lucide-react';

export default function SimulationControls({ externalState }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [simSpeed, setSimSpeed] = useState(1);
  const [simTime, setSimTime] = useState(0);

  // Mock Env Controls
  const [envControls, setEnvControls] = useState({
    temperature: 25.0,
    humidity: 45,
    distance: 100,
    light: 800
  });

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setSimTime(prev => prev + (100 * simSpeed));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, simSpeed]);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const millis = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${millis.toString().padStart(2, '0')}`;
  };

  const updateEnv = (key, val) => {
    setEnvControls(prev => ({ ...prev, [key]: Number(val) }));
  };

  return (
    <div className="flex flex-col gap-6">
      
      {/* Engine Status */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
           <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
             <Clock className="w-5 h-5 text-blue-500" />
             Simulation Engine
           </h3>
           <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${isPlaying ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
             {isPlaying ? 'Running' : 'Paused'}
           </span>
        </div>

        <div className="text-3xl font-mono font-bold text-slate-800 text-center mb-6 tracking-wider">
          {formatTime(simTime)}
        </div>

        {/* Playback Controls */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <button 
            onClick={() => { setSimTime(0); setIsPlaying(false); }}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
            title="Reset"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-md transition-transform active:scale-95 ${
              isPlaying ? 'bg-amber-500 hover:bg-amber-600' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
          </button>
          
          <button 
            className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
            title="Step Forward"
          >
            <FastForward className="w-5 h-5" />
          </button>
        </div>

        {/* Speed Multiplier */}
        <div className="flex justify-center gap-2">
          {[0.5, 1, 2, 5].map(speed => (
            <button
              key={speed}
              onClick={() => setSimSpeed(speed)}
              className={`px-3 py-1 rounded text-xs font-bold transition ${
                simSpeed === speed 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {speed}x
            </button>
          ))}
        </div>
      </div>

      {/* Telemetry from Engine (M2) */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col items-center justify-center shadow-sm">
          <Activity className="w-5 h-5 text-blue-500 mb-2" />
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Active Nodes</span>
          <span className="text-lg font-bold text-slate-800">
            {externalState?.nodes || 18}
          </span>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col items-center justify-center shadow-sm">
          <Activity className="w-5 h-5 text-blue-500 mb-2" />
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Engine Freq</span>
          <span className="text-lg font-bold text-slate-800">
            {externalState?.freq || '100 kHz'}
          </span>
        </div>
      </div>

      {/* Environment Variable Controls */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
        <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Sliders className="w-4 h-4 text-slate-400" /> Environment Controls
        </h3>
        
        <div className="space-y-5">
          {/* Temperature */}
          <div>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-slate-600 flex items-center gap-1.5 font-medium"><ThermometerSun className="w-3.5 h-3.5" /> Temperature</span>
              <span className="font-mono font-bold text-slate-800">{envControls.temperature.toFixed(1)} °C</span>
            </div>
            <input 
              type="range" min="-20" max="80" step="0.5" 
              value={envControls.temperature} 
              onChange={(e) => updateEnv('temperature', e.target.value)}
              className="w-full accent-blue-600 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Humidity */}
          <div>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-slate-600 flex items-center gap-1.5 font-medium"><Droplets className="w-3.5 h-3.5" /> Humidity</span>
              <span className="font-mono font-bold text-slate-800">{envControls.humidity}%</span>
            </div>
            <input 
              type="range" min="0" max="100" 
              value={envControls.humidity} 
              onChange={(e) => updateEnv('humidity', e.target.value)}
              className="w-full accent-blue-600 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Distance */}
          <div>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-slate-600 flex items-center gap-1.5 font-medium"><Ruler className="w-3.5 h-3.5" /> Distance</span>
              <span className="font-mono font-bold text-slate-800">{envControls.distance} cm</span>
            </div>
            <input 
              type="range" min="2" max="400" 
              value={envControls.distance} 
              onChange={(e) => updateEnv('distance', e.target.value)}
              className="w-full accent-blue-600 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Light */}
          <div>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-slate-600 flex items-center gap-1.5 font-medium"><Sun className="w-3.5 h-3.5" /> Ambient Light</span>
              <span className="font-mono font-bold text-slate-800">{envControls.light} lux</span>
            </div>
            <input 
              type="range" min="0" max="10000" 
              value={envControls.light} 
              onChange={(e) => updateEnv('light', e.target.value)}
              className="w-full accent-blue-600 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
