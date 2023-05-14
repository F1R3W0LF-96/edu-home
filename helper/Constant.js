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
