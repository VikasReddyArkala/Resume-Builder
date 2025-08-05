import logo from './logo.svg';
import './App.css';
import PersonalDetails from './components/PersonalDetails';
import Experience from './components/Experience';
import Education from './components/Education';
import Project from './components/Project';
import ResumeBuilder from './components/ResumeBuilder';

function App() {
  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <ResumeBuilder />
    </div>
  );
}

export default App;
