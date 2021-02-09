import {render} from "@testing-library/react"
import {App} from "../src/App"
import {RESIZE_POLYFILL} from "./TestUtils";

test("should render with an AstrobeeDemoMenu and Canvas", () => {
    // given, when
    const {container, getByText} = render(<App resize={RESIZE_POLYFILL}/>)
    const canvas = container.querySelector("canvas")

    // then
    expect(canvas).toBeDefined()
    getByText("Astrobee Demo")
})
