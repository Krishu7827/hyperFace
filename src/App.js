import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import EntireCourse from './components/EntireCourse';
import Instructors from './components/Instructors';
function App() {
  return (
    <>
    <Navbar/>
    <Body/>
    <EntireCourse/>
    <Instructors/>
    </>
  );
}

export default App;
