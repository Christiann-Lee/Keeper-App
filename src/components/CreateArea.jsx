import React, {useState} from "react";
import AddBoxIcon from '@mui/icons-material/AddBox';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    
    const [isExpanded, setIsExpanded] = useState(false)

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function submitNote(event) {
       props.onAdd(note); //added to app.jsx
       setNote({ //clears notes after submitting
        title: "",
        content: ""
    })
       event.preventDefault(); 
    }

    function handleChange(event) {
        const {name, value} = event.target

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function expand() {
        setIsExpanded(true);
    }

    return (
        <div>
        <form className="create-note">
        {isExpanded && (<input onChange={handleChange} value={note.title} name="title" placeholder="Title" />)}
            <textarea onClick={expand} onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
            <Zoom in={isExpanded}><Fab onClick={submitNote}><AddBoxIcon /></Fab></Zoom>
        </form>
        </div>
    );
}

export default CreateArea;
