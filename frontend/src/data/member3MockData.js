/**
 * Member 3: Voice Assistant & Component UI - Mock Data
 * Comprehensive electronics hardware data, pinouts, diagnostics suites, and serial logs.
 * Ready for clean integration with Member 2 (Circuit Engine) and Member 4 (Web Serial API).
 */

export const COMPONENT_CATEGORIES = [
  'All',
  'Microcontrollers',
  'Sensors',
  'Actuators',
  'Displays',
  'Passives',
  'Prototyping'
];

export const MOCK_COMPONENTS = [
  {
    id: 'esp32-devkit',
    name: 'ESP32 DevKit V1',
    category: 'Microcontrollers',
    package: '38-pin DIP / NodeMCU-32S',
    voltage: '3.3V (5V USB Vin)',
    current: '80 - 240 mA',
    frequency: '240 MHz Dual-Core',
    flash: '4 MB SPI Flash',
    pinsCount: 38,
    connectivity: 'Wi-Fi 802.11 b/g/n + Bluetooth 4.2 BLE',
    description: 'High-performance IoT microcontroller board with integrated Wi-Fi, Bluetooth, touch sensors, hardware encryption, and 30+ multipurpose GPIOs.',
    thumbnail: 'esp32',
    tags: ['MCU', 'Wi-Fi', 'Bluetooth', 'IoT', '3.3V', 'Dual-Core'],
    specs: {
      'Operating Voltage': '3.0V - 3.6V (3.3V Typical)',
      'Input Voltage (Vin)': '5V via Micro-USB or 5V pin',
      'Max GPIO Current': '12 mA (40 mA absolute max)',
      'ADC Channels': '18 channels (12-bit SAR ADC)',
      'DAC Channels': '2 x 8-bit DACs (GPIO25, GPIO26)',
      'PWM Channels': '16 independent PWM channels',
      'Interfaces': '3x UART, 3x SPI, 2x I2C, 2x I2S, CAN 2.0',
    },
    pinout: [
      // Left side pins
      { number: 1, name: '3V3', type: 'power', col: 'left', desc: '3.3V Power Output (Regulated from USB or Vin)' },
      { number: 2, name: 'EN', type: 'gpio', col: 'left', desc: 'Chip Enable / Reset (Active Low with pull-up)' },
      { number: 3, name: 'VP (GPIO36)', type: 'analog', col: 'left', desc: 'ADC1_CH0 / RTC_GPIO0 (Input Only)' },
      { number: 4, name: 'VN (GPIO39)', type: 'analog', col: 'left', desc: 'ADC1_CH3 / RTC_GPIO3 (Input Only)' },
      { number: 5, name: 'GPIO34', type: 'analog', col: 'left', desc: 'ADC1_CH6 (Input Only, no internal pull-up)' },
      { number: 6, name: 'GPIO35', type: 'analog', col: 'left', desc: 'ADC1_CH7 (Input Only, no internal pull-up)' },
      { number: 7, name: 'GPIO32', type: 'analog', col: 'left', desc: 'ADC1_CH4 / Touch 9 / 32K_XP' },
      { number: 8, name: 'GPIO33', type: 'analog', col: 'left', desc: 'ADC1_CH5 / Touch 8 / 32K_XN' },
      { number: 9, name: 'GPIO25', type: 'analog', col: 'left', desc: 'DAC1 / ADC2_CH8 / RTC_GPIO6' },
      { number: 10, name: 'GPIO26', type: 'analog', col: 'left', desc: 'DAC2 / ADC2_CH9 / RTC_GPIO7' },
      { number: 11, name: 'GPIO27', type: 'gpio', col: 'left', desc: 'ADC2_CH7 / Touch 7 / RTC_GPIO17' },
      { number: 12, name: 'GPIO14', type: 'gpio', col: 'left', desc: 'HSPI_CLK / ADC2_CH6 / Touch 6' },
      { number: 13, name: 'GPIO12', type: 'gpio', col: 'left', desc: 'HSPI_MISO / ADC2_CH5 / Touch 5 (Boot strapping)' },
      { number: 14, name: 'GND', type: 'gnd', col: 'left', desc: 'Ground Reference 0V' },
      { number: 15, name: 'GPIO13', type: 'gpio', col: 'left', desc: 'HSPI_MOSI / ADC2_CH4 / Touch 4' },
      { number: 16, name: 'SD2 (GPIO9)', type: 'comm', col: 'left', desc: 'SPI Flash D2 (Internal - do not connect)' },
      { number: 17, name: 'SD3 (GPIO10)', type: 'comm', col: 'left', desc: 'SPI Flash D3 (Internal - do not connect)' },
      { number: 18, name: 'CMD (GPIO11)', type: 'comm', col: 'left', desc: 'SPI Flash CMD (Internal - do not connect)' },
      { number: 19, name: 'VIN (5V)', type: 'power', col: 'left', desc: '5V External DC Input or 5V USB Rail Output' },

      // Right side pins
      { number: 20, name: 'CLK (GPIO6)', type: 'comm', col: 'right', desc: 'SPI Flash CLK (Internal - do not connect)' },
      { number: 21, name: 'SD0 (GPIO7)', type: 'comm', col: 'right', desc: 'SPI Flash D0 (Internal - do not connect)' },
      { number: 22, name: 'SD1 (GPIO8)', type: 'comm', col: 'right', desc: 'SPI Flash D1 (Internal - do not connect)' },
      { number: 23, name: 'GPIO15', type: 'gpio', col: 'right', desc: 'HSPI_SS / ADC2_CH3 / Touch 3 (Boot strapping)' },
      { number: 24, name: 'GPIO2', type: 'gpio', col: 'right', desc: 'Built-in Blue LED / ADC2_CH2 / Touch 2' },
      { number: 25, name: 'GPIO0', type: 'gpio', col: 'right', desc: 'Boot Button / ADC2_CH1 / Touch 1 (Pull-up)' },
      { number: 26, name: 'GPIO4', type: 'gpio', col: 'right', desc: 'ADC2_CH0 / Touch 0 / RTC_GPIO10' },
      { number: 27, name: 'GPIO16', type: 'comm', col: 'right', desc: 'UART2 RX / HS2_DATA4' },
      { number: 28, name: 'GPIO17', type: 'comm', col: 'right', desc: 'UART2 TX / HS2_DATA5' },
      { number: 29, name: 'GPIO5', type: 'gpio', col: 'right', desc: 'VSPI_SS / Boot Strapping pin' },
      { number: 30, name: 'GPIO18', type: 'comm', col: 'right', desc: 'VSPI_SCK / I2C Clock alternate' },
      { number: 31, name: 'GPIO19', type: 'comm', col: 'right', desc: 'VSPI_MISO / I2C Data alternate' },
      { number: 32, name: 'GND', type: 'gnd', col: 'right', desc: 'Ground Reference 0V' },
      { number: 33, name: 'GPIO21', type: 'comm', col: 'right', desc: 'I2C SDA (Default Hardware Wire Data)' },
      { number: 34, name: 'RXD0 (GPIO3)', type: 'comm', col: 'right', desc: 'UART0 Serial RX (USB Serial Console)' },
      { number: 35, name: 'TXD0 (GPIO1)', type: 'comm', col: 'right', desc: 'UART0 Serial TX (USB Serial Console)' },
      { number: 36, name: 'GPIO22', type: 'comm', col: 'right', desc: 'I2C SCL (Default Hardware Wire Clock)' },
      { number: 37, name: 'GPIO23', type: 'comm', col: 'right', desc: 'VSPI_MOSI' },
      { number: 38, name: 'GND', type: 'gnd', col: 'right', desc: 'Ground Reference 0V' },
    ]
  },
  {
    id: 'arduino-nano',
    name: 'Arduino Nano V3',
    category: 'Microcontrollers',
    package: '30-pin Mini DIP',
    voltage: '5V (7-12V Vin)',
    current: '20 - 50 mA',
    frequency: '16 MHz',
    flash: '32 KB (ATmega328P)',
    pinsCount: 30,
    connectivity: 'Mini-USB UART (CH340 / FTDI)',
    description: 'Compact 8-bit breadboard-friendly microcontroller with 14 digital I/O pins, 8 analog inputs, and standard 5V TTL logic levels.',
    thumbnail: 'arduino',
    tags: ['MCU', 'ATmega328P', '5V', 'Breadboard', 'Educational'],
    specs: {
      'Operating Voltage': '5V',
      'Input Voltage (Vin)': '7V - 12V',
      'Max DC Current per I/O': '40 mA',
      'Analog Inputs': '8 (A0 - A7)',
      'Digital Pins': '14 (of which 6 provide PWM)',
      'EEPROM': '1 KB',
      'SRAM': '2 KB'
    },
    pinout: [
      { number: 1, name: 'TX (D1)', type: 'comm', col: 'left', desc: 'UART Transmit' },
      { number: 2, name: 'RX (D0)', type: 'comm', col: 'left', desc: 'UART Receive' },
      { number: 3, name: 'RST', type: 'gpio', col: 'left', desc: 'Reset (Active Low)' },
      { number: 4, name: 'GND', type: 'gnd', col: 'left', desc: 'Ground Reference' },
      { number: 5, name: 'D2', type: 'gpio', col: 'left', desc: 'Digital I/O / Ext Interrupt 0' },
      { number: 6, name: 'D3', type: 'pwm', col: 'left', desc: 'Digital I/O / PWM / Ext Interrupt 1' },
      { number: 7, name: 'D4', type: 'gpio', col: 'left', desc: 'Digital I/O' },
      { number: 8, name: 'D5', type: 'pwm', col: 'left', desc: 'Digital I/O / PWM' },
      { number: 9, name: 'D6', type: 'pwm', col: 'left', desc: 'Digital I/O / PWM' },
      { number: 10, name: 'D7', type: 'gpio', col: 'left', desc: 'Digital I/O' },
      { number: 11, name: 'D8', type: 'gpio', col: 'left', desc: 'Digital I/O' },
      { number: 12, name: 'D9', type: 'pwm', col: 'left', desc: 'Digital I/O / PWM' },
      { number: 13, name: 'D10', type: 'pwm', col: 'left', desc: 'Digital I/O / PWM / SPI SS' },
      { number: 14, name: 'D11', type: 'pwm', col: 'left', desc: 'Digital I/O / PWM / SPI MOSI' },
      { number: 15, name: 'D12', type: 'gpio', col: 'left', desc: 'Digital I/O / SPI MISO' },

      { number: 16, name: 'D13', type: 'gpio', col: 'right', desc: 'Digital I/O / Built-in LED / SPI SCK' },
      { number: 17, name: '3V3', type: 'power', col: 'right', desc: '3.3V Output (max 50mA from FTDI/CH340)' },
      { number: 18, name: 'AREF', type: 'analog', col: 'right', desc: 'Analog Reference Voltage' },
      { number: 19, name: 'A0', type: 'analog', col: 'right', desc: 'Analog In 0 (10-bit ADC)' },
      { number: 20, name: 'A1', type: 'analog', col: 'right', desc: 'Analog In 1' },
      { number: 21, name: 'A2', type: 'analog', col: 'right', desc: 'Analog In 2' },
      { number: 22, name: 'A3', type: 'analog', col: 'right', desc: 'Analog In 3' },
      { number: 23, name: 'A4', type: 'comm', col: 'right', desc: 'Analog In 4 / I2C SDA' },
      { number: 24, name: 'A5', type: 'comm', col: 'right', desc: 'Analog In 5 / I2C SCL' },
      { number: 25, name: 'A6', type: 'analog', col: 'right', desc: 'Analog In 6 (Input Only)' },
      { number: 26, name: 'A7', type: 'analog', col: 'right', desc: 'Analog In 7 (Input Only)' },
      { number: 27, name: '5V', type: 'power', col: 'right', desc: 'Regulated 5V Rail Output' },
      { number: 28, name: 'RST', type: 'gpio', col: 'right', desc: 'Reset Pin' },
      { number: 29, name: 'GND', type: 'gnd', col: 'right', desc: 'Ground Reference' },
      { number: 30, name: 'VIN', type: 'power', col: 'right', desc: 'Unregulated DC Power Input (7-12V)' },
    ]
  },
  {
    id: 'hc-sr04',
    name: 'HC-SR04 Ultrasonic Sensor',
    category: 'Sensors',
    package: '4-pin Single Row Header',
    voltage: '5V DC',
    current: '15 mA working current',
    frequency: '40 kHz ultrasound',
    flash: 'N/A',
    pinsCount: 4,
    connectivity: 'TTL Pulse (Trigger / Echo)',
    description: 'Non-contact distance measurement sensor module operating from 2cm to 400cm with 3mm precision using 40kHz sonic bursts.',
    thumbnail: 'sensor',
    tags: ['Sensor', 'Distance', 'Sonar', '5V', 'Robotics'],
    specs: {
      'Operating Voltage': '5V DC',
      'Working Current': '15 mA',
      'Range': '2 cm to 400 cm',
      'Measuring Angle': '15 degrees',
      'Trigger Input Signal': '10 µs TTL Pulse',
      'Echo Output Signal': '5V TTL PWM Pulse width proportional to distance',
    },
    pinout: [
      { number: 1, name: 'VCC', type: 'power', col: 'center', desc: '+5V Power Supply' },
      { number: 2, name: 'TRIG', type: 'gpio', col: 'center', desc: 'Trigger Input: send 10µs HIGH pulse to initiate sound burst' },
      { number: 3, name: 'ECHO', type: 'gpio', col: 'center', desc: 'Echo Output: 5V HIGH pulse. *Note: Use voltage divider when connecting to 3.3V ESP32*' },
      { number: 4, name: 'GND', type: 'gnd', col: 'center', desc: 'Ground 0V' },
    ]
  },
  {
    id: 'dht22',
    name: 'DHT22 / AM2302 Temp & Humidity',
    category: 'Sensors',
    package: '4-pin Single Row (0.1" pitch)',
    voltage: '3.3V - 5.5V DC',
    current: '1 - 1.5 mA',
    frequency: '0.5 Hz sampling rate (2s period)',
    flash: 'N/A',
    pinsCount: 4,
    connectivity: 'Single-bus 1-Wire protocol',
    description: 'Capacitive humidity sensing and high-precision NTC thermistor sensor providing digital calibrated readings over a single data line.',
    thumbnail: 'temp',
    tags: ['Sensor', 'Temperature', 'Humidity', '1-Wire', 'Weather'],
    specs: {
      'Humidity Range': '0 - 100% RH (±2% accuracy)',
      'Temperature Range': '-40°C to +80°C (±0.5°C accuracy)',
      'Power Supply': '3.3V to 5.5V DC',
      'Output': 'Digital 40-bit custom 1-wire format',
      'Pull-up Resistor': '4.7kΩ - 10kΩ required between VCC and DATA'
    },
    pinout: [
      { number: 1, name: 'VDD / VCC', type: 'power', col: 'center', desc: 'Power Supply (3.3V - 5V)' },
      { number: 2, name: 'DATA', type: 'comm', col: 'center', desc: 'Bidirectional Serial Data line (Requires 4.7kΩ pull-up to VCC)' },
      { number: 3, name: 'NC', type: 'gnd', col: 'center', desc: 'No Connection (Leave floating)' },
      { number: 4, name: 'GND', type: 'gnd', col: 'center', desc: 'Ground 0V' },
    ]
  },
  {
    id: 'oled-ssd1306',
    name: '0.96" I2C OLED Display (SSD1306)',
    category: 'Displays',
    package: '4-pin Header',
    voltage: '3.3V - 5.0V',
    current: '20 mA (All pixels lit)',
    frequency: '400 kHz Fast-mode I2C',
    flash: 'N/A',
    pinsCount: 4,
    connectivity: 'I2C (Address: 0x3C or 0x3D)',
    description: 'High-contrast 128x64 monochrome graphic display module with integrated SSD1306 driver, ideal for showing sensor graphs and text telemetry.',
    thumbnail: 'display',
    tags: ['Display', 'OLED', '128x64', 'I2C', 'SSD1306'],
    specs: {
      'Resolution': '128 x 64 pixels',
      'Visual Angle': '> 160 degrees',
      'Supply Voltage': '3.3V - 5V',
      'Driver IC': 'SSD1306',
      'I2C Address': '0x3C (Default)'
    },
    pinout: [
      { number: 1, name: 'GND', type: 'gnd', col: 'center', desc: 'Ground 0V' },
      { number: 2, name: 'VCC', type: 'power', col: 'center', desc: 'Power Supply 3.3V - 5V' },
      { number: 3, name: 'SCL', type: 'comm', col: 'center', desc: 'I2C Serial Clock (Connect to ESP32 GPIO22 or Nano A5)' },
      { number: 4, name: 'SDA', type: 'comm', col: 'center', desc: 'I2C Serial Data (Connect to ESP32 GPIO21 or Nano A4)' },
    ]
  },
  {
    id: 'sg90-servo',
    name: 'SG90 Micro Servo Motor 9g',
    category: 'Actuators',
    package: '3-pin 0.1" Female Header',
    voltage: '4.8V - 6.0V',
    current: '100mA idle, up to 650mA stall',
    frequency: '50 Hz PWM (20ms period)',
    flash: 'N/A',
    pinsCount: 3,
    connectivity: 'PWM (Pulse Width 1ms = 0°, 1.5ms = 90°, 2ms = 180°)',
    description: 'Lightweight 9-gram analog micro servo delivering 1.8 kg·cm torque with 180° rotation control, widely used in robotic joints and pan-tilt mounts.',
    thumbnail: 'motor',
    tags: ['Motor', 'Servo', 'PWM', 'Actuator', 'Robotics'],
    specs: {
      'Torque': '1.8 kg·cm @ 4.8V',
      'Operating Speed': '0.1s / 60 degrees',
      'Dead Band Width': '5 µs',
      'Rotation Angle': '180 degrees'
    },
    pinout: [
      { number: 1, name: 'PWM (Orange/Yellow)', type: 'pwm', col: 'center', desc: 'PWM Control Signal (50Hz, 1-2ms pulse)' },
      { number: 2, name: 'VCC (Red)', type: 'power', col: 'center', desc: '+5V Power (Use external power for multiple servos!)' },
      { number: 3, name: 'GND (Brown/Black)', type: 'gnd', col: 'center', desc: 'Ground Reference 0V' },
    ]
  },
  {
    id: 'relay-5v',
    name: '5V Single-Channel Relay Module',
    category: 'Actuators',
    package: '3-pin Input + 3-screw Terminal Block',
    voltage: '5V Coil Voltage',
    current: '70 mA coil energize',
    frequency: 'Optocoupler isolated',
    flash: 'N/A',
    pinsCount: 6,
    connectivity: 'Active-Low / Active-High Digital TTL',
    description: 'Galvanically isolated electromechanical switch allowing low-voltage microcontrollers to safely switch AC mains loads (up to 250V / 10A).',
    thumbnail: 'relay',
    tags: ['Relay', 'Optocoupler', 'AC Switching', 'High-Power'],
    specs: {
      'Contact Rating': '10A 250VAC / 10A 30VDC',
      'Trigger Current': '5mA via optoisolator',
      'Indicator': 'Status LED for coil energization'
    },
    pinout: [
      { number: 1, name: 'VCC', type: 'power', col: 'left', desc: '+5V Power for relay coil and optocoupler' },
      { number: 2, name: 'GND', type: 'gnd', col: 'left', desc: 'Circuit Ground 0V' },
      { number: 3, name: 'IN', type: 'gpio', col: 'left', desc: 'Digital Control Signal (Active Low or Active High)' },
      { number: 4, name: 'NO', type: 'power', col: 'right', desc: 'Normally Open high-power terminal' },
      { number: 5, name: 'COM', type: 'power', col: 'right', desc: 'Common high-power terminal' },
      { number: 6, name: 'NC', type: 'power', col: 'right', desc: 'Normally Closed high-power terminal' },
    ]
  },
  {
    id: 'led-5mm-red',
    name: '5mm Red Diffused LED',
    category: 'Passives',
    package: 'Radial Through-Hole 2-pin',
    voltage: '2.0V Forward Voltage',
    current: '20 mA Max',
    frequency: 'N/A',
    flash: 'N/A',
    pinsCount: 2,
    connectivity: 'Anode (+) & Cathode (-)',
    description: 'Standard indicator light-emitting diode with 620nm wavelength. Requires a current-limiting resistor (typically 220Ω - 330Ω for 5V, 150Ω for 3.3V).',
    thumbnail: 'led',
    tags: ['LED', 'Diode', 'Indicator', 'Passive'],
    specs: {
      'Forward Voltage (Vf)': '1.8V - 2.2V',
      'Max Continuous Current': '20 mA',
      'Wavelength': '620 - 625 nm (Red)',
      'Viewing Angle': '60 degrees'
    },
    pinout: [
      { number: 1, name: 'Anode (+)', type: 'power', col: 'center', desc: 'Long lead: Positive terminal (Connect to GPIO via resistor)' },
      { number: 2, name: 'Cathode (-)', type: 'gnd', col: 'center', desc: 'Short lead / flat edge: Negative terminal (Connect to GND)' },
    ]
  },
  {
    id: 'resistor-220',
    name: '220Ω 1/4W Carbon Film Resistor',
    category: 'Passives',
    package: 'Axial Through-Hole',
    voltage: '250V Max Working',
    current: 'Calculated by Ohm\'s Law',
    frequency: 'N/A',
    flash: 'N/A',
    pinsCount: 2,
    connectivity: 'Bidirectional Leads',
    description: 'Standard current-limiting resistor with color bands Red-Red-Brown-Gold (220Ω ±5%). Perfect for protecting 5V/3.3V LEDs.',
    thumbnail: 'resistor',
    tags: ['Resistor', '220 Ohm', 'Current Limiter', 'Passive'],
    specs: {
      'Resistance': '220 Ohms',
      'Tolerance': '± 5%',
      'Power Rating': '0.25 Watt (1/4 W)',
      'Color Code': 'Red, Red, Brown, Gold'
    },
    pinout: [
      { number: 1, name: 'Lead 1', type: 'gpio', col: 'center', desc: 'Terminal 1 (Non-polar bidirectional)' },
      { number: 2, name: 'Lead 2', type: 'gpio', col: 'center', desc: 'Terminal 2 (Non-polar bidirectional)' },
    ]
  },
  {
    id: 'breadboard-830',
    name: '830-Point Solderless Breadboard',
    category: 'Prototyping',
    package: 'Standard MB-102 Breadboard',
    voltage: 'Up to 30V Max',
    current: 'Up to 1.5A Max per rail',
    frequency: 'Up to 10 MHz before parasitic capacitance interference',
    flash: 'N/A',
    pinsCount: 830,
    connectivity: 'Tie-points & Power Distribution Rails',
    description: 'Reusable solderless prototyping board with two split dual power rails (red/blue) and 630 tie-point central terminal grid separated by a 0.3" IC DIP center trough.',
    thumbnail: 'breadboard',
    tags: ['Breadboard', 'Prototyping', 'Power Rails', 'MB-102'],
    specs: {
      'Tie Points': '830 points total (630 terminal + 200 power distribution)',
      'Pitch': '2.54 mm (0.1 inch standard)',
      'Rail Structure': '4 independent power buses'
    },
    pinout: [
      { number: 1, name: 'Red Bus (+)', type: 'power', col: 'left', desc: 'Positive DC Power Supply Rail' },
      { number: 2, name: 'Blue Bus (-)', type: 'gnd', col: 'left', desc: 'Negative / Ground Return Rail' },
      { number: 3, name: 'Rows A-E', type: 'gpio', col: 'center', desc: 'Connected vertically in groups of 5 tie-points' },
      { number: 4, name: 'Center Trough', type: 'gnd', col: 'center', desc: '0.3" separation for standard dual-in-line IC chips' },
      { number: 5, name: 'Rows F-J', type: 'gpio', col: 'center', desc: 'Connected vertically in groups of 5 tie-points' },
    ]
  }
];

export const MOCK_DIAGNOSTICS_DATA = {
  healthScore: 96,
  status: 'nominal', // 'nominal', 'warning', 'critical'
  timestamp: new Date().toLocaleTimeString(),
  rails: [
    { id: 'v5', name: '5V VCC Rail', nominal: 5.0, value: 5.02, unit: 'V', min: 4.85, max: 5.15, status: 'nominal', currentDraw: '85 mA' },
    { id: 'v33', name: '3.3V ESP32 Rail', nominal: 3.3, value: 3.29, unit: 'V', min: 3.15, max: 3.45, status: 'nominal', currentDraw: '57 mA' },
    { id: 'iTotal', name: 'Total Current Draw', nominal: 180, value: 142, unit: 'mA', min: 20, max: 500, status: 'nominal' },
    { id: 'tCore', name: 'MCU Thermal Sensor', nominal: 38.0, value: 41.5, unit: '°C', min: 20, max: 75, status: 'nominal' },
  ],
  checks: [
    {
      id: 'chk-power',
      name: 'Power Rail Continuity & Ground Integrity',
      category: 'Power',
      status: 'pass',
      details: 'All rails within ±1.5% margin. Common ground loop resistance < 0.04 Ω.'
    },
    {
      id: 'chk-short',
      name: 'VCC to GND Short-Circuit Impedance',
      category: 'Safety',
      status: 'pass',
      details: 'Impedance on 5V rail measured > 4.2 kΩ. No low-impedance short bridges detected.'
    },
    {
      id: 'chk-i2c',
      name: 'I2C Bus Pull-Up Resistance & Clock Speed',
      category: 'Signals',
      status: 'pass',
      details: 'Dual 4.7kΩ pull-up resistors verified on SDA (GPIO21) and SCL (GPIO22).'
    },
    {
      id: 'chk-floating',
      name: 'Floating High-Z GPIO Input Detection',
      category: 'Logic',
      status: 'pass',
      details: 'All configured digital inputs have internal pull-up / pull-down enabled.'
    },
    {
      id: 'chk-logic',
      name: 'Logic Level Voltage Compatibility',
      category: 'Logic',
      status: 'warning',
      details: 'Notice: HC-SR04 Echo output operates at 5V logic. Recommended: add voltage divider before feeding into 3.3V ESP32 GPIO.'
    }
  ],
  faultPresets: [
    {
      id: 'fault-short',
      label: 'Short Circuit (5V to GND)',
      type: 'critical',
      message: 'CRITICAL ALERT: Low impedance short circuit detected between 5.0V rail and GND! Rail voltage dropped to 0.4V. Cut power immediately to prevent hardware damage.',
      speechText: 'Critical warning! Short circuit detected on the 5-volt rail! Rail voltage collapsed. Disconnect power immediately.',
      mutations: {
        healthScore: 12,
        status: 'critical',
        rails: [
          { id: 'v5', name: '5V VCC Rail', nominal: 5.0, value: 0.42, unit: 'V', min: 4.85, max: 5.15, status: 'critical', currentDraw: '1450 mA (OVERCURRENT)' },
          { id: 'v33', name: '3.3V ESP32 Rail', nominal: 3.3, value: 1.15, unit: 'V', min: 3.15, max: 3.45, status: 'critical', currentDraw: '12 mA' },
          { id: 'iTotal', name: 'Total Current Draw', nominal: 180, value: 1450, unit: 'mA', min: 20, max: 500, status: 'critical' },
          { id: 'tCore', name: 'MCU Thermal Sensor', nominal: 38.0, value: 68.4, unit: '°C', min: 20, max: 75, status: 'warning' },
        ],
        failingCheck: {
          id: 'chk-short',
          name: 'VCC to GND Short-Circuit Impedance',
          category: 'Safety',
          status: 'fail',
          details: 'FAIL: Direct short circuit detected! Measured resistance is 0.12 Ω. Overcurrent trip triggered.'
        }
      }
    },
    {
      id: 'fault-overvoltage',
      label: '3.3V Overvoltage Surge',
      type: 'critical',
      message: 'CRITICAL ALERT: 5.1V injected into 3.3V ESP32 GPIO pin! Exceeds maximum electrical rating of 3.6V. Potential chip degradation.',
      speechText: 'Critical warning! Overvoltage detected on ESP-32 GPIO. 5 volts injected into 3.3-volt pin. Disconnect circuit.',
      mutations: {
        healthScore: 35,
        status: 'critical',
        rails: [
          { id: 'v5', name: '5V VCC Rail', nominal: 5.0, value: 5.08, unit: 'V', min: 4.85, max: 5.15, status: 'nominal', currentDraw: '210 mA' },
          { id: 'v33', name: '3.3V ESP32 Rail', nominal: 3.3, value: 4.95, unit: 'V', min: 3.15, max: 3.45, status: 'critical', currentDraw: '340 mA' },
          { id: 'iTotal', name: 'Total Current Draw', nominal: 180, value: 550, unit: 'mA', min: 20, max: 500, status: 'critical' },
          { id: 'tCore', name: 'MCU Thermal Sensor', nominal: 38.0, value: 54.0, unit: '°C', min: 20, max: 75, status: 'warning' },
        ],
        failingCheck: {
          id: 'chk-logic',
          name: 'Logic Level Voltage Compatibility',
          category: 'Logic',
          status: 'fail',
          details: 'FAIL: Overvoltage on GPIO13! Input voltage is 4.95V, exceeding ESP32 3.6V absolute maximum.'
        }
      }
    },
    {
      id: 'fault-floating',
      label: 'Floating GPIO State',
      type: 'warning',
      message: 'WARNING: Input pin GPIO14 is floating with high impedance. Unstable digital read state detected.',
      speechText: 'Warning: Floating GPIO detected on pin 14. Add an external pull-down resistor or enable internal pull-up.',
      mutations: {
        healthScore: 78,
        status: 'warning',
        rails: [
          { id: 'v5', name: '5V VCC Rail', nominal: 5.0, value: 5.01, unit: 'V', min: 4.85, max: 5.15, status: 'nominal', currentDraw: '88 mA' },
          { id: 'v33', name: '3.3V ESP32 Rail', nominal: 3.3, value: 3.30, unit: 'V', min: 3.15, max: 3.45, status: 'nominal', currentDraw: '59 mA' },
          { id: 'iTotal', name: 'Total Current Draw', nominal: 180, value: 147, unit: 'mA', min: 20, max: 500, status: 'nominal' },
          { id: 'tCore', name: 'MCU Thermal Sensor', nominal: 38.0, value: 39.8, unit: '°C', min: 20, max: 75, status: 'nominal' },
        ],
        failingCheck: {
          id: 'chk-floating',
          name: 'Floating High-Z GPIO Input Detection',
          category: 'Logic',
          status: 'warning',
          details: 'WARN: GPIO14 state oscillates between HIGH and LOW due to environmental RF noise.'
        }
      }
    }
  ]
};

export const MOCK_SERIAL_PRESETS = {
  boot: [
    '[00:00.012] rst:0x1 (POWERON_RESET),boot:0x13 (SPI_FAST_FLASH_BOOT)',
    '[00:00.024] configsip: 0, SPIWP:0xee',
    '[00:00.038] clk_drv:0x00,q_drv:0x00,d_drv:0x00,cs0_drv:0x00,hd_drv:0x00,wp_drv:0x00',
    '[00:00.051] mode:DIO, clock div:1',
    '[00:00.065] load:0x3fff0030,len:1184',
    '[00:00.078] ho 0 tail 12 room 4',
    '[00:00.092] load:0x40078000,len:13104',
    '[00:00.110] entry 0x40080640',
    '[00:00.145] [INFO] [ESP-IDF v4.4-dev] 3D Virtual Hardware Lab ESP32 Agent',
    '[00:00.190] [INFO] Chip revision: ESP32-D0WDQ6 (revision 1)',
    '[00:00.230] [INFO] Flash size: 4MB (Speed: 80MHz, Bus: DIO)',
    '[00:00.290] [INFO] MAC Address: 24:6F:28:B4:9C:12',
    '[00:00.350] [INFO] Initializing Hardware Simulation Engine Bridge...',
    '[00:00.410] [INFO] I2C Master initialized: SDA=GPIO21, SCL=GPIO22 @ 400kHz',
    '[00:00.470] [INFO] SSD1306 OLED display detected at 0x3C',
    '[00:00.520] [INFO] Ready for user commands. Web Serial Baud: 115200',
  ],
  telemetry: [
    '{"time":1000,"temp":24.2,"humidity":58.4,"dist_cm":18.4,"vcc":3.31}',
    '{"time":1500,"temp":24.3,"humidity":58.2,"dist_cm":18.1,"vcc":3.30}',
    '{"time":2000,"temp":24.2,"humidity":58.5,"dist_cm":17.9,"vcc":3.31}',
    '{"time":2500,"temp":24.4,"humidity":58.1,"dist_cm":18.2,"vcc":3.30}',
    '{"time":3000,"temp":24.5,"humidity":58.0,"dist_cm":18.0,"vcc":3.31}',
  ],
  interactiveReplies: {
    'help': 'Available commands: help, status, scan_i2c, read_sensors, test_led, reset',
    'status': 'SYSTEM: RUNNING | Free Heap: 284192 bytes | Uptime: 00:03:42 | Battery: 100%',
    'scan_i2c': 'Scanning I2C bus...\nFound device at address 0x3C (SSD1306 Display)\nFound 1 device.',
    'read_sensors': 'DHT22: Temp=24.3°C, Hum=58.2% | HC-SR04: Distance=18.2 cm',
    'test_led': 'Blinking built-in LED on GPIO2 for 3 cycles... OK',
    'reset': 'Soft reset initiated. Restarting simulation loop...',
  }
};

export const MOCK_LAB_GUIDES = [
  {
    id: 'lab-1',
    title: 'Lab 1: ESP32 LED Blink & Current Limiting',
    level: 'Beginner',
    duration: '15 mins',
    summary: 'Learn the fundamentals of GPIO output control, forward voltage, and calculating current-limiting resistors to prevent LED burn-out.',
    prerequisites: ['ESP32 DevKit', 'Red LED 5mm', '220Ω Resistor', 'Breadboard', 'Jumper Wires'],
    steps: [
      {
        stepNumber: 1,
        instruction: 'Place the ESP32 DevKit straddling the center trough of the breadboard so each column has isolated pins.',
        hint: 'Pin 1 (3V3) should be aligned with row 1 on the left side.',
        checkKey: 'mcu_placed'
      },
      {
        stepNumber: 2,
        instruction: 'Connect a jumper wire from ESP32 GND (Pin 14) to the blue negative ground rail of the breadboard.',
        hint: 'Ground reference is required to complete the electric circuit loop.',
        checkKey: 'gnd_connected'
      },
      {
        stepNumber: 3,
        instruction: 'Insert the 220Ω resistor between ESP32 GPIO2 (Pin 24) and an open terminal row on the breadboard.',
        hint: 'A 220 ohm resistor limits the current from 3.3V to approximately 10mA, well within the 12mA safety limit.',
        checkKey: 'resistor_placed'
      },
      {
        stepNumber: 4,
        instruction: 'Connect the LED Anode (longer lead) to the resistor row, and the LED Cathode (shorter lead) to the GND rail.',
        hint: 'LEDs are polarized! Reverse connection will prevent current from flowing.',
        checkKey: 'led_oriented'
      },
      {
        stepNumber: 5,
        instruction: 'Click the "Play" button in Simulation Controls to start the virtual clock and watch the LED blink at 1Hz.',
        hint: 'Check the Diagnostic Panel to ensure current draw does not exceed 20mA.',
        checkKey: 'sim_run'
      }
    ],
    codeSnippet: `void setup() {
  pinMode(2, OUTPUT); // Built-in / external LED
}

void loop() {
  digitalWrite(2, HIGH);
  delay(1000);
  digitalWrite(2, LOW);
  delay(1000);
}`
  },
  {
    id: 'lab-2',
    title: 'Lab 2: HC-SR04 Ultrasonic Distance Meter',
    level: 'Intermediate',
    duration: '25 mins',
    summary: 'Build a sonar distance measuring station and learn safe 5V-to-3.3V logic level shifting between sensors and the ESP32.',
    prerequisites: ['ESP32 DevKit', 'HC-SR04 Sensor', '1kΩ & 2kΩ Resistors (Voltage Divider)', 'Breadboard'],
    steps: [
      {
        stepNumber: 1,
        instruction: 'Connect HC-SR04 VCC pin to the 5V / VIN rail of the breadboard.',
        hint: 'The HC-SR04 requires 5V to drive its ultrasonic transducers effectively.',
        checkKey: 'sensor_power'
      },
      {
        stepNumber: 2,
        instruction: 'Connect HC-SR04 GND pin to the common ground rail.',
        hint: 'Always ensure common ground across sensors and the microcontroller.',
        checkKey: 'sensor_gnd'
      },
      {
        stepNumber: 3,
        instruction: 'Connect ESP32 GPIO5 to HC-SR04 TRIG pin.',
        hint: 'The TRIG pin accepts 3.3V TTL pulses from the ESP32 without issue.',
        checkKey: 'trig_wired'
      },
      {
        stepNumber: 4,
        instruction: 'Create a voltage divider (1kΩ and 2kΩ) on the ECHO pin to step the 5V echo pulse down to ~3.3V before feeding into GPIO18.',
        hint: 'Connecting a 5V ECHO pulse directly to 3.3V ESP32 can degrade the input stage over time!',
        checkKey: 'echo_level_shifted'
      },
      {
        stepNumber: 5,
        instruction: 'Open the Serial Monitor at 115200 baud to observe distance measurements in centimeters.',
        hint: 'Say "Voice Assistant, read distance" to hear the live measurement read aloud.',
        checkKey: 'serial_observed'
      }
    ],
    codeSnippet: `#define TRIG_PIN 5
#define ECHO_PIN 18

void setup() {
  Serial.begin(115200);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
}

void loop() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  long duration = pulseIn(ECHO_PIN, HIGH);
  float distanceCm = duration * 0.034 / 2;
  Serial.print("Distance: ");
  Serial.print(distanceCm);
  Serial.println(" cm");
  delay(500);
}`
  },
  {
    id: 'lab-3',
    title: 'Lab 3: I2C OLED Display & DHT22 Station',
    level: 'Advanced',
    duration: '30 mins',
    summary: 'Wire multiple digital devices on the I2C bus and 1-Wire protocol to create a live environmental weather dashboard.',
    prerequisites: ['ESP32 DevKit', 'SSD1306 OLED Display', 'DHT22 Sensor', '4.7kΩ Resistor', 'Breadboard'],
    steps: [
      {
        stepNumber: 1,
        instruction: 'Power the SSD1306 OLED from the 3.3V rail and GND.',
        hint: 'SSD1306 operates natively from 3.3V.',
        checkKey: 'oled_powered'
      },
      {
        stepNumber: 2,
        instruction: 'Wire I2C lines: Connect OLED SCL to ESP32 GPIO22, and OLED SDA to ESP32 GPIO21.',
        hint: 'ESP32 default Wire library uses GPIO21 (SDA) and GPIO22 (SCL).',
        checkKey: 'i2c_wired'
      },
      {
        stepNumber: 3,
        instruction: 'Connect DHT22 VCC to 3.3V, GND to Ground, and DATA pin to GPIO4 with a 4.7kΩ pull-up to 3.3V.',
        hint: '1-Wire protocols require pull-up resistors to keep the idle line HIGH.',
        checkKey: 'dht_wired'
      },
      {
        stepNumber: 4,
        instruction: 'Run the Diagnostic Panel test to verify I2C bus address 0x3C response and 0% packet collision.',
        hint: 'You can say "Voice Assistant, run diagnostics" to execute the test suite hands-free.',
        checkKey: 'diagnostics_verified'
      }
    ],
    codeSnippet: `#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <DHT.h>

#define DHTPIN 4
#define DHTTYPE DHT22
DHT dht(DHTPIN, DHTTYPE);
Adafruit_SSD1306 display(128, 64, &Wire, -1);

void setup() {
  Wire.begin(21, 22);
  dht.begin();
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
}

void loop() {
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  display.clearDisplay();
  display.setCursor(0, 0);
  display.printf("Temp: %.1f C\\nHum: %.1f %%", t, h);
  display.display();
  delay(2000);
}`
  }
];
