import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             editMode : false,
             Name:"",
             Job:"",
             Address:""
        }
    }

    changeEditMode = (newMode) => {
        this.setState({editMode : newMode})
    }

    updateName=(n)=>{
        let name= n.target.value
        this.setState({Name:name})
    }  
    
    updateJob=(j)=>{
        let job = j.target.value
        this.setState({Job:job})
    }

    updateAddress=(a)=>{
        let address=a.target.value
        this.setState({Address:address})
    }

    updateContactDetails=()=>{
        let newContact={
            id:this.props.contact.id,
            name:this.state.Name,
            job:this.state.Job,
            address:this.state.Address,
            picture:this.props.contact.picture
        }
        this.props.updatecontact(newContact)
        this.changeEditMode(false);
    }

    deleteContact=()=>{
        this.props.id(this.props.contact.id)
    }
    
    showMe = () => {
        if (!this.state.editMode) {
            return (
                <div className="row contacStyle">
                    <div className="col-5">
                <div className="card text-center" style={{width:'12rem'}}>
                    <h5 className="card-header">{this.props.contact.name}</h5>
                    <img className="card-img-top" src={this.props.contact.picture} alt="Card image cap"/>
                    <div className="card-body">
                        <p className="card-text">{this.props.contact.job}<br/>
                                            {this.props.contact.address}</p>
                        <button className="btn btn-primary distance" onClick={() => this.changeEditMode(true)}>edit</button>
                        <button className="btn btn-warning" onClick={this.deleteContact}>delete</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-1"></div>
                    
                        
                        <div className="col-5">
                        <Map className="mapStyle" google={this.props.google} zoom={14}>
    
                        <Marker onClick={this.onMarkerClick}
                                name={'Current location'} />

                        <InfoWindow onClose={this.onInfoWindowClose}>
                        </InfoWindow>
                        </Map>
                    </div>
                
                </div>
            )
        } else {
            return(
                <div className="card text-center" style={{width:'15rem'}}>
                    <input className="card-header input-group-prepend" onChange={this.updateName} type="text" defaultValue={this.props.contact.name}/>
                    <img className="card-img-top" src={this.props.contact.picture} alt="Card image cap"/>
                    <div className="card-body">
                        <p className="card-text">
                            <input className="input-group-prepend" onChange={this.updateJob} type="text" defaultValue={this.props.contact.job}/> <br/>
                            <input className="input-group-prepend" onChange={this.updateAddress} type="text" defaultValue={this.props.contact.address}/>
                        </p>
                        <button className="btn btn-primary" onClick={() => this.updateContactDetails}>save</button>
                    </div>
                </div>
            )
        }
    }

    render() {
        return this.showMe()
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBvAfNZEw39N9ldqmLH9mffm_AF2J8L1RM")
  })(Contact)
  