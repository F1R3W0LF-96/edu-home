import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

const Whatsapp = () => {
  return (
    <WhatsAppWidget
      companyName={"Tuition Search"}
      replyTimeText={"Wiil get back to you"}
      message={"Hello \n How can we help you ?"}
      phoneNumber="+919553444001"
    />
  );
};

export default Whatsapp;
