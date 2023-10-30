export const dataset = {
  dataset: {
    name: 'Dataset Vars',
    id: 'param_1',
    attributes: {
      userId: {
        name: 'User ID',
        dataType: 'integer',
      },
      orderId: {
        name: 'Order ID',
        dataType: 'integer',
      },
      productId: {
        name: 'Product ID',
        dataType: 'integer',
      },
      productName: {
        name: 'Product Name',
        dataType: 'string',
      },
      purchasedPrice: {
        name: 'Purchased Price',
        dataType: 'float',
      },
      lastPurchased: {
        name: 'Last Purchased',
        dataType: 'datetime',
      },
      totalProductPurchased: {
        name: 'Total Products',
        dataType: 'integer',
      },
      avgProductPerOrder: {
        name: 'Avg Products',
        dataType: 'integer',
      },
      totalOrders: {
        name: 'Total Orders',
        dataType: 'integer',
      },
    },
  },
  customInput: {
    name: 'Custom Variables',
    id: 'param_2',
    attributes: {
      CI001: {
        name: 'Cart Value',
        dataType: 'integer',
      },
      CI002: {
        name: 'Items Category',
        dataType: 'string',
      },
    },
  },
  systemVar: {
    name: 'System Variables',
    id: 'param_3',
    attributes: {
      requestTime: {
        name: 'Request Time',
        dataType: 'datetime',
      },
      currentTime: {
        name: 'Current Time',
        dataType: 'datetime',
      },
    },
  },
  globalVar: {
    name: 'Global Variables',
    id: 'param_4',
    attributes: {
      var1: {
        name: 'Variable 1',
        dataType: 'string',
      },
      var2: {
        name: 'variable 2',
        dataType: 'integer',
      },
    },
  },
  custom: {
    name: 'Custom Functions',
    id: 'param_5',
    attributes: {
      sql: {
        name: 'Custom SQL',
        dataType: 'popup',
      },
    },
  },
};
