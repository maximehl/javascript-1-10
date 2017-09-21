/* Name: Maxime Hendrikse Liu
 * Javascript Problem #11: firstLast6
 * Date: 18 September 2017
 */

function firstLast6(array){
    if ((array[0]==6)||(array[array.length - 1]==6)){
        return true;
    }else{
        return false;
    }
}


/* Name: Maxime Hendrikse Liu
 * Javascript Problem #12: has_23
 * Date: 18 September 2017
 */

function has23(array){
    if((array[0]==2)||(array[1]==2)||(array[0]==3)||(array[1]==3)){
        return true;
    }else{
        return false;
    }
}


/* Name: Maxime Hendrikse Liu
 * Javascript Problem #13: fix_23
 * Date: 18 September 2017
 */

function fix23(array){
    for(var place = 0; place<2; place++){
        if((array[place]==2)&&(array[place +1]==3)){
            array[place+1] = 0;
        }
    }
    return array;
}


/* Name: Maxime Hendrikse Liu
 * Javascript Problem #14: countYZ
 * Date: 19 September 2017
 */

function countYZ(string){
    var place=0;
    var countOfYZ = 0;
    while(place<string.length){
        if(string[place]==" "){
            if((string[place-1]=="y")||(string[place-1]=="z")||(string[place-1]=="Y")||(string[place-1]=="Z")){
                countOfYZ++;
            }
        }else if(place==string.length-1){
            if((string[place]=="y")||(string[place]=="z")||(string[place-1]=="Y")||(string[place-1]=="Z")){
                countOfYZ++;
            }
        }
        place++;
    }
    return countOfYZ;
}


/* Name: Maxime Hendrikse Liu
 * Javascript Problem #15: endOther
 * Date: 19 September 2017
 */

function endOther(string1,string2){
    var string1lower = string1.toLowerCase();
    var string2lower = string2.toLowerCase();
    var place1 = string1.length-1;
    var place2 = string2.length-1;
    while((string1lower[place1]==string2lower[place2])&&(place1>=0)&&(place2>=0)){
        place1--;
        place2--;
    }
    if((place1<0)||(place2<0)){
        return true;
    }else{
        return false;
    }
}


/* Name: Maxime Hendrikse Liu
 * Javascript Problem #16: starOut
 * Date: 19 September 2017
 */

function starOut(string){
    var returnString = "";
    for(var i = 0; i<string.length; i++){
        if((string[i-1]!="*")&&(string[i]!="*")&&(string[i+1]!="*")){
            returnString += string[i]
        }
    }
    return returnString;
}


/* Name: Maxime Hendrikse Liu
 * Javascript Problem #17: getSandwich
 * Date: 19 September 2017
 */

function getSandwich(sandwich){
    var firstBread = 0;
    while((sandwich.substring(firstBread,firstBread+5)!="bread")&&(firstBread<sandwich.length)){
        firstBread++;
    }
    if (firstBread!=sandwich.length){
        firstBread +=5;
        var lastBread = sandwich.length - 1;
        while((sandwich.substring(lastBread-4,lastBread+1)!="bread")&&(lastBread>0)){
            lastBread--;
        }
        lastBread -=4;
        var between = sandwich.substring(firstBread,lastBread);
        if(lastBread<firstBread){
            between = "";
        }
        return between;
    }else{
        return "";
    }
}


/* Name: Maxime Hendrikse Liu
 * Javascript Problem #18: canBalance
 * Date: 19 September 2017
 */

function canBalance(array){
    var leftEnd = 0;
    var rightEnd = array.length;
    if(array.length>1){
        var leftSum = array[0];
        var rightSum = array[rightEnd];

    }else{
        return false;
    }
}