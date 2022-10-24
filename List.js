import React from "react"
import Item from "./Item";


class List extends React.Component {


  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <Item
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteProps={this.props.deleteProps}
            setUpdate={this.props.setUpdate}
          />
        ))}
      </ul>
    )
  }


}

export default List