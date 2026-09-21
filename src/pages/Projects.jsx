import React from 'react';
import { ProjectList } from '../components/projects/ProjectList';
import { SaveProject } from '../components/projects/SaveProject';
import { LoadProject } from '../components/projects/LoadProject';

export function Projects() {
  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px' }}>
      <h2 style={{ color: '#61dafb', marginTop: 0 }}>Project Management</h2>
      <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
        <div style={{ flex: 1 }}>
          <SaveProject onSave={(title) => alert(`Saved: ${title}`)} />
        </div>
        <LoadProject onLoad={() => alert('Loading project file...')} />
      </div>
      <div style={{ background: '#1c1c24', borderRadius: '8px', border: '1px solid #2d2d3a' }}>
        <ProjectList />
      </div>
    </div>
  );
}
