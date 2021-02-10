import {render, screen} from "@testing-library/react"
import {Astrobee} from "../src/Astrobee"
import {Canvas} from "react-three-fiber"
import {RESIZE_POLYFILL} from "./TestUtils"

test("Astrobee should render without exploding", () => {
    // given, when, then
    renderWithCanvasAndResize(<Astrobee/>)
})

export const renderWithCanvasAndResize = component => {
    return render(<Canvas resize={RESIZE_POLYFILL}>{component}</Canvas>)
}
