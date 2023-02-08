# TransferzeroSdk.BankAccountDetailsApi

All URIs are relative to *https://api-sandbox.bitpesa.co/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBankAccountDetails**](BankAccountDetailsApi.md#getBankAccountDetails) | **GET** /bank_account_details/{Currency} | Fetching bank account details


<a name="getBankAccountDetails"></a>
# **getBankAccountDetails**
> BankAccountDetailsResponse getBankAccountDetails(currency)

Fetching bank account details

Returns single bank account details based on the currency

### Example
```javascript
import { BankAccountDetailsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new BankAccountDetailsApi(apiClient);

apiInstance.getBankAccountDetails(currency).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling BankAccountDetailsApi#getBankAccountDetails");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **String**| Currency of the required bank account details.  Example: &#x60;/v1/bank_account_details/NGN&#x60; | 

### Return type

[**BankAccountDetailsResponse**](BankAccountDetailsResponse.md)

### Authorization

You can set the API Key and Secret by passing a config object when creating an ApiClient:

```js
const apiClient = new ApiClient({
  apiKey: '<key>',
  apiSecret: '<secret>',
  basePath: 'https://api-sandbox.bitpesa.co/v1'
});
```

Or by setting the properties on an ApiClient instance:

```js
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

