import { getSetting, chooseAddress, openSetting } from './../../utils/asyncWx'
import regeneratorRuntime from './../../lib/runtime/runtime'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:null,
    cart:null
  },
  // 选择收获地址
  async select_address() {
    try {
      // 获取权限状态
      let result = await getSetting()
      let scopeAddress = result.authSetting[`scope.address`]
      // 如果用户拒绝过则引导用户赋予权限
      if (scopeAddress === false) {
        await openSetting()
      }
      let res = await chooseAddress()
      // 保存一份用户地址信息
      wx.setStorageSync('address', res);
        
      console.log(res)
    }catch(err){
      console.log('用户取消了权限')
    }
  },
  /**
   * 生命周期函数--监听页面加载，只会执行一次
   */
  onLoad: function (options) {

  },
  // 会多次执行，有点像visiblityChange
  onShow(){
    let address = wx.getStorageSync('address')
    let cart = wx.getStorageSync('cart')
    console.log(cart)
    this.setData({
      address,
      cart
    })
  }


})