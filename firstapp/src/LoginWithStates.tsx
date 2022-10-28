import { hover } from "@testing-library/user-event/dist/hover";
import React, {Component} from "react";

export class Login extends Component<{}, {username:string, password:string}>{

    
    constructor(props:any)
    {
        super(props)
        this.state = {username:'',password:''}
    }

    render(): React.ReactNode{
        return(
            <div>
                Enter UserName:<input type='text' placeholder="Enter username" onChange={(e)=> this.setUserName(e)}/>
                <br/>
                Enter Password: <input type='password' placeholder="Enter Password" onChange={(e)=> this.setPassword(e)}/>
                <br/>
                <button onClick={(e)=> this.VerifyLogin(e)} onMouseEnter ={(e) =>this.ChangeBackground(e)} onMouseOut ={(e) => this.ResetBackground(e)} > Login</button>
                {this.toast}
            </div>
        )
    }
  ///////onMouseEnter ={(e) =>ChangeBackground(e)} onMouseOut ={(e) => ResetBackground(e)}
    public toast:any 
    public VerifyLogin(e:any)
    {
        e.preventDefault()
        if(this.state.username == 'admin' && this.state.password == 'nimda')
        {
          //  alert('Login Successful ! 😍')
            this.toast = <OkToast/>
        }
        else{
        //    alert('Login Failed ! 😩')
            this.toast = <ErrorToast/>
        }
        this.forceUpdate()  // forcing react framework to re-render due to changes made
    }

    public setUserName(e:any){
        console.log(e.target.value)
        this.setState({username:e.target.value})
    }

    public setPassword(e:any){
        console.log(e.target.value)
        this.setState({password:e.target.value})
    }

    public ChangeBackground(e:any)
    {
        console.log(e.target.style.BackgroundColor = 'red')
    }


    public ResetBackground(e:any)
    {
        console.log(e.target.style.BackgroundColor= 'yellow')
    }
}



export function OkToast()
{
    return(
        <div className="succes">Login SuccessFul !</div>
    )
}

export function ErrorToast()
{
    return(
        <div className="succes">Login Failed !</div>
    )
}




