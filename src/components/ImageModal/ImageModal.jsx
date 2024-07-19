import Modal from "react-modal";
import { RiCloseLine } from "react-icons/ri";
import { formatDate } from "../../helpers/formatDate";
import css from "./ImageModal.module.css";

export default function ImageModal({ isOpen, onSetModal, imageData }) {
  const {
    created_at,
    description,
    urls,
    user: { name },
    alt_description,
  } = imageData;

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    content: {
      top: "20px",
      bottom: "20px",
      left: "50%",
      right: "auto",
      transform: "translate(-50%, 0)",
      backgroundColor: "#F0F0F0",
      maxHeight: "calc(100vh - 40px)",
      overflow: "hidden",
      borderRadius: "8px",
      padding: "8px",
    },
  };

  const onCloseModal = () => {
    onSetModal(false);
  };

  const handleBodyClassAdd = () => {
    document.body.style.overflow = "hidden";
  };

  const handleBodyClassRemove = () => {
    document.body.style.overflow = "auto";
  };

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={onCloseModal}
      className={css.modal}
      contentLabel="Image Modal window"
      preventScroll={true}
      onAfterOpen={handleBodyClassAdd}
      onAfterClose={handleBodyClassRemove}
    >
      <div className={css.content}>
        <div className={css.btnGroup}>
          <button className={css.btn} onClick={onCloseModal} type="button">
            <RiCloseLine size={28} />
          </button>
        </div>
        <img className={css.img} src={urls.regular} alt={alt_description} />
        {description && <p className={css.description}>{description}</p>}

        <div className={css.userInfo}>
          <p className={css.name}>{name}</p>
          <p className={css.date}>{formatDate(created_at)}</p>
        </div>
      </div>
    </Modal>
  );
}
