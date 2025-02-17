import ProductContainer from "./components/ProductContainer";
import CartsContainer from "./components/CartsContainer";

function App() {
  return (
    <main className="bg-rose-100 min-h-screen font-red-hat">
      <div className=" grid grid-cols-1 md:grid-cols-3 p-10 gap-8">
        <ProductContainer />
        <CartsContainer />
      </div>
    </main>
  );
}

export default App;
