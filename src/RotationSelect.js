import React, {useState} from 'react'
import {useStyles} from "./styles"
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Typography from "@material-ui/core/Typography"

export const RotationSelect = ({setYRotationRate}) => {

    const classes = useStyles()

    const [selectValue, setSelectValue] = useState("clockwise")

    const handleChange = event => {

        setSelectValue(event.target.value)

        if (event.target.value === "clockwise") {
            setYRotationRate(0.01)
        } else {
            setYRotationRate(-0.01)
        }
    }

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel>
                    <Typography className={classes.text}>
                        Rotation
                    </Typography>
                </InputLabel>
                <Select
                    inputProps={{"data-testid": "rotation-select"}}
                    value={selectValue}
                    onChange={handleChange}>
                    <MenuItem value={"clockwise"}>
                        <Typography className={classes.text}>
                            Clockwise
                        </Typography>
                    </MenuItem>
                    <MenuItem value={"counter clockwise"}>
                        <Typography className={classes.text}>
                            Counter Clockwise
                        </Typography>
                    </MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}
