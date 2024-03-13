# TransferzeroSdk.CurrencyOpposite

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | The currency code in 3-character alpha ISO 4217 currency format | [optional] [readonly] 
**name** | **String** | Name of currency | [optional] [readonly] 
**symbol** | **String** | Symbol of currency | [optional] [readonly] 
**decimals** | **Number** | Number of decimal points | [optional] [readonly] 
**subunitToUnit** | **String** | Subunits in Unit (eg. there are 100 cents in 1 US Dollar) | [optional] [readonly] 
**primary** | **Boolean** | Is this a primary currency? | [optional] [readonly] 
**min** | **String** | The minimum amount allowed in a transaction | [optional] [readonly] 
**max** | **String** | The maximum amount allowed in a transaction | [optional] [readonly] 
**usdEquivalent** | **String** | The equivalent of the currency to 1 USD | [optional] [readonly] 
**rate** | **Number** | The rate of this particular currency with the base one | [optional] [readonly] 
**mtmRate** | **Number** | Mark to market rate of this particular currency against the base one with the margin factored in | [optional] [readonly] 
**margin** | **String** | The margin set for transactions of this particular currency with the base one | [optional] [readonly] 


