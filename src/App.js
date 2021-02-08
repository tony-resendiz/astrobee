import React, {useState} from "react"
import {Canvas} from "react-three-fiber"
import {Astrobee} from "./Astrobee"
import {CameraControl} from "./CameraControl"
import {AstrobeeDemoMenu} from "./AstrobeeDemoMenu"

export const App = () => {

    const [yRotationRate, setYRotationRate] = useState(0.01)
    const [cameraPosition, setCameraPosition] = useState({x: 0, y: 0, z: 10})
    const [skin, setSkin] = useState("default")

    return (
        <span style={{"display": "inline-flex"}}>
            <AstrobeeDemoMenu
                setYRotationRate={setYRotationRate}
                setCameraPosition={setCameraPosition}
                setSkin={setSkin}
            />
            <span style={{"height": "100vh", "width": "100vh"}}>
                <Canvas>
                    <ambientLight/>
                    <pointLight position={[10, 10, 10]}/>
                    <CameraControl cameraPosition={cameraPosition}/>
                    <Astrobee yRotationRate={yRotationRate} skin={skin}/>
                </Canvas>
            </span>
        </span>
    )
}
