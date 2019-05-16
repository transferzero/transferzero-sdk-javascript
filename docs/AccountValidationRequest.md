# TransferzeroSdk.AccountValidationRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bankAccount** | **String** | Account Number to query | 
**bankCode** | **String** | Bank Code to query - same codes are used as for creating the transactions | 
**country** | **String** | Country of account in 2-character alpha ISO 3166-2 country format (only NG is currently supported) | 
**currency** | **String** | The currency the bank account is in | 
**method** | **String** | The method of the payment. Currently only bank is supported | 


<a name="CountryEnum"></a>
## Enum: CountryEnum


* `NG` (value: `"NG"`)

* `GH` (value: `"GH"`)




<a name="CurrencyEnum"></a>
## Enum: CurrencyEnum


* `NGN` (value: `"NGN"`)

* `GHS` (value: `"GHS"`)




<a name="MethodEnum"></a>
## Enum: MethodEnum


* `bank` (value: `"bank"`)




