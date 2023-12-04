function Evento(){
    function meuEvento(){
        console.log('Opa, fui ativado!')
    }
    return (    
        <div>
            <p>Clique para disparar um evento</p>
            <button Onclick={meuEvento}>Ativar </button>

        </div>


    )


}

export default Evento