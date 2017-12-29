// Copyright (c) Microsoft Corporation. All rights reserved.
// SPDX-License-Identifier: MIT

import { combineReducers } from 'redux'
import { ROUTE_CURATION } from '../utils/routingConstants'
import { CURATION_GET, CURATION_GET_PROPOSED } from '../actions/curationActions'
import itemReducer from './itemReducer'

export default combineReducers({
  current: new itemReducer(CURATION_GET),
  proposed: new itemReducer(CURATION_GET_PROPOSED)
})
