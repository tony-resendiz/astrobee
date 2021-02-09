import {render, screen, fireEvent} from "@testing-library/react"
import {RotationSelect} from "../src/RotationSelect"

test("should render rotation label and select", async () => {
    // given, when
    const {getByTestId, getByText} = render(<RotationSelect />)

    // then
    getByText("Rotation")
    getByTestId("rotation-select")
})

test("should set the proper yRotationRate", async () => {
    // given
    const setYRotationRate = jest.fn()
    const {getByTestId} = render(<RotationSelect setYRotationRate={setYRotationRate} />)

    // when
    fireEvent.change(getByTestId("rotation-select"), { target: { value: "counter clockwise" } })
    fireEvent.change(getByTestId("rotation-select"), { target: { value: "clockwise" } })

    // then
    expect(setYRotationRate).toHaveBeenCalledWith(-0.01)
    expect(setYRotationRate).toHaveBeenCalledWith(0.01)
})
