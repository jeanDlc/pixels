import { useState, useEffect } from "react";
import Form from "./components/Form";
import ImageList from "./components/ImageList";
import { Api } from "./services";

import type { iImage } from "./types";

function App() {
  const [search, setSearch] = useState("general");

  const [list, setList] = useState<iImage[]>([]);
  const [pagination, setPagination] = useState(1);

  useEffect(() => {
    if (search === "") return;
    const fetchImages = async () => {
      const result = await Api.performRequest({ search, pagination });
      setList(result);
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
