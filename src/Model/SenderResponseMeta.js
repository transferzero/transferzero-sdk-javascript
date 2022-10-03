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
import SenderResponseExisting from './SenderResponseExisting';

/**
 * The SenderResponseMeta model module.
 * @module Model/SenderResponseMeta
 * @version 1.23.0
 */
class SenderResponseMeta {
    /**
     * Constructs a new <code>SenderResponseMeta</code>.
     * @alias module:Model/SenderResponseMeta
     */
    constructor() { 
        
        SenderResponseMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SenderResponseMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/SenderResponseMeta} obj Optional instance to populate.
     * @return {module:Model/SenderResponseMeta} The populated <code>SenderResponseMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SenderResponseMeta();

            if (data.hasOwnProperty('existing')) {
                obj['existing'] = SenderResponseExisting.constructFromObject(data['existing']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/SenderResponseExisting} existing
 */
SenderResponseMeta.prototype['existing'] = undefined;






export default SenderResponseMeta;

