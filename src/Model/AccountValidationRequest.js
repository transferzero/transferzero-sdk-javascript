/**
 * TransferZero API
 * Reference documentation for the TransferZero API V1
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import PayoutMethodMobileProviderEnum from './PayoutMethodMobileProviderEnum';

/**
 * The AccountValidationRequest model module.
 * @module Model/AccountValidationRequest
 * @version 1.36.1
 */
class AccountValidationRequest {
    /**
     * Constructs a new <code>AccountValidationRequest</code>.
     * @alias module:Model/AccountValidationRequest
     * @param country {module:Model/AccountValidationRequest.CountryEnum} Country of account in 2-character alpha ISO 3166-2 country format
     * @param currency {module:Model/AccountValidationRequest.CurrencyEnum} The currency the bank account is in
     * @param method {module:Model/AccountValidationRequest.MethodEnum} The method of the payment. Currently bank and mobile are supported
     */
    constructor(country, currency, method) { 
        
        AccountValidationRequest.initialize(this, country, currency, method);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, country, currency, method) { 
        obj['country'] = country;
        obj['currency'] = currency;
        obj['method'] = method;
    }

    /**
     * Constructs a <code>AccountValidationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/AccountValidationRequest} obj Optional instance to populate.
     * @return {module:Model/AccountValidationRequest} The populated <code>AccountValidationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountValidationRequest();

            if (data.hasOwnProperty('bank_account')) {
                obj['bank_account'] = ApiClient.convertToType(data['bank_account'], 'String');
            }
            if (data.hasOwnProperty('bank_code')) {
                obj['bank_code'] = ApiClient.convertToType(data['bank_code'], 'String');
            }
            if (data.hasOwnProperty('iban')) {
                obj['iban'] = ApiClient.convertToType(data['iban'], 'String');
            }
            if (data.hasOwnProperty('phone_number')) {
                obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
            }
            if (data.hasOwnProperty('mobile_provider')) {
                obj['mobile_provider'] = PayoutMethodMobileProviderEnum.constructFromObject(data['mobile_provider']);
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Account Number to query
 * @member {String} bank_account
 */
AccountValidationRequest.prototype['bank_account'] = undefined;

/**
 * Bank Code to query - same codes are used as for creating the transactions
 * @member {String} bank_code
 */
AccountValidationRequest.prototype['bank_code'] = undefined;

/**
 * IBAN to query - BBAN format for XOF bank accounts
 * @member {String} iban
 */
AccountValidationRequest.prototype['iban'] = undefined;

/**
 * Phone number to query in E.164 format
 * @member {String} phone_number
 */
AccountValidationRequest.prototype['phone_number'] = undefined;

/**
 * @member {module:Model/PayoutMethodMobileProviderEnum} mobile_provider
 */
AccountValidationRequest.prototype['mobile_provider'] = undefined;

/**
 * Country of account in 2-character alpha ISO 3166-2 country format
 * @member {module:Model/AccountValidationRequest.CountryEnum} country
 */
AccountValidationRequest.prototype['country'] = undefined;

/**
 * The currency the bank account is in
 * @member {module:Model/AccountValidationRequest.CurrencyEnum} currency
 */
AccountValidationRequest.prototype['currency'] = undefined;

/**
 * The method of the payment. Currently bank and mobile are supported
 * @member {module:Model/AccountValidationRequest.MethodEnum} method
 */
AccountValidationRequest.prototype['method'] = undefined;





/**
 * Allowed values for the <code>country</code> property.
 * @enum {String}
 * @readonly
 */
AccountValidationRequest['CountryEnum'] = {

    /**
     * value: "BF"
     * @const
     */
    "BF": "BF",

    /**
     * value: "BJ"
     * @const
     */
    "BJ": "BJ",

    /**
     * value: "CG"
     * @const
     */
    "CG": "CG",

    /**
     * value: "CI"
     * @const
     */
    "CI": "CI",

    /**
     * value: "CM"
     * @const
     */
    "CM": "CM",

    /**
     * value: "GA"
     * @const
     */
    "GA": "GA",

    /**
     * value: "GH"
     * @const
     */
    "GH": "GH",

    /**
     * value: "NG"
     * @const
     */
    "NG": "NG",

    /**
     * value: "SN"
     * @const
     */
    "SN": "SN",

    /**
     * value: "TD"
     * @const
     */
    "TD": "TD",

    /**
     * value: "TG"
     * @const
     */
    "TG": "TG",

    /**
     * value: "UG"
     * @const
     */
    "UG": "UG"
};


/**
 * Allowed values for the <code>currency</code> property.
 * @enum {String}
 * @readonly
 */
AccountValidationRequest['CurrencyEnum'] = {

    /**
     * value: "NGN"
     * @const
     */
    "NGN": "NGN",

    /**
     * value: "GHS"
     * @const
     */
    "GHS": "GHS",

    /**
     * value: "XOF"
     * @const
     */
    "XOF": "XOF",

    /**
     * value: "UGX"
     * @const
     */
    "UGX": "UGX",

    /**
     * value: "XAF"
     * @const
     */
    "XAF": "XAF"
};


/**
 * Allowed values for the <code>method</code> property.
 * @enum {String}
 * @readonly
 */
AccountValidationRequest['MethodEnum'] = {

    /**
     * value: "bank"
     * @const
     */
    "bank": "bank",

    /**
     * value: "mobile"
     * @const
     */
    "mobile": "mobile"
};



export default AccountValidationRequest;

