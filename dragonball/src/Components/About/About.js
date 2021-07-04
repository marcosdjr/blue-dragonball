import { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../Styles/About.scss';
import MarcosImg from '../../Img/eu.jpeg';

export class About extends Component {
    render() {
        return (
            <Col className="coluna">
            <Card >
                <Card.Img className='about-image' variant="top" src={ MarcosImg } />
                <Card.Body>
                    <Card.Title>Marcos Domingues Junior</Card.Title>
                    <Card.Text className='about'>
                        "De desenvolvedor, psicólogo e louco, todo mundo tem um pouco", eles disseram. Eu acreditei e fui me especializar nas duas primeiras áreas 🤓 <br/><br/>
                        Há 12 anos, trabalho no maior Operador Logístico do país - Correios. Atuo nos últimos 6 anos como coordenador de unidades operacionais, onde assumi desde atividades de gestão de equipes com 40 colaboradores (avaliação de desempenho e resultados, controle da jornada de trabalho e demais controles administrativos), até rotinas estratégicas que abrangem indicadores de toda prática de desempenho e qualidade operacional, focando na gestão de perdas e processos de melhoria contínua. 📈 <br/>
                        <br/>
                        Amante da tecnologia e buscando novas oportunidades de carreira na área, iniciei estudos na Blue Edtech visando solidificar e atualizar conhecimentos, adquiridos tanto informalmente quanto na experiência profissional, para que possa alinhar a construção atual às tendências do mercado. #GoBluemers 🚀 <br/>
                        <br/>
                        Também sou formado em Psicologia e estou finalizando pós-graduação em Psicoterapia Junguiana, que dão embasamento para uma visão crítica e melhor direcionamento do ser-humano dentro de diferentes perspectivas de uma cultura organizacional. 🧠 
                    </Card.Text>
                    <Link className ="btn btn-primary" to={{pathname: "https://github.com/marcosdjr"}} target="_blank">Visite meu GitHub</Link>
                </Card.Body>
            </Card>
            </Col>
        )
    }
}