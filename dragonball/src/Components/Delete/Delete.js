import { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Api } from '../../Api/Api';

import '../../Styles/Delete.scss'


export class Delete extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;

        this.state = {
            isLoading: false,

        };
    }

    //eventos que vem do banco, usar funções assíncronas
    clickHandler = async event => {
        event.preventDefault();

        this.setState = ({
            isLoading: true
        })

        await Api.buildApiDeleteRequest(Api.deleteUrl(this.id))
        .catch(e => {
            console.error('Erro ao tentar deletar o item: ', e);
        })

        this.setState = ({
            isLoading: false
        })

        this.goToHome();
    }

    goToHome = () => {
        this.props.history.push(`/`);
    }

    goToView = () => {
        this.props.history.push(`/view/${this.id}`);
    }

    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Excluir Item</Card.Title>
                    <Card.Text>Tem certeza que deseja excluir o item?</Card.Text>

                    <Button className="btn" variant="danger" onClick={this.clickHandler}>Excluir</Button>
                    <Button className="btn" variant="primary" onClick={this.goToView}>Cancelar</Button>

                </Card.Body>

            </Card>

        )
    }




}