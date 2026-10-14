# 3D Virtual Hardware Lab

Browser-based 3D virtual electronics laboratory featuring interactive circuit assembly, real-time validation, AI voice mentor, and ESP32 hardware integration.

---

## Project Structure

```
3d-virtual-hardware-lab/
├── frontend/                     # React + Three.js + Vite Client Application
│   ├── src/                      # 3D Scene components, models, UI pages, audio services
│   │   ├── components/           # 3D Canvas, CAD models, workbench toolbar, serial monitor
│   │   ├── context/              # Workbench state management & circuit graph
│   │   ├── data/                 # 194-Component catalog, pin maps, multilingual locales
│   │   ├── hooks/                # useCircuit, useVoiceAssistant, useSerial hooks
│   │   └── pages/                # Home, Dashboard, 3D Workbench, Voice Lab, Projects
│   ├── index.html                # Vite entry point
│   ├── vite.config.js            # Vite configuration
│   ├── .env.example              # Frontend environment variables template
│   └── package.json              # Frontend dependencies (React, Three.js, Lucide)
│
├── backend/                      # Node.js + Express REST API & WebSocket Telemetry Server
│   ├── routes/                   # API route handlers
│   │   ├── circuit.js            # Circuit validation & short circuit detection engine
│   │   ├── projects.js           # Project persistence & storage endpoints
│   │   ├── aiMentor.js           # AI mentor proxy with Google Gemini API & local rules
│   │   └── hardware.js           # ESP32 hardware serial bridge status & commands
│   ├── server.js                 # Express HTTP server + WebSocket streaming on port 5000
│   ├── .env.example              # Backend environment variables template
│   └── package.json              # Backend dependencies (Express, CORS, WS, Dotenv)
│
├── package.json                  # Root monorepo orchestration scripts
└── .gitignore                    # Git ignore rules for both frontend & backend
```

---

## Quick Start

### 1. Install Dependencies
```bash
# Install frontend dependencies
npm --prefix frontend install

# Install backend dependencies
npm --prefix backend install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env` in both folders:
```bash
# Frontend
cp frontend/.env.example frontend/.env

# Backend
cp backend/.env.example backend/.env
```

### 3. Run Development Servers
- **Frontend Only** (Vite on `http://localhost:5173`):
  ```bash
  npm run dev:frontend
  ```
- **Backend Only** (API & WebSocket on `http://localhost:5000`):
  ```bash
  npm run dev:backend
  ```
- **Both Concurrently**:
  ```bash
  npm run dev:all
  ```
