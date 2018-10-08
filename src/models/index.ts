import { types } from 'mobx-state-tree';

const Todo = types
    .model("Todo", {
        id: types.identifier,
        title: types.string,
        done: false
    })
    .actions(self => ({
        toggle() {
            self.done = !self.done
        }
    }))

const Correspondent = types
    .model("Correspondent", {
        id: types.identifier,
        title: types.string,
        done: false
    })
    .actions(self => ({
        toggle() {
            self.done = !self.done
        }
    }))

const Store = types.model("Store", {
    todos: types.array(Todo),
    correspondents: types.array(Correspondent),
    lol: types.optional(types.string, 'fsa')
})

export default Store;
