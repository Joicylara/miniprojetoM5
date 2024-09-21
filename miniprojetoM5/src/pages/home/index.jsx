import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/card";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Section from "../../components/section";
import CardCarousel from "../../components/cardCarousel";
import "./style.css";

export default function Home() {
    const [devices, setDevices] = useState([]);
    const [airQualityData, setAirQualityData] = useState([]);
    const [showData, setShowData] = useState(false);
    const [loadingDevices, setLoadingDevices] = useState(true);
    const [loadingAirQuality, setLoadingAirQuality] = useState(true);
    const [errorDevices, setErrorDevices] = useState(null);
    const [errorAirQuality, setErrorAirQuality] = useState(null);

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

    const toggleDataDisplay = () => {
        setShowData(!showData);
    };

    // Fetch para dispositivos
    useEffect(() => {
        const fetchDevices = async () => {
            try {
                const response = await axios.get('http://localhost:3000/searchDevice');
                setDevices(response.data.allDevice || []);
                setLoadingDevices(false);
            } catch (error) {
                console.error('Erro ao buscar dispositivos:', error);
                setErrorDevices('Erro ao buscar dispositivos');
                setLoadingDevices(false);
            }
        };

        fetchDevices();
    }, []);

    useEffect(() => {
        const fetchAirQualityData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/searchQualityAir');
                setAirQualityData(response.data.qualityAir || []); // Ajuste aqui
                setLoadingAirQuality(false);
            } catch (error) {
                console.error('Erro ao buscar classificação de qualidade do ar:', error);
                setErrorAirQuality('Erro ao buscar classificação de qualidade do ar');
                setLoadingAirQuality(false);
            }
        };

        fetchAirQualityData();
    }, []);


    // UseEffect para monitorar mudanças em airQualityData
    useEffect(() => {
        console.log("airQualityData atualizado:", airQualityData);
    }, [airQualityData]);

    return (
        <>
            <div className="body">
                <Header scrollToSection={scrollToSection} toggleMenu={toggleMenu} />

                {/* Seção de Dispositivos */}
                <section id="home" className="home">
                    <CardCarousel className="card-carousel"
                        title="Bem-vindo ao Sistema de Monitoramento da Qualidade do Ar"
                        description="Acompanhe a qualidade do ar e gerencie os dados facilmente."
                        devices={devices}
                        showData={showData}
                    />
                    <button onClick={toggleDataDisplay} className="show-data-button">
                        {showData ? "Ocultar os Dados dos Dispositivos" : "Mostrar Dados dos Dispositivos"}
                    </button>
                </section>

                {/* Seção de Dispositivos */}
                <Section id="device" title="Dispositivos">
                    <div className="card-container-device">
                        {loadingDevices && <p>Carregando dispositivos...</p>}
                        {errorDevices && <p>Erro: {errorDevices}</p>}
                        {!loadingDevices && devices.length === 0 && <p>Nenhum dispositivo encontrado.</p>}
                    </div>
                </Section>

                {/* Seção de Classificação da Qualidade do Ar */}
                <Section id="classification" title="Classificação">
                    <div className="classification-content">
                        {showData ? (
                            <CardCarousel className="card-classification"
                                title="Classificação da Qualidade do Ar"
                                description="Acompanhe os índices de classificação da qualidade do ar."
                                devices={airQualityData}
                                showData={showData}
                            />
                        ) : (
                            <div className="image-container">
                                <img src="src/assets/img/tabelaIndice.png" alt="Tabela de Índice" />
                            </div>
                        )}
                        <button onClick={toggleDataDisplay} className="toggle-button">
                            {showData ? "Mostrar Tabela de Índice" : "Mostrar registro da qualidade boa e moderada"}
                        </button>

                        {loadingAirQuality && <p>Carregando classificação de qualidade do ar...</p>}
                        {errorAirQuality && <p>Erro: {errorAirQuality}</p>}
                        {!loadingAirQuality && airQualityData.length === 0 && <p>Nenhuma classificação encontrada.</p>}
                    </div>
                </Section>




                <Footer />
            </div>
        </>
    );
}
