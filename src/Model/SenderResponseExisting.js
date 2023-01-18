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
import Sender from './Sender';

/**
 * The SenderResponseExisting model module.
 * @module Model/SenderResponseExisting
 * @version 1.23.5
 */
class SenderResponseExisting {
    /**
     * Constructs a new <code>SenderResponseExisting</code>.
     * @alias module:Model/SenderResponseExisting
     */
    constructor() { 
        
        SenderResponseExisting.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SenderResponseExisting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/SenderResponseExisting} obj Optional instance to populate.
     * @return {module:Model/SenderResponseExisting} The populated <code>SenderResponseExisting</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SenderResponseExisting();

            if (data.hasOwnProperty('sender')) {
                obj['sender'] = Sender.constructFromObject(data['sender']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/Sender} sender
 */
SenderResponseExisting.prototype['sender'] = undefined;






export default SenderResponseExisting;

