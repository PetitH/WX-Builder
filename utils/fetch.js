// 传入参数及返回参数
const requestBack = {
  uri: '',
  params: {},
  success: function(res) {
    console.info(res)
  },
  fail: function() {

  }
}

//  GET 请求处理
function GET(requestBack) {
  fetch('GET',requestBack)
}

// POST 请求处理
function POST(requestBack) {
  fetch('POST', requestBack)
}

function fetch(method, requestBack ) {
   wx.request({
     url: requestBack.uri,
     data: requestBack.params,
     header: {
       'content-type': 'application/json'
     },
     method: method,
     success: function(res) {
       return requestBack.success(res)
     },
     fail: function() {
       return requestBack.fail()
     }
   })
 }

 module.exports = {
   GET: GET,
   POST: POST
 }