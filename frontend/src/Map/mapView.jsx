import React, { Component } from 'react';
import { MapLeaflet } from './mapLeaflet';

export class MapView extends Component {

    render() {
        return (<div className="leaflet-container">
            <MapLeaflet />
        </div>
        )
    }
}