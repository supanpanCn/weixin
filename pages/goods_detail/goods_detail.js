import {request,URL} from './../../request/index.js'
import regeneratorRuntime  from './../../lib/runtime/runtime'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods_detail:{},
    collect:false
  },
  pre_pic_urls:[],
  async get_goods_detail(goods_id){
    let res = await request({
      url:URL.GOODS_DETAIL,
      data:{
        goods_id
      }
    })
    res.data.message.pics.forEach(v=>{
      this.pre_pic_urls.push(v.pics_mid)
    })
    this.setData({
      goods_detail:res.data.message
    })
  },
  // 收藏
  add_collect(){
    let collect = !this.data.collect
    this.setData({
      collect
    })
  },
  // 预览
  look_pic(e){
    let {index} = e.currentTarget.dataset
    let current = this.pre_pic_urls.filter((v,i)=>i==index)
    wx.previewImage({
      urls:this.pre_pic_urls,
      current:current[0]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {goods_id} = options
    this.get_goods_detail(goods_id)
  },

  

 
})