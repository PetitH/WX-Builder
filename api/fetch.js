// 封装get方法
function fetchGet(url,data){
 return new Promise((resolve,reject) =>{
    wx.request({
      url: url,
      data: data,
      success(res){
        resolve(res)
      },
      fail(err){
         reject(err)
      }
    })
  })
}
// 封装post 方法
function fetchPost(url, data){
  return new Promise((resolve,reject) =>{
    wx.request({
      url: url,
      data: data,
      success(res){
        resolve(res)
       },
      fail(err){
        reject(err)
      }
    })
  })
}

export {
  fetchGet,
  fetchPost
}