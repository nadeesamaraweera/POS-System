import {saveCustomer} from '../model/CustomerModel.js'
import {getAllCustomer} from '../model/CustomerModel.js'
import {updateCustomer} from '../model/CustomerModel.js'
import {deleteCustomer} from  '../model/CustomerModel.js'


$(document).ready(function(){
    refresh();
});

document.querySelector('#CustomerManage #CustomerForm').addEventListener('submit' , function(event){
    event.preventDefault();

});

var customerId ;
var customerName;
var customerAddress;
var customerSalary;

$('#CustomerManage .save').click(function(){
    customerId = $('#CustomerManage .customerId').val();
    customerName = $('#CustomerManage .customerName').val();
    customerAddress = $('#CustomerManage .customerAddress').val();
    customerSalary = $('#CustomerManage .customerSalary').val();

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

function validate(customer){

    let validData = true;

    if((/^C0[0-9]+$/).test(customer.customerId)){
        $('#CustomerManage .invalidCustomerId').text('');
        validData =true;
    }else{
        $('#CustomerManage .invalidCustomerId').text('Invalid Customer Id');
        validData =false;
    }


    if((/^(?:[A-Z][a-z]*)(?: [A-Z][a-z]*)*$/).test(customer.customerName)){
        $('#CustomerManage .invalidCustomerName').text('');

        if(validData){
            validData = true;
        }

    }else{
        $('#CustomerManage .invalidCustomerName').text('Invalid Customer Name');
        validData =false;
    }

    

    if((/^[A-Z][a-z, ]+$/).test(customer.customerAddress)){
        $('#CustomerManage .invalidCustomerAddress').text('');

        if(validData){
            validData = true;
        }

    }else{
        $('#CustomerManage .invalidCustomerAddress').text('Invalid Customer Address');
        validData =false;
    }


    if(customer.customerSalary !=null && customer.customerSalary > 0){
        $('#CustomerManage .invalidCustomerSalary').text('');

        if(validData){
            validData = true;
        }

    }else{
        $('#CustomerManage .invalidCustomerSalary').text('Invalid Customer Salary');
        validData =false;
    }

    let customers = getAllCustomer();
    for(let i =0; i<customers.length; i++){
        if(customers[i].customerId === customer.customerId){
            $('#CustomerManage .invalidCustomerId').text('Customer Id Already Exists');
            validData = false;
        }
    }
     
    return validData;

    }

    function loadTable (customer){
        $('#CustomerManage .tableRow').append(
            '<tr> ' +
                '<td>' + customer.customerId + '</td>' +
                '<td>' + customer.customerName + '</td>' +
                '<td>' + customer.customerAddress + '</td>' +
                '<td>' + customer.customerSalary + '</td>' +
            '</tr>' 
        );
    }

    function matchNumber(id){
        var match = id.match(/CO(\d+)/);
        if(match && match.length > 1){
            return parseInt([1]);
        }
        return null;
    }

    
