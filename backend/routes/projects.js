import { Router } from 'express';

const router = Router();

// In-memory project storage (seeds default demo projects)
let projects = [
  {
    id: 'proj-esp32-blink',
    title: 'ESP32 LED Blink & Sensor Hub',
    description: 'Basic IoT circuit using ESP32 DevKit, 220Ω resistor, 5mm red LED, and HC-SR04 ultrasonic distance sensor.',
    createdAt: new Date().toISOString(),
    componentsCount: 4,
    wiresCount: 5,
    state: {
      placedComponents: [
        { instanceId: 'esp32-1', componentId: 'esp32-devkit', position: [-0.6, 0.05, 0.4] },
        { instanceId: 'res-1', componentId: 'res-220', position: [0.1, 0.02, 0.1] },
        { instanceId: 'led-1', componentId: 'led-red-5mm', position: [0.2, 0.03, 0.1] }
      ],
      placedWires: []
    }
  },
  {
    id: 'proj-ne555-timer',
    title: 'NE555 Astable Multivibrator',
    description: 'Pulse generator circuit generating a 1 kHz square wave output with timing capacitors.',
    createdAt: new Date().toISOString(),
    componentsCount: 6,
    wiresCount: 8,
    state: {
      placedComponents: [],
      placedWires: []
    }
  }
];

// GET /api/projects - list all projects
router.get('/', (req, res) => {
  res.json({ success: true, count: projects.length, projects });
});

// GET /api/projects/:id - get project details
router.get('/:id', (req, res) => {
  const project = projects.find((p) => p.id === req.params.id);
  if (!project) {
    return res.status(404).json({ success: false, error: 'Project not found' });
  }
  res.json({ success: true, project });
});

// POST /api/projects - save / create new project
router.post('/', (req, res) => {
  const { title, description, state } = req.body;
  if (!title) {
    return res.status(400).json({ success: false, error: 'Title is required' });
  }

  const newProject = {
    id: `proj-${Date.now().toString(36)}`,
    title,
    description: description || 'User designed 3D virtual hardware circuit.',
    createdAt: new Date().toISOString(),
    componentsCount: state?.placedComponents?.length || 0,
    wiresCount: state?.placedWires?.length || 0,
    state: state || { placedComponents: [], placedWires: [] }
  };

  projects.unshift(newProject);
  res.status(201).json({ success: true, project: newProject });
});

// DELETE /api/projects/:id - delete project
router.delete('/:id', (req, res) => {
  const index = projects.findIndex((p) => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ success: false, error: 'Project not found' });
  }
  projects.splice(index, 1);
  res.json({ success: true, message: 'Project deleted successfully' });
});

export default router;
