import Repository, { baseDomain, customHeaders } from "./httpService";
export async function updateUserDetails(body, token) {
  const endPoint = `${baseDomain}/users/update-user`;
  const response = await Repository(token)
    .patch(endPoint, body)
    .then((response) => {
      return {
        success: true,
        data: response.data,
        error: false,
      };
    })
    .catch((error) => ({
      success: false,
      data: error?.response?.data,
      error: true,
    }));
  return response;
}

class MessageRepository {
  token = "";
  headers = customHeaders("");
  constructor(_token, _headers) {
    this.token = _token ? _token : token;
    this.headers = _headers ? _headers : headers;
    const token = localStorage.getItem("accessToken");
    const headers = {
      Accept: "application/json",
      authorization: this.token,
    };
  }
  async sendMessage(message, senderid, recieverid) {
    const endPoint = `${baseDomain}/message/send`;
    const body = {
      senderid: senderid,
      recieverid: recieverid,
      message: message,
    };
    const reponse = await Repository(this.token)
      .post(endPoint, body, { headers: { ...this.headers } })
      .then((response) => {
        if (response.data) {
          return {
            success: true,
            data: response.data,
            error: false,
          };
        } else {
          return {
            success: false,
            data: error?.response?.data || error,
            error: true,
          };
        }
      })
      .catch((error) => {
        return {
          success: false,
          data: error?.response?.data || error,
          error: true,
        };
      });
    return reponse;
  }

  async getMessageBySenderReceiver(senderid, recieverid) {
    const endPoint = `${baseDomain}/message/${senderid}/${recieverid}`;
    const reponse = await Repository(this.token)
      .get(endPoint, { headers: { ...this.headers } })
      .then((response) => {
        if (response.data) {
          return {
            success: true,
            data: response.data,
            error: false,
          };
        } else {
          return {
            success: false,
            data: error?.response?.data || error,
            error: true,
          };
        }
      })
      .catch((error) => {
        return {
          success: false,
          data: error?.response?.data || error,
          error: true,
        };
      });
    return reponse;
  }

  async getAllMessageOfUser(senderid, recieverid) {
    const endPoint = `${baseDomain}/message/${senderid}/${recieverid}`;
    const reponse = await Repository(this.token)
      .get(endPoint, { headers: { ...this.headers } })
      .then((response) => {
        if (response.data) {
          return {
            success: true,
            data: response.data,
            error: false,
          };
        } else {
          return {
            success: false,
            data: error?.response?.data || error,
            error: true,
          };
        }
      })
      .catch((error) => {
        return {
          success: false,
          data: error?.response?.data || error,
          error: true,
        };
      });
    return reponse;
  }

  async sendNotifications(body) {
    const endPoint = `${baseDomain}/notification/send-notification`;

    const reponse = await Repository(this.token)
      .post(endPoint, body, { headers: { ...this.headers } })
      .then((response) => {
        if (response.data) {
          return {
            success: true,
            data: response.data,
            error: false,
          };
        } else {
          return {
            success: false,
            data: null,
            error: true,
          };
        }
      })
      .catch((error) => {
        return {
          success: false,
          data: error?.response?.data || error,
          error: true,
        };
      });
    return reponse;
  }

  async getUserNotification(userid, isSeen) {
    const endPoint =
      isSeen === true || isSeen === false
        ? `${baseDomain}/notification/get/usernotification/${userid}?isSeen=${isSeen}`
        : `${baseDomain}/notification/get/usernotification/${userid}`;
    const reponse = await Repository(this.token)
      .get(endPoint, { headers: { ...this.headers } })
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          return {
            success: true,
            data: response.data,
            error: false,
          };
        } else {
          return {
            success: false,
            data: error?.response?.data || error,
            error: true,
          };
        }
      })
      .catch((error) => {
        return {
          success: false,
          data: error?.response?.data || error,
          error: true,
        };
      });
    return reponse;
  }
  async updateNotifications(body) {
    const endPoint = `${baseDomain}/notification/usernotification`;

    const reponse = await Repository(this.token)
      .patch(endPoint, body, { headers: { ...this.headers } })
      .then((response) => {
        if (response.data) {
          return {
            success: true,
            data: response.data,
            error: false,
          };
        } else {
          return {
            success: false,
            data: null,
            error: true,
          };
        }
      })
      .catch((error) => {
        return {
          success: false,
          data: error?.response?.data || error,
          error: true,
        };
      });
    return reponse;
  }
}

export default MessageRepository;
