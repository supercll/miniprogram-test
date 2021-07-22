// app.js
App({
  onLaunch() {
    console.log('app onLaunch监听页面加载');
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: {
      name: "lc"
    }
  },
  onLoad() {
    console.log('app onLoad监听app初始化');
  },

  onShow() {
    console.log('app onShow监听app显示');
  },

  onHide() {
    console.log('app onHide监听app隐藏');
  },
})