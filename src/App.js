import './App.css';
import Router from './Router';
import axios from "axios";
import "tailwindcss/tailwind.css"

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
     <Router />
    </>
  );
}

export default App;
