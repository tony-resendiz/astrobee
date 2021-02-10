import {render, fireEvent} from "@testing-library/react"
import {SkinSelect} from "../src/SkinSelect"

test("should render skin label and select", () => {
    // given, when
    const {getByTestId, getByText} = render(<SkinSelect/>)

    // then
    getByText("Skin")
    getByTestId("skin-select")
})

test("should set the proper skins", () => {
    // given
    const setSkin = jest.fn()
    const {getByTestId} = render(<SkinSelect setSkin={setSkin}/>)
    const skinSelect = getByTestId("skin-select")

    // when
    fireEvent.change(skinSelect, {target: {value: "honey"}})
    fireEvent.change(skinSelect, {target: {value: "bumble"}})
    fireEvent.change(skinSelect, {target: {value: "queen"}})
    fireEvent.change(skinSelect, {target: {value: "default"}})

    // then
    expect(setSkin).toHaveBeenCalledWith("honey")
    expect(setSkin).toHaveBeenCalledWith("bumble")
    expect(setSkin).toHaveBeenCalledWith("queen")
    expect(setSkin).toHaveBeenCalledWith("default")
})
