import React, { useRef } from 'react';
import { useWorkbench } from '../../context/WorkbenchContext';
import { projectService } from '../../services/projectService';
import {
  Undo2,
  Redo2,
  RotateCw,
  Trash2,
  Download,
  Upload,
  RefreshCw,
  Camera,
  Layers
} from 'lucide-react';

export function WorkbenchToolbar() {
  const {
    undo,
    redo,
    canUndo,
    canRedo,
    selectedComponentId,
    removeComponent,
    rotateComponent,
    resetWorkbench,
    exportStateJSON,
    importStateJSON
  } = useWorkbench();

  const fileInputRef = useRef();

  const handleExport = () => {
    const data = exportStateJSON();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `workbench-circuit-${Date.now().toString().slice(-4)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        importStateJSON(json);
      } catch (err) {
        alert('Invalid JSON file format.');
      }
    };
    reader.readAsText(file);
    e.target.value = null; // reset input
  };

  const handleReset = () => {
    if (window.confirm('Reset the 3D workbench and clear all components and wires?')) {
      resetWorkbench();
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        background: '#0f172a',
        border: '1px solid #1e293b',
        padding: '4px 10px',
        borderRadius: '8px',
        color: '#f8fafc'
      }}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".json"
        style={{ display: 'none' }}
      />

      {/* Undo Button */}
      <button
        onClick={undo}
        title="Undo (Ctrl+Z)"
        style={{
          background: 'none',
          border: 'none',
          color: canUndo ? '#f8fafc' : '#475569',
          padding: '6px',
          borderRadius: '4px',
          cursor: canUndo ? 'pointer' : 'default',
          display: 'flex'
        }}
      >
        <Undo2 size={16} />
      </button>

      {/* Redo Button */}
      <button
        onClick={redo}
        title="Redo (Ctrl+Y)"
        style={{
          background: 'none',
          border: 'none',
          color: canRedo ? '#f8fafc' : '#475569',
          padding: '6px',
          borderRadius: '4px',
          cursor: canRedo ? 'pointer' : 'default',
          display: 'flex'
        }}
      >
        <Redo2 size={16} />
      </button>

      <div style={{ width: '1px', height: '16px', background: '#334155', margin: '0 4px' }} />

      {/* Rotate Selected Button */}
      <button
        onClick={() => selectedComponentId && rotateComponent(selectedComponentId)}
        title="Rotate Selected Component 90°"
        disabled={!selectedComponentId}
        style={{
          background: 'none',
          border: 'none',
          color: selectedComponentId ? '#38bdf8' : '#475569',
          padding: '6px',
          borderRadius: '4px',
          cursor: selectedComponentId ? 'pointer' : 'default',
          display: 'flex'
        }}
      >
        <RotateCw size={16} />
      </button>

      {/* Delete Selected Button */}
      <button
        onClick={() => selectedComponentId && removeComponent(selectedComponentId)}
        title="Delete Selected Component"
        disabled={!selectedComponentId}
        style={{
          background: 'none',
          border: 'none',
          color: selectedComponentId ? '#ef4444' : '#475569',
          padding: '6px',
          borderRadius: '4px',
          cursor: selectedComponentId ? 'pointer' : 'default',
          display: 'flex'
        }}
      >
        <Trash2 size={16} />
      </button>

      <div style={{ width: '1px', height: '16px', background: '#334155', margin: '0 4px' }} />

      {/* Export State JSON Button */}
      <button
        onClick={handleExport}
        title="Export Circuit State (JSON)"
        style={{
          background: 'none',
          border: 'none',
          color: '#f8fafc',
          padding: '6px',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'flex'
        }}
      >
        <Download size={16} />
      </button>

      {/* Import State JSON Button */}
      <button
        onClick={handleImportClick}
        title="Import Circuit State (JSON)"
        style={{
          background: 'none',
          border: 'none',
          color: '#f8fafc',
          padding: '6px',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'flex'
        }}
      >
        <Upload size={16} />
      </button>

      {/* Reset Workbench Button */}
      <button
        onClick={handleReset}
        title="Reset Workbench"
        style={{
          background: 'none',
          border: 'none',
          color: '#f59e0b',
          padding: '6px',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'flex'
        }}
      >
        <RefreshCw size={16} />
      </button>
    </div>
  );
}
