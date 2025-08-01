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
import Recipient from './Recipient';

/**
 * The RecipientRequest model module.
 * @module Model/RecipientRequest
 * @version 1.37.1
 */
class RecipientRequest {
    /**
     * Constructs a new <code>RecipientRequest</code>.
     * @alias module:Model/RecipientRequest
     */
    constructor() { 
        
        RecipientRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RecipientRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/RecipientRequest} obj Optional instance to populate.
     * @return {module:Model/RecipientRequest} The populated <code>RecipientRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecipientRequest();

            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = Recipient.constructFromObject(data['recipient']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/Recipient} recipient
 */
RecipientRequest.prototype['recipient'] = undefined;






export default RecipientRequest;

