# TransferzeroSdk.Debit

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | The amount to be debited from your account.  The “amount” parameter is optional - - if included, it must equal the amount required to fund the transaction. - if omitted, it will default to the amount required to fund the transaction.  | [optional] 
**currency** | **String** | The currency of the amount in 3-character alpha ISO 4217 currency format | 
**toType** | **String** | Describes what the debit is funding | 
**toId** | **String** | The ID of the resource the debit is funding | 
**metadata** | [**Object**](.md) | Metadata of account debit | [optional] 
**id** | **String** |  | [optional] 
**createdAt** | **Date** | Date and time that the debit was created | [optional] 
**usdAmount** | **Number** | The amount to be debited from your account converted to USD  | [optional] 
**runningBalance** | **Number** | The total amount remaining in your account after the debit call  | [optional] 
**errors** | **{String: [ValidationErrorDescription]}** | The fields that have some problems and don&#39;t pass validation | [optional] 


