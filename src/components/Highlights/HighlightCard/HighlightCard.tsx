import "./highlight-card.css";

interface HighlightCardProps {
  imgSrc: string;
  title: string;
  price: number;
  description: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ imgSrc, title, price, description }) => {
  return (
    <article className="highlight-card">
      <figure>
        <img src={imgSrc} alt={title} className="responsive-img rounded" />
      </figure>
      <section className="content">
        <header>
          <h5 className="card-title">{title}</h5>
          <span className="card-price">{price}</span>
        </header>
        <p className="highlight-card__desc">{description}</p>
        <p>Order a delivery</p>
      </section>
    </article>
  );
};

export default HighlightCard;
