import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Button, List, Skeleton, Popover, Badge } from "antd";
import { RiNotificationFill } from "react-icons/ri";
import useFetch from "@/hooks/useFetch";
import { addNotifications } from "@/redux/commonReducer";
const count = 3;
const Notifications = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { getUserNotification, loading, updateNotifications } = useFetch();
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  useEffect(() => {
    getUserNotification(state?.user?.data?._id, false)
      .then((response) => {
        if (response.data.success) {
          dispatch(addNotifications({ data: response.data.data }));
        } else {
          addNotifications({ data: [] });
        }
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    const data = [];
    if (open) {
      state?.common?.notifications?.forEach((item) => data.push(item._id));
      updateNotifications({
        data: data,
        updatedField: "isSeen",
        updateValue: true,
      });
    }
  }, [open, state?.common?.notifications]);

  return (
    <Popover
      content={
        <List
          className="notification-list"
          loading={loading}
          itemLayout="horizontal"
          dataSource={state?.common?.notifications}
          renderItem={(item) => (
            <List.Item
              onClick={(e) => {
                console.log(e, "/profile/userid");
              }}
              // actions={[
              //   <a key="list-loadmore-edit">edit</a>,
              //   <a key="list-loadmore-more">more</a>,
              // ]}
            >
              <Skeleton avatar title={false} loading={loading} active>
                <List.Item.Meta
                  avatar={<Avatar src={item?.userid?.img} />}
                  title={
                    <Link
                      href={`/profile/${item?.userid._id}?showMessage=true`}
                    >
                      {item?.userid?.firstName}
                    </Link>
                  }
                  description={<span>{item?.messageid?.message}</span>}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      }
      title="Notifications"
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <Badge
        count={state?.common?.notifications.length || 0}
        showZero
        overflowCount={10}
      >
        <div className="border-2 border-blue-900 p-2 rounded-full flex justify-center items-center">
          <RiNotificationFill />
        </div>
      </Badge>
    </Popover>
  );
};
export default Notifications;
