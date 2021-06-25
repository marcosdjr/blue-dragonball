import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Api } from '../../Api/Api';

export class Update extends Component {

    constructor(props) {
        super(props);

        this.id = this.props.match.params.id;

        this.state = {
            isLoading: true,
            item: {},
        }
    }

    //async pq espera a informação da API
    async componentDidMount() {
        const request = await Api.buildApiGetRequest(
            Api.readSingleUrl(this.id)
        );

        const item = await request.json();

        this.setState({
            isLoading: false,
            item
        });
    }

    //função que inicia a alteração dos dados
    submitHandler = async event => {
        event.preventDefault();

        const { name, imageUrl } = event.target;

        const item = {
            name: name.value,
            imageUrl: imageUrl.value,
        }

        this.setState({
            isLoading: true
        })

        const request = await Api.buildApiPutRequest(
            Api.updateUrl(this.id),
            item
        ).catch(e => {
            console.error('Erro ao tentat atualizar o item: ', e);

        });

        this.setState({
            isLoading: false
        })

        await request.json()

        this.props.history.push(`/view/${this.id}`)

    }

    render() {

        const { item } = this.state;

        return (
            <>
                <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId="name">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Digite o nome" defaultValue={item.name} />
                        <Form.Text className="text-muted">Esse nome será utilizado na visualização dos itens na lista</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="imageUrl">
                        <Form.Label>URL da imagem</Form.Label>
                        <Form.Control type="text" placeholder="Insira a URL da imagem" defaultValue={item.imageUrl} />
                        <Form.Text className="text-muted">A imagem em questão será exibida na lista de ítens.
                            Certifique-se de que essa URL representa uma imagem válida.</Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">Alterar</Button>

                </Form>
            </>
        )
    }
}