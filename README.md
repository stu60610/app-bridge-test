1. To check if the App Bridge is available
```
checkIsInApp();
```
2. Call an registered function to App
```
callAppBridgeFunction(<func_name>, <payload>);
```
```
Ex. callAppBridgeFunction('handleBannerClick', JSON.stringify({ url: 'https://www.google.com', isExternal: true }));
```

3. To register an function for App calling
```
addAppBridgeFunction(<func_name>, <function>);
```
```
Ex. addAppBridgeFunction('pageGoBack', () => {});
```
