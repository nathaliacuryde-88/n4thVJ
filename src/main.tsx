import { createRoot } from 'react-dom/client';
import App from './app/App';
import './styles/index.css';
import { registerOffline } from './app/offline/offline';

const container = document.getElementById('root');
if (!container) throw new Error('Root element #root not found');

// Deliberately not wrapped in <StrictMode>: its double-invoked effects would
// open the camera, the microphone and the MediaPipe WASM runtime twice in dev.
createRoot(container).render(<App />);

// Keep a copy of everything, so the set runs with no Wi-Fi.
registerOffline();

// Getting here means the bundle loaded, so re-arm the stale-page recovery in
// index.html for the next deploy.
try {
  sessionStorage.removeItem('vj-stale-bundle-reload');
} catch {
  // Storage blocked; the recovery simply stays disarmed.
}
