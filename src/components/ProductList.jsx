import React from 'react';

const products = [
  { id: 1, name: 'Produk 1', price: '$10', image: 'https://down-id.img.susercontent.com/file/1f18bdfe73df39c66e7326b0a3e08e87@resize_w640_nl.webp', description: 'Lindungi mata Anda dengan kacamata modis yang nyaman dan berkualitas tinggi.' },
  { id: 2, name: 'Produk 2', price: '$20', image: 'https://down-id.img.susercontent.com/file/47ed832eed0feb62fd28f08c9229440e@resize_w640_nl.webp', description: 'Tas praktis yang ideal untuk menyimpan barang-barang penting dengan gaya.' },
  { id: 3, name: 'Produk 3', price: '$30', image: 'https://down-id.img.susercontent.com/file/2bdf8cf99543342d4ebd8e1bdb576f80@resize_w640_nl.webp', description: 'Jam tangan yang memadukan keanggunan dan teknologi, sempurna untuk setiap kesempatan.' },
  { id: 4, name: 'Produk 4', price: '$15', image: 'https://down-id.img.susercontent.com/file/42394b78fac1169d67c6291973a3b132@resize_w640_nl.webp', description: 'Gitar yang dirancang untuk suara kaya dan kenyamanan bermain, cocok untuk semua musisi.' },
  { id: 5, name: 'Produk 5', price: '$25', image: 'https://down-id.img.susercontent.com/file/27838b968afb76ca59dd8e8f57ece91f@resize_w640_nl.webp', description: 'Helm berkualitas yang menawarkan perlindungan maksimal dan desain modern untuk pengendara.' },
  // { id: 6, name: 'Produk 6', price: '$40', image: 'https://via.placeholder.com/150', description: 'Deskripsi singkat untuk Produk 6.' }
];

const ProductList = () => (
  <div>
    <h2>Produk Tersedia</h2>
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.name} />
          <strong>{product.name}</strong>: {product.price}<br />
          <p>{product.description}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default ProductList;
