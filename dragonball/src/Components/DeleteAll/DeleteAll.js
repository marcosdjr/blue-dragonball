import { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import '../../Styles/DeleteAll.scss';
import { Api } from '../../Api/Api';


export class DeleteAll extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    //
    clickHandler = async event => {

        event.preventDefault();

        this.setState({
            isLoading: true
        })

        await Api.buildApiDeleteRequest(Api.deleteAllUrl())
            .catch(e => { console.error('Erro ao tentar deletar o banco: ', e) })

        this.setState({
            isLoading: false
        })

        this.goToHome()

    }

    goToHome = () => {
        //sair de um lugar e ir pra outro componente. Naquela área é pra moldar o home
        //usado pra trocar de componente
        this.props.history.push('/')
    }




    render() {
        return (
            <Col className='coluna'>
            <Card>
                <Card.Body>
                    <Card.Title>Excluir tudo</Card.Title>
                    <Card.Text>
                        Tem certeza que deseja excluir todos os itens da aplicação?
                        Essa ação não poderá ser revertida!
                    </Card.Text>

                    <Button className='btn' variant='danger' onClick={this.clickHandler} >Excluir</Button>
                    <Button className='btn' variant='primary' onClick={this.goToHome}>Cancelar</Button>


                </Card.Body>
            </Card>
            </Col>
        )
    }
}