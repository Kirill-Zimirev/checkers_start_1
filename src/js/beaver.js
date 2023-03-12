const checker = ".board__row__cell__checker"
const cell = ".board__row__cell"
let count_click = 0
let count_click_levels = 0
const levels = ".top-menu-group_two__levels"
const levels_btn = ".top-menu-group_two"
$(checker).click(function(){
    count_click ++
    if(count_click % 2 == 1){
        $(checker).css({"height": "30px", "width": "30px"})
    }
    else{
        $(checker).css({"height": "45px", "width": "45px"})
    }
})
$(levels_btn).click(function(){
    count_click_levels ++
    if(count_click_levels % 2 == 1){
        $(levels).css({"display": "block"})
    }
    else{
        $(levels).css({"display": "none"})
    }
})


