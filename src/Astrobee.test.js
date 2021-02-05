import {render, screen} from '@testing-library/react';
import {Astrobee} from './Astrobee';
import {Canvas} from 'react-three-fiber'
import {ResizeObserver} from '@juggle/resize-observer'

test('Astrobee should render', () => {
    const {container} = renderWithCanvasAndResize(<Astrobee/>)
    console.log('screen', screen)
    console.log('children', container.childElementCount)
    console.log('firstChild', container.firstChild)
});

export const renderWithCanvasAndResize = component => {
    return render(<Canvas resize={{polyfill: ResizeObserver}}>{component}</Canvas>);
}
