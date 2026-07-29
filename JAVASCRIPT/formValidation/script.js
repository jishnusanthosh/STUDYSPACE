function validateForm(event) {
    event.preventDefault()
    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value
    const error=document.getElementById('error')
    console.log(username);
    console.log(password);
    error.textContent='';
    if (username==='') {
        error.textContent='username required';
        return false;
    }
    if (username.length<5) {
        error.textContent='username required 5 character';
        return false;
    }
    if (password==='') {
        error.textContent='password required';
        return false;
    }
    alert('form submited successfully')
    return true
}