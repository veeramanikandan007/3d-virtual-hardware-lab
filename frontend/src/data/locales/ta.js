export default {
  DIAGNOSTICS: {
    ERROR: "எச்சரிக்கை. {message}",
    CRITICAL: "முக்கிய எச்சரிக்கை. {message}",
    MISSING_GROUND: "எச்சரிக்கை. Sensor-க்கான GND இணைப்பு விடுபட்டுள்ளது.",
    SHORT_CIRCUIT: "முக்கிய எச்சரிக்கை. Short circuit கண்டறியப்பட்டுள்ளது.",
    VOLTAGE_MISMATCH: "எச்சரிக்கை. 3.3V GPIO பினுக்கு 5V வழங்கப்படுகிறது."
  },
  COMMANDS: {
    RUN_DIAGNOSTICS: "சுற்று பரிசோதனையைத் தொடங்குகிறது.",
    SIMULATION_START: "Simulation-ஐ தொடங்குகிறது.",
    SIMULATION_PAUSE: "Simulation இடைநிறுத்தப்பட்டுள்ளது.",
    SIMULATION_STOP: "Simulation நிறுத்தப்பட்டு reset செய்யப்பட்டுள்ளது.",
    CLEAR_SERIAL: "Serial monitor அழிக்கப்பட்டது.",
    CLEAR_DIAGNOSTICS: "Circuit faults அழிக்கப்பட்டன. Power rails இயல்பு நிலைக்கு திரும்பின.",
    CONNECT_SERIAL: "Virtual ESP32 உடன் COM3-ல் 115200 baud-ல் இணைக்கப்பட்டது.",
    OPEN_HELP: "Lab guide மற்றும் wiring checklist-ஐ திறக்கிறது.",
    SEARCH_COMPONENT: "{query} -க்கான components-ஐ தேடுகிறது.",
    INSPECT_COMPONENT: "{component} pinout மற்றும் technical specifications-ஐ திறக்கிறது.",
    UNKNOWN: "கட்டளை புரிந்தது: {text}. 'பரிசோதனையை தொடங்கு' அல்லது 'simulation-ஐ தொடங்கு' என்று கூற முயற்சிக்கவும்."
  },
  HELP: {
    BEGINNER: {
      WHAT_IS_GPIO: "GPIO என்பது General Purpose Input Output ஆகும். இது microcontroller-ல் உள்ள ஒரு பின். இதை sensor மூலம் சிக்னல்களைப் படிக்கவோ அல்லது LED-யை ஆன் செய்யவோ பயன்படுத்தலாம்.",
      ESP32_VOLTAGE: "ESP32 3.3V-ல் இயங்குகிறது. GPIO பினுக்கு 5V கொடுத்தால் board சேதமடையலாம்.",
      HCSR04_CONNECT: "HC-SR04-ஐ இணைக்க, VCC-ஐ 5V உடனும், GND-ஐ ground உடனும், TRIG-ஐ digital output பின் உடனும், ECHO-ஐ digital input பின் உடனும் இணைக்கவும். ESP32 போன்ற 3.3V board-க்கு ECHO பினில் voltage divider பயன்படுத்த மறக்காதீர்கள்.",
      WHY_GND: "GND என்பது சுற்றுக்கான பொதுவான மின் குறிப்பை வழங்குகிறது. இது இல்லாமல், மின்சாரம் முழுமையான சுழற்சியில் பாய முடியாது.",
      VOLTAGE_MISMATCH: "இந்த GPIO pin-க்கு 3.3V மட்டுமே பாதுகாப்பானது. 5V கொடுத்தால் ESP32 பாதிக்கப்படலாம்.",
      MISSING_GROUND: "சுற்று முழுமையடையவில்லை. தயவுசெய்து GND பின்னை இணைக்கவும்.",
      FLOATING_PIN: "இந்த பின் floating-ல் உள்ளது, அதாவது இது ஒரு நிலையான high அல்லது low voltage-உடன் இணைக்கப்படவில்லை. இது தவறான அளவீடுகளை ஏற்படுத்தும்.",
      REVERSED_POLARITY: "மின் இணைப்புகள் தவறாக உள்ளன. சேதத்தைத் தவிர்க்க உடனடியாக இணைப்பைத் துண்டிக்கவும்."
    },
    ADVANCED: {
      WHAT_IS_GPIO: "GPIO (General Purpose Input/Output) pins என்பவை பயனர் தேவைக்கேற்ப மாற்றிக்கொள்ளக்கூடிய digital signal pins ஆகும்.",
      ESP32_VOLTAGE: "ESP32 GPIO pins 3.3V logic domain-ல் செயல்படுகின்றன. 5V logic level-ஐ GPIO input-க்கு நேரடியாக வழங்குவது பாதுகாப்பானது அல்ல.",
      HCSR04_CONNECT: "HC-SR04-க்கு 5V தேவை. ECHO output ஒரு 5V logic signal என்பதால், 3.3V microcontroller-உடன் இணைக்கும் முன் voltage divider (உதாரணமாக, 1k/2k) பயன்படுத்தி அதனை குறைக்க வேண்டும்.",
      WHY_GND: "GND 0V reference point-ஐ அமைக்கிறது. பல components உள்ள சுற்றில் சரியான logic levels-ஐ உறுதி செய்ய shared ground plane அவசியமாகும்.",
      VOLTAGE_MISMATCH: "ESP32 GPIO pins 3.3V logic domain-ல் செயல்படுகின்றன. 5V logic level-ஐ GPIO input-க்கு நேரடியாக வழங்குவது பாதுகாப்பானது அல்ல.",
      MISSING_GROUND: "Ground return path விடுபட்டுள்ளது, இது ஒரு open circuit-ஐ உருவாக்குகிறது.",
      FLOATING_PIN: "Input pin floating-ல் உள்ளது. மின்காந்த இரைச்சலால் (noise) ஏற்படும் தவறான சிக்னல்களைத் தவிர்க்க pull-up அல்லது pull-down resistor தேவை.",
      REVERSED_POLARITY: "Reverse polarity கண்டறியப்பட்டுள்ளது. Polarized components சேதமடைவதைத் தடுக்க உடனடியாக இணைப்பைத் துண்டிக்கவும்."
    }
  }
};
