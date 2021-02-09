import React, {useState} from "react"
import {useStyles} from "./styles"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Typography from "@material-ui/core/Typography";

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
        <FormControl className={classes.formControl}>
            <InputLabel>
                <Typography className={classes.text}>
                    Skin
                </Typography>
            </InputLabel>
            <Select
                inputProps={{"data-testid": "skin-select"}}
                value={selectValue}
                onChange={handleChange}>
                <MenuItem value={"default"}>
                    <Typography className={classes.text}>
                        Default
                    </Typography>
                </MenuItem>
                <MenuItem value={"honey"}>
                    <Typography className={classes.text}>
                        Honey
                    </Typography>
                </MenuItem>
                <MenuItem value={"queen"}>
                    <Typography className={classes.text}>
                        Queen
                    </Typography>
                </MenuItem>
                <MenuItem value={"bumble"}>
                    <Typography className={classes.text}>
                        Bumble
                    </Typography>
                </MenuItem>
            </Select>
        </FormControl>
    )
}
