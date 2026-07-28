import axios from "axios";
import { useState } from "react"



function ProductForm(){

const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [category, setCategory] = useState("");
const [description, setDescription] = useState("");
const [image, setImage] = useState("");
const [stock, setStock] = useState("");

const submitHandler =(e)=>{
    e.preventDefault();

}

const changeHandler =(e)=>{
    setName(e.target.value)

}


    return (
        <form onSubmit={submitHandler} >

            <input type="text" name="name" value={name} placeholder="Product Name" onChange={changeHandler}/><br/>
            <input type="number" name="price" value={price} placeholder="Price" onChange={changeHandler} /><br/>
            <input type="text" name="category" value={category} placeholder="Category" onChange={changeHandler} /><br/>
            <input type="text" name="description" value={description} placeholder="Description" onChange={changeHandler}/><br/>
            <input type="text" name="image" value={image} placeholder="Image URL" onChange={changeHandler} /><br/>
            <input type="number" name="stock" value={stock} placeholder="Stock" onChange={changeHandler}/><br/>

            <button>Add</button>
        
        </form>
    )


}

export default ProductForm;