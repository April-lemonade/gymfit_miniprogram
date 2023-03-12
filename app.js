// app.js
App({
  globalData: {
    // goEasy: GoEasy({
    //   host: "hangzhou.goeasy.io", //若是新加坡区域：singapore.goeasy.io
    //   appkey: "BC-fcfac0808e894bd0bf9bde63dddb68bb",
    //   modules: ['pubsub'] //根据需要，传入‘pubsub’或'im’，或数组方式同时传入
    // }),
    themeColor: 'rgb(240, 240, 240)',
    btnColor: 'rgb(77, 128, 199)',
    userId: '',
    pid: ''
    // articles: ''
  },
  onLaunch() {
    const urlList = require('/utils/config.js');
    let that = this
    wx.request({
      url: urlList.urlList.articleUrl + '/list',
      success: function (res) {
        console.log(res)
        // that.setData({
        //   articles: res.data.data.item
        // })
        wx.setStorageSync('articles', res.data.data.item)
        // that.globalData.articles = res.data.data.item
      }
    })
    // wx.request({
    //   url: 'http://121.40.140.72:8081/sport/add/record',
    //   data: {
    //     message: 'test',
    //     pid: '20000',
    //     sportId: 1,
    //     userId: '222'
    //   },
    //   method: 'POST',

    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded'

    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //   }
    // })
    wx.login({
      success: res => {
        console.log("用户的code:" + res.code);
        wx.request({
          url: urlList.urlList.loginUrl,
          data: {
            code: res.code
          },
          success: res => {
            // that.setData({
            //   userId: res.data.userId
            // });
            console.log("用户的userId:" + res.data.data.userId);
            wx.setStorageSync('userId', res.data.data.userId)
          }
        });
      }
    });
  },
  // 权限询问
  // getRecordAuth: function () {
  //   wx.getSetting({
  //     success(res) {
  //       console.log("succ")
  //       console.log(res)
  //       if (!res.authSetting['scope.record']) {
  //         wx.authorize({
  //           scope: 'scope.record',
  //           success() {
  //             // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
  //             console.log("succ auth")
  //           },
  //           fail() {
  //             console.log("fail auth")
  //           }
  //         })
  //       } else {
  //         console.log("record has been authed")
  //       }
  //     },
  //     fail(res) {
  //       console.log("fail")
  //       console.log(res)
  //     }
  //   })
  // }
})