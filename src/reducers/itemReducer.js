// Copyright (c) Microsoft Corporation. All rights reserved.
// SPDX-License-Identifier: MIT

const initialState = { isFetching: false, item: null, error: null, headers: null, deleted: false }

export default (name = '', itemName = 'item') => {
  return (state = initialState, action) => {
    // if there is a group on the action then it must match this reducer's name
    // otherwise the action type must match the name
    if ((action.group && action.group !== name) || (action.type !== name))
      return state


    const { result, error, context } = action
    if (context && context.clear) {
      return {
        ...initialState
      }
    }

    if (result && result.deleted) {
      return {
        ...state,
        isFetching: false,
        error: false,
        deleted: true
      }
    }

    if (!(result || error)) {
      return { ...state, isFetching: true, deleted: false }
    }

    if (error) {
      return { ...state, isFetching: false, error: error, item: null, deleted: false }
    }

    if (result) {
      return { ...state, isFetching: false, deleted: false, [itemName]: result, headers: result.headers }
    }
  }
}
