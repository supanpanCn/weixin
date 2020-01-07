// 必须调用Page方法
Page({
  // 相当于vue中的data
  data: {
    msg:'我是data中的数据',
    index:0,
    list:['vue','react','php'],
    obj:{
      "zs":18,
      "ls":24,
      "ww":22
    },
    is_show:false,
    base_num:0,
    rich_text:{
      str:`
          <ul class="nav-hd ">
          <li><a href="https://www.tmall.com">天猫</a></li>
          <li><a href="https://ju.taobao.com">聚划算</a></li>
          <li><a href="https://chaoshi.tmall.com">天猫超市</a></li>
          </ul>
        `,
      obj_arr:[{
        // name指定类型
        // attrs:属性
        // children:子节点
        name:'div',
        attrs:{
          class:"learn_richText"
        },
        children:[{
          type:"text",
          text:'hello'
        }]
      }],
      gender:''
    }
  },
  input_change(ev){
    // 通过detail获取input的值
    // 和react一样通过唯一的setData修改值
    this.setData({
      base_num:ev.detail.value
    })
  },
  user_click(ev){
    let ty = ev.currentTarget.dataset.operate
    this.setData({
      base_num:this.data.base_num + Number(ty)
    })
  },
  select_gender(e){
    let gender = e.detail.value
    this.setData({
      gender
    })
  }

})