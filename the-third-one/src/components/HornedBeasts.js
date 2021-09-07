import React, { Component } from 'react'
import { Card, Button, Col } from 'react-bootstrap';


class HornedBeasts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likesCounter: 0,
        }

    }
    pluslike = () => {
        this.setState({
            likesCounter: this.state.likesCounter + 1
        })
    }



    render() {
        return (

            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.image_url} alt={this.props.keyword} />
                    <Card.Body>
                        <Card.Title> {this.props.keyword} </Card.Title>
                        <Card.Text>
                            {this.props.title}
                            <hr />
                            {this.props.description}
                            <hr />
                            {this.props.horns}
                            <hr />
                            num of votes is :{this.state.likesCounter} ♥
                        </Card.Text>
                        <Button variant="primary" onClick={this.pluslike}>vote</Button>
                    </Card.Body>
                </Card>
            </Col>


        )
    }
}

export default HornedBeasts
