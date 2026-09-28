const alunos = [];

function cadastrarAluno(nome) {
    alunos.push({ nome, status: 'Ativo' });
    console.log(`Aluno ${nome} cadastrado com sucesso.`);
}
