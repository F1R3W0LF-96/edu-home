import React, { useRef, useEffect, useState, use } from "react";
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
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    // window.addEventListener("click", (e) => {
    //   if (e.target !== wrapperRef.current) {
    //     handleClose();
    //   }
    // });
    getMessageByUser(senderid, recieverid)
      .then((res) => {
        console.log(res.data.data);
        setMessages(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    console.log(messages);
  }, [messages]);
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
            <>
              {ele.senderid._id === recieverid && (
                <div className="msg left-msg">
                  <div
                    className="msg-img"
                    style={{
                      backgroundImage:
                        "url(https://image.flaticon.com/icons/svg/327/327779.svg)",
                    }}
                  />
                  <div className="msg-bubble">
                    <div className="msg-info">
                      <div className="msg-info-name">
                        {ele.senderid.firstName} {ele.senderid.lastName}
                      </div>
                      <div className="msg-info-time">
                        {new Date(ele.timestamp).toISOString()}
                      </div>
                    </div>
                    <div className="msg-text">
                      {ele.message}
                      😄
                    </div>
                  </div>
                </div>
              )}
              {ele.senderid === senderid && (
                <div className="msg right-msg">
                  <div
                    className="msg-img"
                    style={{
                      backgroundImage:
                        "url(https://image.flaticon.com/icons/svg/145/145867.svg)",
                    }}
                  />
                  <div className="msg-bubble">
                    <div className="msg-info">
                      <div className="msg-info-name">
                        {ele.senderid.firstName} {ele.senderid.lastName}
                      </div>
                      <div className="msg-info-time">
                        {new Date(ele.timestamp).toISOString()}
                      </div>
                    </div>
                    <div className="msg-text">{ele.message}</div>
                  </div>
                </div>
              )}
            </>;
          })}
        </main>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(inputRef.current.value, senderid, recieverid);
          }}
          className="message-inputarea"
        >
          <input
            ref={inputRef}
            type="text"
            className="message-input"
            placeholder="Enter your message..."
          />
          <button
            type="submit"
            className="ms-2 rounded bg-teal-500 text-white"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(inputRef.current.value, senderid, recieverid);
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
