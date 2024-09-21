import React, { useState } from "react";
import DeviceCard from "../deviceCard"; // Ajuste o caminho conforme necessário
import "./style.css";

const CardCarousel = ({className, title, description, devices, showData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsToShow = 2; // Número de cards a mostrar
    const maxIndex = devices.length - cardsToShow; // Índice máximo permitido

    const scrollCarousel = (direction) => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + direction;
            if (newIndex < 0) return 0; // Limita o índice inferior
            if (newIndex > maxIndex) return maxIndex; // Limita o índice superior
            return newIndex;
        });
    };

    return (
        <>
            <div className= {className}>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="carousel-container">
                    {showData && devices.length > 0 ? (
                        devices.slice(currentIndex, currentIndex + cardsToShow).map((device, index) => (
                            <DeviceCard key={device.idUser} device={device} index={currentIndex + index} />
                        ))
                    ) : (
                        showData && <p>Nenhum dispositivo encontrado.</p>
                    )}
                </div>
                {showData && devices.length > cardsToShow && ( // Mostrar setas apenas se houver mais dispositivos
                    <>
                        <button className="carousel-button left" onClick={() => scrollCarousel(-1)}>◀️</button>
                        <button className="carousel-button right" onClick={() => scrollCarousel(1)}>▶️</button>
                    </>
                )}
            </div>
        </>
    );
};

export default CardCarousel;
