/**
     * Function to trigger an event and send data to GTM.
     * @param {string} eventName event name
     * @param {string} typeOfDataLayer name of object data send to GTM
     * @param {object} dataObject of object data send to GTM
     */
function triggerGTM(eventName, typeOfDataLayer, dataObject) {
    var requestData = {
      event: eventName
    };
    requestData[typeOfDataLayer] = null;
    if (dataObject) {
      // đây là đoạn thêm một attribute động vào 1 object requestData[typeOfDataLayer]
      requestData[typeOfDataLayer] = dataObject;
    }
    // dataLayer is a global variable that has been defined
    dataLayer.push(requestData);
}