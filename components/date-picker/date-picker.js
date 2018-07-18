// components/data-picker/date-picker.js
import { initDate, initTime, zeroPadding } from "./date-util";

const date = new Date();
const year = date.getFullYear();
const dates = [{ ...initDate(date) }];
const maxDays = 6;
const hours = [];
const minutes = ["00", "30"];

for (let i = 0; i < maxDays; i++) {
  const day = date.getDate();
  const newDate = initDate(date.setDate(day + 1));
  dates.push({ ...newDate });
}

for (let i = 0; i <= 23; i++) {
  i = zeroPadding(i);
  hours.push(i);
}

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {

    dates: dates,
    hours: hours,
    minutes: minutes,
    date: null,
    hour: null,
    minute: null,
    currentTime: null
  },
  attached: function() {
    const { date, hour, minute } = initTime(new Date());
    this.setData({
      date,
      hour,
      minute,
      value: [1, hour, minute]
    });
    this.triggerEvent('changeDate',{...date, hour, minute},{}) 
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 滑动事件
    bindChange: function(e) {
      const val = e.detail.value;
      const date = this.data.dates[val[0]];
      const hour = this.data.hours[val[1]];
      const minute = this.data.minutes[val[2]];
      this.setData({
        date,
        hour,
        minute
      });
      // console.log(date, hour, minute);
      this.triggerEvent('changeDate',{...date, hour, minute},{}) 
    }
  }
});
