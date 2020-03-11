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
 * The PayoutMethodDetailsBTC model module.
 * @module Model/PayoutMethodDetailsBTC
 * @version 1.6.0
 */
class PayoutMethodDetailsBTC {
    /**
     * Constructs a new <code>PayoutMethodDetailsBTC</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;first_name\&quot;: \&quot;First\&quot;,   \&quot;last_name\&quot;: \&quot;Last\&quot;,   \&quot;name\&quot;: \&quot;Full Name\&quot;   \&quot;address\&quot;: \&quot;n4VQ5YdHf7hLQ2gWQYYrcxoE5B7nWuDFNF\&quot; }
     * @alias module:Model/PayoutMethodDetailsBTC
     * @param firstName {String} 
     * @param lastName {String} 
     * @param name {String} 
     * @param address {String} 
     */
    constructor(firstName, lastName, name, address) { 
        
        PayoutMethodDetailsBTC.initialize(this, firstName, lastName, name, address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, name, address) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['name'] = name;
        obj['address'] = address;
    }

    /**
     * Constructs a <code>PayoutMethodDetailsBTC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsBTC} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsBTC} The populated <code>PayoutMethodDetailsBTC</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsBTC();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} first_name
 */
PayoutMethodDetailsBTC.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsBTC.prototype['last_name'] = undefined;

/**
 * @member {String} name
 */
PayoutMethodDetailsBTC.prototype['name'] = undefined;

/**
 * @member {String} address
 */
PayoutMethodDetailsBTC.prototype['address'] = undefined;






export default PayoutMethodDetailsBTC;

