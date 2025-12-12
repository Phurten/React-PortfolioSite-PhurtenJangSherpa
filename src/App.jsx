import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
//import pages
import Portfolio from "./Portfolio";

//import special components from React Router
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return <Portfolio />;
}

export default App
