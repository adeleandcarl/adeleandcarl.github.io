var form = document.getElementById("contact-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("contact-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        form.classList.add("submitted");
        if (response.ok) {
            status.innerHTML = "{% include copy/contact_us_form_submission_response_success.md %}";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "{% include copy/contact_us_form_submission_response_failure.md %}"
                }
            })
        }
    }).catch(error => {
        form.classList.add("submitted");
        status.innerHTML = "{% include copy/contact_us_form_submission_response_failure.md %}"
    });
}
form.addEventListener("submit", handleSubmit)
