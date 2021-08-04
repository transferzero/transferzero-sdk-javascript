# TransferzeroSdk.AccountValidationRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bankAccount** | **String** | Account Number to query | [optional] 
**bankCode** | **String** | Bank Code to query - same codes are used as for creating the transactions | [optional] 
**iban** | **String** | IBAN to query - BBAN format for XOF bank accounts | [optional] 
**phoneNumber** | **String** | Phone number to query | [optional] 
**mobileProvider** | [**PayoutMethodMobileProviderEnum**](PayoutMethodMobileProviderEnum.md) |  | [optional] 
**country** | **String** | Country of account in 2-character alpha ISO 3166-2 country format | 
**currency** | **String** | The currency the bank account is in | 
**method** | **String** | The method of the payment. Currently bank and mobile are supported | 


<a name="CountryEnum"></a>
## Enum: CountryEnum


* `NG` (value: `"NG"`)

* `GH` (value: `"GH"`)

* `SN` (value: `"SN"`)

* `CI` (value: `"CI"`)




<a name="CurrencyEnum"></a>
## Enum: CurrencyEnum


* `NGN` (value: `"NGN"`)

* `GHS` (value: `"GHS"`)

* `XOF` (value: `"XOF"`)




<a name="MethodEnum"></a>
## Enum: MethodEnum


* `bank` (value: `"bank"`)

* `mobile` (value: `"mobile"`)




