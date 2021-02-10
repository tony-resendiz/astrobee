import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    root: {
        display: "inline-flex",
        height: "100vh",
        width: "100vh"
    },
    menu: {
        flexGrow: 1,
        minWidth: "280px",
        minHeight: "350px",
        height: "100vh",
        display: "inline-grid"
    },
    menuHeader: {
        color: "black",
        fontFamily: "Courier New",
        margin: theme.spacing(1)
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    text: {
        color: "black",
        fontFamily: "Courier New",
        fontSize: "larger"
    }
}))
