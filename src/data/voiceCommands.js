export const VOICE_COMMANDS = [
  {
    id: "RUN_DIAGNOSTICS",
    patterns: [
      /run diagnostics/i,
      /check (the )?circuit/i,
      /start diagnostics/i,
      /run test/i,
      /பரிசோதனையை தொடங்கு/i,
      /சுற்றை பரிசோதனை செய்/i,
      /diagnostics செய்/i
    ]
  },
  {
    id: "SIMULATION_START",
    patterns: [
      /start simulation/i,
      /begin simulation/i,
      /run simulation/i,
      /^start$/i,
      /^play$/i,
      /simulation தொடங்கு/i,
      /simulation ஆரம்பி/i
    ]
  },
  {
    id: "SIMULATION_PAUSE",
    patterns: [
      /pause simulation/i,
      /^pause$/i,
      /simulation நிறுத்து/i,
      /இடைநிறுத்து/i
    ]
  },
  {
    id: "SIMULATION_STOP",
    patterns: [
      /stop simulation/i,
      /^stop$/i,
      /reset simulation/i,
      /முழுமையாக நிறுத்து/i
    ]
  },
  {
    id: "CLEAR_SERIAL",
    patterns: [
      /clear serial/i,
      /clear the serial monitor/i,
      /clear terminal/i,
      /clear console/i,
      /serial monitor அழி/i,
      /serial clear செய்/i
    ]
  },
  {
    id: "CLEAR_DIAGNOSTICS",
    patterns: [
      /clear fault/i,
      /reset diagnostics/i,
      /clear warnings/i,
      /பிழைகளை அழி/i,
      /எச்சரிக்கைகளை நீக்கு/i
    ]
  },
  {
    id: "CONNECT_SERIAL",
    patterns: [
      /connect serial/i,
      /connect esp32/i,
      /connect port/i,
      /serial இணை/i,
      /esp32 இணை/i
    ]
  },
  {
    id: "OPEN_HELP",
    patterns: [
      /help/i,
      /guide/i,
      /tutorial/i,
      /instructions/i,
      /உதவி/i,
      /வழிகாட்டி/i
    ]
  }
];
