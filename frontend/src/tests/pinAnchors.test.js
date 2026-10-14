import test from 'node:test';
import assert from 'node:assert';
import { pinAnchorService } from '../services/pinAnchorService.js';
import { BREADBOARD_NODES } from '../data/breadboardNodeMap.js';

test('Pin Anchor Transform: calculateWorldPosition handles translation accurately', () => {
  const componentPos = [1.0, 0.5, -2.0];
  const componentRot = [0, 0, 0];
  const localPinPos = [0.1, 0.05, 0.2];

  const worldPos = pinAnchorService.calculateWorldPosition(componentPos, componentRot, localPinPos);

  assert.strictEqual(Math.round(worldPos[0] * 100) / 100, 1.1);
  assert.strictEqual(Math.round(worldPos[1] * 100) / 100, 0.55);
  assert.strictEqual(Math.round(worldPos[2] * 100) / 100, -1.8);
});

test('Pin Anchor Transform: calculateWorldPosition handles 90 degree Y rotation', () => {
  const componentPos = [0, 0, 0];
  const componentRot = [0, Math.PI / 2, 0]; // 90 deg rotation around Y
  const localPinPos = [1, 0, 0];

  const worldPos = pinAnchorService.calculateWorldPosition(componentPos, componentRot, localPinPos);

  assert.strictEqual(Math.round(worldPos[0]), 0);
  assert.strictEqual(Math.round(worldPos[1]), 0);
  assert.strictEqual(Math.round(worldPos[2]), -1);
});

test('Breadboard Node Mapping: identifies correct electrical rails', () => {
  assert.strictEqual(BREADBOARD_NODES.getElectricalNodeId('bb-vcc-t1'), 'RAIL_TOP_POS');
  assert.strictEqual(BREADBOARD_NODES.getElectricalNodeId('bb-gnd-t1'), 'RAIL_TOP_NEG');
  assert.strictEqual(BREADBOARD_NODES.getElectricalNodeId('bb-vcc-b1'), 'RAIL_BOT_POS');
  assert.strictEqual(BREADBOARD_NODES.getElectricalNodeId('bb-gnd-b1'), 'RAIL_BOT_NEG');
});

test('Breadboard Node Mapping: identifies terminal strips connected across column rows A-E', () => {
  assert.strictEqual(BREADBOARD_NODES.getElectricalNodeId('bb-c10-a'), 'NODE_COL_10_TOP');
  assert.strictEqual(BREADBOARD_NODES.getElectricalNodeId('bb-c10-e'), 'NODE_COL_10_TOP');
  assert.strictEqual(BREADBOARD_NODES.areSocketsConnected('bb-c10-a', 'bb-c10-e'), true);
  // Column 10 Top is separated from Column 10 Bottom (across center IC trough)
  assert.strictEqual(BREADBOARD_NODES.getElectricalNodeId('bb-c10-f'), 'NODE_COL_10_BOT');
  assert.strictEqual(BREADBOARD_NODES.areSocketsConnected('bb-c10-a', 'bb-c10-f'), false);
});
