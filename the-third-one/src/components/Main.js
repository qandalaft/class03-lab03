import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import Data from './data.json';
import { Row } from 'react-bootstrap';

class Main extends Component {
    render() {
        return (
            <div className="row">
                {

                    Data.map(item => {
                        return <HornedBeasts image_url={item.image_url} title={item.title} description={item.description} keyword={item.keyword} horns={item.horns} />

                    })
                }
            </div>
        )
    }
}

export default Main
