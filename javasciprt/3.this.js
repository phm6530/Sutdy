/**
 * 
 * 
 * 
 * 
 */

const ageTest = {
    unit : '살',
    ageList : [1,2,3],
    getAgeList : function(){
        const result = this.ageList.map(function(age){
            let unit = 33;
            return age + this.unit;
        });
        console.log(result);
    }
}

ageTest.getAgeList();

const teser = 5;
teser =+ 3;
console.log(teser);