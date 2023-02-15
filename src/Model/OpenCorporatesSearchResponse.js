/**
 * BitPesa Private API
 * API specification used for internal BitPesa endpoints
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
import OpenCorporatesSearch from './OpenCorporatesSearch';

/**
 * The OpenCorporatesSearchResponse model module.
 * @module Model/OpenCorporatesSearchResponse
 * @version 1.25.0
 */
class OpenCorporatesSearchResponse {
    /**
     * Constructs a new <code>OpenCorporatesSearchResponse</code>.
     * @alias module:Model/OpenCorporatesSearchResponse
     */
    constructor() { 
        
        OpenCorporatesSearchResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OpenCorporatesSearchResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/OpenCorporatesSearchResponse} obj Optional instance to populate.
     * @return {module:Model/OpenCorporatesSearchResponse} The populated <code>OpenCorporatesSearchResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OpenCorporatesSearchResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = OpenCorporatesSearch.constructFromObject(data['object']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/OpenCorporatesSearch} object
 */
OpenCorporatesSearchResponse.prototype['object'] = undefined;






export default OpenCorporatesSearchResponse;
