import React, {useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export const CameraRadioGroup = ({setCameraPosition}) => {

    const [value, setValue] = useState("side")

    const handleChange = (event) => {
        setValue(event.target.value)

        if (event.target.value === "side") {
            setCameraPosition({x: 0, y: 0, z: 10});
        } else {
            setCameraPosition({x: 0, y: 10, z: 0});
        }
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">View</FormLabel>
            <RadioGroup aria-label="view" name="view1" value={value} onChange={handleChange}>
                <FormControlLabel value="side" control={<Radio/>} label="Side"/>
                <FormControlLabel value="top-down" control={<Radio/>} label="Top-Down"/>
            </RadioGroup>
        </FormControl>
    );
}
