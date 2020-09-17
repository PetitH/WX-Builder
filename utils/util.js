// 时间戳转换
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

// 判断iPhoneX以上机型
function checkModel() {
  let info = '';
  uni.getSystemInfo({
    success: function (res) {
      info = res.model
    }
  });
  if (/iPhone X/i.test(info) || info.search('iPhone 11') != -1 || info.search('iPhone 11 Pro') != -1 || info.search('iPhone 11 Pro Max') != -1) {
    return true;
  } else {
    return false;
  }
}

export{
  formatTime,
  checkModel
}
