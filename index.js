// Classe Paciente
class Paciente {
   constructor(nome, cpf, dataNascimento, telefone) {
       this.nome = nome;
       this.cpf = cpf;
       this.dataNascimento = dataNascimento;
       this.telefone = telefone;
       this.consultas = [];
   }

   // Método para adicionar uma consulta ao paciente
   marcarConsulta(consulta) {
       this.consultas.push(consulta);
       console.log(`Consulta marcada para ${this.nome} com ${consulta.medico.nome} em ${consulta.data} às ${consulta.hora}`);
   }

   // Método para listar todas as consultas do paciente
   listarConsultas() {
       console.log(`Consultas para ${this.nome}:`);
       this.consultas.forEach(consulta => {
           console.log(`Data: ${consulta.data}, Hora: ${consulta.hora}, Médico: ${consulta.medico.nome}, Status: ${consulta.status}`);
       });
   }
}

// Classe Medico
class Medico {
   constructor(nome, crm, especialidade) {
       this.nome = nome;
       this.crm = crm;
       this.especialidade = especialidade;
       this.agenda = [];
   }

   // Método para listar a agenda do médico
   consultarAgenda() {
       console.log(`Agenda do Dr(a). ${this.nome}:`);
       this.agenda.forEach(consulta => {
           console.log(`Data: ${consulta.data}, Hora: ${consulta.hora}, Paciente: ${consulta.paciente.nome}, Status: ${consulta.status}`);
       });
   }
}

// Classe Consulta
class Consulta {
   constructor(data, hora, medico, paciente) {
       this.data = data;
       this.hora = hora;
       this.medico = medico;
       this.paciente = paciente;
       this.status = 'agendada';
       medico.agenda.push(this);
       paciente.marcarConsulta(this);
   }

   // Método para cancelar a consulta
   cancelar() {
       if (this.status === 'realizada') {
           console.log("A consulta já foi realizada e não pode ser cancelada.");
       } else {
           this.status = 'cancelada';
           console.log(`Consulta de ${this.paciente.nome} com ${this.medico.nome} foi cancelada.`);
       }
   }

   // Método para confirmar a realização da consulta
   confirmarRealizacao() {
       if (this.status === 'cancelada') {
           console.log("A consulta foi cancelada e não pode ser confirmada como realizada.");
       } else {
           this.status = 'realizada';
           console.log(`Consulta de ${this.paciente.nome} com ${this.medico.nome} foi realizada.`);
       }
   }
}

// Testando o sistema

// Criando instâncias de pacientes e médicos
const paciente1 = new Paciente("João Silva", "123.456.789-00", "01/01/1990", "99999-9999");
const medico1 = new Medico("Dra. Ana Clara", "12345", "Cardiologista");

// Agendando uma consulta
const consulta1 = new Consulta("10/11/2024", "14:00", medico1, paciente1);

// Listando consultas do paciente
paciente1.listarConsultas();

// Consultando agenda do médico
medico1.consultarAgenda();

// Confirmando realização da consulta
consulta1.confirmarRealizacao();

// Tentando cancelar uma consulta já realizada
consulta1.cancelar();
