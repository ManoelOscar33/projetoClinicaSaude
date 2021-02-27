class Exame {
	constructor(nome_completo, telefone, email) {
		this.nome_completo = nome_completo;
		this.telefone = telefone;
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

	gravar(e) {
		let id = this.getProximoId();

		localStorage.setItem(id, JSON.stringify(e));

		localStorage.setItem('id', id);
	}

	recuperarTodosRegistros() {

		let exames = Array();

		let id = localStorage.getItem('id');

		//Recuperar todas as consultas cadastradas no localStorage
		for(let i = 1; i <= id; i++) {
			
			//Recuperar a consulta
			let exame = JSON.parse(localStorage.getItem(i));

			//Instrução caso o documento(i(id) seja nulo
			if (exame === null) {
				continue;
			}

			exames.push(exame);
	 	}

	 	console.log(exames);
	}
}

let bd = new Bd();

function marcarExame() {
	let nome_completo = document.getElementById('nome_completo');
	let telefone = document.getElementById('telefone');
	let email = document.getElementById('email');

	let exame = new Exame(

		nome_completo.value,
		telefone.value,
		email.value

	);

	if(exame.validarDados()) {
		bd.gravar(exame);

		document.getElementById('modal_titulo').innerHTML = 'Registro inserido com sucesso';
		document.getElementById('modal_titulo_div').className = 'modal-header text-success';
		document.getElementById('modal_corpo').innerHTML = 'Exame foi marcado com sucesso.';
		document.getElementById('modal_btn').innerHTML = 'Voltar';
		document.getElementById('modal_btn').className = 'btn btn-success';
		$('#modalRegistraDespesa').modal('show');

	} else {
		document.getElementById('modal_titulo').innerHTML = 'Erro no registro';
		document.getElementById('modal_titulo_div').className = 'modal-header text-danger';
		document.getElementById('modal_corpo').innerHTML = 'Exame não foi marcado.';
		document.getElementById('modal_btn').innerHTML = 'Voltar e corrigir';
		document.getElementById('modal_btn').className = 'btn btn-danger';
		$('#modalRegistraDespesa').modal('show');

	}
}




