export default {
  DIAGNOSTICS: {
    ERROR: "Warning. {message}",
    CRITICAL: "Critical warning. {message}",
    MISSING_GROUND: "Warning. The sensor GND connection is missing.",
    SHORT_CIRCUIT: "Critical warning. A short circuit has been detected.",
    VOLTAGE_MISMATCH: "Warning. 5V is connected to a 3.3V GPIO pin."
  },
  COMMANDS: {
    RUN_DIAGNOSTICS: "Initiating full circuit diagnostics routine.",
    SIMULATION_START: "Starting simulation engine.",
    SIMULATION_PAUSE: "Simulation paused.",
    SIMULATION_STOP: "Simulation stopped and reset.",
    CLEAR_SERIAL: "Serial monitor cleared.",
    CLEAR_DIAGNOSTICS: "Circuit faults cleared. Power rails restored to nominal.",
    CONNECT_SERIAL: "Connected to virtual ESP32 on COM3 at 115200 baud.",
    OPEN_HELP: "Opening lab guidance and wiring checklist.",
    SEARCH_COMPONENT: "Filtering components for {query}.",
    INSPECT_COMPONENT: "Opening {component} pinout and technical specifications.",
    UNKNOWN: "Recognized command: {text}. Try saying 'run diagnostics' or 'start simulation'."
  },
  HELP: {
    BEGINNER: {
      WHAT_IS_GPIO: "GPIO stands for General Purpose Input Output. It is a pin on the microcontroller that can be programmed to either read signals (like a sensor) or send signals (like turning on an LED).",
      ESP32_VOLTAGE: "The ESP32 runs on 3.3V. Providing 5V to a GPIO pin can damage the board.",
      HCSR04_CONNECT: "To connect the HC-SR04, connect VCC to 5V, GND to ground, TRIG to a digital output pin, and ECHO to a digital input pin. Remember to use a voltage divider for the ECHO pin if connecting to a 3.3V board like the ESP32.",
      WHY_GND: "GND provides the common electrical reference for the circuit. Without it, electricity cannot flow in a complete loop.",
      VOLTAGE_MISMATCH: "Only 3.3V is safe for this GPIO pin. Providing 5V may damage the ESP32.",
      MISSING_GROUND: "The circuit is not complete. Please connect the GND pin.",
      FLOATING_PIN: "This pin is floating, meaning it is not connected to a stable high or low voltage. This can cause random, unpredictable readings.",
      REVERSED_POLARITY: "The power connections are backwards. Disconnect immediately to prevent damage."
    },
    ADVANCED: {
      WHAT_IS_GPIO: "GPIO (General Purpose Input/Output) pins provide uncommitted digital signal pins that can be controlled by the user at runtime.",
      ESP32_VOLTAGE: "ESP32 GPIO pins operate strictly in the 3.3V logic domain. Applying 5V directly to a GPIO input violates the absolute maximum ratings and may cause permanent silicon damage.",
      HCSR04_CONNECT: "The HC-SR04 requires 5V for optimal acoustic transducer performance. The ECHO output is a 5V logic signal, so a voltage divider (e.g., 1k/2k) must be used to step it down before interfacing with a 3.3V tolerant microcontroller input.",
      WHY_GND: "GND establishes the 0V reference point. A shared ground plane is required to ensure consistent logic levels across different components in a mixed-signal system.",
      VOLTAGE_MISMATCH: "ESP32 GPIO pins operate in the 3.3V logic domain. Applying 5V logic levels directly to the GPIO input is not safe.",
      MISSING_GROUND: "The ground return path is missing, resulting in an open circuit.",
      FLOATING_PIN: "The input pin is floating without a defined logic level. A pull-up or pull-down resistor is required to prevent spurious state transitions induced by electromagnetic noise.",
      REVERSED_POLARITY: "Reverse polarity detected. Immediate disconnection required to prevent catastrophic failure of polarized components."
    }
  }
};
