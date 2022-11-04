import { Link } from "react-router-dom";
import styles from "./ItemCard.module.css";
import Card from "../../UI/Card";
import "../../App.css";
function ItemCard({ title, id }) {
  const clickHandler = () => {};
  return (
    <Link to={`/details/${id}`}>
      <Card className={styles.card}>
        <span className={styles.title}>{title}</span>
      </Card>
    </Link>
  );
}

export default ItemCard;
