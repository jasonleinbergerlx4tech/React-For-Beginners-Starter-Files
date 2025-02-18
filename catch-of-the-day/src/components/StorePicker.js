import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    
    myInput = React.createRef();

    goToStore = event => {
        event.preventDefault();

        const storeName = this.myInput.current.value;

        console.log(storeName);

        this.props.history.push(`/store/${storeName}`);       
        
    };

    render(){
        return (
            <React.Fragment>
                <form className='store-selector' onSubmit={this.goToStore}>
                    <h2>Please enter a store</h2>
                    <input type='text' 
                    ref={this.myInput}
                    required 
                    placeholder='Store Name' 
                    defaultValue={getFunName()} />
                    <button type='submit'>Vist Store </button>
                </form>
            </React.Fragment>
        )
    }
}

export default StorePicker; 