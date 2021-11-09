# TransferzeroSdk.Sender

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**type** | **String** | Type of sender to create - either person or business (defaults to person)  | [optional] 
**state** | [**SenderState**](SenderState.md) |  | [optional] 
**country** | **String** | Country of sender in 2-character alpha ISO 3166-2 country format. This is the residential country for personal senders and the country of incorporation for business senders. | 
**street** | **String** | Sender&#39;s street | 
**postalCode** | **String** | Zip code of sender | 
**city** | **String** | Sender&#39;s city | 
**phoneCountry** | **String** | Phone country of sender in 2-character alpha ISO 3166-2 country format | 
**phoneNumber** | **String** | Phone number of sender (without country callcode) | [optional] 
**email** | **String** | Email of sender | 
**ip** | **String** | IP of sender | 
**addressDescription** | **String** | Description of address | [optional] 
**identificationNumber** | **String** | Identification number of document used | [optional] 
**identificationType** | **String** | Document to be identified. The identification type can be one of the following:  - &#x60;DL&#x60;: Driving License - &#x60;PP&#x60;: International Passport - &#x60;ID&#x60;: National ID - &#x60;OT&#x60;: Other  Please note for Wizall &#x60;XOF::Cash&#x60; transactions the valid options are: - &#x60;ID&#x60;: National ID - &#x60;PP&#x60;: Passport | [optional] 
**lang** | **String** | Determines language of the served content. Defaults to English | [optional] 
**name** | **String** | Name of sender (used only with a Business sender) | [optional] 
**firstName** | **String** | First name of sender (used only with a Personal sender) | [optional] 
**middleName** | **String** | Middle name of sender (used only with a Personal sender) | [optional] 
**lastName** | **String** | Last name of sender (used only with a Personal sender) | [optional] 
**birthDate** | **Date** | Date of birth of sender (used only with a Personal sender) | [optional] 
**occupation** | **String** | Occupation of sender (used only with a Personal sender) | [optional] 
**nationality** | **String** | The nationality of the sender (used only with a Personal sender) | [optional] 
**legalEntityType** | **String** | Legal entity type (used only with a Business sender)  Available values:   - sole_proprietorship: Sole Proprietorship   - partnership: Partnership   - privately_owned_company: Privately Owned Company (Limited Company)   - publicly_owned_company: Publicly Listed Company (PLC)   - government_owned_entity: Government Owned Entity Trusts   - trust: Foundations &amp; Similar Entities   - ngo: Non-Government Organisations / Charities inc Religious bodies and place of worship   - club_and_society: Clubs and Societies   - go: GO (Majority Owned Subsidiary of State-Owned Company)   - financial_institution: Financial Institution  Please note not all values are acceptable for some our corridors. Please reach out to our sales teams for more information.  Note that if you select &#x60;financial_institution&#x60; then the fields &#x60;vat_registration_number&#x60;, &#x60;financial_regulator&#x60; and &#x60;regulatory_licence_number&#x60; will be mandatory as well. | [optional] 
**registrationDate** | **Date** | The registration date (used only with a Business sender) | [optional] 
**registrationNumber** | **String** | The registration number (used only with a Business sender) | [optional] 
**natureOfBusiness** | **String** | Nature of business options (used only with a Business sender)  Available values:   - personal: Personal   - agriculture_and_hunting: Agriculture and Hunting   - forestry: Forestry   - fishing: Fishing   - agricultural_by_products: Agricultural By-Products   - coal_mining: Coal Mining   - oil_mining: Oil Mining   - iron_ore_mining: Iron Ore Mining   - other_metal_and_diamond_mining: Other Metal and Diamond Mining   - other_mineral_mining: Other Mineral Mining   - manufacturing_of_food_drink_tobacco: Manufacture of Food/Drink/Tobacco   - manufacturing_of_textiles_leather_fur_furniture: Manufacture of Textiles/Leather/Fur/Furniture   - manufacture_of_wooden_products_furniture: Manufacture of Wooden Products/Furniture   - manufacture_of_paper_pulp_allied_products: Manufacture of Paper/Pulp/Allied Products   - manufacture_of_chemicals_medical_petroleum_rubber_plastic_products: Manufacture Of Chemicals Medical Petroleum Rubber Plastic Products   - manufacture_of_pottery_china_glass_stone: Manufacture Of Pottery China Glass Stone   - manufacture_of_iron_steel_non_ferrous_metals_basic_industries: Manufacture Of Iron Steel Non-Ferrous Metals Basic Industries   - manufacture_of_metal_products_electrical_and_scientific_engineering: Manufacture Of Metal Products Electrical And Scientific Engineering   - manufacture_of_jewelry_musical_instruments_toys: Manufacture Of Jewelry Musical Instruments Toys   - electricity_gas_and_water: Electricity, Gas And Water   - construction: Construction   - wholesale_trade: Wholesale Trade   - retail_trade: Retail Trade   - catering_incl_hotels: Catering Incl. Hotels   - transport_storage: Transport Storage   - communications: Communications   - finance_and_holding_companies: Finance And Holding Companies   - insurance: Insurance   - business_services: Business Services   - real_estate_development_investment: Real Estate Development Investment   - central_state_governments: Central State Governments   - community_services_defence_police_prisons_etc: Community Services Defence Police Prisons Etc   - social_services_education_health_care: Social Services Education Health Care   - personal_services_leisure_services: Personal Services - Leisure Services   - personal_services_domestic_laundry_repairs: Personal Services - Domestic Laundry Repairs   - personal_services_embassies_international_organisations: Personal Services - Embassies | [optional] 
**sourceOfFunds** | **String** | The source of funds | [optional] 
**customSourceOfFunds** | **String** | Custom source of funds | [optional] 
**coreBusinessActivity** | **String** | The core activity (used only with a Business sender) | [optional] 
**purposeOfOpeningAccount** | **String** | The purpose for opening their account (used only with a Business sender) | [optional] 
**officePhone** | **String** | The official phone number (used only with a Business sender) | [optional] 
**vatRegistrationNumber** | **String** | The VAT registration number (used only with a Business sender) | [optional] 
**financialRegulator** | **String** | The Financial Regulator (used only with a Business sender) | [optional] 
**regulatoryLicenceNumber** | **String** | The Regulatory Licence Number (used only with a Business sender) | [optional] 
**contactPersonEmail** | **String** | The contact&#39;s email address (used only with a Business sender) | [optional] 
**tradingCountry** | **String** | The Business trading country (used only with a Business sender) | [optional] 
**tradingAddress** | **String** | The Business trading address (used only with a Business sender) | [optional] 
**numberMonthlyTransactions** | **String** | The estimated number of monthly transactions (used only with a Business sender) | [optional] 
**amountMonthlyTransactions** | **String** | The estimated amount for all transactions each month in USD (used only with a Business sender) | [optional] 
**documents** | [**[Document]**](Document.md) | Needed for KYC checks. Required to approve the sender unless KYC is waived for your account. Please send us an empty list of documents: &#x60;\&quot;documents\&quot;: [ ]&#x60; in the request if KYC has been waived.  If the documents already exist, please send the Document ID eg. &#x60;&#x60;&#x60;JSON \&quot;documents\&quot;: [   {     \&quot;id\&quot;: \&quot;b6648ba3-1c7b-4f59-8580-684899c84a07\&quot;   } ] &#x60;&#x60;&#x60; | 
**metadata** | [**Object**](.md) | Metadata of sender. You can store any detail specific to your integration here (for example the local ID of the sender on your end). When requesting sender details you will receive the sent metadata back. Also when sending sender related webhooks you will receive the details stored here as well. | [optional] 
**errors** | **{String: [ValidationErrorDescription]}** | The fields that have some problems and don&#39;t pass validation | [optional] 
**onboardingStatus** | **String** | The onboarding status of the sender | [optional] 
**politicallyExposedPeople** | [**[PoliticallyExposedPerson]**](PoliticallyExposedPerson.md) | An optional list of politically exposed people, individuals who are or have been entrusted with prominent public functions by a country, for example heads of state or heads of government, senior politicians, senior government, judicial or military officials, senior executives of state owned corporations, important political party officials.  There is a limit of three (3) politically exposed people per Sender.  Politically exposed person example: &#x60;&#x60;&#x60;json   {     \&quot;politically_exposed_person\&quot;: {       \&quot;name\&quot;: \&quot;Ronald Reagan\&quot;,       \&quot;position\&quot;: \&quot;President of the United States\&quot;,       \&quot;started_date\&quot;: \&quot;1981-01-20T00:00:00.000Z\&quot;,       \&quot;ended_date\&quot;: \&quot;1989-01-20T00:00:00.000Z\&quot;,       \&quot;sender_id\&quot;: \&quot;344fb668-196d-43db-9d94-b34b7e6c7e0b\&quot;     }   } &#x60;&#x60;&#x60; | [optional] 
**externalId** | **String** | Optional ID that is supplied by partner linking it to the partner&#39;s own Sender ID. Note: if present we will validate whether the sent ID is a duplicate in our system or not. | [optional] 
**cityOfBirth** | **String** | City of birth of sender | [optional] 
**countryOfBirth** | **String** | Country of birth of sender in 2-character alpha ISO 3166-2 country format | [optional] 
**gender** | **String** | The gender of the sender:  - &#x60;M&#x60;: Male - &#x60;F&#x60;: Female - &#x60;O&#x60;: Other | [optional] 
**salesLeadId** | **String** | Sales Lead ID for tracking (optional) | [optional] 
**createdAt** | **String** | Date and time of sender was created | [optional] 


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




<a name="NatureOfBusinessEnum"></a>
## Enum: NatureOfBusinessEnum


* `personal` (value: `"personal"`)

* `agriculture_and_hunting` (value: `"agriculture_and_hunting"`)

* `forestry` (value: `"forestry"`)

* `fishing` (value: `"fishing"`)

* `agricultural_by_products` (value: `"agricultural_by_products"`)

* `coal_mining` (value: `"coal_mining"`)

* `oil_mining` (value: `"oil_mining"`)

* `iron_ore_mining` (value: `"iron_ore_mining"`)

* `other_metal_and_diamond_mining` (value: `"other_metal_and_diamond_mining"`)

* `other_mineral_mining` (value: `"other_mineral_mining"`)

* `manufacturing_of_food_drink_tobacco` (value: `"manufacturing_of_food_drink_tobacco"`)

* `manufacturing_of_textiles_leather_fur_furniture` (value: `"manufacturing_of_textiles_leather_fur_furniture"`)

* `manufacture_of_wooden_products_furniture` (value: `"manufacture_of_wooden_products_furniture"`)

* `manufacture_of_paper_pulp_allied_products` (value: `"manufacture_of_paper_pulp_allied_products"`)

* `manufacture_of_chemicals_medical_petroleum_rubber_plastic_products` (value: `"manufacture_of_chemicals_medical_petroleum_rubber_plastic_products"`)

* `manufacture_of_pottery_china_glass_stone` (value: `"manufacture_of_pottery_china_glass_stone"`)

* `manufacture_of_iron_steel_non_ferrous_metals_basic_industries` (value: `"manufacture_of_iron_steel_non_ferrous_metals_basic_industries"`)

* `manufacture_of_metal_products_electrical_and_scientific_engineering` (value: `"manufacture_of_metal_products_electrical_and_scientific_engineering"`)

* `manufacture_of_jewelry_musical_instruments_toys` (value: `"manufacture_of_jewelry_musical_instruments_toys"`)

* `electricity_gas_and_water` (value: `"electricity_gas_and_water"`)

* `construction` (value: `"construction"`)

* `wholesale_trade` (value: `"wholesale_trade"`)

* `retail_trade` (value: `"retail_trade"`)

* `catering_incl_hotels` (value: `"catering_incl_hotels"`)

* `transport_storage` (value: `"transport_storage"`)

* `communications` (value: `"communications"`)

* `finance_and_holding_companies` (value: `"finance_and_holding_companies"`)

* `insurance` (value: `"insurance"`)

* `business_services` (value: `"business_services"`)

* `real_estate_development_investment` (value: `"real_estate_development_investment"`)

* `central_state_governments` (value: `"central_state_governments"`)

* `community_services_defence_police_prisons_etc` (value: `"community_services_defence_police_prisons_etc"`)

* `social_services_education_health_care` (value: `"social_services_education_health_care"`)

* `personal_services_leisure_services` (value: `"personal_services_leisure_services"`)

* `personal_services_domestic_laundry_repairs` (value: `"personal_services_domestic_laundry_repairs"`)

* `personal_services_embassies_international_organisations` (value: `"personal_services_embassies_international_organisations"`)




<a name="GenderEnum"></a>
## Enum: GenderEnum


* `M` (value: `"M"`)

* `F` (value: `"F"`)

* `O` (value: `"O"`)




