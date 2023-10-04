import { setFilter } from '../reducers/filterReducer/filterReducer';
import { useDispatch } from 'react-redux';

const NotesFilter = (props) => {
  const dispatch = useDispatch()

  // with the name attribute being 'filter' for all of the radio options, it groups them together by default, making it so only one option can be selected at a time
  return (
    <div>
      all    
      <input 
        type="radio" 
        name="filter" 
        onChange={() => dispatch(setFilter('ALL'))}
        defaultChecked
      />
      important   
      <input
        type="radio"
        name="filter"
        onChange={() => dispatch(setFilter('IMPORTANT'))}
      />
      nonimportant 
      <input
        type="radio"
        name="filter"
        onChange={() => dispatch(setFilter('NONIMPORTANT'))}
      />
    </div>
  )
}

export default NotesFilter;