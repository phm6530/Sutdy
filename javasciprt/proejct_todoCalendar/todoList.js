    const todoSubmit = document.getElementById('todoSubmit'); // 투두리스트 Submit
    const todoListDiv = document.getElementById('todoList');  // 투두리스트 뿌려질 영역

    // 더미 데이터
    const todoArr = {
        '202311' : {
            '1' : [
                {
                    key : 0,
                    date : `2023.11.09`,
                    check : false,
                    title : `첫번 째` 
                },
                {
                    key : 1,
                    date : `2023.11.09`,
                    check : false,
                    title : `두번 째` 
                }

            ],
            '2' : [
                {
                    key : 0,
                    date : `2023.11.09`,
                    check : false,
                    title : `오늘 할일` 
                },
                {
                    key : 1,
                    date : `2023.11.09`,
                    check : false,
                    title : `오늘 할일` 
                }

            ],
            '12' : [
                {
                    key : 0,
                    date : `2023.11.11`,
                    check : false,
                    title : `오늘 할일` 
                },
                {
                    key : 1,
                    date : `2023.11.19`,
                    check : false,
                    title : `오늘 할일` 
                }

            ]
        }
        
    }

  

    const MSG = {
        1 : '할일을 입력해주세요 !',
        2 : '빈칸만 입력은 안돼요!'
    }
    
    // Test 일 ,월
    // let todoYear = '2023';
    // let todoMonth = '11';
    // let todoDay =  '01';
    // const addDayhandelr = () =>{

    //     dayRender();
    // }

    // onClick 이벤트 반영 리턴
    const createButton = (event)=>{
        const btn = document.createElement('button');
        btn.setAttribute('onClick' , event);
        return btn;
    }

    // div 생성 및 class name 반영 리턴
    const createDiv = (e) =>{
        const div = document.createElement('div');
        div.classList.add(e);
        return div;
    }

    // 투두리스트 HTML 개별 생성
    const createTodoItemHTML = (element) => {
        const isCompleteClass = element.check ? 'complete' : '';
        const div = createDiv ('todoList');
        const divInfo = createDiv ('todoInfo');
        
        const btnDelete = createButton(`delArr( ${element.key} , event)`);

        if(element.check){
            div.classList.add(isCompleteClass);
        }
        div.setAttribute('onclick' , `chkList(${element.key})`);
        div.setAttribute('date-key' , `${element.key}`);

        divInfo.textContent = `${element.title} ${element.date}`;
        divInfo.append(btnDelete);
        div.append(divInfo);
        
        return div;
    }
    
    // 랜더링
    const renderTodoList = (Year, Month, day) => {
        
        isWorkday(); // 달력에 확인 표시 추가
        const selectMonth = todoArr[`${Year}${Month}`];
        const testDIV = createDiv('todoList');
        let html;
        if (!selectMonth) {
            testDIV.textContent = `${Month}월은 일정이 없네요`;
            html = testDIV;
        }
        else{
            const selectDay = selectMonth[day];
            if (!selectDay || selectDay.length === 0) {
                testDIV.textContent = day === ViewDay ? `오늘은 일정이없네요` : `${Month}월 ${day}일은 일정이 없습니다`;
                html = testDIV;
            } else {
                todoListDiv.textContent = '';           
                selectDay.forEach(element => {
                    todoListDiv.appendChild(createTodoItemHTML(element));
                });
                return;                    
            }    
        }
        
        // console.log(typeof html)
        todoListDiv.textContent = '';
        todoListDiv.appendChild(html);
        
    }


    

    const chkList = (item) => {
        const chkChange = todoArr[`${ViewYear}${ViewMonth}`][ViewDay];
        chkChange.forEach((e)=> e.key === item ? e.check = !e.check : e.key );
        const findChkindex = chkChange.find(e=>{ return e.key === item});
        updateTodoItem(findChkindex)
    }

    //하나만 갱신할 함수
    const updateTodoItem = (element) => {
        const todoItemDiv = document.querySelector(`[date-key="${element.key}"]`);
        const stringDom = createTodoItemHTML(element).outerHTML;
        todoItemDiv.outerHTML = stringDom;
    }


    const delArr = (item , e) => {
        e.stopPropagation(); // 상위 버블링 하는거 막는거임
        if (confirm('삭제하시겠습니까?')) {
            const targetArray = todoArr[`${ViewYear}${ViewMonth}`][ViewDay];
            const find = targetArray.findIndex((e)=>{ return item === e.key });
            // console.log(find);
            if(find !== -1){
                targetArray.splice(find , 1);
            }
            // 재 랜더링
            renderTodoList(ViewYear, ViewMonth, ViewDay);
        }
    }


    const iptTodo = document.getElementById('todoInput'); // todoList 적는 공간
    todoSubmit.addEventListener('click', ()=>{
        if(!iptTodo.value){
            alert(MSG[1])
            return;
        }
        else if(iptTodo.value.trim() === ''){
            alert(MSG[2]);
            return;
        }
        else{
            let MonthChk =  todoArr[`${ViewYear}${ViewMonth}`];
            if(!MonthChk){
                todoArr[`${ViewYear}${ViewMonth}`] = {};
            }
            let dayChk = todoArr[`${ViewYear}${ViewMonth}`][ViewDay];
            if(!dayChk){
                todoArr[`${ViewYear}${ViewMonth}`][ViewDay] = [];
            }
            todoArr[`${ViewYear}${ViewMonth}`][ViewDay].push({
                
                key: dayChk ? dayChk[dayChk.length -1].key + 1 : 0,
                date : `${ViewYear}.${ViewMonth}.${ViewDay}`,
                check : false,
                title : iptTodo.value,
            });
            iptTodo.value = '';
            renderTodoList(ViewYear ,ViewMonth , ViewDay);
            
        }
    });
    // console.log(ViewDay);
    // console.log(todoArr[`${ViewYear}${ViewMonth}`]);
    // console.log( todoArr[`${ViewYear}${ViewMonth}`][ViewDay][0]['date']);
    const isWorkday = ()=>{
        const ArrTest = todoArr[ViewYear + '' +ViewMonth];
        const isWorkdayArr = [];
        for(const item in ArrTest ){
            isWorkdayArr.push(item);
        }
        console.log(isWorkdayArr);
        const selectTd = document.querySelectorAll('.custum-calendar td');
        const isWorkTodayArr = [];
        
        selectTd.forEach((e)=>{
            isWorkdayArr.includes(e.textContent) ? e.classList.add('ddd') : e;
        });
    }
   
   
    renderTodoList(ViewYear ,ViewMonth , ViewDay); //초기랜더링
    // console.log(todoArr);

 