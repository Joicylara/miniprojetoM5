import Card from "../card";
import "./style.css";


export default function DeviceCard({ device, index }) {
    return (
        <>
            <Card
                className="card-device-all"
                title={`Dispositivo ${index + 1} - ${device.location.city}, ${device.location.state}`}
                description={
                    <div>
                        <strong>Temperatura:</strong> {device.temperature}°C<br />
                        <strong>Umidade:</strong> {device.humidity}%<br />
                        <strong>Índice de Qualidade do Ar:</strong> {device.iQA}<br />
                        <strong>Status:</strong> {device.status}<br />
                        <strong>Localização:</strong> {device.location.city}, {device.location.state}, {device.location.country}<br />
                        <strong>Sensores:</strong>
                        <ul>
                            <li>PM2.5: {device.sensors.PM2_5}</li>
                            <li>PM10: {device.sensors.PM10}</li>
                            <li>CO: {device.sensors.CO}</li>
                            <li>NO2: {device.sensors.NO2}</li>
                            <li>O3: {device.sensors.O3}</li>
                            <li>SO2: {device.sensors.SO2}</li>
                            <li>Fumaça: {device.sensors.smoke}</li>
                        </ul>
                    </div>
                }
            />
        </>
    );
}
