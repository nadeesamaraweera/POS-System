$(document).ready(function(){
    $('#homepage').show();

    $('.nav-link').click(function(event){
        event.preventDefault();

        $('section').hide();

        var targetsection =  $(this).attr('href');

        $(targetsection).show();
        switch(targetsection){
            case '#CustomerManage' :
                $('.navbar').text('Customer Manage');
                break;
            case '#ItemManage' :
                $('.navbar').text('Item Manage');
                break;
            case '#OrderManage' :
                $('.navbar').text('Order Manage');
                break;
            default:
                $('.navbar').text('Home Page');
        }
    })
})