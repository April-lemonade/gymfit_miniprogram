// pages/moveData/index.js
import svg from '../../utils/man.js'
import baseUrl from '../../utils/manBody'
import Base64 from '../../utils/Base64'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    minDate: '',
    maxDate: '',
    std: 67,
    errorCount: 5,
    advice: [{
      index: 0,
      content: "稳住肩关节"
    }, {
      index: 1,
      content: "放开的时候肘关节不要太靠后"
    }],
    themeColor: '',
    btnColor: '',
    svgData: svg.url, //需要在字符串前后加上一对引号（非常关键！）
    baseUrl: baseUrl.baseUrl,
    moveData: [],
    sex: 0,
    manCount: 90,
    today: '',
    show: false,
    history: [{
      name: '蝴蝶机夹胸',
      duration: '3:00'
    }]
  },
  watch: {
    color: function (obj) {
      this.initImage()
    },
    stroke: function (obj) {
      this.initImage()
    }
  },

  onDisplay() {
    this.setData({
      show: true
    });
  },
  onClose() {
    this.setData({
      show: false
    });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      show: false,
      today: this.formatDate(event.detail),
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const app = getApp();
    // 获取当前日期
    var date = new Date();

    // 获取当前月份
    var nowMonth = date.getMonth() + 1;

    // 获取当前是几号
    var strDate = date.getDate();

    // 添加分隔符“-”
    var seperator = "-";

    var minDate = date.getDate();

    // 对月份进行处理，1-9月在前面添加一个“0”
    if (nowMonth >= 1 && nowMonth <= 9) {
      nowMonth = "0" + nowMonth;
    }

    // 对月份进行处理，1-9号在前面添加一个“0”
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }

    // 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期
    var nowDate = date.getFullYear() + seperator + nowMonth + seperator + strDate;
    var minDate = date.getFullYear() + seperator + nowMonth + seperator + strDate;
    this.setData({
      themeColor: app.globalData.themeColor,
      btnColor: app.globalData.btnColor,
      today: nowDate,

    })
    var data = []
    var color = ['red']
    for (var i = 0; i < 90; i++) {
      data[i] = i
      if (data[i] < 10)
        color[i] = "red"
      if (10 <= data[i] && data[i] < 20)
        color[i] = "orange"
      if (20 <= data[i] && data[i] < 30)
        color[i] = "yellow"
      if (30 <= data[i] && data[i] < 40)
        color[i] = "green"
      if (40 <= data[i] && data[i] < 50)
        color[i] = "blue"
      if (50 <= data[i])
        color[i] = "purple"
      console.log(data[i] < 10, color[i])
    }

    this.setData({
      moveData: data
    })

    // const oldcolorArr = svg.url.match(/fill:[a-zA-Z0-9]{4}/g)
    // console.log(oldcolorArr)
    // this.initImage()
    const strArr = this.data.baseUrl.split(/fill="#?[a-zA-Z0-9]{0,6}"/g)
    const oldcolorArr = this.data.baseUrl.match(/fill="#?[a-zA-Z0-9]{0,6}"/g)
    // const newcolorArr = this.color.split(',')

    for (let i = 0; i < 90; i++) {
      // const color = newcolorArr[i]
      var col = color[i]
      if (color) {
        oldcolorArr[i] = `fill="${col}"`
      }
    }
    let str = ''
    for (let i = 0; i < strArr.length; i++) {
      str += (strArr[i] + (oldcolorArr[i] ? oldcolorArr[i] : ''))
    }
    // const Base64 = require('../../utils/base64.js')
    const base64 = Base64.encode(str)
    // this.imgurl = 'data:image/svg+xml;base64,' + base64
    this.setData({
      baseUrl: 'data:image/svg+xml;base64,' + base64
    })
    // baseUrl = str
    console.log(str)
    for (let i = 0; i < oldcolorArr.length; i++) {
      // strArr[i] = 
    }
    this.setData({
      svgData: '"' + svg.url + '"'
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
        selected: 2
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

  },
  methods: {
    initImage() {
      if (this.color || this.stroke) {
        // 先获取svg源码字符串，替换 file="#ffff"  stroke='#FFFFFF' 颜色这个属性，再将这个字符串转化为base64，达到修改颜色的目的
        wx.getFileSystemManager().readFile({
          filePath: this.src,
          encoding: 'binary',
          success: res => {
            let basestr = res.data
            if (this.color) {
              const strArr = basestr.split(/fill="#?[a-zA-Z0-9]{0,6}"/g)
              const oldcolorArr = basestr.match(/fill="#?[a-zA-Z0-9]{0,6}"/g)
              const newcolorArr = this.color.split(',')
              for (let i = 0; i < newcolorArr.length; i++) {
                const color = newcolorArr[i]
                if (color) {
                  oldcolorArr[i] = `fill="${color}"`
                }
              }
              let str = ''
              for (let i = 0; i < strArr.length; i++) {
                str += (strArr[i] + (oldcolorArr[i] ? oldcolorArr[i] : ''))
              }
              basestr = str
            }
            if (this.stroke) {

              const strArr = basestr.split(/stroke="#?[a-zA-Z0-9]{0,6}"/g)
              const oldcolorArr = basestr.match(/stroke="#?[a-zA-Z0-9]{0,6}"/g)
              const newcolorArr = this.stroke.split(',')
              for (let i = 0; i < newcolorArr.length; i++) {

                const color = newcolorArr[i]
                if (color) {

                  oldcolorArr[i] = `stroke="${
    color}"`
                }
              }
              let str = ''
              for (let i = 0; i < strArr.length; i++) {

                str += (strArr[i] + (oldcolorArr[i] ? oldcolorArr[i] : ''))
              }
              basestr = str
            }
            const base64 = Base64.encode(basestr)
            this.imgurl = 'data:image/svg+xml;base64,' + base64
          }
        })
      } else {
        this.imgurl = this.src
      }
    }
  }
})