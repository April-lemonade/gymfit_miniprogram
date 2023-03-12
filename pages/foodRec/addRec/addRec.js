// pages/foodRec/addRec/addRec.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    themeColor: '',
    btnColor: '',
    normalFood: [{
        id: 0,
        name: '豆浆',
        cal: 31,
        unit: '毫升',
        img: 'https://s1.328888.xyz/2022/05/07/4ASwd.png'
      },
      {
        id: 1,
        name: '包子',
        cal: 216,
        unit: '克',
        img: 'https://s1.328888.xyz/2022/05/07/4AoBQ.png'
      },
      {
        id: 2,
        name: '关东煮',
        cal: 152,
        unit: '克',
        img: 'https://s1.328888.xyz/2022/05/07/4ANqk.png'
      },
      {
        id: 3,
        name: '烤肠',
        cal: 200,
        unit: '克',
        img: 'https://s1.328888.xyz/2022/05/07/4AE23.png'
      },
      {
        id: 4,
        name: '面包',
        cal: 313,
        unit: '克',
        img: 'https://s1.328888.xyz/2022/05/07/4API4.png'
      },
      {
        id: 5,
        name: '泡面',
        cal: 313,
        unit: '克',
        img: 'https://s1.328888.xyz/2022/05/07/4AxjB.png'
      },
      {
        id: 6,
        name: '冰淇淋',
        cal: 127,
        unit: '克',
        img: 'https://s1.328888.xyz/2022/05/07/4hq3A.png'
      },
      {
        id: 7,
        name: '饼干',
        cal: 435,
        unit: '克',
        img: 'https://s1.328888.xyz/2022/05/07/4hHDm.png'
      },
      {
        id: 8,
        name: '饭团',
        cal: 173,
        unit: '克',
        img: 'https://s1.328888.xyz/2022/05/07/4h4eP.png'
      }
    ],
    customFood: [{
      id: 1,
      name: '包子',
      cal: 216,
      unit: '克',
      img: 'https://s1.328888.xyz/2022/05/07/4AoBQ.png'
    }],
    addedFood: [{id: 0,
      name: '豆浆',
      cal: 31,
      unit: '毫升',
      img: 'https://s1.328888.xyz/2022/05/07/4ASwd.png'},{
        id: 1,
        name: '包子',
        cal: 216,
        unit: '克',
        img: 'https://s1.328888.xyz/2022/05/07/4AoBQ.png'
      }],
    show: false,
    
  },
  onClose() {
    this.setData({
      show: false
    });
  },

  onSelect(event) {
    console.log(event.detail);
  },
  showAddedFood() {
    this.setData({
      show: true
    })
  },

  goAddFood() {
    wx.navigateTo({
      url: './addFood/addFood',
    })
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