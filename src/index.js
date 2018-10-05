import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyBZdMIXV1vP8J126DftKBsr2Q8DZMM02L4';



// Create new component
//some HTML

class App extends Component {
    constructor(props){
        super(props);
        this.state={ videos : [] };
        YTSearch({key: API_KEY, term:'surfboards'}, (videos) => {
            this.setState({ videos });
        });
    }

    render(){
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos} />
            </div>
        );
        
    }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));