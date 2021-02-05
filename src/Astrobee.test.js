import {render, screen} from '@testing-library/react';
import {Astrobee} from './Astrobee';
import {Canvas} from 'react-three-fiber'

test('Astrobee should render', () => {
    render(<Canvas><Astrobee/></Canvas>);
    const daes = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
});
