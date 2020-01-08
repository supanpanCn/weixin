// pages/self_com/self_com.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        name: '首页',
        isActive: true
      },
      {
        id: 1,
        name: '原创',
        isActive: false
      },
      {
        id: 2,
        name: '分类',
        isActive: false
      },
      {
        id: 3,
        name: '关于',
        isActive: false
      }
    ]
  },
  handle_item_change(e) {
    console.log(e)
    let act_i = e.detail
    let { tabs } = this.data
    // 利用forEach改变原数组的特性
    tabs.forEach((v, i) => i == act_i ? v.isActive = true : v.isActive = false)
    this.setData({
      tabs
    })
  },
  /**
   * 生命周期函数--监听页面加载
   * 发送异步请求
   */
  onLoad: function (options) {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  /**
     * 生命周期函数--监听页面初次渲染完成
     */
  onReady: function () {

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
   * 页面上拉触底事件的处理函数，前提是页面高>屏幕高度
   */
  onReachBottom: function () {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onPageScroll(){
    console.log('滚动')
  },
  /* 
    监听横竖屏切换，需要进行相关配置
  */
  onResize(){
    console.log('屏幕变化')
  },
  /* 
    触发条件
      tabBar存在
      自点击
  */
  onTabItemTap(){

  }

})