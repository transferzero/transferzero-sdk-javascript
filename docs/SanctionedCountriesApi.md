# TransferzeroSdk.SanctionedCountriesApi

All URIs are relative to *https://api-sandbox.bitpesa.co/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSanctionedCountries**](SanctionedCountriesApi.md#getSanctionedCountries) | **GET** /sanctioned_countries | Get List of Sanctioned Countries


<a name="getSanctionedCountries"></a>
# **getSanctionedCountries**
> SanctionedCountryListResponse getSanctionedCountries()

Get List of Sanctioned Countries

Get a list of sanctioned countries

### Example
```javascript
import { SanctionedCountriesApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new SanctionedCountriesApi(apiClient);
apiInstance.getSanctionedCountries().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling SanctionedCountriesApi#getSanctionedCountries");
    throw error;
  }
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SanctionedCountryListResponse**](SanctionedCountryListResponse.md)

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

