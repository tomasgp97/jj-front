import {Grid, Typography, makeStyles} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import "./index.css";
import "react-chat-elements/dist/main.css";
import ChatBoxComponent from "./chatBox";
import ContactBox from "./ContactBox";
import NoMessageView from "./noMessageView";
import {services} from '../user/user.services';
import {chatService} from "./chat.service";


export default PrincipalPanel;

function PrincipalPanel() {

    const useStyles = makeStyles((theme) => ({
        padre: {
            width: "100%",
            height: "100%",
            borderRadius: "14px",
        },
        body: {
            backgroundColor: "light-gray",
        },
        container: {
            margin: "auto",
            marginTop: "60px",
            height: "850px",
            width: "65%",
            display: "flex",
        },
        contactos: {
            width: "30%",
        },
        chat: {
            width: "70%",
        },
        logoDiv: {
            backgroundColor: "darkslategray",
            display: "flex",
        },
        imgPsh: {
            width: "82px",
            height: "74px",
            borderRadius: "59px",
            padding: "20px",
            paddingLeft: "-22px",
            marginLeft: "-12px",
        },
        reactApp: {
            display: "inline-flex",
            alignItems: "center",
            color: "white",
            fontFamily: "Montserrat",
            fontSize: "28px",
            fontWeight: "bold",
            textAlign: "left",
        },
        divBlack: {
            backgroundColor: "#31170E",
            height: "700px",
        },
        imgContactChat: {
            borderRadius: "50%",
            width: "90px",
            height: "90px",
            display: "inline-flex",
            justifyContent: "flex-start",
            marginLeft: "25px",
            padding: "25px",
        },
        contactTitle: {
            width: "100%",
            backgroundColor: "white",
        },
        notification: {
            color: "red",
            textAlign: "left",
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
            justifyContent: "space-between",
        },
        nameContact: {
            color: "white",
            textAlign: "left",
        },
        imgContact: {
            width: "65px",
            height: "62px",
            marginTop: "21px",
            borderRadius: "50%",
        },
        lastmessage: {
            color: "lightgray",
            fontFamily: "Montserrat",
            textAlign: "left",
            fontSize: "13px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
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
            width: "133px",
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
        }
    }));

    var stompClient = null;
    const [currentChat, setCurrentChat] = useState();
    const [me, setMe] = useState();
    const [followed, setFollowed] = useState();
    const [wsClient, setWsClient] = useState();
    const [messagesRecieved, setMessagesRecieved] = useState([])
    const [unreadMsgsCount, setUnreadMsgsCount] = useState()

    const getFollowedFunction = () => {

        const meInfo = async () => {

            const chatContacts = await services.getChatContacts();
            setFollowed(chatContacts.contacts);
            setMe(chatContacts.me);
        };
        meInfo()
    }

    useEffect(() => {
        if (!me && !followed) {
            getFollowedFunction()
        }
        connect()
    }, [me, unreadMsgsCount, messagesRecieved]);

    const connect = () => {
        const Stomp = require("stompjs");
        var SockJS = require("sockjs-client");
        SockJS = new SockJS("https://jj-message:8083/ws");
        stompClient = Stomp.over(SockJS);
        stompClient.connect({}, onConnected, onError);
        setWsClient(stompClient)
    };

    const onConnected = () => {
        if(!me || !me.id) {
            return;
        }
        stompClient.subscribe(
            "/user/" + me.id + "/queue/messages",
            onMessageReceived
        );
    };

    const onError = (err) => {
        console.log(err);
    };


    const onMessageReceived = (msg) => {
        const jsonMsg = JSON.parse(msg.body);

        setMessagesRecieved([...messagesRecieved, jsonMsg.content])

        setUnreadMsgsCount(jsonMsg.unreadCount);

    };

    const getCurrentChat = async (person) => {

        const {id} = person;
        const currentPerson = followed.find((item) => item.id === id);
        const currentMessages = await chatService.findChatMessages(me.id, id);

        setCurrentChat({info: currentPerson, messages: currentMessages});
        setMessagesRecieved(currentMessages)

    };
    const classes = useStyles();
    return (
        <Grid className={classes.padre}>
            <Grid className={classes.container}>
                <Grid className={classes.contactos}>
                    <Grid className={classes.logoDiv}>
                        <Typography className={classes.reactApp}> Chat</Typography>
                        {(unreadMsgsCount > 0) ?  <Typography className={classes.notification}> You have {unreadMsgsCount} unread messages</Typography>
                            :   <Typography className={classes.notification}/>}
                    </Grid>
                    <Grid className={classes.divBlack}>
                        {followed && followed.length > 0 && followed.map((item) => {
                            return (
                               <div onClick={() => setUnreadMsgsCount(0)}>
                                   <ContactBox
                                   key={item.id}
                                   object={item}
                                   getPerson={getCurrentChat}
                               />
                               </div>

                            );
                        })}
                        {/* <Grid className={classes.createNew}>
                        <AddIcon fontSize="large" color="disabled" className={classes.addIcon}/>
                        <Typography className={classes.createNewText}> Create New</Typography>
                    </Grid> */}
                    </Grid>
                </Grid>
                <Grid className={classes.chat}>
                    {currentChat ? (
                        <ChatBoxComponent
                            updateContact={getCurrentChat}
                            recipient={currentChat.info}
                            arrayMessages={currentChat.messages}
                            client={wsClient}
                            sender={me}
                            messagesArrayRecieved={messagesRecieved}
                        />
                    ) : (
                        <NoMessageView/>
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
}
