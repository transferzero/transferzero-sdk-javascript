# TransferzeroSdk.DlocalBalanceApi

All URIs are relative to *https://api-sandbox.transferzero.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBalance**](DlocalBalanceApi.md#getBalance) | **GET** /dlocal/balance | Get dlocal balances


<a name="getBalance"></a>
# **getBalance**
> DlocalBalanceResponse getBalance()

Get dlocal balances

This endpoint retrieves dlocal account balances

### Example
```javascript
import { DlocalBalanceApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';

let apiInstance = new DlocalBalanceApi(apiClient);
apiInstance.getBalance().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling DlocalBalanceApi#getBalance");
    throw error;
  }
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DlocalBalanceResponse**](DlocalBalanceResponse.md)

### Authorization

You can set the API Key and Secret by passing a config object when creating an ApiClient:

```js
const apiClient = new ApiClient({
  apiKey: '<key>',
  apiSecret: '<secret>',
  basePath: 'https://api-sandbox.transferzero.com/v1'
});
```

Or by setting the properties on an ApiClient instance:

```js
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

