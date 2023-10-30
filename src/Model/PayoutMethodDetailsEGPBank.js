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
 * The PayoutMethodDetailsEGPBank model module.
 * @module Model/PayoutMethodDetailsEGPBank
 * @version 1.32.0
 */
class PayoutMethodDetailsEGPBank {
    /**
     * Constructs a new <code>PayoutMethodDetailsEGPBank</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;first_name\&quot;: \&quot;First\&quot;,   \&quot;last_name\&quot;: \&quot;Last\&quot;,   \&quot;street\&quot;: \&quot;1 Main Street\&quot;,   \&quot;phone_number\&quot;: \&quot;+201023456789\&quot;,   \&quot;bank_account\&quot;: \&quot;1234567890\&quot;,   \&quot;bank_code\&quot;: \&quot;0030\&quot;,   \&quot;transfer_reason\&quot;: \&quot;personal_account\&quot; } &#x60;&#x60;&#x60; See [EGP Bank](https://docs.transferzero.com/docs/payout-details/#egpbank) documentation for the bank_code list
     * @alias module:Model/PayoutMethodDetailsEGPBank
     * @param firstName {String} 
     * @param lastName {String} 
     * @param street {String} 
     * @param phoneNumber {String} 
     * @param bankAccount {String} 
     * @param bankCode {String} 
     * @param transferReason {module:Model/PayoutMethodTransferReasonEnum} 
     */
    constructor(firstName, lastName, street, phoneNumber, bankAccount, bankCode, transferReason) { 
        
        PayoutMethodDetailsEGPBank.initialize(this, firstName, lastName, street, phoneNumber, bankAccount, bankCode, transferReason);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, street, phoneNumber, bankAccount, bankCode, transferReason) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['street'] = street;
        obj['phone_number'] = phoneNumber;
        obj['bank_account'] = bankAccount;
        obj['bank_code'] = bankCode;
        obj['transfer_reason'] = transferReason;
    }

    /**
     * Constructs a <code>PayoutMethodDetailsEGPBank</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsEGPBank} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsEGPBank} The populated <code>PayoutMethodDetailsEGPBank</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsEGPBank();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('street')) {
                obj['street'] = ApiClient.convertToType(data['street'], 'String');
            }
            if (data.hasOwnProperty('phone_number')) {
                obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
            }
            if (data.hasOwnProperty('bank_account')) {
                obj['bank_account'] = ApiClient.convertToType(data['bank_account'], 'String');
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
PayoutMethodDetailsEGPBank.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsEGPBank.prototype['last_name'] = undefined;

/**
 * @member {String} street
 */
PayoutMethodDetailsEGPBank.prototype['street'] = undefined;

/**
 * @member {String} phone_number
 */
PayoutMethodDetailsEGPBank.prototype['phone_number'] = undefined;

/**
 * @member {String} bank_account
 */
PayoutMethodDetailsEGPBank.prototype['bank_account'] = undefined;

/**
 * @member {String} bank_code
 */
PayoutMethodDetailsEGPBank.prototype['bank_code'] = undefined;

/**
 * @member {module:Model/PayoutMethodTransferReasonEnum} transfer_reason
 */
PayoutMethodDetailsEGPBank.prototype['transfer_reason'] = undefined;






export default PayoutMethodDetailsEGPBank;

