import React from "react";
import "react-chat-elements/dist/main.css";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    contactDetail: {
        height: "110px",
        display: "flex",
        borderBottom: "1px solid white",
        cursor: "pointer",
    },
    nameContact: {
        color: "white",
        textAlign: "left",
    },
    imgContact: {
        width: "55px",
        height: "56px",
        borderRadius: "50%",
        marginTop: "13px",
    },
    lastmessage: {
        color: "lightgray",
        fontFamily: "Montserrat",
        textAlign: "left",
        fontSize: "13px",
    },
    lastmessageHour: {
        color: "lightgray",
        fontFamily: "Montserrat",
        textAlign: "left",
        fontSize: "13px",
        whiteSpace: "nowrap",
    },
    divContactImg: {
        marginLeft: "10px",
    },
    divContactName: {
        marginTop: "10px",
        marginLeft: "5px",
    },
}));

const ChatContact = ({ item }) => {
    const classes = useStyles();

    return (
        <Grid className={classes.contactDetail}>
            
            <Grid className={classes.divContactName}>
                <Typography className={classes.nameContact}> {item.name}</Typography>
                {/* <Typography className={classes.lastmessage}> {getItemLastMessage(index)}  </Typography> */}
            </Grid>
            <Grid className={classes.divContactHour}>
                <Typography className={classes.lastmessageHour}>
                    {" "}
                    {item.lastMessageHour}{""}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default ChatContact;