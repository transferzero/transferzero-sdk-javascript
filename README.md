# transferzero-sdk

TransferzeroSdk - JavaScript client for transferzero-sdk
Reference documentation for the TransferZero API V1

For more information, please visit:

* [API Documentation](https://docs.transferzero.com)
  * [Onboarding guide](https://docs.transferzero.com/docs/quick-integration/)
  * [Transaction flow](https://docs.transferzero.com/docs/transaction-flow/)
  * [Additional features](https://docs.transferzero.com/docs/additional-features/)
* [API Specification](https://api.transferzero.com/documentation)

*Automatically generated by the [OpenAPI Generator](https://openapi-generator.tech)*

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Install the API client library as a dependency in your Node project via:

```shell
npm install transferzero-sdk --save
```

## Getting Started

Please follow the [installation](#installation) instruction.

You can find examples in the [examples](https://github.com/transferzero/transferzero-sdk-javascript/tree/master/examples) directory on the features required by the [Onboarding documentation](https://docs.transferzero.com/docs/quick-integration/)

## Webhooks

To parse webhooks you can use the following snippet:

```js
const webhookHeader = {}; // The webhook headers in json object format received through the webhook callback url
const webhookContent = '{ (...) }'; // The webhook body in json string received through the webhook callback url
const webhookUrl = 'http://webhook.url';

const validateRequest = apiClient.validateRequest(webhookUrl, webhookContent, webhookHeader)

if (!validateRequest) {
   return "Could not validate webhook request headers";
};

const webhook = apiClient.parseResponseString(webhookContent, Webhook);
if (webhook.event.startsWith('transaction')) {
  const transactionWebhook = apiClient.parseResponseString(
    webhookContent,
    TransactionWebhook
  );
  console.log(transactionWebhook);
} else if (webhook.event.startsWith('recipient')) {
  const recipientWebhook = apiClient.parseResponseString(
    webhookContent,
    RecipientWebhook
  );
  console.log(recipientWebhook);
} else if (webhook.event.startsWith('payout_method')) {
  const payoutMethodWebhook = apiClient.parseResponseString(
    webhookContent,
    PayoutMethodWebhook
  );
  console.log(payoutMethodWebhook);
} else if (webhook.event.startsWith('sender')) {
  const senderWebhook = apiClient.parseResponseString(
    webhookContent,
    SenderWebhook
  );
  console.log(senderWebhook);
} else if (webhook.event.startsWith('document')) {
  const documentWebhook = apiClient.parseResponseString(
    webhookContent,
    DocumentWebhook
  );
  console.log(documentWebhook);
} else {
  console.log("Could not verify webhook signature");
}
```

## Documentation for API Endpoints

All URIs are relative to *https://api-sandbox.transferzero.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TransferzeroSdk.APILogsApi* | [**getApiLog**](docs/APILogsApi.md#getApiLog) | **GET** /api_logs/{API Log ID} | Fetch an individual API log
*TransferzeroSdk.APILogsApi* | [**getApiLogs**](docs/APILogsApi.md#getApiLogs) | **GET** /api_logs | Fetch a list of API logs
*TransferzeroSdk.AccountDebitsApi* | [**getAccountsDebit**](docs/AccountDebitsApi.md#getAccountsDebit) | **GET** /accounts/debits/{Account Debit ID} | Fetching an account debit
*TransferzeroSdk.AccountDebitsApi* | [**getAccountsDebits**](docs/AccountDebitsApi.md#getAccountsDebits) | **GET** /accounts/debits | Listing Accounts debits
*TransferzeroSdk.AccountDebitsApi* | [**postAccountsDebits**](docs/AccountDebitsApi.md#postAccountsDebits) | **POST** /accounts/debits | Creating an account debit
*TransferzeroSdk.AccountValidationApi* | [**postAccountValidations**](docs/AccountValidationApi.md#postAccountValidations) | **POST** /account_validations | Validates the existence of a bank account or a mobile phone number
*TransferzeroSdk.AccountsApi* | [**getAccount**](docs/AccountsApi.md#getAccount) | **GET** /accounts/{Currency} | Fetches account balance for specified currrency
*TransferzeroSdk.AccountsApi* | [**getAccounts**](docs/AccountsApi.md#getAccounts) | **GET** /accounts | Fetches account balances for all currencies
*TransferzeroSdk.CurrencyInfoApi* | [**infoCurrencies**](docs/CurrencyInfoApi.md#infoCurrencies) | **GET** /info/currencies | Getting a list of possible requested currencies
*TransferzeroSdk.CurrencyInfoApi* | [**infoCurrenciesIn**](docs/CurrencyInfoApi.md#infoCurrenciesIn) | **GET** /info/currencies/in | Getting a list of possible input currencies
*TransferzeroSdk.CurrencyInfoApi* | [**infoCurrenciesOut**](docs/CurrencyInfoApi.md#infoCurrenciesOut) | **GET** /info/currencies/out | Getting a list of possible output currencies
*TransferzeroSdk.DocumentsApi* | [**getDocument**](docs/DocumentsApi.md#getDocument) | **GET** /documents/{Document ID} | Fetching a document
*TransferzeroSdk.DocumentsApi* | [**getDocuments**](docs/DocumentsApi.md#getDocuments) | **GET** /documents | Getting a list of documents
*TransferzeroSdk.DocumentsApi* | [**postDocuments**](docs/DocumentsApi.md#postDocuments) | **POST** /documents | Creating a document
*TransferzeroSdk.LogsApi* | [**getWebhookLog**](docs/LogsApi.md#getWebhookLog) | **GET** /logs/{Webhook Log ID} | Fetch an individual webhook log
*TransferzeroSdk.LogsApi* | [**getWebhookLogs**](docs/LogsApi.md#getWebhookLogs) | **GET** /logs/webhooks | Fetch a list of webhook logs
*TransferzeroSdk.PayinMethodsApi* | [**deletePayinMethod**](docs/PayinMethodsApi.md#deletePayinMethod) | **DELETE** /payin_methods/{PayinMethod ID} | Deleting a payin method
*TransferzeroSdk.PayinMethodsApi* | [**getPayinMethod**](docs/PayinMethodsApi.md#getPayinMethod) | **GET** /payin_methods/{PayinMethod ID} | Fetching a payin method
*TransferzeroSdk.PayinMethodsApi* | [**patchPayinMethod**](docs/PayinMethodsApi.md#patchPayinMethod) | **PATCH** /payin_methods/{PayinMethod ID} | Updating a payin method
*TransferzeroSdk.PayinMethodsApi* | [**retryPayinMethod**](docs/PayinMethodsApi.md#retryPayinMethod) | **POST** /payin_methods/{PayinMethod ID}/retry | Retries PayinMethod
*TransferzeroSdk.PaymentMethodsApi* | [**paymentMethodsIn**](docs/PaymentMethodsApi.md#paymentMethodsIn) | **GET** /info/payment_methods/in | This method returns possible payin methods.
*TransferzeroSdk.PaymentMethodsApi* | [**paymentMethodsOut**](docs/PaymentMethodsApi.md#paymentMethodsOut) | **GET** /info/payment_methods/out | This method returns possible payout methods.
*TransferzeroSdk.PayoutMethodsApi* | [**deletePayoutMethod**](docs/PayoutMethodsApi.md#deletePayoutMethod) | **DELETE** /payout_methods/{Payout Method ID} | Deleting a payout method
*TransferzeroSdk.PayoutMethodsApi* | [**getPayoutMethod**](docs/PayoutMethodsApi.md#getPayoutMethod) | **GET** /payout_methods/{Payout Method ID} | Fetching a payout method
*TransferzeroSdk.PayoutMethodsApi* | [**getPayoutMethods**](docs/PayoutMethodsApi.md#getPayoutMethods) | **GET** /payout_methods | Listing payout methods
*TransferzeroSdk.PayoutMethodsApi* | [**patchPayoutMethod**](docs/PayoutMethodsApi.md#patchPayoutMethod) | **PATCH** /payout_methods/{Payout Method ID} | Updating a payout method
*TransferzeroSdk.PayoutMethodsApi* | [**postPayoutMethods**](docs/PayoutMethodsApi.md#postPayoutMethods) | **POST** /payout_methods | Creating a payout method
*TransferzeroSdk.RecipientsApi* | [**deleteRecipient**](docs/RecipientsApi.md#deleteRecipient) | **DELETE** /recipients/{Recipient ID} | Cancelling a recipient
*TransferzeroSdk.RecipientsApi* | [**getRecipients**](docs/RecipientsApi.md#getRecipients) | **GET** /recipients | Getting a list of recipients with filtering
*TransferzeroSdk.RecipientsApi* | [**patchRecipient**](docs/RecipientsApi.md#patchRecipient) | **PATCH** /recipients/{Recipient ID} | Updating a recipient
*TransferzeroSdk.RecipientsApi* | [**proofOfPayments**](docs/RecipientsApi.md#proofOfPayments) | **GET** /recipients/{Recipient ID}/proof_of_payments | Returns list of proof of payments
*TransferzeroSdk.SendersApi* | [**deleteSender**](docs/SendersApi.md#deleteSender) | **DELETE** /senders/{Sender ID} | Deleting a sender
*TransferzeroSdk.SendersApi* | [**getSender**](docs/SendersApi.md#getSender) | **GET** /senders/{Sender ID} | Fetching a sender
*TransferzeroSdk.SendersApi* | [**getSenders**](docs/SendersApi.md#getSenders) | **GET** /senders | Listing senders
*TransferzeroSdk.SendersApi* | [**patchSender**](docs/SendersApi.md#patchSender) | **PATCH** /senders/{Sender ID} | Updating a sender
*TransferzeroSdk.SendersApi* | [**postSenders**](docs/SendersApi.md#postSenders) | **POST** /senders | Creating a sender
*TransferzeroSdk.TransactionsApi* | [**calculateTransactions**](docs/TransactionsApi.md#calculateTransactions) | **POST** /transactions/calculate | Calculates transaction amounts for a transaction payload
*TransferzeroSdk.TransactionsApi* | [**createAndFundTransaction**](docs/TransactionsApi.md#createAndFundTransaction) | **POST** /transactions/create_and_fund | Creates a new transaction and funds it from account balance
*TransferzeroSdk.TransactionsApi* | [**getTransaction**](docs/TransactionsApi.md#getTransaction) | **GET** /transactions/{Transaction ID} | Fetch a single transaction
*TransferzeroSdk.TransactionsApi* | [**getTransactions**](docs/TransactionsApi.md#getTransactions) | **GET** /transactions | Get a list of transactions
*TransferzeroSdk.TransactionsApi* | [**payinTransaction**](docs/TransactionsApi.md#payinTransaction) | **POST** /transactions/{Transaction ID}/payin | Creates a fake payin for transaction
*TransferzeroSdk.TransactionsApi* | [**payoutTransaction**](docs/TransactionsApi.md#payoutTransaction) | **POST** /transactions/{Transaction ID}/payout | Creates a fake payout for transaction
*TransferzeroSdk.TransactionsApi* | [**postTransactions**](docs/TransactionsApi.md#postTransactions) | **POST** /transactions | Creates a new transaction
*TransferzeroSdk.TransactionsApi* | [**validateTransactions**](docs/TransactionsApi.md#validateTransactions) | **POST** /transactions/validate | Validates a transaction payload
*TransferzeroSdk.WebhooksApi* | [**deleteWebhook**](docs/WebhooksApi.md#deleteWebhook) | **DELETE** /webhooks/{Webhook ID} | Unsubscribing from a webhook
*TransferzeroSdk.WebhooksApi* | [**getWebhook**](docs/WebhooksApi.md#getWebhook) | **GET** /webhooks/{Webhook ID} | Find a webhook&#39;s details
*TransferzeroSdk.WebhooksApi* | [**getWebhookEvents**](docs/WebhooksApi.md#getWebhookEvents) | **GET** /webhooks/events | Find possible webhook events
*TransferzeroSdk.WebhooksApi* | [**getWebhooks**](docs/WebhooksApi.md#getWebhooks) | **GET** /webhooks | Listing webhooks
*TransferzeroSdk.WebhooksApi* | [**postWebhooks**](docs/WebhooksApi.md#postWebhooks) | **POST** /webhooks | Creating a webhook


## Documentation for Models

 - [TransferzeroSdk.Account](docs/Account.md)
 - [TransferzeroSdk.AccountListResponse](docs/AccountListResponse.md)
 - [TransferzeroSdk.AccountMeta](docs/AccountMeta.md)
 - [TransferzeroSdk.AccountResponse](docs/AccountResponse.md)
 - [TransferzeroSdk.AccountValidationError](docs/AccountValidationError.md)
 - [TransferzeroSdk.AccountValidationRequest](docs/AccountValidationRequest.md)
 - [TransferzeroSdk.AccountValidationResponse](docs/AccountValidationResponse.md)
 - [TransferzeroSdk.AccountValidationResult](docs/AccountValidationResult.md)
 - [TransferzeroSdk.ApiLog](docs/ApiLog.md)
 - [TransferzeroSdk.ApiLogListResponse](docs/ApiLogListResponse.md)
 - [TransferzeroSdk.ApiLogResponse](docs/ApiLogResponse.md)
 - [TransferzeroSdk.Currency](docs/Currency.md)
 - [TransferzeroSdk.CurrencyExchange](docs/CurrencyExchange.md)
 - [TransferzeroSdk.CurrencyExchangeListResponse](docs/CurrencyExchangeListResponse.md)
 - [TransferzeroSdk.CurrencyListResponse](docs/CurrencyListResponse.md)
 - [TransferzeroSdk.CurrencyOpposite](docs/CurrencyOpposite.md)
 - [TransferzeroSdk.Debit](docs/Debit.md)
 - [TransferzeroSdk.DebitListRequest](docs/DebitListRequest.md)
 - [TransferzeroSdk.DebitListResponse](docs/DebitListResponse.md)
 - [TransferzeroSdk.DebitRequest](docs/DebitRequest.md)
 - [TransferzeroSdk.DebitRequestWrapper](docs/DebitRequestWrapper.md)
 - [TransferzeroSdk.DebitResponse](docs/DebitResponse.md)
 - [TransferzeroSdk.Document](docs/Document.md)
 - [TransferzeroSdk.DocumentListResponse](docs/DocumentListResponse.md)
 - [TransferzeroSdk.DocumentRequest](docs/DocumentRequest.md)
 - [TransferzeroSdk.DocumentResponse](docs/DocumentResponse.md)
 - [TransferzeroSdk.DocumentWebhook](docs/DocumentWebhook.md)
 - [TransferzeroSdk.ErrorStatus](docs/ErrorStatus.md)
 - [TransferzeroSdk.FieldDescription](docs/FieldDescription.md)
 - [TransferzeroSdk.FieldSelectValidation](docs/FieldSelectValidation.md)
 - [TransferzeroSdk.FieldValidation](docs/FieldValidation.md)
 - [TransferzeroSdk.Pagination](docs/Pagination.md)
 - [TransferzeroSdk.PaginationMeta](docs/PaginationMeta.md)
 - [TransferzeroSdk.PayinMethod](docs/PayinMethod.md)
 - [TransferzeroSdk.PayinMethodDetails](docs/PayinMethodDetails.md)
 - [TransferzeroSdk.PayinMethodDetailsBTC](docs/PayinMethodDetailsBTC.md)
 - [TransferzeroSdk.PayinMethodDetailsMobile](docs/PayinMethodDetailsMobile.md)
 - [TransferzeroSdk.PayinMethodDetailsNGNBank](docs/PayinMethodDetailsNGNBank.md)
 - [TransferzeroSdk.PayinMethodRequest](docs/PayinMethodRequest.md)
 - [TransferzeroSdk.PayinMethodResponse](docs/PayinMethodResponse.md)
 - [TransferzeroSdk.PayinMethodState](docs/PayinMethodState.md)
 - [TransferzeroSdk.PayinMethodUxFlow](docs/PayinMethodUxFlow.md)
 - [TransferzeroSdk.PaymentMethod](docs/PaymentMethod.md)
 - [TransferzeroSdk.PaymentMethodListResponse](docs/PaymentMethodListResponse.md)
 - [TransferzeroSdk.PaymentMethodOpposite](docs/PaymentMethodOpposite.md)
 - [TransferzeroSdk.PayoutMethod](docs/PayoutMethod.md)
 - [TransferzeroSdk.PayoutMethodBankAccountTypeEnum](docs/PayoutMethodBankAccountTypeEnum.md)
 - [TransferzeroSdk.PayoutMethodCashProviderEnum](docs/PayoutMethodCashProviderEnum.md)
 - [TransferzeroSdk.PayoutMethodCountryEnum](docs/PayoutMethodCountryEnum.md)
 - [TransferzeroSdk.PayoutMethodDetails](docs/PayoutMethodDetails.md)
 - [TransferzeroSdk.PayoutMethodDetailsBRLBank](docs/PayoutMethodDetailsBRLBank.md)
 - [TransferzeroSdk.PayoutMethodDetailsBTC](docs/PayoutMethodDetailsBTC.md)
 - [TransferzeroSdk.PayoutMethodDetailsBWPBank](docs/PayoutMethodDetailsBWPBank.md)
 - [TransferzeroSdk.PayoutMethodDetailsBalance](docs/PayoutMethodDetailsBalance.md)
 - [TransferzeroSdk.PayoutMethodDetailsCADBank](docs/PayoutMethodDetailsCADBank.md)
 - [TransferzeroSdk.PayoutMethodDetailsGBPBank](docs/PayoutMethodDetailsGBPBank.md)
 - [TransferzeroSdk.PayoutMethodDetailsGHSBank](docs/PayoutMethodDetailsGHSBank.md)
 - [TransferzeroSdk.PayoutMethodDetailsGHSCash](docs/PayoutMethodDetailsGHSCash.md)
 - [TransferzeroSdk.PayoutMethodDetailsGNFMobile](docs/PayoutMethodDetailsGNFMobile.md)
 - [TransferzeroSdk.PayoutMethodDetailsIBAN](docs/PayoutMethodDetailsIBAN.md)
 - [TransferzeroSdk.PayoutMethodDetailsINRBank](docs/PayoutMethodDetailsINRBank.md)
 - [TransferzeroSdk.PayoutMethodDetailsKESBank](docs/PayoutMethodDetailsKESBank.md)
 - [TransferzeroSdk.PayoutMethodDetailsKESMobile](docs/PayoutMethodDetailsKESMobile.md)
 - [TransferzeroSdk.PayoutMethodDetailsMADCash](docs/PayoutMethodDetailsMADCash.md)
 - [TransferzeroSdk.PayoutMethodDetailsMobile](docs/PayoutMethodDetailsMobile.md)
 - [TransferzeroSdk.PayoutMethodDetailsNGNBank](docs/PayoutMethodDetailsNGNBank.md)
 - [TransferzeroSdk.PayoutMethodDetailsNZDBank](docs/PayoutMethodDetailsNZDBank.md)
 - [TransferzeroSdk.PayoutMethodDetailsUGXBank](docs/PayoutMethodDetailsUGXBank.md)
 - [TransferzeroSdk.PayoutMethodDetailsUSDBank](docs/PayoutMethodDetailsUSDBank.md)
 - [TransferzeroSdk.PayoutMethodDetailsUSDCash](docs/PayoutMethodDetailsUSDCash.md)
 - [TransferzeroSdk.PayoutMethodDetailsXAFBank](docs/PayoutMethodDetailsXAFBank.md)
 - [TransferzeroSdk.PayoutMethodDetailsXAFMobile](docs/PayoutMethodDetailsXAFMobile.md)
 - [TransferzeroSdk.PayoutMethodDetailsXOFBank](docs/PayoutMethodDetailsXOFBank.md)
 - [TransferzeroSdk.PayoutMethodDetailsXOFCash](docs/PayoutMethodDetailsXOFCash.md)
 - [TransferzeroSdk.PayoutMethodDetailsXOFMobile](docs/PayoutMethodDetailsXOFMobile.md)
 - [TransferzeroSdk.PayoutMethodDetailsZARBank](docs/PayoutMethodDetailsZARBank.md)
 - [TransferzeroSdk.PayoutMethodDetailsZMWBank](docs/PayoutMethodDetailsZMWBank.md)
 - [TransferzeroSdk.PayoutMethodGenderEnum](docs/PayoutMethodGenderEnum.md)
 - [TransferzeroSdk.PayoutMethodIdentityCardTypeEnum](docs/PayoutMethodIdentityCardTypeEnum.md)
 - [TransferzeroSdk.PayoutMethodLegalEntityTypeEnum](docs/PayoutMethodLegalEntityTypeEnum.md)
 - [TransferzeroSdk.PayoutMethodListResponse](docs/PayoutMethodListResponse.md)
 - [TransferzeroSdk.PayoutMethodMobileProviderEnum](docs/PayoutMethodMobileProviderEnum.md)
 - [TransferzeroSdk.PayoutMethodNatureOfBusinessEnum](docs/PayoutMethodNatureOfBusinessEnum.md)
 - [TransferzeroSdk.PayoutMethodPixKeyTypeEnum](docs/PayoutMethodPixKeyTypeEnum.md)
 - [TransferzeroSdk.PayoutMethodRequest](docs/PayoutMethodRequest.md)
 - [TransferzeroSdk.PayoutMethodResponse](docs/PayoutMethodResponse.md)
 - [TransferzeroSdk.PayoutMethodTransferReasonEnum](docs/PayoutMethodTransferReasonEnum.md)
 - [TransferzeroSdk.PayoutMethodWebhook](docs/PayoutMethodWebhook.md)
 - [TransferzeroSdk.PoliticallyExposedPerson](docs/PoliticallyExposedPerson.md)
 - [TransferzeroSdk.ProofOfPayment](docs/ProofOfPayment.md)
 - [TransferzeroSdk.ProofOfPaymentListResponse](docs/ProofOfPaymentListResponse.md)
 - [TransferzeroSdk.Recipient](docs/Recipient.md)
 - [TransferzeroSdk.RecipientListResponse](docs/RecipientListResponse.md)
 - [TransferzeroSdk.RecipientRequest](docs/RecipientRequest.md)
 - [TransferzeroSdk.RecipientResponse](docs/RecipientResponse.md)
 - [TransferzeroSdk.RecipientState](docs/RecipientState.md)
 - [TransferzeroSdk.RecipientStateReasonDetails](docs/RecipientStateReasonDetails.md)
 - [TransferzeroSdk.RecipientWebhook](docs/RecipientWebhook.md)
 - [TransferzeroSdk.Sender](docs/Sender.md)
 - [TransferzeroSdk.SenderListResponse](docs/SenderListResponse.md)
 - [TransferzeroSdk.SenderRequest](docs/SenderRequest.md)
 - [TransferzeroSdk.SenderResponse](docs/SenderResponse.md)
 - [TransferzeroSdk.SenderResponseExisting](docs/SenderResponseExisting.md)
 - [TransferzeroSdk.SenderResponseMeta](docs/SenderResponseMeta.md)
 - [TransferzeroSdk.SenderState](docs/SenderState.md)
 - [TransferzeroSdk.SenderWebhook](docs/SenderWebhook.md)
 - [TransferzeroSdk.StateReasonDetails](docs/StateReasonDetails.md)
 - [TransferzeroSdk.Transaction](docs/Transaction.md)
 - [TransferzeroSdk.TransactionListResponse](docs/TransactionListResponse.md)
 - [TransferzeroSdk.TransactionRequest](docs/TransactionRequest.md)
 - [TransferzeroSdk.TransactionResponse](docs/TransactionResponse.md)
 - [TransferzeroSdk.TransactionResponseExisting](docs/TransactionResponseExisting.md)
 - [TransferzeroSdk.TransactionResponseMeta](docs/TransactionResponseMeta.md)
 - [TransferzeroSdk.TransactionState](docs/TransactionState.md)
 - [TransferzeroSdk.TransactionTraits](docs/TransactionTraits.md)
 - [TransferzeroSdk.TransactionWebhook](docs/TransactionWebhook.md)
 - [TransferzeroSdk.ValidationErrorDescription](docs/ValidationErrorDescription.md)
 - [TransferzeroSdk.Webhook](docs/Webhook.md)
 - [TransferzeroSdk.WebhookDefinition](docs/WebhookDefinition.md)
 - [TransferzeroSdk.WebhookDefinitionEventListResponse](docs/WebhookDefinitionEventListResponse.md)
 - [TransferzeroSdk.WebhookDefinitionListResponse](docs/WebhookDefinitionListResponse.md)
 - [TransferzeroSdk.WebhookDefinitionRequest](docs/WebhookDefinitionRequest.md)
 - [TransferzeroSdk.WebhookDefinitionResponse](docs/WebhookDefinitionResponse.md)
 - [TransferzeroSdk.WebhookLog](docs/WebhookLog.md)
 - [TransferzeroSdk.WebhookLogListResponse](docs/WebhookLogListResponse.md)
 - [TransferzeroSdk.WebhookLogMetadata](docs/WebhookLogMetadata.md)
 - [TransferzeroSdk.WebhookLogMetadataRequest](docs/WebhookLogMetadataRequest.md)
 - [TransferzeroSdk.WebhookLogMetadataResponse](docs/WebhookLogMetadataResponse.md)
 - [TransferzeroSdk.WebhookLogResponse](docs/WebhookLogResponse.md)


## Documentation for Authorization

You can set the API Key and Secret by passing a config object when creating an ApiClient:

```js
const apiClient = new ApiClient({
  apiKey: '<key>',
  apiSecret: '<secret>',
  basePath: 'https://api-sandbox.transferzero.com/v1'
});
```

Or by setting the properties on an ApiClient instance:

```js
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';
```

## Author




- API version: 1.0
- Package version: 1.28.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
