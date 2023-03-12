// pages/fiting/index.js
const app = getApp();
const innerAudioContext = wx.createInnerAudioContext()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    rate: 100,
    color: 'white',
    timer: '',
    pid: 0,
    actions: [{
      name: '确认结束',
    }, ],
    showDialog: false,
    yuyinSrc: '',
    socketStatus: 'closed',
    themeColor: '',
    btnColor: '',
    setInter: '',
    nowIndex: 0,
    sound: true,
    start: false,
    hours: '0' + 0, // 时
    minute: '0' + 0, // 分
    second: '0' + 0, // 秒
    erro: 1,
    sport: {
      name: '蝴蝶机夹胸',
      img: 'https://s3.bmp.ovh/imgs/2022/03/0e532970229465ee.png',
      std: 67,
      erroCount: 6,
      advice: ['向后向下收紧肩关节', '手臂尽量贴紧身体'],
      groupCount: 27,
      moveCount: 6,
      columnCount: 4157,
      parts: '背 肩 二头'
    },
    allSports: [{
      name: '蝴蝶机夹胸',
      img: 'https://s3.bmp.ovh/imgs/2022/04/21/c4892965a0d4bedb.jpg',
      groupCount: 6,
      groupFinished: 3,
      stdColumn: 1835,
      nowColumn: 778,
      groups: [{
        weight: 40,
        count: 12,
        finished: true,
      }, {
        weight: 40,
        count: 12,
        finished: true,
      }, {
        weight: 40,
        count: 12,
        finished: false,
      }]
    }, {
      name: '拉杆坐姿划船',
      img: 'https://s3.bmp.ovh/imgs/2022/03/af02ed30310f8880.jpg',
      groupCount: 6,
      groupFinished: 0,
      stdColumn: 1835,
      nowColumn: 778,
    }, {
      name: '绳索直臂下压',
      img: 'https://s3.bmp.ovh/imgs/2022/03/fd574334ce6b69d3.jpg',
      groupCount: 6,
      groupFinished: 0,
      stdColumn: 1835,
      nowColumn: 778,
    }],
    content: ' ', //内容
    src: '../../asset', //
  },
  onClose() {
    this.setData({
      showDialog: false
    });
  },

  onSelect(event) {
    let that = this
    this.setData({
      start: false,
      showDialog: false
    });
    var pid = this.data.pid
    console.log(pid)
    wx.request({
      url: 'http://gymfit.mynatapp.cc/sport/stop',
      data: {
        pid: pid
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        that.setData({
          start: false,
          setInter: '',
          inter: ''
        })
        that.endInter()
        clearInterval(that.data.setInter)
      }
    })
    clearInterval(this.data.inter)
    clearInterval(this.data.setInter)
    wx.switchTab({
      url: '../../pages/moveLib/index',
    })

    this.closeSocket()
    innerAudioContext.destroy()
    // wx.navigateTo({
    //     url: '../../pages/fiting/index'
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const app = getApp();
    this.setData({
      themeColor: app.globalData.themeColor,
      btnColor: app.globalData.btnColor
    })

  },

  setInterval: function () {
    const that = this
    var second = that.data.second
    var minute = that.data.minute
    var hours = that.data.hours
    this.data.setInter = setInterval(function () {
      second++

      if (second >= 60) {
        second = 0 //  大于等于60秒归零
        minute++
        if (minute >= 60) {
          minute = 0 //  大于等于60分归零
          hours++
          if (hours < 10) {
            // 少于10补零
            that.setData({
              hours: '0' + hours
            })
          } else {
            that.setData({
              hours: hours
            })
          }
        }
        if (minute < 10) {
          // 少于10补零
          that.setData({
            minute: '0' + minute
          })
        } else {
          that.setData({
            minute: minute
          })
        }
      }
      if (second < 10) {
        // 少于10补零
        that.setData({
          second: '0' + second
        })
      } else {
        that.setData({
          second: second
        })
      }
    }, 1000)

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


  onHide: function () {
    wx.getBackgroundAudioManager()
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

  },
  openSocket() {
    var that = this
    //打开时的动作
    wx.onSocketOpen(() => {
      console.log('WebSocket 已连接')
      this.data.socketStatus = 'connected';
      this.sendMessage();
    })
    //断开时的动作
    wx.onSocketClose(() => {
      console.log('WebSocket 已断开')
      this.data.socketStatus = 'closed'
    })
    //报错时的动作
    wx.onSocketError(error => {
      console.error('socket error:', error)
    })
    // 监听服务器推送的消息
    wx.onSocketMessage(message => {
      console.log(message)

      //把JSONStr转为JSON
      message = message.data.replace(" ", "");
      if (typeof message != 'object') {
        console.log(message)
        message = message.replace(/\ufeff/g, "")
        console.log(message)
        // var jj = JSON.parse(message)
        // message = jj
      }
      console.log("【websocket监听到消息】内容如下：");
      console.log(message);
      console.log(that.data.sound)
      console.log(that.data.sport.advice[0])
      if (that.data.sound) {
        that.backgroundAudioManager = wx.getBackgroundAudioManager();
        innerAudioContext.autoplay = true
        innerAudioContext.src = 'http://tsn.baidu.com/text2audio?lan=zh&ctp=1&cuid=abcdxxx&tok=24.f92a917a71107898c5ccf5430426b090.2592000.1653741935.282335-26126382&vol=9&per=0&spd=5&pit=5&aue=3&tex=' + that.data.sport.advice[that.data.sport.advice.length - 1]
      }
    })
    // 打开信道
    wx.connectSocket({
      url: "ws://82.157.123.54:9010/ajaxchattest",
    })
  },

  //关闭信道
  closeSocket() {
    if (this.data.socketStatus == 'connected') {
      wx.closeSocket({
        success: () => {
          this.data.socketStatus = 'closed'
        }
      })
    }
  },

  //发送消息函数
  sendMessage() {
    if (this.data.socketStatus === 'connected') {
      //自定义的发给后台识别的参数 ，我这里发送的是name
      wx.sendSocketMessage({
        data: "test"
      })
      console.log("{\"name\":\"" + wx.getStorageSync('userId') + "\"}")
    }
  },
  startInter: function () {
    var that = this;
    that.data.inter = setInterval(
      function () {
        wx.request({
          url: 'http://121.40.140.72:8081/sport/get/sportInfo',
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: {
            userId: '1',
            sportId: 1,
          },
          success: function (res) {
            //打印返回的数据
            console.log(res)
            var resData = res.data;
            if (resData != "") {
              if (resData.data.isTrue == 1) {
                that.setData({
                  color: '#81C784',
                  rate: 90 + that.data.rate % 10
                })
              } else {
                that.setData({
                  color: '#EF9A9A',                                                                         
                  count: that.data.count + 1,
                  rate: that.data.rate - 3,
                })
              }
              that.setData({
                content: res.data.data.message,
                pid: res.data.data.pid
              })
              // console.log(that.data.content)
              if (that.data.sound) {
                that.backgroundAudioManager = wx.getBackgroundAudioManager();
                innerAudioContext.autoplay = true
                innerAudioContext.src = 'http://tsn.baidu.com/text2audio?lan=zh&ctp=1&cuid=abcdxxx&tok=24.f92a917a71107898c5ccf5430426b090.2592000.1653741935.282335-26126382&vol=9&per=0&spd=5&pit=5&aue=3&tex=' + res.data.data.message
                console.log(innerAudioContext.src)
              }
              //获取数据后重新开启定时器发送请求
              // that.startInter();
            } else {
              wx.showToast({
                title: '查询失败',
                duration: 2000
              })
            }
          }
        })
        console.log('setInterval 执行一次任务')
      }, 10000);
  },
  //开启计时器，注意参数的使用
  // startTimer(that) {
  //     timer = setTimeout(function () {
  //         console.log("time:" + time);
  //         time++;
  //         //发送请求
  //         wx.request({
  //             url: 'http://121.40.140.72:8081/sport/get/sportInfo',
  //             method: 'POST',
  //             header: {
  //                 'content-type': 'application/x-www-form-urlencoded'
  //             },
  //             data: {
  //                 userId: app.globalData.userId,
  //                 sportId: 1,
  //             },
  //             success: function (res) {
  //                 //打印返回的数据
  //                 console.log(res)
  //                 var resData = res.data;
  //                 if (resData != "") {
  //                     that.setData({
  //                         content: res.data.message,
  //                         pid: res.data.pid,
  //                     })
  //                     //获取数据后重新开启定时器发送请求
  //                     startTimer(that);
  //                 } else {
  //                     wx.showToast({
  //                         title: '查询失败',
  //                         duration: 2000
  //                     })
  //                 }
  //             }
  //         })
  //     }, 1000)
  // },

  endInter: function () {
    console.log("试图清除定时")
    var that = this;
    clearTimeout(that.data.inter)
  },


  startFit() {
    let that = this
    const app = getApp()
    // this.openSocket()
    // let id = app.globalData.userid
    // var that = this;
    // if (that.data.socketStatus === 'closed') {
    //     that.openSocket();
    // }
    wx.request({
      url: 'http://gymfit.mynatapp.cc/sport/start',
      data: {
        sportId: 1,
        userId: '1'
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res)
        console.log("这是开始成功的标志")
      }
    })
    that.setData({
      start: true
    })
    that.startInter()
    this.setInterval()
  },
  stopFit() {
    let that = this
    this.setData({
      // start: false,
      showDialog: true
    })
  },
  mute() {
    this.setData({
      sound: false
    })
  },
  soundOut() {
    this.setData({
      sound: true
    })
  }
})