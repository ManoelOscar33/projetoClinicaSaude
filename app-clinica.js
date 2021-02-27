class Cadastro {
	constructor(email) {
		this.email = email;
	}

	validarDados() {
		for(let i in this) {
			if(this[i] === undefined || this[i] === '' || this[i] === null) {
				return false;
			}
		}
		return true;
	}
}

class Bd {

	constructor() {
		let id = localStorage.getItem('id');

		if (id === null) {
			localStorage.setItem('id', 0);
		} 
	}

	
	getProximoId() {
		let proximoId = localStorage.getItem('id');
		
		return (parseInt(proximoId) + 1);
	}

	gravar(cad) {
		//localStorage.setItem('cadastro', JSON.stringify(cad));
		let id = this.getProximoId();

		localStorage.setItem(id, JSON.stringify(cad));

		localStorage.setItem('id', id);
	}
}

let bd = new Bd();

function cadastrarEmail() {
	let email = document.getElementById('email');

	let cadastro = new Cadastro(

		email.value

	);

	if(cadastro.validarDados()) {
		bd.gravar(cadastro);
		$('#sucessoGravacao').modal('show');
	} else {
		$('#erroGravacao').modal('show');
	}
}



