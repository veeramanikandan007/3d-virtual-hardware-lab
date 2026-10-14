/**
 * componentManifest.js — Authoritative 20-Category 3D Component Registry
 * Complete 194-Component Catalog matching reference chart
 */

export const CATEGORIES = [
  {
    "id": 1,
    "name": "Microcontrollers",
    "count": 7
  },
  {
    "id": 2,
    "name": "Sensors",
    "count": 17
  },
  {
    "id": 3,
    "name": "Displays",
    "count": 7
  },
  {
    "id": 4,
    "name": "Input",
    "count": 9
  },
  {
    "id": 5,
    "name": "Output",
    "count": 9
  },
  {
    "id": 6,
    "name": "Actuators",
    "count": 10
  },
  {
    "id": 7,
    "name": "Passive Components",
    "count": 12
  },
  {
    "id": 8,
    "name": "Prototyping",
    "count": 10
  },
  {
    "id": 9,
    "name": "Power",
    "count": 13
  },
  {
    "id": 10,
    "name": "Communication",
    "count": 11
  },
  {
    "id": 11,
    "name": "ICs & Logic",
    "count": 10
  },
  {
    "id": 12,
    "name": "Motor Drivers",
    "count": 10
  },
  {
    "id": 13,
    "name": "Robotics",
    "count": 10
  },
  {
    "id": 14,
    "name": "Connectors & Wiring",
    "count": 12
  },
  {
    "id": 15,
    "name": "Protection",
    "count": 8
  },
  {
    "id": 16,
    "name": "Measurement & Test",
    "count": 9
  },
  {
    "id": 17,
    "name": "Audio",
    "count": 8
  },
  {
    "id": 18,
    "name": "Camera & Imaging",
    "count": 7
  },
  {
    "id": 19,
    "name": "Storage & Memory",
    "count": 6
  },
  {
    "id": 20,
    "name": "Industrial Modules",
    "count": 9
  }
];

export const COMPONENT_MANIFEST = [
  {
    "id": "arduino",
    "name": "Arduino UNO R3",
    "category_id": 1,
    "category": "Microcontrollers",
    "dimensions": {
      "length": 68.6,
      "width": 53.4,
      "height": 15,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "ATmega328P based microcontroller board.",
    "pins": [
      {
        "id": "ard-5v",
        "name": "5V",
        "type": "power",
        "pos": [
          -0.18,
          0.075,
          0.32
        ],
        "verified": true
      },
      {
        "id": "ard-3v3",
        "name": "3.3V",
        "type": "power",
        "pos": [
          -0.22,
          0.075,
          0.32
        ],
        "verified": true
      },
      {
        "id": "ard-gnd1",
        "name": "GND 1",
        "type": "ground",
        "pos": [
          -0.14,
          0.075,
          0.32
        ],
        "verified": true
      },
      {
        "id": "ard-vin",
        "name": "VIN",
        "type": "power",
        "pos": [
          -0.06,
          0.075,
          0.32
        ],
        "verified": true
      },
      {
        "id": "ard-a0",
        "name": "A0",
        "type": "analog",
        "pos": [
          0.16,
          0.075,
          0.32
        ],
        "verified": true
      },
      {
        "id": "ard-d13",
        "name": "D13 (LED)",
        "type": "digital",
        "pos": [
          -0.16,
          0.075,
          -0.32
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "arduino-nano",
    "name": "Arduino Nano",
    "category_id": 1,
    "category": "Microcontrollers",
    "dimensions": {
      "length": 45,
      "width": 18,
      "height": 18,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "Compact breadboard-friendly ATmega328P.",
    "pins": [
      {
        "id": "nano-d13",
        "name": "D13",
        "type": "digital",
        "pos": [
          -0.08,
          0.04,
          -0.2
        ],
        "verified": true
      },
      {
        "id": "nano-3v3",
        "name": "3V3",
        "type": "power",
        "pos": [
          -0.08,
          0.04,
          -0.15
        ],
        "verified": true
      },
      {
        "id": "nano-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          -0.08,
          0.04,
          0.2
        ],
        "verified": true
      },
      {
        "id": "nano-vin",
        "name": "VIN",
        "type": "power",
        "pos": [
          0.08,
          0.04,
          0.2
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "arduino-mega",
    "name": "Arduino Mega 2560",
    "category_id": 1,
    "category": "Microcontrollers",
    "dimensions": {
      "length": 101.5,
      "width": 53.3,
      "height": 15,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "High pin-count ATmega2560 board.",
    "pins": [
      {
        "id": "mega-5v",
        "name": "5V",
        "type": "power",
        "pos": [
          -0.2,
          0.075,
          0.35
        ],
        "verified": true
      },
      {
        "id": "mega-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          -0.15,
          0.075,
          0.35
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "esp32",
    "name": "ESP32 DevKit",
    "category_id": 1,
    "category": "Microcontrollers",
    "dimensions": {
      "length": 51.5,
      "width": 28.3,
      "height": 12,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V",
    "description": "Dual-core Wi-Fi & Bluetooth microcontroller.",
    "pins": [
      {
        "id": "esp32-3v3",
        "name": "3V3",
        "type": "power",
        "pos": [
          -0.2,
          0.065,
          -0.3
        ],
        "verified": true
      },
      {
        "id": "esp32-en",
        "name": "EN",
        "type": "digital",
        "pos": [
          -0.2,
          0.065,
          -0.2
        ],
        "verified": true
      },
      {
        "id": "esp32-gpio2",
        "name": "GPIO2 (LED)",
        "type": "digital",
        "pos": [
          -0.2,
          0.065,
          0
        ],
        "verified": true
      },
      {
        "id": "esp32-gnd1",
        "name": "GND",
        "type": "ground",
        "pos": [
          -0.2,
          0.065,
          0.3
        ],
        "verified": true
      },
      {
        "id": "esp32-vin",
        "name": "VIN (5V)",
        "type": "power",
        "pos": [
          0.2,
          0.065,
          -0.3
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "esp8266",
    "name": "ESP8266 NodeMCU",
    "category_id": 1,
    "category": "Microcontrollers",
    "dimensions": {
      "length": 49,
      "width": 26,
      "height": 13,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V",
    "description": "Wi-Fi enabled IoT development board.",
    "pins": [
      {
        "id": "nodemcu-3v3",
        "name": "3V3",
        "type": "power",
        "pos": [
          -0.12,
          0.05,
          -0.2
        ],
        "verified": true
      },
      {
        "id": "nodemcu-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          -0.12,
          0.05,
          0.2
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "pico",
    "name": "Raspberry Pi Pico",
    "category_id": 1,
    "category": "Microcontrollers",
    "dimensions": {
      "length": 51,
      "width": 21,
      "height": 4,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V",
    "description": "RP2040 dual-core ARM Cortex-M0+ board.",
    "pins": [
      {
        "id": "pico-vsys",
        "name": "VSYS",
        "type": "power",
        "pos": [
          0.1,
          0.03,
          -0.2
        ],
        "verified": true
      },
      {
        "id": "pico-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          -0.1,
          0.03,
          -0.15
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "stm32-nucleo",
    "name": "STM32 Nucleo",
    "category_id": 1,
    "category": "Microcontrollers",
    "dimensions": {
      "length": 82,
      "width": 70,
      "height": 18,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V",
    "description": "ARM Cortex-M development board with ST-LINK.",
    "pins": [
      {
        "id": "nucleo-3v3",
        "name": "3V3",
        "type": "power",
        "pos": [
          -0.2,
          0.06,
          0.3
        ],
        "verified": true
      },
      {
        "id": "nucleo-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          -0.15,
          0.06,
          0.3
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "hc-sr04",
    "name": "HC-SR04 Ultrasonic",
    "category_id": 2,
    "category": "Sensors",
    "dimensions": {
      "length": 45,
      "width": 20,
      "height": 15,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "Acoustic distance sensor (2-400cm).",
    "pins": [
      {
        "id": "sr04-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.06,
          0.02,
          0.14
        ],
        "verified": true
      },
      {
        "id": "sr04-trig",
        "name": "TRIG",
        "type": "digital",
        "pos": [
          -0.02,
          0.02,
          0.14
        ],
        "verified": true
      },
      {
        "id": "sr04-echo",
        "name": "ECHO",
        "type": "digital",
        "pos": [
          0.02,
          0.02,
          0.14
        ],
        "verified": true
      },
      {
        "id": "sr04-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.06,
          0.02,
          0.14
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "dht11",
    "name": "DHT11 Sensor",
    "category_id": 2,
    "category": "Sensors",
    "dimensions": {
      "length": 15.5,
      "width": 12,
      "height": 5.5,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V - 5V",
    "description": "Digital temperature & relative humidity sensor.",
    "pins": [
      {
        "id": "dht-vcc",
        "name": "VCC (+)",
        "type": "power",
        "pos": [
          -0.06,
          0.015,
          0.1
        ],
        "verified": true
      },
      {
        "id": "dht-data",
        "name": "DATA",
        "type": "digital",
        "pos": [
          -0.02,
          0.015,
          0.1
        ],
        "verified": true
      },
      {
        "id": "dht-gnd",
        "name": "GND (-)",
        "type": "ground",
        "pos": [
          0.06,
          0.015,
          0.1
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "dht22",
    "name": "DHT22 High-Precision",
    "category_id": 2,
    "category": "Sensors",
    "dimensions": {
      "length": 25,
      "width": 15,
      "height": 8,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V - 5V",
    "description": "Precision capacitive humidity & thermistor sensor.",
    "pins": [
      {
        "id": "dht22-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.04,
          0.015,
          0.14
        ],
        "verified": true
      },
      {
        "id": "dht22-dat",
        "name": "DATA",
        "type": "digital",
        "pos": [
          -0.01,
          0.015,
          0.14
        ],
        "verified": true
      },
      {
        "id": "dht22-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.04,
          0.015,
          0.14
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "ldr-sensor",
    "name": "LDR Photoresistor",
    "category_id": 2,
    "category": "Sensors",
    "dimensions": {
      "length": 5,
      "width": 5,
      "height": 35,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V - 5V",
    "description": "Cadmium-Sulfide (CdS) light dependent resistor.",
    "pins": [
      {
        "id": "ldr-p1",
        "name": "Pin 1",
        "type": "analog",
        "pos": [
          -0.025,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "ldr-p2",
        "name": "Pin 2",
        "type": "analog",
        "pos": [
          0.025,
          0.01,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "pir-sensor",
    "name": "PIR HC-SR501",
    "category_id": 2,
    "category": "Sensors",
    "dimensions": {
      "length": 32,
      "width": 24,
      "height": 26,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "Passive Infrared motion sensor with Fresnel dome.",
    "pins": [
      {
        "id": "pir-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.04,
          0.02,
          0.12
        ],
        "verified": true
      },
      {
        "id": "pir-out",
        "name": "OUTPUT",
        "type": "digital",
        "pos": [
          0,
          0.02,
          0.12
        ],
        "verified": true
      },
      {
        "id": "pir-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.04,
          0.02,
          0.12
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "ir-obstacle",
    "name": "IR Obstacle Sensor",
    "category_id": 2,
    "category": "Sensors",
    "dimensions": {
      "length": 32,
      "width": 14,
      "height": 8,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V - 5V",
    "description": "Infrared transmitter & receiver proximity sensor.",
    "pins": [
      {
        "id": "ir-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.04,
          0.02,
          0.12
        ],
        "verified": true
      },
      {
        "id": "ir-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0,
          0.02,
          0.12
        ],
        "verified": true
      },
      {
        "id": "ir-out",
        "name": "OUT",
        "type": "digital",
        "pos": [
          0.04,
          0.02,
          0.12
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "mpu6050",
    "name": "MPU6050 6-DOF IMU",
    "category_id": 2,
    "category": "Sensors",
    "dimensions": {
      "length": 21,
      "width": 16,
      "height": 3,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V - 5V",
    "description": "3-axis accelerometer and 3-axis gyroscope I2C.",
    "pins": [
      {
        "id": "mpu-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.06,
          0.02,
          0.08
        ],
        "verified": true
      },
      {
        "id": "mpu-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          -0.02,
          0.02,
          0.08
        ],
        "verified": true
      },
      {
        "id": "mpu-scl",
        "name": "SCL",
        "type": "i2c",
        "pos": [
          0.02,
          0.02,
          0.08
        ],
        "verified": true
      },
      {
        "id": "mpu-sda",
        "name": "SDA",
        "type": "i2c",
        "pos": [
          0.06,
          0.02,
          0.08
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "bmp280",
    "name": "BMP280 Barometer",
    "category_id": 2,
    "category": "Sensors",
    "dimensions": {
      "length": 15,
      "width": 12,
      "height": 3,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V",
    "description": "Precision digital barometric pressure and altitude.",
    "pins": [
      {
        "id": "bmp-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.04,
          0.015,
          0.06
        ],
        "verified": true
      },
      {
        "id": "bmp-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          -0.01,
          0.015,
          0.06
        ],
        "verified": true
      },
      {
        "id": "bmp-scl",
        "name": "SCL",
        "type": "i2c",
        "pos": [
          0.02,
          0.015,
          0.06
        ],
        "verified": true
      },
      {
        "id": "bmp-sda",
        "name": "SDA",
        "type": "i2c",
        "pos": [
          0.05,
          0.015,
          0.06
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "soil-moisture",
    "name": "Soil Moisture Sensor",
    "category_id": 2,
    "category": "Sensors",
    "dimensions": {
      "length": 60,
      "width": 20,
      "height": 7,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V - 5V",
    "description": "Resistive probe fork soil moisture sensor.",
    "pins": [
      {
        "id": "soil-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.04,
          0.02,
          0.18
        ],
        "verified": true
      },
      {
        "id": "soil-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0,
          0.02,
          0.18
        ],
        "verified": true
      },
      {
        "id": "soil-sig",
        "name": "AOUT",
        "type": "analog",
        "pos": [
          0.04,
          0.02,
          0.18
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "mq2-gas",
    "name": "MQ-2 Gas Sensor",
    "category_id": 2,
    "category": "Sensors",
    "dimensions": {
      "length": 32,
      "width": 20,
      "height": 22,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "LPG, smoke, methane, butane, alcohol detector.",
    "pins": [
      {
        "id": "mq2-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.06,
          0.02,
          0.12
        ],
        "verified": true
      },
      {
        "id": "mq2-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          -0.02,
          0.02,
          0.12
        ],
        "verified": true
      },
      {
        "id": "mq2-dout",
        "name": "DOUT",
        "type": "digital",
        "pos": [
          0.02,
          0.02,
          0.12
        ],
        "verified": true
      },
      {
        "id": "mq2-aout",
        "name": "AOUT",
        "type": "analog",
        "pos": [
          0.06,
          0.02,
          0.12
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "rain-sensor",
    "name": "Rain Drop Sensor",
    "category_id": 2,
    "category": "Sensors",
    "dimensions": {
      "length": 54,
      "width": 40,
      "height": 2,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V - 5V",
    "description": "Nickel-coated rainfall surface sensor.",
    "pins": [
      {
        "id": "rain-p1",
        "name": "Terminal A",
        "type": "analog",
        "pos": [
          -0.05,
          0.01,
          0.15
        ],
        "verified": true
      },
      {
        "id": "rain-p2",
        "name": "Terminal B",
        "type": "analog",
        "pos": [
          0.05,
          0.01,
          0.15
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "sound-sensor",
    "name": "Sound Sensor Module",
    "category_id": 2,
    "category": "Sensors",
    "dimensions": {
      "length": 38,
      "width": 16,
      "height": 10,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V - 5V",
    "description": "Microphone sound acoustic detector.",
    "pins": [
      {
        "id": "snd-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.04,
          0.02,
          0.1
        ],
        "verified": true
      },
      {
        "id": "snd-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0,
          0.02,
          0.1
        ],
        "verified": true
      },
      {
        "id": "snd-out",
        "name": "OUT",
        "type": "digital",
        "pos": [
          0.04,
          0.02,
          0.1
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "flame-sensor",
    "name": "Flame Sensor",
    "category_id": 2,
    "category": "Sensors",
    "dimensions": {
      "length": 35,
      "width": 15,
      "height": 8,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V - 5V",
    "description": "IR photodiode fire and flame detector.",
    "pins": [
      {
        "id": "flm-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.04,
          0.02,
          0.1
        ],
        "verified": true
      },
      {
        "id": "flm-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0,
          0.02,
          0.1
        ],
        "verified": true
      },
      {
        "id": "flm-out",
        "name": "OUT",
        "type": "digital",
        "pos": [
          0.04,
          0.02,
          0.1
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "hall-sensor",
    "name": "Hall Effect Sensor",
    "category_id": 2,
    "category": "Sensors",
    "dimensions": {
      "length": 28,
      "width": 15,
      "height": 6,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V - 5V",
    "description": "Magnetic field proximity detector.",
    "pins": [
      {
        "id": "hal-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.03,
          0.02,
          0.08
        ],
        "verified": true
      },
      {
        "id": "hal-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0,
          0.02,
          0.08
        ],
        "verified": true
      },
      {
        "id": "hal-sig",
        "name": "SIG",
        "type": "digital",
        "pos": [
          0.03,
          0.02,
          0.08
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "load-cell",
    "name": "Load Cell + HX711",
    "category_id": 2,
    "category": "Sensors",
    "dimensions": {
      "length": 80,
      "width": 13,
      "height": 13,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "Weight measurement bar with 24-bit ADC module.",
    "pins": [
      {
        "id": "lc-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.08,
          0.02,
          0.05
        ],
        "verified": true
      },
      {
        "id": "lc-dt",
        "name": "DT",
        "type": "digital",
        "pos": [
          -0.04,
          0.02,
          0.05
        ],
        "verified": true
      },
      {
        "id": "lc-sck",
        "name": "SCK",
        "type": "digital",
        "pos": [
          0.04,
          0.02,
          0.05
        ],
        "verified": true
      },
      {
        "id": "lc-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.08,
          0.02,
          0.05
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "ds18b20",
    "name": "DS18B20 Temp Probe",
    "category_id": 2,
    "category": "Sensors",
    "dimensions": {
      "length": 6,
      "width": 6,
      "height": 50,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.0V - 5.5V",
    "description": "Waterproof 1-Wire digital temperature sensor.",
    "pins": [
      {
        "id": "ds-gnd",
        "name": "Black (GND)",
        "type": "ground",
        "pos": [
          -0.03,
          0.01,
          0.15
        ],
        "verified": true
      },
      {
        "id": "ds-data",
        "name": "Yellow (DATA)",
        "type": "digital",
        "pos": [
          0,
          0.01,
          0.15
        ],
        "verified": true
      },
      {
        "id": "ds-vcc",
        "name": "Red (VCC)",
        "type": "power",
        "pos": [
          0.03,
          0.01,
          0.15
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "gps-module",
    "name": "GPS NEO-6M",
    "category_id": 2,
    "category": "Sensors",
    "dimensions": {
      "length": 36,
      "width": 26,
      "height": 8,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V - 5V",
    "description": "Satellite positioning receiver with ceramic patch.",
    "pins": [
      {
        "id": "gps-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          0.12,
          0.02,
          -0.06
        ],
        "verified": true
      },
      {
        "id": "gps-rx",
        "name": "RX",
        "type": "uart",
        "pos": [
          0.12,
          0.02,
          -0.02
        ],
        "verified": true
      },
      {
        "id": "gps-tx",
        "name": "TX",
        "type": "uart",
        "pos": [
          0.12,
          0.02,
          0.02
        ],
        "verified": true
      },
      {
        "id": "gps-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.12,
          0.02,
          0.06
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "oled-display",
    "name": "0.96\" OLED Display",
    "category_id": 3,
    "category": "Displays",
    "dimensions": {
      "length": 27,
      "width": 27,
      "height": 4,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V - 5V",
    "description": "128x64 I2C OLED screen.",
    "pins": [
      {
        "id": "oled-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          -0.1,
          0.055,
          -0.2
        ],
        "verified": true
      },
      {
        "id": "oled-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.033,
          0.055,
          -0.2
        ],
        "verified": true
      },
      {
        "id": "oled-scl",
        "name": "SCL",
        "type": "i2c",
        "pos": [
          0.033,
          0.055,
          -0.2
        ],
        "verified": true
      },
      {
        "id": "oled-sda",
        "name": "SDA",
        "type": "i2c",
        "pos": [
          0.1,
          0.055,
          -0.2
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "lcd-1602",
    "name": "16×2 Character LCD",
    "category_id": 3,
    "category": "Displays",
    "dimensions": {
      "length": 80,
      "width": 36,
      "height": 12,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "16x2 alphanumeric HD44780 LCD.",
    "pins": [
      {
        "id": "lcd-vss",
        "name": "VSS (GND)",
        "type": "ground",
        "pos": [
          -0.35,
          0.04,
          -0.15
        ],
        "verified": true
      },
      {
        "id": "lcd-vdd",
        "name": "VDD (5V)",
        "type": "power",
        "pos": [
          -0.3,
          0.04,
          -0.15
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "lcd-2004",
    "name": "20×4 Character LCD",
    "category_id": 3,
    "category": "Displays",
    "dimensions": {
      "length": 98,
      "width": 60,
      "height": 14,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "20x4 large alphanumeric LCD.",
    "pins": [
      {
        "id": "lcd20-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          -0.4,
          0.04,
          -0.2
        ],
        "verified": true
      },
      {
        "id": "lcd20-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.35,
          0.04,
          -0.2
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "7seg-4digit",
    "name": "4-Digit 7-Segment",
    "category_id": 3,
    "category": "Displays",
    "dimensions": {
      "length": 40,
      "width": 14,
      "height": 10,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "4-digit clock display with colon.",
    "pins": [
      {
        "id": "7seg-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.15,
          0.02,
          0.1
        ],
        "verified": true
      },
      {
        "id": "7seg-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.15,
          0.02,
          0.1
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "led-matrix-8x8",
    "name": "8×8 LED Matrix",
    "category_id": 3,
    "category": "Displays",
    "dimensions": {
      "length": 32,
      "width": 32,
      "height": 12,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "64 red LED array with MAX7219.",
    "pins": [
      {
        "id": "mat-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.1,
          0.02,
          0.15
        ],
        "verified": true
      },
      {
        "id": "mat-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.1,
          0.02,
          0.15
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "tft-display",
    "name": "TFT Color Display",
    "category_id": 3,
    "category": "Displays",
    "dimensions": {
      "length": 55,
      "width": 40,
      "height": 6,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V",
    "description": "Color SPI TFT graphical screen.",
    "pins": [
      {
        "id": "tft-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.15,
          0.02,
          0.2
        ],
        "verified": true
      },
      {
        "id": "tft-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.15,
          0.02,
          0.2
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "epaper-display",
    "name": "E-Paper Display",
    "category_id": 3,
    "category": "Displays",
    "dimensions": {
      "length": 60,
      "width": 30,
      "height": 3,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V",
    "description": "Ultra-low power bistable electronic ink display.",
    "pins": [
      {
        "id": "ep-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.15,
          0.02,
          0.15
        ],
        "verified": true
      },
      {
        "id": "ep-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.15,
          0.02,
          0.15
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "push-button",
    "name": "Push Button",
    "category_id": 4,
    "category": "Input",
    "dimensions": {
      "length": 12,
      "width": 12,
      "height": 7.3,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "12mm tactile momentary switch.",
    "pins": [
      {
        "id": "btn-1a",
        "name": "Pin 1A",
        "type": "digital",
        "pos": [
          -0.14,
          0.015,
          -0.12
        ],
        "verified": true
      },
      {
        "id": "btn-1b",
        "name": "Pin 1B",
        "type": "digital",
        "pos": [
          0.14,
          0.015,
          -0.12
        ],
        "verified": true
      },
      {
        "id": "btn-2a",
        "name": "Pin 2A",
        "type": "digital",
        "pos": [
          -0.14,
          0.015,
          0.12
        ],
        "verified": true
      },
      {
        "id": "btn-2b",
        "name": "Pin 2B",
        "type": "digital",
        "pos": [
          0.14,
          0.015,
          0.12
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "potentiometer",
    "name": "10kΩ Potentiometer",
    "category_id": 4,
    "category": "Input",
    "dimensions": {
      "length": 16,
      "width": 16,
      "height": 26,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V - 5V",
    "description": "Rotary analog variable resistor.",
    "pins": [
      {
        "id": "pot-vcc",
        "name": "VCC (1)",
        "type": "power",
        "pos": [
          -0.07,
          0.015,
          0.16
        ],
        "verified": true
      },
      {
        "id": "pot-sig",
        "name": "Wiper (2)",
        "type": "analog",
        "pos": [
          0,
          0.015,
          0.16
        ],
        "verified": true
      },
      {
        "id": "pot-gnd",
        "name": "GND (3)",
        "type": "ground",
        "pos": [
          0.07,
          0.015,
          0.16
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "rotary-encoder",
    "name": "Rotary Encoder",
    "category_id": 4,
    "category": "Input",
    "dimensions": {
      "length": 15,
      "width": 12,
      "height": 25,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "Incremental quadrature encoder with push switch.",
    "pins": [
      {
        "id": "enc-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          -0.06,
          0.02,
          0.1
        ],
        "verified": true
      },
      {
        "id": "enc-clk",
        "name": "CLK",
        "type": "digital",
        "pos": [
          -0.02,
          0.02,
          0.1
        ],
        "verified": true
      },
      {
        "id": "enc-dt",
        "name": "DT",
        "type": "digital",
        "pos": [
          0.02,
          0.02,
          0.1
        ],
        "verified": true
      },
      {
        "id": "enc-sw",
        "name": "SW",
        "type": "digital",
        "pos": [
          0.06,
          0.02,
          0.1
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "joystick-module",
    "name": "Analog Joystick",
    "category_id": 4,
    "category": "Input",
    "dimensions": {
      "length": 34,
      "width": 26,
      "height": 32,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "Dual-axis XY potentiometer with thumb button.",
    "pins": [
      {
        "id": "joy-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          -0.08,
          0.02,
          0.14
        ],
        "verified": true
      },
      {
        "id": "joy-5v",
        "name": "5V",
        "type": "power",
        "pos": [
          -0.04,
          0.02,
          0.14
        ],
        "verified": true
      },
      {
        "id": "joy-vrx",
        "name": "VRX",
        "type": "analog",
        "pos": [
          0,
          0.02,
          0.14
        ],
        "verified": true
      },
      {
        "id": "joy-vry",
        "name": "VRY",
        "type": "analog",
        "pos": [
          0.04,
          0.02,
          0.14
        ],
        "verified": true
      },
      {
        "id": "joy-sw",
        "name": "SW",
        "type": "digital",
        "pos": [
          0.08,
          0.02,
          0.14
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "keypad-4x4",
    "name": "4×4 Matrix Keypad",
    "category_id": 4,
    "category": "Input",
    "dimensions": {
      "length": 69,
      "width": 77,
      "height": 2,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "16-key membrane keypad matrix.",
    "pins": [
      {
        "id": "pad-r1",
        "name": "Row 1",
        "type": "digital",
        "pos": [
          -0.15,
          0.01,
          0.25
        ],
        "verified": true
      },
      {
        "id": "pad-c1",
        "name": "Col 1",
        "type": "digital",
        "pos": [
          0.15,
          0.01,
          0.25
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "slide-switch",
    "name": "Slide Switch",
    "category_id": 4,
    "category": "Input",
    "dimensions": {
      "length": 15,
      "width": 6,
      "height": 8,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "SPDT miniature slide switch.",
    "pins": [
      {
        "id": "sld-1",
        "name": "Terminal 1",
        "type": "digital",
        "pos": [
          -0.04,
          0.015,
          0
        ],
        "verified": true
      },
      {
        "id": "sld-com",
        "name": "Common",
        "type": "digital",
        "pos": [
          0,
          0.015,
          0
        ],
        "verified": true
      },
      {
        "id": "sld-2",
        "name": "Terminal 2",
        "type": "digital",
        "pos": [
          0.04,
          0.015,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "toggle-switch",
    "name": "Toggle Switch",
    "category_id": 4,
    "category": "Input",
    "dimensions": {
      "length": 13,
      "width": 8,
      "height": 28,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "Heavy duty metal bat toggle switch.",
    "pins": [
      {
        "id": "tog-1",
        "name": "Pin 1",
        "type": "digital",
        "pos": [
          0,
          0.02,
          -0.06
        ],
        "verified": true
      },
      {
        "id": "tog-2",
        "name": "Pin 2",
        "type": "digital",
        "pos": [
          0,
          0.02,
          0.06
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "tactile-switch",
    "name": "Tactile Switch 6mm",
    "category_id": 4,
    "category": "Input",
    "dimensions": {
      "length": 6,
      "width": 6,
      "height": 5,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "Micro tactile button.",
    "pins": [
      {
        "id": "tac-1",
        "name": "Pin 1",
        "type": "digital",
        "pos": [
          -0.04,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "tac-2",
        "name": "Pin 2",
        "type": "digital",
        "pos": [
          0.04,
          0.01,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "touch-sensor",
    "name": "TTP223 Touch Sensor",
    "category_id": 4,
    "category": "Input",
    "dimensions": {
      "length": 15,
      "width": 11,
      "height": 3,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "2.5V - 5.5V",
    "description": "Capacitive touch switch button.",
    "pins": [
      {
        "id": "tch-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.03,
          0.02,
          0.08
        ],
        "verified": true
      },
      {
        "id": "tch-sig",
        "name": "SIG",
        "type": "digital",
        "pos": [
          0,
          0.02,
          0.08
        ],
        "verified": true
      },
      {
        "id": "tch-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.03,
          0.02,
          0.08
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "led-red",
    "name": "Red LED (5mm)",
    "category_id": 5,
    "category": "Output",
    "dimensions": {
      "length": 5,
      "width": 5,
      "height": 8.6,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "2.0V",
    "description": "Diffused 5mm red LED.",
    "pins": [
      {
        "id": "led-anode",
        "name": "Anode (+)",
        "type": "power",
        "pos": [
          -0.02,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "led-cathode",
        "name": "Cathode (-)",
        "type": "ground",
        "pos": [
          0.02,
          0.01,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "led-green",
    "name": "Green LED (5mm)",
    "category_id": 5,
    "category": "Output",
    "dimensions": {
      "length": 5,
      "width": 5,
      "height": 8.6,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "2.2V",
    "description": "Diffused 5mm green LED.",
    "pins": [
      {
        "id": "ledg-a",
        "name": "Anode (+)",
        "type": "power",
        "pos": [
          -0.02,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "ledg-k",
        "name": "Cathode (-)",
        "type": "ground",
        "pos": [
          0.02,
          0.01,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "led-blue",
    "name": "Blue LED (5mm)",
    "category_id": 5,
    "category": "Output",
    "dimensions": {
      "length": 5,
      "width": 5,
      "height": 8.6,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.2V",
    "description": "Diffused 5mm blue LED.",
    "pins": [
      {
        "id": "ledb-a",
        "name": "Anode (+)",
        "type": "power",
        "pos": [
          -0.02,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "ledb-k",
        "name": "Cathode (-)",
        "type": "ground",
        "pos": [
          0.02,
          0.01,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "led-rgb",
    "name": "RGB LED (4-Pin)",
    "category_id": 5,
    "category": "Output",
    "dimensions": {
      "length": 5,
      "width": 5,
      "height": 8.6,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "2.0V - 3.2V",
    "description": "Common cathode full-color RGB LED.",
    "pins": [
      {
        "id": "rgb-r",
        "name": "Red",
        "type": "power",
        "pos": [
          -0.03,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "rgb-gnd",
        "name": "Cathode (GND)",
        "type": "ground",
        "pos": [
          -0.01,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "rgb-g",
        "name": "Green",
        "type": "power",
        "pos": [
          0.01,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "rgb-b",
        "name": "Blue",
        "type": "power",
        "pos": [
          0.03,
          0.01,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "led-strip",
    "name": "WS2812B LED Strip",
    "category_id": 5,
    "category": "Output",
    "dimensions": {
      "length": 50,
      "width": 10,
      "height": 3,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "Addressable 5050 RGB LED strip ribbon.",
    "pins": [
      {
        "id": "str-5v",
        "name": "5V",
        "type": "power",
        "pos": [
          -0.2,
          0.01,
          -0.04
        ],
        "verified": true
      },
      {
        "id": "str-din",
        "name": "DIN",
        "type": "digital",
        "pos": [
          -0.2,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "str-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          -0.2,
          0.01,
          0.04
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "buzzer",
    "name": "Active Buzzer",
    "category_id": 5,
    "category": "Output",
    "dimensions": {
      "length": 12,
      "width": 12,
      "height": 9.5,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "Self-oscillating 5V active sounder.",
    "pins": [
      {
        "id": "buz-pos",
        "name": "Positive (+)",
        "type": "power",
        "pos": [
          -0.04,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "buz-neg",
        "name": "Negative (-)",
        "type": "ground",
        "pos": [
          0.04,
          0.01,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "buzzer-passive",
    "name": "Passive Buzzer",
    "category_id": 5,
    "category": "Output",
    "dimensions": {
      "length": 12,
      "width": 12,
      "height": 9.5,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V - 5V",
    "description": "PWM tone frequency audio transducer.",
    "pins": [
      {
        "id": "pbuz-1",
        "name": "Pin (+)",
        "type": "digital",
        "pos": [
          -0.04,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "pbuz-2",
        "name": "Pin (-)",
        "type": "ground",
        "pos": [
          0.04,
          0.01,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "piezo-speaker",
    "name": "Piezo Speaker Disc",
    "category_id": 5,
    "category": "Output",
    "dimensions": {
      "length": 27,
      "width": 27,
      "height": 2,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "Up to 30V",
    "description": "Brass resonant piezoelectric sound disc.",
    "pins": [
      {
        "id": "pzo-red",
        "name": "Red (+)",
        "type": "analog",
        "pos": [
          -0.05,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "pzo-blk",
        "name": "Black (-)",
        "type": "ground",
        "pos": [
          0.05,
          0.01,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "7seg-1digit",
    "name": "7-Segment Display",
    "category_id": 5,
    "category": "Output",
    "dimensions": {
      "length": 19,
      "width": 12.6,
      "height": 8,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "2.1V",
    "description": "1-digit 0.56\" common cathode display.",
    "pins": [
      {
        "id": "7s1-a",
        "name": "Segment A",
        "type": "digital",
        "pos": [
          -0.06,
          0.015,
          -0.1
        ],
        "verified": true
      },
      {
        "id": "7s1-com",
        "name": "Common",
        "type": "ground",
        "pos": [
          0,
          0.015,
          -0.1
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "servo-motor",
    "name": "SG90 Servo Motor",
    "category_id": 6,
    "category": "Actuators",
    "dimensions": {
      "length": 22.2,
      "width": 11.8,
      "height": 31,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "4.8V - 6V",
    "description": "9g micro servo motor 180° rotation.",
    "pins": [
      {
        "id": "srv-gnd",
        "name": "GND (Brown)",
        "type": "ground",
        "pos": [
          -0.015,
          0.02,
          0.26
        ],
        "verified": true
      },
      {
        "id": "srv-vcc",
        "name": "5V (Red)",
        "type": "power",
        "pos": [
          0,
          0.02,
          0.26
        ],
        "verified": true
      },
      {
        "id": "srv-sig",
        "name": "PWM (Orange)",
        "type": "digital",
        "pos": [
          0.015,
          0.02,
          0.26
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "servo-mg996r",
    "name": "MG996R Metal Servo",
    "category_id": 6,
    "category": "Actuators",
    "dimensions": {
      "length": 40.7,
      "width": 19.7,
      "height": 42.9,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "4.8V - 7.2V",
    "description": "High-torque metal gear standard servo.",
    "pins": [
      {
        "id": "mg-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          -0.02,
          0.03,
          0.3
        ],
        "verified": true
      },
      {
        "id": "mg-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          0,
          0.03,
          0.3
        ],
        "verified": true
      },
      {
        "id": "mg-sig",
        "name": "SIG",
        "type": "digital",
        "pos": [
          0.02,
          0.03,
          0.3
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "dc-motor",
    "name": "Brushed DC Motor",
    "category_id": 6,
    "category": "Actuators",
    "dimensions": {
      "length": 38,
      "width": 20,
      "height": 20,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3V - 6V",
    "description": "Mini high speed 130-size hobby DC motor.",
    "pins": [
      {
        "id": "mot-pos",
        "name": "Terminal (+)",
        "type": "power",
        "pos": [
          0.04,
          0.01,
          -0.12
        ],
        "verified": true
      },
      {
        "id": "mot-neg",
        "name": "Terminal (-)",
        "type": "ground",
        "pos": [
          -0.04,
          0.01,
          -0.12
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "tt-motor",
    "name": "TT Gear Motor",
    "category_id": 6,
    "category": "Actuators",
    "dimensions": {
      "length": 70,
      "width": 22,
      "height": 19,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3V - 6V",
    "description": "Dual-shaft yellow reduction gearbox motor.",
    "pins": [
      {
        "id": "tt-pos",
        "name": "Terminal (+)",
        "type": "power",
        "pos": [
          -0.08,
          0.02,
          0.05
        ],
        "verified": true
      },
      {
        "id": "tt-neg",
        "name": "Terminal (-)",
        "type": "ground",
        "pos": [
          0.08,
          0.02,
          0.05
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "28byj-stepper",
    "name": "28BYJ-48 Stepper",
    "category_id": 6,
    "category": "Actuators",
    "dimensions": {
      "length": 28,
      "width": 28,
      "height": 19,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "4-phase 5-wire unipolar reduction stepper.",
    "pins": [
      {
        "id": "byj-1",
        "name": "Coil 1",
        "type": "digital",
        "pos": [
          -0.06,
          0.02,
          0.12
        ],
        "verified": true
      },
      {
        "id": "byj-2",
        "name": "Coil 2",
        "type": "digital",
        "pos": [
          -0.03,
          0.02,
          0.12
        ],
        "verified": true
      },
      {
        "id": "byj-3",
        "name": "Coil 3",
        "type": "digital",
        "pos": [
          0,
          0.02,
          0.12
        ],
        "verified": true
      },
      {
        "id": "byj-4",
        "name": "Coil 4",
        "type": "digital",
        "pos": [
          0.03,
          0.02,
          0.12
        ],
        "verified": true
      },
      {
        "id": "byj-com",
        "name": "Common (+)",
        "type": "power",
        "pos": [
          0.06,
          0.02,
          0.12
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "nema17-stepper",
    "name": "NEMA 17 Stepper",
    "category_id": 6,
    "category": "Actuators",
    "dimensions": {
      "length": 42,
      "width": 42,
      "height": 40,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "12V",
    "description": "Bipolar hybrid 1.8° high-torque stepper.",
    "pins": [
      {
        "id": "nem-a1",
        "name": "Phase A+",
        "type": "digital",
        "pos": [
          -0.06,
          0.04,
          0.18
        ],
        "verified": true
      },
      {
        "id": "nem-a2",
        "name": "Phase A-",
        "type": "digital",
        "pos": [
          -0.02,
          0.04,
          0.18
        ],
        "verified": true
      },
      {
        "id": "nem-b1",
        "name": "Phase B+",
        "type": "digital",
        "pos": [
          0.02,
          0.04,
          0.18
        ],
        "verified": true
      },
      {
        "id": "nem-b2",
        "name": "Phase B-",
        "type": "digital",
        "pos": [
          0.06,
          0.04,
          0.18
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "bldc-motor",
    "name": "BLDC Motor",
    "category_id": 6,
    "category": "Actuators",
    "dimensions": {
      "length": 28,
      "width": 28,
      "height": 26,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "11.1V - 14.8V",
    "description": "Brushless DC outrunner drone motor.",
    "pins": [
      {
        "id": "bldc-u",
        "name": "Phase U",
        "type": "power",
        "pos": [
          -0.04,
          0.02,
          0.1
        ],
        "verified": true
      },
      {
        "id": "bldc-v",
        "name": "Phase V",
        "type": "power",
        "pos": [
          0,
          0.02,
          0.1
        ],
        "verified": true
      },
      {
        "id": "bldc-w",
        "name": "Phase W",
        "type": "power",
        "pos": [
          0.04,
          0.02,
          0.1
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "solenoid",
    "name": "12V Solenoid",
    "category_id": 6,
    "category": "Actuators",
    "dimensions": {
      "length": 30,
      "width": 13,
      "height": 15,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "12V",
    "description": "Linear push-pull electromagnetic actuator.",
    "pins": [
      {
        "id": "sol-pos",
        "name": "Positive (+)",
        "type": "power",
        "pos": [
          -0.03,
          0.015,
          0.08
        ],
        "verified": true
      },
      {
        "id": "sol-neg",
        "name": "Negative (-)",
        "type": "ground",
        "pos": [
          0.03,
          0.015,
          0.08
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "vibration-motor",
    "name": "Vibration Motor",
    "category_id": 6,
    "category": "Actuators",
    "dimensions": {
      "length": 10,
      "width": 10,
      "height": 3,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3V",
    "description": "Coin-type eccentric rotating mass haptic motor.",
    "pins": [
      {
        "id": "vib-pos",
        "name": "Red (+)",
        "type": "power",
        "pos": [
          -0.02,
          0.01,
          0.05
        ],
        "verified": true
      },
      {
        "id": "vib-neg",
        "name": "Blue (-)",
        "type": "ground",
        "pos": [
          0.02,
          0.01,
          0.05
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "cooling-fan",
    "name": "DC Cooling Fan",
    "category_id": 6,
    "category": "Actuators",
    "dimensions": {
      "length": 40,
      "width": 40,
      "height": 10,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V - 12V",
    "description": "4010 brushless DC fan.",
    "pins": [
      {
        "id": "fan-pos",
        "name": "Red (+)",
        "type": "power",
        "pos": [
          -0.03,
          0.01,
          0.12
        ],
        "verified": true
      },
      {
        "id": "fan-neg",
        "name": "Black (-)",
        "type": "ground",
        "pos": [
          0.03,
          0.01,
          0.12
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "resistor-220",
    "name": "220Ω Resistor",
    "category_id": 7,
    "category": "Passive Components",
    "dimensions": {
      "length": 6.5,
      "width": 2.3,
      "height": 2.3,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "220 Ohm 1/4W resistor.",
    "pins": [
      {
        "id": "res-p1",
        "name": "Pin 1",
        "type": "passive",
        "pos": [
          -0.175,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "res-p2",
        "name": "Pin 2",
        "type": "passive",
        "pos": [
          0.175,
          0.01,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "resistor-1k",
    "name": "1kΩ Resistor",
    "category_id": 7,
    "category": "Passive Components",
    "dimensions": {
      "length": 6.5,
      "width": 2.3,
      "height": 2.3,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "1k Ohm 1/4W resistor.",
    "pins": [
      {
        "id": "r1k-p1",
        "name": "Pin 1",
        "type": "passive",
        "pos": [
          -0.175,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "r1k-p2",
        "name": "Pin 2",
        "type": "passive",
        "pos": [
          0.175,
          0.01,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "resistor-10k",
    "name": "10kΩ Resistor",
    "category_id": 7,
    "category": "Passive Components",
    "dimensions": {
      "length": 6.5,
      "width": 2.3,
      "height": 2.3,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "10k Ohm 1/4W resistor.",
    "pins": [
      {
        "id": "r10k-p1",
        "name": "Pin 1",
        "type": "passive",
        "pos": [
          -0.175,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "r10k-p2",
        "name": "Pin 2",
        "type": "passive",
        "pos": [
          0.175,
          0.01,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "resistor-100k",
    "name": "100kΩ Resistor",
    "category_id": 7,
    "category": "Passive Components",
    "dimensions": {
      "length": 6.5,
      "width": 2.3,
      "height": 2.3,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "100k Ohm 1/4W resistor.",
    "pins": [
      {
        "id": "r100k-p1",
        "name": "Pin 1",
        "type": "passive",
        "pos": [
          -0.175,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "r100k-p2",
        "name": "Pin 2",
        "type": "passive",
        "pos": [
          0.175,
          0.01,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "cap-ceramic",
    "name": "Ceramic Capacitor 100nF",
    "category_id": 7,
    "category": "Passive Components",
    "dimensions": {
      "length": 5,
      "width": 2.5,
      "height": 7,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "50V",
    "description": "100nF (104) ceramic disc decoupling capacitor.",
    "pins": [
      {
        "id": "capc-1",
        "name": "Lead 1",
        "type": "passive",
        "pos": [
          -0.02,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "capc-2",
        "name": "Lead 2",
        "type": "passive",
        "pos": [
          0.02,
          0.01,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "cap-electrolytic",
    "name": "Electrolytic Cap 100µF",
    "category_id": 7,
    "category": "Passive Components",
    "dimensions": {
      "length": 6.3,
      "width": 6.3,
      "height": 11,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "25V",
    "description": "Radial aluminum electrolytic polarized capacitor.",
    "pins": [
      {
        "id": "cape-pos",
        "name": "Anode (+)",
        "type": "passive",
        "pos": [
          -0.02,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "cape-neg",
        "name": "Cathode (-)",
        "type": "passive",
        "pos": [
          0.02,
          0.01,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "inductor",
    "name": "Power Inductor 10µH",
    "category_id": 7,
    "category": "Passive Components",
    "dimensions": {
      "length": 8,
      "width": 8,
      "height": 10,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "Drum core wirewound power inductor.",
    "pins": [
      {
        "id": "ind-1",
        "name": "Pin 1",
        "type": "passive",
        "pos": [
          -0.03,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "ind-2",
        "name": "Pin 2",
        "type": "passive",
        "pos": [
          0.03,
          0.01,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "diode-rectifier",
    "name": "1N4007 Diode",
    "category_id": 7,
    "category": "Passive Components",
    "dimensions": {
      "length": 5.2,
      "width": 2.7,
      "height": 2.7,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "1000V / 1A",
    "description": "Standard recovery rectifier diode.",
    "pins": [
      {
        "id": "dio-a",
        "name": "Anode (+)",
        "type": "passive",
        "pos": [
          -0.15,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "dio-k",
        "name": "Cathode (-)",
        "type": "passive",
        "pos": [
          0.15,
          0.01,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "diode-zener",
    "name": "Zener Diode 5.1V",
    "category_id": 7,
    "category": "Passive Components",
    "dimensions": {
      "length": 4,
      "width": 2,
      "height": 2,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5.1V",
    "description": "Voltage regulation Zener diode.",
    "pins": [
      {
        "id": "zen-a",
        "name": "Anode",
        "type": "passive",
        "pos": [
          -0.12,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "zen-k",
        "name": "Cathode",
        "type": "passive",
        "pos": [
          0.12,
          0.01,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "trimpot",
    "name": "10kΩ Trimpot",
    "category_id": 7,
    "category": "Passive Components",
    "dimensions": {
      "length": 9.5,
      "width": 9.5,
      "height": 5,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "3386 single turn cermet trimmer.",
    "pins": [
      {
        "id": "trm-1",
        "name": "Terminal 1",
        "type": "passive",
        "pos": [
          -0.04,
          0.01,
          0.04
        ],
        "verified": true
      },
      {
        "id": "trm-2",
        "name": "Wiper",
        "type": "passive",
        "pos": [
          0,
          0.01,
          -0.04
        ],
        "verified": true
      },
      {
        "id": "trm-3",
        "name": "Terminal 3",
        "type": "passive",
        "pos": [
          0.04,
          0.01,
          0.04
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "thermistor",
    "name": "NTC Thermistor 10k",
    "category_id": 7,
    "category": "Passive Components",
    "dimensions": {
      "length": 5,
      "width": 3,
      "height": 30,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "Negative temperature coefficient bead.",
    "pins": [
      {
        "id": "ntc-1",
        "name": "Lead 1",
        "type": "passive",
        "pos": [
          -0.02,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "ntc-2",
        "name": "Lead 2",
        "type": "passive",
        "pos": [
          0.02,
          0.01,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "fuse-glass",
    "name": "Glass Fuse 5x20mm",
    "category_id": 7,
    "category": "Passive Components",
    "dimensions": {
      "length": 20,
      "width": 5,
      "height": 5,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "250V / 2A",
    "description": "Cartridge glass cylinder fuse.",
    "pins": [
      {
        "id": "fus-1",
        "name": "Cap 1",
        "type": "passive",
        "pos": [
          -0.1,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "fus-2",
        "name": "Cap 2",
        "type": "passive",
        "pos": [
          0.1,
          0.01,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "breadboard",
    "name": "830-Point Breadboard",
    "category_id": 8,
    "category": "Prototyping",
    "dimensions": {
      "length": 165,
      "width": 55,
      "height": 8.5,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "MB-102 full size solderless breadboard.",
    "pins": [
      {
        "id": "bb-vcc-t1",
        "name": "Top VCC (+)",
        "type": "power",
        "pos": [
          -0.7,
          0.045,
          -0.22
        ],
        "verified": true
      },
      {
        "id": "bb-gnd-t1",
        "name": "Top GND (-)",
        "type": "ground",
        "pos": [
          -0.7,
          0.045,
          -0.18
        ],
        "verified": true
      },
      {
        "id": "bb-vcc-t2",
        "name": "Top VCC (+)",
        "type": "power",
        "pos": [
          0.7,
          0.045,
          -0.22
        ],
        "verified": true
      },
      {
        "id": "bb-gnd-t2",
        "name": "Top GND (-)",
        "type": "ground",
        "pos": [
          0.7,
          0.045,
          -0.18
        ],
        "verified": true
      },
      {
        "id": "bb-gnd-b1",
        "name": "Bottom GND (-)",
        "type": "ground",
        "pos": [
          -0.7,
          0.045,
          0.18
        ],
        "verified": true
      },
      {
        "id": "bb-vcc-b1",
        "name": "Bottom VCC (+)",
        "type": "power",
        "pos": [
          -0.7,
          0.045,
          0.22
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "bb-400",
    "name": "400-Point Breadboard",
    "category_id": 8,
    "category": "Prototyping",
    "dimensions": {
      "length": 82,
      "width": 55,
      "height": 8.5,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "Half-size solderless breadboard with power rails.",
    "pins": [
      {
        "id": "bb4-vcc-t",
        "name": "Top VCC (+)",
        "type": "power",
        "pos": [
          0,
          0.045,
          -0.22
        ],
        "verified": true
      },
      {
        "id": "bb4-gnd-t",
        "name": "Top GND (-)",
        "type": "ground",
        "pos": [
          0,
          0.045,
          -0.18
        ],
        "verified": true
      },
      {
        "id": "bb4-gnd-b",
        "name": "Bottom GND (-)",
        "type": "ground",
        "pos": [
          0,
          0.045,
          0.18
        ],
        "verified": true
      },
      {
        "id": "bb4-vcc-b",
        "name": "Bottom VCC (+)",
        "type": "power",
        "pos": [
          0,
          0.045,
          0.22
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "bb-170",
    "name": "170-Point Mini Breadboard",
    "category_id": 8,
    "category": "Prototyping",
    "dimensions": {
      "length": 45,
      "width": 35,
      "height": 9.5,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "Mini solderless breadboard for shields.",
    "pins": [
      {
        "id": "bb17-a1",
        "name": "Pin A1",
        "type": "passive",
        "pos": [
          -0.15,
          0.045,
          -0.1
        ],
        "verified": true
      },
      {
        "id": "bb17-e1",
        "name": "Pin E1",
        "type": "passive",
        "pos": [
          0.15,
          0.045,
          0.1
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "perfboard",
    "name": "Perfboard Stripboard",
    "category_id": 8,
    "category": "Prototyping",
    "dimensions": {
      "length": 70,
      "width": 50,
      "height": 1.6,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "Copper dot prototyping circuit board.",
    "pins": [
      {
        "id": "pf-1",
        "name": "Corner A",
        "type": "passive",
        "pos": [
          -0.25,
          0.015,
          -0.15
        ],
        "verified": true
      },
      {
        "id": "pf-2",
        "name": "Corner B",
        "type": "passive",
        "pos": [
          0.25,
          0.015,
          0.15
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "prototype-pcb",
    "name": "Prototype Double-Sided PCB",
    "category_id": 8,
    "category": "Prototyping",
    "dimensions": {
      "length": 80,
      "width": 60,
      "height": 1.6,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "FR-4 plated through-hole prototype board.",
    "pins": [
      {
        "id": "pcb-1",
        "name": "Pin 1",
        "type": "passive",
        "pos": [
          -0.3,
          0.015,
          -0.2
        ],
        "verified": true
      },
      {
        "id": "pcb-2",
        "name": "Pin 2",
        "type": "passive",
        "pos": [
          0.3,
          0.015,
          0.2
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "jumper-mm",
    "name": "Male-Male Jumper Wires",
    "category_id": 8,
    "category": "Prototyping",
    "dimensions": {
      "length": 150,
      "width": 2,
      "height": 2,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "40pcs flexible male-to-male DuPont wire harness.",
    "pins": [
      {
        "id": "jmm-1",
        "name": "Tip 1",
        "type": "passive",
        "pos": [
          -0.2,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "jmm-2",
        "name": "Tip 2",
        "type": "passive",
        "pos": [
          0.2,
          0.01,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "jumper-mf",
    "name": "Male-Female Jumper Wires",
    "category_id": 8,
    "category": "Prototyping",
    "dimensions": {
      "length": 150,
      "width": 2,
      "height": 2,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "40pcs male-to-female DuPont ribbon cables.",
    "pins": [
      {
        "id": "jmf-1",
        "name": "Male Pin",
        "type": "passive",
        "pos": [
          -0.2,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "jmf-2",
        "name": "Female Socket",
        "type": "passive",
        "pos": [
          0.2,
          0.01,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "jumper-ff",
    "name": "Female-Female Jumper Wires",
    "category_id": 8,
    "category": "Prototyping",
    "dimensions": {
      "length": 150,
      "width": 2,
      "height": 2,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "40pcs female-to-female DuPont ribbon cables.",
    "pins": [
      {
        "id": "jff-1",
        "name": "Socket 1",
        "type": "passive",
        "pos": [
          -0.2,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "jff-2",
        "name": "Socket 2",
        "type": "passive",
        "pos": [
          0.2,
          0.01,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "pin-headers",
    "name": "40-Pin Header Strip",
    "category_id": 8,
    "category": "Prototyping",
    "dimensions": {
      "length": 101.6,
      "width": 2.54,
      "height": 8.5,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "2.54mm pitch breakable male pin header.",
    "pins": [
      {
        "id": "hdr-1",
        "name": "Pin 1",
        "type": "passive",
        "pos": [
          -0.3,
          0.03,
          0
        ],
        "verified": true
      },
      {
        "id": "hdr-40",
        "name": "Pin 40",
        "type": "passive",
        "pos": [
          0.3,
          0.03,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "ic-socket",
    "name": "16-Pin DIP IC Socket",
    "category_id": 8,
    "category": "Prototyping",
    "dimensions": {
      "length": 20.3,
      "width": 10,
      "height": 5,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "DIP-16 dual in-line IC socket.",
    "pins": [
      {
        "id": "skt-1",
        "name": "Pin 1",
        "type": "passive",
        "pos": [
          -0.15,
          0.02,
          -0.06
        ],
        "verified": true
      },
      {
        "id": "skt-16",
        "name": "Pin 16",
        "type": "passive",
        "pos": [
          -0.15,
          0.02,
          0.06
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "power-supply",
    "name": "5V Power Supply",
    "category_id": 9,
    "category": "Power",
    "dimensions": {
      "length": 53,
      "width": 32,
      "height": 18,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V / 3.3V",
    "description": "MB-102 Breadboard dual-voltage power module.",
    "pins": [
      {
        "id": "pwr-vcc1",
        "name": "VCC Out 1",
        "type": "power",
        "pos": [
          -0.22,
          0.01,
          0.14
        ],
        "verified": true
      },
      {
        "id": "pwr-gnd1",
        "name": "GND Out 1",
        "type": "ground",
        "pos": [
          -0.18,
          0.01,
          0.14
        ],
        "verified": true
      },
      {
        "id": "pwr-vcc2",
        "name": "VCC Out 2",
        "type": "power",
        "pos": [
          0.18,
          0.01,
          0.14
        ],
        "verified": true
      },
      {
        "id": "pwr-gnd2",
        "name": "GND Out 2",
        "type": "ground",
        "pos": [
          0.22,
          0.01,
          0.14
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "power-supply-3v3",
    "name": "3.3V Power Supply",
    "category_id": 9,
    "category": "Power",
    "dimensions": {
      "length": 40,
      "width": 25,
      "height": 15,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V",
    "description": "Dedicated regulated 3.3V power source.",
    "pins": [
      {
        "id": "pwr3-vcc",
        "name": "3.3V Out",
        "type": "power",
        "pos": [
          0.12,
          0.02,
          -0.05
        ],
        "verified": true
      },
      {
        "id": "pwr3-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.12,
          0.02,
          0.05
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "battery-9v",
    "name": "9V Battery",
    "category_id": 9,
    "category": "Power",
    "dimensions": {
      "length": 26.5,
      "width": 17.5,
      "height": 48.5,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "9V",
    "description": "9V PP3 alkaline battery with snap connectors.",
    "pins": [
      {
        "id": "bat-pos",
        "name": "Positive (+)",
        "type": "power",
        "pos": [
          -0.06,
          0.15,
          0
        ],
        "verified": true
      },
      {
        "id": "bat-neg",
        "name": "Negative (-)",
        "type": "ground",
        "pos": [
          0.06,
          0.15,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "battery-aa-pack",
    "name": "AA Battery Pack",
    "category_id": 9,
    "category": "Power",
    "dimensions": {
      "length": 58,
      "width": 32,
      "height": 15,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3V - 6V",
    "description": "Enclosed AA battery holder pack.",
    "pins": [
      {
        "id": "aa-pos",
        "name": "Positive (+)",
        "type": "power",
        "pos": [
          0.14,
          0.03,
          0.07
        ],
        "verified": true
      },
      {
        "id": "aa-neg",
        "name": "Negative (-)",
        "type": "ground",
        "pos": [
          -0.14,
          0.03,
          -0.07
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "battery-18650",
    "name": "Li-ion Battery 18650",
    "category_id": 9,
    "category": "Power",
    "dimensions": {
      "length": 65,
      "width": 18,
      "height": 18,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.7V",
    "description": "Rechargeable 18650 Lithium-Ion cell.",
    "pins": [
      {
        "id": "li-pos",
        "name": "Positive (+)",
        "type": "power",
        "pos": [
          0,
          0.035,
          0.18
        ],
        "verified": true
      },
      {
        "id": "li-neg",
        "name": "Negative (-)",
        "type": "ground",
        "pos": [
          0,
          0.035,
          -0.18
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "bb-power-module",
    "name": "Breadboard Power Module",
    "category_id": 9,
    "category": "Power",
    "dimensions": {
      "length": 53,
      "width": 32,
      "height": 20,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V / 5V",
    "description": "Pluggable breadboard regulator module.",
    "pins": [
      {
        "id": "bbp-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          0.18,
          0.02,
          0.1
        ],
        "verified": true
      },
      {
        "id": "bbp-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.22,
          0.02,
          0.1
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "lm2596-buck",
    "name": "LM2596 Buck Converter",
    "category_id": 9,
    "category": "Power",
    "dimensions": {
      "length": 43,
      "width": 21,
      "height": 14,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "1.25V - 30V",
    "description": "DC-DC step down switching regulator.",
    "pins": [
      {
        "id": "lm-in-pos",
        "name": "IN (+)",
        "type": "power",
        "pos": [
          -0.18,
          0.02,
          -0.08
        ],
        "verified": true
      },
      {
        "id": "lm-in-neg",
        "name": "IN (-)",
        "type": "ground",
        "pos": [
          -0.18,
          0.02,
          0.08
        ],
        "verified": true
      },
      {
        "id": "lm-out-pos",
        "name": "OUT (+)",
        "type": "power",
        "pos": [
          0.18,
          0.02,
          -0.08
        ],
        "verified": true
      },
      {
        "id": "lm-out-neg",
        "name": "OUT (-)",
        "type": "ground",
        "pos": [
          0.18,
          0.02,
          0.08
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "mt3608-boost",
    "name": "MT3608 Boost Converter",
    "category_id": 9,
    "category": "Power",
    "dimensions": {
      "length": 36,
      "width": 17,
      "height": 14,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "2V - 28V",
    "description": "DC-DC step up voltage booster.",
    "pins": [
      {
        "id": "mt-in-pos",
        "name": "VIN (+)",
        "type": "power",
        "pos": [
          -0.15,
          0.02,
          -0.06
        ],
        "verified": true
      },
      {
        "id": "mt-in-neg",
        "name": "VIN (-)",
        "type": "ground",
        "pos": [
          -0.15,
          0.02,
          0.06
        ],
        "verified": true
      },
      {
        "id": "mt-out-pos",
        "name": "VOUT (+)",
        "type": "power",
        "pos": [
          0.15,
          0.02,
          -0.06
        ],
        "verified": true
      },
      {
        "id": "mt-out-neg",
        "name": "VOUT (-)",
        "type": "ground",
        "pos": [
          0.15,
          0.02,
          0.06
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "tp4056-charger",
    "name": "TP4056 Li-Ion Charger",
    "category_id": 9,
    "category": "Power",
    "dimensions": {
      "length": 28,
      "width": 17,
      "height": 4,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V IN / 4.2V OUT",
    "description": "1A Lithium battery charger with USB-C.",
    "pins": [
      {
        "id": "tp-bat-pos",
        "name": "BAT (+)",
        "type": "power",
        "pos": [
          0.12,
          0.02,
          -0.06
        ],
        "verified": true
      },
      {
        "id": "tp-bat-neg",
        "name": "BAT (-)",
        "type": "ground",
        "pos": [
          0.12,
          0.02,
          0.06
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "ams1117-regulator",
    "name": "AMS1117 Regulator Module",
    "category_id": 9,
    "category": "Power",
    "dimensions": {
      "length": 22,
      "width": 11,
      "height": 4,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V / 5V",
    "description": "LDO linear voltage regulator breakout.",
    "pins": [
      {
        "id": "ams-vin",
        "name": "VIN",
        "type": "power",
        "pos": [
          -0.08,
          0.02,
          0
        ],
        "verified": true
      },
      {
        "id": "ams-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0,
          0.02,
          0
        ],
        "verified": true
      },
      {
        "id": "ams-vout",
        "name": "VOUT",
        "type": "power",
        "pos": [
          0.08,
          0.02,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "ground-terminal",
    "name": "Ground Terminal",
    "category_id": 9,
    "category": "Power",
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 18,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "0V (GND)",
    "description": "Chassis ground bus terminal block.",
    "pins": [
      {
        "id": "gnd-term-1",
        "name": "GND Terminal",
        "type": "ground",
        "pos": [
          0,
          0.01,
          0.06
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "rail-3v3",
    "name": "3.3V Rail",
    "category_id": 9,
    "category": "Power",
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 18,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V",
    "description": "Regulated 3.3V power distribution block.",
    "pins": [
      {
        "id": "vcc-3v3-1",
        "name": "3.3V Rail",
        "type": "power",
        "pos": [
          0,
          0.01,
          0.06
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "rail-5v",
    "name": "5V Rail",
    "category_id": 9,
    "category": "Power",
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 18,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "Regulated 5.0V power distribution block.",
    "pins": [
      {
        "id": "vcc-5v-1",
        "name": "5V Rail",
        "type": "power",
        "pos": [
          0,
          0.01,
          0.06
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "hc-05",
    "name": "HC-05 Bluetooth Module",
    "category_id": 10,
    "category": "Communication",
    "dimensions": {
      "length": 37,
      "width": 16,
      "height": 7,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V - 5V",
    "description": "Serial Bluetooth transceiver module.",
    "pins": [
      {
        "id": "hc-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          0.16,
          0.03,
          -0.04
        ],
        "verified": true
      },
      {
        "id": "hc-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.16,
          0.03,
          0
        ],
        "verified": true
      },
      {
        "id": "hc-tx",
        "name": "TXD",
        "type": "uart",
        "pos": [
          0.16,
          0.03,
          0.04
        ],
        "verified": true
      },
      {
        "id": "hc-rx",
        "name": "RXD",
        "type": "uart",
        "pos": [
          0.16,
          0.03,
          0.08
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "hc-06",
    "name": "HC-06 Bluetooth Slave",
    "category_id": 10,
    "category": "Communication",
    "dimensions": {
      "length": 37,
      "width": 16,
      "height": 7,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V - 5V",
    "description": "Dedicated slave Bluetooth wireless module.",
    "pins": [
      {
        "id": "hc6-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          0.16,
          0.03,
          -0.04
        ],
        "verified": true
      },
      {
        "id": "hc6-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.16,
          0.03,
          0
        ],
        "verified": true
      },
      {
        "id": "hc6-tx",
        "name": "TXD",
        "type": "uart",
        "pos": [
          0.16,
          0.03,
          0.04
        ],
        "verified": true
      },
      {
        "id": "hc6-rx",
        "name": "RXD",
        "type": "uart",
        "pos": [
          0.16,
          0.03,
          0.08
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "nrf24l01",
    "name": "NRF24L01+ 2.4GHz Transceiver",
    "category_id": 10,
    "category": "Communication",
    "dimensions": {
      "length": 29,
      "width": 15,
      "height": 12,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V",
    "description": "Ultra-low power 2.4GHz RF transceiver.",
    "pins": [
      {
        "id": "nrf-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.1,
          0.04,
          -0.02
        ],
        "verified": true
      },
      {
        "id": "nrf-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          0.1,
          0.04,
          0.02
        ],
        "verified": true
      },
      {
        "id": "nrf-ce",
        "name": "CE",
        "type": "digital",
        "pos": [
          0.13,
          0.04,
          -0.02
        ],
        "verified": true
      },
      {
        "id": "nrf-csn",
        "name": "CSN",
        "type": "spi",
        "pos": [
          0.13,
          0.04,
          0.02
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "lora-sx1278",
    "name": "LoRa SX1278 433MHz Module",
    "category_id": 10,
    "category": "Communication",
    "dimensions": {
      "length": 38,
      "width": 24,
      "height": 15,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V",
    "description": "Long-range wireless transceiver.",
    "pins": [
      {
        "id": "lora-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          0.16,
          0.02,
          -0.08
        ],
        "verified": true
      },
      {
        "id": "lora-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.16,
          0.02,
          0.08
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "esp-01",
    "name": "ESP-01 Wi-Fi Module",
    "category_id": 10,
    "category": "Communication",
    "dimensions": {
      "length": 24.8,
      "width": 14.3,
      "height": 11,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V",
    "description": "Compact ESP8266 serial Wi-Fi module.",
    "pins": [
      {
        "id": "esp01-3v3",
        "name": "3V3",
        "type": "power",
        "pos": [
          0.08,
          0.04,
          -0.02
        ],
        "verified": true
      },
      {
        "id": "esp01-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.08,
          0.04,
          0.02
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "sim800l",
    "name": "SIM800L GSM/GPRS Module",
    "category_id": 10,
    "category": "Communication",
    "dimensions": {
      "length": 25,
      "width": 23,
      "height": 7,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.7V - 4.2V",
    "description": "Cellular quad-band GSM/GPRS module.",
    "pins": [
      {
        "id": "sim-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          0.1,
          0.02,
          -0.08
        ],
        "verified": true
      },
      {
        "id": "sim-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.1,
          0.02,
          0.08
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "rfid-rc522",
    "name": "RFID RC522 Module",
    "category_id": 10,
    "category": "Communication",
    "dimensions": {
      "length": 60,
      "width": 40,
      "height": 6,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V",
    "description": "13.56MHz contactless RFID reader/writer.",
    "pins": [
      {
        "id": "rfid-3v3",
        "name": "3.3V",
        "type": "power",
        "pos": [
          0.2,
          0.02,
          -0.1
        ],
        "verified": true
      },
      {
        "id": "rfid-rst",
        "name": "RST",
        "type": "digital",
        "pos": [
          0.2,
          0.02,
          -0.05
        ],
        "verified": true
      },
      {
        "id": "rfid-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.2,
          0.02,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "nfc-pn532",
    "name": "NFC PN532 Module",
    "category_id": 10,
    "category": "Communication",
    "dimensions": {
      "length": 43,
      "width": 40,
      "height": 5,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V - 5V",
    "description": "Near Field Communication reader.",
    "pins": [
      {
        "id": "nfc-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          0.15,
          0.02,
          -0.08
        ],
        "verified": true
      },
      {
        "id": "nfc-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.15,
          0.02,
          0.08
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "max485",
    "name": "MAX485 RS-485 Breakout",
    "category_id": 10,
    "category": "Communication",
    "dimensions": {
      "length": 44,
      "width": 14,
      "height": 15,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "Differential RS-485 transceiver module.",
    "pins": [
      {
        "id": "m485-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          0.15,
          0.02,
          -0.04
        ],
        "verified": true
      },
      {
        "id": "m485-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.15,
          0.02,
          0.04
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "w5500-ethernet",
    "name": "W5500 SPI Ethernet Module",
    "category_id": 10,
    "category": "Communication",
    "dimensions": {
      "length": 55,
      "width": 28,
      "height": 18,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V - 5V",
    "description": "Hardwired TCP/IP SPI Ethernet controller.",
    "pins": [
      {
        "id": "w55-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          0.18,
          0.02,
          -0.08
        ],
        "verified": true
      },
      {
        "id": "w55-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.18,
          0.02,
          0.08
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "can-bus-module",
    "name": "CAN Bus MCP2515 Module",
    "category_id": 10,
    "category": "Communication",
    "dimensions": {
      "length": 44,
      "width": 28,
      "height": 14,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "SPI Controller CAN bus transceiver.",
    "pins": [
      {
        "id": "can-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          0.15,
          0.02,
          -0.06
        ],
        "verified": true
      },
      {
        "id": "can-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.15,
          0.02,
          0.06
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "ne555",
    "name": "NE555 Timer IC",
    "category_id": 11,
    "category": "ICs & Logic",
    "dimensions": {
      "length": 9.5,
      "width": 6.5,
      "height": 7,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "4.5V - 15V",
    "description": "Monolithic precision DIP-8 timer IC.",
    "pins": [
      {
        "id": "555-gnd",
        "name": "Pin 1 (GND)",
        "type": "ground",
        "pos": [
          -0.08,
          0.015,
          -0.07
        ],
        "verified": true
      },
      {
        "id": "555-vcc",
        "name": "Pin 8 (VCC)",
        "type": "power",
        "pos": [
          -0.08,
          0.015,
          0.07
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "lm358",
    "name": "LM358 Dual Op-Amp",
    "category_id": 11,
    "category": "ICs & Logic",
    "dimensions": {
      "length": 9.5,
      "width": 6.5,
      "height": 7,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3V - 32V",
    "description": "Low power dual operational amplifier.",
    "pins": [
      {
        "id": "358-gnd",
        "name": "Pin 4 (GND)",
        "type": "ground",
        "pos": [
          0.08,
          0.015,
          -0.07
        ],
        "verified": true
      },
      {
        "id": "358-vcc",
        "name": "Pin 8 (VCC)",
        "type": "power",
        "pos": [
          -0.08,
          0.015,
          0.07
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "lm393",
    "name": "LM393 Dual Comparator",
    "category_id": 11,
    "category": "ICs & Logic",
    "dimensions": {
      "length": 9.5,
      "width": 6.5,
      "height": 7,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "2V - 36V",
    "description": "Precision voltage comparator.",
    "pins": [
      {
        "id": "393-gnd",
        "name": "Pin 4 (GND)",
        "type": "ground",
        "pos": [
          0.08,
          0.015,
          -0.07
        ],
        "verified": true
      },
      {
        "id": "393-vcc",
        "name": "Pin 8 (VCC)",
        "type": "power",
        "pos": [
          -0.08,
          0.015,
          0.07
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "74hc00",
    "name": "74HC00 Quad NAND",
    "category_id": 11,
    "category": "ICs & Logic",
    "dimensions": {
      "length": 19.5,
      "width": 6.5,
      "height": 7,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "2V - 6V",
    "description": "Quad 2-input NAND gate IC.",
    "pins": [
      {
        "id": "00-gnd",
        "name": "Pin 7 (GND)",
        "type": "ground",
        "pos": [
          0.15,
          0.015,
          -0.07
        ],
        "verified": true
      },
      {
        "id": "00-vcc",
        "name": "Pin 14 (VCC)",
        "type": "power",
        "pos": [
          -0.15,
          0.015,
          0.07
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "74hc04",
    "name": "74HC04 Hex Inverter",
    "category_id": 11,
    "category": "ICs & Logic",
    "dimensions": {
      "length": 19.5,
      "width": 6.5,
      "height": 7,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "2V - 6V",
    "description": "Hex inverter logic gate IC.",
    "pins": [
      {
        "id": "04-gnd",
        "name": "Pin 7 (GND)",
        "type": "ground",
        "pos": [
          0.15,
          0.015,
          -0.07
        ],
        "verified": true
      },
      {
        "id": "04-vcc",
        "name": "Pin 14 (VCC)",
        "type": "power",
        "pos": [
          -0.15,
          0.015,
          0.07
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "74hc595",
    "name": "74HC595 Shift Register",
    "category_id": 11,
    "category": "ICs & Logic",
    "dimensions": {
      "length": 19.5,
      "width": 6.5,
      "height": 7,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "2V - 6V",
    "description": "8-bit serial-in parallel-out shift register.",
    "pins": [
      {
        "id": "595-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.15,
          0.015,
          0.07
        ],
        "verified": true
      },
      {
        "id": "595-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.15,
          0.015,
          -0.07
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "cd4017",
    "name": "CD4017 Decade Counter",
    "category_id": 11,
    "category": "ICs & Logic",
    "dimensions": {
      "length": 19.5,
      "width": 6.5,
      "height": 7,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3V - 18V",
    "description": "Johnson decade counter with 10 decoded outputs.",
    "pins": [
      {
        "id": "4017-vcc",
        "name": "VDD",
        "type": "power",
        "pos": [
          -0.15,
          0.015,
          0.07
        ],
        "verified": true
      },
      {
        "id": "4017-gnd",
        "name": "VSS",
        "type": "ground",
        "pos": [
          0.15,
          0.015,
          -0.07
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "pc817",
    "name": "PC817 Optocoupler",
    "category_id": 11,
    "category": "ICs & Logic",
    "dimensions": {
      "length": 6.5,
      "width": 4.5,
      "height": 7,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5000Vrms Isol",
    "description": "Phototransistor optical isolator IC.",
    "pins": [
      {
        "id": "pc-anode",
        "name": "Anode",
        "type": "passive",
        "pos": [
          -0.04,
          0.015,
          -0.06
        ],
        "verified": true
      },
      {
        "id": "pc-col",
        "name": "Collector",
        "type": "passive",
        "pos": [
          -0.04,
          0.015,
          0.06
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "at24c256",
    "name": "AT24C256 I2C EEPROM",
    "category_id": 11,
    "category": "ICs & Logic",
    "dimensions": {
      "length": 9.5,
      "width": 6.5,
      "height": 7,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "1.8V - 5.5V",
    "description": "256Kbit I2C serial EEPROM.",
    "pins": [
      {
        "id": "at-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.08,
          0.015,
          0.07
        ],
        "verified": true
      },
      {
        "id": "at-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.08,
          0.015,
          -0.07
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "ds3231-rtc",
    "name": "DS3231 Precision RTC",
    "category_id": 11,
    "category": "ICs & Logic",
    "dimensions": {
      "length": 38,
      "width": 22,
      "height": 12,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V - 5.5V",
    "description": "Real-time clock with coin battery backup.",
    "pins": [
      {
        "id": "rtc-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          0.16,
          0.02,
          0.1
        ],
        "verified": true
      },
      {
        "id": "rtc-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.16,
          0.02,
          0.15
        ],
        "verified": true
      },
      {
        "id": "rtc-scl",
        "name": "SCL",
        "type": "i2c",
        "pos": [
          0.16,
          0.02,
          0
        ],
        "verified": true
      },
      {
        "id": "rtc-sda",
        "name": "SDA",
        "type": "i2c",
        "pos": [
          0.16,
          0.02,
          0.05
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "l293d",
    "name": "L293D Motor Driver IC",
    "category_id": 12,
    "category": "Motor Drivers",
    "dimensions": {
      "length": 19.5,
      "width": 6.5,
      "height": 7,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "4.5V - 36V",
    "description": "Quadruple high-current half-H driver DIP-16.",
    "pins": [
      {
        "id": "l293-vcc1",
        "name": "VCC1 (Logic)",
        "type": "power",
        "pos": [
          -0.15,
          0.015,
          0.07
        ],
        "verified": true
      },
      {
        "id": "l293-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0,
          0.015,
          -0.07
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "l298n",
    "name": "L298N Motor Driver Module",
    "category_id": 12,
    "category": "Motor Drivers",
    "dimensions": {
      "length": 43,
      "width": 43,
      "height": 27,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V - 35V",
    "description": "Dual H-Bridge with large black finned heatsink.",
    "pins": [
      {
        "id": "l298-12v",
        "name": "12V Power",
        "type": "power",
        "pos": [
          -0.06,
          0.04,
          0.18
        ],
        "verified": true
      },
      {
        "id": "l298-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0,
          0.04,
          0.18
        ],
        "verified": true
      },
      {
        "id": "l298-5v",
        "name": "5V Out",
        "type": "power",
        "pos": [
          0.06,
          0.04,
          0.18
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "tb6612fng",
    "name": "TB6612FNG Motor Driver",
    "category_id": 12,
    "category": "Motor Drivers",
    "dimensions": {
      "length": 20,
      "width": 20,
      "height": 3,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "2.5V - 13.5V",
    "description": "High-efficiency dual MOSFET motor driver.",
    "pins": [
      {
        "id": "tb-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.08,
          0.02,
          -0.08
        ],
        "verified": true
      },
      {
        "id": "tb-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.08,
          0.02,
          0.08
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "drv8833",
    "name": "DRV8833 Motor Driver",
    "category_id": 12,
    "category": "Motor Drivers",
    "dimensions": {
      "length": 18,
      "width": 15,
      "height": 3,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "2.7V - 10.8V",
    "description": "Dual H-Bridge low-voltage driver.",
    "pins": [
      {
        "id": "drv-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.07,
          0.02,
          -0.06
        ],
        "verified": true
      },
      {
        "id": "drv-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.07,
          0.02,
          0.06
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "a4988",
    "name": "A4988 Stepper Driver",
    "category_id": 12,
    "category": "Motor Drivers",
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 11,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "8V - 35V",
    "description": "Bipolar microstepping driver with heatsink.",
    "pins": [
      {
        "id": "a4988-step",
        "name": "STEP",
        "type": "digital",
        "pos": [
          -0.08,
          0.02,
          0.1
        ],
        "verified": true
      },
      {
        "id": "a4988-dir",
        "name": "DIR",
        "type": "digital",
        "pos": [
          -0.08,
          0.02,
          0.06
        ],
        "verified": true
      },
      {
        "id": "a4988-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.08,
          0.02,
          0.1
        ],
        "verified": true
      },
      {
        "id": "a4988-vdd",
        "name": "VDD",
        "type": "power",
        "pos": [
          0.08,
          0.02,
          0.06
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "drv8825",
    "name": "DRV8825 Stepper Driver",
    "category_id": 12,
    "category": "Motor Drivers",
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 11,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "8.2V - 45V",
    "description": "1/32 microstepping purple stepper driver.",
    "pins": [
      {
        "id": "d88-step",
        "name": "STEP",
        "type": "digital",
        "pos": [
          -0.08,
          0.02,
          0.1
        ],
        "verified": true
      },
      {
        "id": "d88-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.08,
          0.02,
          0.1
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "uln2003",
    "name": "ULN2003 Driver Board",
    "category_id": 12,
    "category": "Motor Drivers",
    "dimensions": {
      "length": 40,
      "width": 35,
      "height": 12,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V - 12V",
    "description": "Darlington transistor driver array with LEDs.",
    "pins": [
      {
        "id": "uln-5v",
        "name": "5V Power",
        "type": "power",
        "pos": [
          -0.15,
          0.02,
          0.1
        ],
        "verified": true
      },
      {
        "id": "uln-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          -0.15,
          0.02,
          0.14
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "bts7960",
    "name": "BTS7960 43A High Power Driver",
    "category_id": 12,
    "category": "Motor Drivers",
    "dimensions": {
      "length": 50,
      "width": 50,
      "height": 40,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "6V - 27V",
    "description": "High-current 43A dual H-Bridge motor driver.",
    "pins": [
      {
        "id": "bts-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          0.18,
          0.02,
          -0.1
        ],
        "verified": true
      },
      {
        "id": "bts-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.18,
          0.02,
          0.1
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "relay-module",
    "name": "1-Channel Relay Module",
    "category_id": 12,
    "category": "Motor Drivers",
    "dimensions": {
      "length": 50,
      "width": 26,
      "height": 18.5,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V / 250VAC 10A",
    "description": "Optocoupler isolated SPDT mechanical relay.",
    "pins": [
      {
        "id": "rel-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          0.14,
          0.02,
          -0.06
        ],
        "verified": true
      },
      {
        "id": "rel-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.14,
          0.02,
          0
        ],
        "verified": true
      },
      {
        "id": "rel-in",
        "name": "IN",
        "type": "digital",
        "pos": [
          0.14,
          0.02,
          0.06
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "mosfet-driver",
    "name": "Dual MOSFET Driver Module",
    "category_id": 12,
    "category": "Motor Drivers",
    "dimensions": {
      "length": 34,
      "width": 17,
      "height": 12,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V - 36V / 15A",
    "description": "High power PWM trigger switch drive.",
    "pins": [
      {
        "id": "mos-vin",
        "name": "VIN (+)",
        "type": "power",
        "pos": [
          -0.14,
          0.02,
          -0.06
        ],
        "verified": true
      },
      {
        "id": "mos-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          -0.14,
          0.02,
          0.06
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "robot-chassis",
    "name": "Robot Chassis 2WD",
    "category_id": 13,
    "category": "Robotics",
    "dimensions": {
      "length": 200,
      "width": 150,
      "height": 3,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "Acrylic 2WD smart car chassis platform.",
    "pins": [
      {
        "id": "chas-m1",
        "name": "Motor 1",
        "type": "passive",
        "pos": [
          -0.2,
          0.02,
          -0.15
        ],
        "verified": true
      },
      {
        "id": "chas-m2",
        "name": "Motor 2",
        "type": "passive",
        "pos": [
          0.2,
          0.02,
          -0.15
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "robot-wheel",
    "name": "Robot Wheels with Tire",
    "category_id": 13,
    "category": "Robotics",
    "dimensions": {
      "length": 65,
      "width": 65,
      "height": 26,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "High grip rubber tire wheel with yellow rim.",
    "pins": [
      {
        "id": "whl-axle",
        "name": "D-Shaft Hole",
        "type": "passive",
        "pos": [
          0,
          0.08,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "caster-wheel",
    "name": "Omnidirectional Caster",
    "category_id": 13,
    "category": "Robotics",
    "dimensions": {
      "length": 30,
      "width": 30,
      "height": 20,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "Steel ball bearing swivel caster.",
    "pins": [
      {
        "id": "cst-mount",
        "name": "Mount Screw",
        "type": "passive",
        "pos": [
          0,
          0.04,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "servo-bracket",
    "name": "Servo Aluminum Bracket",
    "category_id": 13,
    "category": "Robotics",
    "dimensions": {
      "length": 58,
      "width": 25,
      "height": 30,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "U-beam bracket for standard servos.",
    "pins": [
      {
        "id": "sbr-1",
        "name": "Hole A",
        "type": "passive",
        "pos": [
          -0.05,
          0.02,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "motor-mount",
    "name": "DC Motor Mount",
    "category_id": 13,
    "category": "Robotics",
    "dimensions": {
      "length": 30,
      "width": 25,
      "height": 25,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "Steel bracket for gear motors.",
    "pins": [
      {
        "id": "mm-1",
        "name": "Mount 1",
        "type": "passive",
        "pos": [
          0,
          0.02,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "robotic-arm",
    "name": "Robotic Arm 4-DOF",
    "category_id": 13,
    "category": "Robotics",
    "dimensions": {
      "length": 140,
      "width": 140,
      "height": 260,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V - 6V",
    "description": "Multi-axis articulated robot arm mechanism.",
    "pins": [
      {
        "id": "arm-srv1",
        "name": "Base Servo",
        "type": "digital",
        "pos": [
          0,
          0.02,
          0.12
        ],
        "verified": true
      },
      {
        "id": "arm-srv2",
        "name": "Shoulder Servo",
        "type": "digital",
        "pos": [
          0,
          0.02,
          -0.12
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "gripper",
    "name": "Mechanical Gripper Claw",
    "category_id": 13,
    "category": "Robotics",
    "dimensions": {
      "length": 100,
      "width": 80,
      "height": 40,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "Parallel clamping robot claw gripper.",
    "pins": [
      {
        "id": "grp-srv",
        "name": "Servo Gear",
        "type": "digital",
        "pos": [
          0,
          0.02,
          -0.06
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "gears",
    "name": "Plastic Gear Assortment",
    "category_id": 13,
    "category": "Robotics",
    "dimensions": {
      "length": 30,
      "width": 30,
      "height": 6,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "Reduction transmission pinion gears.",
    "pins": [
      {
        "id": "gear-bore",
        "name": "Shaft Center",
        "type": "passive",
        "pos": [
          0,
          0.02,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "bearings",
    "name": "Ball Bearings 608ZZ",
    "category_id": 13,
    "category": "Robotics",
    "dimensions": {
      "length": 22,
      "width": 22,
      "height": 7,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "Shielded carbon steel miniature ball bearings.",
    "pins": [
      {
        "id": "brg-center",
        "name": "Inner Bore 8mm",
        "type": "passive",
        "pos": [
          0,
          0.02,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "pan-tilt-bracket",
    "name": "Pan-Tilt Bracket",
    "category_id": 13,
    "category": "Robotics",
    "dimensions": {
      "length": 60,
      "width": 40,
      "height": 60,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "2-axis camera & sensor gimbal mount.",
    "pins": [
      {
        "id": "pt-pan",
        "name": "Pan Servo",
        "type": "digital",
        "pos": [
          0,
          0.02,
          0.08
        ],
        "verified": true
      },
      {
        "id": "pt-tilt",
        "name": "Tilt Servo",
        "type": "digital",
        "pos": [
          0,
          0.06,
          0.08
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "usb-a",
    "name": "USB-A Connector",
    "category_id": 14,
    "category": "Connectors & Wiring",
    "dimensions": {
      "length": 14,
      "width": 12,
      "height": 5,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "Standard USB-A female port.",
    "pins": [
      {
        "id": "usba-5v",
        "name": "VBUS (5V)",
        "type": "power",
        "pos": [
          -0.04,
          0.02,
          0.06
        ],
        "verified": true
      },
      {
        "id": "usba-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.04,
          0.02,
          0.06
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "usb-b",
    "name": "USB-B Connector",
    "category_id": 14,
    "category": "Connectors & Wiring",
    "dimensions": {
      "length": 16,
      "width": 12,
      "height": 11,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "Square USB-B port (Arduino UNO style).",
    "pins": [
      {
        "id": "usbb-5v",
        "name": "VBUS",
        "type": "power",
        "pos": [
          -0.04,
          0.02,
          0.08
        ],
        "verified": true
      },
      {
        "id": "usbb-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.04,
          0.02,
          0.08
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "usb-c",
    "name": "USB-C Receptacle",
    "category_id": 14,
    "category": "Connectors & Wiring",
    "dimensions": {
      "length": 9,
      "width": 8,
      "height": 3.2,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V - 20V",
    "description": "Reversible 24-pin USB Type-C socket.",
    "pins": [
      {
        "id": "usbc-vbus",
        "name": "VBUS",
        "type": "power",
        "pos": [
          -0.03,
          0.02,
          0.05
        ],
        "verified": true
      },
      {
        "id": "usbc-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.03,
          0.02,
          0.05
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "micro-usb",
    "name": "Micro USB Connector",
    "category_id": 14,
    "category": "Connectors & Wiring",
    "dimensions": {
      "length": 7.5,
      "width": 5.5,
      "height": 3,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "Micro USB Type-B SMD female socket.",
    "pins": [
      {
        "id": "musb-5v",
        "name": "5V",
        "type": "power",
        "pos": [
          -0.025,
          0.02,
          0.04
        ],
        "verified": true
      },
      {
        "id": "musb-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.025,
          0.02,
          0.04
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "dc-barrel-jack",
    "name": "DC Barrel Jack 5.5mm",
    "category_id": 14,
    "category": "Connectors & Wiring",
    "dimensions": {
      "length": 14,
      "width": 9,
      "height": 11,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "Up to 24V",
    "description": "2.1x5.5mm female DC barrel power jack.",
    "pins": [
      {
        "id": "dc-pos",
        "name": "Center (+)",
        "type": "power",
        "pos": [
          0.06,
          0.02,
          0
        ],
        "verified": true
      },
      {
        "id": "dc-neg",
        "name": "Outer (-)",
        "type": "ground",
        "pos": [
          -0.02,
          0.02,
          0.05
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "jst-xh",
    "name": "JST-XH Connector 2.54mm",
    "category_id": 14,
    "category": "Connectors & Wiring",
    "dimensions": {
      "length": 10,
      "width": 6,
      "height": 8,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "250V / 3A",
    "description": "White wire-to-board polarized housing.",
    "pins": [
      {
        "id": "xh-1",
        "name": "Pin 1",
        "type": "power",
        "pos": [
          -0.03,
          0.02,
          0
        ],
        "verified": true
      },
      {
        "id": "xh-2",
        "name": "Pin 2",
        "type": "ground",
        "pos": [
          0.03,
          0.02,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "jst-ph",
    "name": "JST-PH Connector 2.0mm",
    "category_id": 14,
    "category": "Connectors & Wiring",
    "dimensions": {
      "length": 8,
      "width": 5,
      "height": 7,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "100V / 2A",
    "description": "2.0mm pitch compact LiPo battery connector.",
    "pins": [
      {
        "id": "ph-pos",
        "name": "Red (+)",
        "type": "power",
        "pos": [
          -0.02,
          0.02,
          0
        ],
        "verified": true
      },
      {
        "id": "ph-neg",
        "name": "Black (-)",
        "type": "ground",
        "pos": [
          0.02,
          0.02,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "screw-terminal",
    "name": "Screw Terminal Block 2-Pin",
    "category_id": 14,
    "category": "Connectors & Wiring",
    "dimensions": {
      "length": 10,
      "width": 7.5,
      "height": 10,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "300V / 16A",
    "description": "5.08mm pitch PCB screw clamping terminal.",
    "pins": [
      {
        "id": "term-p1",
        "name": "Pin 1",
        "type": "passive",
        "pos": [
          0,
          0.04,
          -0.04
        ],
        "verified": true
      },
      {
        "id": "term-p2",
        "name": "Pin 2",
        "type": "passive",
        "pos": [
          0,
          0.04,
          0.04
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "dupont-connector",
    "name": "DuPont Connector 1-Pin",
    "category_id": 14,
    "category": "Connectors & Wiring",
    "dimensions": {
      "length": 14,
      "width": 2.5,
      "height": 2.5,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "Single wire black DuPont terminal housing.",
    "pins": [
      {
        "id": "dup-tip",
        "name": "Pin Terminal",
        "type": "passive",
        "pos": [
          0,
          0.02,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "rj45",
    "name": "RJ45 Modular Ethernet Jack",
    "category_id": 14,
    "category": "Connectors & Wiring",
    "dimensions": {
      "length": 16,
      "width": 16,
      "height": 13,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "8P8C shielded network receptacle with LEDs.",
    "pins": [
      {
        "id": "rj-tx",
        "name": "TX+",
        "type": "digital",
        "pos": [
          -0.05,
          0.04,
          -0.08
        ],
        "verified": true
      },
      {
        "id": "rj-rx",
        "name": "RX+",
        "type": "digital",
        "pos": [
          0.05,
          0.04,
          -0.08
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "banana-jack",
    "name": "Banana Jack 4mm",
    "category_id": 14,
    "category": "Connectors & Wiring",
    "dimensions": {
      "length": 12,
      "width": 12,
      "height": 22,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "30A",
    "description": "Insulated 4mm panel mount binding post socket.",
    "pins": [
      {
        "id": "ban-post",
        "name": "Post Terminal",
        "type": "power",
        "pos": [
          0,
          0.05,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "alligator-clips",
    "name": "Alligator Test Clips",
    "category_id": 14,
    "category": "Connectors & Wiring",
    "dimensions": {
      "length": 35,
      "width": 8,
      "height": 10,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5A",
    "description": "Serrated spring clamp with insulated boot.",
    "pins": [
      {
        "id": "alg-jaw",
        "name": "Clip Jaw",
        "type": "passive",
        "pos": [
          0.06,
          0.02,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "fuse-cartridge",
    "name": "Cartridge Fuse",
    "category_id": 15,
    "category": "Protection",
    "dimensions": {
      "length": 20,
      "width": 5,
      "height": 5,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "250V / 3A",
    "description": "Fast-blow glass cartridge fuse.",
    "pins": [
      {
        "id": "fuc-1",
        "name": "Cap 1",
        "type": "passive",
        "pos": [
          -0.08,
          0.015,
          0
        ],
        "verified": true
      },
      {
        "id": "fuc-2",
        "name": "Cap 2",
        "type": "passive",
        "pos": [
          0.08,
          0.015,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "fuse-ptc",
    "name": "PTC Resettable Fuse",
    "category_id": 15,
    "category": "Protection",
    "dimensions": {
      "length": 9,
      "width": 3,
      "height": 12,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "16V / 2.5A",
    "description": "Polymeric positive temperature coefficient fuse.",
    "pins": [
      {
        "id": "ptc-1",
        "name": "Terminal 1",
        "type": "passive",
        "pos": [
          -0.02,
          0.015,
          0
        ],
        "verified": true
      },
      {
        "id": "ptc-2",
        "name": "Terminal 2",
        "type": "passive",
        "pos": [
          0.02,
          0.015,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "tvs-diode",
    "name": "TVS Diode",
    "category_id": 15,
    "category": "Protection",
    "dimensions": {
      "length": 5,
      "width": 2.5,
      "height": 2.5,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "600W / 5V",
    "description": "Transient voltage suppression diode.",
    "pins": [
      {
        "id": "tvs-1",
        "name": "Pin 1",
        "type": "passive",
        "pos": [
          -0.1,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "tvs-2",
        "name": "Pin 2",
        "type": "passive",
        "pos": [
          0.1,
          0.01,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "esd-diode",
    "name": "ESD Protection Diode",
    "category_id": 15,
    "category": "Protection",
    "dimensions": {
      "length": 3,
      "width": 2,
      "height": 1.5,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "15kV ESD",
    "description": "Ultra low capacitance electrostatic protector.",
    "pins": [
      {
        "id": "esd-in",
        "name": "I/O",
        "type": "digital",
        "pos": [
          -0.03,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "esd-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.03,
          0.01,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "varistor-mov",
    "name": "MOV Varistor 14D471K",
    "category_id": 15,
    "category": "Protection",
    "dimensions": {
      "length": 14,
      "width": 4,
      "height": 18,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "300VAC",
    "description": "Metal Oxide Varistor surge suppressor disc.",
    "pins": [
      {
        "id": "mov-1",
        "name": "Lead 1",
        "type": "passive",
        "pos": [
          -0.025,
          0.02,
          0
        ],
        "verified": true
      },
      {
        "id": "mov-2",
        "name": "Lead 2",
        "type": "passive",
        "pos": [
          0.025,
          0.02,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "reverse-diode",
    "name": "Reverse-Polarity Diode",
    "category_id": 15,
    "category": "Protection",
    "dimensions": {
      "length": 6,
      "width": 3,
      "height": 3,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "50V / 3A",
    "description": "Schottky reverse protection barrier diode.",
    "pins": [
      {
        "id": "rdi-a",
        "name": "Anode",
        "type": "passive",
        "pos": [
          -0.12,
          0.01,
          0
        ],
        "verified": true
      },
      {
        "id": "rdi-k",
        "name": "Cathode",
        "type": "passive",
        "pos": [
          0.12,
          0.01,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "bms-protection",
    "name": "1S BMS Battery Protection",
    "category_id": 15,
    "category": "Protection",
    "dimensions": {
      "length": 26,
      "width": 14,
      "height": 3,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.7V / 3A",
    "description": "Lithium battery overcharge/discharge board.",
    "pins": [
      {
        "id": "bms-bp",
        "name": "B+ (Battery)",
        "type": "power",
        "pos": [
          -0.09,
          0.015,
          0
        ],
        "verified": true
      },
      {
        "id": "bms-bm",
        "name": "B- (Battery)",
        "type": "ground",
        "pos": [
          0.09,
          0.015,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "thermal-fuse",
    "name": "Thermal Fuse 130°C",
    "category_id": 15,
    "category": "Protection",
    "dimensions": {
      "length": 15,
      "width": 4,
      "height": 4,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "250V / 10A",
    "description": "Thermal cutoff temperature limit protector.",
    "pins": [
      {
        "id": "thf-1",
        "name": "Lead 1",
        "type": "passive",
        "pos": [
          -0.1,
          0.015,
          0
        ],
        "verified": true
      },
      {
        "id": "thf-2",
        "name": "Lead 2",
        "type": "passive",
        "pos": [
          0.1,
          0.015,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "digital-multimeter",
    "name": "Digital Multimeter",
    "category_id": 16,
    "category": "Measurement & Test",
    "dimensions": {
      "length": 138,
      "width": 69,
      "height": 31,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "9V Battery",
    "description": "Handheld digital multimeter with rotary dial.",
    "pins": [
      {
        "id": "dmm-v-ohm",
        "name": "V/Ω/mA (+)",
        "type": "analog",
        "pos": [
          -0.08,
          0.07,
          0.19
        ],
        "verified": true
      },
      {
        "id": "dmm-com",
        "name": "COM (-)",
        "type": "ground",
        "pos": [
          0,
          0.07,
          0.19
        ],
        "verified": true
      },
      {
        "id": "dmm-10a",
        "name": "10A Max",
        "type": "analog",
        "pos": [
          0.08,
          0.07,
          0.19
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "oscilloscope",
    "name": "Digital Oscilloscope",
    "category_id": 16,
    "category": "Measurement & Test",
    "dimensions": {
      "length": 300,
      "width": 150,
      "height": 120,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "100-240VAC",
    "description": "Dual-channel benchtop digital storage scope.",
    "pins": [
      {
        "id": "osc-ch1",
        "name": "Channel 1 BNC",
        "type": "analog",
        "pos": [
          -0.12,
          0.06,
          0.2
        ],
        "verified": true
      },
      {
        "id": "osc-ch2",
        "name": "Channel 2 BNC",
        "type": "analog",
        "pos": [
          0.12,
          0.06,
          0.2
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "logic-analyzer",
    "name": "24MHz 8-Channel Analyzer",
    "category_id": 16,
    "category": "Measurement & Test",
    "dimensions": {
      "length": 55,
      "width": 28,
      "height": 14,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "USB 5V",
    "description": "USB 8-channel digital logic signal analyzer.",
    "pins": [
      {
        "id": "la-ch0",
        "name": "CH0",
        "type": "digital",
        "pos": [
          -0.08,
          0.02,
          0.1
        ],
        "verified": true
      },
      {
        "id": "la-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.08,
          0.02,
          0.1
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "bench-power-supply",
    "name": "Bench Power Supply",
    "category_id": 16,
    "category": "Measurement & Test",
    "dimensions": {
      "length": 220,
      "width": 140,
      "height": 160,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "0-30V / 0-5A",
    "description": "Adjustable laboratory DC power supply.",
    "pins": [
      {
        "id": "bench-pos",
        "name": "Positive (+ Red)",
        "type": "power",
        "pos": [
          -0.1,
          0.045,
          0.25
        ],
        "verified": true
      },
      {
        "id": "bench-gnd",
        "name": "GND (Green)",
        "type": "ground",
        "pos": [
          0,
          0.045,
          0.25
        ],
        "verified": true
      },
      {
        "id": "bench-neg",
        "name": "Negative (- Black)",
        "type": "ground",
        "pos": [
          0.1,
          0.045,
          0.25
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "usb-power-meter",
    "name": "USB Power Meter",
    "category_id": 16,
    "category": "Measurement & Test",
    "dimensions": {
      "length": 60,
      "width": 25,
      "height": 12,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "4V - 30V / 5A",
    "description": "OLED USB voltage, current, and capacity monitor.",
    "pins": [
      {
        "id": "upm-in",
        "name": "USB Male In",
        "type": "power",
        "pos": [
          -0.15,
          0.02,
          0
        ],
        "verified": true
      },
      {
        "id": "upm-out",
        "name": "USB Female Out",
        "type": "power",
        "pos": [
          0.15,
          0.02,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "voltmeter-module",
    "name": "0.36\" LED Voltmeter",
    "category_id": 16,
    "category": "Measurement & Test",
    "dimensions": {
      "length": 30,
      "width": 12,
      "height": 10,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "DC 0V - 100V",
    "description": "3-wire miniature digital voltmeter panel meter.",
    "pins": [
      {
        "id": "vm-red",
        "name": "Power (+)",
        "type": "power",
        "pos": [
          -0.04,
          0.015,
          0.06
        ],
        "verified": true
      },
      {
        "id": "vm-blk",
        "name": "GND (-)",
        "type": "ground",
        "pos": [
          0,
          0.015,
          0.06
        ],
        "verified": true
      },
      {
        "id": "vm-yel",
        "name": "Measure (VIN)",
        "type": "analog",
        "pos": [
          0.04,
          0.015,
          0.06
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "ammeter-module",
    "name": "Digital Current Ammeter",
    "category_id": 16,
    "category": "Measurement & Test",
    "dimensions": {
      "length": 48,
      "width": 29,
      "height": 21,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "0-10A",
    "description": "Digital current shunt panel meter.",
    "pins": [
      {
        "id": "am-pos",
        "name": "IN (+)",
        "type": "analog",
        "pos": [
          -0.05,
          0.02,
          0.08
        ],
        "verified": true
      },
      {
        "id": "am-neg",
        "name": "OUT (-)",
        "type": "ground",
        "pos": [
          0.05,
          0.02,
          0.08
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "test-probes",
    "name": "Oscilloscope 100MHz Probes",
    "category_id": 16,
    "category": "Measurement & Test",
    "dimensions": {
      "length": 1200,
      "width": 15,
      "height": 15,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "600V Max",
    "description": "BNC to 1X/10X attenuation oscilloscope probe.",
    "pins": [
      {
        "id": "prb-tip",
        "name": "Probe Tip",
        "type": "analog",
        "pos": [
          0.1,
          0.02,
          0
        ],
        "verified": true
      },
      {
        "id": "prb-clip",
        "name": "Ground Alligator",
        "type": "ground",
        "pos": [
          -0.05,
          0.01,
          0.05
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "function-generator",
    "name": "DDS Function Generator",
    "category_id": 16,
    "category": "Measurement & Test",
    "dimensions": {
      "length": 140,
      "width": 80,
      "height": 40,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "9V - 12V",
    "description": "0-12MHz Sine, square, triangle wave signal source.",
    "pins": [
      {
        "id": "gen-out",
        "name": "Signal OUT",
        "type": "analog",
        "pos": [
          0.15,
          0.04,
          0.1
        ],
        "verified": true
      },
      {
        "id": "gen-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.15,
          0.04,
          -0.1
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "electret-mic",
    "name": "Electret Microphone",
    "category_id": 17,
    "category": "Audio",
    "dimensions": {
      "length": 9,
      "width": 9,
      "height": 7,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "2V - 10V",
    "description": "Omnidirectional aluminum audio capsule.",
    "pins": [
      {
        "id": "mic-pos",
        "name": "Mic (+)",
        "type": "analog",
        "pos": [
          -0.02,
          0.015,
          0
        ],
        "verified": true
      },
      {
        "id": "mic-neg",
        "name": "GND (-)",
        "type": "ground",
        "pos": [
          0.02,
          0.015,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "mems-mic",
    "name": "MEMS Microphone Breakout",
    "category_id": 17,
    "category": "Audio",
    "dimensions": {
      "length": 14,
      "width": 10,
      "height": 3,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "1.6V - 3.6V",
    "description": "Silicon analog acoustic MEMS sensor.",
    "pins": [
      {
        "id": "mems-vcc",
        "name": "VDD",
        "type": "power",
        "pos": [
          -0.04,
          0.015,
          0.04
        ],
        "verified": true
      },
      {
        "id": "mems-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0,
          0.015,
          0.04
        ],
        "verified": true
      },
      {
        "id": "mems-out",
        "name": "AUD",
        "type": "analog",
        "pos": [
          0.04,
          0.015,
          0.04
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "max9814",
    "name": "MAX9814 AGC Microphone",
    "category_id": 17,
    "category": "Audio",
    "dimensions": {
      "length": 25,
      "width": 14,
      "height": 8,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "2.7V - 5.5V",
    "description": "Auto gain control low noise microphone board.",
    "pins": [
      {
        "id": "9814-vcc",
        "name": "VDD",
        "type": "power",
        "pos": [
          -0.06,
          0.02,
          0.06
        ],
        "verified": true
      },
      {
        "id": "9814-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          -0.02,
          0.02,
          0.06
        ],
        "verified": true
      },
      {
        "id": "9814-out",
        "name": "MIC OUT",
        "type": "analog",
        "pos": [
          0.04,
          0.02,
          0.06
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "max4466",
    "name": "MAX4466 Adjustable Mic",
    "category_id": 17,
    "category": "Audio",
    "dimensions": {
      "length": 20,
      "width": 14,
      "height": 8,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "2.4V - 5.5V",
    "description": "Op-amp gain adjustable microphone amplifier.",
    "pins": [
      {
        "id": "4466-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.05,
          0.02,
          0.06
        ],
        "verified": true
      },
      {
        "id": "4466-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0,
          0.02,
          0.06
        ],
        "verified": true
      },
      {
        "id": "4466-out",
        "name": "OUT",
        "type": "analog",
        "pos": [
          0.05,
          0.02,
          0.06
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "pam8403-amp",
    "name": "PAM8403 Audio Amplifier",
    "category_id": 17,
    "category": "Audio",
    "dimensions": {
      "length": 30,
      "width": 21,
      "height": 15,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "2x3W Class-D stereo audio amp with volume knob.",
    "pins": [
      {
        "id": "amp-vcc",
        "name": "5V (+)",
        "type": "power",
        "pos": [
          0.12,
          0.02,
          -0.08
        ],
        "verified": true
      },
      {
        "id": "amp-gnd",
        "name": "GND (-)",
        "type": "ground",
        "pos": [
          0.12,
          0.02,
          -0.04
        ],
        "verified": true
      },
      {
        "id": "amp-rout",
        "name": "R OUT",
        "type": "analog",
        "pos": [
          0.12,
          0.02,
          0.04
        ],
        "verified": true
      },
      {
        "id": "amp-lout",
        "name": "L OUT",
        "type": "analog",
        "pos": [
          0.12,
          0.02,
          0.08
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "speaker-8ohm",
    "name": "8Ω Mini Dynamic Speaker",
    "category_id": 17,
    "category": "Audio",
    "dimensions": {
      "length": 40,
      "width": 40,
      "height": 12,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "0.5W - 2W",
    "description": "Paper/mylar cone miniature hobby speaker.",
    "pins": [
      {
        "id": "spk-pos",
        "name": "Positive (+)",
        "type": "analog",
        "pos": [
          -0.08,
          0.015,
          0
        ],
        "verified": true
      },
      {
        "id": "spk-neg",
        "name": "Negative (-)",
        "type": "ground",
        "pos": [
          0.08,
          0.015,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "buzzer-audio",
    "name": "Audio Annunciator Buzzer",
    "category_id": 17,
    "category": "Audio",
    "dimensions": {
      "length": 22,
      "width": 22,
      "height": 12,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "12V",
    "description": "High-decibel continuous alarm buzzer.",
    "pins": [
      {
        "id": "bza-pos",
        "name": "Positive (+)",
        "type": "power",
        "pos": [
          -0.04,
          0.015,
          0
        ],
        "verified": true
      },
      {
        "id": "bza-neg",
        "name": "Negative (-)",
        "type": "ground",
        "pos": [
          0.04,
          0.015,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "i2s-audio",
    "name": "I2S Audio DAC MAX98357A",
    "category_id": 17,
    "category": "Audio",
    "dimensions": {
      "length": 19,
      "width": 17,
      "height": 3,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "2.5V - 5.5V / 3.2W",
    "description": "Digital I2S audio mono amplifier breakout.",
    "pins": [
      {
        "id": "i2s-din",
        "name": "DIN",
        "type": "digital",
        "pos": [
          -0.06,
          0.015,
          0.06
        ],
        "verified": true
      },
      {
        "id": "i2s-bclk",
        "name": "BCLK",
        "type": "digital",
        "pos": [
          -0.02,
          0.015,
          0.06
        ],
        "verified": true
      },
      {
        "id": "i2s-lrc",
        "name": "LRC",
        "type": "digital",
        "pos": [
          0.02,
          0.015,
          0.06
        ],
        "verified": true
      },
      {
        "id": "i2s-vcc",
        "name": "VIN",
        "type": "power",
        "pos": [
          0.06,
          0.015,
          0.06
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "esp32-cam",
    "name": "ESP32-CAM Module",
    "category_id": 18,
    "category": "Camera & Imaging",
    "dimensions": {
      "length": 40,
      "width": 27,
      "height": 12,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "ESP32 board with OV2640 optical camera and TF slot.",
    "pins": [
      {
        "id": "cam-5v",
        "name": "5V",
        "type": "power",
        "pos": [
          -0.12,
          0.02,
          -0.18
        ],
        "verified": true
      },
      {
        "id": "cam-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          -0.12,
          0.02,
          -0.14
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "ov7670",
    "name": "OV7670 Camera Module",
    "category_id": 18,
    "category": "Camera & Imaging",
    "dimensions": {
      "length": 35,
      "width": 35,
      "height": 25,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V",
    "description": "VGA 640x480 CMOS image sensor with AL422 FIFO.",
    "pins": [
      {
        "id": "7670-3v3",
        "name": "3.3V",
        "type": "power",
        "pos": [
          -0.15,
          0.02,
          0.15
        ],
        "verified": true
      },
      {
        "id": "7670-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.15,
          0.02,
          0.15
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "ov2640",
    "name": "OV2640 2MP Camera",
    "category_id": 18,
    "category": "Camera & Imaging",
    "dimensions": {
      "length": 21,
      "width": 12,
      "height": 6,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V",
    "description": "2-Megapixel JPEG compression camera module.",
    "pins": [
      {
        "id": "2640-rib",
        "name": "FFC Interface",
        "type": "digital",
        "pos": [
          0,
          0.01,
          0.06
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "pi-camera",
    "name": "Raspberry Pi Camera V2",
    "category_id": 18,
    "category": "Camera & Imaging",
    "dimensions": {
      "length": 25,
      "width": 24,
      "height": 9,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V",
    "description": "8-Megapixel Sony IMX219 camera for Pi.",
    "pins": [
      {
        "id": "picam-ffc",
        "name": "CSI Ribbon Clip",
        "type": "digital",
        "pos": [
          0,
          0.02,
          0.11
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "usb-camera",
    "name": "USB Endoscope/Webcam",
    "category_id": 18,
    "category": "Camera & Imaging",
    "dimensions": {
      "length": 38,
      "width": 38,
      "height": 30,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "UVC driverless USB camera board with LEDs.",
    "pins": [
      {
        "id": "ucam-5v",
        "name": "USB VBUS",
        "type": "power",
        "pos": [
          -0.05,
          0.02,
          0
        ],
        "verified": true
      },
      {
        "id": "ucam-gnd",
        "name": "USB GND",
        "type": "ground",
        "pos": [
          0.05,
          0.02,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "thermal-camera",
    "name": "MLX90640 Thermal Camera",
    "category_id": 18,
    "category": "Camera & Imaging",
    "dimensions": {
      "length": 26,
      "width": 20,
      "height": 10,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V",
    "description": "32x24 IR array thermal imaging sensor.",
    "pins": [
      {
        "id": "thm-vcc",
        "name": "3V3",
        "type": "power",
        "pos": [
          -0.05,
          0.02,
          0.08
        ],
        "verified": true
      },
      {
        "id": "thm-scl",
        "name": "SCL",
        "type": "i2c",
        "pos": [
          -0.01,
          0.02,
          0.08
        ],
        "verified": true
      },
      {
        "id": "thm-sda",
        "name": "SDA",
        "type": "i2c",
        "pos": [
          0.02,
          0.02,
          0.08
        ],
        "verified": true
      },
      {
        "id": "thm-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.05,
          0.02,
          0.08
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "camera-lens",
    "name": "M12 Optical Lens Mount",
    "category_id": 18,
    "category": "Camera & Imaging",
    "dimensions": {
      "length": 14,
      "width": 14,
      "height": 15,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "N/A",
    "description": "CCTV board camera lens with IR cut filter.",
    "pins": [
      {
        "id": "lens-mnt",
        "name": "Thread Barrel",
        "type": "passive",
        "pos": [
          0,
          0.04,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "microsd-module",
    "name": "MicroSD Card SPI Module",
    "category_id": 19,
    "category": "Storage & Memory",
    "dimensions": {
      "length": 42,
      "width": 24,
      "height": 12,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V - 5V",
    "description": "SPI TF MicroSD card reader breakout.",
    "pins": [
      {
        "id": "sd-cs",
        "name": "CS",
        "type": "spi",
        "pos": [
          0.12,
          0.02,
          -0.08
        ],
        "verified": true
      },
      {
        "id": "sd-sck",
        "name": "SCK",
        "type": "spi",
        "pos": [
          0.12,
          0.02,
          -0.04
        ],
        "verified": true
      },
      {
        "id": "sd-mosi",
        "name": "MOSI",
        "type": "spi",
        "pos": [
          0.12,
          0.02,
          0
        ],
        "verified": true
      },
      {
        "id": "sd-miso",
        "name": "MISO",
        "type": "spi",
        "pos": [
          0.12,
          0.02,
          0.04
        ],
        "verified": true
      },
      {
        "id": "sd-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          0.12,
          0.02,
          0.08
        ],
        "verified": true
      },
      {
        "id": "sd-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.12,
          0.02,
          0.12
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "sd-card-reader",
    "name": "Full-Size SD Card Reader",
    "category_id": 19,
    "category": "Storage & Memory",
    "dimensions": {
      "length": 48,
      "width": 32,
      "height": 10,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V - 5V",
    "description": "Full size SD card socket breakout.",
    "pins": [
      {
        "id": "sdr-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          0.15,
          0.02,
          -0.08
        ],
        "verified": true
      },
      {
        "id": "sdr-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.15,
          0.02,
          0.08
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "eeprom-module",
    "name": "AT24C32 EEPROM Module",
    "category_id": 19,
    "category": "Storage & Memory",
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 4,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V - 5V",
    "description": "I2C non-volatile serial EEPROM storage.",
    "pins": [
      {
        "id": "eep-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.05,
          0.015,
          0.06
        ],
        "verified": true
      },
      {
        "id": "eep-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.05,
          0.015,
          0.06
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "spi-flash",
    "name": "W25Q128 SPI Flash 16MB",
    "category_id": 19,
    "category": "Storage & Memory",
    "dimensions": {
      "length": 14,
      "width": 12,
      "height": 4,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "2.7V - 3.6V",
    "description": "128M-bit high speed serial NOR Flash.",
    "pins": [
      {
        "id": "fls-cs",
        "name": "CS#",
        "type": "spi",
        "pos": [
          -0.04,
          0.015,
          0.04
        ],
        "verified": true
      },
      {
        "id": "fls-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          0.04,
          0.015,
          0.04
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "fram-module",
    "name": "MB85RC256V FRAM Module",
    "category_id": 19,
    "category": "Storage & Memory",
    "dimensions": {
      "length": 21,
      "width": 16,
      "height": 3,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V - 5V",
    "description": "High-endurance non-volatile ferroelectric RAM.",
    "pins": [
      {
        "id": "frm-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.06,
          0.015,
          0.06
        ],
        "verified": true
      },
      {
        "id": "frm-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.06,
          0.015,
          0.06
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "data-logger",
    "name": "Data Logging Shield",
    "category_id": 19,
    "category": "Storage & Memory",
    "dimensions": {
      "length": 68,
      "width": 53,
      "height": 20,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V",
    "description": "Real-time clock + SD card logging board.",
    "pins": [
      {
        "id": "dlog-5v",
        "name": "5V",
        "type": "power",
        "pos": [
          -0.18,
          0.04,
          0.2
        ],
        "verified": true
      },
      {
        "id": "dlog-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          -0.14,
          0.04,
          0.2
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "inductive-sensor",
    "name": "Inductive Proximity Sensor",
    "category_id": 20,
    "category": "Industrial Modules",
    "dimensions": {
      "length": 62,
      "width": 18,
      "height": 18,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "6V - 36V DC",
    "description": "LJ12A3-4-Z/BX M12 metal detector.",
    "pins": [
      {
        "id": "ind-bn",
        "name": "Brown (+V)",
        "type": "power",
        "pos": [
          -0.18,
          0.04,
          -0.04
        ],
        "verified": true
      },
      {
        "id": "ind-bl",
        "name": "Blue (0V)",
        "type": "ground",
        "pos": [
          -0.18,
          0.04,
          0
        ],
        "verified": true
      },
      {
        "id": "ind-bk",
        "name": "Black (Signal)",
        "type": "digital",
        "pos": [
          -0.18,
          0.04,
          0.04
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "capacitive-sensor",
    "name": "Capacitive Proximity Sensor",
    "category_id": 20,
    "category": "Industrial Modules",
    "dimensions": {
      "length": 65,
      "width": 18,
      "height": 18,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "6V - 36V DC",
    "description": "LJC18A3 non-contact liquid/object sensor.",
    "pins": [
      {
        "id": "cap-bn",
        "name": "Brown (+)",
        "type": "power",
        "pos": [
          -0.18,
          0.04,
          -0.04
        ],
        "verified": true
      },
      {
        "id": "cap-bl",
        "name": "Blue (-)",
        "type": "ground",
        "pos": [
          -0.18,
          0.04,
          0
        ],
        "verified": true
      },
      {
        "id": "cap-bk",
        "name": "Black (Out)",
        "type": "digital",
        "pos": [
          -0.18,
          0.04,
          0.04
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "industrial-relay",
    "name": "DIN Rail Industrial Relay",
    "category_id": 20,
    "category": "Industrial Modules",
    "dimensions": {
      "length": 78,
      "width": 27,
      "height": 65,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "24VDC / 250VAC 16A",
    "description": "Socketed industrial power relay Omron style.",
    "pins": [
      {
        "id": "ir-a1",
        "name": "Coil A1 (+)",
        "type": "power",
        "pos": [
          -0.1,
          0.03,
          -0.15
        ],
        "verified": true
      },
      {
        "id": "ir-a2",
        "name": "Coil A2 (-)",
        "type": "ground",
        "pos": [
          0.1,
          0.03,
          -0.15
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "plc-io-module",
    "name": "PLC I/O Expansion Module",
    "category_id": 20,
    "category": "Industrial Modules",
    "dimensions": {
      "length": 90,
      "width": 50,
      "height": 40,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "24V DC",
    "description": "Optoisolated industrial PLC input/output slice.",
    "pins": [
      {
        "id": "plc-24v",
        "name": "24V+",
        "type": "power",
        "pos": [
          -0.2,
          0.03,
          0.15
        ],
        "verified": true
      },
      {
        "id": "plc-0v",
        "name": "0V (COM)",
        "type": "ground",
        "pos": [
          0.2,
          0.03,
          0.15
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "4-20ma-module",
    "name": "4–20mA Current Transmitter",
    "category_id": 20,
    "category": "Industrial Modules",
    "dimensions": {
      "length": 45,
      "width": 25,
      "height": 15,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "12V - 32V",
    "description": "Current loop sensor signal conditioner.",
    "pins": [
      {
        "id": "ma-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          -0.15,
          0.02,
          0
        ],
        "verified": true
      },
      {
        "id": "ma-out",
        "name": "I-OUT",
        "type": "analog",
        "pos": [
          0.15,
          0.02,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "pressure-sensor",
    "name": "Industrial Pressure Transducer",
    "category_id": 20,
    "category": "Industrial Modules",
    "dimensions": {
      "length": 85,
      "width": 22,
      "height": 22,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "5V / 0.5-4.5V OUT",
    "description": "Stainless steel G1/4 pressure transducer.",
    "pins": [
      {
        "id": "prs-vcc",
        "name": "Red (5V)",
        "type": "power",
        "pos": [
          0,
          0.09,
          -0.02
        ],
        "verified": true
      },
      {
        "id": "prs-gnd",
        "name": "Black (GND)",
        "type": "ground",
        "pos": [
          0,
          0.09,
          0
        ],
        "verified": true
      },
      {
        "id": "prs-out",
        "name": "Yellow (Signal)",
        "type": "analog",
        "pos": [
          0,
          0.09,
          0.02
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "din-rail-terminal",
    "name": "DIN Rail Terminal UK-2.5B",
    "category_id": 20,
    "category": "Industrial Modules",
    "dimensions": {
      "length": 42.5,
      "width": 6.2,
      "height": 47,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "800V / 32A",
    "description": "Screw feed-through DIN terminal block.",
    "pins": [
      {
        "id": "din-t1",
        "name": "Terminal A",
        "type": "passive",
        "pos": [
          -0.12,
          0.04,
          0
        ],
        "verified": true
      },
      {
        "id": "din-t2",
        "name": "Terminal B",
        "type": "passive",
        "pos": [
          0.12,
          0.04,
          0
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "rs232-module",
    "name": "RS232 Serial DB9 Module",
    "category_id": 20,
    "category": "Industrial Modules",
    "dimensions": {
      "length": 45,
      "width": 32,
      "height": 14,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "3.3V - 5V",
    "description": "MAX3232 DB9 female serial communication.",
    "pins": [
      {
        "id": "232-vcc",
        "name": "VCC",
        "type": "power",
        "pos": [
          0.15,
          0.02,
          -0.06
        ],
        "verified": true
      },
      {
        "id": "232-rx",
        "name": "RXD",
        "type": "uart",
        "pos": [
          0.15,
          0.02,
          -0.02
        ],
        "verified": true
      },
      {
        "id": "232-tx",
        "name": "TXD",
        "type": "uart",
        "pos": [
          0.15,
          0.02,
          0.02
        ],
        "verified": true
      },
      {
        "id": "232-gnd",
        "name": "GND",
        "type": "ground",
        "pos": [
          0.15,
          0.02,
          0.06
        ],
        "verified": true
      }
    ]
  },
  {
    "id": "modbus-interface",
    "name": "Modbus RS485 Interface",
    "category_id": 20,
    "category": "Industrial Modules",
    "dimensions": {
      "length": 50,
      "width": 30,
      "height": 18,
      "unit": "mm"
    },
    "accuracy": "verified_cad",
    "model_type": "procedural_r3f",
    "status": "ready",
    "voltage": "12V - 24V",
    "description": "Industrial isolated Modbus RTU communication.",
    "pins": [
      {
        "id": "mb-a",
        "name": "A (+)",
        "type": "digital",
        "pos": [
          -0.15,
          0.02,
          -0.04
        ],
        "verified": true
      },
      {
        "id": "mb-b",
        "name": "B (-)",
        "type": "digital",
        "pos": [
          -0.15,
          0.02,
          0.04
        ],
        "verified": true
      }
    ]
  }
];
