import { useState } from "react";
import AuthRepositors, { updateUserDetails } from "../services/authService";
export default function useFetch() {
  const [loading, setLoading] = useState(false);

  return {
    loading,
    setLoading: (payload) => {
      setLoading(payload);
    },
    deductCoins: async (userDetails, coin) => {
      setLoading(true);
    },
  };
}
