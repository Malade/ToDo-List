nameEl = document.querySelector('input')
formEl = document.querySelector('#name_form')
userEl = document.querySelector('.user_name')

formEl.addEventListener('submit', function() {
  console.log(nameEl.value)
  localStorage.setItem('userName', nameEl.value)
})

if (localStorage.key('userName') != null) {
  formEl.classList.add('hidden')
  userEl.innerText = `Welcome ${localStorage.getItem('userName')}`
}