import React, { useState, useEffect } from 'react';
import {
  Cpu,
  Layers,
  Activity,
  Terminal,
  Volume2,
  BookOpen,
  Box,
  UserCircle,
  Settings,
  Bell
} from 'lucide-react';
import ComponentSearch from './ComponentSearch';
import ComponentCard from './ComponentCard';
import ComponentDetails from './ComponentDetails';
import DiagnosticPanel from './DiagnosticPanel';
import VoiceAssistant from './VoiceAssistant';
import SimulationControls from './SimulationControls';
import SerialMonitor from './SerialMonitor';
import HelpPanel from './HelpPanel';
import {
  MOCK_COMPONENTS,
  COMPONENT_CATEGORIES,
  MOCK_DIAGNOSTICS_DATA
} from '../../data/member3MockData';
import { speechService, SPEECH_PRIORITY } from '../../services/speechService';

export default function Member3Dashboard({
  member1SceneSlot = null,
  member2EngineState = null,
  member4SerialPort = null,
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [labPlacedComponents, setLabPlacedComponents] = useState([
    MOCK_COMPONENTS.find(c => c.id === 'esp32-devkit')
  ]);
  
  // Right sidebar content routing
  const [activeRightPanel, setActiveRightPanel] = useState('components'); 
  // 'components', 'diagnostics', 'simulation', 'voice', 'help'
  
  // Bottom dock visibility
  const [showSerialMonitor, setShowSerialMonitor] = useState(false);
  
  const [diagnosticsState, setDiagnosticsState] = useState(MOCK_DIAGNOSTICS_DATA);

  // Subscribe to voice commands
  useEffect(() => {
    const unsubCommand = speechService.on('command', ({ type, query, componentId }) => {
      if (type === 'SEARCH_COMPONENT' && query) {
        setSearchTerm(query);
        setActiveRightPanel('components');
      } else if (type === 'INSPECT_COMPONENT' && componentId) {
        const comp = MOCK_COMPONENTS.find(c => c.id === componentId);
        if (comp) setSelectedComponent(comp);
      } else if (type === 'OPEN_HELP') {
        setActiveRightPanel('help');
      } else if (type === 'CLEAR_SERIAL') {
        setShowSerialMonitor(true);
      } else if (type === 'RUN_DIAGNOSTICS') {
        setActiveRightPanel('diagnostics');
      }
    });
    return () => unsubCommand();
  }, []);

  const filteredComponents = MOCK_COMPONENTS.filter((comp) => {
    const matchesCategory = selectedCategory === 'All' || comp.category === selectedCategory;
    const matchesSearch =
      comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comp.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleAddComponent = (comp) => {
    if (!labPlacedComponents.some(c => c.id === comp.id)) {
      setLabPlacedComponents(prev => [...prev, comp]);
    }
    speechService.speak(`Added ${comp.name} to lab workspace.`, {
      priority: SPEECH_PRIORITY.NORMAL,
      tag: 'component-add'
    });
  };

  return (
    <div className="flex flex-col h-screen bg-[#F8FAFC] text-slate-800 font-sans overflow-hidden">
      
      {/* 1. TOP NAVBAR */}
      <header className="h-14 px-6 bg-white border-b border-slate-200 flex items-center justify-between shrink-0 shadow-sm z-20">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-base font-bold text-slate-900 leading-tight">
              Virtual Hardware Lab
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              Member 3 - Component & Diagnostics
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          {/* Status Badges */}
          <div className="hidden md:flex items-center gap-4 text-xs font-semibold text-slate-600 border-r border-slate-200 pr-6">
            <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-green-600"></span> Engine Ready</span>
            <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-green-600"></span> Serial Hooked</span>
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <button className="hover:text-blue-600 transition"><Bell className="w-5 h-5" /></button>
            <button className="hover:text-blue-600 transition"><Settings className="w-5 h-5" /></button>
            <button className="hover:text-blue-600 transition"><UserCircle className="w-6 h-6" /></button>
          </div>
        </div>
      </header>

      {/* BODY CONTAINER */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* 2. LEFT SIDEBAR */}
        <aside className="w-20 md:w-64 bg-white border-r border-slate-200 flex flex-col py-4 gap-1 z-10 shrink-0">
          {[
            { id: 'components', label: 'Components', icon: Layers },
            { id: 'diagnostics', label: 'Diagnostics', icon: Activity },
            { id: 'simulation', label: 'Simulation', icon: Cpu },
            { id: 'voice', label: 'Voice Assistant', icon: Volume2 },
            { id: 'help', label: 'Lab Help', icon: BookOpen },
          ].map(nav => {
            const isActive = activeRightPanel === nav.id;
            const Icon = nav.icon;
            return (
              <button
                key={nav.id}
                onClick={() => setActiveRightPanel(nav.id)}
                className={`flex items-center gap-4 px-4 py-3 mx-3 rounded-lg transition-colors font-medium min-h-[44px] ${
                  isActive 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                <span className="hidden md:block text-sm font-semibold">{nav.label}</span>
              </button>
            );
          })}
          
          <div className="flex-1"></div>
          
          <button
            onClick={() => setShowSerialMonitor(!showSerialMonitor)}
            className={`flex items-center gap-4 px-4 py-3 mx-3 rounded-lg transition-colors font-medium min-h-[44px] ${
              showSerialMonitor
                ? 'bg-blue-50 text-blue-700'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <Terminal className="w-5 h-5 shrink-0 text-slate-400" />
            <span className="hidden md:block text-sm font-semibold">Serial Monitor</span>
          </button>
        </aside>

        {/* 3. MAIN WORKSPACE */}
        <main className="flex-1 flex flex-col bg-[#F8FAFC] relative min-w-0">
          
          {/* 3D Scene Area */}
          <div className="flex-1 relative flex flex-col overflow-hidden">
            {member1SceneSlot ? (
              <div className="w-full h-full">{member1SceneSlot}</div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-8 select-none">
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-10 w-full max-w-2xl text-center flex flex-col items-center">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                    <Box className="w-10 h-10 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-3">3D Circuit Workspace</h2>
                  <p className="text-slate-500 mb-8 max-w-md">
                    This central area is reserved for the interactive 3D circuit simulation. When Member 1's canvas is connected, the components you place will render here.
                  </p>
                  
                  <button 
                    onClick={() => setActiveRightPanel('components')}
                    className="px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 shadow-sm transition active:scale-[0.98] min-h-[44px] flex items-center gap-2"
                  >
                    <Layers className="w-5 h-5" />
                    Browse Component Library
                  </button>

                  <div className="mt-10 w-full text-left">
                    <h3 className="text-sm font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Currently Placed Components</h3>
                    <div className="flex flex-wrap gap-3">
                      {labPlacedComponents.length === 0 ? (
                        <div className="text-sm text-slate-400 italic">No components placed yet.</div>
                      ) : (
                        labPlacedComponents.map(c => (
                          <div
                            key={c.id}
                            className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-semibold text-slate-700 shadow-sm flex items-center gap-3 cursor-pointer hover:border-blue-400 transition"
                            onClick={() => setSelectedComponent(c)}
                          >
                            <Cpu className="w-4 h-4 text-blue-500" />
                            {c.name}
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 5. BOTTOM AREA: Serial Monitor */}
          {showSerialMonitor && (
            <div className="h-64 sm:h-80 border-t border-slate-200 bg-white shadow-lg flex flex-col shrink-0">
              <div className="flex items-center justify-between px-4 py-2 border-b border-slate-200 bg-slate-50">
                <h3 className="text-sm font-bold flex items-center gap-2 text-slate-800">
                  <Terminal className="w-4 h-4 text-blue-600" /> Serial Monitor
                </h3>
                <button 
                  onClick={() => setShowSerialMonitor(false)}
                  className="text-slate-500 hover:text-slate-800 text-sm font-semibold"
                >
                  Close Terminal
                </button>
              </div>
              <div className="flex-1 relative overflow-hidden">
                <SerialMonitor />
              </div>
            </div>
          )}
        </main>

        {/* 4. RIGHT/SIDE PANELS */}
        <aside className="w-full md:w-[400px] lg:w-[450px] bg-white border-l border-slate-200 flex flex-col shrink-0 z-10 shadow-sm">
          <div className="h-14 px-6 border-b border-slate-200 flex items-center bg-slate-50">
            <h2 className="text-lg font-bold text-slate-900 capitalize">
              {activeRightPanel === 'components' ? 'Component Library' : 
               activeRightPanel === 'voice' ? 'Voice Assistant' : 
               activeRightPanel === 'help' ? 'Lab Guide' : activeRightPanel}
            </h2>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50">
            {activeRightPanel === 'components' && (
              <div className="flex flex-col h-full">
                <ComponentSearch
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  categories={COMPONENT_CATEGORIES}
                  totalCount={MOCK_COMPONENTS.length}
                  filteredCount={filteredComponents.length}
                />
                <div className="mt-6 space-y-4 pb-4">
                  {filteredComponents.map(comp => (
                    <ComponentCard
                      key={comp.id}
                      component={comp}
                      onInspect={(c) => setSelectedComponent(c)}
                      onAdd={handleAddComponent}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {activeRightPanel === 'diagnostics' && (
              <DiagnosticPanel
                customDiagnostics={diagnosticsState}
                onDiagnosticsUpdate={setDiagnosticsState}
              />
            )}
            
            {activeRightPanel === 'simulation' && (
              <SimulationControls externalState={member2EngineState} />
            )}
            
            {activeRightPanel === 'voice' && (
              <VoiceAssistant />
            )}
            
            {activeRightPanel === 'help' && (
              <HelpPanel />
            )}
          </div>
        </aside>

      </div>

      {/* COMPONENT DETAILS MODAL */}
      {selectedComponent && (
        <ComponentDetails
          component={selectedComponent}
          onClose={() => setSelectedComponent(null)}
          onAddToLab={handleAddComponent}
        />
      )}

    </div>
  );
}
