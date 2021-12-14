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

/**
 * The PoliticallyExposedPerson model module.
 * @module Model/PoliticallyExposedPerson
 * @version 1.17.2
 */
class PoliticallyExposedPerson {
    /**
     * Constructs a new <code>PoliticallyExposedPerson</code>.
     * @alias module:Model/PoliticallyExposedPerson
     */
    constructor() { 
        
        PoliticallyExposedPerson.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PoliticallyExposedPerson</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PoliticallyExposedPerson} obj Optional instance to populate.
     * @return {module:Model/PoliticallyExposedPerson} The populated <code>PoliticallyExposedPerson</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PoliticallyExposedPerson();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'String');
            }
            if (data.hasOwnProperty('started_date')) {
                obj['started_date'] = ApiClient.convertToType(data['started_date'], 'Date');
            }
            if (data.hasOwnProperty('ended_date')) {
                obj['ended_date'] = ApiClient.convertToType(data['ended_date'], 'Date');
            }
            if (data.hasOwnProperty('sender_id')) {
                obj['sender_id'] = ApiClient.convertToType(data['sender_id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
PoliticallyExposedPerson.prototype['id'] = undefined;

/**
 * Full name of the politically exposed person 
 * @member {String} name
 */
PoliticallyExposedPerson.prototype['name'] = undefined;

/**
 * The office held by the politically exposed person 
 * @member {String} position
 */
PoliticallyExposedPerson.prototype['position'] = undefined;

/**
 * The date on which the person started holding the office 
 * @member {Date} started_date
 */
PoliticallyExposedPerson.prototype['started_date'] = undefined;

/**
 * The date on which the person ended holding the office 
 * @member {Date} ended_date
 */
PoliticallyExposedPerson.prototype['ended_date'] = undefined;

/**
 * The ID of the Sender to whom the person is attached to 
 * @member {String} sender_id
 */
PoliticallyExposedPerson.prototype['sender_id'] = undefined;

/**
 * Date and time the person was created
 * @member {Date} created_at
 */
PoliticallyExposedPerson.prototype['created_at'] = undefined;

/**
 * Date and time the person was updated
 * @member {Date} updated_at
 */
PoliticallyExposedPerson.prototype['updated_at'] = undefined;






export default PoliticallyExposedPerson;

