import { Component } from "react";
import { Container, Row } from "react-bootstrap"
import { ItemCard } from "./ItemCard"
import { Api } from "../../Api/Api"

import loadingImg from "../../Img/Spinner.svg"

import '../../Styles/ReadAll.scss'

export class ReadAll extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            item: [],
        }
    }

    async componentDidMount() {
        const request = await Api.buildApiGetRequest(Api.readAllUrl());

        const items = await request.json();

        const itemsWithImageUrl = items.filter(item => Boolean(item.imageUrl));

        this.setState({
            isLoading: false,
            items: itemsWithImageUrl,
            filteredItems: itemsWithImageUrl
        })
    }

    //o ? é uma validção pra dizer 'se existe o evento, transforme em minusculo'
    // o e é um evento
    filterItems = e => {
        const searchValue = e.target.value?.toLowerCase();

        const filteredItems = this.state.items.filter(item =>
            item.name?.toLowerCase().includes(searchValue),
        );

        this.setState({
            filteredItems
        });

    };



    render() {

        const { isLoading, filteredItems } = this.state;

        if (isLoading) {
            return (
                <Container>
                    <Row>
                        <img className="loading" src={loadingImg} />
                    </Row>
                </Container>
            );
        } else {

            if (filteredItems == false) {
                return (
                    <Container>
                        <Row>
                            <p className="noData">Não há personagens cadastrados!</p>
                        </Row>
                    </Container>
                );
            } else {
                return (
                    <Container>
                        <Row>
                            {filteredItems.map(item => (
                                <ItemCard item={item} key={item._id} />
                            ))}
                        </Row>
                    </Container>
                );
            }
        }



    }
}