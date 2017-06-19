import React from 'react';

export default class TodoBox extends React.Component{
  render() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList data = {this.props.data} />
        <TodoForm />
      </div>
    );
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      titleValue: "",
      detailValue: ''
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.changeDetail = this.changeDetail.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  changeTitle(e) {
    this.setState({titleValue: e.target.value})
  }
  changeDetail(e) {
    this.setState({detaileValue: e.target.value})
  }
  addTodo() {
    let newDate = this.state.data;
    newData.push({
      title: this.state.titleValue;
      detail: this.state.detailValue;
    });
    this.setState({data: newData});
    this.setState({titleValue: ""});
    this.setState({detailValue: ""});
  }

  render() {
  let todo = this.props.data.map(function(obj) { return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>});
    return (
      <div className="todoList">
        <div>
          Title:<input
                  type="text"
                  value={this.state.titleValue}
                  onChange={this.changeTitle} />
          Detail:<input
                  type="text"
                  value={this.state.detailValue}
                  onChange={this.changeDetail} />
          <button onClick={this.addTodo}>Add</button>
        </div>      
        <table style={{border: "2px solid black"}}>
          <tbody>
            {todo}
          </tbody>
        </table>
      </div>
    );
  }
}

class Todo extends React.Component {
  constructor(props) {
      super(props);
      this.state = {checked: false};
  }
  handleChange(e) {
    this.setState({checked: e.target.checked});
  }
  render() {
    return (
      <tr>
        <td style={{border: "1px solid black"}}>
          <input type="checkbox"
                 checked={this.state.checked}
                 onChange={this.handleChange.bind(this)} />
        </td>
        <td style={{border: "1px solid black"}}>{this.props.title}</td>
        <td style={{border: "1px solid black"}}>{this.props.children}</td>
      </tr>
    );
  }
}

Todo.propTypes = {
  title: React.PropTypes.number.isRequired
};

class TodoForm extends React.Component {
  render() {
    return (
      <div className="todoForm">
        I am a TodoForm.
      </div>
    );
  }
}

let style = {
  checkedTodo: {
    textDecoration: "line-through"
  },
  notCheckedTodo: {
    textDecoration: "none"
  },
  tableContent: {
    border: "1px solid black"
  } 
};

// This code uses the optional React.js JSX syntax to create our views,
// which we shall use throughout the rest of this workshop.

