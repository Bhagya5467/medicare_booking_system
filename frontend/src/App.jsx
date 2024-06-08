import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
/*import About from "./components/About/About";
import Services from '../pages/Services';
import Login from '../pages/login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Doctors from '../pages/Doctors/Doctors';
import DoctorDetails from '../pages/Doctors/DoctorDetails';
*/
function App() {
  return (
    <>
      <h1 className="text-[20px] text-blue-600">Hello react + vite app</h1>
      <Header />
      <Home />
    </>
  );
}

export default App;
