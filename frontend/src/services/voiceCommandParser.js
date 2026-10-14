import { VOICE_COMMANDS } from '../data/voiceCommands';

export function parseCommand(rawText) {
  const text = rawText.trim();
  
  // Dynamic parsing for specific entities
  const searchMatch = text.match(/^(?:search|find|தேடு)\s+(.+)/i);
  if (searchMatch) {
    return {
      command: "SEARCH_COMPONENT",
      confidence: 0.9,
      rawText: text,
      payload: { query: searchMatch[1] }
    };
  }
  
  const inspectMatch = text.match(/^(?:inspect|show|pinout|open|என்றால் என்ன|எப்படி connect செய்வது|voltage என்ன)\s*(esp|sensor|ultrasonic|sonar|arduino|component)?/i) || text.match(/(esp|sensor|ultrasonic|sonar|arduino|component).*(?:என்றால் என்ன|எப்படி connect செய்வது|voltage என்ன|pinout)/i);
  if (inspectMatch) {
    const target = (inspectMatch[1] || inspectMatch[2] || '').toLowerCase();
    let componentId = null;
    if (target.includes('esp')) componentId = 'esp32-devkit';
    if (target.includes('sensor') || target.includes('ultrasonic') || target.includes('sonar')) componentId = 'hc-sr04';
    if (target.includes('arduino')) componentId = 'arduino-nano';
    
    if (componentId) {
      return {
        command: "INSPECT_COMPONENT",
        confidence: 0.9,
        rawText: text,
        payload: { componentId }
      };
    }
  }

  // Iterate over static patterns
  for (const cmd of VOICE_COMMANDS) {
    for (const pattern of cmd.patterns) {
      if (pattern.test(text)) {
        return {
          command: cmd.id,
          confidence: 0.95,
          rawText: text,
          payload: {}
        };
      }
    }
  }
  
  // Fallback
  return {
    command: "UNKNOWN",
    confidence: 0.5,
    rawText: text,
    payload: {}
  };
}
