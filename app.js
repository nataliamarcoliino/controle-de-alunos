const alunos = [];

function cadastrarAluno(nome) {
    if (!nome || nome.trim() === '') {
        console.log('Erro: O nome do aluno é obrigatório.');
        return;
    }
    
    alunos.push({ nome, status: 'Ativo' });
    console.log(`Aluno ${nome} cadastrado com sucesso.`);
}
