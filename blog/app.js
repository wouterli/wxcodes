//app.js
App({
  onLaunch: function () {
    wx.BaaS = requirePlugin('sdkPlugin')
    //让插件帮助完成登录、支付等功能
    wx.BaaS.wxExtend(wx.login,
      wx.getUserInfo,
      wx.requestPayment)

    wx.BaaS.init('0d14c75f17208664ded4', { autoLogin: true })
    wx.blog = new wx.BaaS.ContentGroup(1565348455834162)

  }
})