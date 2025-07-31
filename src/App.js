import logo from './logo.svg';
import './App.css';
import NavBar from './components/PersonalDetails';
import PersonalDetails from './components/PersonalDetails';

function App() {
  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <PersonalDetails />
    </div>
  );
}

export default App;
