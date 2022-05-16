$(document).ready(() => {

    let height = parseInt($('#content').height())
    let heightContent = parseInt($('#content').prop("scrollHeight"))

    console.log('Heigh Content', $('#content').height())
    console.log('Scroll Height Content', $('#content').prop("scrollHeight"))


    setInterval(() => {
        if (height < heightContent) {
            console.log('exceed')
            /* document.querySelector('#content').scrollIntoView({
                 behavior: 'smooth',
                 block:'end',
                 timeout:100
             });*/

            $('#content').animate({
                scrollTop: $('#content')[0].scrollHeight
            }, 30000);



        }
    }, 1000)

    setInterval(() => {
        if (height < heightContent) {
            $('#content').animate({
                scrollTop: 0
            }, 15000);
        }

    }, 1000)
})