const actions = {
	CLEAR_NAME: 'CLEAR_NAME',
	SAVE_NAME: 'SAVE_NAME',

	CLEAR_LASTNAME: 'CLEAR_LASTNAME',
	SAVE_LASTNAME: 'SAVE_LASTNAME'
}

const clearName = () => {
	return { type: actions.CLEAR_NAME, payload: undefined }
}

const saveName = (name) => {
	return { type: actions.SAVE_NAME, payload: name }
}

const clearLastName = () => {
	return { type: actions.CLEAR_LASTNAME, payload: undefined }
}

const saveLastName = (lastname) => {
	return { type: actions.SAVE_LASTNAME, payload: lastname }
}


export { actions, clearName, saveName, clearLastName, saveLastName};