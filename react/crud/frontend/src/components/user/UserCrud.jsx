import React from "react";
import Axios from "axios";
import Main from "../template/Main";

const headerProps = {
    icon: "users",
    title: "Usuários",
    subtitle: 'Cadastro de usuários'
}

const baseURL = "http://localhost:3001/users";

const initialState = {
    user: {name: "", email: ""},
    list: []
}

export default class UserCrud extends React.Component {
    state = {...initialState};

    componentWillMount() {
        Axios(baseURL).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear(){
        this.setState({user: initialState.user});
    }

    save(){
        const user = this.state.user;
        const method = user.id ? "put" : "post";
        const url = user.id ? `${baseURL}/${user.id}` : baseURL;

        Axios[method](url, user).then(resp => {
            const list = this.getUpdatedList(resp.data);
            this.setState({user: initialState.user, list});
        });
    }

    getUpdatedList(user, add=true){
        const list = this.state.list.filter(u => u.id !== user.id);
        if(add) { list.unshift(user); }
        return list;
    }

    updateField(event){
        const user = {...this.state.user};
        user[event.target.name] = event.target.value;
        this.setState({user});
    }

    loadUser(user){
        this.setState({user});
    }

    removeUser(user){
        Axios.delete(`${baseURL}/${user.id}`).then(resp =>{
            const list = this.getUpdatedList(user, false);
            this.setState({list});
        });
    }

    renderForm(){
        return (
            <div className="form">
                <div className="row">
                    <div className="form-group col-12 col-md-6">
                        <label>Nome</label>
                        <input type="text" className="form-control" name="name" value={this.state.user.name} placeholder="Digite o nome" onChange={e => this.updateField(e)} required/>
                    </div>
                    <div className="form-group col-12 col-md-6">
                        <label>Email</label>
                        <input type="email" className="form-control" name="email" value={this.state.user.email} placeholder="Digite o email" onChange={e=> this.updateField(e)} required/>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-secondary" onClick={this.clear}>Cancelar</button>
                        <button className="btn btn-primary ml-2" onClick={e=>this.save(e)}>Salvar</button>
                    </div>
                </div>
            </div>
        );
    }

    renderTable(){
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows(){
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-danger" onClick={() => this.removeUser(user)}><i className="fa fa-trash"></i></button>
                        <button className="btn btn-primary pl-2" onClick={() => this.loadUser(user)}><i className="fa fa-pencil"></i></button>
                    </td>
                </tr>
            )
        });
    }

    render(){
        console.log(this.state);
        return(
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}