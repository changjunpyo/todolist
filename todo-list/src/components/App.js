import React, { Component } from 'react';
import TodosContainer from 'containers/TodosContainer';
import FormContainer from 'containers/FormContainer';
import AppTemplate from './AppTemplate';

class App extends Component {
    render() {
        return (
            <AppTemplate
                form={<FormContainer />}
                children={<TodosContainer />}
            />
        );
    }
}

export default App;