import React from "react"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Divider from "@material-ui/core/Divider"
import {RotationSelect} from "./RotationSelect"
import {ViewSelect} from "./ViewSelect"
import {SkinSelect} from "./SkinSelect"
import {useStyles} from "./styles"


export const AstrobeeDemoMenu = ({setYRotationRate, setCameraPosition, setSkin}) => {

    const classes = useStyles()

    return (
        <Paper className={classes.menu}>
            <List>
                <ListItem>
                    <Typography variant="h6" className={classes.menuHeader}>
                        Astrobee Demo
                    </Typography>
                </ListItem>
                <Divider/>
                <ListItem>
                    <RotationSelect id="rotation-select" setYRotationRate={setYRotationRate}/>
                </ListItem>
                <ListItem>
                    <ViewSelect id="camera-select" setCameraPosition={setCameraPosition}/>
                </ListItem>
                <ListItem>
                    <SkinSelect id="skin-select" setSkin={setSkin}/>
                </ListItem>
            </List>
        </Paper>
    )
}
