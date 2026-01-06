import { http, HttpResponse } from 'msw';

// On définit les "handlers" (gestionnaires de requêtes)
export const handlers = [
  
  // Interception d'une requête GET
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    
    // On renvoie une réponse JSON typée
    return HttpResponse.json([
      { id: 1, name: 'Alice', role: 'Dev' },
      { id: 2, name: 'Bob', role: 'QA' },
    ]);
  }),
  
];
