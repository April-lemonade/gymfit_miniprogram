// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code:'',
    username: "test",
    userid: '',
    openid: "",
    sessionkey: "",
    rawData:'',
    signature: '',
    encryptedData: '',
    iv: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    const urlList = require('../../utils/config.js');
    console.log(urlList.urlList)
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
              // 根据自己的需求有其他操作再补充
              // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
              wx.login({
                success: res => {
                  // 获取到用户的 code 之后：res.code
                  console.log("用户的code:" + res.code);
                  that.setData({
                    code: res.code
                  })
                  // 可以传给后台，再经过解析获取用户的 openid
                  //  http://121.40.140.72:8080/wx/user/wxc4d54474fda77b16/login
                  wx.request({
                    url: urlList.urlList.loginUrl,
                    data: {
                      code: res.code
                    },
                    success: res => {
                      that.setData({
                        openid: res.data.data.openId,
                        userid: res.data.userId
                      });
                      console.log("用户的openid:" + res.data.data.openId);
                      // console.log("用户的session_key:" + res.data.sessionKey);
                    }
                  });
                }
              });
            }
          });
        } else {
          // 用户没有授权
          // 改变 isHide 的值，显示授权页面
          that.setData({
            isHide: true
          });
        }
      }
    });
  },

  bindGetUserInfo: function (e) {
    const urlList = require('../../utils/config.js');
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      // 获取到用户的信息了，打印到控制台上看下
      console.log("用户的信息如下：");
      console.log(e.detail)
      console.log(e.detail.userInfo);
      console.log(this.data.openid)
      // 授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
      // that.setData({
      //   isHide: false,
      //   rawData: e.detail.rawData,
      //   encryptedData: e.detail.encryptedData,
      //   iv: e.detail.iv,
      //   signature: e.detail.signature
      // });
      wx.request({
        url: urlList.urlList.infoUrl,
        // method: 'POST',
        // header: {
        //   'content-type': 'application/x-www-form-urlencoded'
        // },
        data: {
          // appid: 'wxc4d54474fda77b16',
          code: that.data.code
        },
        success: res => {
          that.setData({
            openid: res.data.data.openId,
            userid: res.data.userId
          });
          console.log("用户的openid:" + res.data.data.openId);
          // console.log("用户的session_key:" + res.data.sessionKey);
        }
      });
      wx.switchTab({
        url: '/pages/index/index'
      })
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          // 用户没有授权成功，不需要改变 isHide 的值
          if (res.confirm) {
            console.log('用户点击了“返回授权”');
          }
        }
      });
    }
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