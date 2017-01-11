var app = getApp()
Page({
    data: {
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1200,
        num:1,
        minusStatus:"disabled"
    },

    // minusStatuses: ['disabled', 'disabled', 'normal', 'normal', 'disabled'],

    onLoad: function(options) {

        var that = this

        // 商品详情
        wx.request({
            url: 'http://huanqiuxiaozhen.com/wemall/goods/inqgoods?id=' + options.id,
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(result) {
                console.log(result.data.data);

                var shopppingDetails = result.data.data;

                console.log(shopppingDetails.title);

                var goodsPicsInfo = [];
                var goodsPicsObj = {};
                var goodspic = result.data.data.goodspics;
                var goodspics = goodspic.substring(0, goodspic.length - 1);
                var goodspicsArr = goodspics.split("#");
                for (var i = 0; i < goodspicsArr.length; i++) {
                    goodsPicsInfo.push({
                        "picurl": goodspicsArr[i]
                    });
                }
                that.setData({
                    goodsPicsInfo: goodsPicsInfo,
                    shopppingDetails: shopppingDetails
                })
            }
        })
    },
    bindMinus:function(e){
        var num = this.data.num
        if(num == 2) {
          this.setData({num:num - 1, minusStatus:"disabled"})
        }
        else if(num == 1) {
          this.setData({minusStatus:"disabled"}) 
        }
        else {
          this.setData({num:num - 1})
        }
    },
    bindPlus:function(e){
        var num = this.data.num
        this.setData({num:num + 1})
        this.setData({minusStatus:"normal"})
    },
    bindManual:function(e){
        // 注意字符串 要转成 Number类型 或者用ParseInt()
        if(Number(e.detail.value) < 1) {
          var num = this.data.num
          this.setData({num:1 + 0})
        }
        else {
          this.setData({num:Number(e.detail.value)})
        }

        var num = this.data.num
        if(num == 1) {
          this.setData({minusStatus:"disabled"})
        }

        }
})
