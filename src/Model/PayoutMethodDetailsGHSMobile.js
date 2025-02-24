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
import PayoutMethodTransferReasonEnum from './PayoutMethodTransferReasonEnum';

/**
 * The PayoutMethodDetailsGHSMobile model module.
 * @module Model/PayoutMethodDetailsGHSMobile
 * @version 1.36.6
 */
class PayoutMethodDetailsGHSMobile {
    /**
     * Constructs a new <code>PayoutMethodDetailsGHSMobile</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;first_name\&quot;: \&quot;First\&quot;,   \&quot;last_name\&quot;: \&quot;Last\&quot;,   \&quot;phone_number\&quot;: \&quot;+233302123456\&quot;, // E.164 international format   \&quot;mobile_provider\&quot;: \&quot;vodafone\&quot;,   \&quot;transfer_reason\&quot;: \&quot;third_party_person_account\&quot; } &#x60;&#x60;&#x60;
     * @alias module:Model/PayoutMethodDetailsGHSMobile
     * @param firstName {String} 
     * @param lastName {String} 
     * @param phoneNumber {String} 
     */
    constructor(firstName, lastName, phoneNumber) { 
        
        PayoutMethodDetailsGHSMobile.initialize(this, firstName, lastName, phoneNumber);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, phoneNumber) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['phone_number'] = phoneNumber;
    }

    /**
     * Constructs a <code>PayoutMethodDetailsGHSMobile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsGHSMobile} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsGHSMobile} The populated <code>PayoutMethodDetailsGHSMobile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsGHSMobile();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('phone_number')) {
                obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
            }
            if (data.hasOwnProperty('mobile_provider')) {
                obj['mobile_provider'] = PayoutMethodMobileProviderEnum.constructFromObject(data['mobile_provider']);
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
PayoutMethodDetailsGHSMobile.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsGHSMobile.prototype['last_name'] = undefined;

/**
 * @member {String} phone_number
 */
PayoutMethodDetailsGHSMobile.prototype['phone_number'] = undefined;

/**
 * @member {module:Model/PayoutMethodMobileProviderEnum} mobile_provider
 */
PayoutMethodDetailsGHSMobile.prototype['mobile_provider'] = undefined;

/**
 * @member {module:Model/PayoutMethodTransferReasonEnum} transfer_reason
 */
PayoutMethodDetailsGHSMobile.prototype['transfer_reason'] = undefined;






export default PayoutMethodDetailsGHSMobile;

