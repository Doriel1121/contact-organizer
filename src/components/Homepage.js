import React, { Component } from 'react';
import Contact from './Contact';

export default class Homepage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             allContacts:[{name:"alex", id:1, job:"IT team manager", phonenumber:"0501234567", picture: "alex jonathan.jpg", address:"tel aviv"},
            {name:"janeth", id:2, phonenumber:"0511234567",job:"security" ,picture: "janeth carton.jpg", address:"jerusalem"}],
            flag:0,
            name:"",
            job:"",
            phonenumber:""
        }
    }

    updateContact=(con)=>{
        let newContactList = JSON.parse(JSON.stringify(this.state.allContacts))
        for(let i = 0; i < newContactList.length; i++){
            if(newContactList[i].id === con.id){
                newContactList[i] = con;
            }
        }
        this.setState({allContacts:newContactList}, () => {
            console.log(this.state.allContacts);
        })        
    }

    deleteContact=(id)=>{     
        this.state.allContacts.map((element)=>{
            if (id === element.id) {
                let afterfilter=this.state.allContacts.filter((person)=>{ return person!==element})
                console.log(afterfilter);
                
                this.setState({allContacts:afterfilter})
            }
        })   
    }

    setFlag=()=>{
        this.setState({flag:1})
    }

    changeflagvalue=()=>{
        this.setState({flag:0})
    }

    addName=(n)=>{
        let name=n.target.value
        this.setState({name:name})
    }

    addJob=(j)=>{
        let job= j.target.value
        this.setState({job:job})
    }

    addPhone=(p)=>{
        let phone=p.target.value
        this.setState({phonenumber:phone})
    }

    addContant=()=>{
        let newcontact={
            name:this.state.name,
            job:this.state.job,
            phonenumber:this.state.phonenumber,
            picture:<img src="sandra smith.jpg"/>
        }
        this.setState({allContacts:[...this.state.allContacts,newcontact]})
    }
    
    showMe = () => {
        if (this.state.flag==0) {
            return (
                <div className="row">
                    
                    {this.state.allContacts.map((element)=>{                    
                    return (<div className="col-sm-12 col-md-6">
                       <Contact className="asd" key={element.id} id={this.deleteContact} updatecontact={this.updateContact} contact={element}/>
                       </div>
                   )
                   
               })} 
                </div>
            )
        }else{ return <div>
            <input onChange={this.addName} type="text" placeholder="name"/><br/>
            <input onChange={this.addJob} type="text" placeholder="job"/><br/>
            <input onChange={this.addPhone} type="number" placeholder="phone number"/><br/>
            <button onClick={this.addContant}>Add contact</button><button onClick={this.changeflagvalue}>back</button>
            </div>
        }
    }

    render() {
        return (
            <div>
               {this.showMe()}
               <button onClick={this.setFlag}>+</button>
            </div>
        )
    }
}
