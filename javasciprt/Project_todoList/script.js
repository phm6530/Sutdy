    const targetList = document.getElementById('TodoList');
    const targetInput = document.getElementById('inputTodo');
    const targetbtn = document.getElementById('btnArea');
    const SeachTodo = document.getElementById('SeachTodo');
    const localData = localStorage.getItem('List');

    const List = localData ? JSON.parse(localData) : []; //원본데이터 
    const filterList = []; // 필터링 데이터
    

    const LocalUpdate = (arr)=>{
        localStorage.setItem('List', JSON.stringify(arr));
    }

    const isValidInput = (item)=>{
        return item.trim() == '';
    }

    const btnTitle = ['전체' , '미 완료' , '완료'];

    let btnHeader = '';
    btnTitle.forEach(title => {
            btnHeader += `<button onclick="updateList(${btnTitle.indexOf(title)})">${title}</button>`
    });
    targetbtn.innerHTML = btnHeader;

    const chk = (id, active) => {
        List.forEach((item, idx) => {
            if (item.id === id) {
            item.checked = !item.checked;
            }
        });
        updateList(active); 
    }

    const updateList = (active) => {
        const category = {
          0: (e) => e,
          1: (e) => !e.checked,
          2: (e) => e.checked
        };
        const resultArr = filterList.length > 0 ? filterList : List;
        const result = resultArr.filter(category[active || 0]);
      
        // 기존 목록을 지웁니다.
        while (targetList.firstChild) {
          targetList.removeChild(targetList.firstChild);
        }
      
        if (result.length === 0) {
          const message = document.createElement('div');
          message.textContent = '데이터를 입력해주세요';
          targetList.appendChild(message);
        } else {
          result.forEach((item) => {
            const listItem = document.createElement('div');
            listItem.textContent = `${item.id + 1} ${item.work}`;
            if (item.checked) {
              listItem.classList.add('active');
            }
            // 클릭 이벤트 처리를 여기서 추가해야 합니다.
            listItem.onclick = () => chk(item.id, active);
      
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '삭제';
            deleteButton.onclick = () => delList(item.id);
      
            listItem.appendChild(deleteButton);
            targetList.appendChild(listItem);
          });
        }
      
        LocalUpdate(List);
      };
    const generateList = (item ,active) =>{
        let html = '';
        item.forEach((e)=>{
            const activeClasss = e.checked ? 'active' : '';
            html += `<li class="${activeClasss}" onclick="chk(${e.id} , ${active})">${e.id + 1} ${e.work} <button onclick=delList(${e.id})>삭제</button></li>`
        });
        return html;
    }

    const Submit = () =>{
        const intputValue = targetInput.value;
        if(isValidInput(intputValue)){
            alert('입력이 올바르지 않습니다.');
            return;
        }
        List.push({id: List.length === 0 ? 0 : List[List.length - 1].id + 1, work : intputValue , checked : false});
        targetInput.value = '';
        updateList();
    }
    
    const delList = (item)=>{
        if(confirm('삭제하시겠습니까')){
            let index = List.findIndex((e)=> e.id === item);
            List.splice(index , 1);
            updateList();
        }
    }

    const resetFilter = () =>{
        filterList.length = 0;
    }

    const Seach = () => {
    const data = SeachTodo.value;
    if (data.length === 1) {
        alert('두 글자 이상 입력해주세요.');
        return;
    }

    resetFilter(); // 필터링 결과 초기화

    List.forEach((prevArr) => {
        if (prevArr.work.includes(data)) {
            filterList.push(prevArr);
        }
    });

    if (filterList.length === 0) {
        alert('검색결과가 없습니다.');
    }
        console.log('필터된 배열 : ', filterList);
        updateList();
    };
    updateList();
    
