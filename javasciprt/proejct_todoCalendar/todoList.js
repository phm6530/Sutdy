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
        2: '빈칸만 입력은 안돼요!'
    }

    // btn id 반영
    const idClassButton = (id) => {
        const btn = document.createElement('button');
        btn.setAttribute('id', id);
        btn.setAttribute('type', 'submit');
        return btn;
    }

    // onClick 이벤트 반영 리턴
    const createButton = (event) => {
        const btn = document.createElement('button');
        btn.setAttribute('onClick', event);
        return btn;
    }

    // div 생성 및 class name 반영 리턴
    const createDiv = (e) => {
        const div = document.createElement('div');
        div.classList.add(e);
        return div;
    }

    const todoSubmit = idClassButton('todoSubmit')
    todoSubmit.textContent = '입력';
    const form = document.getElementById('form');
    form.appendChild(todoSubmit);

    // 투두리스트 HTML 개별 생성
    const createTodoItemHTML = (element) => {
        const isCompleteClass = element.check ? 'complete' : '';
        const div = createDiv('todoList');
        const divInfo = createDiv('todoInfo');

        const btnDelete = createButton(`delArr( ${element.key} , event)`);

        if (element.check) {
            div.classList.add(isCompleteClass);
        }
        div.setAttribute('onclick', `chkList(${element.key})`);
        div.setAttribute('date-key', `${element.key}`);

        divInfo.textContent = `${element.title} ${element.date}`;
        divInfo.append(btnDelete);
        div.append(divInfo);

        return div;
    }


    const renderNotThisMonth = (Year, Month, day) => {
        const testDIV = createDiv('todoList');
        
        const isMonth = todoArr[Year + '' + Month];
       
        if (!isMonth) {
            testDIV.textContent = `${Year}${Month}월은 일정이 없습니다 달력을 클릭하여 추가해주세요~!`;
        } else {
            const num = Object.keys(isMonth);
            const Sum = num.reduce((acc, val) => {
                acc += isMonth[val].length
                return acc;
            }, 0);

            testDIV.textContent += `${Year}월에는 총 일정이\n ${Sum}건이 있어요!`;
            num.forEach((key) => {
                const isSucusess = createDiv('suc');
                const resultDIV = createDiv('result');
                resultDIV.textContent += `${key}일 
                ${isMonth[key].reduce((acc , e)=>{
                    e.check === true ? acc ++ : acc ;
                    return acc;
                },0)} 
                / ${isMonth[key].length}`;
                isSucusess.textContent = isMonth[key].every(e => e.check === true) ?  '완료' : '미완료';
                
                resultDIV.appendChild(isSucusess);
                testDIV.appendChild(resultDIV);
            });
        }

        let html = testDIV;
        todoListDiv.textContent = '';
        todoListDiv.appendChild(html);
        isWorkday();
    }

    // 랜더링
    const renderTodoList = (Year, Month, day) => {
        // console.log(todoArr);
        isWorkday(); // 달력에 확인 표시 추가
        const selectMonth = todoArr[`${Year}${Month}`];
        const testDIV = createDiv('todoList');
        let html;
        if (!selectMonth) {
            testDIV.textContent = `${Month}월은 일정이 없네요`;
            html = testDIV;
        } else {
            const selectDay = selectMonth[day];
            if (!selectDay || selectDay.length === 0) {
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
        const findChkindex = chkChange.find(e => {
            return e.key === item
        });
        updateTodoItem(findChkindex)
    }

    //하나만 갱신할 함수
    const updateTodoItem = (element) => {
        const todoItemDiv = document.querySelector(`[date-key="${element.key}"]`);
        const stringDom = createTodoItemHTML(element).outerHTML;
        todoItemDiv.outerHTML = stringDom;
        isWorkday();
        localStorage.setItem('Todolist', JSON.stringify(todoArr));
    }

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
                if (Object.keys(todoArr[idx]).length !== 0) {
                    monthKeyArr[idx] = todoArr[idx];
                }
            });

            // 새로운 객체로 기존 todoArr를 덮어씌움
            todoArr = monthKeyArr;
            // console.log('수정 arr : ', todoArr);

            renderTodoList(ViewYear, ViewMonth, ViewDay);
        }
    };


    const iptTodo = document.getElementById('todoInput'); // todoList 적는 공간
    todoSubmit.addEventListener('click', () => {
        if (!iptTodo.value) {
            alert(MSG[1])
            return;
        } else if (iptTodo.value.trim() === '') {
            alert(MSG[2]);
            return;
        } else {
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
                title: iptTodo.value,
            });
            iptTodo.value = '';
            renderTodoList(ViewYear, ViewMonth, ViewDay);

        }
    });

    const isWorkday = () => {
        const ArrTest = todoArr[ViewYear + '' + ViewMonth];
        const isWorkdayArr = [];
        for (const item in ArrTest) {
            isWorkdayArr.push(item);
        }

        const selectTd = document.querySelectorAll('.custum-calendar td');
        selectTd.forEach((e) => {
            if (isWorkdayArr.includes(e.textContent)) {
                if (ArrTest[e.textContent].every(e => e.check === true)) {
                    e.classList.add('isWorkday');
                    e.classList.add('isComplete');
                } else {
                    e.classList.remove('isComplete');
                    e.classList.add('isWorkday');
                }
            } else {
                e.classList.remove('isWorkday');
            }
        });
    }
    renderTodoList(ViewYear, ViewMonth, ViewDay); //초기랜더링
    // renderNotThisMonth(ViewYear ,ViewMonth , ViewDay)
