import React from 'react'
import Mahasiswa from '../Mahasiswa/Container/Mahasiswa'
// import YoutubeComponent from '../../component/YoutubeComponent/YoutubeComponent';
// import Product from '../Product/Product';
// import LifeCycle from '../LifeCycle/LifeCycle';
// import BlogPost from '../BlogPostContainer/BlogPostContainer';
// import TodoList from '../TodoList/Container/TodoList';


class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showComponent : true
        }
    }

    render() { 
        return (
            <div>
                {/* <p>Youtube List</p> */}
                {/* <hr/> */}
                {/* <YoutubeComponent time="4:33" title="sayang aku" desc="lorem ipson ddan kawan kawan" />
                <YoutubeComponent title="upin dan ipin" desc="lorem ipson ddan kawan kawan" />
                <YoutubeComponent time="4:39" title="power rangers" desc="lorem ipson ddan kawan kawan" />
                <YoutubeComponent time="9:43" title="cahaya malam" desc="lorem ipson ddan kawan kawan" />
                <YoutubeComponent time="6:23" title="siang dan osre" desc="lorem ipson ddan kawan kawan" /> */}
                {/* <p>counter</p> */}
                {/* <hr/> */}
                {/* <Product /> */}

                {/* { this.state.showComponent ? <LifeCycle /> : null } */}

                {/* <BlogPost /> */}
                {/* <TodoList /> */}
                <Mahasiswa/>
            </div>
        );
    }
}
 
export default Home;