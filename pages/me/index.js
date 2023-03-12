// pages/me/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: '',
    userId:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userId = wx.getStorageSync('userId')
    this.setData({
      userId: userId
    })
    console.log("userId+++")
    if (wx.getUserProfile) {
      this.setData({
        isLogin: true
      })
    }
  },
  //授权登录
  getUserProfile(e) {
    let that = this
    const urlList = require('../../utils/config.js');
    wx.getUserProfile({
      desc: '完善用户信息',
      success: res => {
        console.log('ok', res);
        let user = res.userInfo
        //缓存用户信息到本地
        wx.setStorageSync('user', user)
        this.setData({
          userInfo: user,
        })
        let encryptedData = res.encryptedData
        let iv = res.iv
        let rawData = res.rawData
        let signature = res.signature
        let userId = that.data.userId
        wx.request({
          url: urlList.urlList.infoUrl,
          data: {
            encryptedData: encryptedData,
            iv: iv,
            rawData: rawData,
            signature: signature,
            userId: wx.getStorageSync('userId')
          },
          success: res => {
            console.log("用户的openid:" + JSON.stringify(res.data));
          }
        });
      },
      fail: res => {
        console.log('fail', res)
      }
    })

  },
  //退出登录
  outLogin() {
    this.setData({
      userInfo: '',
    })
    wx.setStorageSync('user', null)
  },
  onLoad() {
    let user = wx.getStorageSync('user')
    let userId = wx.getStorageSync('userId')
    this.setData({
      userInfo: user,
      userId: userId
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 4
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})