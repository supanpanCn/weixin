import {request} from './../../request/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data_list:[],
    left_menu:[],
    right_con:[],
    active_index:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 判断旧数据是否存在且未过期
    let cates = wx.getStorageSync('cates');
    if(!cates){
      this.getData()
    }else{
      if(Date.now()-cates.time>10000*3600){
        this.getData()
      }else{
        this.render_list(cates.data)
      }
    }
    
  },
  getData(){
    request({url:"https://api.zbztb.cn/api/public/v1/categories"})
      .then(res=>{
        let data = res.data.message
        wx.setStorageSync('cates', {
          time:Date.now(),
          data
        });
        this.render_list(data)
      })
  },
  render_list(data){
    let left_menu = data.map(v=>v.cat_name)
    let right_con = data[0].children
    this.setData({
      right_con,
      left_menu,
      data_list:data
    })
  },
  menu_item_change(ev){
    let active_index = ev.currentTarget.dataset.active
    let right_con = this.data.data_list[active_index].children
    this.setData({
      right_con,
      active_index
    })
  }

})