# TransferzeroSdk.Recipient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestedAmount** | **Number** | the amount that should be paid to the recipient. This can be in any currency, usually either the input or the output currency. If the value here is not the output currency we will calculate how much the recipient is going to get using the exchange rates active when the transaction was created. | 
**requestedCurrency** | **String** | the currency of the amount in 3-character alpha ISO 4217 currency format | 
**payoutMethod** | [**PayoutMethod**](PayoutMethod.md) |  | 
**metadata** | **Object** | Additional metadata that can be added to a recipient. These values will be returned on request | [optional] 
**createdAt** | **Date** | Date and time that the recipient was created. | [optional] [readonly] 
**editable** | **Boolean** | Shows whether the recipient can be edited using the PATCH /v1/recipients/{id} endpoint or not | [optional] [readonly] 
**retriable** | **Boolean** | Shows whether the transaction made to the recipient can be retried or not | [optional] [readonly] 
**inputUsdAmount** | **Number** | Shows how much this payment is worth in USD | [optional] [readonly] 
**mayCancel** | **Boolean** | If true it shows that the payment can be cancelled immediately using the DELETE /v1/recipients/{id} endpoint. If false you can still try to cancel it, however it will only gets cancelled once we have confirmation from our partner that the payment has failed. | [optional] [readonly] 
**stateReason** | **String** | In case the payment is unsuccessful it holds the error message associated with the last unsuccessful payout. | [optional] [readonly] 
**stateReasonDetails** | [**RecipientStateReasonDetails**](RecipientStateReasonDetails.md) |  | [optional] 
**state** | [**RecipientState**](RecipientState.md) |  | [optional] 
**transactionId** | **String** | The ID of the transaction that is related to this recipient | [optional] [readonly] 
**transactionExternalId** | **String** | Optional ID that is supplied by partner linking it to the partner&#39;s own Transaction ID. | [optional] 
**transactionState** | [**TransactionState**](TransactionState.md) |  | [optional] 
**exchangeRate** | **Number** | The exchange rate used in this payment | [optional] [readonly] 
**feeFractional** | **Number** | The fee for this payment in fractional units (for example cents for USD transactions) | [optional] [readonly] 
**inputAmount** | **Number** | The amount that had to be paid in for this payment to proceed | [optional] [readonly] 
**inputCurrency** | **String** | The currency this payment was paid in | [optional] [readonly] 
**outputAmount** | **Number** | The amount that will be paid to the recipient | [optional] [readonly] 
**outputCurrency** | **String** | The currency the payment will be delivered in | [optional] [readonly] 
**id** | **String** |  | [optional] [readonly] 
**type** | **String** | Type of recipient to create - either person or business (defaults to person)  | [optional] 
**errors** | **{String: [ValidationErrorDescription]}** | The fields that have some problems and don&#39;t pass validation | [optional] [readonly] 



## Enum: TypeEnum


* `person` (value: `"person"`)

* `business` (value: `"business"`)




