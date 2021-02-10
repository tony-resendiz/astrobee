import {render} from "@testing-library/react"
import {App} from "../src/App"
import {resizePolyfill} from "./TestUtils";

test("should render with an AstrobeeDemoMenu and Canvas", () => {
    // given, when
    const {container, getByText} = render(<App resize={resizePolyfill}/>)
    const canvas = container.querySelector("canvas")

    // then
    expect(canvas).toBeDefined()
    getByText("Astrobee Demo")
})
