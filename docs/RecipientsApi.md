# TransferzeroSdk.RecipientsApi

All URIs are relative to *https://api-sandbox.bitpesa.co/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteRecipient**](RecipientsApi.md#deleteRecipient) | **DELETE** /recipients/{Recipient ID} | Cancelling a recipient
[**getRecipients**](RecipientsApi.md#getRecipients) | **GET** /recipients | Getting a list of recipients with filtering
[**patchRecipient**](RecipientsApi.md#patchRecipient) | **PATCH** /recipients/{Recipient ID} | Updating a recipient
[**proofOfPayments**](RecipientsApi.md#proofOfPayments) | **GET** /recipients/{Recipient ID}/proof_of_payments | Returns list of proof of payments


<a name="deleteRecipient"></a>
# **deleteRecipient**
> RecipientResponse deleteRecipient(recipientID)

Cancelling a recipient

Cancels the payment to the recipient specified in the URL path.  Please note recipients where the &#x60;may_cancel&#x60; attribute is true will be cancelled immediately. If the &#x60;may_cancel&#x60; attribute is false you can still try to cancel the recipient, however it will only gets cancelled if we will receive a confirmation from our partner that the payment has failed

### Example
```javascript
import { RecipientsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new RecipientsApi(apiClient);

apiInstance.deleteRecipient(recipientID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling RecipientsApi#deleteRecipient");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipientID** | [**String**](.md)| ID of recipient to cancel.  Example: &#x60;/v1/recipients/9d4d7b73-a94c-4979-ab57-09074fd55d33&#x60; | 

### Return type

[**RecipientResponse**](RecipientResponse.md)

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

<a name="getRecipients"></a>
# **getRecipients**
> RecipientListResponse getRecipients(opts)

Getting a list of recipients with filtering

Fetches details of all recipients.

### Example
```javascript
import { RecipientsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new RecipientsApi(apiClient);

let opts = { 
  'page': 1 // Number | The page number to request (defaults to 1)
  'per': 10 // Number | The number of results to load per page (defaults to 10)
  'createdAtFrom': "createdAtFrom_example" // String | Start date to filter recipients by created_at range Allows filtering results by the specified `created_at` timeframe.  Example: `/v1/recipients?created_at_from=2018-06-06&created_at_to=2018-06-08`
  'createdAtTo': "createdAtTo_example" // String | End date to filter recipients by created_at range Allows filtering results by the specified `created_at` timeframe.  Example: `/v1/recipients?created_at_from=2018-06-06&created_at_to=2018-06-08`
  'amountFrom': "amountFrom_example" // String | Minimum amount to filter recipients by amount range.  Allows filtering results by the specified `amount` range. When using this filter, the `currency` should also be specified.  Example: `/v1/recipients?currency=NGN&amount_from=83.76672339&amount_to=83.76672339`
  'amountTo': "amountTo_example" // String | Max amount to filter recipients by amount range.  Allows filtering results by the specified `amount` range. When using this filter, the `currency` should also be specified.  Example: `/v1/recipients?currency=NGN&amount_from=83.76672339&amount_to=83.76672339`
  'state': ["null"] // [String] | Allows filtering results by `state` of recipient. See [API Documentation - Recipient state](https://docs.transferzero.com/docs/transaction-flow/#state) for possible states.  Example: `/v1/recipients?state[]=error&state[]=initial`
  'currency': ["null"] // [String] | Allows filtering results by `input_currency`.  Additionally required when filtering by an amount range Example: `/v1/recipients?currency[]=KES&currency[]=NGN`
};
apiInstance.getRecipients(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling RecipientsApi#getRecipients");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The page number to request (defaults to 1) | [optional] 
 **per** | **Number**| The number of results to load per page (defaults to 10) | [optional] 
 **createdAtFrom** | **String**| Start date to filter recipients by created_at range Allows filtering results by the specified &#x60;created_at&#x60; timeframe.  Example: &#x60;/v1/recipients?created_at_from&#x3D;2018-06-06&amp;created_at_to&#x3D;2018-06-08&#x60; | [optional] 
 **createdAtTo** | **String**| End date to filter recipients by created_at range Allows filtering results by the specified &#x60;created_at&#x60; timeframe.  Example: &#x60;/v1/recipients?created_at_from&#x3D;2018-06-06&amp;created_at_to&#x3D;2018-06-08&#x60; | [optional] 
 **amountFrom** | **String**| Minimum amount to filter recipients by amount range.  Allows filtering results by the specified &#x60;amount&#x60; range. When using this filter, the &#x60;currency&#x60; should also be specified.  Example: &#x60;/v1/recipients?currency&#x3D;NGN&amp;amount_from&#x3D;83.76672339&amp;amount_to&#x3D;83.76672339&#x60; | [optional] 
 **amountTo** | **String**| Max amount to filter recipients by amount range.  Allows filtering results by the specified &#x60;amount&#x60; range. When using this filter, the &#x60;currency&#x60; should also be specified.  Example: &#x60;/v1/recipients?currency&#x3D;NGN&amp;amount_from&#x3D;83.76672339&amp;amount_to&#x3D;83.76672339&#x60; | [optional] 
 **state** | [**[String]**](String.md)| Allows filtering results by &#x60;state&#x60; of recipient. See [API Documentation - Recipient state](https://docs.transferzero.com/docs/transaction-flow/#state) for possible states.  Example: &#x60;/v1/recipients?state[]&#x3D;error&amp;state[]&#x3D;initial&#x60; | [optional] 
 **currency** | [**[String]**](String.md)| Allows filtering results by &#x60;input_currency&#x60;.  Additionally required when filtering by an amount range Example: &#x60;/v1/recipients?currency[]&#x3D;KES&amp;currency[]&#x3D;NGN&#x60; | [optional] 

### Return type

[**RecipientListResponse**](RecipientListResponse.md)

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

<a name="patchRecipient"></a>
# **patchRecipient**
> RecipientResponse patchRecipient(recipientIDrecipientRequest)

Updating a recipient

Updates the recipient specified in the URL path.  Please note that only recipients where the &#x60;editable&#x60; field is true can be modified. Once the recipient is modified any subsequent payout tries will be sent to the updated details.

### Example
```javascript
import { RecipientsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new RecipientsApi(apiClient);

apiInstance.patchRecipient(recipientIDrecipientRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling RecipientsApi#patchRecipient");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipientID** | [**String**](.md)| ID of recipient to update.  Example: &#x60;/v1/recipients/9d4d7b73-a94c-4979-ab57-09074fd55d33&#x60; | 
 **recipientRequest** | [**RecipientRequest**](RecipientRequest.md)|  | 

### Return type

[**RecipientResponse**](RecipientResponse.md)

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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="proofOfPayments"></a>
# **proofOfPayments**
> ProofOfPaymentListResponse proofOfPayments(recipientID)

Returns list of proof of payments

Returns a list of uploaded proof of payment files for a transaction recipient

### Example
```javascript
import { RecipientsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new RecipientsApi(apiClient);

apiInstance.proofOfPayments(recipientID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling RecipientsApi#proofOfPayments");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipientID** | [**String**](.md)| ID of the recipient for whom the proof of payments will be returned.  Example: &#x60;/v1/recipients/9d4d7b73-a94c-4979-ab57-09074fd55d33/proof_of_payments&#x60; | 

### Return type

[**ProofOfPaymentListResponse**](ProofOfPaymentListResponse.md)

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

