import React, { useState, useEffect, useRef } from 'react';
import {
  Terminal,
  Play,
  Square,
  Trash2,
  Settings2,
  Download,
  ChevronDown
} from 'lucide-react';
import { MOCK_SERIAL_PRESETS } from '../../data/member3MockData';

export default function SerialMonitor({ onSerialSend, onBaudChange }) {
  const [isConnected, setIsConnected] = useState(true);
  const [baudRate, setBaudRate] = useState(115200);
  const [logs, setLogs] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [lineEnding, setLineEnding] = useState('\\r\\n'); // NL & CR
  const [autoScroll, setAutoScroll] = useState(true);
  
  const bottomRef = useRef(null);
  const logContainerRef = useRef(null);

  // Initial boot sequence simulation
  useEffect(() => {
    if (isConnected && logs.length === 0) {
      const bootLines = MOCK_SERIAL_PRESETS.boot;
      let t = 0;
      bootLines.forEach((line) => {
        setTimeout(() => {
          setLogs(prev => [...prev, { time: new Date(), text: line, type: 'rx' }]);
        }, t);
        t += 150 + Math.random() * 200;
      });
    }
  }, [isConnected]);

  // Handle autoscroll
  useEffect(() => {
    if (autoScroll && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs, autoScroll]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    
    // Echo locally
    setLogs(prev => [...prev, { time: new Date(), text: inputVal, type: 'tx' }]);
    
    // Pass up to M4 (WebSerial integration point)
    if (onSerialSend) {
      onSerialSend(inputVal + (lineEnding === '\\r\\n' ? '\r\n' : '\n'));
    }

    // Mock response for testing
    if (inputVal === 'help') {
      setTimeout(() => {
        setLogs(prev => [...prev, { 
          time: new Date(), 
          text: 'Available commands: help, reset, info, mode', 
          type: 'rx' 
        }]);
      }, 50);
    }
    
    setInputVal('');
  };

  const handleClear = () => setLogs([]);

  const toggleConnection = () => {
    setIsConnected(!isConnected);
    setLogs(prev => [...prev, { 
      time: new Date(), 
      text: !isConnected ? '--- Port Opened ---' : '--- Port Closed ---', 
      type: 'sys' 
    }]);
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 font-sans shadow-inner">
      
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between p-2 bg-slate-800 border-b border-slate-700 shrink-0 gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={toggleConnection}
            className={`px-3 py-1.5 text-xs font-bold rounded flex items-center gap-1.5 transition ${
              isConnected 
                ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' 
                : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
            }`}
          >
            {isConnected ? <Square className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {isConnected ? 'Disconnect' : 'Connect'}
          </button>
          
          <div className="relative group">
            <select
              value={baudRate}
              onChange={(e) => {
                setBaudRate(Number(e.target.value));
                if (onBaudChange) onBaudChange(Number(e.target.value));
              }}
              className="appearance-none bg-slate-700 text-slate-200 text-xs font-mono py-1.5 pl-3 pr-8 rounded border border-slate-600 focus:outline-none focus:border-blue-500"
            >
              {[9600, 19200, 38400, 57600, 115200].map(b => (
                <option key={b} value={b}>{b} baud</option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <label className="flex items-center gap-1.5 text-xs text-slate-400 cursor-pointer">
            <input 
              type="checkbox" 
              checked={autoScroll}
              onChange={(e) => setAutoScroll(e.target.checked)}
              className="rounded bg-slate-700 border-slate-600 text-blue-500 focus:ring-0 cursor-pointer"
            />
            Autoscroll
          </label>
          <div className="w-px h-4 bg-slate-700 mx-1"></div>
          <button onClick={handleClear} className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-700 rounded transition" title="Clear Output">
            <Trash2 className="w-4 h-4" />
          </button>
          <button className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-700 rounded transition" title="Save Log">
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div 
        ref={logContainerRef}
        className="flex-1 overflow-y-auto p-3 font-mono text-sm leading-relaxed"
      >
        {logs.map((log, i) => {
          const timeStr = log.time.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute:'2-digit', second:'2-digit' });
          const msStr = log.time.getMilliseconds().toString().padStart(3, '0');
          
          let textColor = 'text-slate-300'; // rx default
          if (log.type === 'tx') textColor = 'text-blue-400';
          if (log.type === 'sys') textColor = 'text-yellow-500 font-bold';
          
          return (
            <div key={i} className={`flex gap-3 hover:bg-white/5 px-1 py-0.5 rounded break-all ${textColor}`}>
              <span className="text-slate-500 shrink-0 select-none opacity-50">
                [{timeStr}.{msStr}]
              </span>
              <span className="whitespace-pre-wrap">
                {log.type === 'tx' && '> '}{log.text}
              </span>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSend} className="p-2 bg-slate-800 border-t border-slate-700 shrink-0 flex gap-2">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          disabled={!isConnected}
          placeholder={isConnected ? "Type command to send..." : "Port closed"}
          className="flex-1 bg-slate-900 border border-slate-700 text-slate-200 text-sm px-3 py-1.5 rounded focus:outline-none focus:border-blue-500 font-mono disabled:opacity-50"
        />
        
        <select 
          value={lineEnding}
          onChange={(e) => setLineEnding(e.target.value)}
          className="bg-slate-700 border border-slate-600 text-slate-300 text-xs px-2 py-1.5 rounded focus:outline-none"
        >
          <option value="none">No line ending</option>
          <option value="\\n">Newline (NL)</option>
          <option value="\\r">Carriage Return (CR)</option>
          <option value="\\r\\n">Both NL & CR</option>
        </select>

        <button
          type="submit"
          disabled={!isConnected || !inputVal.trim()}
          className="px-4 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Send
        </button>
      </form>

    </div>
  );
}
