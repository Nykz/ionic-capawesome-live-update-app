import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'cap-live-update',
  webDir: 'www',
  plugins: {
    LiveUpdate: {
      // appId: '',
      // autoDeleteBundles: true,
      enabled: true,
      // location: 'eu',
      // publicKey: '-----BEGIN PUBLIC KEY-----MIIBIjvicfBdjCKBkviWsvBuQIDAQAB-----END PUBLIC KEY-----',
      // readyTimeout: undefined,
      // resetOnUpdate: undefined,
    },
  },
};

export default config;
