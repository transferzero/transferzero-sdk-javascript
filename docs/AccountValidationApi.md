# TransferzeroSdk.AccountValidationApi

All URIs are relative to *https://api-sandbox.transferzero.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postAccountValidations**](AccountValidationApi.md#postAccountValidations) | **POST** /account_validations | Validates the existence of a bank account


<a name="postAccountValidations"></a>
# **postAccountValidations**
> AccountValidationResponse postAccountValidations(accountValidationRequest)

Validates the existence of a bank account

Validates the existence of a bank account and returns the associated customer name

### Example
```javascript
import { AccountValidationApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';

let apiInstance = new AccountValidationApi(apiClient);

apiInstance.postAccountValidations(accountValidationRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling AccountValidationApi#postAccountValidations");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountValidationRequest** | [**AccountValidationRequest**](AccountValidationRequest.md)|  | 

### Return type

[**AccountValidationResponse**](AccountValidationResponse.md)

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

 - **Content-Type**: application/json
 - **Accept**: application/json

