Component({
  data: {
    
    color: "#7A7E83",
    selectedColor: "#4D80C7",
    list: [
      {
      pagePath: "/pages/index/index",
      iconPath: "/asset/home.png",
      selectedIconPath: "/asset/home-active.png",
      text: "首页"
    }, 
    {
      pagePath: "/pages/moveLib/index",
      iconPath: "/asset/lib.png",
      selectedIconPath: "/asset/lib-active.png",
      text: "动作库"
    }, 
    //  扫码是我要凸起的tab
    {
      pagePath: "/pages/moveData/index",
      iconPath: "/asset/history.png",
      selectedIconPath: "/asset/history-active.png",
      text: "运动数据",
      isSpecial: true
    }, 
    {
      pagePath: "/pages/foodRec/index",
      iconPath: "/asset/rec.png",
      selectedIconPath: "/asset/rec-active.png",
      text: "饮食记录"
    }, 
    {
      pagePath: "/pages/me/index",
      iconPath: "/asset/i.png",
      selectedIconPath: "/asset/i-active.png",
      text: "我的"
    }
  ]
  },
  attached() {
    // console.log(this.data.selected)
  },
  methods: {
    switchTab(e)  {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url}) 
    }
  }
})