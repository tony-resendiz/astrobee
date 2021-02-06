import React, {Suspense, useRef, useState} from 'react'
import {useLoader, useFrame} from 'react-three-fiber'
import {ColladaLoader} from 'three/examples/jsm/loaders/ColladaLoader'
import {Matrix4} from 'three'

export const MODEL_FILES = [
    "/body.dae",
    "/pmc.dae",
    "/pmc_2.dae",
    "/pmc_bumper.dae",
    "/pmc_bumper_2.dae",
    "/pmc_skin_.dae",
    "/pmc_skin_2.dae"
]

export const MODELS_TO_FLIP = [
    "/pmc_2.dae",
    "/pmc_bumper_2.dae",
    "/pmc_skin_2.dae"
]

export const Astrobee = ({yRotation}) => {

    return (
        <Suspense
            fallback={<mesh/>}>
            {
                MODEL_FILES.map(file => {
                    return <DaeFromFile
                        key={file}
                        file={file}
                        yRotation={yRotation}
                    />
                })
            }
        </Suspense>
    )
}

export const DaeFromFile = ({file, yRotation}) => {

    const [hasFlipped, setHasFlipped] = useState([])

    const mesh = useRef()

    useFrame(() => {
        if (mesh.current) mesh.current.rotation.y += yRotation
    })

    const {scene} = useLoader(ColladaLoader, file)

    if (MODELS_TO_FLIP.includes(file) && !hasFlipped.includes(file)) {
        scene.applyMatrix4(new Matrix4().makeScale(1, 1, -1))
        setHasFlipped(hasFlipped.concat(file))
    }

    return (
        <primitive
            ref={mesh}
            object={scene}
            scale={[10, 10, 10]}
        />
    )
}
