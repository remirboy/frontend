import React, {useContext}from 'react' 
import PropTypes from 'prop-types' 
import Context from '../context'

const styles = {
    li:{
        display:'flex',
        justifyContent:'space-between',
        alignItem:'center',
        padding:'.5rem 1rem',
        marginBottom:'.5rem',
       
    },
    span:{
       width:'600px',
        marginRight:'1rem'
    },
    a:{
        marginRight:'1rem'},
    input:{
        marginRight:'1rem'
    },
    button:{
        marginLeft:'2rem',
        // display:'flex',
        // alignItem:'center',
    }
}

function TodoItem({todo,onChange}){
    const {removeToDo} = useContext(Context)
    const classes=[]
    if(todo.completed) 
        classes.push('done')
    return(
        <li style={styles.li}>
            <span style={styles.span} className={classes.join(' ')}>
            <input style={styles.input} 
            type='checkbox'
            checked={todo.completed} 
            onChange={()=> onChange(todo.id)}
            />
            <a>{todo.title}</a>
            <button 
            style={styles.button}
            onClick={()=>removeToDo(todo.id)}
            >&times;</button>
            </span>
        </li>
    )
}

TodoItem.propTypes={
    todos:PropTypes.object.isRequired,
    index:PropTypes.number.isRequired,
    onChange:PropTypes.func.isRequired
}

export default  TodoItem