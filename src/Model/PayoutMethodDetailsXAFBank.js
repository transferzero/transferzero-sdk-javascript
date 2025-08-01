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
import PayoutMethodTransferReasonEnum from './PayoutMethodTransferReasonEnum';

/**
 * The PayoutMethodDetailsXAFBank model module.
 * @module Model/PayoutMethodDetailsXAFBank
 * @version 1.37.1
 */
class PayoutMethodDetailsXAFBank {
    /**
     * Constructs a new <code>PayoutMethodDetailsXAFBank</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;first_name\&quot;: \&quot;First\&quot;,   \&quot;last_name\&quot;: \&quot;Last\&quot;,   \&quot;iban\&quot;: \&quot;CM2110033052090901100045910\&quot;, # IBAN format   \&quot;bank_account\&quot;: \&quot;09011000459\&quot;,   \&quot;bank_name\&quot;: \&quot;United Bank for Africa - Cameroon\&quot;,   \&quot;bank_country\&quot;: \&quot;CM\&quot;, # ISO country code for Cameroon   \&quot;bank_code\&quot;: \&quot;10033\&quot;,   \&quot;sort_code\&quot;: \&quot;10\&quot;,   \&quot;transfer_reason\&quot;: \&quot;personal_account\&quot; } &#x60;&#x60;&#x60;  See [XAF Bank](https://docs.transferzero.com/docs/payout-details/#xafbank) documentation for the bank_code and transfer_reason lists
     * @alias module:Model/PayoutMethodDetailsXAFBank
     * @param firstName {String} 
     * @param lastName {String} 
     * @param iban {String} 
     */
    constructor(firstName, lastName, iban) { 
        
        PayoutMethodDetailsXAFBank.initialize(this, firstName, lastName, iban);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, iban) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['iban'] = iban;
    }

    /**
     * Constructs a <code>PayoutMethodDetailsXAFBank</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsXAFBank} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsXAFBank} The populated <code>PayoutMethodDetailsXAFBank</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsXAFBank();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('iban')) {
                obj['iban'] = ApiClient.convertToType(data['iban'], 'String');
            }
            if (data.hasOwnProperty('bank_account')) {
                obj['bank_account'] = ApiClient.convertToType(data['bank_account'], 'String');
            }
            if (data.hasOwnProperty('bank_name')) {
                obj['bank_name'] = ApiClient.convertToType(data['bank_name'], 'String');
            }
            if (data.hasOwnProperty('bank_country')) {
                obj['bank_country'] = ApiClient.convertToType(data['bank_country'], 'String');
            }
            if (data.hasOwnProperty('bank_code')) {
                obj['bank_code'] = ApiClient.convertToType(data['bank_code'], 'String');
            }
            if (data.hasOwnProperty('sort_code')) {
                obj['sort_code'] = ApiClient.convertToType(data['sort_code'], 'String');
            }
            if (data.hasOwnProperty('transfer_reason')) {
                obj['transfer_reason'] = PayoutMethodTransferReasonEnum.constructFromObject(data['transfer_reason']);
            }
            if (data.hasOwnProperty('birth_date')) {
                obj['birth_date'] = ApiClient.convertToType(data['birth_date'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} first_name
 */
PayoutMethodDetailsXAFBank.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsXAFBank.prototype['last_name'] = undefined;

/**
 * @member {String} iban
 */
PayoutMethodDetailsXAFBank.prototype['iban'] = undefined;

/**
 * @member {String} bank_account
 */
PayoutMethodDetailsXAFBank.prototype['bank_account'] = undefined;

/**
 * @member {String} bank_name
 */
PayoutMethodDetailsXAFBank.prototype['bank_name'] = undefined;

/**
 * @member {String} bank_country
 */
PayoutMethodDetailsXAFBank.prototype['bank_country'] = undefined;

/**
 * @member {String} bank_code
 */
PayoutMethodDetailsXAFBank.prototype['bank_code'] = undefined;

/**
 * @member {String} sort_code
 */
PayoutMethodDetailsXAFBank.prototype['sort_code'] = undefined;

/**
 * @member {module:Model/PayoutMethodTransferReasonEnum} transfer_reason
 */
PayoutMethodDetailsXAFBank.prototype['transfer_reason'] = undefined;

/**
 * Date of birth of recipient
 * @member {Date} birth_date
 */
PayoutMethodDetailsXAFBank.prototype['birth_date'] = undefined;






export default PayoutMethodDetailsXAFBank;

