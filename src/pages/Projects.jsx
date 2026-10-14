import React from 'react';
import { ProjectList } from '../components/projects/ProjectList';
import { SaveProject } from '../components/projects/SaveProject';
import { LoadProject } from '../components/projects/LoadProject';

export function Projects({ onNavigate }) {
  return (
    <div style={{ maxWidth: '1040px', margin: '40px auto', padding: '0 24px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', marginBottom: '8px', color: '#FFFFFF' }}>
          Project <span className="highlight-orange">Repository</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '15px', fontWeight: '400' }}>
          Save, manage, export, and load 3D hardware schematic files.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '280px' }}>
          <SaveProject onSave={(title) => alert(`Saved schematic: ${title}`)} />
        </div>
        <div>
          <LoadProject onLoad={() => alert('Loading project schematic...')} />
        </div>
      </div>

      <div className="theme-card" style={{ padding: '24px', borderRadius: '18px' }}>
        <ProjectList onSelect={() => onNavigate && onNavigate('Workbench')} />
      </div>
    </div>
  );
}


