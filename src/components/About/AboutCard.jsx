import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Je suis <span className="purple">ANDRIANARIMALALA Andy Anthony, développeur web spécialisé dans React et Laravel</span>.
          J'ai obtenu une <span className="purple">licence en informatique, Risque et Décision, </span>
            à de l'Université ESMIA à Mahamasina.
            <br />
            En 2021, j'ai réalisé un stage de développeur junior à l'Association Infinity Creative, où j'ai travaillé sur un projet de développement de jeux en utilisant la programmation en C# avec les outils Unity et Krita.
            <br />
            En 2022, j'ai effectué un autre stage chez Hulia à Tsiadana, où j'ai contribué au développement d'un site web.
            <br />
            Actuellement étudiant en je suis <span className="purple">étudiant en développement web chez HOPES Formation,</span> située à Andavamamba Anjezika.
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
