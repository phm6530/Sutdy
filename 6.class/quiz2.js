//정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어 보자
//직원들의 정보: 이름, 부서이름, 한달 근무시간
//매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
//정직원은 시간당 10,000원
//파트타임은 시간당 8,000원

class Employee{
    #EmployeeName;
    #workTime;
    #personName;
    constructor(EmployeeName , workTime, person){
        this.#EmployeeName = EmployeeName;
        this.#workTime= workTime;
        this.#personName = person;
    }
    salary = () => {
        const salary = this.#workTime * this.hourMoney;
        console.log(
            `부서 : ${this.#EmployeeName} \n`+ 
            `근무시간 : ${this.#workTime} 시간 \n`+
            `성명 : ${this.#personName} \n`+
            `시급 : ${this.hourMoney} \n`+
            `월급 : ${salary} \n `
        );
    }
}

class PartTime extends Employee{
    constructor(EmployeeName , workTime, person){
        super(EmployeeName , workTime, person);
        this.hourMoney = 8000;
    }
}
class SalaryMan extends Employee{
    constructor(EmployeeName , workTime, person){
        super(EmployeeName , workTime, person);
        this.hourMoney = 10000;
    }
}

// 파트타임 
const partTimer = new PartTime('개발', 50 , '테스터');
partTimer.salary();

// 정직원
const salaryMan = new SalaryMan('개발', 50 , '테스터');
salaryMan.salary();


