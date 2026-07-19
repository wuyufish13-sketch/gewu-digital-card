Page({
  data: {
    phone: "185 5552 7069"
  },

  onShareAppMessage() {
    return {
      title: "吴瑜｜格物科技有限公司",
      path: "/pages/card/card",
      imageUrl: "/assets/share-card.jpg"
    };
  },

  callPhone() {
    wx.makePhoneCall({
      phoneNumber: "18555527069"
    });
  },

  previewQr() {
    wx.previewImage({
      urls: ["/assets/wechat-qr.png"],
      current: "/assets/wechat-qr.png"
    });
  }
});
