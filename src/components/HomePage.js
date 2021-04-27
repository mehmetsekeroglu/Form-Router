import React, { useState, useEffect } from 'react';
import Nav from './Nav'
import Forms from './Forms'
import List from './List'
import {
    Switch,
    Route
  } from "react-router-dom";

export default function HomePage() {
    const [list, setList] = useState([]);

    function readPersonListFromBackend() {
        fetch('http://174.138.103.233/api/employees')
            .then(response => response.json())
            .then(data => setList(data));
    }

    function handleFormSubmit(formData) {
        fetch("http://174.138.103.233/api/employees", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            // .then(() => readPersonListFromBackend())
            // .catch(error => console.log(error));
    }

    useEffect(() => {
        readPersonListFromBackend();
    }, []);

    return (
        <div className="App">
            <Nav />
            <Switch>
          <Route exact path="/">
            <p>Hos Geldiniz</p>
          </Route>
          <Route path="/Forms">
          <Forms onSubmitForm={handleFormSubmit}/>
          </Route>
          <Route path="/List">
          <List list={list}/>
          </Route>
        </Switch>
        </div>
    );
}
