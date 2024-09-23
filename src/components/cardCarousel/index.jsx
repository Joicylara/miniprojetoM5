import React, { useState } from "react";
import DeviceCard from "../deviceCard";
import styles from "./style.module.css";



const CardCarousel = ({ className, title, description, devices, showData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsToShow = 2;
    const maxIndex = devices.length - cardsToShow;

    const scrollCarousel = (direction) => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + direction;
            if (newIndex < 0) return 0;
            if (newIndex > maxIndex) return maxIndex;
            return newIndex;
        });
    };

    return (
        <>
            <div className={`${className} ${styles.cardCarousel}`}>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className={styles.carouselContainer}>
                    {showData && devices.length > 0 ? (
                        devices.slice(currentIndex, currentIndex + cardsToShow).map((device, index) => (
                            <DeviceCard key={device.idUser} device={device} index={currentIndex + index} />
                        ))
                    ) : (
                        showData && <p>Nenhum dispositivo encontrado.</p>
                    )}
                </div>
                {showData && devices.length > cardsToShow && (
                    <>
                        <button className={`${styles.carouselButton} ${styles.left}`} onClick={() => scrollCarousel(-1)}>◀️</button>
                        <button className={`${styles.carouselButton} ${styles.right}`} onClick={() => scrollCarousel(1)}>▶️</button>
                    </>
                )}
            </div>
        </>
    );
};

export default CardCarousel;