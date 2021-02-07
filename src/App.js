import React, {useState} from "react";
import {Canvas} from "react-three-fiber";
import {Astrobee} from "./Astrobee";
import {RotationRadioGroup} from "./RotationRadioGroup";
import {CameraRadioGroup} from "./CameraRadioGroup";
import {CameraControl} from "./CameraControl";

export const App = () => {

    const [yRotation, setYRotation] = useState(0.01)
    const [cameraPosition, setCameraPosition] = useState({x: 0, y: 0, z: 10})

    return (
        <span style={{"display": "flex"}}>
            <RotationRadioGroup setYRotation={setYRotation}/>
            <CameraRadioGroup setCameraPosition={setCameraPosition}/>
            <div style={{"height": 512, "width": 512}}>
                <Canvas camera={cameraPosition}>
                    <ambientLight/>
                    <pointLight position={[10, 10, 10]}/>
                    <CameraControl cameraPosition={cameraPosition}/>
                    <Astrobee yRotation={yRotation}/>
                </Canvas>
            </div>
        </span>
    )
}
