import reduxStore from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  const { store, persistor } = reduxStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
        <ToastContainer position="top-right" />
      </PersistGate>
    </Provider>
  );
}
