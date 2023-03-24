'use strict';

function getBridge() {
  return window.WebViewInterface;
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
    document.getElementById("result-message").textContent = "呼叫 " + name +" 成功";
  }
  if (bridge && bridge.callHandler) {
    bridge.callHandler(name, { payload }, () => {});
    document.getElementById("result-message").textContent = "呼叫 " + name + " 成功";
  }
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
//# sourceMappingURL=index.js.map
