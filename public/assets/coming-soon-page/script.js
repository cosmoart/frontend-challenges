const $FORM = document.querySelector('.mainArticle__form'),
	$EMAIL = document.querySelector('.mainArticle__form input'),
	$ERROR = document.querySelector('.mainArticle__error'),
	$SUBMIT = document.querySelector('.mA__f__Submit');

const EMAILREGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

$FORM.addEventListener('submit', (e) => {
	e.preventDefault();
	if ($EMAIL.value.match(EMAILREGEX)) {
		$ERROR.classList.remove('show');
		$SUBMIT.classList.remove('show--error');
		$FORM.submit();
	} else {
		$ERROR.innerHTML = " <p>Please provided a valid email</p>";
		$EMAIL.style.outline = "2px solid var(--SoftRed)";
		$ERROR.classList.add('show');
		$SUBMIT.classList.add('show--error');
	}
});