import React from 'react';
import './Form.css';

function Form(props) {
    return(
        <div className='mx-5'>
                <h3 className='formTitle'>Book Search</h3>
            <form>
                <div className='form-group'>
                    <input
                    type='text'
                    className='form-control'
                    id='Title'
                    value={props.q}
                    name='q'
                    onChange={props.handleInput}
                    placeholder='e.g. Star Wars'
                    required
                    />
                </div>
                <button
                type='submit'
                className='button float-right'
                onClick={props.handleSubmit}
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default Form;