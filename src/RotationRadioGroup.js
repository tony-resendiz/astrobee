import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export const RotationRadioGroup = ({setYRotation}) => {

    const [value, setValue] = React.useState("clockwise")

    const handleChange = (event) => {
        setValue(event.target.value)

        if (event.target.value === "clockwise") {
            setYRotation(0.01);
        } else setYRotation(-0.01);
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Rotation</FormLabel>
            <RadioGroup aria-label="rotation" name="rotation1" value={value} onChange={handleChange}>
                <FormControlLabel value="clockwise" control={<Radio/>} label="Clockwise"/>
                <FormControlLabel value="counter-clockwise" control={<Radio/>} label="Counter Clockwise"/>
            </RadioGroup>
        </FormControl>
    );
}
