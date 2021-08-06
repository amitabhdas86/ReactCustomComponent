import React from 'react';
import {Link} from 'react-router-dom';

class AddContact extends React.Component{
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
    state= {name:"",email:"",};  
    add= (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email ===""){
            alert("All Mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""});
        console.log(this.props);
        // this.props.history.push("/");
    };
    render(){
    return(
        <div className="twelve wide stretched column">
            <div className="ui segment">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={this.add}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" ref={this.inputRef} value={this.state.name}
                    onChange={(e)=>this.setState({name:e.target.value})}></input>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" value={this.state.email}
                    onChange={(e)=>this.setState({email:e.target.value})}></input>
                </div>
                <button className="ui button blue">ADD</button>
                {/* <div>
                <Link to="/">
                <button className="ui button blue">ADD</button>
                </Link>
                </div> */}
            </form>
            </div>
        </div>
    )
  }
}


export default AddContact