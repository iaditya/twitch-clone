import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

export default function App() {

    console.log("App renders");

    return (
        <div className="ui container grid">
            <div className="ui row">

                <div className="column eight wide">
                    <SongList />
                </div>

                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>

        </div>
    )
}
