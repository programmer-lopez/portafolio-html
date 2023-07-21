import { Links } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";

import stylesUrl from "./styles/about.css";
import about from "../../public/img/about.jpg";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];
export default function AboutPortafolioRoute() {
  return (
    <main>
      <div className="about-content">
        <Links />
        <h2 style={{ textAlign: "center" }}>Desarrollador de Software</h2>
        <h5 style={{ textAlign: "center" }}>Sobre mí</h5>
        <div className="about-container">
          <div className="card">
            <div className="card-content">
              <div className="card-conteiner">
                <span></span>
                <div className="img">
                  <img src={about} alt="Portafolio" />
                </div>
                <p>
                  Soy una persona que precisa instrucciones organizadas para que
                  un ordenador pueda ejecutar sistemas, programas y aplicaciones
                  que sean eficaces, accesibles y afable. Con atención, esfuerzo
                  y perseverancia.
                </p>
              </div>
              <div className="card-links">
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="https://github.com/programmer-lopez/portafolio-html.git">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/marcos-lopez-sanchez-455271219/">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-conteiner">
                <span></span>
                <h6>Experiencias</h6>
                <p>
                  Me estoy enfocando en aprender nuevas tecnoloías, actualmente
                  Remix es una de ellas, éste Portafolio esta desarrollado en
                  Remix-tsx.
                </p>
                <h6>Disponibilidad y compromiso </h6>
                <p>
                  Cuento con toda la disponibilidad de esfuerzo, dedicación y
                  tiempo. Enfrento situaciones comunes dentro del desarrollo de software,
                   habilidades para trabajar  bajo presión tanto responsabilidad para un
                  crecimiento propio, con una curva de aprendizaje descendente.
                </p>                
              </div>
              <div className="card-links">
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="https://github.com/programmer-lopez/portafolio-html.git">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/marcos-lopez-sanchez-455271219/">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
