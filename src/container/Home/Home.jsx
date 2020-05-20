import React from 'react'

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showComponent : true
        }
    }

    render() { 
        return (
            <p>home</p>
        );
    }
}
 
export default Home;