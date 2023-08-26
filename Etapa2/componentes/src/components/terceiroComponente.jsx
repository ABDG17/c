const terceiroComponente = () => {
    const professor = {
        nome: "Maria",
        curso: "Programação",
        formacao: "Ciência da Computação",
        idade: 30,
        titular: true
    }
    return(
        <p>
            <strong>Nome: </strong>{professor.nome}<br />
            <strong>Curso: </strong>{professor.curso}<br />
            <strong>Formação: </strong>{professor.formacao}<br />
            <strong>Idade: </strong>{professor.idade}<br />
            <strong>Titular: </strong>{professor.titular}<br />
        </p>
    )
}

export default terceiroComponente;