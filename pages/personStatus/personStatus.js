// pages/personStatus.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    day: '',
    time: ''
  },
  goHome(){
    wx.navigateBack();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  updateDate(){
    let date = new Date()
    const year = this.formatDate(date.getFullYear())
    const month = this.formatDate(date.getMonth()+1)
    const day = this.formatDate(date.getDate())

    const hour = this.formatDate(date.getHours())
    const min = this.formatDate(date.getMinutes())
    const sec = this.formatDate(date.getSeconds())
    this.setData({
      day: `${year}年${month}月${day}日`,
      time: `${hour}:${min}:${sec}`
    })
  },

  formatDate(num){
    let str = num + '';
    if(str.length === 1) {
      return `0${str}`
    } else {
      return num
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onready')
    this.intervalId = setInterval(this.updateDate, 1000)
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
    console.log(this.intervalId)
    clearInterval(this.intervalId)
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