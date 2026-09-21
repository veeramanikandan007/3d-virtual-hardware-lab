export const projectService = {
  getProjects: async () => {
    return [
      { id: 'proj-1', name: 'ESP32 Distance Alarm', updated: '2026-09-20' },
      { id: 'proj-2', name: 'DHT11 Weather Station', updated: '2026-09-18' },
    ];
  },
  saveProject: async (project) => {
    console.log('Saving project:', project);
    return { success: true };
  }
};
