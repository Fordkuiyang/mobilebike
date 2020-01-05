export default {
  formateDate(time) {
    if (!time) return "";
    let date = new Date(time);
    return (
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds()
    );
  },

  pagination(data, callback) {
    return {
      onChange: current => {
        callback(current);
      },
      current: data.lives.page,
      pageSize: data.lives.page_size,
      total: data.lives.total,
      showTotal: () => {
        return `共${data.lives.total}条`;
      },
      showQuickJumper: false
    };
  }
};
