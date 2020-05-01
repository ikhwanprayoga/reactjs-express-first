import React from 'react'

// class Title extends React.Component {
//     constructor () {
//         super()
//         this.state = {
//             title: 'aplikasi react pertamaku',
//             subTitle: 'dibuat dengan cinta'
//         }
//     }

//     render () {
//         return (
//             <div>
//                 <h1>{this.state.title}</h1>
//                 <p>{this.state.subTitle}</p>
//             </div>
//         )
//     }
// }

const Title = () => {
    const title = 'Aplikasi React Pertamaku'
    const subTitle = 'Dibuat dengan Cinta'

    return (
        <div>
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </div>
    );
}

export default Title