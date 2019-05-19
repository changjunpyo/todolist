import React, { Component } from 'react';
import Form from 'components/Form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from 'store/modules/todo';

class FormContainer extends Component {
    handleChange = (e) => {
        // 인풋 값 변경
        const { TodoActions } = this.props;
        TodoActions.changeInput(e.target.value);
    }

    handleInsert = () => {
        // 아이템 추가
        
        const { input, TodoActions } = this.props;
        if (input !== '') {
            TodoActions.insert(input); // 추가하고
            TodoActions.changeInput(''); // 기존 인풋값 비우기
        }
    }
    handleEnter = (e) =>{
        if (e.charCode === 13){
            this.handleInsert();
        }
    }
    render() {
        const { handleChange, handleInsert, handleEnter} = this;
        const { input} = this.props;

        return (
            <Form
                input={input}
                onChange={handleChange}
                onInsert={handleInsert}
                onKeyInsert={handleEnter}
            />
        );
    }
}

export default connect(
    // state 를 비구조화 할당 해주었습니다
    ({ todo }) => ({
        // immutable 을 사용하니, 값을 조회 할 때엔느 .get 을 사용해주어야하죠.
        input: todo.get('input')
    }),
    (dispatch) => ({
        TodoActions: bindActionCreators(todoActions, dispatch)
    })
)(FormContainer);