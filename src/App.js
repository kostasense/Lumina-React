import './App.css';
import { Header, Info, Us} from './components/MyFunctions';
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
  const links = [
    { href: "#us-section", text: "Sobre nosotros" },
    { href: "#video-section", text: "¿Qué es lo que hacemos?" },
    { href: "#contract-section", text: "Contratar" },
  ];

  const socialLinks = [
    { href: "https://www.facebook.com", iconSrc: "/imagenes/facebook.png", alt: "Facebook" },
    { href: "https://www.twitter.com", iconSrc: "/imagenes/twitter.png", alt: "Twitter" },
    { href: "https://www.instagram.com", iconSrc: "/imagenes/instagram.png", alt: "Instagram" },
    { href: "https://www.tiktok.com", iconSrc: "/imagenes/tiktok.png", alt: "TikTok" },
  ];

  return (
    <div>
      <Header
        logoSrc="/imagenes/LuminaLogo1.png"
        links={links}
        socialLinks={socialLinks}
      />
      <Info
        mainTitle="La seguridad siempre es excesiva, hasta que no es suficiente."
        subtitle="En Lumina, nos preocupamos por tus necesidades y seguridad, es por eso que nos dedicamos a proveer las soluciones de ciberseguridad mas adaptables para tu negocio."
        imageSrc="/imagenes/laptop.png"
        linkHref="#us-section"
        arrowSrc="/imagenes/flecha-abajo.png"
      />
      <Us
      />
    </div>
  );
}

export default App;
