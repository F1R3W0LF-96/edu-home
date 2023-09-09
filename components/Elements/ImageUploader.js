import React, { useState } from "react";
import { Button, Modal, Upload } from "antd";
import { toast } from "react-toastify";
const { Dragger } = Upload;
const ImageUploader = ({ isModalOpen, handleOk, handleCancel }) => {
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);
  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("files[]", file);
    });
    setUploading(true);
    fetch("https://www.mocky.io/v2/5cc8019d300000980a055e76", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setFileList([]);
        toast.success("upload successfully.");
      })
      .catch(() => {
        toast.error("upload failed.");
      })
      .finally(() => {
        setUploading(false);
      });
  };
  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };
  return (
    <Modal
      title="Upload Image"
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
      <Upload {...props}>
        <Button size={"100px"}>Select File</Button>
      </Upload>
      <Button
        type="link"
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{
          marginTop: 16,
        }}
      >
        {uploading ? "Uploading" : "Start Upload"}
      </Button>
    </Modal>
  );
};
export default ImageUploader;
