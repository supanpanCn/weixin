// component/tabs/tabs.js
Component({
  /**
   * 组件的属性列表,接收父组件传递
   */
  properties: {
    tabs:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },
  // watch
  observers:{

  },
  /**
   * 组件的方法列表
   */
  methods: {
    click_tab_item(ev){
      let act_i = ev.currentTarget.dataset.active
      this.triggerEvent('item-change',act_i)
    }
  }
})
