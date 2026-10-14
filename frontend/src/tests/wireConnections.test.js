import test from 'node:test';
import assert from 'node:assert';
import { connectionEvents } from '../services/connectionEvents.js';

test('Connection Events: emits and receives WIRE_CREATED event with pure serializable payload', () => {
  let receivedEvent = null;
  const unsubscribe = connectionEvents.subscribe((event) => {
    if (event.type === 'WIRE_CREATED') {
      receivedEvent = event;
    }
  });

  const wire = {
    wireId: 'wire-test-1',
    from: { instanceId: 'esp32-1', pinId: 'esp32-gpio2', name: 'GPIO2' },
    to: { instanceId: 'led-1', pinId: 'led-anode', name: 'Anode' },
    color: '#ef4444'
  };

  connectionEvents.emitWireCreated(wire);

  assert.ok(receivedEvent);
  assert.strictEqual(receivedEvent.payload.wire_id, 'wire-test-1');
  assert.strictEqual(receivedEvent.payload.source.component_id, 'esp32-1');
  assert.strictEqual(receivedEvent.payload.destination.pin_id, 'led-anode');
  assert.strictEqual(receivedEvent.payload.color, '#ef4444');

  unsubscribe();
});

test('Connection Events: emits and receives WIRE_DELETED event', () => {
  let receivedEvent = null;
  const unsubscribe = connectionEvents.subscribe((event) => {
    if (event.type === 'WIRE_DELETED') {
      receivedEvent = event;
    }
  });

  connectionEvents.emitWireDeleted('wire-test-1');

  assert.ok(receivedEvent);
  assert.strictEqual(receivedEvent.payload.wire_id, 'wire-test-1');

  unsubscribe();
});
