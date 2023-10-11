let buttonOne= document.getElementById('1');
let buttonTwo= document.getElementById('2');
let buttonThree= document.getElementById('3');
let buttonFour= document.getElementById('4');
let buttonFive= document.getElementById('5');
let buttonSix= document.getElementById('6');
let popup = document.querySelector('.game_popup');
let iframe = document.querySelector('.game_iframe');



buttonOne.addEventListener('click',function(){
    popup.style.display = "block";
    iframe.src = "https://casinoguru-en.com/embedGame?identifier=1434db9e-8b0e-44f9-b89b-d65bf1975418"
    });


    buttonTwo.addEventListener('click',function(){
        popup.style.display = "block";
        iframe.src = "https://casinoguru-en.com/embedGame?identifier=62d9131e-68d1-4bc8-b436-17ffdb4b16fd"
        });

        buttonThree.addEventListener('click',function(){
            popup.style.display = "block";
            iframe.src = "https://casinoguru-en.com/embedGame?identifier=1c022365-2d42-4d8e-9d26-7ea2a33067db"
            });


            buttonFour.addEventListener('click',function(){
                popup.style.display = "block";
                iframe.src = "https://casinoguru-en.com/embedGame?identifier=35bc04bd-be20-4abf-9b7e-b061ab9d30f6"
                });


                buttonFive.addEventListener('click',function(){
                    popup.style.display = "block";
                    iframe.src = "https://casinoguru-en.com/embedGame?identifier=3c49ae80-441f-43f1-a3ab-7245d0b77adb"
                    });

                    buttonSix.addEventListener('click',function(){
                        popup.style.display = "block";
                        iframe.src = "https://casinoguru-en.com/embedGame?identifier=91b03b97-7e8f-41ec-ad58-9c7a4007943b"
                        });

    popup.addEventListener('click',function(){
        popup.style.display = "none";
    });