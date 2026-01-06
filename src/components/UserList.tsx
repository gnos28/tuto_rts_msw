import { useEffect, useState } from 'react';

// Define a simple User interface
interface User {
  id: number;
  name: string;
  role?: string;
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Erreur chargement');
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} {user.role ? `- ${user.role}` : ''}
        </li>
      ))}
    </ul>
  );
}
