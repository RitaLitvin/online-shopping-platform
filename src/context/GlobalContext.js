import ProductsProvider from "./ProductsContext";

const GlobalProvider = ({children}) => {
    return (
        <ProductsProvider>{children}</ProductsProvider>
    )
};

export default GlobalProvider;