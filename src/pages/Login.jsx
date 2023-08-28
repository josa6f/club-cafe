

export function Login() {



  return(

    <>
      <h1 className="Login-title">Login</h1>
      
      <div className="label-inputs">

        <label className="label-inputs__name">
          <input 
            type="text" 
            name="first-name"
            placeholder="write your first name"/>
        </label>


        <label className="label-inputs__second-name">
          <input 
            type="text"
            name="second-name" 
            placeholder="write your second name"/>
        </label>


        <label className="label-inputs__email">
          <input 
            type="email" 
            name="email"
            placeholder="email"/>
        </label>


        <label className="label-inputs__password">
          <input 
            type="password" 
            name="password"
            placeholder="password"/>
        </label>


        <input type="submit" value="submit"/>

      </div>
    
    </>

  )

}

