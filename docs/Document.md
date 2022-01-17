# TransferzeroSdk.Document

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**upload** | **String** | Base64 encoded data uri of an image/pdf file or a fully qualified url | 
**url** | **String** | URL of the document location | [optional] 
**uploadFileName** | **String** | Name of the upload | 
**metadata** | [**Object**](.md) | Metadata of document | [optional] 
**uploadContentType** | **String** |  | [optional] 
**uploadFileSize** | **Number** |  | [optional] 
**category** | **String** | uncategorised | [optional] 
**side** | **String** | The side of the KYC ID. One of &#39;front&#39; or &#39;back&#39; | [optional] 
**documentType** | **String** | This is a brief description of the document type | [optional] 
**issuingCountry** | **String** | Issuing country of ID in 2-character alpha ISO 3166-2 country format | [optional] 
**id** | **String** |  | [optional] 
**documentId** | **String** | Document ID issued by government | [optional] 
**expiryDate** | **Date** | Document expiry date issued by government | [optional] 
**source** | **String** | Determines the document&#39;s source. Default value \&quot;Manual\&quot; | [optional] 
**errors** | **{String: [ValidationErrorDescription]}** | The fields that have some problems and don&#39;t pass validation | [optional] 


<a name="SideEnum"></a>
## Enum: SideEnum


* `front` (value: `"front"`)

* `back` (value: `"back"`)




