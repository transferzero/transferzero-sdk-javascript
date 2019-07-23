# TransferzeroSdk.Recipient

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestedAmount** | **Number** | the amount that should be paid to the recipient. This can be in any currency, usually either the input or the output currency. If the value here is not the output currency we will calculate how much the recipient is going to get using the exchange rates active when the transaction was created. | 
**requestedCurrency** | **String** | the currency of the amount in 3-character alpha ISO 4217 currency format | 
**payoutMethod** | [**PayoutMethod**](PayoutMethod.md) |  | 
**metadata** | [**Object**](.md) | Additional metadata that can be added to a recipient. These values will be returned on request | [optional] 
**createdAt** | **Date** | Date and time that the recipient was created. | [optional] 
**editable** | **Boolean** | Shows whether the recipient can be edited using the PATCH /v1/recipients/{id} endpoint or not | [optional] 
**retriable** | **Boolean** | Shows whether the transaction made to the recipient can be retried or not | [optional] 
**inputUsdAmount** | **Number** | Shows how much this payment is worth in USD | [optional] 
**mayCancel** | **Boolean** | Shows whether the payment can be cancelled using the DELETE /v1/recipients/{id} endpoint or not. The payment can not be cancelled if the payout is pending. | [optional] 
**stateReason** | **String** | In case the payment is unsuccessful it holds the error message associated with the last unsuccessful payout. | [optional] 
**state** | [**RecipientState**](RecipientState.md) |  | [optional] 
**transactionId** | **String** | The ID of the transaction that is related to this recipient | [optional] 
**transactionState** | [**TransactionState**](TransactionState.md) |  | [optional] 
**exchangeRate** | **Number** | The exchange rate used in this payment | [optional] 
**feeFractional** | **Number** | The fee for this payment in fractional units (for example cents for USD transactions) | [optional] 
**inputAmount** | **Number** | The amount that had to be paid in for this payment to proceed | [optional] 
**inputCurrency** | **String** | The currency this payment was paid in | [optional] 
**outputAmount** | **Number** | The amount that will be paid to the recipient | [optional] 
**outputCurrency** | **String** | The currency the payment will be delivered in | [optional] 
**id** | **String** |  | [optional] 
**errors** | **{String: [ValidationErrorDescription]}** | The fields that have some problems and don&#39;t pass validation | [optional] 


