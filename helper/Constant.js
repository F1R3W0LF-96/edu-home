const RegistrationTypes = {
  TEACHER_TYPE: "teacher",
  STUDENT_TYPE: "student",
};

const BoardsTypes = {
  CBSE: "CBSE",
  ICSE: "ICSE",
  State: "State",
  International: "International",
  IGCSE: "IGCSE",
};
const Education = [
  "BBA",
  "Engineering – BE, B.Tech, and B.Arch.",
  "Computer Application – BCA",
  "Designing – Fashion/Interior/Web",
  "Mass-Communication/Journalism – BJMC",
  "Hospitality (Hotel) – Hotel Management",
  "Medical – BDS and MBBS",
  "Finance – B.Com/CA",
  "Arts Psychology and Sociology",
  "Law – BA LLB/LLB",
];
const Subjects = {
  CBSE: [
    "English",
    "Mathematics",
    "Science",
    "Social science",
    "Hindi",
    "Elements of business",
    "Accountancy",
    "Information and Comunication Technology",
    "Computer Practices",
  ],
  ICSE: [
    "English",
    "English Literature",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Hindi",
    "History and Civics",
    "EVS",
    "Geography",
    "Computer Application",
    "Economic Application",
    "Economics",
    "Commercial Studies",
    "Commercial Applications",
    "Art",
    "Technical Drawing Applications",
    "Environmental Applications",
    "Performing Arts",
    "Home Science",
    "Sanskrit",
    "Bengali",
  ],
  State: [
    "English",
    "Mathematics",
    "Science",
    "Social Science",
    "EVS",
    "Hindi",
    "Sanskrit",
    "French",
    "Telugu",
    "Tamil",
    "Kannada",
    "Malayalam",
    "Gujarati",
    "Oriya",
    "Punjabi",
    "Urdu",
    "Marathi",
    "Bengali",
  ],
};

const Budget = ["0-200", "200-400", "400-600", "600-800", "more than 800"];
const Gender = ["Male", "Female"];
const ModeOfTeaching = ["Online", "Offline", "Both"];

export {
  RegistrationTypes,
  BoardsTypes,
  Subjects,
  Budget,
  Gender,
  ModeOfTeaching,
  Education,
};

export const loginType = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  PHONE: "PHONE",
  EMAIL: "EMAIL",
};

function generateOTP(length) {
  const characters = "0123456789";
  const charactersLength = characters.length;
  let otp = "";

  for (let i = 0; i < length; i++) {
    otp += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return otp;
}
function validateName(name) {
  const pattern = /^[A-Za-z\s]+$/;
  return pattern.test(name);
}

function validateEmail(email) {
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return pattern.test(email);
}

function validatePhoneNumber(phoneNumber) {
  const pattern = /^\d{10}$/;
  return pattern.test(phoneNumber);
}

function validateGender(gender) {
  // Assuming gender can only be 'Male' or 'Female'
  return gender === "Male" || gender === "Female";
}

function validatePincode(pincode) {
  const pattern = /^\d{6}$/;
  return pattern.test(pincode);
}

const alignment = {
  GRID: "GRID",
  ROW: "ROW",
};

export {
  generateOTP,
  validateName,
  validateEmail,
  validatePhoneNumber,
  validatePincode,
  validateGender,
  alignment,
};
