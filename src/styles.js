import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    menu: {
        flexGrow: 1,
        minWidth: "240px",
        height: "100vh"
    },
    menuHeader: {
        color: "black",
        fontFamily: "Courier New",
        margin: theme.spacing(1)
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    text: {
        color: "black",
        fontFamily: "Courier New",
    }
}))
