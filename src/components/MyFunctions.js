import React, { useEffect, useState } from "react";

export function Header({ logoSrc, links, socialLinks }) {
  return (
    <header id="header" className="flex flex-col sm:flex-row items-center sm:justify-between px-6 py-4 w-full h-auto">
      <a href="/Lumina-React" className="transform transition-all duration-300 hover:scale-110 lg:w-3/12">
        <img
          id="header-img"
          src={`${process.env.PUBLIC_URL}/${logoSrc}`}
          alt="Logo"
          className="w-30 h-20"
        />
      </a>
      <nav id="nav-bar" className="hidden space-x-5 ml-40 font-mono lg:flex lg:w-7/12">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="nav-link hover:bg-black hover:text-white rounded-lg px-4 py-2 hover:shadow-md transition-all"
            target={link.href === 'https://www.youtube.com/watch?v=tRwHpyOq4P4' ? '_blank' : '_self'}
          >
            {link.text}
          </a>
        ))}
      </nav>
      <section id="logo-section" className="lg:w-3/12">
        <div id="logo-elements-container" className="flex space-x-4 justify-end">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              className="media-icon transform transition-all duration-300 hover:scale-110 hover:rotate-12"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={`${process.env.PUBLIC_URL}/${social.iconSrc}`} alt={social.alt} className="w-8 h-8 object-contain" />
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
      <div className="justify-end w-full h-auto hidden sm:flex">
        <img
          className="absolute w-7/12 h-6/12 object-contain translate-x-40"
          src={`${process.env.PUBLIC_URL}/${imageSrc}`}
          alt="Background"
        />
      </div>
      <div className="flex flex-col justify-start w-full h-auto">
        <h1 className="text-5xl font-mono w-8/12 mt-10 ml-10 mb-5">{mainTitle}</h1>
        <h2 className="text-xl font-mono w-10/12 sm:w-6/12 mt-5 lg:mt-10 ml-10">{subtitle}</h2>
        <a
          className={`w-24 h-24 ml-40 mt-5 hidden lg:flex transform transition-all hover:scale-110 duration-300 ${isRotated ? 'rotate-360' : ''}`}
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
    const timeout = setTimeout(() => setAnimate(false), 300);
    return () => clearTimeout(timeout);
  }, [clickedIndex]);

  return (
    <section id="us-section">
      <section className="lg:flex w-full hidden">
        <div className="flex flex-col w-full h-full justify-start align-top">
          <div
            className={`flex flex-col w-9/12 h-14 border-2 rounded-xl mt-10 ml-10 py-3 align-middle justify-center hover:bg-black hover:text-white hover:shadow-md hover:cursor-pointer transition-all ${clickedIndex === 0 ? 'h-80' : ''}`}
            onClick={() => setClickedIndex(0)}
          >
            <div className="flex w-full h-14">
              <div className={`w-11/12 ${clickedIndex === 0 ? 'text-left ml-10' : 'text-center'}`}>
                <h1 className="text-lg font-mono">Historia</h1>
              </div>
              <div className="flex w-1/12 mr-4">
                <img className={`w-7 h-7 ${clickedIndex === 0 ? 'rotate-180' : ''}`} src={`${process.env.PUBLIC_URL}/imagenes/flecha-abajo-white.png`}></img>
              </div>
            </div>

            <div className="flex w-10/12 h-full justify-start">
              <h2 className={`text-sm font-mono ml-10 mt-auto mb-auto ${clickedIndex !== 0 ? 'hidden' : ''}`}>Lumina es una empresa mexicana e independiente que nació con la firme intención de proteger a los emprendimientos en un mundo cada vez más digitalizado. Nos caracteriza una profunda dedicación y esfuerzo por ofrecer soluciones de ciberseguridad adaptadas a las necesidades de nuestros clientes.</h2>
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
              <div className="flex w-1/12 mr-4">
                <img className={`w-7 h-7 ${clickedIndex === 1 ? 'rotate-180' : ''}`} src={`${process.env.PUBLIC_URL}/imagenes/flecha-abajo-white.png`}></img>
              </div>
            </div>

            <div className="flex w-10/12 h-full justify-start">
              <h2 className={`text-sm font-mono ml-10 mt-auto mb-auto ${clickedIndex !== 1 ? 'hidden' : ''}`}>En Lumina, estamos orgullosos de contar con talento joven y mexicano, un equipo compuesto por estudiantes y profesionales emergentes que representan el futuro de la ciberseguridad. Nuestra prioridad es fomentar su crecimiento profesional, brindándoles un entorno dinámico y oportunidades para desarrollarse en este sector.</h2>
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
              <div className="flex w-1/12 mr-4">
                <img className={`w-7 h-7 ${clickedIndex === 2 ? 'rotate-180' : ''}`} src={`${process.env.PUBLIC_URL}/imagenes/flecha-abajo-white.png`}></img>
              </div>
            </div>

            <div className="flex w-10/12 h-full justify-start">
              <h2 className={`text-sm font-mono ml-10 mt-auto mb-auto ${clickedIndex !== 2 ? 'hidden' : ''}`}>En Lumina, nos enfocamos en brindar soluciones de ciberseguridad adaptadas a empresas de todos los tamaños, desde microempresas hasta grandes corporativos. Ofrecemos servicios como firewalls avanzados, auditorías de seguridad, gestión de accesos y respaldo de datos, siempre ajustándonos a las necesidades de cada cliente.</h2>
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
            <h2 className={`text-lg font-mono ml-5 w-9/12 h-1/6`}>Protegiendo a nuestros clientes desde 2024.</h2>
            <div className={`flex justify-evenly w-full h-5/6 gap-3 mt-7`}>
              <img className={`w-2/12 h-auto object-contain transition-all duration-100 scale-110 hover:scale-125 ${isHover ? 'invert' : ''}`} src={`${process.env.PUBLIC_URL}/imagenes/cb.png`}></img>
              <img className={`w-2/12 h-auto object-contain transition-all duration-100 scale-110 hover:scale-125 ${isHover ? 'invert' : ''}`} src={`${process.env.PUBLIC_URL}/imagenes/besachi.png`}></img>
              <img className={`w-2/12 h-auto object-contain transition-all duration-100 scale-110 hover:scale-125 ${isHover ? 'invert' : ''}`} src={`${process.env.PUBLIC_URL}/imagenes/pipirin.png`}></img>
              <img className={`w-2/12 h-auto object-contain transition-all duration-100 scale-110 hover:scale-125 ${isHover ? 'invert' : ''}`} src={`${process.env.PUBLIC_URL}/imagenes/pizzeta.png`}></img>
            </div>
          </div>

          <div className={`transition-opacity duration-500 opacity-0 flex flex-col w-full h-full -mt-40 ${clickedIndex !== 1 ? 'hidden' : 'opacity-100 mt-3'} ${animate ? 'hidden' : ''}`}>
            <h2 className={`text-lg font-mono ml-5 w-9/12`}>Talento proveniente de instituciones nacionales.</h2>
            <div className={`flex justify-evenly w-full h-5/6 gap-3 mt-3`}>
              <img className={`w-2/12 h-auto object-contain transition-all duration-100 scale-90 hover:scale-100 ${isHover ? 'invert' : ''}`} src={`${process.env.PUBLIC_URL}/imagenes/tecnm.png`}></img>
              <img className={`w-2/12 h-auto object-contain transition-all duration-100 scale-90 hover:scale-100 ${isHover ? 'invert' : ''}`} src={`${process.env.PUBLIC_URL}/imagenes/unam.png`}></img>
              <img className={`w-2/12 h-auto object-contain transition-all duration-100 scale-90 hover:scale-100 ${isHover ? 'invert' : ''}`} src={`${process.env.PUBLIC_URL}/imagenes/ipn.png`}></img>
              <img className={`w-2/12 h-auto object-contain transition-all duration-100 hover:scale-110 ${isHover ? 'invert' : ''}`} src={`${process.env.PUBLIC_URL}/imagenes/uam.png`}></img>
            </div>
          </div>

          <div className={`transition-opacity duration-500 opacity-0 flex flex-col w-full h-full -mt-36 ${clickedIndex !== 2 ? 'hidden' : 'opacity-100 mt-3'} ${animate ? 'hidden' : ''}`}>
            <h2 className={`text-lg font-mono ml-5 w-9/12`}>Conoce más de nuestro trabajo aquí:</h2>
            <div className={`flex justify-center w-full h-auto`}>
              <a className={`w-24 h-auto scale-90 hover:scale-100 transition-all ${isHover ? 'invert' : ''}`} href="https://www.youtube.com/watch?v=tRwHpyOq4P4" target="_blank">
                <img src={`${process.env.PUBLIC_URL}/imagenes/youtube.png`} alt="Youtube-icon"></img>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:hidden w-full flex flex-col">
        <div className="w-full h-auto flex flex-col justify-start mt-10 mb-auto gap-4">
          <div className="flex bg-white rounded-lg border-2 w-10/12 align-middle z-10 h-3/6 self-center p-5 mr-auto ml-auto">
            <h2 className="font-mono text-xl">Nuestras soluciones son precisas y adaptables, nuestros clientes confian en ellas.</h2>
          </div>
          <div className="grid grid-cols-2 w-full m-auto max-w-sm">
            <img className={`w-9/12 h-40 m-auto object-contain transition-all duration-100 scale-110 hover:scale-125`} src={`${process.env.PUBLIC_URL}/imagenes/cb.png`}></img>
            <img className={`w-9/12 h-40 m-auto object-contain transition-all duration-100 scale-110 hover:scale-125`} src={`${process.env.PUBLIC_URL}/imagenes/besachi.png`}></img>
            <img className={`w-9/12 h-40 m-auto object-contain transition-all duration-100 scale-110 hover:scale-125`} src={`${process.env.PUBLIC_URL}/imagenes/pipirin.png`}></img>
            <img className={`w-9/12 h-40 m-auto object-contain transition-all duration-100 scale-110 hover:scale-125`} src={`${process.env.PUBLIC_URL}/imagenes/pizzeta.png`}></img>
          </div>
        </div>

        <div className="w-full h-auto flex flex-col justify-start mt-10 mb-auto gap-5">
          <div className="flex bg-white rounded-lg border-2 w-10/12 align-middle z-10 h-3/6 self-center p-5 mr-auto ml-auto">
            <h2 className="font-mono text-xl">Contamos con talento nacional, estudiantes y profesionales emergentes de las principales instituciones nacionales.</h2>
          </div>
          <div className="grid grid-cols-2 w-full m-auto max-w-sm">
            <img className={`w-9/12 h-40 m-auto object-contain transition-all duration-100 scale-90 hover:scale-100`} src={`${process.env.PUBLIC_URL}/imagenes/tecnm.png`}></img>
            <img className={`w-9/12 h-40 m-auto object-contain transition-all duration-100 scale-90 hover:scale-100`} src={`${process.env.PUBLIC_URL}/imagenes/unam.png`}></img>
            <img className={`w-9/12 h-40 m-auto object-contain transition-all duration-100 scale-90 hover:scale-100`} src={`${process.env.PUBLIC_URL}/imagenes/ipn.png`}></img>
            <img className={`w-9/12 h-40 m-auto object-contain transition-all duration-100 scale-90 hover:scale-100`} src={`${process.env.PUBLIC_URL}/imagenes/uam.png`}></img>
          </div>
        </div>
      </section>
    </section>
  )
}

export function Contract() {
  return (
    <section className="flex flex-col h-screen w-full" id="contract-section">
      <div className="flex justify-start align-top w-full h-20 gap-10 ml-10">
        <img className="invert h-3/6 w-auto mt-auto mb-auto" src={`${process.env.PUBLIC_URL}/imagenes/flecha-abajo-white.png`}></img>
        <h1 className="font-mono text-2xl mt-auto mb-auto">¿Que es lo que ofrecemos?</h1>
      </div>
      <div className="flex flex-col align-top w-full h-auto">
        <h1 className="font-mono text-lg mt-auto mb-auto w-8/12 self-center">En Lumina nos preocupamos por la integridad de tu informacion sin importar el tamaño de tu espacio, es por eso que contamos con los siguientes planes:</h1>
      </div>
    </section>
  )
}

