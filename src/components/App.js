import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote (newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    } 
  
    function deleteNote (id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id; //we should end up with an array that contains everything within previous notes other than the ones where the index matches the id of the note that will be deleted.
            });
        });
    }

    return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((noteItem, index) => {
        return (
            <Note 
                key={index} //for delete function, gets index and sets is as key
                id={index} //for delete function, gets index and sets is as id
                title={noteItem.title} //for add function
                content={noteItem.content} //for add function
                onDelete={deleteNote} //for add function
            /> 
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
