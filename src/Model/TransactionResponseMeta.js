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
import TransactionResponseExisting from './TransactionResponseExisting';

/**
 * The TransactionResponseMeta model module.
 * @module Model/TransactionResponseMeta
 * @version 1.6.0
 */
class TransactionResponseMeta {
    /**
     * Constructs a new <code>TransactionResponseMeta</code>.
     * @alias module:Model/TransactionResponseMeta
     */
    constructor() { 
        
        TransactionResponseMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionResponseMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/TransactionResponseMeta} obj Optional instance to populate.
     * @return {module:Model/TransactionResponseMeta} The populated <code>TransactionResponseMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionResponseMeta();

            if (data.hasOwnProperty('existing')) {
                obj['existing'] = TransactionResponseExisting.constructFromObject(data['existing']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/TransactionResponseExisting} existing
 */
TransactionResponseMeta.prototype['existing'] = undefined;






export default TransactionResponseMeta;

