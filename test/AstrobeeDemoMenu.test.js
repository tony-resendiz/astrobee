import {render, screen} from '@testing-library/react'
import {AstrobeeDemoMenu} from "../src/AstrobeeDemoMenu";

test("AstrobeeDemoMenu should render header and select menus", async () => {
    render(<AstrobeeDemoMenu />)
    await screen.findByText("Astrobee Demo")
    await screen.findByText("Rotation")
    await screen.findByText("View")
    await screen.findByText("Skin")
})