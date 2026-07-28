import axios from "axios";
import { useState } from "react";

function ProductForm() {

    const [product, setProduct] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
        image: "",
        stock: ""
    });

    const changeHandler = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:5000/api/products",
                product
            );

            console.log(res.data);
            alert("Product Added Successfully");

            setProduct({
                name: "",
                price: "",
                category: "",
                description: "",
                image: "",
                stock: ""
            });

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={submitHandler}>

            <input
                type="text"
                name="name"
                value={product.name}
                placeholder="Product Name"
                onChange={changeHandler}
            /><br />

            <input
                type="number"
                name="price"
                value={product.price}
                placeholder="Price"
                onChange={changeHandler}
            /><br />

            <input
                type="text"
                name="category"
                value={product.category}
                placeholder="Category"
                onChange={changeHandler}
            /><br />

            <input
                type="text"
                name="description"
                value={product.description}
                placeholder="Description"
                onChange={changeHandler}
            /><br />

            <input
                type="text"
                name="image"
                value={product.image}
                placeholder="Image URL"
                onChange={changeHandler}
            /><br />

            <input
                type="number"
                name="stock"
                value={product.stock}
                placeholder="Stock"
                onChange={changeHandler}
            /><br />

            <button type="submit">Add Product</button>

        </form>
    );
}

export default ProductForm;