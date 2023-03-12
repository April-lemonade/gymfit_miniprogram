// pages/moveLib/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    themeColor: '',
    btnColor: '',
    data: [{
      "sportPartId": 1,
      "sportPartName": "胸",
      "sportEquipments": [{
        "sportEquipmentId": 1,
        "sportEquipmentName": "杠铃",
        "sports": [{
          "sportId": 1,
          "sportName": "杠铃卧推",
          "sportPhotoUrl": null
        }, {
          "sportId": 2,
          "sportName": "宽距杠铃卧推",
          "sportPhotoUrl": null
        }]
      }, {
        "sportEquipmentId": 2,
        "sportEquipmentName": "哑铃",
        "sports": [{
          "sportId": 3,
          "sportName": "哑铃卧推",
          "sportPhotoUrl": null
        }]
      }, {
        "sportEquipmentId": 3,
        "sportEquipmentName": "悍马机",
        "sports": [{
          "sportId": 4,
          "sportName": "悍马机推胸",
          "sportPhotoUrl": null
        }, {
          "sportId": 5,
          "sportName": "悍马机卧推",
          "sportPhotoUrl": null
        }]
      }, {
        "sportEquipmentId": 4,
        "sportEquipmentName": "史密斯机",
        "sports": []
      }, {
        "sportEquipmentId": 5,
        "sportEquipmentName": "器械",
        "sports": []
      }, {
        "sportEquipmentId": 6,
        "sportEquipmentName": "TRX&弹力带",
        "sports": []
      }, {
        "sportEquipmentId": 7,
        "sportEquipmentName": "绳索",
        "sports": []
      }, {
        "sportEquipmentId": 8,
        "sportEquipmentName": "自重",
        "sports": []
      }]
    }],
    items: [{
      text: '胸',
      content: [{
        type: '杠铃',
        trains: [{
          name: '杠铃划船',
          img: 'https://profile.csdnimg.cn/7/3/B/3_battersun',
          count: 16
        }, {
          name: '反手杠铃划船',
          img: 'https://profile.csdnimg.cn/7/3/B/3_battersun',
          count: 17
        }]
      }, {
        type: '哑铃',
        trains: [{
          name: '哑铃划船',
          img: ''
        }, {
          name: '站姿哑铃划船',
          img: ''
        }]
      }],
    }, {
      text: '背脊'
    }],
    mainActiveIndex: 0,
    activeId: null,
    content: [{}]
  },

  startFit() {
    
    wx.navigateTo({
      url: '../../pages/fiting/index'
    })
  },

  onChange(e) {
    // console.log(e)
    this.setData({
      content: this.data.data[e.detail].sportEquipments
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const app = getApp();
    let that = this
    this.setData({
      themeColor: app.globalData.themeColor,
      btnColor: app.globalData.btnColor
    })
    const urlList = require('../../utils/config.js');
    wx.request({
      url: urlList.urlList.moveUrl + '/list',
      success: res => {
        // console.log("用户的userId:" + JSON.stringify(res));
        that.setData({
          data: res.data.data,
          content: res.data.data[0].sportEquipments
        })
        console.log(res.data.data)
      }
    })
    this.setData({
      content: this.data.data[0].sportEquipments
    })
    console.log(this.data.btnColor)
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
        selected: 1
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