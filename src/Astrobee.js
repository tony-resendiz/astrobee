import React, {Suspense, useRef, useMemo} from "react"
import {useLoader, useFrame} from "react-three-fiber"
import {ColladaLoader} from "three/examples/jsm/loaders/ColladaLoader"
import {Matrix4} from "three"

export const skinFilesByKey = {
    default: "https://raw.githubusercontent.com/nasa/astrobee_media/master/astrobee_freeflyer/meshes/pmc_skin_.dae",
    honey: "https://raw.githubusercontent.com/nasa/astrobee_media/master/astrobee_freeflyer/meshes/pmc_skin_honey.dae",
    bumble: "https://raw.githubusercontent.com/nasa/astrobee_media/master/astrobee_freeflyer/meshes/pmc_skin_bumble.dae",
    queen: "https://raw.githubusercontent.com/nasa/astrobee_media/master/astrobee_freeflyer/meshes/pmc_skin_queen.dae"
}

export const allSkinFiles = Object.values(skinFilesByKey).flatMap(file => file)

export const mirroredModels = [
    "https://raw.githubusercontent.com/nasa/astrobee_media/master/astrobee_freeflyer/meshes/pmc.dae",
    "https://raw.githubusercontent.com/nasa/astrobee_media/master/astrobee_freeflyer/meshes/pmc_bumper.dae",
].concat(allSkinFiles)

export const modelScale = [15, 15, 15]

export const Astrobee = ({yRotationRate, skin}) => {

    return (
        <Suspense
            fallback={<mesh/>}>
            <DaeFromFile
                file={"https://raw.githubusercontent.com/nasa/astrobee_media/master/astrobee_freeflyer/meshes/body.dae"}
                yRotationRate={yRotationRate}
            />
            {
                mirroredModels.map(file => {
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
            scale={modelScale}
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

    // i wanted to make this a skin abstraction but didn't have time
    // maybe do something like Skin -> MirroredDae -> Dae
    let shouldShowModel
    if (!allSkinFiles.includes(file)) {
        shouldShowModel = true
    } else {
        shouldShowModel = skinFilesByKey[skin] == file
    }

    return (
        <group>
            <primitive
                ref={mesh1}
                object={scene}
                scale={modelScale}
                visible={shouldShowModel}
            />
            <primitive
                ref={mesh2}
                object={copiedScene}
                scale={modelScale}
                visible={shouldShowModel}
            />
        </group>
    )
}

