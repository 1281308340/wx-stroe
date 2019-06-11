// pages/home/home.js
//获取应用实例
var app = getApp()
Page({
  data: {
    recommendBooks: [
      {
        name: "推荐1",
        image: "../../images/ban22.jpg",
        url: ""
      },
      {
        name: "推荐2",
        image: "../../images/ban33.jpg",
        url: ""
      },
      {
        name: "推荐3",
        image: "../../images/book2.jpg",
        url: ""
      }],
    hotBooks: [
      {
        name: "精讲书",
        image: "../../images/hotBook0.jpg",
        url: ""
      },
      {
        name: "进阶书",
        image: "../../images/hotBook1.jpg",
        url: ""
      },
      {
        name: "入门书",
        image: "../../images/hotBook2.jpg",
        url: ""
      }],
    boutiqueBooks: [
      {
        name: "原木手绘",
        miniSummary:"采用东北香樟木为原材料，采用丙烯颜料，手绘五月天头像，绘完后均匀喷洒光油，晾干后可以作为饰品或礼物！",
        images: {
          title_img: "../../images/ab5.jpg",
          author: "../../images/head.jpg"
        },
        url: ""
      },
      {
        name: "刀画作品",
        miniSummary: "刀画作品起源于吉林敦化，是中国人发明的一种绘画艺术！可以作为饰品或礼物！",
        images: {
          title_img: "../../images/ab2.jpg",
          author: "../../images/head.jpg"
        },
        url: ""
      },
      {
        name: "墙面装饰",
        miniSummary: "油画作品装入小相框，可以作为墙上装饰，让你的卧室与众不同！作为饰品或礼物！",
        images: {
          title_img: "../../images/ab3.jpg",
          author: "../../images/head.jpg"
        },
        url: ""
      },{   
        name: "翠竹图",
        miniSummary: "采用油画颜料，画出中国国画意境，可以作为饰品或礼物！",
        images: {
        title_img: "../../images/ab4.jpg",
        author: "../../images/head.jpg"
      },
      url: ""
      }]
  },
  onLoad: function () {
  },
  bindToDetailTap: function (e) {
    wx.navigateTo({
      url: '../detail/detail?url=' + e.currentTarget.dataset.url
    })
  }
})
