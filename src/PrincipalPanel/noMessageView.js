import React from "react";
import { Grid, Typography, makeStyles} from "@material-ui/core";
import 'react-chat-elements/dist/main.css';
const useStyles = makeStyles((theme) => ({
    contactTitle : {
        width: "100%",
        backgroundColor: "#E6E5E5",
        height: "96.5%"
    },
    img : {
        marginTop: '13%',
        width: '341px'
    },
    title: {
        fontFamily: 'monospace',
        marginTop: '-20px',
        fontSize: '30px',
    }

}));

const NoMessageView = () => {


    const classes = useStyles()


    return(
        <Grid className={classes.contactTitle}>
            <Grid>
                <Typography className={classes.title}> Welcome back!</Typography>
            </Grid>

        </Grid>
    )
}

export default NoMessageView;