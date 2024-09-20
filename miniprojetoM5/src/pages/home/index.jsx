import Card from "../../components/card";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Section from "../../components/section";
import "./style.css"


export default function Home() {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    function toggleMenu() {
        const mobileMenu = document.querySelector('.mobile-menu');
        mobileMenu.classList.toggle('open');
    }

    return (
        // html
        <>
            <div className="body">
                <Header scrollToSection={scrollToSection} toggleMenu={toggleMenu} />

                <section id="home" className="home">
                    <Card className="card" title="Bem-vindo ao Sistema de Monitoramento da Qualidade do Ar" description="Acompanhe a qualidade do ar e gerencie os dados facilmente." />
                </section>

                <Section id="classification" title="Classificação">
                    <div className="classification-content">
                        <div className="image-container">
                            <img src="src/assets/img/tabelaIndice.png" alt="Tabela de Índice" />
                        </div>
                        <div className="card-container-classification">
                            <Card className="card-classification" title="Classificação da Qualidade do Ar" description="Acompanhe os índices de qualidade do ar em tempo real." />
                        </div>
                    </div>
                </Section>

                <Section id="device" title="Dispositivos">
                    <div className="card-container-device">
                        <Card className="card-device" title="Classificação da Qualidade do Ar" description="Acompanhe os índices de qualidade do ar em tempo real." />
                    </div>
                </Section>

                <Footer />
            </div>
        </>

    );
}