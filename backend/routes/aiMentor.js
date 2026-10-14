import { Router } from 'express';

const router = Router();

/**
 * POST /api/ai-mentor/query
 * AI Electronics Mentor query handler.
 * If GEMINI_API_KEY is configured, calls Google Gemini API.
 * Otherwise, falls back to intelligent domain-expert electronics rules.
 */
router.post('/query', async (req, res) => {
  const { prompt, language = 'en', circuitContext = null } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  const geminiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

  if (geminiKey && geminiKey !== 'your_gemini_api_key_here') {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [
                  {
                    text: `You are an AI Electronics Mentor and Laboratory Teaching Assistant for the 3D Virtual Hardware Lab. Provide concise, friendly, and practical electrical engineering advice in ${language === 'ta' ? 'Tamil' : 'English'}.\n\nContext: ${JSON.stringify(circuitContext || {})}\n\nStudent Question: ${prompt}`
                  }
                ]
              }
            ]
          })
        }
      );

      const data = await response.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (reply) {
        return res.json({ success: true, source: 'gemini-1.5-flash', response: reply });
      }
    } catch (err) {
      console.warn('Gemini API call failed, falling back to local expert engine:', err.message);
    }
  }

  // Intelligent domain-specific rule fallback
  const p = prompt.toLowerCase();
  let localReply = '';

  if (p.includes('esp32') && (p.includes('pin') || p.includes('pinout'))) {
    localReply =
      language === 'ta'
        ? 'ESP32 மைக்ரோகண்ட்ரோலரில் 3.3V பவர், GND, GPIO2 (LED), TX2, RX2 மற்றும் அனலாக் ADC பின்கள் உள்ளன. 5V உள்ளீட்டை நேரடியாக GPIO பின்களில் இணைக்க வேண்டாம்.'
        : 'The ESP32 features 3.3V logic, multiple ADC pins (GPIO 32-39), DAC outputs (GPIO 25-26), and dual-core 240MHz processing. Always ensure input voltages do not exceed 3.3V on GPIO pins.';
  } else if (p.includes('short') || p.includes('ground') || p.includes('vcc')) {
    localReply =
      language === 'ta'
        ? 'VCC மற்றும் GND இடையே நேரடி இணைப்பு ஏற்பட்டால் ஷார்ட் சர்க்யூட் ஏற்படும். சுற்றில் மின்தடையம் (Resistor) அல்லது லோடு உள்ளதா என சரிபார்க்கவும்.'
        : 'Connecting VCC directly to GND causes a short circuit, creating high current surge and potential component damage. Always place a load (such as a resistor or IC) in series.';
  } else if (p.includes('ne555') || p.includes('555')) {
    localReply =
      language === 'ta'
        ? 'NE555 டைமர் ஐசி அஸ்டேபிள் அல்லது மோனோஸ்டேபிள் முறையில் இயங்கும். பின்கள்: 1-GND, 2-TRIG, 3-OUT, 4-RESET, 5-CTRL, 6-THRES, 7-DISCH, 8-VCC.'
        : 'The NE555 precision timer can operate in Astable (oscillator) or Monostable (pulse generator) mode. Pin 1 is GND, Pin 8 is VCC (4.5V - 15V), and Pin 3 provides the square wave output.';
  } else if (p.includes('led') && (p.includes('resistor') || p.includes('burn'))) {
    localReply =
      language === 'ta'
        ? '5mm சிவப்பு LED-க்கு 5V மின்சாரத்தில் குறைந்தபட்சம் 220Ω மின்தடையம் (Resistor) தேவை, இல்லையெனில் LED பழுதடையும்.'
        : 'A standard 5mm red LED has a forward voltage drop of approx 2.0V at 20mA. When running on 5V, use at least a 220Ω resistor: (5V - 2V) / 0.02A = 150Ω (220Ω standard).';
  } else {
    localReply =
      language === 'ta'
        ? `உங்கள் கேள்வி: "${prompt}". 3D லேப்பில் சர்க்யூட் வரைந்து கம்பிகளை இணைத்து சோதித்துப் பாருங்கள்!`
        : `Ready to assist with "${prompt}". Place components on the 3D breadboard and run diagnostics to inspect live current and voltage flow!`;
  }

  return res.json({ success: true, source: 'local-knowledge-engine', response: localReply });
});

export default router;
