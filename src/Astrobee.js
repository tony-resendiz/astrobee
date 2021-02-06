import React, {Suspense, useRef, useState} from 'react'
import {useLoader, useFrame} from 'react-three-fiber'
import {ColladaLoader} from 'three/examples/jsm/loaders/ColladaLoader'
import {Matrix4} from 'three'


export const Astrobee = ({yRotation}) => {
    return (
        <Suspense
            fallback={<mesh/>}>
            <DaeFromFile file={'/body.dae'} yRotation={yRotation}/>
            <DaeFromFile file={'/pmc.dae'} yRotation={yRotation}/>
            <DaeFromFile file={'/pmc_2.dae'} flipZ yRotation={yRotation}/>
            <DaeFromFile file={'/pmc_bumper.dae'} yRotation={yRotation}/>
            <DaeFromFile file={'/pmc_bumper_2.dae'} flipZ yRotation={yRotation}/>
            <DaeFromFile file={'/pmc_skin_.dae'} yRotation={yRotation}/>
            <DaeFromFile file={'/pmc_skin_2.dae'} flipZ yRotation={yRotation}/>
        </Suspense>
    )
}

export const DaeFromFile = ({file, flipZ, yRotation}) => {

    const mesh = useRef()

    useFrame(() => {
        if (mesh.current) mesh.current.rotation.y += yRotation
    })

    const {scene} = useLoader(ColladaLoader, file)

    if (flipZ) scene.applyMatrix4(new Matrix4().makeScale(1, 1, -1));

    return (
        <primitive
            ref={mesh}
            object={scene}
            scale={[10, 10, 10]}
        />
    )
}
