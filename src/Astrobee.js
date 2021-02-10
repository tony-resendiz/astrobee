import React, {Suspense, useRef, useMemo} from "react"
import {useLoader, useFrame} from "react-three-fiber"
import {ColladaLoader} from "three/examples/jsm/loaders/ColladaLoader"
import {Matrix4} from "three"

export const models = {
    notMirrored: [
        "https://raw.githubusercontent.com/nasa/astrobee_media/master/astrobee_freeflyer/meshes/body.dae",
    ],
    mirrored: [
        "https://raw.githubusercontent.com/nasa/astrobee_media/master/astrobee_freeflyer/meshes/pmc.dae",
        "https://raw.githubusercontent.com/nasa/astrobee_media/master/astrobee_freeflyer/meshes/pmc_bumper.dae",
        "https://raw.githubusercontent.com/nasa/astrobee_media/master/astrobee_freeflyer/meshes/pmc_skin_.dae",
        "https://raw.githubusercontent.com/nasa/astrobee_media/master/astrobee_freeflyer/meshes/pmc_skin_honey.dae",
        "https://raw.githubusercontent.com/nasa/astrobee_media/master/astrobee_freeflyer/meshes/pmc_skin_bumble.dae",
        "https://raw.githubusercontent.com/nasa/astrobee_media/master/astrobee_freeflyer/meshes/pmc_skin_queen.dae",
    ]
}

export const SKIN_FILES_BY_KEY = {
    default: ["https://raw.githubusercontent.com/nasa/astrobee_media/master/astrobee_freeflyer/meshes/pmc_skin_.dae"],
    honey: ["https://raw.githubusercontent.com/nasa/astrobee_media/master/astrobee_freeflyer/meshes/pmc_skin_honey.dae"],
    bumble: ["https://raw.githubusercontent.com/nasa/astrobee_media/master/astrobee_freeflyer/meshes/pmc_skin_bumble.dae"],
    queen: ["https://raw.githubusercontent.com/nasa/astrobee_media/master/astrobee_freeflyer/meshes/pmc_skin_queen.dae"]
}

export const ALL_SKIN_FILES = Object.values(SKIN_FILES_BY_KEY).flatMap(file => file)

export const scale = [15,15,15]

export const Astrobee = ({yRotationRate, skin}) => {

    return (
        <Suspense
            fallback={<mesh/>}>
            {
                models.notMirrored.map(file => {
                    return <DaeFromFile
                        key={file}
                        file={file}
                        yRotationRate={yRotationRate}
                    />
                })
            }
            {
                models.mirrored.map(file => {
                    return <MirroredDaeFromFile
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

export const DaeFromFile = ({file, yRotationRate}) => {

    const mesh = useRef()

    useFrame(() => mesh.current.rotation.y += yRotationRate)

    const {scene} = useLoader(ColladaLoader, file)

    return (
        <primitive
            ref={mesh}
            object={scene}
            scale={scale}
        />
    )
}

export const MirroredDaeFromFile = ({file, yRotationRate, skin}) => {

    const mesh1 = useRef()
    const mesh2 = useRef()

    useFrame(() => mesh1.current.rotation.y = mesh2.current.rotation.y += yRotationRate)

    const {scene} = useLoader(ColladaLoader, file)

    const copiedScene = useMemo(() => {
        const clone = scene.clone()
        clone.applyMatrix4(new Matrix4().makeScale(1, 1, -1))
        return clone
    }, [scene])

    let shouldShowModel
    if (!ALL_SKIN_FILES.includes(file)) {
        shouldShowModel = true
    } else {
        shouldShowModel = SKIN_FILES_BY_KEY[skin].includes(file)
    }

    return (
        <group>
            <primitive
                ref={mesh1}
                object={scene}
                scale={scale}
                visible={shouldShowModel}
            />
            <primitive
                ref={mesh2}
                object={copiedScene}
                scale={scale}
                visible={shouldShowModel}
            />
        </group>
    )
}

