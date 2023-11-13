import {useState} from "react";



function AddItem(props){

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const addItemButtonPressed = (e) => {
        e.preventDefault();

        props.addItem({name: name, price: price, type:type, brand: brand});
        setName("");
        setPrice(0);
        setType("");
        setBrand("");
    }

    return (
        <div className="container">
            <div className="row">
                <h2>Add an Item</h2>
            </div>

            <div className="row">
                <div className="col">
                    <label htmlFor="name-field">Name: </label>
                    <input id="name-field" type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>

                    <label htmlFor="price-field">Price: </label>
                    <input id="price-field" type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                
                <div className="col">
                    <label htmlFor="type-field">Type: </label>
                    <input id="type-field" type="text" className="form-control" value={type} onChange={(e) => setType(e.target.value)}/>

                    <label htmlFor="brand-field">Brand: </label>
                    <input id="brand-field" type="text" className="form-control" value={brand} onChange={(e) => setBrand(e.target.value)}/>
                </div>

                
            </div>
            
            
                    
            
            <div className="row mt-3">
                <div className="col">
                    <button type="button" className="form-control btn btn-primary" onClick={addItemButtonPressed}>Add Item</button>
                </div>
            </div>
        </div>
    )
}

export default AddItem;