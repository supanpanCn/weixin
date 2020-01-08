import {request} from './../../request/index.js'
Page({
  data: {
    swiper_list: [],
    nav_list:[],
    floor_list:[]
  },
  get_data(url,ty=1){
    request({url})
      .then(res=>{
        let key = ''
        switch(ty){
          case 1:
            key = 'swiper_list'
            break
          case 2:
            key='nav_list'
            break
          case 3:
            key='floor_list'
            break
        }
        this.setData({
          [key]:res.data.message
        })
      })
  },
  //页面开始加载请求接口，渲染轮播图
  onLoad: function (options) {
    this.get_data('https://api.zbztb.cn/api/public/v1/home/swiperdata')
    this.get_data('https://api.zbztb.cn/api/public/v1/home/catitems',2)
    this.get_data('https://api.zbztb.cn/api/public/v1/home/floordata',3)
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  },
  onPageScroll: function () {

  },
  //item(index,pagePath,text)
  onTabItemTap: function (item) {

  }
});
