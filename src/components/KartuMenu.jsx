import './App.css'
import './LabelHarga'

function App() {
  createRoot(document.getElementById('root')).render(
  <Kartu nama />,
  <Kartu harga />,
  <Kartu kategori="Makanan" />
);
}

export default App