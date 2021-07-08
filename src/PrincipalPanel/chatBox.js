import React, { useState, useEffect } from "react";
import {
    Grid,
    Typography,
    makeStyles,
    FormControl,
    Button,
} from "@material-ui/core";
import { MessageBox } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import moment from "moment";
import {log} from "util";

const useStyles = makeStyles(() => ({
    imgContactChat: {
        borderRadius: "50%",
        width: "90px",
        heoght: "90px",
        display: "inline-flex",
        justifyContent: "flex-start",
        marginLeft: "25px",
        padding: "25px",
    },
    contactTitle: {
        width: "100%",
        backgroundColor: "white",
    },
    chatInputs: {
        width: "100%",
        backgroundColor: "#E9E9E9",
        height: "635px",
        overflowY: "auto",
    },
    infoIndividualchat: {
        display: "flex",
    },
    messageBoxStyles: {},
    containerMessage: {
        height: "112px",
        marginBottom: "25px",
    },
    divnombreChat: {
        marginTop: "35px",
    },
    nombreChat: {
        fontSize: "30px",
        fontFamily: "Courier New",
        fontWeight: "bold",
        textAlign: "left",
    },
    puesto: {
        textAlign: "left",
        fontSize: "16px",
        fontWeight: "bold",
        color: "gray",
        marginTop: "-8px",
    },
    hora: {
        color: "gray",
        fontSize: "11px",
        marginBottom: "-20px",
        marginLeft: "19px",
    },
    createMessage: {
        display: "flex",
        width: "100%",
        marginTop: "9px",
    },
    divInput: {
        marginTop: "-69px",
        width: "100%",
        backgroundColor: "white",
        height: "70px",
    },
    inputAlone: {
        width: "77%",
        borderRadius: "10px",
        outline: "none",
        marginLeft: "10px",
        border: "2px solid #EEEEEE",
        backgroundColor: "#F2F1F1",
    },
    buttonStyles: {
        borderRadius: "10px",
        marginLeft: "10px",
        width: "16%",
        color: "gray",
        fontWeight: "bold",
        height: "40px",
    },
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
    divContactHour: {
        display: "inline-flex",
        marginRight: "10px",
        marginTop: "10px",
    },
    line: {
        alignItems: "center",
        borderBottom: "1px solid #dadde1",
        display: "flex",
        margin: "5px -4px",
        textAlign: "center",
    },
    createNew: {
        height: "80px",
        display: "flex",
        justifyContent: "center",
        marginRight: "15px",
    },
    createNewText: {
        color: "white",
        display: "inline-flex",
        alignItems: "center",
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: "Lucida Console",
    },
    addIcon: {
        color: "white",
        display: "inline-flex",
        alignItems: "center",
        marginTop: "22px",
        marginRight: "10px",
    },
}));

const ChatBox = ({ updateContact, recipient, arrayMessages, client, sender }) => {
    const classes = useStyles();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState({
        message: "",
    });

console.log('xd', sender)
    const personName = recipient && recipient.firstName;

    useEffect(() => {
        setMessages(arrayMessages);
    }, [personName, arrayMessages]);

    const handleInputChange = (e) => {
        setMessage({ ...message, message: e.target.value });
    };


    const handleSubmit = () => {
        if (message.message.trim() !== "") {
            setMessages((prevState) => {
               //send message to socket
               const messageObject = {
                   senderId: sender.id,
                   senderName: `${sender.firstName} ${sender.lastName}`,
                   recipientId: recipient.id,
                   recipientName: `${recipient.firstName} ${recipient.lastName}`,
                   content: message.message,
                   timestamp: new Date()
               }

               client.send("/api/chat", {}, JSON.stringify(messageObject));

                return [...prevState, message];
            });

            console.log('post to send', messages )


            setMessage({
                message: "",
            });
            updateContact(recipient);
        }
    };
    const horarioActual = moment().format(" h:mm a");
    console.log('messages', messages)
    return (
        <Grid className={classes.contactTitle}>
            <Grid className={classes.infoIndividualchat}>

                <Grid className={classes.divnombreChat}>
                    <Typography className={classes.nombreChat}> {recipient.firstName}</Typography>
                </Grid>
            </Grid>
            <Grid className={classes.chatInputs}>

                {messages.length > 0 &&
                messages.map((item) => {
                    console.log(item)
                    return (
                        <Grid className={classes.containerMessage}>
                            <Grid>
                                    <Typography className={classes.hora}>
                                    {" "}
                                    {horarioActual}{" "}
                                    </Typography>
                            </Grid>
                            {
                                item.senderId === sender.id ?
                                     <MessageBox
                                        className={classes.messageBoxStyles}
                                        position={"left"}
                                        type={"text"}
                                        text={item.content}
                                    /> : <MessageBox
                                        className={classes.messageBoxStyles}
                                        position={"right"}
                                        type={"text"}
                                        text={item.content}
                                    />
                            }
                        </Grid>
                    );
                })}
            </Grid>
            <Grid className={classes.divInput}>
                <FormControl onSubmit={handleSubmit} className={classes.createMessage}>
                    <Grid className={classes.createMessage}>
                        <input
                            placeholder="Type your message..."
                            className={classes.inputAlone}
                            margin="normal"
                            color="secondary"
                            required
                            fullWidth
                            autoFocus
                            onChange={handleInputChange}
                            value={message.message}
                        />

                        <Button
                            className={classes.buttonStyles}
                            variant="contained"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Send
                        </Button>
                    </Grid>
                </FormControl>
            </Grid>
        </Grid>
    );
};

export default ChatBox;