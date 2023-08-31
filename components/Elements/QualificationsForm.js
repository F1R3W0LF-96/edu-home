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
const QualificationsForm = ({
  isModalOpen,
  handleOk,
  handleCancel,
  qualifications,
}) => {
  const [updating, setUpdating] = useState(false);
  const [organisation, setOrganisation] = useState("");
  const [designation, setDesignation] = useState("");
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
  const handleUpdate = (e) => {
    e.preventDefault();
    const _qualification = {
      fromMonthYear: `${from.month},${from.year}`,
      toMonthYear: `${to.month},${to.year}`,
      org: organisation,
      designation: designation,
      tenure: "2.4",
    };
  };
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
      title="Update Qualifications"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okButtonProps={{
        type: "default",
      }}
      cancelButtonProps={{
        type: "link",
      }}
    >
      <form onSubmit={handleUpdate}>
        <div className="mb-5">
          <label htmlFor="" className="text-xs font-semibold px-1">
            Organisation
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              type="text"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="Enter the Organisation/Firm/School/University Name"
              name="organisation"
              onChange={(e) => setOrganisation(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="" className="text-xs font-semibold px-1">
            Designation
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              type="text"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="Enter the Designation"
              name="designation"
              onChange={(e) => setDesignation(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row align-center">
          <label>From Year</label>
          <DatePicker onChange={handleFromDate} className="me-2" />
          <label className="ms-2">To Year</label>
          <DatePicker onChange={handleToDate} />
        </div>
      </form>
    </Modal>
  );
};
export default QualificationsForm;
