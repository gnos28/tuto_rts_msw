import { render, screen } from '@testing-library/react';
import { server } from '../mocks/server';
import { http, HttpResponse } from 'msw';
import UserList from './UserList';

test('affiche la liste des utilisateurs', async () => {
  render(<UserList />);
  // We match what is in handlers.ts (Alice and Bob)
  expect(await screen.findByText(/Alice/i)).toBeInTheDocument();
  expect(await screen.findByText(/Bob/i)).toBeInTheDocument();
});

test('affiche un message d\'erreur si l\'API échoue', async () => {
  // 🎯 On force une erreur 500 juste pour ce test
  server.use(
    http.get('https://jsonplaceholder.typicode.com/users', () => {
      return new HttpResponse(null, { status: 500 });
    })
  );

  render(<UserList />);
  
  // Vérification
  expect(await screen.findByText(/erreur chargement/i)).toBeInTheDocument();
});
