import { useState } from 'react';

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
]);

const [newBook, setNewBook] = useState({
    title: '',
    author: '',
});

const handleInformationChange = (event) => {
    const { name, value } = event.target;
    const newFormData = { ...newBook, [name]: value };
    setNewBook(newFormData);
};

const handleSubmit = (event) => {
    event.preventDefault();

    if (newBook.title === '' || newBook.author === '') return;

    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '' }); 
};

return ( 
<div className="bookshelfDiv">
    
    <div className="formDiv">

        <h3>Add a Book</h3>

    <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
            type="text"
            name="title"
            value={newBook.title}
            onChange={handleInformationChange}
            placeholder="Enter book title"
        />

        <label htmlFor="author">Author: </label>
        <input
            type="text"
            name="author"
            value={newBook.author}
            onChange={handleInformationChange}
            placeholder="Enter author name"
        />

        <button type="submit">Add Book</button>

        </form>
      </div>

    <div className="bookCardsDiv">
       
        {books.map((book, index) => (

        <div key={index} className="bookCard">
            
            <h4>{book.title}</h4>
            <p>by {book.author}</p>

          </div>

        ))}

      </div>
    </div>
  );
};

export default Bookshelf;
