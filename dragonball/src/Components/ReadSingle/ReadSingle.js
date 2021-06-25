import { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Api } from '../../Api/Api';
import '../../Styles/ReadSingle.scss'

export class ReadSingle extends Component {

    constructor(props) {
        super(props);

        this.id = this.props.match.params.id;

        this.state = {
            isLoading: true,
            item: {},
        };
    }

    async componentDidMount() {
        const request = await Api.buildApiGetRequest(
            Api.readSingleUrl(this.id)
        );

        const item = await request.json();

        this.setState({
            isLoading: false,
            item,
        });

    }

    render() {

        const { item } = this.state;
        console.log(item)

        return (
            //_id é o nome do campo
            <>
                <Container className="actions">
                    <Link className="btn btn-info" to={'/update/' + item._id}>Editar</Link>
                    <Link className="btn btn-danger" to={'/delete/' + item._id}>Excluir</Link>
                </Container>

                <hr />

                <Container className="info">
                    <Row>
                        <Col>
                            <h1 className="info-title">{item.name}</h1>
                            <hr />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <img className="info-img" src={item.imageUrl} alt={item.name} />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}