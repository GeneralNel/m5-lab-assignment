import DisplayProducts from "./displayProducts";

function Home(props) {
    return (
        <div className="container mt-4">
            <DisplayProducts products={props.products} setProducts={props.setProducts} updateQuantity={props.updateQuantity} />
        </div>
    );
}

export default Home;