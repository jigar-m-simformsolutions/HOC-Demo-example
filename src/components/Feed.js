import {Component} from 'react';
import FeedItem from './FeedItem';
import Loading from './HOC/Loading'

class Feed extends Component{
    render(){
        const LoadingTime = this.props.loadingTime;
        return(
            <div className='Feed'>
                <p>Loading Time {LoadingTime} seconds</p>
                <FeedItem contacts = {this.props.contacts} />
            </div>
        );
    }
}

export default Loading("contacts")(Feed); 