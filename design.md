The basic design is to provide an exported function for each implemented feature and to reuse the options across each listing funtion.

The API connection is managed by the SDK code and applies the authorization headers when necessary for API call.  It was noted that the 
sorting, pagination, and filtering options were applied universally, so I created a generic object for all functions to use to ease testing.

