import React, { useRef, useEffect, useState } from "react";
import { BsFillChatSquareFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import useFetch from "@/hooks/useFetch";
function ChatWidgets({
  heading = "Simple Chat",
  messagesData,
  handleClose,
  senderid,
  recieverid,
}) {
  const { loading, getMessageByUser, sendMessage } = useFetch();
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const [typedMessage, setTypedMessage] = useState("")
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (messagesData) {
      setMessages(messagesData);
    } else {
      fetchConversation();
    }
  }, [messagesData]);
  const fetchConversation = () => {
    getMessageByUser(senderid, recieverid)
      .then((res) => {
        console.log(res.data.data);
        setMessages(res.data.data.reverse());
        scrollToBottom()

      })
      .catch((err) => {
        console.log(err);
      });
  }


  const sendSingleMessage = (message, senderid, recieverid) => {
    sendMessage(message, senderid, recieverid).then((response) => {
      if (response.data.success) {
        setTypedMessage("")
        fetchConversation();

      }
    })
  }
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
  const scrollToBottom = () => {
 const main = document.querySelector('.message-chat');
 if (main) {
    main.scrollTop = main.scrollHeight;
 }
}
  return (
    <div className="chat-container">
      <section className="message" ref={wrapperRef}>
        <header className="message-header">
          <div className="message-header-title flex flex-row justify-start items-center">
            <BsFillChatSquareFill />
            &nbsp; {heading}
          </div>
          <div
            className="message-header-options cursor-pointer"
            onClick={handleClose}
          >
            <AiOutlineClose />
          </div>
        </header>
        <main className="message-chat">
          {messages?.map((ele, idx) => {
            return (
              <>
                {ele.senderid._id === recieverid &&
                  <div className="msg left-msg">
                    <div
                      className="msg-img"
                      style={{
                        backgroundImage:
                          "url(https://icons8.com/icon/61868/chat-room)",
                      }}
                    />
                    <div className="msg-bubble">
                      <div className="msg-info">
                        <div className="msg-info-name">
                          {ele.senderid.firstName} {ele.senderid.lastName}
                        </div>
                        <div className="msg-info-time">
                          {formatDate("1697653343548")}
                        </div>
                      </div>
                      <div className="msg-text">
                        {ele.message}
                        😄
                      </div>
                    </div>
                  </div>
                }
                {ele.senderid._id === senderid && (
                  <div className="msg right-msg">
                    <div
                      className="msg-img"
                      style={{
                        backgroundImage:
                          "url(https://icons8.com/icon/61868/chat-room)",
                      }}
                    />
                    <div className="msg-bubble">
                      <div className="msg-info">
                        <div className="msg-info-name">
                          {ele.senderid.firstName} {ele.senderid.lastName}
                        </div>
                        <div className="msg-info-time">
                          {formatDate(new Date(ele.timestamp).toISOString())}
                        </div>
                      </div>
                      <div className="msg-text">{ele.message}</div>
                    </div>
                  </div>
                )}
              </>)
          })}
        </main>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendSingleMessage(typedMessage, senderid, recieverid);
          }}
          className="message-inputarea"
        >
          <input
            type="text"
            className="message-input"
            placeholder="Enter your message..."
            value={typedMessage}
            onChange={(event) => { setTypedMessage(event.target.value) }}
          />
          <button
            type="submit"
            className="ms-2 rounded bg-teal-500 text-white"
            onSubmit={(e) => {
              e.preventDefault();
              sendSingleMessage(typedMessage, senderid, recieverid);
            }}
          >
            Send
          </button>
        </form>
      </section>
    </div>
  );
}

export default ChatWidgets;
