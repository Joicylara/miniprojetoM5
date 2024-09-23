import React from "react";
import styles from "./style.module.css";

const SearchBar = ({ sensorName, setSensorName, fetchSpecificSensorData }) => {
    return (
        <>
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    value={sensorName}
                    onChange={(e) => setSensorName(e.target.value)}
                    placeholder="Digite o nome do gás poluente"
                />
                <button onClick={fetchSpecificSensorData}>Buscar</button>
            </div>
        </>
    );
};

export default SearchBar;
