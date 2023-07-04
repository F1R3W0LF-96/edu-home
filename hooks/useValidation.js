import { useState } from "react";
import validator from "validator";
const useValidation = () => {
  const [isEmail, setIsEmail] = useState(false);
  const [isStrongPassword, setIsStrongPassword] = useState({
    flag: false,
    score: 0,
  });
  return {
    isEmail,
    validateEmail: (email) => {
      setIsEmail(validator.isEmail(email));
      return validator.isEmail(email);
    },
    validatePhoneNo: (phone) => {
      return validator.isMobilePhone(phone);
    },
    validateStrongPassword: (password) => {
      const _sp = validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        returnScore: false, // return the scoring for the strong password if it is true
        pointsPerUnique: 1,
        pointsPerRepeat: 0.5,
        pointsForContainingLower: 10,
        pointsForContainingUpper: 10,
        pointsForContainingNumber: 10,
        pointsForContainingSymbol: 10,
      });
      setIsStrongPassword({
        flag: _sp,
        score: 10,
      });
      return _sp;
    },
  };
};

export default useValidation;
