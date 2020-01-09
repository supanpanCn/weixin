import {request,URL} from './../../request/index.js'
import regeneratorRuntime  from './../../lib/runtime/runtime'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        name:'综合',
        isActive:true
      },
      {
        id:1,
        name:'销量',
        isActive:false
      },
      {
        id:2,
        name:'价格',
        isActive:false
      }
    ],
    goods_list:[],
    act_index:0
  },
  queryParams:{
    query:'',
    cid:'',
    pageNum:1,
    pagesize:10
  },
  tab_item_change(e){
    let act_index = e.detail
    let {tabs} = this.data
    tabs.map((v,i)=>{
       v.isActive = i==act_index?true:false
    })
    this.setData({
      tabs,
      act_index
    })
  },
  async getGoodsList(){
    const res = await request({
      url:URL.GOOD_LIST,
      data:this.queryParams
    })
    this.setData({
      goods_list:res.data.message.goods
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.queryParams.cid = options.cid
    this.getGoodsList()
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