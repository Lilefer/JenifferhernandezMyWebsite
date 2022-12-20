$(function(){
    $('.menu').click(function(){
        $('.navsub').slideToggle()
        $('.navcontainer').show()
    })

    $('.slideup').click(function(){
        $('body').animate({
            scrollTop:0
        },500)

    })        
})