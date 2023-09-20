import { useForm } from "react-hook-form";
 export const LoginForm = () => {


     const {
         register,
         handleSubmit,
     } = useForm()

     const onSubmit = (data) => console.log(data)



    return(

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <img src="" alt="logo"/>
                </div>
                <div>
                    <label htmlFor={"email"}>Correo electrónico</label>
                    <input type="text" id={"email"} {...register("email")}/>
                </div>
                <div>
                    <label htmlFor={"password"}> Contraseña </label>
                    <input type="password" id={"password"} {...register("password")}/>
                </div>
                <div>
                    <button className="button"> Iniciar sección </button>
                </div>

            </form>

    )
}