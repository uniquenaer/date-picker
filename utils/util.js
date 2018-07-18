const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function isBlank(str) {
  if (Object.prototype.toString.call(str) === '[object Undefined]') {//空
    return true
  } else if (str === 'undefined') {
    return true
  } else if (
    Object.prototype.toString.call(str) === '[object String]' ||
    Object.prototype.toString.call(str) === '[object Array]') { //字条串或数组
    return str.length == 0 ? true : false
  } else if (Object.prototype.toString.call(str) === '[object Object]') {
    return JSON.stringify(str) == '{}' ? true : false
  } else {
    return true
  }
}

function formatSecond(s) {
  var h = 0, i = 0, s = parseInt(s);
  if (s >= 60) {
    i = parseInt(s / 60);
    s = parseInt(s % 60);
    if (i >= 60) {
      h = parseInt(i / 60);
      i = parseInt(i % 60);
    }
  }
  // 补零
  var zero = function (v) {
    return (v >> 0) < 10 ? "0" + v : v;
  };
  return [zero(i), zero(s)].join(":");
}

module.exports = {
  formatTime: formatTime,
  String: {
    isBlank: isBlank
  },
  Time: {
    formatSecond: formatSecond
  }
}
