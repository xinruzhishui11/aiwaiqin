// pages/order/createorder.js
const util = require('../../utils/util.js')
var num = 0;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        orderNum: 1,
        deliverMetArr: ["到店自取", "及时送", "快递", "自送"],
        index: 0,
        totalPrice: null,
        orderDetail: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options);
        var obj = JSON.parse(options.params);
        console.log(obj);
        this.setData({
            orderDetail: { title: obj.title, price: obj.price },
            totalPrice: obj.price
        });
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
    reduceOrderNum: function () {
        if (num > 1) {
            num--;
            this.setData({
                orderNum: num,
                totalPrice: this.data.orderDetail.price * num
            });
        }
    },
    addOrderNum: function () {
        num++;
        this.setData({
            orderNum: num,
            totalPrice: this.data.orderDetail.price * num
        });
    },
    // 配送方式
    bindPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value
        })
    },
})