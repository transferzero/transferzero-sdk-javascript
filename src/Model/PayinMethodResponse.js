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
import PayinMethod from './PayinMethod';

/**
 * The PayinMethodResponse model module.
 * @module Model/PayinMethodResponse
 * @version 1.23.4
 */
class PayinMethodResponse {
    /**
     * Constructs a new <code>PayinMethodResponse</code>.
     * @alias module:Model/PayinMethodResponse
     */
    constructor() { 
        
        PayinMethodResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PayinMethodResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayinMethodResponse} obj Optional instance to populate.
     * @return {module:Model/PayinMethodResponse} The populated <code>PayinMethodResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayinMethodResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = PayinMethod.constructFromObject(data['object']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/PayinMethod} object
 */
PayinMethodResponse.prototype['object'] = undefined;






export default PayinMethodResponse;

