import React from 'react'
import {useFrame} from 'react-three-fiber'

export const CameraControl = ({cameraPosition}) => {

    useFrame(({camera }) => {
        camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z)
        camera.lookAt(0, 0, 0)
    })

    return null
}
