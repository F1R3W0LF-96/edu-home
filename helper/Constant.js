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
};

export const loginType = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  PHONE: "PHONE",
  EMAIL: "EMAIL",
};
