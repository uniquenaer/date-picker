Page({
  //数组必须在此初始化赋值 否则 value:[0,0,0,0,0];
  data: {
    show: false
  },
  // 生命周期函数--监听页面加载
  onLoad: function() {
    
  },

  // ------------------- 分割线 --------------------
  onReady: function() {
    
  },
  onShow:function(){},
  //移动按钮点击事件
  translate: function() {
    this.setData({
      show: !this.data.show
    });
  },

  changeDate:function(e){
    console.log(e);
    const {detail} = e;
    this.setData({
      ...detail,
    })
  },
  //页面滑至底部事件
  onReachBottom: function() {
    // Do something when page reach bottom.
  }
});
