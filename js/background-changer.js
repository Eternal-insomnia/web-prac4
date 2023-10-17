var email_form = document.querySelector(".email-form"),
    email_form__input_email = document.querySelector(".email-form__input-email"),
    email_form__check_button = document.querySelector(".email-form__check-button");

    console.log(email_form__input_email.classList);

    document.addEventListener("dblclick", (e) => {
        if(e.target.classList.contains("email-form"))
            email_form.classList.toggle("email-form_theme_dark");
            email_form__input_email.classList.toggle("email-form__input-email_theme_dark");
            email_form__check_button.classList.toggle("email-form__check-button_theme_dark");
            console.log("theme_dark");
    });
