import "./style.css";
import Section from "../section";



export default function Footer() {
    return (
        <>
            <footer id="contact">
                <Section title="Contato" />
                <div className="footer-content">
                    <div className="footer-links">
                        <a href="https://github.com/Joicylara" target="_blank" rel="noopener noreferrer">
                            <img src="src\assets\img\github.svg" alt="GitHub" />
                            <p>Github</p>
                        </a>
                        <a href="https://www.linkedin.com/in/joicy-kelly-dev/" target="_blank" rel="noopener noreferrer">
                            <img src="src\assets\img\linkedin.svg" alt="LinkedIn" />
                            <p>LinkedIn</p>
                        </a>
                        <a href="https://programadoresdoamanha.org/">
                            <p>Miniprojeto Módulo 5 do programa Programadores do Amanhã</p>
                        </a>

                    </div>
                </div>
            </footer>
        </>
    );
}
