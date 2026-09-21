export const PRIORITY = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
  CRITICAL: 3,
};

export class SpeechQueue {
  constructor() {
    this.queue = [];
  }

  push(item) {
    if (item.priority === PRIORITY.CRITICAL) {
      // Keep only high priority items and push critical to front
      this.queue = this.queue.filter(q => q.priority >= PRIORITY.HIGH);
      this.queue.unshift(item);
      return;
    }
    
    if (item.priority === PRIORITY.HIGH) {
      const insertIdx = this.queue.findIndex(q => q.priority < PRIORITY.HIGH);
      if (insertIdx === -1) {
        this.queue.push(item);
      } else {
        this.queue.splice(insertIdx, 0, item);
      }
      return;
    }
    
    this.queue.push(item);
  }

  pop() {
    return this.queue.shift();
  }

  clear() {
    this.queue = [];
  }

  getLength() {
    return this.queue.length;
  }
  
  getItems() {
    return [...this.queue];
  }
}
