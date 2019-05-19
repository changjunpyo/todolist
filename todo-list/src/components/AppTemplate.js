import React from 'react';
import './AppTemplate.css';

const AppTemplate = ({ form, children }) => {
    return (
        <main className="app-template">
            <div className="title">
                Things to Do
            </div>
            <section className="form-wrappr">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};

export default AppTemplate