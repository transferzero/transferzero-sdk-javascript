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
import PayoutMethodMobileProviderEnum from './PayoutMethodMobileProviderEnum';

/**
 * The PayoutMethodDetailsMobile model module.
 * @module Model/PayoutMethodDetailsMobile
 * @version 1.19.2
 */
class PayoutMethodDetailsMobile {
    /**
     * Constructs a new <code>PayoutMethodDetailsMobile</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;first_name\&quot;: \&quot;First\&quot;,   \&quot;last_name\&quot;: \&quot;Last\&quot;,   \&quot;phone_number\&quot;: \&quot;7087661234\&quot; // local or international format } &#x60;&#x60;&#x60;  Please note when sending XOF::Cash payments you should subscribe to the recipient.pending webhook, as that will broadcast the payment reference ID the customer need to use to obtain the funds. Example webhook response excerpt -  &#x60;&#x60;&#x60;JSON {   (...)   \&quot;state\&quot;:\&quot;pending\&quot;,   \&quot;metadata\&quot;: {     \&quot;payment_reference\&quot;:\&quot;9M5GJRJUBCY\&quot;   },   (...) } &#x60;&#x60;&#x60;
     * @alias module:Model/PayoutMethodDetailsMobile
     * @param firstName {String} 
     * @param lastName {String} 
     * @param phoneNumber {String} 
     */
    constructor(firstName, lastName, phoneNumber) { 
        
        PayoutMethodDetailsMobile.initialize(this, firstName, lastName, phoneNumber);
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
     * Constructs a <code>PayoutMethodDetailsMobile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsMobile} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsMobile} The populated <code>PayoutMethodDetailsMobile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsMobile();

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
        }
        return obj;
    }


}

/**
 * @member {String} first_name
 */
PayoutMethodDetailsMobile.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsMobile.prototype['last_name'] = undefined;

/**
 * @member {String} phone_number
 */
PayoutMethodDetailsMobile.prototype['phone_number'] = undefined;

/**
 * @member {module:Model/PayoutMethodMobileProviderEnum} mobile_provider
 */
PayoutMethodDetailsMobile.prototype['mobile_provider'] = undefined;






export default PayoutMethodDetailsMobile;

