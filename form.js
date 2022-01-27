$(document).ready(function(){
    $('li.field').addClass('hide');
    $('ul').on('click','li.title',function(){
        $(this).next().slideDown(200).siblings('li.field').slideUp(200);
    })
});

function validateform()
{
    for(var i=0;i < jqueryform.elements.length;i++)
    {
        if(jqueryform.elements[i].className=="req" && jqueryform.elements[i].value.length== 0)
        {
            alert('please enter the required field');
            return false;
        }

    }
}

