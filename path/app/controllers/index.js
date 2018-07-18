'use strict';
var app = require('angular').module('pathApp');

app.controller('LoginController', require('./loginController'));
app.controller('DashboardController', require('./dashboardController'));
app.controller('HeaderController', require('./headerController'));
app.controller('NevigationController', require('./navigationController'));
app.controller('ContainerController', require('./containerController'));
app.controller('TableController', require('./tableController'));