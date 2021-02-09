import React, {Suspense, useRef, useState} from "react"
import {useLoader, useFrame} from "react-three-fiber"
import {ColladaLoader} from "three/examples/jsm/loaders/ColladaLoader"
import {Matrix4} from "three"

export const ALL_MODEL_FILES = [
    "/body.dae",
    "/pmc.dae",
    "/pmc_2.dae",
    "/pmc_bumper.dae",
    "/pmc_bumper_2.dae",
    "/pmc_skin_.dae",
    "/pmc_skin_2.dae",
    "/pmc_skin_honey.dae",
    "/pmc_skin_honey_2.dae",
    "/pmc_skin_bumble.dae",
    "/pmc_skin_bumble_2.dae",
    "/pmc_skin_queen.dae",
    "/pmc_skin_queen_2.dae"
]

export const SKIN_FILES_BY_KEY = {
    default: ["/pmc_skin_.dae", "/pmc_skin_2.dae"],
    honey: ["/pmc_skin_honey.dae", "/pmc_skin_honey_2.dae"],
    bumble: ["/pmc_skin_bumble.dae", "/pmc_skin_bumble_2.dae"],
    queen: ["/pmc_skin_queen.dae", "/pmc_skin_queen_2.dae"]
}

export const ALL_SKIN_FILES = Object.values(SKIN_FILES_BY_KEY).flatMap(file => file)

export const MODELS_TO_FLIP = [
    "/pmc_2.dae",
    "/pmc_bumper_2.dae",
    "/pmc_skin_2.dae",
    "/pmc_skin_honey_2.dae",
    "/pmc_skin_bumble_2.dae",
    "/pmc_skin_queen_2.dae"
]

export const Astrobee = ({yRotationRate, skin}) => {

    return (
        <Suspense
            fallback={<mesh/>}>
            {
                ALL_MODEL_FILES.map(file => {
                    return <DaeFromFile
                        key={file}
                        file={file}
                        yRotationRate={yRotationRate}
                        skin={skin}
                    />
                })
            }
        </Suspense>
    )
}

export const DaeFromFile = ({file, yRotationRate, skin}) => {

    const [hasFlipped, setHasFlipped] = useState([])

    const mesh = useRef()

    useFrame(() => {
        if (mesh.current) mesh.current.rotation.y += yRotationRate
    })

    const {scene} = useLoader(ColladaLoader, file)

    if (MODELS_TO_FLIP.includes(file) && !hasFlipped.includes(file)) {
        scene.applyMatrix4(new Matrix4().makeScale(1, 1, -1))
        setHasFlipped(hasFlipped.concat(file))
    }

    let shouldShowModel
    if (!ALL_SKIN_FILES.includes(file)) {
        shouldShowModel = true
    } else {
        shouldShowModel = SKIN_FILES_BY_KEY[skin].includes(file)
    }

    return (
        <primitive
            ref={mesh}
            object={scene}
            scale={[10, 10, 10]}
            visible={shouldShowModel}
        />
    )
}
