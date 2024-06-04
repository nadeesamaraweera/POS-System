import { getAllOrders } from "../model/OrderModel.js";



var itemId;
var itemQty;
var orderQty;

$(document).ready(function () {
    refresh();
});

$('.orderManageBtn').click(function(){
    refresh();
});


function refresh(){
    $('#OrderManage .orderId').val(generateId());
    $('#OrderManage .orderDate').val(new Date().toISOString().split('T')[0]);
    loadCustomer();
    loadItems();
    $('#OrderManage .Total').text("");
    $('#OrderManage .SubTotal').text("");
    $('#OrderManage .SubTotal').text("");
    $('#OrderManage .Balance').val("");
    $('#OrderManage .Cash').val('');
    $('#OrderManage .Discount').val('');
}

function extractNumber(id){
    var match = id.match(/OD(\d+)/);
    if(match && match.length > 1){
        return match[1];
    }
    return null;
}

function generateId(){
    let orders = getAllOrders();

    // alert(orders.length);
    
    if(orders.length === 0){
        return 'OD001';
    }
    else{
        // alert('awa');
        let orderId = orders[orders.length - 1].orderId;
        let number = extractNumber(orderId);
        number++;
        // alert('OD00' + number);
        return 'OD00' + number;
    }
}
