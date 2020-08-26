export const createNails = (nail) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const storage = firebase.storage();

    const { name, file, description, date, fileName } = nail;

    storage
      .ref(`files/${file.name}`)
      .put(nail.file)
      .then(() => {
        storage
          .ref(`files`)
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            const files = url;
            firestore
              .collection('nails')
              .add({
                name: name,
                file: files,
                description: description,
                date: date,
                fileName: fileName,
              })
              .then(() => {
                dispatch({ type: 'ADD_ITEM', nail });
              });
          });
      })
      .catch((err) => {
        dispatch({ type: 'ADD_ITEM_ERROR', err });
      });
  };
};

export const removeNail = (nail) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const storage = firebase.storage();

    const { fileName, id } = nail;

    console.log(fileName);

    firestore
      .collection('nails')
      .doc(id)
      .delete()
      .then(() => {
        storage
          .ref(`files/${fileName}`)
          .delete()
          .then(() => {
            dispatch({ type: 'REMOVE_ITEM' });
          });
      })
      .catch((err) => {
        dispatch({ type: 'REMOVE_ITEM_ERROR', err });
      });
  };
};
