import css from "./ImageCard.module.css";

export default function ImageCard({ item, openModal }) {
  const handleClick = () => {
    openModal(item);
  };
  return (
    <div className={css.container} onClick={handleClick}>
      <img src={item.urls.small} alt={item.description} className={css.img} />
    </div>
  );
}
