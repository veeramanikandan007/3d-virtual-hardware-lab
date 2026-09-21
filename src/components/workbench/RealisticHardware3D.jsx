import React from 'react';
import * as THREE from 'three';

export function Breadboard3D({ position = [0, 0, 0], onClick, selected }) {
  return (
    <group position={position} onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.006, 0]}>
          <boxGeometry args={[0.226, 0.014, 0.086]} />
          <meshBasicMaterial color="#159C9C" wireframe />
        </mesh>
      )}

      {/* Plastic Cream/White Body with Bevel */}
      <mesh position={[0, 0.005, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.22, 0.01, 0.08]} />
        <meshStandardMaterial color="#F4F1EA" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Red Positive Power Line (Top & Bottom Rails) */}
      <mesh position={[0, 0.0101, -0.034]}>
        <planeGeometry args={[0.20, 0.0015]} rotation={[-Math.PI / 2, 0, 0]} />
        <meshBasicMaterial color="#E53E3E" />
      </mesh>
      <mesh position={[0, 0.0101, 0.034]}>
        <planeGeometry args={[0.20, 0.0015]} rotation={[-Math.PI / 2, 0, 0]} />
        <meshBasicMaterial color="#E53E3E" />
      </mesh>

      {/* Blue Negative Power Line (Top & Bottom Rails) */}
      <mesh position={[0, 0.0101, -0.031]}>
        <planeGeometry args={[0.20, 0.0015]} rotation={[-Math.PI / 2, 0, 0]} />
        <meshBasicMaterial color="#3182CE" />
      </mesh>
      <mesh position={[0, 0.0101, 0.031]}>
        <planeGeometry args={[0.20, 0.0015]} rotation={[-Math.PI / 2, 0, 0]} />
        <meshBasicMaterial color="#3182CE" />
      </mesh>

      {/* Central Division Channel */}
      <mesh position={[0, 0.0101, 0]}>
        <planeGeometry args={[0.21, 0.003]} rotation={[-Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#D1CCC0" roughness={0.5} />
      </mesh>

      {/* Side Mounting Notch Tabs */}
      <mesh position={[-0.111, 0.004, 0]}>
        <boxGeometry args={[0.004, 0.006, 0.02]} />
        <meshStandardMaterial color="#E2DEC9" />
      </mesh>
      <mesh position={[0.111, 0.004, 0]}>
        <boxGeometry args={[0.004, 0.006, 0.02]} />
        <meshStandardMaterial color="#E2DEC9" />
      </mesh>

      {/* Realistic Terminal Holes Grid */}
      <group position={[-0.095, 0.0102, 0]}>
        {Array.from({ length: 40 }).map((_, col) => {
          const xPos = col * 0.0048;
          return (
            <group key={col} position={[xPos, 0, 0]}>
              {/* Power Rail Holes (Top 2, Bottom 2) */}
              {[-0.034, -0.031, 0.031, 0.034].map((zPos, row) => (
                <mesh key={`rail-${row}`} position={[0, 0, zPos]} rotation={[-Math.PI / 2, 0, 0]}>
                  <planeGeometry args={[0.002, 0.002]} />
                  <meshBasicMaterial color="#2D3748" />
                </mesh>
              ))}

              {/* Main Board Holes (5 top, 5 bottom) */}
              {[-0.024, -0.019, -0.014, -0.009, -0.004, 0.004, 0.009, 0.014, 0.019, 0.024].map((zPos, row) => (
                <mesh key={`main-${row}`} position={[0, 0, zPos]} rotation={[-Math.PI / 2, 0, 0]}>
                  <planeGeometry args={[0.002, 0.002]} />
                  <meshBasicMaterial color="#1A202C" />
                </mesh>
              ))}
            </group>
          );
        })}
      </group>
    </group>
  );
}

export function Resistor3D({ position = [0, 0, 0], rotation = [0, 0, 0], selected = false, isError = false, onClick }) {
  return (
    <group position={position} rotation={rotation} onClick={onClick}>
      {/* Selection / Error Glow Box */}
      {selected && (
        <mesh position={[0, 0.012, 0]}>
          <boxGeometry args={[0.035, 0.018, 0.018]} />
          <meshBasicMaterial color="#159C9C" wireframe />
        </mesh>
      )}

      {/* Main Ceramic Body */}
      <mesh position={[0, 0.012, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.004, 0.004, 0.018, 16]} />
        <meshStandardMaterial color={isError ? "#FF4444" : "#D4B896"} roughness={0.4} />
      </mesh>

      {/* Color Code Bands */}
      {!isError && (
        <>
          <mesh position={[-0.005, 0.012, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.0041, 0.0041, 0.002, 16]} />
            <meshStandardMaterial color="#CC0000" />
          </mesh>
          <mesh position={[-0.002, 0.012, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.0041, 0.0041, 0.002, 16]} />
            <meshStandardMaterial color="#CC0000" />
          </mesh>
          <mesh position={[0.001, 0.012, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.0041, 0.0041, 0.002, 16]} />
            <meshStandardMaterial color="#663300" />
          </mesh>
          <mesh position={[0.005, 0.012, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.0041, 0.0041, 0.002, 16]} />
            <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
          </mesh>
        </>
      )}

      {/* Metal Leads */}
      <mesh position={[-0.015, 0.006, 0]}>
        <cylinderGeometry args={[0.0006, 0.0006, 0.014, 8]} />
        <meshStandardMaterial color="#CBD5E0" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[0.015, 0.006, 0]}>
        <cylinderGeometry args={[0.0006, 0.0006, 0.014, 8]} />
        <meshStandardMaterial color="#CBD5E0" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  );
}

export function LED3D({ position = [0, 0, 0], rotation = [0, 0, 0], color = "#FF0000", isPowered = true, selected = false, onClick }) {
  return (
    <group position={position} rotation={rotation} onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.018, 0]}>
          <cylinderGeometry args={[0.006, 0.006, 0.02, 16]} />
          <meshBasicMaterial color="#159C9C" wireframe />
        </mesh>
      )}

      {/* Diffused Dome Head */}
      <mesh position={[0, 0.02, 0]} castShadow>
        <sphereGeometry args={[0.0045, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={color} transparent opacity={0.85} emissive={isPowered ? color : "#000000"} emissiveIntensity={isPowered ? 1.5 : 0} />
      </mesh>

      {/* Cylindrical Base Collar */}
      <mesh position={[0, 0.014, 0]} castShadow>
        <cylinderGeometry args={[0.0045, 0.005, 0.01, 16]} />
        <meshStandardMaterial color={color} transparent opacity={0.85} emissive={isPowered ? color : "#000000"} emissiveIntensity={isPowered ? 1.2 : 0} />
      </mesh>

      {/* Anode & Cathode Legs */}
      <mesh position={[-0.0018, 0.005, 0]}>
        <cylinderGeometry args={[0.0005, 0.0005, 0.012, 8]} />
        <meshStandardMaterial color="#E2E8F0" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.0018, 0.004, 0]}>
        <cylinderGeometry args={[0.0005, 0.0005, 0.010, 8]} />
        <meshStandardMaterial color="#E2E8F0" metalness={0.9} roughness={0.1} />
      </mesh>

      {isPowered && (
        <pointLight position={[0, 0.02, 0]} color={color} intensity={1.8} distance={0.15} />
      )}
    </group>
  );
}

export function Capacitor3D({ position = [0, 0, 0], selected = false, onClick }) {
  return (
    <group position={position} onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.016, 0]}>
          <cylinderGeometry args={[0.006, 0.006, 0.022, 16]} />
          <meshBasicMaterial color="#159C9C" wireframe />
        </mesh>
      )}

      {/* Electrolytic Can */}
      <mesh position={[0, 0.016, 0]} castShadow>
        <cylinderGeometry args={[0.005, 0.005, 0.018, 16]} />
        <meshStandardMaterial color="#1A202C" roughness={0.3} metalness={0.6} />
      </mesh>

      <mesh position={[0.0046, 0.016, 0]}>
        <boxGeometry args={[0.001, 0.017, 0.003]} />
        <meshBasicMaterial color="#E2E8F0" />
      </mesh>

      <mesh position={[0, 0.0251, 0]}>
        <cylinderGeometry args={[0.0049, 0.0049, 0.0002, 16]} />
        <meshStandardMaterial color="#CBD5E0" metalness={0.9} roughness={0.1} />
      </mesh>

      <mesh position={[-0.002, 0.004, 0]}>
        <cylinderGeometry args={[0.0006, 0.0006, 0.01, 8]} />
        <meshStandardMaterial color="#CBD5E0" metalness={0.9} />
      </mesh>
      <mesh position={[0.002, 0.004, 0]}>
        <cylinderGeometry args={[0.0006, 0.0006, 0.01, 8]} />
        <meshStandardMaterial color="#CBD5E0" metalness={0.9} />
      </mesh>
    </group>
  );
}

export function Diode3D({ position = [0, 0, 0], selected = false, onClick }) {
  return (
    <group position={position} onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.012, 0]}>
          <boxGeometry args={[0.028, 0.014, 0.014]} />
          <meshBasicMaterial color="#159C9C" wireframe />
        </mesh>
      )}

      {/* Cylindrical Diode Body (1N4007) */}
      <mesh position={[0, 0.012, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.0035, 0.0035, 0.015, 16]} />
        <meshStandardMaterial color="#171313" roughness={0.3} />
      </mesh>

      {/* Cathode Silver Stripe */}
      <mesh position={[0.005, 0.012, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.0036, 0.0036, 0.0025, 16]} />
        <meshStandardMaterial color="#D1D5DB" metalness={0.8} />
      </mesh>

      {/* Metal Leads */}
      <mesh position={[-0.012, 0.006, 0]}>
        <cylinderGeometry args={[0.0005, 0.0005, 0.012, 8]} />
        <meshStandardMaterial color="#CBD5E0" metalness={0.9} />
      </mesh>
      <mesh position={[0.012, 0.006, 0]}>
        <cylinderGeometry args={[0.0005, 0.0005, 0.012, 8]} />
        <meshStandardMaterial color="#CBD5E0" metalness={0.9} />
      </mesh>
    </group>
  );
}

export function Transistor3D({ position = [0, 0, 0], selected = false, onClick }) {
  return (
    <group position={position} onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.015, 0]}>
          <cylinderGeometry args={[0.006, 0.006, 0.02, 16]} />
          <meshBasicMaterial color="#159C9C" wireframe />
        </mesh>
      )}

      {/* TO-92 Transistor Package Body */}
      <mesh position={[0, 0.016, 0]} castShadow>
        <cylinderGeometry args={[0.004, 0.004, 0.01, 16, 1, false, 0, Math.PI * 1.3]} />
        <meshStandardMaterial color="#1A202C" roughness={0.4} />
      </mesh>

      {/* 3 Metal Pins (Emitter, Base, Collector) */}
      {[-0.002, 0, 0.002].map((x, i) => (
        <mesh key={i} position={[x, 0.006, 0]}>
          <cylinderGeometry args={[0.0004, 0.0004, 0.012, 8]} />
          <meshStandardMaterial color="#E2E8F0" metalness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

export function IC3D({ position = [0, 0, 0], selected = false, onClick }) {
  return (
    <group position={position} onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.012, 0]}>
          <boxGeometry args={[0.02, 0.015, 0.03]} />
          <meshBasicMaterial color="#159C9C" wireframe />
        </mesh>
      )}

      {/* Black Plastic DIP Chip Body */}
      <mesh position={[0, 0.012, 0]} castShadow>
        <boxGeometry args={[0.016, 0.008, 0.026]} />
        <meshStandardMaterial color="#11161D" roughness={0.4} metalness={0.2} />
      </mesh>

      <mesh position={[0, 0.0161, -0.011]}>
        <cylinderGeometry args={[0.002, 0.002, 0.0004, 16]} />
        <meshBasicMaterial color="#2D3748" />
      </mesh>

      {[-0.009, -0.003, 0.003, 0.009].map((zPos, i) => (
        <group key={i}>
          <mesh position={[-0.009, 0.006, zPos]}>
            <boxGeometry args={[0.003, 0.008, 0.0012]} />
            <meshStandardMaterial color="#E2E8F0" metalness={0.95} />
          </mesh>
          <mesh position={[0.009, 0.006, zPos]}>
            <boxGeometry args={[0.003, 0.008, 0.0012]} />
            <meshStandardMaterial color="#E2E8F0" metalness={0.95} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export function Microcontroller3D({ position = [0, 0, 0], selected = false, onClick }) {
  return (
    <group position={position} onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.012, 0]}>
          <boxGeometry args={[0.032, 0.016, 0.055]} />
          <meshBasicMaterial color="#159C9C" wireframe />
        </mesh>
      )}

      <mesh position={[0, 0.008, 0]} castShadow>
        <boxGeometry args={[0.028, 0.0025, 0.052]} />
        <meshStandardMaterial color="#0A192F" roughness={0.3} metalness={0.5} />
      </mesh>

      <mesh position={[0, 0.011, 0.005]} castShadow>
        <boxGeometry args={[0.014, 0.002, 0.018]} />
        <meshStandardMaterial color="#2D3748" metalness={0.8} roughness={0.2} />
      </mesh>

      <mesh position={[0, 0.011, -0.024]}>
        <boxGeometry args={[0.008, 0.004, 0.006]} />
        <meshStandardMaterial color="#CBD5E0" metalness={0.95} roughness={0.1} />
      </mesh>

      {Array.from({ length: 15 }).map((_, i) => {
        const zPos = -0.022 + i * 0.003;
        return (
          <group key={i}>
            <mesh position={[-0.012, 0.004, zPos]}>
              <boxGeometry args={[0.001, 0.01, 0.001]} />
              <meshStandardMaterial color="#D4AF37" metalness={0.9} />
            </mesh>
            <mesh position={[0.012, 0.004, zPos]}>
              <boxGeometry args={[0.001, 0.01, 0.001]} />
              <meshStandardMaterial color="#D4AF37" metalness={0.9} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

export function Battery3D({ position = [0, 0, 0], selected = false, onClick }) {
  return (
    <group position={position} onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.02, 0]}>
          <boxGeometry args={[0.03, 0.048, 0.02]} />
          <meshBasicMaterial color="#159C9C" wireframe />
        </mesh>
      )}

      <mesh position={[0, 0.02, 0]} castShadow>
        <boxGeometry args={[0.026, 0.044, 0.017]} />
        <meshStandardMaterial color="#2D3748" roughness={0.3} />
      </mesh>

      <mesh position={[0, 0.025, 0]}>
        <boxGeometry args={[0.0262, 0.012, 0.0172]} />
        <meshStandardMaterial color="#A01717" metalness={0.7} />
      </mesh>

      <mesh position={[-0.006, 0.043, 0]}>
        <cylinderGeometry args={[0.003, 0.003, 0.003, 16]} />
        <meshStandardMaterial color="#CBD5E0" metalness={0.95} />
      </mesh>
      <mesh position={[0.006, 0.043, 0]}>
        <cylinderGeometry args={[0.004, 0.004, 0.003, 6]} />
        <meshStandardMaterial color="#CBD5E0" metalness={0.95} />
      </mesh>
    </group>
  );
}

export function Switch3D({ position = [0, 0, 0], selected = false, onClick }) {
  return (
    <group position={position} onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.008, 0]}>
          <boxGeometry args={[0.01, 0.012, 0.01]} />
          <meshBasicMaterial color="#159C9C" wireframe />
        </mesh>
      )}

      <mesh position={[0, 0.006, 0]} castShadow>
        <boxGeometry args={[0.007, 0.004, 0.007]} />
        <meshStandardMaterial color="#CBD5E0" metalness={0.8} />
      </mesh>

      <mesh position={[0, 0.009, 0]} castShadow>
        <cylinderGeometry args={[0.002, 0.002, 0.004, 16]} />
        <meshStandardMaterial color="#1A202C" roughness={0.4} />
      </mesh>

      {[-0.003, 0.003].map((x) =>
        [-0.003, 0.003].map((z) => (
          <mesh key={`${x}-${z}`} position={[x, 0.002, z]}>
            <cylinderGeometry args={[0.0005, 0.0005, 0.006, 8]} />
            <meshStandardMaterial color="#CBD5E0" metalness={0.9} />
          </mesh>
        ))
      )}
    </group>
  );
}

export function Sensor3D({ position = [0, 0, 0], selected = false, onClick }) {
  return (
    <group position={position} onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.015, 0]}>
          <boxGeometry args={[0.048, 0.024, 0.022]} />
          <meshBasicMaterial color="#159C9C" wireframe />
        </mesh>
      )}

      {/* Ultrasonic Sensor Blue PCB (HC-SR04) */}
      <mesh position={[0, 0.012, 0]} castShadow>
        <boxGeometry args={[0.045, 0.002, 0.02]} />
        <meshStandardMaterial color="#1E3A8A" roughness={0.3} metalness={0.5} />
      </mesh>

      {/* Two Aluminum Transducer Cylinders */}
      <mesh position={[-0.012, 0.018, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.007, 0.007, 0.01, 16]} />
        <meshStandardMaterial color="#CBD5E0" metalness={0.85} roughness={0.2} />
      </mesh>
      <mesh position={[0.012, 0.018, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.007, 0.007, 0.01, 16]} />
        <meshStandardMaterial color="#CBD5E0" metalness={0.85} roughness={0.2} />
      </mesh>

      {/* 4 Header Pins (VCC, TRIG, ECHO, GND) */}
      {[-0.009, -0.003, 0.003, 0.009].map((x, i) => (
        <mesh key={i} position={[x, 0.004, 0.008]}>
          <cylinderGeometry args={[0.0005, 0.0005, 0.008, 8]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

export function Motor3D({ position = [0, 0, 0], selected = false, onClick }) {
  return (
    <group position={position} onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.016, 0]}>
          <boxGeometry args={[0.024, 0.03, 0.024]} />
          <meshBasicMaterial color="#FFD600" wireframe />
        </mesh>
      )}

      {/* DC Motor Metallic Body */}
      <mesh position={[0, 0.015, 0]} castShadow>
        <cylinderGeometry args={[0.01, 0.01, 0.022, 16]} />
        <meshStandardMaterial color="#64748B" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Drive Shaft */}
      <mesh position={[0, 0.03, 0]}>
        <cylinderGeometry args={[0.0012, 0.0012, 0.01, 12]} />
        <meshStandardMaterial color="#E2E8F0" metalness={0.95} />
      </mesh>
    </group>
  );
}

export function RealisticWire3D({ start, end, color = "#E53E3E" }) {
  const curvePoints = React.useMemo(() => {
    const s = new THREE.Vector3(...start);
    const e = new THREE.Vector3(...end);
    const distance = s.distanceTo(e);
    const mid = s.clone().lerp(e, 0.5).add(new THREE.Vector3(0, Math.max(0.015, distance * 0.4), 0));
    const curve = new THREE.CatmullRomCurve3([s, mid, e]);
    return curve.getPoints(24);
  }, [start, end]);

  return (
    <group>
      <mesh>
        <tubeGeometry args={[new THREE.CatmullRomCurve3(curvePoints), 24, 0.0012, 8, false]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
      </mesh>
    </group>
  );
}

