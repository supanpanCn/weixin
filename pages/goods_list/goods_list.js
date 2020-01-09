import {request,URL} from './../../request/index.js'
import regeneratorRuntime  from './../../lib/runtime/runtime'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 选项卡数据
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
    // 激活的选项卡
    act_index:0,
    // 商品列表
    goods_list:[],
    // 总商品数
    total:'',
    // 当前页
    pagenum:1
    
  },
  queryParams:{
    query:'',
    cid:'',
    pagenum:1,
    pagesize:10
  },
  // 选项卡点击改变
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
  // 请求接口
  async getGoodsList(ty){
    const res = await request({
      url:URL.GOOD_LIST,
      data:this.queryParams
    })
    let goods_list = res.data.message.goods
    // 上拉刷新
    if(ty){
      goods_list = this.data.goods_list.concat(goods_list)
    }
    this.setData({
      goods_list,
      total:res.data.message.total,
      pagenum:res.data.message.pagenum
    })
    // 关闭下拉窗口（如果有）
    wx.stopPullDownRefresh()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.queryParams.cid = options.cid
    this.getGoodsList()
  },
  // 上拉触底
  onReachBottom(){
    if(this.data.pagenum<Math.ceil(this.data.total/10)){
      this.queryParams.pagenum += 1
      this.getGoodsList(1)
      return
    }
    wx.showToast({
      title: '没有下一页数据了~~',
    });
  },
  // 下拉刷新
  onPullDownRefresh(){
    console.log('789')
    this.queryParams.pagenum = 1
    this.setData({
      goods_list:[]
    })
    this.getGoodsList()
  }

  
})