import { saveCustomer } from '../model/CustomerModel.js';
import { getAllCustomers } from '../model/CustomerModel.js';
import { updateCustomer } from '../model/CustomerModel.js';
import { deleteCustomer } from '../model/CustomerModel.js';

$(document).ready(function(){
    refresh();
});

document.querySelector('#CustomerManage #customerForm').addEventListener('submit', function(event){
    event.preventDefault();
});

var custId ;
var custName;
var custAddress;
var custSalary;

$('#CustomerManage .saveBtn').click(function(){

    custId = $('#CustomerManage .custId').val();
    custName = $('#CustomerManage .custName').val();
    custAddress = $('#CustomerManage .custAddress').val();
    custSalary = $('#CustomerManage .custSalary').val();

    let customer = {
        custId : custId,
        custName : custName,
        custAddress : custAddress,
        custSalary : custSalary
    }

    let validResult = validate(customer);

    if(validResult){
        saveCustomer(customer);
        refresh();
    }

});


function validate(customer){

    let valid = true;

    if((/^C0[0-9]+$/).test(customer.custId)){
        $('#CustomerManage .invalidCustId').text('');
        valid = true;
    }
    else{
        $('#CustomerManage .invalidCustId').text('Invalid Customer Id');
        valid = false;
    }

    if((/^(?:[A-Z][a-z]*)(?: [A-Z][a-z]*)*$/).test(customer.custName)){
        $('#CustomerManage .invalidCustName').text('');
        
        if(valid){
            valid = true;
        }
    }

    else{
        $('#CustomerManage .invalidCustName').text('Invalid Customer Name');
        valid = false;
    }

    if((/^[A-Z][a-z, ]+$/).test(customer.custAddress)){
        $('#CustomerManage .invalidCustAddress').text('');
        
        if(valid){
            valid = true;
        }
    }

    else{
        $('#CustomerManage .invalidCustAddress').text('Invalid Customer Address');
        valid = false;
    }

    if(customer.custSalary != null && customer.custSalary > 0){
        $('#CustomerManage .invalidCustSalary').text('');
        if(valid){
            valid = true;
        }
    }
    
    else{
        $('#CustomerManage .invalidCustSalary').text('Invalid Customer Salary');
        valid = false;
    }

    let customers = getAllCustomers();
    for(let i = 0; i < customers.length; i++){
        if(customers[i].custId === customer.custId){
            $('#CustomerManage .invalidCustId').text('Customer Id Already Exists');
            valid = false;
        }
    }

    return valid;
}

function loadTable(customer){
    $('#CustomerManage .tableRow').append(
        '<tr> ' +
            '<td>' + customer.custId + '</td>' +
            '<td>' + customer.custName + '</td>' +
            '<td>' + customer.custAddress + '</td>' +
            '<td>' + customer.custSalary + '</td>' +
        '</tr>' 
    );
}

    
