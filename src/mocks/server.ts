import { setupServer } from 'msw/node'; // ⚠️ Notez l'import /node
import { handlers } from './handlers';

// On configure le serveur avec nos handlers définis précédemment
export const server = setupServer(...handlers);
