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
import Sender from './Sender';

/**
 * The SenderWebhookAllOf model module.
 * @module Model/SenderWebhookAllOf
 * @version 1.37.1
 */
class SenderWebhookAllOf {
    /**
     * Constructs a new <code>SenderWebhookAllOf</code>.
     * @alias module:Model/SenderWebhookAllOf
     */
    constructor() { 
        
        SenderWebhookAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SenderWebhookAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/SenderWebhookAllOf} obj Optional instance to populate.
     * @return {module:Model/SenderWebhookAllOf} The populated <code>SenderWebhookAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SenderWebhookAllOf();

            if (data.hasOwnProperty('object')) {
                obj['object'] = Sender.constructFromObject(data['object']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/Sender} object
 */
SenderWebhookAllOf.prototype['object'] = undefined;






export default SenderWebhookAllOf;

