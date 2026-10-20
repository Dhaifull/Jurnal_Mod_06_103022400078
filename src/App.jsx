import { useState } from 'react'
import './App.css'


function App() {
  const n = 68
  const jam = 9
  return (
    <>
      <section id="no1">
        <div className='judul'>
          <h1>Kantin Rani</h1>
        </div>
        <p>{(jam) < 12 ? "Selamat Pagi" : "Selamat Siang"} </p>
        <p>Saldo awal kartu kantin: Rp{n*1000}</p>
        <button
          type="button"
          disabled
          className="bayar"
        >
          Bayar
        </button>
      </section>
    </>
  )
}

export default App
