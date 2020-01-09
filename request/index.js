let num = 0
export const request = (params)=>{
    num++
    wx.showLoading({
        title: '加载中',
        mask:true
    })
    return new Promise((resolve,reject)=>{
        wx.request({
            ...params,
            success:(result)=>{
                resolve(result)
            },
            fail:(err)=>{
                reject(err)
            },
            complete:()=>{
                num--
                if(num==0) wx.hideLoading()
            }
        })
    })
}
export const URL={
    HOME_SWIPER_DATA:'https://api.zbztb.cn/api/public/v1/home/swiperdata',
    HOME_NAV_LIST:'https://api.zbztb.cn/api/public/v1/home/catitems',
    HOME_FLOOR_DATA:'https://api.zbztb.cn/api/public/v1/home/floordata',
    CATE_DATA:'https://api.zbztb.cn/api/public/v1/categories',
    GOOD_LIST:'https://api.zbztb.cn/api/public/v1/goods/search',
    GOODS_DETAIL:'https://api.zbztb.cn/api/public/v1/goods/detail'

}