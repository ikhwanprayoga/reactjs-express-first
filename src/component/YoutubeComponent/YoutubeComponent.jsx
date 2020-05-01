import React from 'react'
import './YoutubeComponent.css'

class YoutubeComponent extends React.Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div className="youtube-wrapper">
                <div className="img-thumb">
                    <img src="https://i.ytimg.com/an_webp/LFW38U6q_ag/mqdefault_6s.webp?du=3000&sqp=CPiopvUF&rs=AOn4CLCU_NBXzw0oTYfdPhIQT3Z3X7kmXA" alt="" srcset=""/>
                <p className="time">{ this.props.time }</p>
                </div>
                <p className="title">{ this.props.title }</p>
                <p className="desc">{ this.props.desc }</p>
            </div>
        );
    }

}

YoutubeComponent.defaultProps = {
    time: '00:00'
}
 
export default YoutubeComponent;