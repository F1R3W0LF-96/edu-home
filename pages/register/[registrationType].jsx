import { useRouter } from "next/router";
import React from "react";
import styles from "@/styles/Registration.module.css";
import TeacherRegistration from "@/components/Registration/TeacherRegistration";
import StudentRegistration from "@/components/Registration/StudentRegistration";
import { RegistrationTypes } from "@/helper/Constant";
const Index = () => {
  const router = useRouter();
  const { pid } = router.query;
  console.log(">>>>>>>>>>>>>>>>>>>", router.query);
  return (
    <>
      <section>
        {router.query.registrationType === RegistrationTypes.TEACHER_TYPE ? (
          <TeacherRegistration />
        ) : (
          <StudentRegistration />
        )}
      </section>
    </>
  );
};

export default Index;
