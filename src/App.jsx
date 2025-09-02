import { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase authentication/firebase';
import Search from './component/search';
import Foodlist from './component/Foodlist';
import Nav from './nav component/nav';
import './App.css';
import Container from './component/container';
import InnerComponent from './component/innerContainer';
import FoodDetails from './component/FoodDetails';
import Shortcut from './Food Shortcut/shortcut';
import Login from './component/Login';
// import Register from './component/Register';

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setfoodId] = useState("658920");
  const [query, setQuery] = useState("pizza");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLoginSuccess = () => {
    // User is automatically set by onAuthStateChanged
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div>
      <Nav onLogout={handleLogout} user={user} />
      <Search foodData={foodData} setFoodData={setFoodData} query={query} setQuery={setQuery}/>
      <Shortcut setQuery={setQuery} />
      <Container>
        <InnerComponent>
          <Foodlist setfoodId={setfoodId} foodData={foodData} />
        </InnerComponent>
        <InnerComponent>
          <FoodDetails foodId={foodId} />
        </InnerComponent>
      </Container>
    </div>
  );
}

export default App;
