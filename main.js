class Pessoa{
    #nome = '';
    #idade = 0;
    constructor(nome, idade){
        this.#nome = nome;
        this.#idade = idade;
    }

    getNome(){
        return this.#nome;
    }

    setNome(nome){
        this.#nome = nome;
    }

    getIdade(){
        return this.#idade;
    }

    setIdade(idade){
        this.#idade = idade
    }
}

class Aluno extends Pessoa{
    #ra = '';
    constructor(nome,ra,idade){
        super(nome,idade);
        this.#ra = ra;
    }

    getRa(){
        return this.#ra;
    }

    setRa(ra){
        this.#ra = ra;
    }
}

pessoa1 = new Pessoa("Rafael", 20);
aluno1 = new Aluno(pessoa1.getNome(),'22222039-4', pessoa1.getIdade());


console.log(aluno1.getNome());
console.log(aluno1.getIdade());
console.log(aluno1.getRa());

