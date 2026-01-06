import './App.css'
import UserList from './components/UserList'

function App() {
  return (
    <>
      <h1>Liste des utilisateurs</h1>
      <div className="card">
        <UserList />
      </div>
    </>
  )
}

export default App
