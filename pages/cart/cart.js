import { getSetting, chooseAddress, openSetting,showModal,showToast} from './../../utils/asyncWx'
import regeneratorRuntime from './../../lib/runtime/runtime'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: null,
    cart: null,
    check_all: false,
    price_all: 0,
    num_all: 0
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
    } catch (err) {
      console.log('用户取消了权限')
    }
  },
  // 选择商品等待付款
  select_shop(e) {
    let i = e.currentTarget.dataset.id
    let {cart} = this.data
    cart[i].checked = !cart[i].checked
    this.reset_tools(cart)
    wx.setStorageSync('cart', cart)
  },
  // 全选
  select_all(ty = 1) {
    let {cart} = this.data
    let {check_all} = this.data
    cart.forEach(v=>v.checked=!check_all)
    this.reset_tools(cart)
    wx.setStorageSync('cart', cart)
  },
  // 重置工具条
  reset_tools(cart) {
    let price_all = 0,
        num_all = 0,
        check_all=true

    cart.forEach(v => {
      if (v.checked) {
        price_all += v.goods_price * v.num
        num_all += v.num
      }else{
        check_all = false
      }
    })
    this.setData({
      cart,
      price_all,
      num_all,
      check_all
    })
  },
  // 增减购物车
  async add_car(e){
    let operate = e.currentTarget.dataset.operate
    let id = e.currentTarget.dataset.id
    let {cart} = this.data
    
    if(cart[id].num==1&&operate<0){
      let that = this
      let res = await showModal({
        content:'确定要删除吗'
      })
      if (res.confirm) {
        cart.splice(id,1)
        that.reset_tools(cart)
        wx.setStorageSync('cart', cart)
      } 
      return
    }
    cart[id].num += operate
    this.reset_tools(cart)
    wx.setStorageSync('cart', cart)
  },
  // 结算
  async clearning(){
    let {address,num_all} = this.data
    
    if(!address){
      await showToast({
        title:'您还没有选择收获地址~'
      })
      return
    }

    if(!num_all){
      await showToast({
        title:'您还没有选购商品~'
      })
      return
    }

    wx.navigateTo({
      url: '/pages/pay/pay'
    });
      
  },
  /**
   * 生命周期函数--监听页面加载，只会执行一次
   */
  onLoad: function (options) {

  },
  // 会多次执行，有点像visiblityChange
  onShow() {
    let address = wx.getStorageSync('address')
    let cart = wx.getStorageSync('cart') || []
    this.reset_tools(cart)
    this.setData({
      address
    })
  }


})