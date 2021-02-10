import {render, fireEvent} from "@testing-library/react"
import {ViewSelect} from "../src/ViewSelect"

test("should render view label and select", () => {
    // given, when
    const {getByTestId, getByText} = render(<ViewSelect/>)

    // then
    getByText("View")
    getByTestId("view-select")
})

test("should set the proper view", () => {
    // given
    const setCameraPosition = jest.fn()
    const {getByTestId} = render(<ViewSelect setCameraPosition={setCameraPosition}/>)
    const viewSelect = getByTestId("view-select")

    // when
    fireEvent.change(viewSelect, {target: {value: "top-down"}})
    fireEvent.change(viewSelect, {target: {value: "side"}})

    // then
    expect(setCameraPosition).toHaveBeenCalledWith({x: 0, y: 10, z: 0})
    expect(setCameraPosition).toHaveBeenCalledWith({x: 0, y: 0, z: 10})
})
