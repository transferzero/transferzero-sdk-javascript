# TransferzeroSdk.Transaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputCurrency** | **String** | The input currency describes what currency the transaction will be paid in (3-character alpha ISO 4217 currency format). For example if you wish to create an EUR to NGN transaction then input currency should be set to EUR. | 
**payinMethods** | [**[PayinMethod]**](PayinMethod.md) | Allows setting alternative collections, where funding the transaction is done through alternative means and not via account balance.  For more information please see [Collections from senders](https://docs.transferzero.com/docs/additional-features/#collections-from-senders) in the API documentation | [optional] 
**metadata** | [**Object**](.md) | Additional metadata to store on the transaction. If you widh to store your local transaction ID, you should add it here inside a &#x60;sendRef&#x60; field, and we will return this value back to you in the daily transaction reports. | [optional] 
**sender** | [**Sender**](Sender.md) |  | 
**recipients** | [**[Recipient]**](Recipient.md) | The details of where the payment should go. although transactions can support paying out multiple recipients, usually one is provided.  | 
**traits** | [**TransactionTraits**](TransactionTraits.md) |  | [optional] 
**state** | [**TransactionState**](TransactionState.md) |  | [optional] 
**inputAmount** | **Number** | The amount that was requested in the input currency | [optional] 
**payinReference** | **String** | The reference number that has to be provided in case the transaction is not funded through account balance | [optional] 
**paidAmount** | **Number** | The amount that was already paid in to the transaction | [optional] 
**dueAmount** | **Number** | The amount needed to be paid in for the transaction to get funded | [optional] 
**createdAt** | **Date** | The time the transaction was created | [optional] 
**expiresAt** | **Date** | The latest time when the transaction has to be funded, otherwise it will be cancelled | [optional] 
**externalId** | **String** | Optional ID that is supplied by partner linking it to the partner&#39;s own Transaction ID. Note: if present we will validate whether the sent ID is a duplicate in our system or not. | [optional] 
**id** | **String** |  | [optional] 
**errors** | **{String: [ValidationErrorDescription]}** | The fields that have some problems and don&#39;t pass validation | [optional] 


