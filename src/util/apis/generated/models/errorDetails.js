/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a ErrorDetails.
 */
class ErrorDetails {
  /**
   * Create a ErrorDetails.
   * @member {string} code Possible values include: 'BadRequest', 'Conflict',
   * 'NotAcceptable', 'NotFound', 'InternalServerError', 'Unauthorized',
   * 'TooManyRequests'
   * @member {string} message
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorDetails
   *
   * @returns {object} metadata of ErrorDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorDetails',
      type: {
        name: 'Composite',
        className: 'ErrorDetails',
        modelProperties: {
          code: {
            required: true,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorDetails;
