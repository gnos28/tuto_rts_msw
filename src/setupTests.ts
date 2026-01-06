import '@testing-library/jest-dom'; // Import des matchers personnalisés
import { server } from './mocks/server';

// 1. Avant TOUS les tests : On allume l'écoute
beforeAll(() => server.listen());

// 2. Après CHAQUE test : On réinitialise les handlers
// (Au cas où un test aurait ajouté un override spécifique)
afterEach(() => server.resetHandlers());

// 3. Après TOUS les tests : On éteint proprement
afterAll(() => server.close());
