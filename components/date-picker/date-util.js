const weekDays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
function initDate(dayValue) {
    const time = new Date(dayValue);
    const month = zeroPadding(time.getMonth() + 1);
    const date = zeroPadding(time.getDate());
    const week = time.getDay();
    const year = time.getFullYear().toString();
    return {
      month,
      date,
      year,
      weekDay:weekDays[week]
    }
  }
  
  //获取某个时间的年月日时分秒
  function initTime(dayValue) {
    dayValue.getMinutes() > 30
      ? dayValue.setMinutes("60")
      : dayValue.setMinutes("00");
  
    const date = initDate(dayValue);
    const hour = zeroPadding(dayValue.getHours());
    const minute = zeroPadding(dayValue.getMinutes());
    return {
      date,
      hour,
      minute
    };
  }
  
  // 自动补零
  function zeroPadding(i) {
    return ("0" + i).slice(-2);
  }

  export {
    initDate,
    initTime,
    zeroPadding
  }
