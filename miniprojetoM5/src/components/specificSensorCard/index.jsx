import React, { useState } from "react";
import styles from "./style.module.css";

const SpecificSensorCard = ({ sensors }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(prev + itemsPerPage, sensors.length - 1));
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) => Math.max(prev - itemsPerPage, 0));
    };

    const displayedSensors = sensors.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <>
            <div>
                <div className={styles.cardContainer}>
                    {displayedSensors.map((sensor) => (
                        <div key={sensor.idUser} className={styles.card}>
                            <div className={styles.cardHeader}>Sensor ID: {sensor.idUser}</div>
                            <div className={styles.cardContent}>Valor do Sensor: {sensor.valueSensor}</div>
                            <div className={styles.cardLocation}>
                                Localização: {sensor.location.city}, {sensor.location.state} - {sensor.location.country}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.buttonContainer}>
                    <button onClick={handlePrevious} disabled={currentIndex === 0}>
                        Anterior
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={currentIndex + itemsPerPage >= sensors.length}
                    >
                        Próximo
                    </button>
                </div>
            </div>
        </>
    );
};

export default SpecificSensorCard;
