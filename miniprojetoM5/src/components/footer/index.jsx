import "./style.css"
import Section from "../section";

export default function Footer() {
    return (
        <>
            <footer id="contact">
                <Section title="Contato" />
                <div className="footer-first">
                    <h3>Ar Puro</h3>
                    <p>Blog</p>
                    <p>Perguntas frequentes</p>
                    <p>Termos da Política de Privacidade</p>
                    <div>
                        <p>icons</p>
                    </div>
                </div>
            </footer>
        </>
    );
}