import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Card } from './components/Card';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/getUsers");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
        setUsers(json.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures this effect runs only once on mount

  return (
    <Card users={users}></Card>
  );
}

export default App;