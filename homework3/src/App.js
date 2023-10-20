import { product } from "./constants";
import Card from "./components/Card";
function App() {
  return (
    <main className="root">
      {product.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          alt={product.alt}
          stock={product.stock}
          Points={product.Points}
          style={product.style}
        />
      ))}
    </main>
  );
}

export default App;
