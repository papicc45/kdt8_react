
import LanguageProvider from "./LangProvider";
import LanguageSelector from "./LangSelector";
import ThemeProvider from "./ThemeProvider";
import ThemeSelector from "./ThemeSelector";
import Cart from "./prac/components/Cart";
import CartItem from "./prac/components/CartItem";
import ProductList from "./prac/components/ProductList";

function App() {
  return (
    <>
        {/*<LanguageProvider>*/}
        {/*    <LanguageSelector></LanguageSelector>*/}
        {/*</LanguageProvider>*/}
        {/*<ThemeProvider>*/}
        {/*    <ThemeSelector></ThemeSelector>*/}
        {/*</ThemeProvider>*/}
      <Cart>
        <ProductList></ProductList>
          <CartItem></CartItem>
      </Cart>
    </>
  );
}

export default App;
