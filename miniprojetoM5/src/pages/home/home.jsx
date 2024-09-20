import Header from "../../components/header/header.jsx"
import "./home.css"


export default function Home() {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        // html
        <>
            <div className="body">
                <header className="header">
                    <div className="title">
                        <h1>Ar Puro</h1>
                    </div>
                    <nav className="nav">
                        <button onClick={() => scrollToSection('home')}>Home</button>
                        <button onClick={() => scrollToSection('classification')}>Classificação</button>
                        <button onClick={() => scrollToSection('device')}>Dispositivos</button>
                        <button onClick={() => scrollToSection('contact')}>Contato</button>
                    </nav>

                </header>

                <section id="home" className="home">
                    <div className="card">
                        <h1>Bem-vindo ao Sistema de Monitoramento da Qualidade do Ar</h1>
                        <p>Acompanhe a qualidade do ar e gerencie os dados facilmente.</p>
                    </div>
                </section>

                
                <section id="classification">
                    <header className="header-section">
                        <h2>Classificação</h2>
                    </header>
                    <div className="classification-content">
                        <div className="image-container">
                            <img src="src/assets/img/tabelaIndice.png" alt="Tabela de Índice" />
                        </div>

                        <div className="card-container-classification">
                            <div className="card-classification">
                                <h1>Classificação da Qualidade do Ar</h1>
                                <p>Acompanhe os índices de qualidade do ar em tempo real.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="device">
                    <header className="header-section">
                        <h2>Dispositivos</h2>
                    </header>
                    <div className="card-container-device">
                        <div className="card-device">
                            <h1>Classificação da Qualidade do Ar</h1>
                            <p>Acompanhe os índices de qualidade do ar em tempo real.</p>
                        </div>
                    </div>
                </section>
                <footer id="contact">
                    <header className="header-section">
                        <h2>Contato</h2>
                    </header>
                    <div className="footer-first">
                        <h3>Ar Puro</h3>
                        <p>Blog</p>
                        <p>Preguntas frequentes</p>
                        <p>Termos da Política de Privacidade</p>
                        <div>
                            <p>icons</p>
                        </div>
                    </div>

                </footer>
            </div>
        </>

    );
}