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
import PayoutMethod from './PayoutMethod';

/**
 * The PayoutMethodResponse model module.
 * @module Model/PayoutMethodResponse
 * @version 1.6.0
 */
class PayoutMethodResponse {
    /**
     * Constructs a new <code>PayoutMethodResponse</code>.
     * @alias module:Model/PayoutMethodResponse
     */
    constructor() { 
        
        PayoutMethodResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PayoutMethodResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodResponse} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodResponse} The populated <code>PayoutMethodResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = PayoutMethod.constructFromObject(data['object']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/PayoutMethod} object
 */
PayoutMethodResponse.prototype['object'] = undefined;






export default PayoutMethodResponse;

