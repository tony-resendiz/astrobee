import {render, screen} from "@testing-library/react"
import {AstrobeeDemoMenu} from "../src/AstrobeeDemoMenu"

test("AstrobeeDemoMenu should render header and select menus", async () => {
    // given, when
    render(<AstrobeeDemoMenu />)

    // then
    await screen.findByText("Astrobee Demo")
    await screen.findByText("Rotation")
    await screen.findByText("Clockwise")
    await screen.findByText("View")
    await screen.findByText("Side")
    await screen.findByText("Skin")
    await screen.findByText("Default")
})
