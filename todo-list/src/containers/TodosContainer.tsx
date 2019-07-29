import * as React from 'react';
import Todos from '../components/Todos';
import { connect } from 'react-redux';
import {bindActionCreators } from 'redux';
import * as todoActions from '../store/modules/todo';

class TodosContainer extends React.Component<any,any> {

    handleToggle = (id) => {
        // 삭제선 켜고 끄기
        const { TodoActions } = this.props;
        TodoActions.toggle(id);
    }

    handleRemove = (id) => {
        // 아이템 제거
        const { TodoActions } = this.props;
        TodoActions.remove(id);
    }
    handleStarToggle =(id) =>{
        // 별표 노란색으로 만들기 
        const { TodoActions} = this.props;
        TodoActions.importantToggle(id);
    }
    handleEditToggle =(id,text) =>{
        //edit mode 전환
        const {TodoActions} = this.props;
        TodoActions.editToggle(id);
        TodoActions.editText(text);
    }
    handleContentToggle = (id, content) => {
        //edit mode 전환
        const { TodoActions } = this.props;
        TodoActions.contentEditToggle(id);
        TodoActions.editText(content);
    }
    handleZoomToggle =(id) =>{
        const {TodoActions} = this.props;
        TodoActions.zoomToggle(id);
    }

    render() {
        const {handleToggle, handleRemove, handleStarToggle, handleEditToggle, handleZoomToggle,handleContentToggle} = this;
        const {todos} = this.props;

        return (
            <Todos
                todos={todos}
                onToggle={handleToggle}
                onRemove={handleRemove}
                onContentToggle={handleContentToggle}
                onStarToggle={handleStarToggle}
                onEditToggle={handleEditToggle}
                onZoomToggle={handleZoomToggle}
            />
        );
    }
}

export default connect(
    // state 를 비구조화 할당 해주었습니다
    ({ todo }) => ({
        todos: todo.get('todos')
    }),
    (dispatch) => ({
        TodoActions: bindActionCreators(todoActions, dispatch)
    })
)(TodosContainer);