import './App.css';
import { Header, Info } from './components/MyFunctions';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router basename="/Lumina-React">
      <Routes>
        <Route path = "/" element = {<Home></Home>}></Route>
      </Routes>
    </Router>
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
