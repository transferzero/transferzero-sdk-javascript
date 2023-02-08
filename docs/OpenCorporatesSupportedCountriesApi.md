# TransferzeroSdk.OpenCorporatesSupportedCountriesApi

All URIs are relative to *https://api-sandbox.bitpesa.co/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOpenCorporatesSupportedCountries**](OpenCorporatesSupportedCountriesApi.md#getOpenCorporatesSupportedCountries) | **GET** /open_corporates/countries | Get List of Supported Countries from OpenCorporates


<a name="getOpenCorporatesSupportedCountries"></a>
# **getOpenCorporatesSupportedCountries**
> OpenCorporatesSupportedCountriesListResponse getOpenCorporatesSupportedCountries()

Get List of Supported Countries from OpenCorporates

Get List of Supported Countries from OpenCorporates

### Example
```javascript
import { OpenCorporatesSupportedCountriesApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new OpenCorporatesSupportedCountriesApi(apiClient);
apiInstance.getOpenCorporatesSupportedCountries().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling OpenCorporatesSupportedCountriesApi#getOpenCorporatesSupportedCountries");
    throw error;
  }
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**OpenCorporatesSupportedCountriesListResponse**](OpenCorporatesSupportedCountriesListResponse.md)

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

