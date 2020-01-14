import React from 'react';
import SongList from './SongList';

export default function App() {

    console.log("App renders");

    return (
        <div className="ui container grid">
            <div className="ui row">

                <div className="column eight wide">
                    <SongList />
                </div>

                <div className="column four wide">

                </div>
            </div>

        </div>
    )
}
