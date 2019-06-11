// pages/myBooks/myBooks.js
var app = getApp()
Page({
  data: {
    userInfo: {},
    books: []
  },
  onLoad: function (options) {
    var that = this;
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: {
          nickName: userInfo.nickName,
          avatarUrl: userInfo.avatarUrl
        }
      })
    })
  }
})