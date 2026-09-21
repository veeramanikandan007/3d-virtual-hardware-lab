import test from 'node:test';
import assert from 'node:assert';
import { workbenchSerializer, SCHEMA_VERSION } from '../services/workbenchSerializer.js';

test('Serialization: converts state to valid schema version 1 payload', () => {
  const components = [
    {
      instanceId: 'esp32-1',
      componentId: 'esp32',
      name: 'ESP32 Dev Board',
      category: 'Microcontroller',
      position: [0.1, 0.05, -0.2],
      rotation: [0, Math.PI, 0]
    }
  ];

  const wires = [
    {
      wireId: 'wire-101',
      from: { instanceId: 'esp32-1', pinId: 'esp32-gpio2', name: 'GPIO2' },
      to: { instanceId: 'esp32-1', pinId: 'esp32-gnd1', name: 'GND' },
      color: '#3b82f6'
    }
  ];

  const serialized = workbenchSerializer.serialize(components, wires);

  assert.strictEqual(serialized.schema_version, SCHEMA_VERSION);
  assert.strictEqual(serialized.components.length, 1);
  assert.strictEqual(serialized.components[0].instance_id, 'esp32-1');
  assert.strictEqual(serialized.wires.length, 1);
  assert.strictEqual(serialized.wires[0].wire_id, 'wire-101');
});

test('Serialization: deserializes valid payload and recovers component instances', () => {
  const jsonPayload = {
    schema_version: 1,
    components: [
      {
        instance_id: 'arduino-1',
        component_id: 'arduino',
        name: 'Arduino UNO R3',
        category: 'Microcontroller',
        position: [0.5, 0.05, 0.5],
        rotation: [0, 0, 0]
      }
    ],
    wires: []
  };

  const restored = workbenchSerializer.deserialize(jsonPayload);
  assert.strictEqual(restored.components.length, 1);
  assert.strictEqual(restored.components[0].instanceId, 'arduino-1');
  assert.strictEqual(restored.components[0].componentId, 'arduino');
});

test('Serialization: throws error on corrupted or missing JSON root', () => {
  assert.throws(() => {
    workbenchSerializer.deserialize(null);
  }, /Invalid circuit file/);

  assert.throws(() => {
    workbenchSerializer.deserialize({ foo: 'bar' });
  }, /missing components array/);
});
