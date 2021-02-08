import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    text: {
        color: "black",
        fontFamily: "Courier New",
    }
}))

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
                <InputLabel id="view-label">View</InputLabel>
                <Select value={selectValue} onChange={handleChange}>
                    <MenuItem value={"side"}>Side</MenuItem>
                    <MenuItem value={"top-down"}>Top-Down</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}
