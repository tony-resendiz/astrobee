import {render, screen} from '@testing-library/react'
import {App} from '../src/App'
import {RESIZE_POLYFILL} from "./TestUtils";

test("App should render with an AstrobeeDemoMenu and Canvas", async () => {
    const { container } = render(<App resize={RESIZE_POLYFILL}/>)
    const canvas = container.querySelector("canvas")
    expect(canvas).toBeDefined()
    await screen.findByText("Astrobee Demo")
})
