import {saveCustomer} from '../model/CustomerModel.js'
import {getAllCustomer} from '../model/CustomerModel.js'
import {updateCustomer} from '../model/CustomerModel.js'
import {deleteCustomer} from  '../model/CustomerModel.js'


$(document).ready(function(){
    refresh();
});

document.querySelector('#CustomerManage #customerForm').addEventListener('submit' , function(event){
    event.preventDefault();

})

var customerId ;
var customerName;
var customerAddress;
var customerSalary;