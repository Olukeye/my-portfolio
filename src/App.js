// import "./App.css"
// import "bootstrap/dist/css/bootstrap.min.css"
// import Navbar from "./components/Navbar"


// const  App = () => {
//   return (
//     <div className="App">
//      <Navbar />
//     </div>
//   );
// }

// export default App;
import './App.css';
import Homepage from './pages/Homepage';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <Router>
      <main>
          <Route path="/" component={Homepage} exact />
          <Route path="/conatct" component={Contact} exact />
          <ToastContainer />
      </main>
    </Router>
  );
}

export default App;

