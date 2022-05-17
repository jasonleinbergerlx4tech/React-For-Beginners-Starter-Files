import React from 'react';

class EditFishForm extends React.Component {
    handleChange = event => {

    };
    render() {
        return (
            <div className='fish-edit'>
                <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
                <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
                <select name="status" onChange={this.handleChange} value={this.props.fish.status}>
                    <option value="available">Fresh!</option>
                    <options value="unavailable">Sold Out</options>
                </select>
                <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc}/>
                <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image}/>
            </div>
        )
    }
}

export default EditFishForm;