/* Name: Maxime Hendrikse Liu
 * Javascript Problem #1: sleep_in
 * Date: 14 September 2017
 * I had a little difficulty with this one,
 * so I did the other nine first
 * and came back to this one last.
 */

function sleep_in(weekday,vacation) {
    if (vacation == true) {
        return true;
    }else if(vacation==false){
        if (weekday == true) {
            return false;
        } else if (weekday==false){
            return true;
        }
    }else if(vacation%1!=0){
        return false;
    }
}


/* Name: Maxime Hendrikse Liu
 * Javascript Problem #2: monkey_trouble
 * Date: 13 September 2017
 */

function monkey_trouble(a_smile, b_smile){
    if((a_smile+b_smile)%2==0){
        return true;
    }else{
        return false;
    }
}


/* Name: Maxime Hendrikse Liu
 * Javascript Problem #3: String_times
 * Date: 13 September 2017
 */

function string_times(string, n){
    if (n>0){
        var returnString = string;
        var i = 1;
        while(i < n){
            var returnString = returnString + string;
            i++;
        }
        return returnString;
    }else{
        return "";
    }
}


/* Name: Maxime Hendrikse Liu
 * Javascript Problem #4: front_times
 * Date: 13 September 2017
 */

function front_times(string, n){
    if(string.length>0){
        if(string.length<3){
            var frontString = string;
        }else{
            var frontString = string.substring(0,3);
        }
        if (n>0){
            var returnString = frontString;
            var i = 1;
            while(i < n){
                var returnString = returnString + frontString;
                i++;
            }
            return returnString;
        }else{
            return "";
        }
    }else{
        return "";
    }
}


/* Name: Maxime Hendrikse Liu
 * Javascript Problem #5: String_bits
 * Date: 13 September 2017
 */

function string_bits(string){
    if(string.length>0){
        var returnString = string[0];
        var stringPos = 2;
        while((stringPos + 1)<string.length){
            returnString = returnString + string[stringPos];
            stringPos +=2;
        }
        return returnString;
    }else{
        return "";
    }
}


/* Name: Maxime Hendrikse Liu
 * Javascript Problem #6: caughtSpeeding
 * Date: 13 September 2017
 */

SPEED_1 = 60;
SPEED_2 = 80;
BIRTHDAY_BONUS = 5;

function caughtSpeeding(speed, isBirthday){
    if(speed <= SPEED_1+(isBirthday*BIRTHDAY_BONUS)){
        return 0;
    }else if((speed > SPEED_1+(isBirthday*BIRTHDAY_BONUS))&&(speed <= SPEED_2+(isBirthday*BIRTHDAY_BONUS))){
        return 1;
    }else if(speed > SPEED_2+(isBirthday*BIRTHDAY_BONUS)){
        return 2;
    }
}


/* Name: Maxime Hendrikse Liu
 * Javascript Problem #7: fizzBuzz
 * Date: 13 September 2017
 */

function fizz_buzz(int){
    if(int%3==0){
        if(int%5==0){
            return "FizzBuzz";
        }else{
            return "Fizz";
        }
    }else if (int%5==0){
        return "Buzz";
    }else if (int%1==0){
        return int + "!";
    }
}


/* Name: Maxime Hendrikse Liu
 * Javascript Problem #8: teaParty
 * Date: 14 September 2017
 */

function teaParty(tea, candy){
    if ((tea<5)||(candy<5)){
        return 0;
    }else if((tea>=2*candy)||(candy>=2*tea)){
        return 2;
    }else{
        return 1;
    }
}


/* Name: Maxime Hendrikse Liu
 * Javascript Problem #9: blackjack
 * Date: 14 September 2017
 */

function blackjack(n1,n2){
    if (n1<0||n2<0){
        return "";
    }else if(n1>21&&n2>21){
        return "";
    }else if(n1>n2){
        if(n1<=21){
            return n1;
        }else{
            return n2;
        }
    }else{
        if(n2<=21){
            return n2;
        }else{
            return n1;
        }
    }
}


/* Name: Maxime Hendrikse Liu
 * Javascript Problem #10: loneSum
 * Date: 14 September 2017
 */

function loneSum(a, b, c){
    var sum=0;
    if ((a!=b)&&(a!=c)){
        sum +=a;
    }
    if ((b!=a)&&(b!=c)){
        sum +=b;
    }
    if ((c!=a)&&(c!=b)){
        sum +=c;
    }
    return sum;
}