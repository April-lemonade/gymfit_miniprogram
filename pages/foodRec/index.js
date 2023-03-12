// pages/foodRec/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showShare: false,
    options: [{
        name: '微信',
        icon: 'wechat',
        openType: 'share'
      },
      {
        name: '微博',
        icon: 'weibo'
      },
      {
        name: '复制链接',
        icon: 'link'
      },
      {
        name: '分享海报',
        icon: 'poster'
      },
      {
        name: '二维码',
        icon: 'qrcode'
      },
    ],
    themeColor: '',
    btnColor: '',
    calandar: [{
      week: '一',
      day: 7,
      content: {
        total: 543,
        stdtotal: 2131,
        protein: 0,
        stdprotein: 158,
        carb: 0,
        stdcarb: 158,
        fat: 0,
        stdfat: 158,
        water: 0,
        stdwater: 200,
      }
    }, {
      week: '二',
      day: 8,
      content: {
        total: 543,
        stdtotal: 2131,
        protein: 0,
        stdprotein: 158,
        carb: 0,
        stdcarb: 158,
        fat: 0,
        stdfat: 158,
        water: 0,
        stdwater: 200,
      }
    }, {
      week: '三',
      day: 9,
      content: {
        total: 543,
        stdtotal: 2131,
        protein: 0,
        stdprotein: 158,
        carb: 0,
        stdcarb: 158,
        fat: 0,
        stdfat: 158,
        water: 0,
        stdwater: 200,
      }
    }, {
      week: '今天',
      day: 10,
      content: {
        total: 543,
        stdtotal: 2131,
        protein: 0,
        stdprotein: 158,
        carb: 0,
        stdcarb: 158,
        fat: 0,
        stdfat: 158,
        water: 0,
        stdwater: 200,
      }
    }, {
      week: '五',
      day: 11,
      content: {
        total: 543,
        stdtotal: 2131,
        protein: 0,
        stdprotein: 158,
        carb: 0,
        stdcarb: 158,
        fat: 0,
        stdfat: 158,
        water: 0,
        stdwater: 200,
      }
    }, {
      week: '六',
      day: 12,
      content: {
        total: 543,
        stdtotal: 2131,
        protein: 0,
        stdprotein: 158,
        carb: 0,
        stdcarb: 158,
        fat: 0,
        stdfat: 158,
        water: 0,
        stdwater: 200,
      }
    }, {
      week: "日",
      day: 13,
      content: {
        total: 543,
        stdtotal: 2131,
        protein: 0,
        stdprotein: 158,
        carb: 0,
        stdcarb: 158,
        fat: 0,
        stdfat: 158,
        water: 0,
        stdwater: 200,
      }
    }],
    content: "",
    show: false,
    actions: [{
        name: '早餐',
        icon: 'https://s1.328888.xyz/2022/04/28/8P7T3.png',
      },
      {
        name: '午餐',
        icon: 'https://s1.328888.xyz/2022/04/28/8Ps4Q.png',
      },
      {
        name: '晚餐',
        icon: 'https://s1.328888.xyz/2022/04/28/8PIN4.png',
      },
      {
        name: '加餐',
        icon: 'https://s1.328888.xyz/2022/04/28/8PYfB.png',
      },
      {
        name: '喝水',
        icon: 'https://s1.328888.xyz/2022/04/28/8Ppxd.png',
      },
    ],
  },

  onClick(event) {
    this.setData({
      showShare: true
    });
  },

  onClick1(event) {
    this.setData({
      show: true
    });
  },

  onClose() {
    this.setData({
      showShare: false
    });
  },

  onSelect(event) {
    Toast(event.detail.name);
    this.onClose();
  },

  onClose1() {
    this.setData({
      show: false
    });
  },

  onSelect1(event) {
    console.log(event.detail);
    wx.navigateTo({
      url: './addRec/addRec',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const app = getApp();
    this.setData({
      content: this.data.calandar[0].content,
      themeColor: app.globalData.themeColor,
      btnColor: app.globalData.btnColor
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
        selected: 3
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