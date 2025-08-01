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
 * The RecipientResponse model module.
 * @module Model/RecipientResponse
 * @version 1.37.1
 */
class RecipientResponse {
    /**
     * Constructs a new <code>RecipientResponse</code>.
     * @alias module:Model/RecipientResponse
     */
    constructor() { 
        
        RecipientResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RecipientResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/RecipientResponse} obj Optional instance to populate.
     * @return {module:Model/RecipientResponse} The populated <code>RecipientResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecipientResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = Recipient.constructFromObject(data['object']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/Recipient} object
 */
RecipientResponse.prototype['object'] = undefined;






export default RecipientResponse;

