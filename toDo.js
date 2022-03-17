const toDoEl = document.querySelector('#toDo')
const listEl = document.querySelector('#toDo_List')

function testFunction() {
  if (toDoEl.value == '') {
    alert('값을 입력하세요!')
  }
  else {
    const li = document.createElement('li')
    const rmBtn = document.createElement('button')
    rmBtn.innerText = '테스트용 버튼'
    li.innerText = toDoEl.value
    li.appendChild(rmBtn)
    listEl.appendChild(li)

    toDoEl.value = null
    console.log(listEl)
    console.log(JSON.stringify(listEl.childNodes))
  }
}

