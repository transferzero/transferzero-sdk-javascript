# TransferzeroSdk.PayinMethod

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Describes how the payment should be requested from the sender.  Possible values: - &#x60;GHS::Mobile&#x60;: GHS mobile collections - &#x60;UGX::Mobile&#x60;: UGX mobile collections - &#x60;XOF::Mobile&#x60;: XOF mobile collections - &#x60;NGN::Bank&#x60;: NGN bank collections - &#x60;EUR::Bank&#x60;: EUR IBAN collections - &#x60;GBP::Bank&#x60;: GBP IBAN collections  | [optional] 
**uxFlow** | [**PayinMethodUxFlow**](PayinMethodUxFlow.md) |  | [optional] 
**inDetails** | [**PayinMethodDetails**](PayinMethodDetails.md) |  | [optional] 
**id** | **String** |  | [optional] [readonly] 
**state** | [**PayinMethodState**](PayinMethodState.md) |  | [optional] 
**stateReasonDetails** | [**StateReasonDetails**](StateReasonDetails.md) |  | [optional] 
**outDetails** | **Object** | This will contain the description on where to pay the funds. Please see the [Collections Details](https://docs.transferzero.com/docs/collection-details) in the API documentation on what to expect here. | [optional] [readonly] 
**instructions** | **Object** | This will contain the instructions on how to pay the funds. Please see the [Collections Details](https://docs.transferzero.com/docs/collection-details) in the API documentation on what to expect here. | [optional] [readonly] 
**errors** | **{String: [ValidationErrorDescription]}** | The fields that have some problems and don&#39;t pass validation | [optional] [readonly] 


