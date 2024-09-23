import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Section from "../../components/section";
import CardCarousel from "../../components/cardCarousel";
import "./style.css";
import SpecificSensorCard from "../../components/specificSensorCard";
import SearchBar from "../../components/searchBar";
import Card from "../../components/card";


export default function Home() {

    const [devices, setDevices] = useState([]);
    const [loadingDevices, setLoadingDevices] = useState(true);
    const [errorDevices, setErrorDevices] = useState(null);
    const [showDeviceData, setShowDeviceData] = useState(false);

    const [airQualityData, setAirQualityData] = useState([]);
    const [showAirQualityData, setShowAirQualityData] = useState(false);
    const [loadingAirQuality, setLoadingAirQuality] = useState(true);
    const [errorAirQuality, setErrorAirQuality] = useState(null);
    
    const [sensorName, setSensorName] = useState("");
    const [specificSensorData, setSpecificSensorData] = useState([]);
    const [loadingSpecificSensor, setLoadingSpecificSensor] = useState(false);
    const [errorSpecificSensor, setErrorSpecificSensor] = useState(null);


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

    const toggleDeviceDataDisplay = () => {
        setShowDeviceData(prev => !prev);
        if (showAirQualityData) setShowAirQualityData(false); 
    };

    const toggleAirQualityDataDisplay = () => {
        setShowAirQualityData(prev => !prev);
        if (showDeviceData) setShowDeviceData(false); 
    };

    useEffect(() => {
        const fetchDevices = async () => {
            try {
                const response = await axios.get('https://teste-deploy-api-6s8g.onrender.com/searchDevice');
                const sensorData = response.data.allDevice || [];
                setDevices(sensorData);
                setLoadingDevices(false);
            } catch (error) {
                setErrorDevices('Erro ao buscar dispositivos');
                setLoadingDevices(false);
            }
        };

        fetchDevices();
    }, []);

    useEffect(() => {
        const fetchAirQualityData = async () => {
            try {
                const response = await axios.get('https://teste-deploy-api-6s8g.onrender.com/searchQualityAir');
                setAirQualityData(response.data.qualityAir || []);
                setLoadingAirQuality(false);
            } catch (error) {
                setErrorAirQuality('Erro ao buscar classificação de qualidade do ar');
                setLoadingAirQuality(false);
            }
        };

        fetchAirQualityData();
    }, []);

    const fetchSpecificSensorData = async () => {
        if (!sensorName) return;
        setLoadingSpecificSensor(true);
        setErrorSpecificSensor(null);

        try {
            const response = await axios.get(`https://teste-deploy-api-6s8g.onrender.com/searchSensorSpecific/${sensorName}`);
            if (response.data.sensorSpecific && response.data.sensorSpecific.length > 0) {
                setSpecificSensorData(response.data.sensorSpecific);
            } else {
                setSpecificSensorData([]);
            }
            setLoadingSpecificSensor(false);
        } catch (error) {
            setErrorSpecificSensor('Erro ao buscar sensor específico');
            setLoadingSpecificSensor(false);
        }
    };

    return (
        <>
            <div className="body">
                <Header scrollToSection={scrollToSection} toggleMenu={toggleMenu} />

                <section id="home" className="home">
                    <CardCarousel
                        title="Bem-vindo ao Sistema de Monitoramento da Qualidade do Ar"
                        description="Acompanhe a qualidade do ar e gerencie os dados facilmente."
                        devices={devices}
                        showData={showDeviceData}
                    />
                    <button onClick={toggleDeviceDataDisplay} className="show-data-button">
                        {showDeviceData ? "Ocultar os Dados dos Dispositivos" : "Mostrar Dados dos Dispositivos"}
                    </button>
                </section>

                <Section id="device" className="sensors" title="Sensores">
                    <SearchBar
                        sensorName={sensorName}
                        setSensorName={setSensorName}
                        fetchSpecificSensorData={fetchSpecificSensorData}
                    />
                    <div className="card-container-device">
                        {specificSensorData.length === 0 && !sensorName ? (
                            <Card className="card"
                                title="Busca de Sensor Específico"
                                description={
                                    <>
                                        Encontre e monitore dados específicos de um sensor.
                                        Mantenha-se informado sobre a qualidade do ar em diferentes regiões.<br />
                                        Os sensores são: PM2_5, PM10, CO, NO2, O3, SO2, smoke.<br />
                                        OBS: pesquise com essas nomenclaturas
                                    </>
                                }
                            />
                        ) : null}

                        {loadingSpecificSensor && <p>Carregando dados do sensor...</p>}
                        {errorSpecificSensor && <p>Erro: {errorSpecificSensor}</p>}
                        {!loadingSpecificSensor && specificSensorData.length === 0 && sensorName && (
                            <Card className="card"
                                title="Nenhum sensor encontrado"
                                description="Tente novamente seguindo a nomenclatura correta"
                            />
                        )}
                        {Array.isArray(specificSensorData) && specificSensorData.length > 0 && (
                            <SpecificSensorCard sensors={specificSensorData} />
                        )}
                    </div>
                </Section>

                <Section id="classification" title="Classificação">
                    <div className="classification-content">
                        {showAirQualityData ? (
                            <CardCarousel className="card-classification"
                                title="Classificação da Qualidade do Ar"
                                description="Acompanhe os índices de classificação da qualidade do ar."
                                devices={airQualityData}
                                showData={showAirQualityData}
                            />
                        ) : (
                            <div className="image-container">
                                <img src="src\assets\img\tabelaIndice.png" alt="Tabela de Índice" />
                            </div>
                        )}

                        <button onClick={toggleAirQualityDataDisplay} className="show-data-button">
                            {showAirQualityData ? "Ocultar Classificação" : "Mostrar Classificação"}
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
