import React, {Component} from 'react';
import TodoItem from './todoItem'
// import logo from './logo.svg';
import  PropTypes from 'prop-types';


class Todos extends Component{
markComplete = () => {
  console.log('jello');
  
}
render() { 
    
    return this.props.todos.map((todo) =>(
      <TodoItem key = {todo.id} todo = {todo}  markComplete = {this.props.markComplete} delTodo={this.props.delTodo}/>
    
    ));
     }
}

//Proptypes
Todos.propTypes= {
  todos:PropTypes.array.isRequired
}
export default Todos;
