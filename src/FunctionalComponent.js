import React, {
    Component
} from 'react';


class FunctionalComponent extends React.Component {
   render() {
           return (
       <div>
        <Welcome name = "Sara from Functional Component"/>
        
        </div>
     );
     }
}

function Welcome(props) {
    return <h1 > Hello, {
        props.name
    } </h1>;
}

export default FunctionalComponent;