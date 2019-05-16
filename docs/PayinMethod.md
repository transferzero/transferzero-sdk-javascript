# TransferzeroSdk.PayinMethod

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Describes how the payment should be requested from the user.  Possible values: - &#x60;NGN::Bank&#x60;: NGN card collection requests - &#x60;GHS::Mobile&#x60;: GHS mobile collections - &#x60;TZS::Mobile&#x60;: TZS mobile collections - &#x60;UGX::Mobile&#x60;: UGX mobile collections  | [optional] 
**inDetails** | [**PayinMethodDetails**](PayinMethodDetails.md) |  | [optional] 
**outDetails** | [**Object**](.md) | This will contain the description on where to pay the funds. Please see the [Collections from Senders](https://github.com/transferzero/api-documentation/blob/master/additional-features.md#collections-from-senders) in the API documentation on what to expect here. | [optional] 
**instructions** | [**Object**](.md) | This will contain the instructions on how to pay the funds. Please see the [Collections from Senders](https://github.com/transferzero/api-documentation/blob/master/additional-features.md#collections-from-senders) in the API documentation on what to expect here. | [optional] 
**provider** | **String** | Describes which provider to use for collection. Please see the [Collections from Senders](https://github.com/transferzero/api-documentation/blob/master/additional-features.md#collections-from-senders) in the API documentation on the valid values | [optional] 


