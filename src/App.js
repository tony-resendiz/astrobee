import React, {useState} from "react";
import {Canvas} from "react-three-fiber";
import {Astrobee} from "./Astrobee";
import {RotationRadioGroup} from "./RotationRadioGroup";
import {CameraRadioGroup} from "./CameraRadioGroup";
import {CameraControl} from "./CameraControl";

export const App = () => {

    const [yRotationRate, setYRotationRate] = useState(0.01)
    const [cameraPosition, setCameraPosition] = useState({x: 0, y: 0, z: 10})

    return (
        <span style={{"display": "flex"}}>
            <RotationRadioGroup setYRotationRate={setYRotationRate}/>
            <CameraRadioGroup setCameraPosition={setCameraPosition}/>
            <div style={{"height": 512, "width": 512}}>
                <Canvas>
                    <ambientLight/>
                    <pointLight position={[10, 10, 10]}/>
                    <CameraControl cameraPosition={cameraPosition}/>
                    <Astrobee yRotationRate={yRotationRate}/>
                </Canvas>
            </div>
        </span>
    )
}

/**
 * princess
 * target
 * ralphs
 * home goods
 * play
 * cvs
 * big lots
 * trader joes
 * smart and final
 * receipt
 * furniture
 */
