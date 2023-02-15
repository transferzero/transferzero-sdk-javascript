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
import PoliticallyExposedPerson from './PoliticallyExposedPerson';

/**
 * The PoliticallyExposedPersonListResponse model module.
 * @module Model/PoliticallyExposedPersonListResponse
 * @version 1.25.0
 */
class PoliticallyExposedPersonListResponse {
    /**
     * Constructs a new <code>PoliticallyExposedPersonListResponse</code>.
     * @alias module:Model/PoliticallyExposedPersonListResponse
     */
    constructor() { 
        
        PoliticallyExposedPersonListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PoliticallyExposedPersonListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PoliticallyExposedPersonListResponse} obj Optional instance to populate.
     * @return {module:Model/PoliticallyExposedPersonListResponse} The populated <code>PoliticallyExposedPersonListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PoliticallyExposedPersonListResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], [PoliticallyExposedPerson]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:Model/PoliticallyExposedPerson>} object
 */
PoliticallyExposedPersonListResponse.prototype['object'] = undefined;






export default PoliticallyExposedPersonListResponse;
