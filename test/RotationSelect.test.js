import {render, fireEvent} from "@testing-library/react"
import {RotationSelect} from "../src/RotationSelect"

test("should render rotation label and select", () => {
    // given, when
    const {getByTestId, getByText} = render(<RotationSelect/>)

    // then
    getByText("Rotation")
    getByTestId("rotation-select")
})

test("should set the proper yRotationRate", () => {
    // given
    const setYRotationRate = jest.fn()
    const {getByTestId} = render(<RotationSelect setYRotationRate={setYRotationRate}/>)
    const rotationSelect = getByTestId("rotation-select")

    // when
    fireEvent.change(rotationSelect, {target: {value: "counter clockwise"}})
    fireEvent.change(rotationSelect, {target: {value: "clockwise"}})

    // then
    expect(setYRotationRate).toHaveBeenCalledWith(-0.01)
    expect(setYRotationRate).toHaveBeenCalledWith(0.01)
})
