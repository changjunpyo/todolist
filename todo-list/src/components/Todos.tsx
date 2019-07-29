import * as React from 'react';
import './Todos.css'
import Icon from 'antd/lib/icon';
import TextInputContainer from '../containers/TextInputContainer';
const TodoItem = ({id, text,content, zoom, checked, star,editing,content_edit, onToggle, onRemove, onStarToggle, onEditToggle, onZoomToggle,onContentToggle}) => {
    if (!editing)
        return(
        <div >
            < div className="todo-item"
                style={{
                    textDecoration: checked ? 'line-through' : 'none'
                    }}>
                <div className="star-icon"
                    onClick={() => onStarToggle(id)}>{
                        (() => {
                            if (!checked && !star) return <Icon type="star" />;
                            if (!checked && star) return <Icon type="star" theme="twoTone" twoToneColor="#fffb00" />;
                            })()
                    }

                </div>
                <div className="delete-icon"
                    onClick={() => onRemove(id)}>{
                    (() => {
                        if (checked) return <Icon type="delete" theme="twoTone" twoToneColor="#e64980" />
                    })()
                    }
                </div>
                <div className="text"
                    onClick={() => onToggle(id)}>
                        {text}
                </div>
                {
                    (() => {
                        if (!checked) return <div className="edit"
                            onClick={() => onEditToggle(id, text)}>
                            <Icon type="edit" />
                        </div>;
                    })()
                }
                
                <div className="zoom-in" 
                    onClick={() => onZoomToggle(id)} >
                    <Icon type="zoom-in" />
                </div>
            </div >
                {
                    (() => {
                        if (zoom && !content_edit){
                        return (
                        <div className="todo-content">
                            <Icon type="caret-right" theme = "filled" />
                            {content}
                            <div className="edit"
                                onClick={() => onContentToggle(id, content)}>
                                <Icon type="plus-circle" theme="filled" />
                            </div>
                        </div>);
                        }
                        else if (zoom && content_edit) {
                            return <TextInputContainer id={id} content_edit={content_edit}/>;
                        }
                    })

                }
        </div>    
    );
    if (editing)
        return(
            <TextInputContainer id ={id} content_edit ={false}/>
        );
    
};

const Todos = ({todos, onToggle, onRemove, onStarToggle, onEditToggle,onZoomToggle,onContentToggle}) => {

    const starTodoItems = todos.map(
        todo => {
            const { id, checked, text,content, star,editing,zoom,content_edit} = todo.toJS();
            if (star)
            return (
                <TodoItem
                    id={id}
                    checked={checked}
                    star={star}
                    editing={editing}
                    zoom={zoom}
                    content_edit={content_edit}
                    text={text}
                    content={content}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    onStarToggle={onStarToggle}
                    onEditToggle={onEditToggle}
                    onZoomToggle={onZoomToggle}
                    onContentToggle={onContentToggle}
                    key={id}
                />
            )
        }
    )
    const unStarTodoItems = todos.map(
        todo => {
            const { id, checked, text, content, star, editing, zoom, content_edit } = todo.toJS();
            if (!star)
                return (
                    <TodoItem
                        id={id}
                        checked={checked}
                        star={star}
                        editing={editing}
                        zoom={zoom}
                        content_edit={content_edit}
                        text={text}
                        content={content}
                        onToggle={onToggle}
                        onRemove={onRemove}
                        onStarToggle={onStarToggle}
                        onEditToggle={onEditToggle}
                        onZoomToggle={onZoomToggle}
                        onContentToggle={onContentToggle}
                        key={id}
                    />
                )
        }
    )
    return (
        <div>
                { starTodoItems }
                { unStarTodoItems}
        </div>
    );
};


export default Todos;
