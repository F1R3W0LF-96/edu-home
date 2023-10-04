import React, { useEffect, useState } from "react";
import { Modal, Select, Space } from "antd";
const SubjectsBoardsForm = ({
  isModalOpen,
  handleOk,
  handleCancel,
  subject,
  board,
}) => {
  const [subjects, setSubjects] = useState("");
  const [boards, setBoards] = useState("");
  const handleSubjectsChange = (value) => {
    console.log(`selected ${value}`);
    setSubjects(value);
  };
  const handleBoardsChange = (value) => {
    console.log(`selected ${value}`);
    setBoards(value);
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <Modal
      title="Update Subjects and Boards"
      open={isModalOpen}
      onOk={(params) => {
        handleOk(params, {
          subjects: subjects,
          board: boards.join(","),
        });
      }}
      onCancel={handleCancel}
      okButtonProps={{
        type: "default",
      }}
      cancelButtonProps={{
        type: "link",
      }}
    >
      <form onSubmit={handleSubmitForm}>
        <Space
          style={{
            width: "100%",
          }}
          direction="vertical"
        >
          <Select
            mode="multiple"
            allowClear
            style={{
              width: "100%",
            }}
            placeholder="Please Boards select"
            defaultValue={board.split(",")}
            onChange={handleBoardsChange}
            options={["ICSE", "CBSE", "IGCSE", "STATE BOARD"].map(
              (ele, idx) => ({
                label: ele,
                value: ele,
                index: idx,
              })
            )}
          />
          <Select
            mode="multiple"
            style={{
              width: "100%",
            }}
            placeholder="Please Subjects select"
            defaultValue={subject}
            onChange={handleSubjectsChange}
            options={[
              "Physics",
              "Mathematics",
              "Chemistry",
              "Biology",
              "English",
              "Hindi",
              "Science",
              "Social Studies",
            ].map((ele, idx) => ({
              label: ele,
              value: ele,
              index: idx,
            }))}
          />
        </Space>
      </form>
    </Modal>
  );
};
export default SubjectsBoardsForm;
