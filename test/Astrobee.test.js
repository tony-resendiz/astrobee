import {render, screen} from '@testing-library/react'
import {Astrobee} from '../src/Astrobee'
import {Canvas} from 'react-three-fiber'
import {ResizeObserver} from '@juggle/resize-observer'

test('Astrobee should render', () => {
    const {container} = renderWithCanvasAndResize(<Astrobee/>)
})

export const renderWithCanvasAndResize = component => {
    return render(<Canvas resize={{polyfill: ResizeObserver}}>{component}</Canvas>)
}
