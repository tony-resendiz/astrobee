import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

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

export const SkinSelect = ({setSkin}) => {

    const classes = useStyles()

    const [selectValue, setSelectValue] = useState("default")

    const handleChange = event => {

        setSelectValue(event.target.value)

        switch (event.target.value) {
            case "honey": {
                setSkin("honey")
                break
            }
            case "queen": {
                setSkin("queen")
                break
            }
            case "bumble": {
                setSkin("bumble")
                break
            }
            default: {
                setSkin("default")
            }
        }
    }

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="skin-label">Skin</InputLabel>
                <Select value={selectValue} onChange={handleChange}>
                    <MenuItem value={"default"}>Default</MenuItem>
                    <MenuItem value={"honey"}>Honey</MenuItem>
                    <MenuItem value={"queen"}>Queen</MenuItem>
                    <MenuItem value={"bumble"}>Bumble</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}
