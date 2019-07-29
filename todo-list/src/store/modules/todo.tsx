import {createAction, handleActions} from 'redux-actions';
import { Map, List } from 'immutable';

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';
const IMPORTANT_TOGGLE = 'todo/IMPORTANT_TOGGLE';
const EDIT_TOGGLE ='todo/EDIT_TOGGLE';
const SAVE = 'todo/SAVE';
const CHANGE_TEXT = 'todo/CHANGE_TEXT';
const EDIT_TEXT = 'todo/EDIT_TEXT';
const ZOOM_TOGGLE ='todo/ZOOM_TOGGLE';
const CONTENT_EDIT = 'todo/CONTENT_EDIT';
const CHANGE_CONTENT ='todo/CHANGE_CONTENT';

export const changeInput = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT, text => text);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);
export const importantToggle = createAction(IMPORTANT_TOGGLE, id => id);
export const editToggle = createAction(EDIT_TOGGLE, id => id);
export const save = createAction(SAVE, item => item);
export const changeText = createAction(CHANGE_TEXT, value => value);
export const editText = createAction(EDIT_TEXT,text => text);
export const zoomToggle = createAction(ZOOM_TOGGLE, id => id);
export const contentEditToggle = createAction(CONTENT_EDIT, id => id);
export const changeContent = createAction(CHANGE_CONTENT, value =>value);

let id = 0;

const initState = Map({
    input: '',
    edit: '',
    todos: List()
});

export default handleActions({
    [CHANGE_INPUT]: (state, action) => state.set('input', action.payload),
    [INSERT]: (state, { payload: text}) => {

        const item = Map({id: id++, checked: false, star: false, editing: false, zoom: false , content_edit: false ,text, content:''});
        return state.update('todos', todos => todos.push(item));
        },
    [TOGGLE]: (state, { payload: id}) => {

        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.updateIn(['todos', index, 'checked'], checked => !checked);
    },
    [REMOVE]: (state, { payload: id}) => {
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.deleteIn(['todos', index]);
    },
    [IMPORTANT_TOGGLE]: (state, {payload: id}) =>{
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.updateIn(['todos', index, 'star'], star => !star);
    },
    [EDIT_TOGGLE]: (state, {payload: id}) =>{
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.updateIn(['todos', index,'editing'], editing => !editing );
    },
    [SAVE]: (state, {payload: list}) =>{
        const index = state.get('todos').findIndex(item => item.get('id') === list[0]);
        return state.setIn(['todos',index,'text'], list[1]);
    },
    [CHANGE_TEXT]: (state, action) => {
        return state.set('edit', action.payload);
    }
    ,
    [EDIT_TEXT]: (state, {payload: text}) => state.set('edit', text)
    ,
    [ZOOM_TOGGLE]: (state, { payload: id }) => {
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.updateIn(['todos', index, 'zoom'], zoom => !zoom);
    },
    [CONTENT_EDIT]: (state, { payload: id }) => {
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.updateIn(['todos', index, 'content_edit'], content_edit => !content_edit);
    },
    [CHANGE_CONTENT]: (state, { payload: list }) => {
        const index = state.get('todos').findIndex(item => item.get('id') === list[0]);
        return state.setIn(['todos', index, 'content'], list[1]);
    }
}, initState);