import React, {Suspense, useRef, useState} from 'react'
import {useLoader, useFrame} from 'react-three-fiber'
import {ColladaLoader} from 'three/examples/jsm/loaders/ColladaLoader'


export const Astrobee = () => {
    return (
        <Suspense
            fallback={<Box position={[-1.2, 0, 0]}/>}>
            <DaeFromFile file={'/body.dae'}/>
            <DaeFromFile file={'/pmc.dae'}/>
            <DaeFromFile file={'/pmc_bumper.dae'}/>
            <DaeFromFile file={'/pmc_skin_.dae'}/>
        </Suspense>
    )
}

export const DaeFromFile = ({file}) => {

    const mesh = useRef()

    useFrame(() => {
        if (mesh.current) mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })

    const {scene} = useLoader(ColladaLoader, file)

    return (
        <primitive
            ref={mesh}
            object={scene}
            scale={[15, 15, 15]}
        />
    )
}

export const Box = (props) => {
    const mesh = useRef()

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxBufferGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'}/>
        </mesh>
    )
}

