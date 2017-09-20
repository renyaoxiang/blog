import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import {
	Header,
	MainSection,
	model,
	addTodo,
	editTodo,
	clearCompleted,
	completeAll,
	completeTodo,
	deleteTodo
} from '../../todos';

interface AppProps {
	todos?: model.Todo[];
	dispatch?: Dispatch<{}>;
}
const mapStateToProps = state => {
	return {
		todos: state.todos
	}
}
const mapDispatchToProps = dispatch => ({
	dispatch
});
@connect<any, any, AppProps>(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component<AppProps, any> {
	render() {
		const { todos, dispatch } = this.props;

		return (
			<div className="todoapp">
				<Header addTodo={(text: string) => dispatch(addTodo(text))} />
				<MainSection
					todos={todos}
					editTodo={(t, s) => dispatch(editTodo(t, s))}
					deleteTodo={(t: model.Todo) => dispatch(deleteTodo(t))}
					completeTodo={(t: model.Todo) => dispatch(completeTodo(t))}
					clearCompleted={() => dispatch(clearCompleted())}
					completeAll={() => dispatch(completeAll())} />
			</div>
		);
	}
}




