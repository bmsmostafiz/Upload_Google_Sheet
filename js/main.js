const scriptURL = 'https://script.google.com/macros/s/AKfycbytX8NVzIsDjAjVNRxSPohKMUdV5M_L1uyF-mMjCuM9Kz9Il3pv9O-EUTCAjZhbdBd1/exec'
        const form = document.forms['google-sheet']

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, {method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
                form.reset()
        })