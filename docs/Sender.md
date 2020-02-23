# TransferzeroSdk.Sender

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**type** | **String** | Type of sender to create - either person or business (defaults to person)  | [optional] 
**state** | [**SenderState**](SenderState.md) |  | [optional] 
**country** | **String** | Country of sender in 2-character alpha ISO 3166-2 country format | 
**street** | **String** | Sender&#39;s street | 
**postalCode** | **String** | Zip code of sender | 
**city** | **String** | Sender&#39;s city | 
**phoneCountry** | **String** | Phone country of sender in 2-character alpha ISO 3166-2 country format | 
**phoneNumber** | **String** | Phone number of sender (without country callcode) | [optional] 
**email** | **String** | Email of sender | 
**ip** | **String** | IP of sender | 
**addressDescription** | **String** | Description of address | [optional] 
**identificationNumber** | **String** | Identification number of document used | [optional] 
**identificationType** | **String** | Document to be identified. The identification type can be one of the following:  - &#x60;DL&#x60;: Driving License - &#x60;PP&#x60;: International Passport - &#x60;ID&#x60;: National ID - &#x60;OT&#x60;: Other | [optional] 
**name** | **String** | Name of sender (used only with a Business sender) | [optional] 
**firstName** | **String** | First name of sender (used only with a Personal sender) | [optional] 
**middleName** | **String** | Middle name of sender (used only with a Personal sender) | [optional] 
**lastName** | **String** | Last name of sender (used only with a Personal sender) | [optional] 
**birthDate** | **Date** | Date of birth of sender (used only with a Personal sender) | [optional] 
**occupation** | **String** | Occupation of sender (used only with a Personal sender) | [optional] 
**nationality** | **String** | The nationality of the sender (used only with a Personal sender) | [optional] 
**legalEntityType** | **String** | Legal entity type (used only with a Business sender) | [optional] 
**registrationDate** | **String** | The registration date (used only with a Business sender) | [optional] 
**registrationNumber** | **String** | The registration number (used only with a Business sender) | [optional] 
**natureOfBusiness** | **String** | Nature of business options (used only with a Business sender) | [optional] 
**sourceOfFunds** | **String** | The source of funds | [optional] 
**coreBusinessActivities** | **String** | The core activities (used only with a Business sender) | [optional] 
**purposeOfOpeningAccount** | **String** | The purpose for opening their account (used only with a Business sender) | [optional] 
**officePhone** | **String** | The official phone number (used only with a Business sender) | [optional] 
**vatRegistrationNumber** | **String** | The VAT registration number (used only with a Business sender) | [optional] 
**financialRegulator** | **String** | The Financial Regulator (used only with a Business sender) | [optional] 
**regulatoryLicenceNumber** | **String** | The Regulatory Licence Number (used only with a Business sender) | [optional] 
**contactPersonEmail** | **String** | The contact&#39;s email address (used only with a Business sender) | [optional] 
**tradingCountry** | **String** | The Business trading country (used only with a Business sender) | [optional] 
**tradingAddress** | **String** | The Business trading address (used only with a Business sender) | [optional] 
**documents** | [**[Document]**](Document.md) | Needed for KYC checks. Required to approve the sender unless KYC is waived for your account. Please send us an empty list of documents: &#x60;\&quot;documents\&quot;: [ ]&#x60; in the request if KYC has been waived.  If the documents already exist, please send the Document ID eg. &#x60;&#x60;&#x60;JSON \&quot;documents\&quot;: [   {     \&quot;id\&quot;: \&quot;b6648ba3-1c7b-4f59-8580-684899c84a07\&quot;   } ] &#x60;&#x60;&#x60; | 
**metadata** | [**Object**](.md) | Metadata of sender. You can store any detail specific to your integration here (for example the local ID of the sender on your end). When requesting sender details you will receive the sent metadata back. Also when sending sender related webhooks you will receive the details stored here as well. | [optional] 
**errors** | **{String: [ValidationErrorDescription]}** | The fields that have some problems and don&#39;t pass validation | [optional] 
**onboardingStatus** | **String** | The onboarding status of the sender | [optional] 
**politicallyExposedPeople** | [**[PoliticallyExposedPerson]**](PoliticallyExposedPerson.md) | An optional list of politically exposed people, individuals who are or have been entrusted with prominent public functions by a country, for example heads of state or heads of government, senior politicians, senior government, judicial or military officials, senior executives of state owned corporations, important political party officials.  There is a limit of three (3) politically exposed people per Sender.  Politically exposed person example: &#x60;&#x60;&#x60;json   {     \&quot;politically_exposed_person\&quot;: {       \&quot;name\&quot;: \&quot;Ronald Reagan\&quot;,       \&quot;position\&quot;: \&quot;President of the United States\&quot;,       \&quot;started_date\&quot;: \&quot;1981-01-20T00:00:00.000Z\&quot;,       \&quot;ended_date\&quot;: \&quot;1989-01-20T00:00:00.000Z\&quot;,       \&quot;sender_id\&quot;: \&quot;344fb668-196d-43db-9d94-b34b7e6c7e0b\&quot;     }   } &#x60;&#x60;&#x60; | [optional] 
**externalId** | **String** | Optional ID that is supplied by partner linking it to the partner&#39;s own Sender ID. Note: if present we will validate whether the sent ID is a duplicate in our system or not. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `person` (value: `"person"`)

* `business` (value: `"business"`)




<a name="IdentificationTypeEnum"></a>
## Enum: IdentificationTypeEnum


* `DL` (value: `"DL"`)

* `PP` (value: `"PP"`)

* `ID` (value: `"ID"`)

* `OT` (value: `"OT"`)




<a name="LegalEntityTypeEnum"></a>
## Enum: LegalEntityTypeEnum


* `sole_proprietorship` (value: `"sole_proprietorship"`)

* `partnership` (value: `"partnership"`)

* `privately_owned_company` (value: `"privately_owned_company"`)

* `publicly_owned_company` (value: `"publicly_owned_company"`)

* `government_owned_entity` (value: `"government_owned_entity"`)

* `trust` (value: `"trust"`)

* `ngo` (value: `"ngo"`)

* `club_and_society` (value: `"club_and_society"`)

* `go` (value: `"go"`)

* `other` (value: `"other"`)

* `financial_institution` (value: `"financial_institution"`)




