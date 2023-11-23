import { useState, useEffect } from "react";
import Form from "./components/Form";
import ImageList from "./components/ImageList";

function App() {
  const [search, setSearch] = useState("general");

  const [list, setList] = useState([]);
  const [pagination, setPagination] = useState(1);

  useEffect(() => {
    if (search === "") return;
    const fetchImages = async () => {
      const apiKey = "18641959-67103dd90e4e1d7a10ed64389";
      const url = `https://pixabay.com/api/?q=${search}&key=${apiKey}&page=${pagination}`;
      const result = await fetch(url);
      const images = await result.json();
      setList(images.hits);
    };
    fetchImages();
  }, [search, pagination]);

  return (
    <>
      <Form setSearch={setSearch} setPagination={setPagination} />

      <ImageList
        imageList={list}
        search={search}
        setPagination={setPagination}
        pagination={pagination}
      />
    </>
  );
}

export default App;
