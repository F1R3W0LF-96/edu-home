import React from "react";
import { Button, Popover } from "antd";
const CustomPopover = ({
  open,
  handleOpen,
  handleClose,
  contentHtml,
  text,
  title,
  placement,
}) => {
  return (
    <Popover
      content={contentHtml}
      title={title}
      trigger="click"
      open={open}
      onOpenChange={handleOpen}
      placement={placement || "bottom"}
    >
      {text}
    </Popover>
  );
};

export default CustomPopover;
