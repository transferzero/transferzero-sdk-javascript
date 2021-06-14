/**
 * TransferZero API
 * Reference documentation for the TransferZero API V1
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Account from './Model/Account';
import AccountListResponse from './Model/AccountListResponse';
import AccountMeta from './Model/AccountMeta';
import AccountResponse from './Model/AccountResponse';
import AccountValidationError from './Model/AccountValidationError';
import AccountValidationRequest from './Model/AccountValidationRequest';
import AccountValidationResponse from './Model/AccountValidationResponse';
import AccountValidationResult from './Model/AccountValidationResult';
import ApiLog from './Model/ApiLog';
import ApiLogListResponse from './Model/ApiLogListResponse';
import ApiLogResponse from './Model/ApiLogResponse';
import Currency from './Model/Currency';
import CurrencyExchange from './Model/CurrencyExchange';
import CurrencyExchangeListResponse from './Model/CurrencyExchangeListResponse';
import CurrencyListResponse from './Model/CurrencyListResponse';
import CurrencyOpposite from './Model/CurrencyOpposite';
import Debit from './Model/Debit';
import DebitListRequest from './Model/DebitListRequest';
import DebitListResponse from './Model/DebitListResponse';
import DebitRequest from './Model/DebitRequest';
import DebitRequestWrapper from './Model/DebitRequestWrapper';
import DebitResponse from './Model/DebitResponse';
import Document from './Model/Document';
import DocumentListResponse from './Model/DocumentListResponse';
import DocumentRequest from './Model/DocumentRequest';
import DocumentResponse from './Model/DocumentResponse';
import DocumentWebhook from './Model/DocumentWebhook';
import ErrorStatus from './Model/ErrorStatus';
import FieldDescription from './Model/FieldDescription';
import FieldSelectValidation from './Model/FieldSelectValidation';
import FieldValidation from './Model/FieldValidation';
import Pagination from './Model/Pagination';
import PaginationMeta from './Model/PaginationMeta';
import PayinMethod from './Model/PayinMethod';
import PayinMethodDetails from './Model/PayinMethodDetails';
import PayinMethodDetailsBTC from './Model/PayinMethodDetailsBTC';
import PayinMethodDetailsMobile from './Model/PayinMethodDetailsMobile';
import PayinMethodDetailsNGNBank from './Model/PayinMethodDetailsNGNBank';
import PayinMethodRequest from './Model/PayinMethodRequest';
import PaymentMethod from './Model/PaymentMethod';
import PaymentMethodListResponse from './Model/PaymentMethodListResponse';
import PaymentMethodOpposite from './Model/PaymentMethodOpposite';
import PayoutMethod from './Model/PayoutMethod';
import PayoutMethodBankAccountTypeEnum from './Model/PayoutMethodBankAccountTypeEnum';
import PayoutMethodCashProviderEnum from './Model/PayoutMethodCashProviderEnum';
import PayoutMethodCountryEnum from './Model/PayoutMethodCountryEnum';
import PayoutMethodDetails from './Model/PayoutMethodDetails';
import PayoutMethodDetailsBTC from './Model/PayoutMethodDetailsBTC';
import PayoutMethodDetailsBalance from './Model/PayoutMethodDetailsBalance';
import PayoutMethodDetailsGBPBank from './Model/PayoutMethodDetailsGBPBank';
import PayoutMethodDetailsGHSBank from './Model/PayoutMethodDetailsGHSBank';
import PayoutMethodDetailsGHSCash from './Model/PayoutMethodDetailsGHSCash';
import PayoutMethodDetailsIBAN from './Model/PayoutMethodDetailsIBAN';
import PayoutMethodDetailsMADCash from './Model/PayoutMethodDetailsMADCash';
import PayoutMethodDetailsMobile from './Model/PayoutMethodDetailsMobile';
import PayoutMethodDetailsNGNBank from './Model/PayoutMethodDetailsNGNBank';
import PayoutMethodDetailsXOFBank from './Model/PayoutMethodDetailsXOFBank';
import PayoutMethodDetailsXOFCash from './Model/PayoutMethodDetailsXOFCash';
import PayoutMethodDetailsXOFMobile from './Model/PayoutMethodDetailsXOFMobile';
import PayoutMethodDetailsZARBank from './Model/PayoutMethodDetailsZARBank';
import PayoutMethodGenderEnum from './Model/PayoutMethodGenderEnum';
import PayoutMethodIdentityCardTypeEnum from './Model/PayoutMethodIdentityCardTypeEnum';
import PayoutMethodLegalEntityTypeEnum from './Model/PayoutMethodLegalEntityTypeEnum';
import PayoutMethodListResponse from './Model/PayoutMethodListResponse';
import PayoutMethodMobileProviderEnum from './Model/PayoutMethodMobileProviderEnum';
import PayoutMethodNatureOfBusinessEnum from './Model/PayoutMethodNatureOfBusinessEnum';
import PayoutMethodRequest from './Model/PayoutMethodRequest';
import PayoutMethodResponse from './Model/PayoutMethodResponse';
import PayoutMethodWebhook from './Model/PayoutMethodWebhook';
import PoliticallyExposedPerson from './Model/PoliticallyExposedPerson';
import ProofOfPayment from './Model/ProofOfPayment';
import ProofOfPaymentListResponse from './Model/ProofOfPaymentListResponse';
import Recipient from './Model/Recipient';
import RecipientListResponse from './Model/RecipientListResponse';
import RecipientRequest from './Model/RecipientRequest';
import RecipientResponse from './Model/RecipientResponse';
import RecipientState from './Model/RecipientState';
import RecipientStateReasonDetails from './Model/RecipientStateReasonDetails';
import RecipientWebhook from './Model/RecipientWebhook';
import Sender from './Model/Sender';
import SenderListResponse from './Model/SenderListResponse';
import SenderRequest from './Model/SenderRequest';
import SenderResponse from './Model/SenderResponse';
import SenderResponseExisting from './Model/SenderResponseExisting';
import SenderResponseMeta from './Model/SenderResponseMeta';
import SenderState from './Model/SenderState';
import SenderWebhook from './Model/SenderWebhook';
import Transaction from './Model/Transaction';
import TransactionListResponse from './Model/TransactionListResponse';
import TransactionRequest from './Model/TransactionRequest';
import TransactionResponse from './Model/TransactionResponse';
import TransactionResponseExisting from './Model/TransactionResponseExisting';
import TransactionResponseMeta from './Model/TransactionResponseMeta';
import TransactionState from './Model/TransactionState';
import TransactionTraits from './Model/TransactionTraits';
import TransactionWebhook from './Model/TransactionWebhook';
import ValidationErrorDescription from './Model/ValidationErrorDescription';
import Webhook from './Model/Webhook';
import WebhookDefinition from './Model/WebhookDefinition';
import WebhookDefinitionEventListResponse from './Model/WebhookDefinitionEventListResponse';
import WebhookDefinitionListResponse from './Model/WebhookDefinitionListResponse';
import WebhookDefinitionRequest from './Model/WebhookDefinitionRequest';
import WebhookDefinitionResponse from './Model/WebhookDefinitionResponse';
import WebhookLog from './Model/WebhookLog';
import WebhookLogListResponse from './Model/WebhookLogListResponse';
import WebhookLogMetadata from './Model/WebhookLogMetadata';
import WebhookLogMetadataRequest from './Model/WebhookLogMetadataRequest';
import WebhookLogMetadataResponse from './Model/WebhookLogMetadataResponse';
import WebhookLogResponse from './Model/WebhookLogResponse';
import APILogsApi from './Api/APILogsApi';
import AccountDebitsApi from './Api/AccountDebitsApi';
import AccountValidationApi from './Api/AccountValidationApi';
import AccountsApi from './Api/AccountsApi';
import CurrencyInfoApi from './Api/CurrencyInfoApi';
import DocumentsApi from './Api/DocumentsApi';
import LogsApi from './Api/LogsApi';
import PaymentMethodsApi from './Api/PaymentMethodsApi';
import PayoutMethodsApi from './Api/PayoutMethodsApi';
import RecipientsApi from './Api/RecipientsApi';
import SendersApi from './Api/SendersApi';
import TransactionsApi from './Api/TransactionsApi';
import WebhooksApi from './Api/WebhooksApi';


/**
* Client library for TransferZero API..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var TransferzeroSdk = require('index'); // See note below*.
* var xxxSvc = new TransferzeroSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new TransferzeroSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new TransferzeroSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new TransferzeroSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.14.1
*/
export default {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Account model constructor.
     * @property {module:Model/Account}
     */
    Account,

    /**
     * The AccountListResponse model constructor.
     * @property {module:Model/AccountListResponse}
     */
    AccountListResponse,

    /**
     * The AccountMeta model constructor.
     * @property {module:Model/AccountMeta}
     */
    AccountMeta,

    /**
     * The AccountResponse model constructor.
     * @property {module:Model/AccountResponse}
     */
    AccountResponse,

    /**
     * The AccountValidationError model constructor.
     * @property {module:Model/AccountValidationError}
     */
    AccountValidationError,

    /**
     * The AccountValidationRequest model constructor.
     * @property {module:Model/AccountValidationRequest}
     */
    AccountValidationRequest,

    /**
     * The AccountValidationResponse model constructor.
     * @property {module:Model/AccountValidationResponse}
     */
    AccountValidationResponse,

    /**
     * The AccountValidationResult model constructor.
     * @property {module:Model/AccountValidationResult}
     */
    AccountValidationResult,

    /**
     * The ApiLog model constructor.
     * @property {module:Model/ApiLog}
     */
    ApiLog,

    /**
     * The ApiLogListResponse model constructor.
     * @property {module:Model/ApiLogListResponse}
     */
    ApiLogListResponse,

    /**
     * The ApiLogResponse model constructor.
     * @property {module:Model/ApiLogResponse}
     */
    ApiLogResponse,

    /**
     * The Currency model constructor.
     * @property {module:Model/Currency}
     */
    Currency,

    /**
     * The CurrencyExchange model constructor.
     * @property {module:Model/CurrencyExchange}
     */
    CurrencyExchange,

    /**
     * The CurrencyExchangeListResponse model constructor.
     * @property {module:Model/CurrencyExchangeListResponse}
     */
    CurrencyExchangeListResponse,

    /**
     * The CurrencyListResponse model constructor.
     * @property {module:Model/CurrencyListResponse}
     */
    CurrencyListResponse,

    /**
     * The CurrencyOpposite model constructor.
     * @property {module:Model/CurrencyOpposite}
     */
    CurrencyOpposite,

    /**
     * The Debit model constructor.
     * @property {module:Model/Debit}
     */
    Debit,

    /**
     * The DebitListRequest model constructor.
     * @property {module:Model/DebitListRequest}
     */
    DebitListRequest,

    /**
     * The DebitListResponse model constructor.
     * @property {module:Model/DebitListResponse}
     */
    DebitListResponse,

    /**
     * The DebitRequest model constructor.
     * @property {module:Model/DebitRequest}
     */
    DebitRequest,

    /**
     * The DebitRequestWrapper model constructor.
     * @property {module:Model/DebitRequestWrapper}
     */
    DebitRequestWrapper,

    /**
     * The DebitResponse model constructor.
     * @property {module:Model/DebitResponse}
     */
    DebitResponse,

    /**
     * The Document model constructor.
     * @property {module:Model/Document}
     */
    Document,

    /**
     * The DocumentListResponse model constructor.
     * @property {module:Model/DocumentListResponse}
     */
    DocumentListResponse,

    /**
     * The DocumentRequest model constructor.
     * @property {module:Model/DocumentRequest}
     */
    DocumentRequest,

    /**
     * The DocumentResponse model constructor.
     * @property {module:Model/DocumentResponse}
     */
    DocumentResponse,

    /**
     * The DocumentWebhook model constructor.
     * @property {module:Model/DocumentWebhook}
     */
    DocumentWebhook,

    /**
     * The ErrorStatus model constructor.
     * @property {module:Model/ErrorStatus}
     */
    ErrorStatus,

    /**
     * The FieldDescription model constructor.
     * @property {module:Model/FieldDescription}
     */
    FieldDescription,

    /**
     * The FieldSelectValidation model constructor.
     * @property {module:Model/FieldSelectValidation}
     */
    FieldSelectValidation,

    /**
     * The FieldValidation model constructor.
     * @property {module:Model/FieldValidation}
     */
    FieldValidation,

    /**
     * The Pagination model constructor.
     * @property {module:Model/Pagination}
     */
    Pagination,

    /**
     * The PaginationMeta model constructor.
     * @property {module:Model/PaginationMeta}
     */
    PaginationMeta,

    /**
     * The PayinMethod model constructor.
     * @property {module:Model/PayinMethod}
     */
    PayinMethod,

    /**
     * The PayinMethodDetails model constructor.
     * @property {module:Model/PayinMethodDetails}
     */
    PayinMethodDetails,

    /**
     * The PayinMethodDetailsBTC model constructor.
     * @property {module:Model/PayinMethodDetailsBTC}
     */
    PayinMethodDetailsBTC,

    /**
     * The PayinMethodDetailsMobile model constructor.
     * @property {module:Model/PayinMethodDetailsMobile}
     */
    PayinMethodDetailsMobile,

    /**
     * The PayinMethodDetailsNGNBank model constructor.
     * @property {module:Model/PayinMethodDetailsNGNBank}
     */
    PayinMethodDetailsNGNBank,

    /**
     * The PayinMethodRequest model constructor.
     * @property {module:Model/PayinMethodRequest}
     */
    PayinMethodRequest,

    /**
     * The PaymentMethod model constructor.
     * @property {module:Model/PaymentMethod}
     */
    PaymentMethod,

    /**
     * The PaymentMethodListResponse model constructor.
     * @property {module:Model/PaymentMethodListResponse}
     */
    PaymentMethodListResponse,

    /**
     * The PaymentMethodOpposite model constructor.
     * @property {module:Model/PaymentMethodOpposite}
     */
    PaymentMethodOpposite,

    /**
     * The PayoutMethod model constructor.
     * @property {module:Model/PayoutMethod}
     */
    PayoutMethod,

    /**
     * The PayoutMethodBankAccountTypeEnum model constructor.
     * @property {module:Model/PayoutMethodBankAccountTypeEnum}
     */
    PayoutMethodBankAccountTypeEnum,

    /**
     * The PayoutMethodCashProviderEnum model constructor.
     * @property {module:Model/PayoutMethodCashProviderEnum}
     */
    PayoutMethodCashProviderEnum,

    /**
     * The PayoutMethodCountryEnum model constructor.
     * @property {module:Model/PayoutMethodCountryEnum}
     */
    PayoutMethodCountryEnum,

    /**
     * The PayoutMethodDetails model constructor.
     * @property {module:Model/PayoutMethodDetails}
     */
    PayoutMethodDetails,

    /**
     * The PayoutMethodDetailsBTC model constructor.
     * @property {module:Model/PayoutMethodDetailsBTC}
     */
    PayoutMethodDetailsBTC,

    /**
     * The PayoutMethodDetailsBalance model constructor.
     * @property {module:Model/PayoutMethodDetailsBalance}
     */
    PayoutMethodDetailsBalance,

    /**
     * The PayoutMethodDetailsGBPBank model constructor.
     * @property {module:Model/PayoutMethodDetailsGBPBank}
     */
    PayoutMethodDetailsGBPBank,

    /**
     * The PayoutMethodDetailsGHSBank model constructor.
     * @property {module:Model/PayoutMethodDetailsGHSBank}
     */
    PayoutMethodDetailsGHSBank,

    /**
     * The PayoutMethodDetailsGHSCash model constructor.
     * @property {module:Model/PayoutMethodDetailsGHSCash}
     */
    PayoutMethodDetailsGHSCash,

    /**
     * The PayoutMethodDetailsIBAN model constructor.
     * @property {module:Model/PayoutMethodDetailsIBAN}
     */
    PayoutMethodDetailsIBAN,

    /**
     * The PayoutMethodDetailsMADCash model constructor.
     * @property {module:Model/PayoutMethodDetailsMADCash}
     */
    PayoutMethodDetailsMADCash,

    /**
     * The PayoutMethodDetailsMobile model constructor.
     * @property {module:Model/PayoutMethodDetailsMobile}
     */
    PayoutMethodDetailsMobile,

    /**
     * The PayoutMethodDetailsNGNBank model constructor.
     * @property {module:Model/PayoutMethodDetailsNGNBank}
     */
    PayoutMethodDetailsNGNBank,

    /**
     * The PayoutMethodDetailsXOFBank model constructor.
     * @property {module:Model/PayoutMethodDetailsXOFBank}
     */
    PayoutMethodDetailsXOFBank,

    /**
     * The PayoutMethodDetailsXOFCash model constructor.
     * @property {module:Model/PayoutMethodDetailsXOFCash}
     */
    PayoutMethodDetailsXOFCash,

    /**
     * The PayoutMethodDetailsXOFMobile model constructor.
     * @property {module:Model/PayoutMethodDetailsXOFMobile}
     */
    PayoutMethodDetailsXOFMobile,

    /**
     * The PayoutMethodDetailsZARBank model constructor.
     * @property {module:Model/PayoutMethodDetailsZARBank}
     */
    PayoutMethodDetailsZARBank,

    /**
     * The PayoutMethodGenderEnum model constructor.
     * @property {module:Model/PayoutMethodGenderEnum}
     */
    PayoutMethodGenderEnum,

    /**
     * The PayoutMethodIdentityCardTypeEnum model constructor.
     * @property {module:Model/PayoutMethodIdentityCardTypeEnum}
     */
    PayoutMethodIdentityCardTypeEnum,

    /**
     * The PayoutMethodLegalEntityTypeEnum model constructor.
     * @property {module:Model/PayoutMethodLegalEntityTypeEnum}
     */
    PayoutMethodLegalEntityTypeEnum,

    /**
     * The PayoutMethodListResponse model constructor.
     * @property {module:Model/PayoutMethodListResponse}
     */
    PayoutMethodListResponse,

    /**
     * The PayoutMethodMobileProviderEnum model constructor.
     * @property {module:Model/PayoutMethodMobileProviderEnum}
     */
    PayoutMethodMobileProviderEnum,

    /**
     * The PayoutMethodNatureOfBusinessEnum model constructor.
     * @property {module:Model/PayoutMethodNatureOfBusinessEnum}
     */
    PayoutMethodNatureOfBusinessEnum,

    /**
     * The PayoutMethodRequest model constructor.
     * @property {module:Model/PayoutMethodRequest}
     */
    PayoutMethodRequest,

    /**
     * The PayoutMethodResponse model constructor.
     * @property {module:Model/PayoutMethodResponse}
     */
    PayoutMethodResponse,

    /**
     * The PayoutMethodWebhook model constructor.
     * @property {module:Model/PayoutMethodWebhook}
     */
    PayoutMethodWebhook,

    /**
     * The PoliticallyExposedPerson model constructor.
     * @property {module:Model/PoliticallyExposedPerson}
     */
    PoliticallyExposedPerson,

    /**
     * The ProofOfPayment model constructor.
     * @property {module:Model/ProofOfPayment}
     */
    ProofOfPayment,

    /**
     * The ProofOfPaymentListResponse model constructor.
     * @property {module:Model/ProofOfPaymentListResponse}
     */
    ProofOfPaymentListResponse,

    /**
     * The Recipient model constructor.
     * @property {module:Model/Recipient}
     */
    Recipient,

    /**
     * The RecipientListResponse model constructor.
     * @property {module:Model/RecipientListResponse}
     */
    RecipientListResponse,

    /**
     * The RecipientRequest model constructor.
     * @property {module:Model/RecipientRequest}
     */
    RecipientRequest,

    /**
     * The RecipientResponse model constructor.
     * @property {module:Model/RecipientResponse}
     */
    RecipientResponse,

    /**
     * The RecipientState model constructor.
     * @property {module:Model/RecipientState}
     */
    RecipientState,

    /**
     * The RecipientStateReasonDetails model constructor.
     * @property {module:Model/RecipientStateReasonDetails}
     */
    RecipientStateReasonDetails,

    /**
     * The RecipientWebhook model constructor.
     * @property {module:Model/RecipientWebhook}
     */
    RecipientWebhook,

    /**
     * The Sender model constructor.
     * @property {module:Model/Sender}
     */
    Sender,

    /**
     * The SenderListResponse model constructor.
     * @property {module:Model/SenderListResponse}
     */
    SenderListResponse,

    /**
     * The SenderRequest model constructor.
     * @property {module:Model/SenderRequest}
     */
    SenderRequest,

    /**
     * The SenderResponse model constructor.
     * @property {module:Model/SenderResponse}
     */
    SenderResponse,

    /**
     * The SenderResponseExisting model constructor.
     * @property {module:Model/SenderResponseExisting}
     */
    SenderResponseExisting,

    /**
     * The SenderResponseMeta model constructor.
     * @property {module:Model/SenderResponseMeta}
     */
    SenderResponseMeta,

    /**
     * The SenderState model constructor.
     * @property {module:Model/SenderState}
     */
    SenderState,

    /**
     * The SenderWebhook model constructor.
     * @property {module:Model/SenderWebhook}
     */
    SenderWebhook,

    /**
     * The Transaction model constructor.
     * @property {module:Model/Transaction}
     */
    Transaction,

    /**
     * The TransactionListResponse model constructor.
     * @property {module:Model/TransactionListResponse}
     */
    TransactionListResponse,

    /**
     * The TransactionRequest model constructor.
     * @property {module:Model/TransactionRequest}
     */
    TransactionRequest,

    /**
     * The TransactionResponse model constructor.
     * @property {module:Model/TransactionResponse}
     */
    TransactionResponse,

    /**
     * The TransactionResponseExisting model constructor.
     * @property {module:Model/TransactionResponseExisting}
     */
    TransactionResponseExisting,

    /**
     * The TransactionResponseMeta model constructor.
     * @property {module:Model/TransactionResponseMeta}
     */
    TransactionResponseMeta,

    /**
     * The TransactionState model constructor.
     * @property {module:Model/TransactionState}
     */
    TransactionState,

    /**
     * The TransactionTraits model constructor.
     * @property {module:Model/TransactionTraits}
     */
    TransactionTraits,

    /**
     * The TransactionWebhook model constructor.
     * @property {module:Model/TransactionWebhook}
     */
    TransactionWebhook,

    /**
     * The ValidationErrorDescription model constructor.
     * @property {module:Model/ValidationErrorDescription}
     */
    ValidationErrorDescription,

    /**
     * The Webhook model constructor.
     * @property {module:Model/Webhook}
     */
    Webhook,

    /**
     * The WebhookDefinition model constructor.
     * @property {module:Model/WebhookDefinition}
     */
    WebhookDefinition,

    /**
     * The WebhookDefinitionEventListResponse model constructor.
     * @property {module:Model/WebhookDefinitionEventListResponse}
     */
    WebhookDefinitionEventListResponse,

    /**
     * The WebhookDefinitionListResponse model constructor.
     * @property {module:Model/WebhookDefinitionListResponse}
     */
    WebhookDefinitionListResponse,

    /**
     * The WebhookDefinitionRequest model constructor.
     * @property {module:Model/WebhookDefinitionRequest}
     */
    WebhookDefinitionRequest,

    /**
     * The WebhookDefinitionResponse model constructor.
     * @property {module:Model/WebhookDefinitionResponse}
     */
    WebhookDefinitionResponse,

    /**
     * The WebhookLog model constructor.
     * @property {module:Model/WebhookLog}
     */
    WebhookLog,

    /**
     * The WebhookLogListResponse model constructor.
     * @property {module:Model/WebhookLogListResponse}
     */
    WebhookLogListResponse,

    /**
     * The WebhookLogMetadata model constructor.
     * @property {module:Model/WebhookLogMetadata}
     */
    WebhookLogMetadata,

    /**
     * The WebhookLogMetadataRequest model constructor.
     * @property {module:Model/WebhookLogMetadataRequest}
     */
    WebhookLogMetadataRequest,

    /**
     * The WebhookLogMetadataResponse model constructor.
     * @property {module:Model/WebhookLogMetadataResponse}
     */
    WebhookLogMetadataResponse,

    /**
     * The WebhookLogResponse model constructor.
     * @property {module:Model/WebhookLogResponse}
     */
    WebhookLogResponse,

    /**
    * The APILogsApi service constructor.
    * @property {module:Api/APILogsApi}
    */
    APILogsApi,

    /**
    * The AccountDebitsApi service constructor.
    * @property {module:Api/AccountDebitsApi}
    */
    AccountDebitsApi,

    /**
    * The AccountValidationApi service constructor.
    * @property {module:Api/AccountValidationApi}
    */
    AccountValidationApi,

    /**
    * The AccountsApi service constructor.
    * @property {module:Api/AccountsApi}
    */
    AccountsApi,

    /**
    * The CurrencyInfoApi service constructor.
    * @property {module:Api/CurrencyInfoApi}
    */
    CurrencyInfoApi,

    /**
    * The DocumentsApi service constructor.
    * @property {module:Api/DocumentsApi}
    */
    DocumentsApi,

    /**
    * The LogsApi service constructor.
    * @property {module:Api/LogsApi}
    */
    LogsApi,

    /**
    * The PaymentMethodsApi service constructor.
    * @property {module:Api/PaymentMethodsApi}
    */
    PaymentMethodsApi,

    /**
    * The PayoutMethodsApi service constructor.
    * @property {module:Api/PayoutMethodsApi}
    */
    PayoutMethodsApi,

    /**
    * The RecipientsApi service constructor.
    * @property {module:Api/RecipientsApi}
    */
    RecipientsApi,

    /**
    * The SendersApi service constructor.
    * @property {module:Api/SendersApi}
    */
    SendersApi,

    /**
    * The TransactionsApi service constructor.
    * @property {module:Api/TransactionsApi}
    */
    TransactionsApi,

    /**
    * The WebhooksApi service constructor.
    * @property {module:Api/WebhooksApi}
    */
    WebhooksApi
};

export {
    ApiClient,
    Account,
    AccountListResponse,
    AccountMeta,
    AccountResponse,
    AccountValidationError,
    AccountValidationRequest,
    AccountValidationResponse,
    AccountValidationResult,
    ApiLog,
    ApiLogListResponse,
    ApiLogResponse,
    Currency,
    CurrencyExchange,
    CurrencyExchangeListResponse,
    CurrencyListResponse,
    CurrencyOpposite,
    Debit,
    DebitListRequest,
    DebitListResponse,
    DebitRequest,
    DebitRequestWrapper,
    DebitResponse,
    Document,
    DocumentListResponse,
    DocumentRequest,
    DocumentResponse,
    DocumentWebhook,
    ErrorStatus,
    FieldDescription,
    FieldSelectValidation,
    FieldValidation,
    Pagination,
    PaginationMeta,
    PayinMethod,
    PayinMethodDetails,
    PayinMethodDetailsBTC,
    PayinMethodDetailsMobile,
    PayinMethodDetailsNGNBank,
    PayinMethodRequest,
    PaymentMethod,
    PaymentMethodListResponse,
    PaymentMethodOpposite,
    PayoutMethod,
    PayoutMethodBankAccountTypeEnum,
    PayoutMethodCashProviderEnum,
    PayoutMethodCountryEnum,
    PayoutMethodDetails,
    PayoutMethodDetailsBTC,
    PayoutMethodDetailsBalance,
    PayoutMethodDetailsGBPBank,
    PayoutMethodDetailsGHSBank,
    PayoutMethodDetailsGHSCash,
    PayoutMethodDetailsIBAN,
    PayoutMethodDetailsMADCash,
    PayoutMethodDetailsMobile,
    PayoutMethodDetailsNGNBank,
    PayoutMethodDetailsXOFBank,
    PayoutMethodDetailsXOFCash,
    PayoutMethodDetailsXOFMobile,
    PayoutMethodDetailsZARBank,
    PayoutMethodGenderEnum,
    PayoutMethodIdentityCardTypeEnum,
    PayoutMethodLegalEntityTypeEnum,
    PayoutMethodListResponse,
    PayoutMethodMobileProviderEnum,
    PayoutMethodNatureOfBusinessEnum,
    PayoutMethodRequest,
    PayoutMethodResponse,
    PayoutMethodWebhook,
    PoliticallyExposedPerson,
    ProofOfPayment,
    ProofOfPaymentListResponse,
    Recipient,
    RecipientListResponse,
    RecipientRequest,
    RecipientResponse,
    RecipientState,
    RecipientStateReasonDetails,
    RecipientWebhook,
    Sender,
    SenderListResponse,
    SenderRequest,
    SenderResponse,
    SenderResponseExisting,
    SenderResponseMeta,
    SenderState,
    SenderWebhook,
    Transaction,
    TransactionListResponse,
    TransactionRequest,
    TransactionResponse,
    TransactionResponseExisting,
    TransactionResponseMeta,
    TransactionState,
    TransactionTraits,
    TransactionWebhook,
    ValidationErrorDescription,
    Webhook,
    WebhookDefinition,
    WebhookDefinitionEventListResponse,
    WebhookDefinitionListResponse,
    WebhookDefinitionRequest,
    WebhookDefinitionResponse,
    WebhookLog,
    WebhookLogListResponse,
    WebhookLogMetadata,
    WebhookLogMetadataRequest,
    WebhookLogMetadataResponse,
    WebhookLogResponse,
    APILogsApi,
    AccountDebitsApi,
    AccountValidationApi,
    AccountsApi,
    CurrencyInfoApi,
    DocumentsApi,
    LogsApi,
    PaymentMethodsApi,
    PayoutMethodsApi,
    RecipientsApi,
    SendersApi,
    TransactionsApi,
    WebhooksApi
};
