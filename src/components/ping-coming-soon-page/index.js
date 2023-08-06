import styles from './index.scss';

const $form = document.getElementById("main_form"),
    $mail = $form.querySelector(`input[type="email"]`),
    $error = $form.querySelector(".error"),
    $submit = $form.querySelector(`button[type="submit"]`);

const EMAILREGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

$submit.addEventListener("click", e => {
    e.preventDefault();

    const handleError = () => {
        $error.classList.add("error--active");
        $mail.style.border = "1px solid hsl(354, 100%, 66%)";
        $submit.style.animation = "shake .3s ease-in-out";
        $submit.addEventListener("animationend", () => $submit.style.animation = "");
    }

    if ($mail.value === "") {
        $error.textContent = "Whoops! It looks like you forgot to add your email";
        return handleError();
    }
    else if (!$mail.value.match(EMAILREGEX)) {
        $error.textContent = "Please provide a valid email address";
        return handleError();
    };

    $error.classList.remove("error--active");
    $form.submit();
})