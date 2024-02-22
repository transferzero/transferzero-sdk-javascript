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
import PayoutMethodTransferReasonEnum from './PayoutMethodTransferReasonEnum';

/**
 * The PayoutMethodDetailsXOFBank model module.
 * @module Model/PayoutMethodDetailsXOFBank
 * @version 1.34.2
 */
class PayoutMethodDetailsXOFBank {
    /**
     * Constructs a new <code>PayoutMethodDetailsXOFBank</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;first_name\&quot;: \&quot;First\&quot;,   \&quot;last_name\&quot;: \&quot;Last\&quot;,   \&quot;iban\&quot;: \&quot;BJ0610100100144390000769\&quot;, # BBAN format   \&quot;bank_name\&quot;: \&quot;Bank Of Africa Bénin\&quot;,   \&quot;bank_country\&quot;: \&quot;BJ\&quot;, # ISO country code for Benin   \&quot;bank_code\&quot;: \&quot;BJ061\&quot;,   \&quot;transfer_reason\&quot;: \&quot;personal_account\&quot; } &#x60;&#x60;&#x60;  See [XOF Bank](https://docs.transferzero.com/docs/payout-details/#xofbank) documentation for the bank_code and transfer_reason lists
     * @alias module:Model/PayoutMethodDetailsXOFBank
     * @param firstName {String} 
     * @param lastName {String} 
     * @param iban {String} 
     */
    constructor(firstName, lastName, iban) { 
        
        PayoutMethodDetailsXOFBank.initialize(this, firstName, lastName, iban);
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
     * Constructs a <code>PayoutMethodDetailsXOFBank</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsXOFBank} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsXOFBank} The populated <code>PayoutMethodDetailsXOFBank</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsXOFBank();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('iban')) {
                obj['iban'] = ApiClient.convertToType(data['iban'], 'String');
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
            if (data.hasOwnProperty('transfer_reason')) {
                obj['transfer_reason'] = PayoutMethodTransferReasonEnum.constructFromObject(data['transfer_reason']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} first_name
 */
PayoutMethodDetailsXOFBank.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsXOFBank.prototype['last_name'] = undefined;

/**
 * @member {String} iban
 */
PayoutMethodDetailsXOFBank.prototype['iban'] = undefined;

/**
 * @member {String} bank_name
 */
PayoutMethodDetailsXOFBank.prototype['bank_name'] = undefined;

/**
 * @member {String} bank_country
 */
PayoutMethodDetailsXOFBank.prototype['bank_country'] = undefined;

/**
 * @member {String} bank_code
 */
PayoutMethodDetailsXOFBank.prototype['bank_code'] = undefined;

/**
 * @member {module:Model/PayoutMethodTransferReasonEnum} transfer_reason
 */
PayoutMethodDetailsXOFBank.prototype['transfer_reason'] = undefined;






export default PayoutMethodDetailsXOFBank;

