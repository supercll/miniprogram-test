Component({

  behaviors: [],
  options: {
    multipleSlots: true, //启用slot插槽

  },
  properties: {
    myProperty: { // 属性名
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal) {} // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
    },
    myProperty2: String, // 简化的定义方式,
    age: Number,
    modelValue: String
  },
  data: {
    A: [{
      B: 'init data.A[0].B'
    }]
  }, // 私有数据，可用于模版渲染

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名

    created: function () {
      console.log("component created 监听组件实例创建")
    },
    attached: function () {
      console.log("component attached 监听组件实例进入页面节点树")
    },
    moved: function () {
      console.log("component moved 监听组件实例移动节点树")
    },
    detached: function () {
      console.log("component detached 监听组件实例节点移除")
    },
    ready: function () {
      console.log("component ready 监听组件布局完成")

    },

  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () {}, // 此处attached的声明会被lifetimes字段中的声明覆盖

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () {
      console.log("component-pageLifetimes ready 监听组件布局完成")
    },
    hide: function () {
      console.log("component-pageLifetimes hide 监听组件布局隐藏")
    },
    resize: function () {},
  },

  methods: {
    onMyButtonTap: function () {
      const app = getApp();
      const globalName = app.globalData.userInfo.name;
      this.setData({
        // 更新属性和数据的方法与更新页面数据的方法类似
        myProperty: globalName + this.data.age,
        modelValue: "changeModel"
      })
    },
    _myPrivateMethod: function () {
      // 内部方法建议以下划线开头
      this.replaceDataOnPath(['A', 0, 'B'], 'myPrivateData') // 这里将 data.A[0].B 设为 'myPrivateData'
      this.applyDataUpdates()
    },
    _propertyChange: function (newVal, oldVal) {

    }
  }

})