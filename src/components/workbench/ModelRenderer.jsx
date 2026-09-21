import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import { Breadboard3D } from './models/Breadboard3D';
import { ESP323D } from './models/ESP323D';
import { Arduino3D } from './models/Arduino3D';
import { HCSR043D } from './models/HCSR043D';
import { DHT113D } from './models/DHT113D';
import { LED3D } from './models/LED3D';
import { Resistor3D } from './models/Resistor3D';
import { OLEDDisplay3D } from './models/OLEDDisplay3D';
import { Potentiometer3D } from './models/Potentiometer3D';
import { PushButton3D } from './models/PushButton3D';
import { ServoMotor3D } from './models/ServoMotor3D';
import { Buzzer3D } from './models/Buzzer3D';
import { LDR3D } from './models/LDR3D';
import { DCMotor3D } from './models/DCMotor3D';
import { PowerSupplyModule3D } from './models/PowerSupplyModule3D';
import { TerminalBlock3D } from './models/TerminalBlock3D';

// Comprehensive Category 3D Suites
import { Microcontrollers3D } from './models/Microcontrollers3D';
import { SensorsAll3D } from './models/SensorsAll3D';
import { DisplaysAll3D } from './models/DisplaysAll3D';
import { InputAll3D } from './models/InputAll3D';
import { OutputAll3D } from './models/OutputAll3D';
import { ActuatorsAll3D } from './models/ActuatorsAll3D';
import { PassivesAll3D } from './models/PassivesAll3D';
import { PrototypingAll3D } from './models/PrototypingAll3D';
import { PowerAll3D } from './models/PowerAll3D';
import { CommunicationAll3D } from './models/CommunicationAll3D';
import { ICsLogicAll3D } from './models/ICsLogicAll3D';
import { MotorDriversAll3D } from './models/MotorDriversAll3D';
import { RoboticsAll3D } from './models/RoboticsAll3D';
import { ConnectorsAll3D } from './models/ConnectorsAll3D';
import { ProtectionAll3D } from './models/ProtectionAll3D';
import { MeasurementAll3D } from './models/MeasurementAll3D';
import { AudioAll3D } from './models/AudioAll3D';
import { CameraAll3D } from './models/CameraAll3D';
import { StorageAll3D } from './models/StorageAll3D';
import { IndustrialAll3D } from './models/IndustrialAll3D';

import { Pin } from './Pin';

// GLTF External Model Loader with fallback
function GLTFModel({ assetPath, pins, instanceId }) {
  const { scene } = useGLTF(assetPath);
  return (
    <group>
      <primitive object={scene.clone()} />
      {pins &&
        pins.map((pin) => (
          <Pin
            key={pin.id}
            instanceId={instanceId}
            pinId={pin.id}
            name={pin.name}
            type={pin.type}
            position={pin.pos}
          />
        ))}
    </group>
  );
}

// Dimensional fallback mesh
function DimensionalMeshFallback({ componentId, dimensions, selected, pins, instanceId }) {
  const l = (dimensions?.length || 20) / 100;
  const w = (dimensions?.width || 20) / 100;
  const h = (dimensions?.height || 10) / 100;

  return (
    <group>
      {selected && (
        <mesh position={[0, h / 2, 0]}>
          <boxGeometry args={[l + 0.04, h + 0.04, w + 0.04]} />
          <meshBasicMaterial color="#38bdf8" wireframe />
        </mesh>
      )}
      <mesh position={[0, h / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[l, h, w]} />
        <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.3} />
      </mesh>
      {pins &&
        pins.map((pin) => (
          <Pin
            key={pin.id}
            instanceId={instanceId}
            pinId={pin.id}
            name={pin.name}
            type={pin.type}
            position={pin.pos}
          />
        ))}
    </group>
  );
}

export function ModelRenderer({ componentData, manifestMeta, selected, onClick }) {
  const id = componentData.componentId;
  const categoryId = manifestMeta?.category_id;

  const props = {
    instanceId: componentData.instanceId,
    selected: selected,
    onClick: onClick,
    pins: manifestMeta?.pins || [],
    type: id
  };

  // If component has external GLTF model
  if (manifestMeta?.model_type === 'gltf' && manifestMeta?.asset_path) {
    return (
      <Suspense fallback={<DimensionalMeshFallback {...props} dimensions={manifestMeta.dimensions} />}>
        <GLTFModel assetPath={manifestMeta.asset_path} {...props} />
      </Suspense>
    );
  }

  // 1. MICROCONTROLLERS
  if (id === 'arduino') return <Arduino3D {...props} />;
  if (id === 'esp32') return <ESP323D {...props} />;
  if (id === 'arduino-nano' || id === 'arduino-mega' || id === 'pico' || id === 'stm32-nucleo' || id === 'esp8266') {
    return <Microcontrollers3D {...props} />;
  }

  // 2. SENSORS
  if (id === 'hc-sr04') return <HCSR043D {...props} />;
  if (id === 'dht11') return <DHT113D {...props} />;
  if (id === 'ldr-sensor') return <LDR3D {...props} />;
  if (
    id === 'pir-sensor' ||
    id === 'mq2-gas' ||
    id === 'soil-moisture' ||
    id === 'gps-module' ||
    id === 'load-cell' ||
    id === 'dht22' ||
    categoryId === 2
  ) {
    return <SensorsAll3D {...props} />;
  }

  // 3. DISPLAYS
  if (id === 'oled-display') return <OLEDDisplay3D {...props} />;
  if (id === 'lcd-1602' || id === 'lcd-2004' || id === '7seg-4digit' || id === 'led-matrix-8x8' || categoryId === 3) {
    return <DisplaysAll3D {...props} />;
  }

  // 4. INPUT
  if (id === 'push-button') return <PushButton3D {...props} />;
  if (id === 'potentiometer') return <Potentiometer3D {...props} />;
  if (id === 'joystick-module' || id === 'rotary-encoder' || id === 'keypad-4x4' || id === 'toggle-switch' || categoryId === 4) {
    return <InputAll3D {...props} />;
  }

  // 5. OUTPUT
  if (id === 'led-red') return <LED3D {...props} />;
  if (id === 'buzzer') return <Buzzer3D {...props} />;
  if (id === '7seg-1digit' || id === 'led-strip' || id === 'led-rgb' || id === 'piezo-speaker' || id === 'led-green' || id === 'led-blue' || categoryId === 5) {
    return <OutputAll3D {...props} />;
  }

  // 6. ACTUATORS
  if (id === 'servo-motor') return <ServoMotor3D {...props} />;
  if (id === 'dc-motor') return <DCMotor3D {...props} />;
  if (id === 'nema17-stepper' || id === 'tt-motor' || id === '28byj-stepper' || id === 'cooling-fan' || categoryId === 6) {
    return <ActuatorsAll3D {...props} />;
  }

  // 7. PASSIVE COMPONENTS
  if (id === 'resistor-220') return <Resistor3D {...props} />;
  if (id.startsWith('resistor-')) return <Resistor3D {...props} />;
  if (id === 'cap-electrolytic' || id === 'cap-ceramic' || id === 'diode-rectifier' || id === 'fuse-glass' || categoryId === 7) {
    return <PassivesAll3D {...props} />;
  }

  // 8. PROTOTYPING
  if (id === 'breadboard') return <Breadboard3D {...props} />;
  if (id === 'bb-400' || id === 'bb-170' || id === 'perfboard' || id === 'prototype-pcb' || id === 'pin-headers' || id === 'ic-socket' || categoryId === 8) {
    return <PrototypingAll3D {...props} />;
  }

  // 9. POWER
  if (id === 'power-supply' || id === 'bb-power-module') return <PowerSupplyModule3D {...props} />;
  if (id === 'ground-terminal' || id === 'rail-3v3' || id === 'rail-5v') return <TerminalBlock3D {...props} type={id} />;
  if (id === 'battery-9v' || id === 'battery-aa-pack' || id === 'battery-18650' || id === 'lm2596-buck' || id === 'mt3608-boost' || id === 'tp4056-charger' || categoryId === 9) {
    return <PowerAll3D {...props} />;
  }

  // 10. COMMUNICATION
  if (categoryId === 10 || id === 'nrf24l01' || id === 'hc-05' || id === 'hc-06' || id === 'lora-sx1278' || id === 'esp-01' || id === 'sim800l' || id === 'rfid-rc522' || id === 'w5500-ethernet') {
    return <CommunicationAll3D {...props} />;
  }

  // 11. ICS & LOGIC
  if (categoryId === 11 || id === 'ne555' || id === 'lm358' || id === 'lm393' || id === '74hc00' || id === '74hc04' || id === '74hc595' || id === 'cd4017' || id === 'pc817' || id === 'ds3231-rtc') {
    return <ICsLogicAll3D {...props} />;
  }

  // 12. MOTOR DRIVERS
  if (categoryId === 12 || id === 'l298n' || id === 'a4988' || id === 'drv8825' || id === 'relay-module' || id === 'uln2003' || id === 'tb6612fng' || id === 'l293d') {
    return <MotorDriversAll3D {...props} />;
  }

  // 13. ROBOTICS
  if (categoryId === 13 || id === 'robotic-arm' || id === 'gripper' || id === 'robot-wheel' || id === 'robot-chassis') {
    return <RoboticsAll3D {...props} />;
  }

  // 14. CONNECTORS & WIRING
  if (categoryId === 14 || id === 'dc-barrel-jack' || id === 'screw-terminal' || id === 'alligator-clips' || id.startsWith('usb-')) {
    return <ConnectorsAll3D {...props} />;
  }

  // 15. PROTECTION
  if (categoryId === 15 || id === 'fuse-ptc' || id === 'varistor-mov' || id === 'bms-protection') {
    return <ProtectionAll3D {...props} />;
  }

  // 16. MEASUREMENT & TEST
  if (categoryId === 16 || id === 'digital-multimeter' || id === 'bench-power-supply' || id === 'voltmeter-module') {
    return <MeasurementAll3D {...props} />;
  }

  // 17. AUDIO
  if (categoryId === 17 || id === 'pam8403-amp' || id === 'speaker-8ohm' || id === 'electret-mic' || id === 'max4466') {
    return <AudioAll3D {...props} />;
  }

  // 18. CAMERA & IMAGING
  if (categoryId === 18 || id === 'esp32-cam' || id === 'pi-camera' || id === 'ov7670' || id === 'ov2640') {
    return <CameraAll3D {...props} />;
  }

  // 19. STORAGE & MEMORY
  if (categoryId === 19 || id === 'microsd-module' || id === 'spi-flash' || id === 'sd-card-reader') {
    return <StorageAll3D {...props} />;
  }

  // 20. INDUSTRIAL MODULES
  if (categoryId === 20 || id === 'inductive-sensor' || id === 'capacitive-sensor' || id === 'pressure-sensor' || id === 'rs232-module' || id === 'industrial-relay') {
    return <IndustrialAll3D {...props} />;
  }

  return <DimensionalMeshFallback {...props} dimensions={manifestMeta?.dimensions} />;
}
