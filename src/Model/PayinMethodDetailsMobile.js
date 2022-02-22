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
 * The PayinMethodDetailsMobile model module.
 * @module Model/PayinMethodDetailsMobile
 * @version 1.19.1
 */
class PayinMethodDetailsMobile {
    /**
     * Constructs a new <code>PayinMethodDetailsMobile</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;phone_number\&quot;: \&quot;+2569999999\&quot;, } &#x60;&#x60;&#x60;
     * @alias module:Model/PayinMethodDetailsMobile
     */
    constructor() { 
        
        PayinMethodDetailsMobile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
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
            if (data.hasOwnProperty('mobile_provider')) {
                obj['mobile_provider'] = PayoutMethodMobileProviderEnum.constructFromObject(data['mobile_provider']);
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
 * @member {module:Model/PayoutMethodMobileProviderEnum} mobile_provider
 */
PayinMethodDetailsMobile.prototype['mobile_provider'] = undefined;






export default PayinMethodDetailsMobile;

