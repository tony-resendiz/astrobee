import React, {useState} from "react";
import {Canvas} from "react-three-fiber";
import {Astrobee} from "./Astrobee";
import {RotationRadioGroup} from "./RotationRadioGroup";

export const App = () => {

    const [yRotation, setYRotation] = useState(0.01)

    return (
        <span>
            <RotationRadioGroup setYRotation={setYRotation}/>
            <div style={{"height": 512, "width": 512}}>
                <Canvas>
                    <ambientLight/>
                    <pointLight position={[10, 10, 10]}/>
                    <Astrobee yRotation={yRotation}/>
                </Canvas>
            </div>
        </span>
    )
}
