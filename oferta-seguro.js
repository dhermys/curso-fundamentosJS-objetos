const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '12345678912',
    email: 'andre@rmail.com',
    fones: ['5591235498', '5521988743124'],
    dependentes: [
        {
            nome: 'Sara',
            parentesco: 'filha',
            dataNasc: '20/03/2011'},
        {
            nome: 'Samia Maria',
            parentesco: 'filha',
            dataNasc: '04/01/2014'
        }
    ],
    saldo: 100,

    depositar:function(valor)
    {
        this.saldo += valor
    }
}


function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes('dependentes')){
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

console.log(Object.entries(cliente))
console.log(Object.values(cliente))
oferecerSeguro(cliente)