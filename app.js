App({//应用生命周期
   // 应用场景：获取用户信息,只会触发一次
  onLaunch: function () { 
    console.log('onlunch')
    // abc 模拟报错
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  // 应用场景：类似visibleChange，可判断用户是否在小程序内,可重置数据或动画效果
  onShow:function(){
    console.log('onShow')
  },
  // 应用场景：暂停或清除定时器
  onHide:function(){
    console.log('onHide')
  },
  // 应用场景：发生错误时传递给后台，迭代时参考
  onError:function(err){
    console.log('onError',err)
  },
  // 应用第一次启动找不到第一个入口文件时才触发，用于容错处理
  onPageNoFound:function(){
    console.log('onPageNoFound')
  },
  globalData: {
    userInfo: null
  }
})