import React from 'react';
import ReactDOM from 'react-dom';
import {Canvas} from 'react-three-fiber'
import {Astrobee} from './Astrobee'

ReactDOM.render(
    <Canvas>
        <ambientLight/>
        <pointLight position={[10, 10, 10]}/>
        <Astrobee/>
    </Canvas>,
    document.getElementById('root')
);
