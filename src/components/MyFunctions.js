import React, { useEffect, useState } from "react";

export function Header({ logoSrc, links, socialLinks }) {
  return (
    <header id="header" className="flex items-center justify-between px-6 py-4">
      <a href="/" className="transform transition-all duration-300 hover:scale-110">
        <img
          id="header-img"
          src={`${process.env.PUBLIC_URL}/${logoSrc}`}
          alt="Logo"
          className="w-30 h-20"
        />
      </a>
      <nav id="nav-bar" className="flex space-x-5 ml-40 font-mono">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="nav-link hover:bg-black hover:text-white rounded-lg px-4 py-2 hover:shadow-md transition-all"
          >
            {link.text}
          </a>
        ))}
      </nav>
      <section id="logo-section">
        <div id="logo-elements-container" className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              className="media-icon transform transition-all duration-300 hover:scale-110 hover:rotate-12"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={`${process.env.PUBLIC_URL}/${social.iconSrc}`} alt={social.alt} className="w-8 h-8" />
            </a>
          ))}
        </div>
      </section>
    </header>
  );
}

export function Info({ mainTitle, subtitle, imageSrc, linkHref, arrowSrc }) {

  const [isRotated, setIsRotated] = useState(false);

  return (
    <section id="info-section">
      <div className="flex justify-end w-full h-auto">
        <img
          className="absolute w-7/12 h-6/12 object-contain translate-x-40"
          src={`${process.env.PUBLIC_URL}/${imageSrc}`}
          alt="Background"
        />
      </div>
      <div className="flex flex-col justify-start w-full h-auto">
        <h1 className="text-5xl font-mono w-8/12 mt-10 ml-10 mb-5">{mainTitle}</h1>
        <h2 className="text-xl font-mono w-7/12 mt-10 ml-10">{subtitle}</h2>
        <a
          className={`w-24 h-24 ml-40 mt-10 transform transition-all hover:scale-110 duration-300 ${isRotated ? 'rotate-360' : ''}`}
          href={linkHref}
          onClick={() => setIsRotated(!isRotated)}
        >
          <img className="w-auto h-auto" src={`${process.env.PUBLIC_URL}/${arrowSrc}`} alt="Arrow" />
        </a>
      </div>
    </section>
  );
}

export function Us() {

  const [clickedIndex, setClickedIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timeout);
  }, [clickedIndex]);

  return (
    <section className="flex w-full h-screen" id="us-section">
      <div className="flex flex-col w-full h-full justify-start align-top">
        <div
          className={`flex flex-col w-9/12 h-14 border-2 rounded-xl mt-10 ml-10 py-3 align-middle justify-center hover:bg-black hover:text-white hover:shadow-md hover:cursor-pointer transition-all ${clickedIndex === 0 ? 'h-80' : ''}`}
          onClick={() => setClickedIndex(0)}
        >
          <div className="flex w-full h-14">
            <div className={`w-11/12 ${clickedIndex === 0 ? 'text-left ml-10' : 'text-center'}`}>
              <h1 className="text-lg font-mono">Historia</h1>
            </div>
            <div className="flex w-1/12">
              <img className={`w-7 h-7 ${clickedIndex === 0 ? 'rotate-180' : ''}`} src={`${process.env.PUBLIC_URL}/imagenes/flecha-abajo-white.png`}></img>
            </div>
          </div>

          <div className="flex w-10/12 h-full justify-start">
            <h2 className={`text-sm font-mono ml-10 mt-10 ${clickedIndex !== 0 ? 'hidden' : ''}`}>Lumina es una empresa mexicana e independiente que nació con la firme intención de proteger a los emprendimientos en un mundo cada vez más digitalizado. Nos caracteriza una profunda dedicación y esfuerzo por ofrecer soluciones de ciberseguridad adaptadas a las necesidades de nuestros clientes. Nos enfrentamos con determinación a los retos que conlleva este dinámico sector, combinando innovación, pasión y un compromiso inquebrantable por garantizar la tranquilidad de quienes confían en nosotros.</h2>
          </div>
        </div>

        <div
          className={`flex flex-col w-9/12 h-14 border-2 rounded-xl mt-10 ml-10 py-3 align-middle justify-center hover:bg-black hover:text-white hover:shadow-md hover:cursor-pointer transition-all ${clickedIndex === 1 ? 'h-80' : ''}`}
          onClick={() => setClickedIndex(1)}
        >
          <div className="flex w-full h-14">
            <div className={`w-11/12 ${clickedIndex === 1 ? 'text-left ml-10' : 'text-center'}`}>
              <h1 className="text-lg font-mono">Talento</h1>
            </div>
            <div className="flex w-1/12">
              <img className={`w-7 h-7 ${clickedIndex === 1 ? 'rotate-180' : ''}`} src={`${process.env.PUBLIC_URL}/imagenes/flecha-abajo-white.png`}></img>
            </div>
          </div>

          <div className="flex w-10/12 h-full justify-start">
            <h2 className={`text-sm font-mono ml-10 mt-3 ${clickedIndex !== 1 ? 'hidden' : ''}`}>En Lumina, estamos orgullosos de contar con talento joven y mexicano, un equipo compuesto por estudiantes y profesionales emergentes que representan el futuro de la ciberseguridad. Nuestra prioridad es fomentar su crecimiento profesional, brindándoles un entorno dinámico y oportunidades para desarrollarse en este sector. Creemos firmemente en el potencial de nuestra juventud, y trabajamos para que cada uno de ellos contribuya a la innovación y alcance sus metas personales/profesionales mientras construimos juntos un México más seguro digitalmente.</h2>
          </div>
        </div>

        <div
          className={`flex flex-col w-9/12 h-14 border-2 rounded-xl mt-10 ml-10 py-3 align-middle justify-center hover:bg-black hover:text-white hover:shadow-md hover:cursor-pointer transition-all ${clickedIndex === 2 ? 'h-80' : ''}`}
          onClick={() => setClickedIndex(2)}
        >
          <div className="flex w-full h-14">
            <div className={`w-11/12 ${clickedIndex === 2 ? 'text-left ml-10' : 'text-center'}`}>
              <h1 className="text-lg font-mono">Trabajo</h1>
            </div>
            <div className="flex w-1/12">
              <img className={`w-7 h-7 ${clickedIndex === 2 ? 'rotate-180' : ''}`} src={`${process.env.PUBLIC_URL}/imagenes/flecha-abajo-white.png`}></img>
            </div>
          </div>

          <div className="flex w-10/12 h-full justify-start">
            <h2 className={`text-sm font-mono ml-10 mt-10 ${clickedIndex !== 2 ? 'hidden' : ''}`}>En Lumina, nos enfocamos en brindar soluciones de ciberseguridad adaptadas a empresas de todos los tamaños, desde microempresas hasta grandes corporativos. Ofrecemos servicios como firewalls avanzados, auditorías de seguridad, gestión de accesos y respaldo de datos, siempre ajustándonos a las necesidades de cada cliente. Nuestro objetivo es proteger sus activos digitales y garantizar un entorno seguro para su crecimiento.</h2>
          </div>
        </div>
      </div>

      <div
        className={`self-end flex flex-col justify-start align-top w-7/12 h-52 border-2 rounded-xl mb-10 mr-10 py-3 hover:bg-black hover:text-white hover:shadow-md transition-all ${animate ? 'translate-x-full' : ''}`}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={()=> setIsHover(false)}
      >
        <img className={`ml-5 w-7 h-7 invert`} src={`${process.env.PUBLIC_URL}/imagenes/flecha-abajo-white.png`}></img>
        
        <div className={`transition-opacity duration-500 opacity-0 flex flex-col w-full h-full mt-3 ${clickedIndex !== 0 ? 'hidden' : 'opacity-100'} ${animate ? 'hidden' : ''}`}>
          <h2 className={`text-lg font-mono ml-5 w-9/12`}>Protegiendo a nuestros clientes desde 2024.</h2>
          <div className={`flex justify-start w-full h-auto`}>
            <img className={`w-24 h-24 ml-5 transition-all duration-100 hover:scale-110 ${isHover ? 'invert' : ''}`} src={`${process.env.PUBLIC_URL}/imagenes/cb.png`}></img>
            <img className={`w-24 h-12 ml-5 mt-4 transition-all duration-100 hover:scale-110 ${isHover ? 'invert' : ''}`} src={`${process.env.PUBLIC_URL}/imagenes/besachi.png`}></img>
            <img className={`w-20 h-20 ml-5 transition-all duration-100 hover:scale-110 ${isHover ? 'invert' : ''}`} src={`${process.env.PUBLIC_URL}/imagenes/pipirin.png`}></img>
            <img className={`w-20 h-20 ml-5 transition-all duration-100 hover:scale-110 ${isHover ? 'invert' : ''}`} src={`${process.env.PUBLIC_URL}/imagenes/pizzeta.png`}></img>
          </div>
        </div>

        <div className={`transition-opacity duration-500 opacity-0 flex flex-col w-full h-full -mt-40 ${clickedIndex !== 1 ? 'hidden' : 'opacity-100 mt-3'} ${animate ? 'hidden' : ''}`}>
          <h2 className={`text-lg font-mono ml-5 w-9/12`}>Talento proveniente de instituciones nacionales.</h2>
          <div className={`flex justify-start w-full h-auto ml-14 mt-3 gap-8`}>
            <img className={`w-12 h-16 transition-all duration-100 hover:scale-110 ${isHover ? 'invert' : ''}`} src={`${process.env.PUBLIC_URL}/imagenes/tecnm.png`}></img>
            <img className={`w-14 h-16 transition-all duration-100 hover:scale-110 ${isHover ? 'invert' : ''}`} src={`${process.env.PUBLIC_URL}/imagenes/unam.png`}></img>
            <img className={`w-14 h-16 transition-all duration-100 hover:scale-110 ${isHover ? 'invert' : ''}`} src={`${process.env.PUBLIC_URL}/imagenes/ipn.png`}></img>
            <img className={`w-20 h-10 mt-5 transition-all duration-100 hover:scale-110 ${isHover ? 'invert' : ''}`} src={`${process.env.PUBLIC_URL}/imagenes/uam.png`}></img>
          </div>
        </div>

        <div className={`transition-opacity duration-500 opacity-0 flex flex-col w-full h-full -mt-36 ${clickedIndex !== 2 ? 'hidden' : 'opacity-100 mt-3'} ${animate ? 'hidden' : ''}`}>
          <h2 className={`text-lg font-mono ml-5 w-9/12`}>Conoce más de nuestro trabajo aquí:</h2>
          <div className={`flex justify-start w-full h-auto`}>
            <a className={`w-24 h-auto ml-44 hover:scale-110 transition-all ${isHover ? 'invert' : ''}`} href="https://www.youtube.com/watch?v=tRwHpyOq4P4" traget="_blank">
              <img src={`${process.env.PUBLIC_URL}/imagenes/youtube.png`} alt="Youtube-icon"></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

