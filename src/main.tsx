import { createRoot } from 'react-dom/client';
import App from './app/App';
import './styles/index.css';

const container = document.getElementById('root');
if (!container) throw new Error('Root element #root not found');

// Deliberately not wrapped in <StrictMode>: its double-invoked effects would
// open the camera, the microphone and the MediaPipe WASM runtime twice in dev.
createRoot(container).render(<App />);
