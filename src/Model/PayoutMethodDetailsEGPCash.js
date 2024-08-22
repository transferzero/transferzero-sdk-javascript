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
 * The PayoutMethodDetailsEGPCash model module.
 * @module Model/PayoutMethodDetailsEGPCash
 * @version 1.36.4
 */
class PayoutMethodDetailsEGPCash {
    /**
     * Constructs a new <code>PayoutMethodDetailsEGPCash</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;first_name\&quot;: \&quot;First\&quot;,   \&quot;middle_name\&quot;: \&quot;Middle\&quot;,   \&quot;last_name\&quot;: \&quot;Last\&quot;,   \&quot;phone_number\&quot;: \&quot;+201023456789\&quot;,   \&quot;street\&quot;: \&quot;1 Main Street\&quot;,   \&quot;transfer_reason\&quot;: \&quot;personal_account\&quot;,   \&quot;email\&quot;: \&quot;recipient@email.com\&quot;, // Optional   \&quot;reference\&quot;: \&quot;3414006608\&quot; // Optional reference that&#39;ll appear on the recipient pickup notification (if provided must be unique and exactly 10 digits long) }
     * @alias module:Model/PayoutMethodDetailsEGPCash
     * @param firstName {String} 
     * @param middleName {String} 
     * @param lastName {String} 
     * @param phoneNumber {String} 
     * @param street {String} 
     * @param transferReason {module:Model/PayoutMethodTransferReasonEnum} 
     */
    constructor(firstName, middleName, lastName, phoneNumber, street, transferReason) { 
        
        PayoutMethodDetailsEGPCash.initialize(this, firstName, middleName, lastName, phoneNumber, street, transferReason);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, middleName, lastName, phoneNumber, street, transferReason) { 
        obj['first_name'] = firstName;
        obj['middle_name'] = middleName;
        obj['last_name'] = lastName;
        obj['phone_number'] = phoneNumber;
        obj['street'] = street;
        obj['transfer_reason'] = transferReason;
    }

    /**
     * Constructs a <code>PayoutMethodDetailsEGPCash</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsEGPCash} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsEGPCash} The populated <code>PayoutMethodDetailsEGPCash</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsEGPCash();

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
            if (data.hasOwnProperty('street')) {
                obj['street'] = ApiClient.convertToType(data['street'], 'String');
            }
            if (data.hasOwnProperty('transfer_reason')) {
                obj['transfer_reason'] = PayoutMethodTransferReasonEnum.constructFromObject(data['transfer_reason']);
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('reference')) {
                obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} first_name
 */
PayoutMethodDetailsEGPCash.prototype['first_name'] = undefined;

/**
 * @member {String} middle_name
 */
PayoutMethodDetailsEGPCash.prototype['middle_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsEGPCash.prototype['last_name'] = undefined;

/**
 * @member {String} phone_number
 */
PayoutMethodDetailsEGPCash.prototype['phone_number'] = undefined;

/**
 * @member {String} street
 */
PayoutMethodDetailsEGPCash.prototype['street'] = undefined;

/**
 * @member {module:Model/PayoutMethodTransferReasonEnum} transfer_reason
 */
PayoutMethodDetailsEGPCash.prototype['transfer_reason'] = undefined;

/**
 * @member {String} email
 */
PayoutMethodDetailsEGPCash.prototype['email'] = undefined;

/**
 * @member {String} reference
 */
PayoutMethodDetailsEGPCash.prototype['reference'] = undefined;






export default PayoutMethodDetailsEGPCash;

