// Copyright (c) Microsoft Corporation. All rights reserved.
// SPDX-License-Identifier: MIT

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { FormGroup, FormControl, HelpBlock, ControlLabel } from 'react-bootstrap'

export default class FieldGroup extends Component {
  render() {
    const { id, label, help } = this.props
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...this.props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    )
  }
}