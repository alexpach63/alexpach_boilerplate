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

const Store = types.model("Store", {
    todos: types.array(Todo),
    lol: types.optional(types.string, 'fsa')
})

export default Store;
