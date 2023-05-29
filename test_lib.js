'use strict';

function getBridge() {
  return window.WebViewInterface;
}

function checkIsInApp() {
  return window.WebViewInterface ? true : false;
}

function isUAInApp() {
  return !!(window.navigator.userAgent || '').match(/\/IN_WEBVIEW$/);
}

function removeHeader() {
  document.getElementsByClassName('site-header')[0].remove();
}

function callAppBridgeFunction(name, payload) {
  const bridge = getBridge();
  if (bridge && bridge[name]) {
    bridge[name](payload);
  }
  if (bridge && bridge.callHandler) {
    bridge.callHandler(name, { payload }, () => {});
  }
}

function addAppBridgeFunction(name, func) {
  window.WebViewInterface[name] = func;
}

function checkAppBridge() {
  const result = getBridge();
  const message = result ? "可用" : "不可用";
  document.getElementById("app-bridge-status").textContent = message;
}

if (isUAInApp()) {
  removeHeader();
} 

checkAppBridge();

if (getBridge()) {
  addAppBridgeFunction('testAlert', () => {
    alert('這是一個來自於 Flutter 的請求');
  });
}

//# sourceMappingURL=index.js.map
