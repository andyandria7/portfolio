import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Je suis <span className="purple">ANDRIANARIMALALA Andy Anthony, développeur web spécialisé dans Vuejs et Laravel</span>.
            Titulaire d'une <span className="purple">licence en informatique, Risque et Décision</span>, de l'Université ESMIA à Mahamasina, et <span className="purple">diplômé en développement web</span> de HOPES Formation à Andavamamba Anjezika.
            <br />
            En 2021, j'ai suivi une <span className="purple">formation en développement web chez NirInfo</span> à Ampandrana, ainsi qu'un <span className="purple">stage en tant que développeur junior à l'Association Infinity Creative</span>, où j'ai participé à un projet de <span className="purple">développement de jeux en utilisant C# avec les outils Unity et Krita.</span>
            <br />
            En 2022, j'ai réalisé un  <span className="purple">stage chez Hulia à Tsiadana</span>, contribuant activement au <span className="purple">développement d'un site web avec Laravel</span>. 
            <br />
            En 2019, j'ai obtenu mon Baccalauréat série Technique à l'ESCA, Antanimena, ainsi que mon diplôme de BEP à Ampefiloha.
            <br />
            <br />
            Mes loisir!!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Film, serie, anime
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
