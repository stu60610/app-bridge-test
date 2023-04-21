'use strict';

function getBridge() {
  return window.WebViewInterface;
}

function checkIsInApp() {
  return window.WebViewInterface ? true : false;
}

function callAppBridgeFunction(name, payload) {
  const bridge = getBridge();
  if (bridge && bridge.postMessage) {
    bridge.postMessage({ type: name, params: payload })
  }
}

function addAppBridgeFunction(name, func) {
  window.WebViewInterface[name] = func;
}