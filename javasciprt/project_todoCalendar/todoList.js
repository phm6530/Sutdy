    const wrapList = document.querySelector('.wrap_list'); // Todo Wrap
    const todoListDiv = document.getElementById('todoList'); // 투두리스트 뿌려질 영역
    const localData = localStorage.getItem('Todolist');

    // 더미 데이터
    // const DummyData = {
    //     '202311' : {
    //         '1' : [
    //             {
    //                 key : 0,
    //                 date : `2023.11.09`,
    //                 check : false,
    //                 title : `첫번 째` 
    //             },
    //             {
    //                 key : 1,
    //                 date : `2023.11.09`,
    //                 check : false,
    //                 title : `두번 째` 
    //             }

    //         ],
    //         '2' : [
    //             {
    //                 key : 0,
    //                 date : `2023.11.09`,
    //                 check : false,
    //                 title : `오늘 할일` 
    //             },
    //             {
    //                 key : 1,
    //                 date : `2023.11.09`,
    //                 check : false,
    //                 title : `오늘 할일` 
    //             }

    //         ],
    //         '12' : [
    //             {
    //                 key : 0,
    //                 date : `2023.11.11`,
    //                 check : false,
    //                 title : `오늘 할일` 
    //             },
    //             {
    //                 key : 1,
    //                 date : `2023.11.19`,
    //                 check : false,
    //                 title : `오늘 할일` 
    //             }

    //         ]
    //     }

    // }

    let todoArr = !localData ? {} : JSON.parse(localData);
    const MSG = {
        1: '할일을 입력해주세요 !',
        2: '빈칸만 입력은 안돼요!',
        3: '일정을 입력해주세요!'
    }

 
    
    const createForm = () => {
        const addForm = document.createElement('form');
        const input = creatInput('todoInput', 'text');
        input.placeholder = MSG[3];
        addForm.setAttribute('id', 'form');
        addForm.setAttribute('onsubmit', 'return false');
    
        const todoSubmit = idClassButton('todoSubmit');
        todoSubmit.textContent = 'Add';
    
        addForm.appendChild(input);
        addForm.appendChild(todoSubmit);
        wrapList.appendChild(addForm);
    
        const iptTodo = document.getElementById('todoInput');
        return { addForm, iptTodo, todoSubmit };
    };
    
    const validateInput = (value) => {
        if (!value) {
            alert(MSG[1]);
            return false;
        } else if (value.trim() === '') {
            alert(MSG[2]);
            return false;
        }
        return true;
    };
    
    const addToTodoArr = (value) => {
        let MonthChk = todoArr[`${ViewYear}${ViewMonth}`];
        if (!MonthChk) {
            todoArr[`${ViewYear}${ViewMonth}`] = {};
        }
        let dayChk = todoArr[`${ViewYear}${ViewMonth}`][ViewDay];
        if (!dayChk) {
            todoArr[`${ViewYear}${ViewMonth}`][ViewDay] = [];
        }
        todoArr[`${ViewYear}${ViewMonth}`][ViewDay].push({
            key: !dayChk || dayChk.length === 0 ? 0 : dayChk[dayChk.length - 1].key + 1,
            date: `${ViewYear}.${ViewMonth}.${ViewDay}`,
            check: false,
            title: value,
        });
    };
    
    const ListSubmit = () => {
        const { addForm, iptTodo, todoSubmit } = createForm();
    
        todoSubmit.addEventListener('click', () => {
            const inputValue = iptTodo.value;
            if (validateInput(inputValue)) {
                addToTodoArr(inputValue);
                iptTodo.value = '';
                renderTodoList(ViewYear, ViewMonth, ViewDay);
            }
        });
    };

    const createTodoItemHTML = (element) => {
        
        // const isCompleteClass = chkTest(element);
        const div = createDiv('todoList');
        const divInfo = createDiv('todoInfo');
        const btnDelete = createButton(`delArr( ${element.key} , event)`);
        
        btnDelete.classList.add('deleteIcon' , 'centerIcon' , 'btn-styleType1');
        div.setAttribute('onclick', `chkList(${element.key})`);

        
        element.check === true ? div.classList.add('complete') : undefined ;
    
        // if (element.check) {
        //     div.classList.add(isCompleteClass);
        // }
        

        div.setAttribute('date-key', `${element.key}`);
        const icon = document.createElement('i');
        icon.classList.add('fa','fa-check');
    
    
        const workText = createDiv('workText');
        const workTitle = creatSpan('workTitle');
        const workDate = creatSpan('workDate');
        const btnCheck = creatSpan('btnCheck');
        btnCheck.textContent = `${element.title}`;

    
        const Label = document.createElement('label');
        Label.setAttribute('for', `chk${element.key}`);
        Label.classList.add('radio-label');
        Label.appendChild(icon);
        Label.appendChild(btnCheck);
        

        
        // workTitle.appendChild(addCheck);
        
        workDate.textContent = element.date;
        workTitle.appendChild(Label)
        workText.appendChild(workTitle);
        workText.appendChild(workDate);
        // divInfo.textContent = `${element.key + 1} ${element.title} ${element.date}`;
        divInfo.append(workText);
        divInfo.append(btnDelete);
        div.append(divInfo);

        return div;
    }
    
    

    const renderNotThisMonth = (Year, Month, day) => {
        const testDIV = createDiv('todoList');
        const isMonth = todoArr[Year + '' + Month];
        testDIV.classList.add('infoClass');
        if (!isMonth) {
            testDIV.textContent = `${Year}${Month}월은 일정이 없습니다 달력을 클릭하여 추가해주세요~!`;
        } else {
           
            const num = Object.keys(isMonth);
            const Sum = num.reduce((acc, val) => {
                // console.log(val);
                acc += isMonth[val].length
                return acc;
            }, 0);

            const falseSum = num.reduce((acc , val)=> {
                const trueArr = isMonth[val].filter((e)=> e.check === true );
                acc += trueArr.length;
                return acc;
            }, 0);
            testDIV.textContent += `${Month}월에는 총 일정이\n ${Sum}건이 있어요! ${Math.floor(falseSum/Sum * 100)}% 완료하셨네요!`;
    
            num.forEach((key) => {
                const isSucusess = createDiv('YoN');
                const resultDIV = createDiv('result');
                resultDIV.setAttribute('onClick',` renderTodoList(ViewYear, ViewMonth, ${key});`);
                resultDIV.textContent += `${key}일 
                ${isMonth[key].reduce((acc , e)=>{
                    e.check === true ? acc ++ : acc ;
                    return acc;
                },0)} 
                / ${isMonth[key].length}`;
                isSucusess.textContent = isMonth[key].every(e => e.check === true) ?  'Complete' : 'NotYet';
                isMonth[key].every(e => e.check === true) ? isSucusess.classList.add('end'): isSucusess.classList.add('no');
                resultDIV.appendChild(isSucusess);
                testDIV.appendChild(resultDIV);
            });
            
        }

        
        todoListDiv.textContent = '';
        todoListDiv.appendChild(testDIV);
        isWorkday();
    }

    // 랜더링
    const renderTodoList = (Year, Month, day) => {
        ViewDay = day;
        if (!document.getElementById('form')) {
            ListSubmit();
        }
     
        // console.log(todoArr);
        isWorkday(); // 달력에 확인 표시 추가
        const selectMonth = todoArr[`${Year}${Month}`];
        const testDIV = createDiv('todoList');
    
        let html;
        if (!selectMonth) {
            testDIV.textContent = `${Month}월은 일정이 없네요`;
            testDIV.classList.add('noWorkmonth');
            html = testDIV;
        } else {
            const selectDay = selectMonth[day];
            if (!selectDay || selectDay.length === 0) {
                testDIV.classList.add('infoClass');
                testDIV.textContent = day === ViewDay ? `오늘은 일정이없네요` : `${Month}월 ${day}일은 일정이 없습니다`;
                html = testDIV;
            } else {
                // console.log(selectDay);
                todoListDiv.textContent = '';
                selectDay.forEach(element => {
                    todoListDiv.appendChild(createTodoItemHTML(element));
                });
                localStorage.setItem('Todolist', JSON.stringify(todoArr));
                return;
            }
        }

        localStorage.setItem('Todolist', JSON.stringify(todoArr));
        todoListDiv.textContent = '';
        todoListDiv.appendChild(html);
       
    }

    const chkList = (item) => {
        const chkChange = todoArr[`${ViewYear}${ViewMonth}`][ViewDay];
        chkChange.forEach((e) => e.key === item ? e.check = !e.check : e.key);
        localStorage.setItem('Todolist', JSON.stringify(todoArr));
        isWorkday();
        const select = document.querySelector(`[date-key="${item}"]`);
        select.classList.toggle('complete');
        const findChkindex = chkChange.find(e => {
            return e.key === item
        });
        // updateTodoItem(findChkindex)
    }

    //하나만 갱신할 함수
    // const updateTodoItem = (element) => {
    //     // const todoItemDiv = document.querySelector(`[date-key="${element.key}"]`);
    //     // const stringDom = createTodoItemHTML(element).outerHTML;
    //     // todoItemDiv.outerHTML = stringDom;
    //     isWorkday();
    // }

    const delArr = (item, e) => {
        e.stopPropagation(); // 상위 버블링 하는거 막는거임
        if (confirm('삭제하시겠습니까?')) {
            const targetArray = todoArr[`${ViewYear}${ViewMonth}`][ViewDay];
            const find = targetArray.findIndex((el) => item === el.key);

            if (find !== -1) {
                targetArray.splice(find, 1);
            }

            const dayKeys = Object.keys(todoArr[`${ViewYear}${ViewMonth}`]);
            const dayIdx = dayKeys.filter((e) => todoArr[`${ViewYear}${ViewMonth}`][e].length !== 0);
            // console.log(dayKeys);

            const keyArr = {}; // 엎어칠 빈 객체 생성
            dayIdx.forEach(idx => {
                keyArr[idx] = todoArr[`${ViewYear}${ViewMonth}`][idx];
            });
            todoArr[`${ViewYear}${ViewMonth}`] = keyArr;

            const monthKeys = Object.keys(todoArr);
            const monthKeyArr = {};

            // console.log('old 월 : ', monthKeys);
            // monthKeys 배열을 순회하면서 빈 배열이 아닌 경우에만 새로운 객체에 추가
            monthKeys.forEach((idx) => {
                // console.log(idx);
                if (Object.keys(todoArr[idx]).length !== 0) {
                    monthKeyArr[idx] = todoArr[idx];
                }
            });

            // 새로운 객체로 기존 todoArr를 덮어씌움
            todoArr = monthKeyArr;
            // console.log('수정 arr : ', todoArr);

            renderTodoList(ViewYear, ViewMonth, ViewDay);
            isWorkday();
        }
    };




    const isWorkday = () => {
        const ArrItem = todoArr[ViewYear + '' + ViewMonth];
        const workdayArray = ArrItem ? Object.keys(ArrItem) : [];
        const tdElements = document.querySelectorAll('.custum-calendar td');

        tdElements.forEach((element) => {
            const day = element.textContent;
    
            if (workdayArray.includes(day)) {
                const allCompleted = ArrItem[day].every((item) => item.check === true);
                element.classList.toggle('isComplete', allCompleted);
                element.classList.add('isWorkday');
            } else {
                element.classList.remove('isComplete', 'isWorkday');
            }
        });
   }

    // document.addEventListener('DOMContentLoaded',()=>{
    //         const hat = document.querySelectorAll('label');
    //         hat.forEach((e)=>{
    //             e.addEventListener('click',()=>{
                    
    //             });
    //         });
    // });
   
    renderTodoList(ViewYear, ViewMonth, ViewDay); //초기랜더링
    // renderNotThisMonth(ViewYear ,ViewMonth , ViewDay);
