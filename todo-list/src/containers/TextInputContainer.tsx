import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../store/modules/todo';

class TextInputContainer extends React.Component<any,any> {

    handleText = (e) => {
        // 인풋 값 변경
        const { TodoActions } = this.props;
        TodoActions.changeText(e.target.value);
    }

    handleSaved = (id,content_edit) => {
        // 아이템 추가
        
        const { edit, TodoActions } = this.props;
        if (content_edit){
            TodoActions.changeContent([id,edit]);
            TodoActions.contentEditToggle(id);
            TodoActions.changeText('');
        }
        else {
            if (edit ===''){
                TodoActions.remove(id);
            }
            else if (edit !== '') {
                TodoActions.save([id,edit]); // 추가하고
                TodoActions.changeText(''); // 기존 인풋값 비우기
            }
        TodoActions.editToggle(id);
        }
    }
    handleEnter = (e,id,content_edit) => {
        if (e.charCode === 13) {
            this.handleSaved(id, content_edit);
        }
    }
    render() {
        const { handleText, handleSaved, handleEnter } = this;
        const { edit } = this.props;
        return (
        <div className ="form">
            <input type="text" 
                   value={edit} 
                   onChange={handleText} 
                   onBlur={() => handleSaved(this.props.id,this.props.content_edit)} 
                   onKeyPress={(e) => handleEnter(e,this.props.id,this.props.content_edit)} 
                   autoFocus/>
        </div>
            
        );
    }
}

export default connect(
    // state 를 비구조화 할당 해주었습니다
    ( {todo} ) => ({
        // immutable 을 사용하니, 값을 조회 할 때엔느 .get 을 사용해주어야하죠.
        edit: todo.get('edit')
    }),
    (dispatch) => ({
        TodoActions: bindActionCreators(todoActions, dispatch)
    })
)(TextInputContainer);