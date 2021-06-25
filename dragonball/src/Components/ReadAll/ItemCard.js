import { Component } from "react";
import { Card, Col } from "react-bootstrap";
import { Route } from "react-router-dom";
import '../../Styles/ItemCard.scss';

export class ItemCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            item: this.props.item,
        }
    }

    render() {
        const { item } = this.state;

        return (
            //xs é extra small. bootstrap divide a tela em 12 colunas. 12 é o máximo.
            <Col xs="12" sm="6" md="4" lg="3">
                <Route
                    render={({ history }) => (
                        <Card
                            className="item-card"
                            onClick={() => {
                                history.push(`/view/${item._id}`);
                            }}
                        >

                            <Card.Img variant="top" src={item.imageUrl} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                            </Card.Body>
                        </Card>

                    )}
                />
            </Col>

        )
    }

}