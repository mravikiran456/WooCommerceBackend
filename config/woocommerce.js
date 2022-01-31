const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;


const api = new WooCommerceRestApi({
    url: "https://www.uniformmarketnews.com",
    consumerKey: "ck_89cbae71f1a9a0098c7a35abc591fbe479a8fb18",
    consumerSecret: "cs_3324370962bd0326e8f9d6b130d9239fcdf53ab9",
    version: "wc/v3"
  });



module.exports = api