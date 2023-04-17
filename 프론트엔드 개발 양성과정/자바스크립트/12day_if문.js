// var age = prompt("나이를 입력하세요","숫자로 가입하세요");
//         age = Number(age);  
        var age =prompt("나이를 입력하세요","");

        // 강아지 는 NaN 
        // if(age<20){
        //     alert("미성년자네요 구입 안됩니다.")
        // }
        // if(age>=20){
        //     alert("미성년자아니네요 구입 가능합니다.")
        // const i = age.valueOf
        if(typeof(age) == NaN ){
            
            alert("숫자만 입력해주세요");
            prompt("나이를 입력하세요","");
        }else {
            alert("입력되셨습니다");
        };


        // var age_1 =Number( prompt("나이를 입력하세요",""));
        // var pay = 0;
        // if(age_1 <=7){
        //     pay=0;
        //     if else (age_1>=8 && age_1<=18){
        //         pay=450;
        //     }
        //     alert(pay +"원입니다");        
        // };

        // var age_2 =Number( prompt("나이를 입력하세요",""));
        // var pay_1 = 0;
        // var pay_2 = 450;



        // if(age_2 <=7){
        //     alert(pay_1+"원입니다");        
        // }
        //     if else (age_2>=8 && age_2<=18){
        //     alert(pay_2 +"원입니다");        
        // };



        // var age_2 =Number( prompt("나이를 입력하세요",""));


        // var pay_1 = 0;
        // var pay_2 = 450;
        // var age0 = 0;
        // var age1 = 10;

        // if(age == age0){
        //     alert(pay_1+"원입니다");        
        // }
        //     if else (age== age1){
        //     alert(pay_2 +"원입니다");        
        // };