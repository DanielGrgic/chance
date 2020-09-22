var a = 0;
var b = 0;
var c = 0;
var d = 0;
var number1 = new Boolean(true);
var number2 = new Boolean(true);
var number3 = new Boolean(true);
var number4 = new Boolean(true);
var check = false;
var e = 0;

function calculate(){
    let element = document.getElementById("input")
    value = element.value
    
    var elem = document.getElementById("select_type"),
    selectedNode = elem.options[elem.selectedIndex];
    if(selectedNode.value === "ov"){
        if(value > 3000){
            document.getElementsByClassName("item_message")[0].style.display = "block"
            return;
        }
        document.getElementsByClassName("item_message")[0].style.display = "none"
        let result 
        result = (value * 191)/100 ;
        console.log(result)
        
        document.getElementsByClassName("possible-win")[0].innerHTML = result - value;
        document.getElementsByClassName("stake")[0].innerHTML = value;
        document.getElementsByClassName("possible-win")[1].innerHTML = result - value;

        
    }
    if(selectedNode.value === "ovs"){
        if(value > 5000){
            document.getElementsByClassName("item_message")[2].style.display = "block"
            return;
        }
        document.getElementsByClassName("item_message")[2].style.display = "none"
        let result 
        result = (value * 191)/100 ;
        console.log(result)
        
        document.getElementsByClassName("possible-win")[0].innerHTML = result - value;
        document.getElementsByClassName("stake")[0].innerHTML = value;
        document.getElementsByClassName("possible-win")[1].innerHTML = result - value;
    }
    if(selectedNode.value === "un"){
        if(value > 3000){
            document.getElementsByClassName("item_message")[0].style.display = "block"
            return;
        }
        document.getElementsByClassName("item_message")[0].style.display = "none"
        let result 
        result = (value * 191)/100 ;
        console.log(result)
        
        document.getElementsByClassName("possible-win")[0].innerHTML = result - value;
        document.getElementsByClassName("stake")[0].innerHTML = value;
        document.getElementsByClassName("possible-win")[1].innerHTML = result - value;

        
    }
    if(selectedNode.value === "uns"){
        if(value > 5000){
            document.getElementsByClassName("item_message")[2].style.display = "block"
            return;
        }
        document.getElementsByClassName("item_message")[2].style.display = "none"
        let result 
        result = (value * 191)/100 ;
        console.log(result)
        
        document.getElementsByClassName("possible-win")[0].innerHTML = result - value;
        document.getElementsByClassName("stake")[0].innerHTML = value;
        document.getElementsByClassName("possible-win")[1].innerHTML = result - value;
    }
    if(selectedNode.value === "od"){
        if(value > 1500){
            document.getElementsByClassName("item_message")[1].style.display = "block"
            return;
        }
        document.getElementsByClassName("item_message")[1].style.display = "none"
        let result 
        result = (value * 191)/100 ;
        console.log(result)
        
        document.getElementsByClassName("possible-win")[0].innerHTML = result - value;
        document.getElementsByClassName("stake")[0].innerHTML = value;
        document.getElementsByClassName("possible-win")[1].innerHTML = result - value;
    }
    if(selectedNode.value === "ev"){
        if(value > 1500){
            document.getElementsByClassName("item_message")[1].style.display = "block"
            return;
        }
        document.getElementsByClassName("item_message")[1].style.display = "none"
        let result 
        result = (value * 191)/100 ;
        console.log(result)
        
        document.getElementsByClassName("possible-win")[0].innerHTML = result - value;
        document.getElementsByClassName("stake")[0].innerHTML = value;
        document.getElementsByClassName("possible-win")[1].innerHTML = result - value;
    }
    if(selectedNode.value === "ex"){
        if(value > 1500){
            document.getElementsByClassName("item_message")[1].style.display = "block"
            return;
        }
        document.getElementsByClassName("item_message")[1].style.display = "none"
        let result 
        result = (value * 700)/100 ;
        console.log(result)
        
        document.getElementsByClassName("possible-win")[0].innerHTML = result - value;
        document.getElementsByClassName("stake")[0].innerHTML = value;
        document.getElementsByClassName("possible-win")[1].innerHTML = result - value;
    }


}

function close_right(){
    let element = document.getElementsByClassName("betslip-floating-mode-container")[0];
    element.classList.add("empty");
}

function right_bar(){
    if (e == 1){
        let element = document.getElementsByClassName("betslip-floating-mode-container")[0];
        element.classList.add("open");
        e--;
    }
    else{
        let element = document.getElementsByClassName("betslip-floating-mode-container")[0];
        element.classList.remove("open");
        e++;
    }
    
}


function type(){
    var elem = document.getElementById("select_type"),
    selectedNode = elem.options[elem.selectedIndex];
    if(selectedNode.value === "ex"){
            number1 = true;
            number2 = true;
            number3 = true;
            number4 = true;
            a = 0;
            b = 0;
            c = 0;
            d = 0;
            let element = document.getElementsByClassName("card_suit_spade")[0];
            element.classList.remove("checked_card");

            let element3 = document.getElementsByClassName("card_suit_heart")[0];
            element3.classList.remove("checked_card");

            let element1 = document.getElementsByClassName("card_suit_diamond")[0];
            element1.classList.remove("checked_card");

            let element2 = document.getElementsByClassName("card_suit_clubs")[0];
            element2.classList.remove("checked_card");

            let element5 = document.getElementsByClassName("back_suit")[0];
            element5.classList.add("spade_card_7");

            let element6 = document.getElementsByClassName("back_suit")[1];
            element6.classList.add("heart_card_7");

            let element7 = document.getElementsByClassName("back_suit")[2];
            element7.classList.add("diamond_card_7");

            let element8 = document.getElementsByClassName("back_suit")[3];
            element8.classList.add("clubs_card_7");
    }
    else{
        let element11 = document.getElementsByClassName("back_suit")[0];
            element11.classList.remove("spade_card_7");
            element11.classList.remove("spade_card_8");
            element11.classList.remove("spade_card_9");
            element11.classList.remove("spade_card_10");
            element11.classList.remove("spade_card_11");
            element11.classList.remove("spade_card_12");
            element11.classList.remove("spade_card_13");
            element11.classList.remove("spade_card_14");
        let element12 = document.getElementsByClassName("back_suit")[2];
            element12.classList.remove("diamond_card_7");
            element12.classList.remove("diamond_card_8");
            element12.classList.remove("diamond_card_9");
            element12.classList.remove("diamond_card_10");
            element12.classList.remove("diamond_card_11");
            element12.classList.remove("diamond_card_12");
            element12.classList.remove("diamond_card_13");
            element12.classList.remove("diamond_card_14");
        let element13 = document.getElementsByClassName("back_suit")[1];
            element13.classList.remove("heart_card_7");
            element13.classList.remove("heart_card_8");
            element13.classList.remove("heart_card_9");
            element13.classList.remove("heart_card_10");
            element13.classList.remove("heart_card_11");
            element13.classList.remove("heart_card_12");
            element13.classList.remove("heart_card_13");
            element13.classList.remove("heart_card_14");
        let element14 = document.getElementsByClassName("back_suit")[3];
            element14.classList.remove("clubs_card_7");
            element14.classList.remove("clubs_card_8");
            element14.classList.remove("clubs_card_9");
            element14.classList.remove("clubs_card_10");
            element14.classList.remove("clubs_card_11");
            element14.classList.remove("clubs_card_12");
            element14.classList.remove("clubs_card_13");
            element14.classList.remove("clubs_card_14");

            document.getElementsByClassName("show_select")[0].style.display = "none"
            document.getElementsByClassName("show_select")[1].style.display = "none"
            document.getElementsByClassName("show_select")[2].style.display = "none"
            document.getElementsByClassName("show_select")[3].style.display = "none"

            
            
    }
            
    
}


function button_betslip(){
    var elem = document.getElementById("select_type"),
    selectedNode = elem.options[elem.selectedIndex];

        if ( number1==true && number2==true && number3==true && number4==true ){
            let element = document.getElementsByClassName("lotto_button")[0];
            element.classList.add("notNeedButton");
            return false;
        }
        else{
            if(selectedNode.value === ""){
                let element = document.getElementsByClassName("lotto_button")[0];
                element.classList.add("notNeedButton");
                return false;
            }
            else{
                let element = document.getElementsByClassName("lotto_button")[0];
                element.classList.remove("notNeedButton");
                return true;
            }
        }
    


}

function betslip_card(){
    if(a == 1){
        let element1 = document.getElementsByClassName("back_suit")[0];
            element1.classList.remove("spade_card_7");
            element1.classList.remove("spade_card_8");
            element1.classList.remove("spade_card_9");
            element1.classList.remove("spade_card_10");
            element1.classList.remove("spade_card_11");
            element1.classList.remove("spade_card_12");
            element1.classList.remove("spade_card_13");
            element1.classList.remove("spade_card_14");
            let elem1 = document.getElementsByClassName("show_select")[0]
            index = elem1.options[elem1.selectedIndex];
            if(index.value === "14"){    
                let element = document.getElementsByClassName("back_suit")[0];
                element.classList.add("spade_card_14");
            }
            if(index.value === "13"){    
                let element = document.getElementsByClassName("back_suit")[0];
                element.classList.add("spade_card_13");

            }
            if(index.value === "12"){    
                let element = document.getElementsByClassName("back_suit")[0];
                element.classList.add("spade_card_12");
            }
            if(index.value === "11"){    
                let element = document.getElementsByClassName("back_suit")[0];
                element.classList.add("spade_card_11");
            }
            if(index.value === "10"){    
                let element = document.getElementsByClassName("back_suit")[0];
                element.classList.add("spade_card_10");
            }
            if(index.value === "9"){    
                let element = document.getElementsByClassName("back_suit")[0];
                element.classList.add("spade_card_9");
            }
            if(index.value === "8"){    
                let element = document.getElementsByClassName("back_suit")[0];
                element.classList.add("spade_card_8");
            }
            if(index.value === "7"){    
                let element = document.getElementsByClassName("back_suit")[0];
                element.classList.add("spade_card_7");
            }
    }
    if(b == 1){
        let element1 = document.getElementsByClassName("back_suit")[1];
            element1.classList.remove("heart_card_7");
            element1.classList.remove("heart_card_8");
            element1.classList.remove("heart_card_9");
            element1.classList.remove("heart_card_10");
            element1.classList.remove("heart_card_11");
            element1.classList.remove("heart_card_12");
            element1.classList.remove("heart_card_13");
            element1.classList.remove("heart_card_14");
            let elem1 = document.getElementsByClassName("show_select")[1]
            index = elem1.options[elem1.selectedIndex];
            if(index.value === "14"){    
                let element = document.getElementsByClassName("back_suit")[1];
                element.classList.add("heart_card_14");
            }
            if(index.value === "13"){    
                let element = document.getElementsByClassName("back_suit")[1];
                element.classList.add("heart_card_13");

            }
            if(index.value === "12"){    
                let element = document.getElementsByClassName("back_suit")[1];
                element.classList.add("heart_card_12");
            }
            if(index.value === "11"){    
                let element = document.getElementsByClassName("back_suit")[1];
                element.classList.add("heart_card_11");
            }
            if(index.value === "10"){    
                let element = document.getElementsByClassName("back_suit")[1];
                element.classList.add("heart_card_10");
            }
            if(index.value === "9"){    
                let element = document.getElementsByClassName("back_suit")[1];
                element.classList.add("heart_card_9");
            }
            if(index.value === "8"){    
                let element = document.getElementsByClassName("back_suit")[1];
                element.classList.add("heart_card_8");
            }
            if(index.value === "7"){    
                let element = document.getElementsByClassName("back_suit")[1];
                element.classList.add("heart_card_7");
            }
    }
    if(c == 1){
        let element1 = document.getElementsByClassName("back_suit")[2];
            element1.classList.remove("diamond_card_7");
            element1.classList.remove("diamond_card_8");
            element1.classList.remove("diamond_card_9");
            element1.classList.remove("diamond_card_10");
            element1.classList.remove("diamond_card_11");
            element1.classList.remove("diamond_card_12");
            element1.classList.remove("diamond_card_13");
            element1.classList.remove("diamond_card_14");
            let elem1 = document.getElementsByClassName("show_select")[2]
            index = elem1.options[elem1.selectedIndex];
            if(index.value === "14"){    
                let element = document.getElementsByClassName("back_suit")[2];
                element.classList.add("diamond_card_14");
            }
            if(index.value === "13"){    
                let element = document.getElementsByClassName("back_suit")[2];
                element.classList.add("diamond_card_13");

            }
            if(index.value === "12"){    
                let element = document.getElementsByClassName("back_suit")[2];
                element.classList.add("diamond_card_12");
            }
            if(index.value === "11"){    
                let element = document.getElementsByClassName("back_suit")[2];
                element.classList.add("diamond_card_11");
            }
            if(index.value === "10"){    
                let element = document.getElementsByClassName("back_suit")[2];
                element.classList.add("diamond_card_10");
            }
            if(index.value === "9"){    
                let element = document.getElementsByClassName("back_suit")[2];
                element.classList.add("diamond_card_9");
            }
            if(index.value === "8"){    
                let element = document.getElementsByClassName("back_suit")[2];
                element.classList.add("diamond_card_8");
            }
            if(index.value === "7"){    
                let element = document.getElementsByClassName("back_suit")[2];
                element.classList.add("diamond_card_7");
            }
    }
    if(d == 1){
            let element1 = document.getElementsByClassName("back_suit")[3];
            element1.classList.remove("clubs_card_7");
            element1.classList.remove("clubs_card_8");
            element1.classList.remove("clubs_card_9");
            element1.classList.remove("clubs_card_10");
            element1.classList.remove("clubs_card_11");
            element1.classList.remove("clubs_card_12");
            element1.classList.remove("clubs_card_13");
            element1.classList.remove("clubs_card_14");
            let elem1 = document.getElementsByClassName("show_select")[3]
            index = elem1.options[elem1.selectedIndex];
            if(index.value === "14"){    
                let element = document.getElementsByClassName("back_suit")[3];
                element.classList.add("clubs_card_14");
            }
            if(index.value === "13"){    
                let element = document.getElementsByClassName("back_suit")[3];
                element.classList.add("clubs_card_13");

            }
            if(index.value === "12"){    
                let element = document.getElementsByClassName("back_suit")[3];
                element.classList.add("clubs_card_12");
            }
            if(index.value === "11"){    
                let element = document.getElementsByClassName("back_suit")[3];
                element.classList.add("clubs_card_11");
            }
            if(index.value === "10"){    
                let element = document.getElementsByClassName("back_suit")[3];
                element.classList.add("clubs_card_10");
            }
            if(index.value === "9"){    
                let element = document.getElementsByClassName("back_suit")[3];
                element.classList.add("clubs_card_9");
            }
            if(index.value === "8"){    
                let element = document.getElementsByClassName("back_suit")[3];
                element.classList.add("clubs_card_8");
            }
            if(index.value === "7"){    
                let element = document.getElementsByClassName("back_suit")[3];
                element.classList.add("clubs_card_7");
            }
    }
            
            
}

function betslip(){
    check = button_betslip()
    var elem = document.getElementById("select_type")
    selectedNode = elem.options[elem.selectedIndex];
    document.getElementsByClassName("item_per")[0].innerHTML = "1.91"
    if(check == true && selectedNode.value === "ov"){
        let element = document.getElementsByClassName("betslip-floating-mode-container")[0];
        element.classList.remove("empty");
        document.getElementsByClassName("lmax")[0].innerHTML = "3000"
        document.getElementsByClassName("lmin")[0].innerHTML = "1"
        if ( a == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 10.50"
        }
        if ( b == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "2 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 10.50"
        }
        if ( c == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "3 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 10.50"
        }
        if ( d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "4 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 10.50"
        }
        if ( a == 1 && b == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1+2 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 21.00"
        }
        if ( a == 1 && c == 1){
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 21.00"
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1+3 Cards"
        }
        if ( a == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 21.00"
        }
        if (b == 1 && c == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "2+3 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 21.00"
        }
        if (b == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "2+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 21.00"
        }
        if (d == 1 && c == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "3+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 21.00"
        }
        if ( a == 1 && b == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1+2+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 31.50"
        }
        if ( a == 1 && b == 1 && c == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1+2+3 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 31.50"
        }  
        if ( a == 1 && c == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1+3+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 31.50"
        } 
        if (b == 1 && c == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "2+3+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 31.50"
        }
        if ( a == 1 && b == 1 && c == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "All Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 42.00"
        }
    }
    if(check == true && selectedNode.value === "ovs"){
        let element = document.getElementsByClassName("betslip-floating-mode-container")[0];
        element.classList.remove("empty");
        document.getElementsByClassName("lmax")[0].innerHTML = "5000"
        document.getElementsByClassName("lmin")[0].innerHTML = "1"
        if ( a == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 3.5 1 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 10.50"
        }
        if ( b == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 3.5 2 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 10.50"
        }
        if ( c == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 3.5 3 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 10.50"
        }
        if ( d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 3.5 4 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 10.50"
        }
        if ( a == 1 && b == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = " Steps 7 1+2 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 21.00"
        }
        if ( a == 1 && c == 1){
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 21.00"
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 7 1+3 Cards"
        }
        if ( a == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 7 1+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 21.00"
        }
        if (b == 1 && c == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 7 2+3 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 21.00"
        }
        if (b == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 7 2+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 21.00"
        }
        if (d == 1 && c == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 7 3+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 21.00"
        }
        if ( a == 1 && b == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 10.5 1+2+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 31.50"
        }
        if ( a == 1 && b == 1 && c == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 10.5 1+2+3 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 31.50"
        }  
        if ( a == 1 && c == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 10.5 1+3+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 31.50"
        } 
        if (b == 1 && c == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 10.5 2+3+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 31.50"
        }
        if ( a == 1 && b == 1 && c == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 14 All Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "O 42.00"
        }
    }
    if(check == true && selectedNode.value === "un"){
        let element = document.getElementsByClassName("betslip-floating-mode-container")[0];
        element.classList.remove("empty");
        document.getElementsByClassName("lmax")[0].innerHTML = "3000"
        document.getElementsByClassName("lmin")[0].innerHTML = "1"
        if ( a == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 10.50"
        }
        if ( b == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "2 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 10.50"
        }
        if ( c == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "3 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 10.50"
        }
        if ( d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "4 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 10.50"
        }
        if ( a == 1 && b == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1+2 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 21.00"
        }
        if ( a == 1 && c == 1){
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 21.00"
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1+3 Card"
        }
        if ( a == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1+4 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 21.00"
        }
        if (b == 1 && c == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "2+3 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 21.00"
        }
        if (b == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "2+4 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 21.00"
        }
        if (d == 1 && c == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "3+4 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 21.00"
        }
        if ( a == 1 && b == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1+2+4 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 31.50"
        }
        if ( a == 1 && b == 1 && c == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1+2+3 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 31.50"
        }  
        if ( a == 1 && c == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1+3+4 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 31.50"
        } 
        if (b == 1 && c == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "2+3+4 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 31.50"
        }
        if ( a == 1 && b == 1 && c == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "All Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 42.00"
        }
    }
    if(check == true && selectedNode.value === "uns"){
        let element = document.getElementsByClassName("betslip-floating-mode-container")[0];
        element.classList.remove("empty");
        document.getElementsByClassName("lmax")[0].innerHTML = "5000"
        document.getElementsByClassName("lmin")[0].innerHTML = "1"
        if ( a == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 3.5 1 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 10.50"
        }
        if ( b == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 3.5 2 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 10.50"
        }
        if ( c == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 3.5 3 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 10.50"
        }
        if ( d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 3.5 4 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 10.50"
        }
        if ( a == 1 && b == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = " Steps 7 1+2 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 21.00"
        }
        if ( a == 1 && c == 1){
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 21.00"
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 7 1+3 Cards"
        }
        if ( a == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 7 1+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 21.00"
        }
        if (b == 1 && c == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 7 2+3 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 21.00"
        }
        if (b == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 7 2+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 21.00"
        }
        if (d == 1 && c == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 7 3+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 21.00"
        }
        if ( a == 1 && b == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 10.5 1+2+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 31.50"
        }
        if ( a == 1 && b == 1 && c == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 10.5 1+2+3 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 31.50"
        }  
        if ( a == 1 && c == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 10.5 1+3+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 31.50"
        } 
        if (b == 1 && c == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 10.5 2+3+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 31.50"
        }
        if ( a == 1 && b == 1 && c == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "Steps 14 All Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "U 42.00"
        }
    }
    if(check == true && selectedNode.value === "od"){
        let element = document.getElementsByClassName("betslip-floating-mode-container")[0];
        element.classList.remove("empty");
        document.getElementsByClassName("lmax")[0].innerHTML = "1500"
        document.getElementsByClassName("lmin")[0].innerHTML = "1"
        if ( a == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "1 Card Odd"
        }
        if ( b == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "2 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "2 Card Odd"
        }
        if ( c == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "3 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "3 Card Odd"
        }
        if ( d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "4 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "4 Card Odd"
        }
        if ( a == 1 && b == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1+2 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "1+2 Cards Odd"
        }
        if ( a == 1 && c == 1){
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "1+3 Cards Odd"
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1+3 Cards"
        }
        if ( a == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "1+4 Cards Odd"
        }
        if (b == 1 && c == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "2+3 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "2+3 Cards Odd"
        }
        if (b == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "2+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "2+4 Cards Odd"
        }
        if (d == 1 && c == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "3+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "3+4 Cards Odd"
        }
        if ( a == 1 && b == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1+2+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "1+2+4 Cards Odd"
        }
        if ( a == 1 && b == 1 && c == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1+2+3 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "1+2+3 Cards Odd"
        }  
        if ( a == 1 && c == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1+3+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "1+3+4 Cards Odd"
        } 
        if (b == 1 && c == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "2+3+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "2+3+4 Cards Odd"
        }
        if ( a == 1 && b == 1 && c == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "All Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "All Cards Odd"
        }
    }
    if(check == true && selectedNode.value === "ev"){
        let element = document.getElementsByClassName("betslip-floating-mode-container")[0];
        element.classList.remove("empty");
        document.getElementsByClassName("lmax")[0].innerHTML = "1500"
        document.getElementsByClassName("lmin")[0].innerHTML = "1"
        if ( a == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "1 Card Even"
        }
        if ( b == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "2 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "2 Card Even"
        }
        if ( c == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "3 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "3 Card Even"
        }
        if ( d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "4 Card"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "4 Card Even"
        }
        if ( a == 1 && b == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1+2 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "1+2 Cards Even"
        }
        if ( a == 1 && c == 1){
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "1+3 Cards Even"
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1+3 Cards"
        }
        if ( a == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "1+4 Cards Even"
        }
        if (b == 1 && c == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "2+3 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "2+3 Cards Even"
        }
        if (b == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "2+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "2+4 Cards Even"
        }
        if (d == 1 && c == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "3+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "3+4 Cards Even"
        }
        if ( a == 1 && b == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1+2+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "1+2+4 Cards Even"
        }
        if ( a == 1 && b == 1 && c == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1+2+3 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "1+2+3 Cards Even"
        }  
        if ( a == 1 && c == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1+3+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "1+3+4 Cards Even"
        } 
        if (b == 1 && c == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "2+3+4 Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "2+3+4 Cards Even"
        }
        if ( a == 1 && b == 1 && c == 1 && d == 1){
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "All Cards"
            document.getElementsByClassName("betslip-match-event")[0].innerHTML = "All Cards Even"
        }
    }
    if(check == true && selectedNode.value === "ex"){
        let element = document.getElementsByClassName("betslip-floating-mode-container")[0];
        element.classList.remove("empty");
        document.getElementsByClassName("lmax")[0].innerHTML = "1500"
        document.getElementsByClassName("lmin")[0].innerHTML = "1"
        document.getElementsByClassName("item_per")[0].innerHTML = "7"
        

        if(a==1){
            let element1 = document.getElementsByClassName("back_suit")[0];
            element1.classList.remove("spade_card_7");
            element1.classList.remove("spade_card_8");
            element1.classList.remove("spade_card_9");
            element1.classList.remove("spade_card_10");
            element1.classList.remove("spade_card_11");
            element1.classList.remove("spade_card_12");
            element1.classList.remove("spade_card_13");
            element1.classList.remove("spade_card_14");
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "1 Card Exact"
            let elem1 = document.getElementsByClassName("show_select")[0]
            index = elem1.options[elem1.selectedIndex];
            if(index.value === "7"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "1 Card Exact 7"
                let element = document.getElementsByClassName("back_suit")[0];
                element.classList.add("spade_card_7");
            }
            if(index.value === "8"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "1 Card Exact 8"
                let element = document.getElementsByClassName("back_suit")[0];
                element.classList.add("spade_card_8");
            }
            if(index.value === "9"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "1 Card Exact 9"
                let element = document.getElementsByClassName("back_suit")[0];
                element.classList.add("spade_card_9");
            }
            if(index.value === "10"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "1 Card Exact 10"
                let element = document.getElementsByClassName("back_suit")[0];
                element.classList.add("spade_card_10");
            }
            if(index.value === "11"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "1 Card Exact J"
                let element = document.getElementsByClassName("back_suit")[0];
                element.classList.add("spade_card_11");
            }
            if(index.value === "12"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "1 Card Exact Q"
                let element = document.getElementsByClassName("back_suit")[0];
                element.classList.add("spade_card_12");
            }
            if(index.value === "13"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "1 Card Exact K"
                let element = document.getElementsByClassName("back_suit")[0];
                element.classList.add("spade_card_13");
            }
            if(index.value === "14"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "1 Card Exact A"
                let element = document.getElementsByClassName("back_suit")[0];
                element.classList.add("spade_card_14");
            }
        }
        if(b==1){
            let element1 = document.getElementsByClassName("back_suit")[1];
            element1.classList.remove("heart_card_7");
            element1.classList.remove("heart_card_8");
            element1.classList.remove("heart_card_9");
            element1.classList.remove("heart_card_10");
            element1.classList.remove("heart_card_11");
            element1.classList.remove("heart_card_12");
            element1.classList.remove("heart_card_13");
            element1.classList.remove("heart_card_14");
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "2 Card Exact"
            let elem1 = document.getElementsByClassName("show_select")[1]
            index = elem1.options[elem1.selectedIndex];
            if(index.value === "7"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "2 Card Exact 7"
                let element = document.getElementsByClassName("back_suit")[1];
                element.classList.add("heart_card_7");
            }
            if(index.value === "8"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "2 Card Exact 8"
                let element = document.getElementsByClassName("back_suit")[1];
                element.classList.add("heart_card_8");
            }
            if(index.value === "9"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "2 Card Exact 9"
                let element = document.getElementsByClassName("back_suit")[1];
                element.classList.add("heart_card_9");
            }
            if(index.value === "10"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "2 Card Exact 10"
                let element = document.getElementsByClassName("back_suit")[1];
                element.classList.add("heart_card_10");
            }
            if(index.value === "11"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "2 Card Exact J"
                let element = document.getElementsByClassName("back_suit")[1];
                element.classList.add("heart_card_11");
            }
            if(index.value === "12"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "2 Card Exact Q"
                let element = document.getElementsByClassName("back_suit")[1];
                element.classList.add("heart_card_12");
            }
            if(index.value === "13"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "2 Card Exact K"
                let element = document.getElementsByClassName("back_suit")[1];
                element.classList.add("heart_card_13");
            }
            if(index.value === "14"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "2 Card Exact A"
                let element = document.getElementsByClassName("back_suit")[1];
                element.classList.add("heart_card_14");
            }
        }
        if(c==1){
            let element1 = document.getElementsByClassName("back_suit")[2];
            element1.classList.remove("diamond_card_7");
            element1.classList.remove("diamond_card_8");
            element1.classList.remove("diamond_card_9");
            element1.classList.remove("diamond_card_10");
            element1.classList.remove("diamond_card_11");
            element1.classList.remove("diamond_card_12");
            element1.classList.remove("diamond_card_13");
            element1.classList.remove("diamond_card_14");
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "3 Card Exact"
            let elem1 = document.getElementsByClassName("show_select")[2]
            index = elem1.options[elem1.selectedIndex];
            if(index.value === "7"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "3 Card Exact 7"
                let element = document.getElementsByClassName("back_suit")[2];
                element.classList.add("diamond_card_7");
            }
            if(index.value === "8"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "3 Card Exact 8"
                let element = document.getElementsByClassName("back_suit")[2];
                element.classList.add("diamond_card_8");
            }
            if(index.value === "9"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "3 Card Exact 9"
                let element = document.getElementsByClassName("back_suit")[2];
                element.classList.add("diamond_card_9");
            }
            if(index.value === "10"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "3 Card Exact 10"
                let element = document.getElementsByClassName("back_suit")[2];
                element.classList.add("diamond_card_10");
            }
            if(index.value === "11"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "3 Card Exact J"
                let element = document.getElementsByClassName("back_suit")[2];
                element.classList.add("diamond_card_11");
            }
            if(index.value === "12"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "3 Card Exact Q"
                let element = document.getElementsByClassName("back_suit")[2];
                element.classList.add("diamond_card_12");
            }
            if(index.value === "13"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "3 Card Exact K"
                let element = document.getElementsByClassName("back_suit")[2];
                element.classList.add("diamond_card_13");
            }
            if(index.value === "14"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "3 Card Exact A"
                let element = document.getElementsByClassName("back_suit")[2];
                element.classList.add("diamond_card_14");
            }
        }
        if(d==1){
            let element1 = document.getElementsByClassName("back_suit")[3];
            element1.classList.remove("clubs_card_7");
            element1.classList.remove("clubs_card_8");
            element1.classList.remove("clubs_card_9");
            element1.classList.remove("clubs_card_10");
            element1.classList.remove("clubs_card_11");
            element1.classList.remove("clubs_card_12");
            element1.classList.remove("clubs_card_13");
            element1.classList.remove("clubs_card_14");
            document.getElementsByClassName("betslip-match-market-type")[0].innerHTML = "4 Card Exact"
            let elem1 = document.getElementsByClassName("show_select")[3]
            index = elem1.options[elem1.selectedIndex];
            if(index.value === "7"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "4 Card Exact 7"
                let element = document.getElementsByClassName("back_suit")[3];
                element.classList.add("clubs_card_7");
            }
            if(index.value === "8"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "4 Card Exact 8"
                let element = document.getElementsByClassName("back_suit")[3];
                element.classList.add("clubs_card_8");
            }
            if(index.value === "9"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "4 Card Exact 9"
                let element = document.getElementsByClassName("back_suit")[3];
                element.classList.add("clubs_card_9");
            }
            if(index.value === "10"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "4 Card Exact 10"
                let element = document.getElementsByClassName("back_suit")[3];
                element.classList.add("clubs_card_10");
            }
            if(index.value === "11"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "4 Card Exact J"
                let element = document.getElementsByClassName("back_suit")[3];
                element.classList.add("clubs_card_11");
            }
            if(index.value === "12"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "4 Card Exact Q"
                let element = document.getElementsByClassName("back_suit")[3];
                element.classList.add("clubs_card_12");
            }
            if(index.value === "13"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "4 Card Exact K"
                let element = document.getElementsByClassName("back_suit")[3];
                element.classList.add("clubs_card_13");
            }
            if(index.value === "14"){    
                document.getElementsByClassName("betslip-match-event")[0].innerHTML = "4 Card Exact A"
                let element = document.getElementsByClassName("back_suit")[3];
                element.classList.add("clubs_card_14");
            }
        }
    }
}




function width() {
    var width = document.getElementsByTagName("body")[0]
    width.value = window.outerWidth;
    if(width.value <= 600){
        let element = document.getElementsByClassName("en")[0];
        element.classList.add("mobile");
    }
    else{
        let element = document.getElementsByClassName("en")[0];
        element.classList.remove("mobile");
    }
}

function card1(){
    var elem = document.getElementById("select_type")
    selectedNode = elem.options[elem.selectedIndex];

    document.getElementsByClassName("show_select")[1].style.display = "none"
    document.getElementsByClassName("show_select")[2].style.display = "none"
    document.getElementsByClassName("show_select")[3].style.display = "none"
    
    if(a==1){

        let element = document.getElementsByClassName("card_suit_spade")[0];
        element.classList.remove("checked_card");
        document.getElementsByClassName("show_select")[0].style.display = "none"
        a--;
        number1 = true;
        button_betslip()
    }
    else{
        let element = document.getElementsByClassName("card_suit_spade")[0];
        element.classList.add("checked_card");
        number1 = false;
        if(selectedNode.value === "ex") {

            document.getElementsByClassName("show_select")[0].style.display = "block"

            let element = document.getElementsByClassName("card_suit_heart")[0];
            element.classList.remove("checked_card");

            let element1 = document.getElementsByClassName("card_suit_diamond")[0];
            element1.classList.remove("checked_card");

            let element2 = document.getElementsByClassName("card_suit_clubs")[0];
            element2.classList.remove("checked_card");
            b=0;
            c=0;
            d=0;
        }
        
        a++;
        button_betslip()
    }
    
}


function card2(){
    var elem = document.getElementById("select_type")
    selectedNode = elem.options[elem.selectedIndex];

    document.getElementsByClassName("show_select")[0].style.display = "none"
    document.getElementsByClassName("show_select")[2].style.display = "none"
    document.getElementsByClassName("show_select")[3].style.display = "none"

    if(b==1){

        let element = document.getElementsByClassName("card_suit_heart")[0];
        element.classList.remove("checked_card");
        document.getElementsByClassName("show_select")[1].style.display = "none"
        b--;
        number2 = true;
        button_betslip()
    }
    else{
        let element = document.getElementsByClassName("card_suit_heart")[0];
        element.classList.add("checked_card");

        if(selectedNode.value === "ex") {
            document.getElementsByClassName("show_select")[1].style.display = "block"
            

            let element = document.getElementsByClassName("card_suit_spade")[0];
            element.classList.remove("checked_card");

            let element1 = document.getElementsByClassName("card_suit_diamond")[0];
            element1.classList.remove("checked_card");

            let element2 = document.getElementsByClassName("card_suit_clubs")[0];
            element2.classList.remove("checked_card");
            a=0;
            c=0;
            d=0;
        }
        b++;
        number2 = false;
        button_betslip()
    }
}

function card3(){
    var elem = document.getElementById("select_type")
    selectedNode = elem.options[elem.selectedIndex];
    document.getElementsByClassName("show_select")[0].style.display = "none"
    document.getElementsByClassName("show_select")[1].style.display = "none"
    document.getElementsByClassName("show_select")[3].style.display = "none"
    
    if(c==1){

        let element = document.getElementsByClassName("card_suit_diamond")[0];
        element.classList.remove("checked_card");
        document.getElementsByClassName("show_select")[2].style.display = "none"
        c--;
        number3 = true;
        button_betslip()
    }
    else{
        let element = document.getElementsByClassName("card_suit_diamond")[0];
        element.classList.add("checked_card");
        if(selectedNode.value === "ex") {
            document.getElementsByClassName("show_select")[2].style.display = "block"

            let element = document.getElementsByClassName("card_suit_spade")[0];
            element.classList.remove("checked_card");

            let element1 = document.getElementsByClassName("card_suit_heart")[0];
            element1.classList.remove("checked_card");

            let element2 = document.getElementsByClassName("card_suit_clubs")[0];
            element2.classList.remove("checked_card");
            b=0;
            a=0;
            d=0;
        }
        c++;
        number3 = false;
        button_betslip()
    }
}

function card4(){
    var elem = document.getElementById("select_type")
    selectedNode = elem.options[elem.selectedIndex];
    
    document.getElementsByClassName("show_select")[0].style.display = "none"
    document.getElementsByClassName("show_select")[1].style.display = "none"
    document.getElementsByClassName("show_select")[2].style.display = "none"

    if(d==1){

        let element = document.getElementsByClassName("card_suit_clubs")[0];
        element.classList.remove("checked_card");
        d--;
        number4 = true;
        button_betslip()
        document.getElementsByClassName("show_select")[3].style.display = "none"
        
    }
    else{
        let element = document.getElementsByClassName("card_suit_clubs")[0];
        element.classList.add("checked_card");
        
        d++;
        number4 = false;
        button_betslip()
        if(selectedNode.value === "ex") {
            document.getElementsByClassName("show_select")[3].style.display = "block"

            let element = document.getElementsByClassName("card_suit_spade")[0];
            element.classList.remove("checked_card");

            let element1 = document.getElementsByClassName("card_suit_heart")[0];
            element1.classList.remove("checked_card");

            let element2 = document.getElementsByClassName("card_suit_diamond")[0];
            element2.classList.remove("checked_card");
            b=0;
            c=0;
            a=0;
        }
    }
}