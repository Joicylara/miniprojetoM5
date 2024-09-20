import "./style.css"

export default function Header({ scrollToSection, toggleMenu }) {
    return (
        <>
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

                <div className="hamburger-menu" onClick={toggleMenu}>&#9776;</div>
                <div className="mobile-menu">
                    <button onClick={() => scrollToSection('home')}>Home</button>
                    <button onClick={() => scrollToSection('classification')}>Classificação</button>
                    <button onClick={() => scrollToSection('device')}>Dispositivos</button>
                    <button onClick={() => scrollToSection('contact')}>Contato</button>
                    
                </div>

            </header>
        </>

    );
}