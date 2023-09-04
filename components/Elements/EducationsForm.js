import React, { useState } from "react";
import { Modal, DatePicker } from "antd";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const EducationsForm = ({ isModalOpen, handleOk, handleCancel }) => {
  const [name, setName] = useState("");
  const [designation, setBoard] = useState("");
  const [from, setFrom] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    fulldate: new Date(),
  });
  const [to, setTo] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    fulldate: new Date(),
  });
  const handleFromDate = (date, dateString) => {
    console.log(date);
    setFrom((ps) => ({
      ...ps,
      month: months[date.$M],
      year: date.$y,
      fulldate: date.$d,
    }));
  };
  const handleToDate = (date, dateString) => {
    setTo((ps) => ({ ...ps, month: months[date.$M], year: date.$y }));
  };
  return (
    <Modal
      title="Update Educations"
      open={isModalOpen}
      onOk={(params) =>
        handleOk(params, {
          name: name,
          borad: designation,
          fromYear: `${from.month},${from.year}`,
          toYear: `${to.month},${to.year}`,
        })
      }
      onCancel={handleCancel}
      okButtonProps={{
        type: "default",
      }}
      cancelButtonProps={{
        type: "link",
      }}
    >
      <div className="mb-5">
        <label htmlFor="" className="text-xs font-semibold px-1">
          Univeristy/School/College
        </label>
        <div className="flex">
          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i className="mdi mdi-account-outline text-gray-400 text-lg" />
          </div>
          <input
            type="text"
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            placeholder="Enter the School/University Name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-5">
        <label htmlFor="" className="text-xs font-semibold px-1">
          Board
        </label>
        <div className="flex">
          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i className="mdi mdi-account-outline text-gray-400 text-lg" />
          </div>
          <select
            type="text"
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            placeholder="Enter the board"
            name="board"
            onChange={(e) => setBoard(e.target.value)}
          >
            <option value={""} disabled>
              Select a Board
            </option>
            <option value={"ICSE"}>ICSE</option>
            <option value={"CBSE"}>CBSE</option>
            <option value={"State Board"}>State Board</option>
          </select>
        </div>
      </div>
      <div className="flex flex-row align-center">
        <label>From Year</label>
        <DatePicker onChange={handleFromDate} className="me-2" />
        <label className="ms-2">To Year</label>
        <DatePicker onChange={handleToDate} />
      </div>
    </Modal>
  );
};
export default EducationsForm;
