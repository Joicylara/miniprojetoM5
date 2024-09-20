import { QualityAir } from "../models/QualityAir.model.js";
import { listDeviceQualityAir } from "../data/listDeviceQualityAir.js";

export const createUser = (temperature, humidity, iQA, status, location, sensors) => {
    let user = new QualityAir(temperature, humidity, iQA, status, location, sensors);
    listDeviceQualityAir.push(user);
    return user;
}

export const searchAll = () => {
    return listDeviceQualityAir;
}

export const searcQualityAir = () => {
    return listDeviceQualityAir.filter(({ iQA }) => iQA == "Good" || iQA == "Moderate");
}

export const searchId = (userId) =>{
    const idExist = listDeviceQualityAir.find(id => id.idUser === userId);
    if(idExist){
        return listDeviceQualityAir.find(({idUser}) => idUser === userId);
    }else{
        return "Esse id não existe";
    }
}

export const searchSensors = (sensorSpecific) =>{
    const sensorsExist = listDeviceQualityAir.filter(sensor => sensor.sensors[sensorSpecific] !== undefined);
    if(sensorsExist.length > 0){
        return listDeviceQualityAir.filter(data => sensorSpecific && data.sensors).map(specificSensor => ({
            idUser: specificSensor.idUser,
            valueSensor: specificSensor.sensors[sensorSpecific],
            location: specificSensor.location
        }));
    }else{
        return "Esse sensor não existe";
    }       
}

export const searchState = (stateSpecific) => {
    const devicesInState = listDeviceQualityAir.filter(({location}) => location.state === stateSpecific);
    
    if (devicesInState.length > 0) {
        return devicesInState;
    } else {
        return "Não temos dispositivo nesse estado ou a nomeclatura para busca esta incorreta, tente tudo em caps lock";
    }
};

export const updateStatus = (userId, status) =>{
    const idExist = listDeviceQualityAir.find(id => id.idUser === userId);
    if(idExist){
        let indexId = listDeviceQualityAir.findIndex(user => user.idUser === userId);
        if(status === "Active" || status === "Inactive"){
            listDeviceQualityAir[indexId].status = status;
            return listDeviceQualityAir[indexId];
        }else{
            return "Não pode ser valores diferentes de 'Active' e 'Inactive'";
        }   
    }else{
        return "Esse id não existe";
    }
}

export const deleteUserInactive = (userId) => {
    const idExist = listDeviceQualityAir.find(id => id.idUser === userId);
    if (idExist && idExist.status === "Inactive") {
        const indexId = listDeviceQualityAir.findIndex(id => id.idUser === userId);
        listDeviceQualityAir.splice(indexId, 1);
        return "Usuário inativo removido.";
    } else {
        return "Esse id não existe e/ou o status não está inativo";
    }
};
