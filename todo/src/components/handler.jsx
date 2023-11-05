
export function handler(e, MSG , AddWork) {
  e.preventDefault();
  let value = document.getElementById("inputValue").value;
  handlerWork({ value, MSG , AddWork}); //<--props
}

export function handlerWork(props) {
    if (!props.value) {
      alert(props.MSG[0]);
      return;
    }
    if (props.value.trim() === "") {
      alert(props.MSG[1]);
      return;
    }
    props.AddWork(props.value);
    document.getElementById("inputValue").value = ""; // 수정된 부분
  }
  
