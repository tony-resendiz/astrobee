import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import {RotationSelect} from "./RotationSelect";
import {ViewSelect} from "./ViewSelect";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: "240px",
        height: "100%"
    },
    text: {
        color: "black",
        fontFamily: "Courier New"
    },
    appBar: {
        background: "white"
    }
}));

export const AstrobeeDemoMenu = ({setYRotationRate, setCameraPosition}) => {

    const classes = useStyles();

    return (
        <div style={{"display": "inline-grid"}}>
            <Paper className={classes.root}>
                <List>
                    <ListItem>
                        <Typography variant="h6" className={classes.text}>
                            Astrobee Demo
                        </Typography>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <RotationSelect setYRotationRate={setYRotationRate}/>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ViewSelect setCameraPosition={setCameraPosition}/>
                    </ListItem>
                    <Divider/>
                </List>
            </Paper>
        </div>
    );
}
