function Form(){
    function cadatrarUsuario(e){
        e.preventDefault()
        console.log('Cadastrou o Usuário!')

    }
     return (
        <div>
            <h1>Meu Cadastro:</h1>
    

             <form onSubmit={cadatrarUsuario}>
        




            <div>
                <input type='text' placeholder='Digite seu nome'/>
            </div>

             <div>
                 <input type='submit' value='cadastrar'/>
            </div>

            </form>




        </div>

     )

}


export default Form