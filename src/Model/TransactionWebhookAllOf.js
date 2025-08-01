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
import Transaction from './Transaction';

/**
 * The TransactionWebhookAllOf model module.
 * @module Model/TransactionWebhookAllOf
 * @version 1.37.1
 */
class TransactionWebhookAllOf {
    /**
     * Constructs a new <code>TransactionWebhookAllOf</code>.
     * @alias module:Model/TransactionWebhookAllOf
     */
    constructor() { 
        
        TransactionWebhookAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionWebhookAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/TransactionWebhookAllOf} obj Optional instance to populate.
     * @return {module:Model/TransactionWebhookAllOf} The populated <code>TransactionWebhookAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionWebhookAllOf();

            if (data.hasOwnProperty('object')) {
                obj['object'] = Transaction.constructFromObject(data['object']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/Transaction} object
 */
TransactionWebhookAllOf.prototype['object'] = undefined;






export default TransactionWebhookAllOf;

