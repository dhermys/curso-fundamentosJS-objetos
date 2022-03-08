const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '12345678912',
    email: 'andre@rmail.com',
    fones: ['5591235498', '5521988743124'],
    dependentes: [{
        nome: 'Sara',
        parentesco: 'filha',
        dataNasc: '20/03/2011'
    }]
}

cliente.dependentes.push({
    nome: 'Samia Maria',
    parentesco: 'filha',
    dataNasc: '04/01/2014'
})

console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === '04/01/2014')

console.log(filhaMaisNova[0].nome)