// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    themeColor: '',
    btnColor: '',
    option: {
      xAxis: {},
      yAxis: {},
      // title: {
      //   text: "体重数据",
      //   left: 'center',
      //   top: 35
      // },
      series: [{
        symbolSize: 5,
        data: [
          [2.02, 4.47],
          [1.05, 3.33],
          [4.05, 4.96],
          [6.03, 7.24]
        ],
        type: 'scatter'
      }]
    },
    date: "2月4日",
    week: "周五",
    totalCal: 2000,
    currentCal: 890,
    cal: [{
      name: "蛋白质",
      count: 24,
      unit: 'g'
    }, {
      name: "碳水",
      count: 124,
      unit: 'g'
    }, {
      name: "脂肪",
      count: 21,
      unit: 'g'
    }, {
      name: "水分",
      count: 60,
      unit: 'ml'
    }],
    active: '1',
    calandar: [{
      index: 0,
      week: '今天',
      day: 10,
      train: {
        name: "胸 · 三头 · 腹肌",
        moveCount: 7,
        groupCount: 25
      }
    }, {
      index: 1,
      week: '',
      day: 11,
      train: {
        name: "胸 · 三头 · 腹肌",
        moveCount: 7,
        groupCount: 25
      }
    }, {
      index: 2,
      week: '六',
      day: 12,
      train: {
        name: "胸 · 三头 · 腹肌",
        moveCount: 7,
        groupCount: 25
      }
    }, {
      index: 3,
      week: "日",
      day: 13,
      train: {
        name: "胸 · 三头 · 腹肌",
        moveCount: 7,
        groupCount: 25
      }
    }, {
      index: 4,
      week: "一",
      day: 14,
      train: {
        name: "胸 · 三头 · 腹肌",
        moveCount: 7,
        groupCount: 25
      }
    }, {
      index: 5,
      week: "二",
      day: 15,
      train: {
        name: "胸 · 三头 · 腹肌",
        moveCount: 7,
        groupCount: 25
      }
    }, {
      index: 6,
      week: "三",
      day: 16,
      train: {
        name: "胸 · 三头 · 腹肌",
        moveCount: 7,
        groupCount: 25
      }
    }, {
      index: 7,
      week: "四",
      day: 17,
      train: {
        name: "胸 · 三头 · 腹肌",
        moveCount: 7,
        groupCount: 25
      }
    }],
    buildMuscle1: [{
      index: 1,
      title: "健身入门指南",
      subtitle: "怎么选择合适的计划？",
      img: "https://s1.328888.xyz/2022/04/28/AfGng.png"
    }, {
      index: 2,
      title: "全身基础",
      subtitle: "3练·器械低难度",
      img: "https://s1.328888.xyz/2022/04/28/AfGng.png"
    }],
    buildMuscle2: [{
      index: 1,
      title: "常规三分化",
      subtitle: "6练·高频增肌",
      img: "https://s1.328888.xyz/2022/04/28/AfGng.png"
    }, {
      index: 2,
      title: "高频5日",
      subtitle: "5练·全身不分化",
      img: "https://s1.328888.xyz/2022/04/28/AfGng.png"
    }, {
      index: 3,
      title: "上下·二分化",
      subtitle: "4练·上肢下肢*2",
      img: "https://s1.328888.xyz/2022/04/28/AfGng.png"
    }, {
      index: 4,
      title: "5×5",
      subtitle: "3练·灵活增肌",
      img: "https://s1.328888.xyz/2022/04/28/AfGng.png"
    }, {
      index: 5,
      title: "Candito 6周",
      subtitle: "3-5·著名计划",
      img: "https://s1.328888.xyz/2022/04/28/AfGng.png"
    }],
    buildMuscle3: [{
      index: 1,
      title: "健身入门指南",
      subtitle: "怎么选择合适的计划？",
      img: "https://s1.328888.xyz/2022/04/28/AfGng.png",

    }],
    articles: [{
      index: 1,
      title: '2022中国人膳食宝典更新！三餐怎么吃？',
      subtract: '2022中国人膳食宝典更新！三餐怎么吃？GymFit带你一起了解！',
      src: 'https://mp.weixin.qq.com/s/Eolk5ttNMDf8tXqr01QMwA',
      img: 'https://s3.bmp.ovh/imgs/2022/04/29/62cdf326903ca74c.png'
    }, {
      index: 2,
      title: '每日锻炼 | 三角肌前束',
      subtract: '运动——哑铃三角肌前束锻炼方法！',
      src: 'https://mp.weixin.qq.com/s/xxDlaNU1ZWUqnhlwZGVWGA',
      img: 'https://s3.bmp.ovh/imgs/2022/04/29/335fbecc6cdc92bc.png'
    }]
  },
  articleDetail(e) {
    // console.log(e.currentTarget.dataset.src)
    wx.navigateTo({
      url: '../index/article/index?src=' + encodeURIComponent(e.currentTarget.dataset.src),
    })
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onShow: function () {

    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  onReady: function () {},
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
    // 对月份进行处理，1-9月在前面添加一个“0”
    if (nowMonth >= 1 && nowMonth <= 9) {
      nowMonth = "0" + nowMonth;
    }
    // 对月份进行处理，1-9号在前面添加一个“0”
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    // 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期
    var nowDate = nowMonth + "月" + strDate + "日";
    var week = ''
    var day = new Date()
    if (day.getDay() == 0)
      week = '周日';
    else if (day.getDay() == 1)
      week = '周一';
    else if (day.getDay() == 2)
      week = '周二';
    else if (day.getDay() == 3)
      week = '周三';
    else if (day.getDay() == 4)
      week = '周四';
    else if (day.getDay() == 5)
      week = '周五';
    else if (day.getDay() == 6)
      week = '周六';
    this.setData({
      themeColor: app.globalData.themeColor,
      btnColor: app.globalData.btnColor,
      articles: wx.getStorageSync('articles'),
      date: nowDate,
      week: week
    })
    var day = new Date();
    for (var i = 0; i < this.data.calandar.length; i++) {
      var week = ''
      if (day.getDate() < 10) {
        this.setData({
          ['calandar[' + i + '].day']: '0' + day.getDate()
        })
      } else {
        this.setData({
          ['calandar[' + i + '].day']: day.getDate()
        })
      }

      if (i != -1) {
        // this.data.calandar[i].week = day.getDay();
        if (day.getDay() == 0)
          week = '日' + " ";
        else if (day.getDay() == 1)
          week = '一' + " ";
        else if (day.getDay() == 2)
          week = '二' + " ";
        else if (day.getDay() == 3)
          week = '三' + " ";
        else if (day.getDay() == 4)
          week = '四' + " ";
        else if (day.getDay() == 5)
          week = '五' + " ";
        else if (day.getDay() == 6)
          week = '六' + " ";
        this.setData({
          ['calandar[' + i + '].week']: week
        })
      }
      var nextDay = new Date(day);
      nextDay.setDate(day.getDate() + 1);
      day = nextDay;
    }

  },
  getUserProfile(e) {
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  switchTab(e) {
    this.setData({
      active: e.currentTarget.dataset.index
    })
  },
  methods: {
    switchTab(e) {
      this.data.active = e.currentTarget.dataset.index;
    },
  }
})