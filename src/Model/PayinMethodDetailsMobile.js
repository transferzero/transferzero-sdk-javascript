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

/**
 * The PayinMethodDetailsMobile model module.
 * @module Model/PayinMethodDetailsMobile
 * @version 1.16.1
 */
class PayinMethodDetailsMobile {
    /**
     * Constructs a new <code>PayinMethodDetailsMobile</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;phone_number\&quot;: \&quot;+2569999999\&quot;,   \&quot;send_instructions\&quot;: true } &#x60;&#x60;&#x60;
     * @alias module:Model/PayinMethodDetailsMobile
     * @param phoneNumber {String} The phone number where the funds should be collected from
     */
    constructor(phoneNumber) { 
        
        PayinMethodDetailsMobile.initialize(this, phoneNumber);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, phoneNumber) { 
        obj['phone_number'] = phoneNumber;
    }

    /**
     * Constructs a <code>PayinMethodDetailsMobile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayinMethodDetailsMobile} obj Optional instance to populate.
     * @return {module:Model/PayinMethodDetailsMobile} The populated <code>PayinMethodDetailsMobile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayinMethodDetailsMobile();

            if (data.hasOwnProperty('phone_number')) {
                obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
            }
            if (data.hasOwnProperty('send_instructions')) {
                obj['send_instructions'] = ApiClient.convertToType(data['send_instructions'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The phone number where the funds should be collected from
 * @member {String} phone_number
 */
PayinMethodDetailsMobile.prototype['phone_number'] = undefined;

/**
 * States whether to send out the instructions to the phone number on how to pay the funds or not. This shuold always be set to true, otherwise the sender might not receive a prompt for payment.
 * @member {Boolean} send_instructions
 */
PayinMethodDetailsMobile.prototype['send_instructions'] = undefined;






export default PayinMethodDetailsMobile;

