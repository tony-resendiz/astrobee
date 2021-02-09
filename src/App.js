import React, {useState} from "react"
import {Canvas} from "react-three-fiber"
import {Astrobee} from "./Astrobee"
import {CameraControl} from "./CameraControl"
import {AstrobeeDemoMenu} from "./AstrobeeDemoMenu"
import {useStyles} from "./styles"

export const App = ({resize}) => {

    const classes = useStyles()

    const [yRotationRate, setYRotationRate] = useState(0.01)
    const [cameraPosition, setCameraPosition] = useState({x: 0, y: 0, z: 10})
    const [skin, setSkin] = useState("default")

    return (
        <span className={classes.root}>
            <AstrobeeDemoMenu
                setYRotationRate={setYRotationRate}
                setCameraPosition={setCameraPosition}
                setSkin={setSkin}
            />
            <Canvas resize={resize}>
                <ambientLight/>
                <pointLight position={[10, 10, 10]}/>
                <CameraControl cameraPosition={cameraPosition}/>
                <Astrobee yRotationRate={yRotationRate} skin={skin}/>
            </Canvas>
        </span>
    )
}
