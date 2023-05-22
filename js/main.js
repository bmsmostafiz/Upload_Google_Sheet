const scriptURL = 'https://script.google.com/macros/s/AKfycbytX8NVzIsDjAjVNRxSPohKMUdV5M_L1uyF-mMjCuM9Kz9Il3pv9O-EUTCAjZhbdBd1/exec'
const form = document.forms['google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            msg.innerHTML = "Thanks for Contacting us..!"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 3000)
            form.reset()
        })

        .catch(error => console.error('Error!', error.message))
})