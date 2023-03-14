import './App.css';
import Appointment from './components/Appointment';
import Details from './components/Details';
import Emergency from './components/Emergency';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Staff from './components/Staff';
import Timing from './components/Timing';
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Main/>
      <Timing/>
      <Services/>
      <Details/>
      <Staff/>
      <Appointment/>
      <Emergency/>
      <Blog/>
      <Footer/>
    </>
  );
}

export default App;
