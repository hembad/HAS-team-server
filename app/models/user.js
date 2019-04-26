/**
 *                                                                                                # 
 * Copyright (c) 2019 McKinley & Rice, Inc.                                                       # 
 * This product includes software developed at                                                    # 
 * The McKinley & Rice, Inc. (https://www.mckinleyrice.com/).                                     # 
 * This material is proprietary to The McKinley & Rice.                                           # 
 * All rights reserved. The methods and techniques described                                      # 
 * herein are considered trade secrets and/or confidential.                                       # 
 * Reproduction or distribution, in whole or in part, is forbidden                                # 
 * except by express written permission of The McKinley & Rice.                                   # 
 *                                                                                                # 
 * File: c:\Users\HEMBAD\Desktop\new\app\models\user.js                                           # 
 * Created Date: Friday, April 26th 2019, 3:36:52 pm                                              # 
 * Author: Hemprasad Badgujar                                                                     # 
 * -----                                                                                          # 
 * Last Modified: Friday April 26th 2019 5:08:53 pm                                               # 
 * Modified By: Hemprasad Badgujar at <admin@mckinleyrice.com>                                    # 
 * -----                                                                                          # 
 * HISTORY:                                                                                       # 
 * Date      	By	Comments                                                                      # 
 * ----------	---	----------------------------------------------------------                    # 
 */


// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User',new Schema({ 
    name: String, 
    password: String, 
    admin: Boolean 
}));