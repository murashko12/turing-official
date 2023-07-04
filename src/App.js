import './App.css';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import Courses from './components/Courses/Courses';
import Team from './components/Team/Team';
// import News from './components/News/News';
import Footer from './components/Footer/Footer';
import RequestForm from './components/RequestForm/RequestForm';


function App() {

  


  return (
    <div className="App">
      <NavBar/>
      <Main/>
      {/* <News/> */}
      <Courses/>
      <Team/>
      <RequestForm/>
      <Footer/>
    </div>
  );
}

export default App;
