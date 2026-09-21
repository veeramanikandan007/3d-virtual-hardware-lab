export const serialService = {
  connect: async () => {
    if ('serial' in navigator) {
      const port = await navigator.serial.requestPort();
      await port.open({ baudRate: 115200 });
      return port;
    }
    throw new Error('Web Serial API not supported in this browser.');
  }
};
