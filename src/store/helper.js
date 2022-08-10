const MutationsHelper = {
  // Find an object in a list of objects by matching a property value.
  // userById: findByKey('users', 'id')
  // getters.userById('123')
  set: (key) => (state, val) => {
    state[key] = val;
  },

  // Toggle boolean in state
  // toggleOpen: toggle('open')
  // commit('toggleOpen')
  toggle: (key) => (state) => {
    state[key] = !state[key];
  },

  // push an item onto a list
  // addItem: pushTo('items')
  pushTo: (key) => (state, val) => {
    state[key].push(val);
  },
};

export { MutationsHelper };
