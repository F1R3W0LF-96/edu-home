import { useRouter } from "next/router";
import React from "react";
import Wrapper from "@/components/Layouts/Wrapper";
import Registration from "@/components/Registration/Registration";
import TeacherRegistration from "@/components/Registration/TeacherRegistration";
import StudentRegistration from "@/components/Registration/StudentRegistration";
import { RegistrationTypes } from "@/helper/Constant";
const Index = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <Registration
        registrationType={
          router.query.registrationType === RegistrationTypes.TEACHER_TYPE
            ? "TEACHER"
            : "STUDENT"
        }
      />
      {/* <section>
        {router.query.registrationType === RegistrationTypes.TEACHER_TYPE ? (
          <TeacherRegistration />
        ) : (
          <StudentRegistration />
        )}
      </section> */}
    </Wrapper>
  );
};

export default Index;
