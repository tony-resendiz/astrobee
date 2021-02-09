import React, {useState} from 'react'
import {useStyles} from "./styles"
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Typography from "@material-ui/core/Typography";

export const ViewSelect = ({setCameraPosition}) => {

    const classes = useStyles()

    const [selectValue, setSelectValue] = useState("side")

    const handleChange = event => {

        setSelectValue(event.target.value)

        if (event.target.value === "side") {
            setCameraPosition({x: 0, y: 0, z: 10})
        } else {
            setCameraPosition({x: 0, y: 10, z: 0})
        }
    }

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel>
                    <Typography className={classes.text}>
                        View
                    </Typography>
                </InputLabel>
                <Select
                    inputProps={{"data-testid": "view-select"}}
                    value={selectValue}
                    onChange={handleChange}>
                    <MenuItem value={"side"}>
                        <Typography className={classes.text}>
                            Side
                        </Typography>
                    </MenuItem>
                    <MenuItem value={"top-down"}>
                        <Typography className={classes.text}>
                            Top-Down
                        </Typography>
                    </MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}
