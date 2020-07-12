import React from 'react';

function Form(props) {
    return(
        <div>
            <h3>Book Search</h3>
        <form>
            <div className='form-group'>
                <label htmlFor='Query'>Book</label>
                <input
                type='text'
                className='form-control'
                id='Title'
                value={props.q}
                name='q'
                onChange={props.handleInput}
                placeholder='Star Wars'
                required
                />
            </div>
            <button
            type='submit'
            className='btn btn-primary float-right'
            onClick={props.handleSubmit}
            >
                Search
            </button>
        </form>
        </div>
    )
}

export default Form;