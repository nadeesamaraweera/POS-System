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

$('#CustomerManage .save') .click(function(){
    customerId = $('CustomerManage .customerId').val();
    customerName = $('CustomerManage .customerName').val();
    customerAddress = $('CustomerManage .customerAddress').val();
    customerSalary = $('CustomerManage .customerSalary').val();

    let customer = {
       customerId : customerId,
       customerName : customerName,
       customerAddress : customerAddress,
       customerSalary : customerSalary

    }

    let validateResult = validate(customer);

    if(validateResult){
        saveCustomer(customer);
        refresh();
    }

});

