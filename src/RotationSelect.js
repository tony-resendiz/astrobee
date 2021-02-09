import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    text: {
        color: "black",
        fontFamily: "Courier New",
    }
}))

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
                <InputLabel id="rotation-label">
                    <Typography className={classes.text}>
                        Rotation
                    </Typography>
                </InputLabel>
                <Select inputProps={{"data-testid": "rotation-select"}} value={selectValue} onChange={handleChange}>
                    <MenuItem inputProps={{"data-testid": "clockwise"}} value={"clockwise"}>
                        <Typography className={classes.text}>
                            Clockwise
                        </Typography>
                    </MenuItem>
                    <MenuItem inputProps={{"data-testid": "counter-clockwise"}} value={"counter clockwise"}>
                        <Typography className={classes.text}>
                            Counter Clockwise
                        </Typography>
                    </MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}
