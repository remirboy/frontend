import React, {Component} from 'react';
import PropTypes from 'prop-types';

const SimpleProps = ({name,surname,father,age})=>{
    return(
    <div>
        <h1>{name} {surname} {father}</h1>
        <span> {age} </span>
    </div>
    )
}

SimpleProps.propTypes={
    name:PropTypes.string.isRequired,
    surname:PropTypes.string.isRequired,
    father:PropTypes.string,
    age:PropTypes.number.isRequired
}

SimpleProps.defaultProps={
    father:'',
}

class PropsComponent extends Component{
    state ={
        age:21,
    }

    clickNumber = () =>{
        this.setState(({age})=>({
            age:++age,
        }))
    }

    render(){
        return(
            <div>
            <SimpleProps 
                name={'Remir'}
                surname={'Ziatdinov'}
                age={this.state.age}
            ></SimpleProps>
            <button onClick={this.clickNumber}>click here</button>
            </div>
        )
    }
}

export default PropsComponent;