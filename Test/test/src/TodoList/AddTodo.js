import React,{ useState } from 'react' 
import PropTypes from 'prop-types'

const styles = {
    form:{
        marginBottom:'1rem'
    },
    input:{
        marginRight:'2rem',
    
    },
    button:{
        marginRight:'5rem'
    }
}

function useInputValue(defaultValue=''){
    
    const[value, setValue]=useState(defaultValue)

    return{ 
        bind: {
            value,
            onChange:event=>setValue(event.target.value)
        },
        clear:() => setValue(''),
        value:() => value
    }
 }

function AddToDo({onCreate}){

    const input = useInputValue('')

    function submitHandler(event){
       
        event.preventDefault()

        if(input.value().trim()){
            onCreate(input.value())  
            input.clear()
        }
    }

    return(
        <form style={styles.form} onSubmit={submitHandler}>
            <input {...input.bind}></input>
            <button style={styles.button} type='submit'>Add task</button>
        </form>
    )
}

AddToDo.propTypes={
    onCreate:PropTypes.func.isRequired
}

export default AddToDo