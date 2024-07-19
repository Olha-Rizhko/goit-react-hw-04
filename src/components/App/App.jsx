import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { fetchArticles } from "../../articles-api";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

import css from "./App.module.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleSubmit = (query) => {
    setArticles([]);
    setPage(1);
    setQuery(query);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setModalData(image);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getArticles() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchArticles(query, page);
        setArticles((prevArticles) => [...prevArticles, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        toast.error("Щось пішло не так, спробуйте ще раз.");
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getArticles();
  }, [query, page]);

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSubmit} />
      <main>
        {articles.length > 0 && (
          <ImageGallery openModal={openModal} items={articles} />
        )}
        {error && <ErrorMessage />}
        {loading && <Loader />}
        {articles.length > 0 && !loading && page < totalPages && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}
      </main>
      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          onSetModal={setIsModalOpen}
          imageData={modalData}
        />
      )}
      <Toaster containerStyle={{ top: 50 }} reverseOrder={false} />
    </div>
  );
}
