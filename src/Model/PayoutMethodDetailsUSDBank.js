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

import ApiClient from '../ApiClient';
import PayoutMethodBankAccountTypeEnum from './PayoutMethodBankAccountTypeEnum';
import PayoutMethodCountryEnum from './PayoutMethodCountryEnum';
import PayoutMethodTransferReasonEnum from './PayoutMethodTransferReasonEnum';

/**
 * The PayoutMethodDetailsUSDBank model module.
 * @module Model/PayoutMethodDetailsUSDBank
 * @version 1.34.0
 */
class PayoutMethodDetailsUSDBank {
    /**
     * Constructs a new <code>PayoutMethodDetailsUSDBank</code>.
     * Nigeria: &#x60;&#x60;&#x60;JSON   \&quot;details\&quot;: {     \&quot;first_name\&quot;: \&quot;Jane\&quot;,     \&quot;last_name\&quot;: \&quot;Doe\&quot;,     \&quot;phone_number\&quot;: \&quot;+2341234567\&quot;, // E.164 international format     \&quot;bank_code\&quot;: \&quot;057\&quot;,     \&quot;bank_account\&quot;: \&quot;1234567890\&quot;,     \&quot;country\&quot;: \&quot;NG\&quot;   } &#x60;&#x60;&#x60; See [USD Bank](https://docs.transferzero.com/docs/payout-details/#usdbank) documentation for the bank_code and country lists  United States: &#x60;&#x60;&#x60;JSON   \&quot;details\&quot;: {     \&quot;first_name\&quot;: \&quot;Jane\&quot;,     \&quot;last_name\&quot;: \&quot;Doe\&quot;,     \&quot;bank_account\&quot;: \&quot;1234567890\&quot;,     \&quot;bank_account_type\&quot;: \&quot;20\&quot;, // 10 for Savings, 20 for Checking     \&quot;bank_name\&quot;: \&quot;US Bank\&quot;,     \&quot;routing_number\&quot;: \&quot;091000022\&quot;,     \&quot;swift_code\&quot;: \&quot;USBKUS44IMT\&quot;,     \&quot;country\&quot;: \&quot;US\&quot;   } See [USD Bank](https://docs.transferzero.com/docs/payout-details/#usdbank-1) documentation  Egypt: &#x60;&#x60;&#x60;JSON   \&quot;details\&quot;: {     \&quot;first_name\&quot;: \&quot;Jane\&quot;,     \&quot;middle_name\&quot;: \&quot;Jill\&quot;, // optional     \&quot;last_name\&quot;: \&quot;Doe\&quot;,     \&quot;street\&quot;: \&quot;1 Main Street\&quot;,     \&quot;phone_number\&quot;: \&quot;+201023456789\&quot;,     \&quot;iban\&quot;: \&quot;EG380019000500000000263180002\&quot;,     \&quot;transfer_reason\&quot;: \&quot;personal_account\&quot;,   } &#x60;&#x60;&#x60; See [USD Bank](https://docs.transferzero.com/docs/payout-details/#usdbank-2) documentation
     * @alias module:Model/PayoutMethodDetailsUSDBank
     * @param firstName {String} 
     * @param lastName {String} 
     * @param country {module:Model/PayoutMethodCountryEnum} 
     */
    constructor(firstName, lastName, country) { 
        
        PayoutMethodDetailsUSDBank.initialize(this, firstName, lastName, country);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, country) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['country'] = country;
    }

    /**
     * Constructs a <code>PayoutMethodDetailsUSDBank</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsUSDBank} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsUSDBank} The populated <code>PayoutMethodDetailsUSDBank</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsUSDBank();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('middle_name')) {
                obj['middle_name'] = ApiClient.convertToType(data['middle_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('phone_number')) {
                obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
            }
            if (data.hasOwnProperty('bank_code')) {
                obj['bank_code'] = ApiClient.convertToType(data['bank_code'], 'String');
            }
            if (data.hasOwnProperty('bank_account')) {
                obj['bank_account'] = ApiClient.convertToType(data['bank_account'], 'String');
            }
            if (data.hasOwnProperty('bank_account_type')) {
                obj['bank_account_type'] = PayoutMethodBankAccountTypeEnum.constructFromObject(data['bank_account_type']);
            }
            if (data.hasOwnProperty('bank_name')) {
                obj['bank_name'] = ApiClient.convertToType(data['bank_name'], 'String');
            }
            if (data.hasOwnProperty('routing_number')) {
                obj['routing_number'] = ApiClient.convertToType(data['routing_number'], 'String');
            }
            if (data.hasOwnProperty('swift_code')) {
                obj['swift_code'] = ApiClient.convertToType(data['swift_code'], 'String');
            }
            if (data.hasOwnProperty('iban')) {
                obj['iban'] = ApiClient.convertToType(data['iban'], 'String');
            }
            if (data.hasOwnProperty('street')) {
                obj['street'] = ApiClient.convertToType(data['street'], 'String');
            }
            if (data.hasOwnProperty('transfer_reason')) {
                obj['transfer_reason'] = PayoutMethodTransferReasonEnum.constructFromObject(data['transfer_reason']);
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = PayoutMethodCountryEnum.constructFromObject(data['country']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} first_name
 */
PayoutMethodDetailsUSDBank.prototype['first_name'] = undefined;

/**
 * @member {String} middle_name
 */
PayoutMethodDetailsUSDBank.prototype['middle_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsUSDBank.prototype['last_name'] = undefined;

/**
 * @member {String} phone_number
 */
PayoutMethodDetailsUSDBank.prototype['phone_number'] = undefined;

/**
 * @member {String} bank_code
 */
PayoutMethodDetailsUSDBank.prototype['bank_code'] = undefined;

/**
 * @member {String} bank_account
 */
PayoutMethodDetailsUSDBank.prototype['bank_account'] = undefined;

/**
 * @member {module:Model/PayoutMethodBankAccountTypeEnum} bank_account_type
 */
PayoutMethodDetailsUSDBank.prototype['bank_account_type'] = undefined;

/**
 * @member {String} bank_name
 */
PayoutMethodDetailsUSDBank.prototype['bank_name'] = undefined;

/**
 * @member {String} routing_number
 */
PayoutMethodDetailsUSDBank.prototype['routing_number'] = undefined;

/**
 * @member {String} swift_code
 */
PayoutMethodDetailsUSDBank.prototype['swift_code'] = undefined;

/**
 * @member {String} iban
 */
PayoutMethodDetailsUSDBank.prototype['iban'] = undefined;

/**
 * @member {String} street
 */
PayoutMethodDetailsUSDBank.prototype['street'] = undefined;

/**
 * @member {module:Model/PayoutMethodTransferReasonEnum} transfer_reason
 */
PayoutMethodDetailsUSDBank.prototype['transfer_reason'] = undefined;

/**
 * @member {module:Model/PayoutMethodCountryEnum} country
 */
PayoutMethodDetailsUSDBank.prototype['country'] = undefined;






export default PayoutMethodDetailsUSDBank;

