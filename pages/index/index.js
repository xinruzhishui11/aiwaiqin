Page({

  /**
   * 页面的初始数据
   */
  data: {
    // navigatorList: ["推荐", "家电", "通信", "金融", "天然气",],
    orderList: [{ title: "厨房清洗全包清洗", price: 199.00, orderNum: 12 }, { title: "汽车清洗全包清洗", price: 19.00, orderNum: 12 }, { title: "家电清洗全包清洗", price: 99.00, orderNum: 2 }, { title: "搬家服务", price: 200.00, orderNum: 16 }],
    navigatorList: [{ tabText: "推荐", selected: true }, { tabText: "通信", selected:          false }, { tabText: "家电", selected: false }, { tabText: "金融", selected: false }, {      tabText: "天然气", selected: false }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  itemClick:function(event){
    console.log(event);
    var selectedText = event.currentTarget.dataset.text;
    var newArr = this.data.navigatorList.map(function(x,y){
        if (x.tabText === selectedText){
          x.selected = true
        }else{
          x.selected = false;
        }
        return x;
    });

    this.setData({
      navigatorList:newArr
    });

    console.log(newArr);

  },
  // 下订单
  clickOrder:function(event){
    console.log(event);
    // console.log();
    var params = JSON.stringify(event.currentTarget.dataset.order)
    wx.navigateTo({
      url: '../order/createorder?params=' + params,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})