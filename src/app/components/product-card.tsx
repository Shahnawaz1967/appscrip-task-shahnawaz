import Image from "next/image";
import "@/styles/product-card.css";

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({
  name,
  price,
  imageUrl,
}: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <Image
          src={imageUrl}
          alt={name}
          width={300}
          height={300}
          className="product-image"
        />
      </div>
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price}</p>
      </div>
    </div>
  );
}
