
 export const LoginForm = () => {
    return(

            <form action="#">
                <div>
                    <img src="" alt="logo"/>
                </div>
                <div>
                    <label htmlFor={"email"}>Correo electrónico</label>
                    <input type="text" id={"email"} name={"email"}/>
                </div>
                <div>
                    <label htmlFor={"password"}> Contraseña </label>
                    <input type="password" id={"password"} name={"password"}/>
                </div>
                <div>
                    <button className="button"> Iniciar sección </button>
                </div>

            </form>

    )
}
