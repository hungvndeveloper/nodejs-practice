var customAfterPay = {
    option1: true,
    option2: false
};

var hsShipping = {
    method: 'express',
    fee: 10.99
};

var highsierraListeners = {
    event1: function () {
        console.log('Event 1 triggered');
    },
    event2: function () {
        console.log('Event 2 triggered');
    }
};

var hsCustomerDetails = {
    name: 'John Doe',
    email: 'johndoe@example.com'
};

var customMiniSummary = {
    total: 50.99,
    items: ['item1', 'item2']
};

var customBillingHelpers = {
    formatCurrency: function (value) {
        return '$' + value.toFixed(2);
    }
};

var customShippingHelpers = {
    calculateShipping: function (weight) {
        return weight * 1.5;
    }
};

var customDisplay = {
    test: { a: 1, b: 2 }
}

var auCheckout = {};

var listObj = [customAfterPay, hsShipping, highsierraListeners, hsCustomerDetails, customMiniSummary, customBillingHelpers, customShippingHelpers, customDisplay];

// Nếu không dùng jQuery, mà muốn copy các attribute của các object phía trên vào object auCheckout thì làm như sau:

listObj.forEach(function (library) {
    Object.keys(library).forEach(function (key) {
        if (!(key in auCheckout)) {
            if (Array.isArray(library[key])) {
                auCheckout[key] = library[key].slice();
            } else if (typeof library[key] === 'object') {
                auCheckout[key] = Object.assign({}, library[key]);
            } else {
                auCheckout[key] = library[key];
            }
        }
    });
});

// nếu dùng thư viện jQuery:

listObj.forEach(function (library) {
    Object.keys(library).forEach(function (key) {
        if (key in auCheckout) return;
        if (typeof library[key] === 'object') {
            auCheckout[key] = $.extend({}, auCheckout[key], library[key]);
        } else {
            auCheckout[key] = library[key];
        }
    });
});