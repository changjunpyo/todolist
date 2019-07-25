import React from 'react';
import TodosContainer from 'containers/TodosContainer';
import FormContainer from 'containers/FormContainer';
import AppTemplate from './AppTemplate';

const App = () =>{ 
        return (
            <AppTemplate
                form={<FormContainer />}
                children={<TodosContainer />}
            />
        );
}
export default App;