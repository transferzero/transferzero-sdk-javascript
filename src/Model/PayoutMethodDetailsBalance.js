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

/**
 * The PayoutMethodDetailsBalance model module.
 * @module Model/PayoutMethodDetailsBalance
 * @version 1.37.1
 */
class PayoutMethodDetailsBalance {
    /**
     * Constructs a new <code>PayoutMethodDetailsBalance</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;reference\&quot;: \&quot;Reference\&quot; // optional } &#x60;&#x60;&#x60;
     * @alias module:Model/PayoutMethodDetailsBalance
     */
    constructor() { 
        
        PayoutMethodDetailsBalance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PayoutMethodDetailsBalance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsBalance} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsBalance} The populated <code>PayoutMethodDetailsBalance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsBalance();

            if (data.hasOwnProperty('reference')) {
                obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} reference
 */
PayoutMethodDetailsBalance.prototype['reference'] = undefined;






export default PayoutMethodDetailsBalance;

