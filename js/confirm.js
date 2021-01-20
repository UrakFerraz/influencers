{


	document.querySelector('.heroSection2Form').addEventListener('click', (el) => {
		if(el.target.classList.contains('closeDialogBtn')) {
			console.log('click')
			el.target.parentElement.classList.toggle('heroSection2FormVisible');
		}
	})

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


	let btn = document.querySelector('.sendBtn').addEventListener('click', () => {
		let emailField = document.querySelector('.emailField').value;
		if (validateEmail(emailField)) {
			document.querySelector('.heroSection2FormConfirm').classList.toggle('heroSection2FormVisible');
		} else {
			document.querySelector('.heroSection2FormError').classList.toggle('heroSection2FormVisible');
		}
	})
}