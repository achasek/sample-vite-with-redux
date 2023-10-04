const useField = (element) => {
    // state will be a redux state extracted via useSelector hook, an array initially, and then will be passed down a single element of the state array as so:
    // const notes = useSelector(state => state.notes)
    // notes.map(note => note)
    // const noteField = useField(note)
    // element will = note here
  
    const onChange = (event) => {
        setValue(event.target.element.value)
    }
  
    return {
        element,
        value,
        onChange
    }
}

export default useField;