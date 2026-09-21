import React from 'react';
import { Pin } from '../Pin';

export function CommunicationAll3D({ instanceId, selected, onClick, pins, type }) {
  // NRF24L01 2.4GHz RF Transceiver
  if (type === 'nrf24l01') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.04, 0]}>
            <boxGeometry args={[0.34, 0.08, 0.18]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Black PCB */}
        <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.3, 0.02, 0.15]} />
          <meshStandardMaterial color="#18181b" roughness={0.4} />
        </mesh>
        {/* Gold Meandering Trace Antenna */}
        <mesh position={[-0.1, 0.026, 0]}>
          <boxGeometry args={[0.08, 0.002, 0.12]} />
          <meshStandardMaterial color="#ca8a04" metalness={0.9} />
        </mesh>
        {/* NRF24L01+ QFN Chip */}
        <mesh position={[0.02, 0.028, 0]} castShadow>
          <boxGeometry args={[0.05, 0.01, 0.05]} />
          <meshStandardMaterial color="#09090b" />
        </mesh>
        {/* 16MHz Metal Crystal Can */}
        <mesh position={[0.02, 0.032, -0.04]} castShadow>
          <cylinderGeometry args={[0.015, 0.015, 0.04, 12]} rotation={[0, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.95} />
        </mesh>
        {/* 2x4 Female/Male Pin Header at right edge */}
        <mesh position={[0.11, 0.035, 0]} castShadow>
          <boxGeometry args={[0.04, 0.03, 0.08]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // HC-05 / HC-06 Bluetooth Module
  if (type === 'hc-05' || type === 'hc-06') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.04, 0]}>
            <boxGeometry args={[0.42, 0.08, 0.2]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Blue Carrier PCB */}
        <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.38, 0.02, 0.16]} />
          <meshStandardMaterial color="#0284c7" roughness={0.3} />
        </mesh>
        {/* Green Core Bluetooth Daughterboard */}
        <mesh position={[-0.04, 0.03, 0]} castShadow>
          <boxGeometry args={[0.26, 0.015, 0.14]} />
          <meshStandardMaterial color="#15803d" roughness={0.3} />
        </mesh>
        {/* Gold Meandering Bluetooth Antenna */}
        <mesh position={[-0.14, 0.038, 0]}>
          <boxGeometry args={[0.05, 0.002, 0.12]} />
          <meshStandardMaterial color="#ca8a04" metalness={0.9} />
        </mesh>
        {/* 6-Pin Right-Angle Header at bottom */}
        <mesh position={[0.17, 0.03, 0]} castShadow>
          <boxGeometry args={[0.03, 0.02, 0.12]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // LoRa SX1278 / SX1276 Long-Range Module
  if (type === 'lora-sx1278') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.05, 0]}>
            <boxGeometry args={[0.42, 0.1, 0.28]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Blue Breakout PCB */}
        <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.38, 0.02, 0.24]} />
          <meshStandardMaterial color="#0369a1" roughness={0.3} />
        </mesh>
        {/* Silver RF Metal Shielding Can (Ra-02) */}
        <mesh position={[-0.03, 0.035, 0]} castShadow>
          <boxGeometry args={[0.2, 0.02, 0.18]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.9} />
        </mesh>
        {/* Spring Coil Copper Antenna */}
        <mesh position={[-0.16, 0.06, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.02, 0.02, 0.08, 12]} />
          <meshStandardMaterial color="#d97706" metalness={0.8} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // ESP-01 Wi-Fi Module
  if (type === 'esp-01') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.04, 0]}>
            <boxGeometry args={[0.3, 0.08, 0.2]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Black PCB */}
        <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.26, 0.02, 0.16]} />
          <meshStandardMaterial color="#18181b" roughness={0.4} />
        </mesh>
        {/* Gold Inverted-F PCB Antenna */}
        <mesh position={[-0.08, 0.026, 0]}>
          <boxGeometry args={[0.07, 0.002, 0.13]} />
          <meshStandardMaterial color="#eab308" metalness={0.9} />
        </mesh>
        {/* ESP8266EX QFN Chip */}
        <mesh position={[0.02, 0.028, 0]} castShadow>
          <boxGeometry args={[0.06, 0.01, 0.06]} />
          <meshStandardMaterial color="#09090b" />
        </mesh>
        {/* 2x4 Male Header Block */}
        <mesh position={[0.09, 0.04, 0]} castShadow>
          <boxGeometry args={[0.04, 0.035, 0.08]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // SIM800L GSM/GPRS Cellular Module
  if (type === 'sim800l') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.04, 0]}>
            <boxGeometry args={[0.35, 0.08, 0.32]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Crimson Red PCB */}
        <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.3, 0.02, 0.28]} />
          <meshStandardMaterial color="#b91c1c" roughness={0.35} />
        </mesh>
        {/* Metal SIM800L Shielding Lid */}
        <mesh position={[0, 0.035, 0.02]} castShadow>
          <boxGeometry args={[0.18, 0.02, 0.16]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.9} />
        </mesh>
        {/* Gold IPEX Antenna Coaxial Connector */}
        <mesh position={[-0.1, 0.03, -0.09]}>
          <cylinderGeometry args={[0.015, 0.015, 0.01, 12]} />
          <meshStandardMaterial color="#eab308" metalness={0.95} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // RFID RC522 NFC Reader
  if (type === 'rfid-rc522') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.04, 0]}>
            <boxGeometry args={[0.5, 0.08, 0.4]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Deep Blue PCB */}
        <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.46, 0.02, 0.36]} />
          <meshStandardMaterial color="#0284c7" roughness={0.3} />
        </mesh>
        {/* Large Concentric PCB Trace Antenna Rings */}
        <mesh position={[-0.08, 0.026, 0]}>
          <boxGeometry args={[0.24, 0.002, 0.3]} />
          <meshStandardMaterial color="#ca8a04" metalness={0.8} roughness={0.2} wireframe />
        </mesh>
        {/* MFRC522 IC & 27.12MHz Crystal */}
        <mesh position={[0.12, 0.028, 0]} castShadow>
          <boxGeometry args={[0.06, 0.01, 0.06]} />
          <meshStandardMaterial color="#09090b" />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // W5500 Ethernet Module with RJ45 Jack
  if (type === 'w5500-ethernet') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.06, 0]}>
            <boxGeometry args={[0.48, 0.12, 0.3]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Blue PCB */}
        <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.44, 0.02, 0.26]} />
          <meshStandardMaterial color="#0369a1" roughness={0.3} />
        </mesh>
        {/* Metallic RJ45 MagJack Receptacle with LEDs */}
        <mesh position={[-0.1, 0.06, 0]} castShadow>
          <boxGeometry args={[0.18, 0.08, 0.16]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.9} />
        </mesh>
        {/* W5500 Hardwired TCP/IP SPI Chip */}
        <mesh position={[0.1, 0.028, 0]} castShadow>
          <boxGeometry args={[0.08, 0.012, 0.08]} />
          <meshStandardMaterial color="#18181b" />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // CAN Bus / MAX485 Default Communication Module
  return (
    <group onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.04, 0]}>
          <boxGeometry args={[0.44, 0.08, 0.25]} />
          <meshBasicMaterial color="#38bdf8" wireframe />
        </mesh>
      )}
      {/* Blue / Green PCB */}
      <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.4, 0.02, 0.22]} />
        <meshStandardMaterial color="#0284c7" roughness={0.3} />
      </mesh>
      {/* 2-Pin Blue/Green Screw Terminal */}
      <mesh position={[-0.14, 0.04, 0]} castShadow>
        <boxGeometry args={[0.08, 0.045, 0.1]} />
        <meshStandardMaterial color="#16a34a" />
      </mesh>
      {/* Transceiver IC */}
      <mesh position={[0.04, 0.028, 0]} castShadow>
        <boxGeometry args={[0.07, 0.012, 0.05]} />
        <meshStandardMaterial color="#18181b" />
      </mesh>
      {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
    </group>
  );
}
