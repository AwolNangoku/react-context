import React from 'react';
import { connect } from 'react-redux'
import PersonForm from '../components/PersonForm'

import { clearName, saveName, clearLastName, saveLastName } from '../reduxSetup/actions'

const mapStateToProps = (state) => {
	const { firstName, lastName } = state;
  return {
    firstname: firstName,
    lastname: lastName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveName: (name) => dispatch(saveName(name)),
    clearName: () => dispatch(clearName())
  }
}

const ConnectedPerson = connect(mapStateToProps, mapDispatchToProps)(PersonForm)

export default ConnectedPerson;