import './App.css';
import { Header, Info } from './components/MyFunctions';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home></Home>}></Route>
        <Route path = "/about" element = {<About></About>}></Route>
      </Routes>
    </Router>
  );
}

function About() {
  return (
    <body></body>
  );
}

function Home() {
  return (
    <body className="overflow-x-hidden">
      <Header></Header>
      <Info></Info>
    </body>
  );
}

export default App;
