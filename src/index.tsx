import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import Store from './models/index';
import { getSnapshot, destroy, onSnapshot } from "mobx-state-tree";

const localStorageKey = "mst-example"

const initialState = localStorage.getItem(localStorageKey)
    ? JSON.parse(localStorage.getItem(localStorageKey))
    : {
		todos: [
			{
				title: "learn Mobx",
				done: false,
				id: "0"
			},
			{
				title: "learn MST",
				// done: true,
				id: "1"
			}
		]
	  }

let store
let snapshotListener

const createTodoStore = snapshot => {
    // clean up snapshot listener
    if (snapshotListener) snapshotListener()
    // kill old store to prevent accidental use and run clean up hooks
    if (store) destroy(store)

	store = Store.create(snapshot)

    snapshotListener = onSnapshot(store, snapshot =>
        localStorage.setItem(localStorageKey, JSON.stringify(snapshot))
    )

    return store
}

declare let module: { hot: any };

const renderApp = (Component, store) => {
	render(
		<AppContainer>
			<Component store={store}/>
		</AppContainer>,
		document.getElementById('root'),
	)
  }

// Initial render
renderApp(App, createTodoStore(initialState))

if (module.hot) {
    module.hot.accept(["./models/index"], () => {
        renderApp(App, createTodoStore(getSnapshot(store)))
    })

    module.hot.accept(["./components/App"], () => {
        renderApp(require('./components/App').default, store)
    })
}