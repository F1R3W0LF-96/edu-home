import { useState } from "react";
import MessageRepositors, {
  updateUserDetails,
} from "../services/messageService";
export default function useFetch() {
  const accessToken = localStorage.getItem("accessToken");
  const MessageRepositor = new MessageRepositors(accessToken, {
    Accept: "application/json",
    authorization: accessToken,
  });
  const [loading, setLoading] = useState(false);
  const [sendingNotification, setSendingNotification] = useState(false);
  return {
    loading,
    setLoading: (payload) => {
      setLoading(payload);
    },
    deductCoins: async (userDetails, coin) => {
      setLoading(true);
    },
    sendMessage: async (message, senderid, recieverid) => {
      setLoading(true);
      const response = await MessageRepositor.sendMessage(
        message,
        senderid,
        recieverid
      );
      return response;
    },
    getMessageByUser: async (senderid, recieverid) => {
      setLoading(true);
      const response = await MessageRepositor.getAllMessageOfUser(
        senderid,
        recieverid
      );
      return response;
    },

    sendNotification: async (body) => {
      setSendingNotification(true);
      const response = await MessageRepositor.getUserNotification(userid);
      setSendingNotification(false);
      return response;
    },

    getUserNotification: async (userid, isSeen) => {
      setLoading(true);
      const response = await MessageRepositor.getUserNotification(
        userid,
        isSeen
      );
      setLoading(false);
      return response;
    },
    updateNotifications: async (body) => {
      const response = await MessageRepositor.updateNotifications(body);
      return response;
    },
  };
}
