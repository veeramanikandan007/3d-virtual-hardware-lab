/**
 * breadboardNodeMap.js — Verified Logical Node Mapping for 830-Point MB-102 Breadboard
 * 
 * Electrical Topology:
 * - Top Positive Rail: All top (+) holes are electrically tied to 'RAIL_TOP_POS'
 * - Top Negative Rail: All top (-) holes are electrically tied to 'RAIL_TOP_NEG'
 * - Bottom Negative Rail: All bottom (-) holes are electrically tied to 'RAIL_BOT_NEG'
 * - Bottom Positive Rail: All bottom (+) holes are electrically tied to 'RAIL_BOT_POS'
 * - Columns 1 to 60:
 *   - Rows A, B, C, D, E share terminal strip node: 'NODE_COL_<num>_TOP'
 *   - Rows F, G, H, I, J share terminal strip node: 'NODE_COL_<num>_BOT'
 *   (Divided by center trough for IC chips)
 */

export const BREADBOARD_NODES = {
  getElectricalNodeId: (pinId) => {
    if (pinId.includes('vcc-t')) return 'RAIL_TOP_POS';
    if (pinId.includes('gnd-t')) return 'RAIL_TOP_NEG';
    if (pinId.includes('vcc-b')) return 'RAIL_BOT_POS';
    if (pinId.includes('gnd-b')) return 'RAIL_BOT_NEG';

    // Parse column and row (e.g. 'bb-c10-a')
    const match = pinId.match(/bb-c(\d+)-([a-j])/i);
    if (match) {
      const col = match[1];
      const row = match[2].toUpperCase();
      if (['A', 'B', 'C', 'D', 'E'].includes(row)) {
        return `NODE_COL_${col}_TOP`;
      } else {
        return `NODE_COL_${col}_BOT`;
      }
    }

    return pinId;
  },

  /**
   * Check if two breadboard sockets are electrically connected internally
   */
  areSocketsConnected: (pinId1, pinId2) => {
    return BREADBOARD_NODES.getElectricalNodeId(pinId1) === BREADBOARD_NODES.getElectricalNodeId(pinId2);
  }
};
