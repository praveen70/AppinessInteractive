import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import './login.css'; 
import { sigIn } from '../../action/loginAction';   
import { connect } from 'react-redux';
import { login } from '../../json/index';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username1:'',
            password1:'',
        }
    }

    inputChnage = (event) =>{
        const { name, value } =  event.target;
        this.setState({ [name]: value});
    }

    buttonSubmit = (event) => {
        event.preventDefault();
        let [ { username, password } ] = login;
       
        let { username1, password1 } = this.state
        if(!username || !password){
            alert("username should not be blank")
            return false;
        }if(username !==username1 || password !==password1){
            alert("Invalid Credentials")
            return false;
        }else{
            this.props.sigIn(this.state)
            this.props.history.push('/Dashboard')
        }
    }
    render(){
        let { username1, password1 } =  this.state;
        return(
            <div className="container">
            <MDBContainer >
            <MDBRow>
              <MDBCol md="6">
                <MDBCard>
                  <MDBCardBody>
                    <form>
                      <p className="h4 text-center py-4">Login</p>
                      <div className="grey-text">
                        <MDBInput
                         name="username1"
                         value={username1}
                          label="Your name"
                          icon="user"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          onChange={(event) => this.inputChnage(event)}
                        />
                        <MDBInput
                            name="password1"
                            value={password1}
                          label="Your password"
                          icon="lock"
                          group
                          type="password"
                          validate
                          onChange={(event) => this.inputChnage(event)}
                        />
                      </div>
                      <div className="text-center py-4 mt-3">
                        <MDBBtn color="cyan" type="button" onClick={(event)=> this.buttonSubmit(event)}
                        >
                          Login
                        </MDBBtn>
                      </div>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          </div>
        )
    }
}
const mapStateToProps = state => {

       return {
           state: state,
       };
   }
   export default connect(mapStateToProps, { sigIn })(Login);