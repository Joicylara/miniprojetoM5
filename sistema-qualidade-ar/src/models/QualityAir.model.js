import { v4 as uuidv4 } from 'uuid';

export class QualityAir{
    constructor(temperature, humidity, iQA, status, location, sensors){
        this.idUser = uuidv4();
        this.temperature = temperature;
        this.humidity = humidity;
        this.iQA = iQA;
        this.status = status;
        this.location = location;
        this.sensors = sensors;
    }
}