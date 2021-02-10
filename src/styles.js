import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    root: {
        display: "inline-flex",
        height: "100%",
        width: "100%",
        position: "fixed"
    },
    menu: {
        minWidth: "280px",
        minHeight: "350px",
        height: "100vh",
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
