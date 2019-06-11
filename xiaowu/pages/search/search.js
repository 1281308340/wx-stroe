// pages/search/search.js
var app = getApp()
Page({
  data: {
    motto:{
      content:"遇见仿佛是一种神奇的安排，它是一切的开始。\n\n",
      author:"—— 董卿《朗读者》"
    }
  },
  formSubmit:function(e){
    wx.navigateTo({
      url: '../resultlist/resultlist?searchKey='+e.detail.value.input,
    })
  }
})