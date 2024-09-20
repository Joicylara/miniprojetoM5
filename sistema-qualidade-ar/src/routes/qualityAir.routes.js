import { Router } from "express";
import { createUser, deleteUserInactive, searchAll, searchId, searchSensors, searchState, searcQualityAir, updateStatus } from "../controllers/qualityAir.controller.js";

const deviceAirRouter = Router();


deviceAirRouter.post("/newUser", (req, res) =>{
    const {temperature, humidity, iQA, status, location, sensors } = req.body;
    const newUser = createUser(temperature, humidity, iQA, status, location, sensors);
    res.status(201).json({ newUser });
});

deviceAirRouter.get("/searchDevice", (req, res) =>{
    const allDevice = searchAll();
    res.status(200).json({allDevice});
});

deviceAirRouter.get("/searchQualityAir", (req, res) =>{
    const qualityAir = searcQualityAir();
    res.status(200).json({qualityAir});
});

deviceAirRouter.get("/searchDevice/:id", (req, res) =>{
    const { id } =  req.params;
    const userId = searchId(id);
    res.status(200).json({userId});
});

deviceAirRouter.get("/searchSensorSpecific/:sensors", (req, res) =>{
    const { sensors } = req.params;
    const sensorSpecific = searchSensors(sensors);
    res.status(200).json({sensorSpecific});
});

deviceAirRouter.get("/searchState/:state", (req, res) =>{
    const { state } = req.params;
    const stateSpecific = searchState(state);
    res.status(200).json({stateSpecific});
});

deviceAirRouter.patch("/updateStatus/:id", (req, res) =>{
    const { id } = req.params;
    const { status } = req.body;
    const newDevice = updateStatus(id, status);
    res.status(200).json({newDevice});
});

deviceAirRouter.delete("/deleteStatus/:id", (req, res) => {
    const { id } = req.params;
    const statusInactive = deleteUserInactive(id);
    res.status(200).json({statusInactive});
});

export { deviceAirRouter }
