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
import SenderResponseMeta from './SenderResponseMeta';

/**
 * The SenderResponse model module.
 * @module Model/SenderResponse
 * @version 1.37.1
 */
class SenderResponse {
    /**
     * Constructs a new <code>SenderResponse</code>.
     * @alias module:Model/SenderResponse
     */
    constructor() { 
        
        SenderResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SenderResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/SenderResponse} obj Optional instance to populate.
     * @return {module:Model/SenderResponse} The populated <code>SenderResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SenderResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = Sender.constructFromObject(data['object']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = SenderResponseMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/Sender} object
 */
SenderResponse.prototype['object'] = undefined;

/**
 * @member {module:Model/SenderResponseMeta} meta
 */
SenderResponse.prototype['meta'] = undefined;






export default SenderResponse;

