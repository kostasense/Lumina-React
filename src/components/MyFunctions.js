import React from 'react';

export function Header() {
  return (
    <section id="header-section">
      <header id="header" className="flex items-center justify-between px-6 py-4">
        <img
          id="header-img"
          src={`${process.env.PUBLIC_URL}/imagenes/LuminaLogo1.png`}
          onError={(e) => console.error("Error cargando la imagen:", e.target.src)}
          alt="Lumina Cybersecurity logo"
          className="w-30 h-20"
        />
        <nav id="nav-bar" className="flex space-x-5 ml-40 font-mono">
          <a className="nav-link hover:bg-black hover:text-white rounded-lg px-4 py-2 hover:shadow-md transition-all" href="#us-section">Sobre nosotros</a>
          <a className="nav-link hover:bg-black hover:text-white rounded-lg px-4 py-2 hover:shadow-md transition-all" href="#video-section">¿Qué es lo que hacemos?</a>
          <a className="nav-link hover:bg-black hover:text-white rounded-lg px-4 py-2 hover:shadow-md transition-all" href="#contract-section">Contratar</a>
        </nav>
        <section id="logo-section">
          <div id="logo-elements-container" className="flex space-x-4">
            <a className="media-icon transform transition-all duration-300 hover:scale-110 hover:rotate-12" href="https://www.facebook.com" target="_blank">
              <img src={`${process.env.PUBLIC_URL}/imagenes/facebook.png`} alt="Logotipo de Facebook" className="w-8 h-8" />
            </a>
            <a className="media-icon transform transition-all duration-300 hover:scale-110 hover:rotate-12" href="https://www.twitter.com" target="_blank">
              <img src={`${process.env.PUBLIC_URL}/imagenes/twitter.png`} className="w-8 h-8" />
            </a>
            <a className="media-icon transform transition-all duration-300 hover:scale-110 hover:rotate-12" href="https://www.instagram.com" target="_blank">
              <img src={`${process.env.PUBLIC_URL}/imagenes/instagram.png`} className="w-8 h-8" />
            </a>
            <a className="media-icon transform transition-all duration-300 hover:scale-110 hover:rotate-12" href="https://www.tiktok.com" target="_blank">
              <img src={`${process.env.PUBLIC_URL}/imagenes/tiktok.png`} className="w-8 h-8" />
            </a>
          </div>
        </section>
      </header>
    </section>
  );
}

export function Info() {
  return (
    <section id="info-section">
      <div className="flex justify-end w-full h-auto">
        <img className="absolute w-7/12 h-6/12 object-contain translate-x-40" src={`${process.env.PUBLIC_URL}/imagenes/laptop.png`} alt="Laptop"></img>
      </div>
    </section>
  );
}

export default Header;