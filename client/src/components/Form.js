import React from 'react';

function Form(props) {
    return(
        <div>
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
                placeholder='Harry Potter'
                required
                />
                {/* <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small> */}
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