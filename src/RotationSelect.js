import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    text: {
        color: "black",
        fontFamily: "Courier New",
    }
}));

export const RotationSelect = ({setYRotationRate}) => {

    const classes = useStyles();

    const [selectValue, setSelectValue] = useState("clockwise");

    const handleChange = (event) => {
        setSelectValue(event.target.value)

        if (event.target.value === "clockwise") {
            setYRotationRate(0.01);
        } else {
            setYRotationRate(-0.01);
        }
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="rotation-label">Rotation</InputLabel>
                <Select value={selectValue} onChange={handleChange}>
                    <MenuItem value={"clockwise"}>Clockwise</MenuItem>
                    <MenuItem value={"counter clockwise"}>Counter Clockwise</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
