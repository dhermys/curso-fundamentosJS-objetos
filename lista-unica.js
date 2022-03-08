const clientes = [{
    nome: 'Andre',
    idade: 36,
    cpf: '12345678912',
    email: 'andre@rmail.com',
    fones: ['5591235498', '5521988743124'],
    dependentes: [
        {
            nome: 'Sara',
            parentesco: 'filha',
            dataNasc: '20/03/2011'
        },
        {
            nome: 'Samia Maria',
            parentesco: 'filha',
            dataNasc: '04/01/2014'
        }],
},
{
    nome: 'Juliana',
    cpf: '24867589623',
    dependentes: [{
        nome: 'Sophia',
        parentesco: 'filha',
        dataNasc: '30/08/2020'
    }],
}
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependentes)