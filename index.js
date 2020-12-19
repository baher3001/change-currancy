/*var dollars = document.querySelector('.form-control');
var convert = document.querySelector('.btn-primary');
var res = document.getElementById('res2');
*/

$('.btn-danger').click(function()
{
    $('#res2').text($('.form-control').val()*20.64 +'    ' +'L.E' );
})