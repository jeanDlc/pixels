import Image from "./Image";
import Pagination from "./Pagination";

import type { iImage } from "../types";

const ImageList = ({
  imageList,
  search,
  setPagination,
  pagination,
}: {
  imageList: iImage[];
  search: string;
  setPagination: (p: number) => void;
  pagination: number;
}) => {
  if (imageList.length === 0) return null;
  return (
    <>
      <div className="container mt-3">
        <h2 className="text-center text-primary mb-3">
          Pág N° {pagination}. Resultados Para{" "}
          <span className="text-uppercase"> "{search}"</span>
        </h2>
        <Pagination setPagination={setPagination} pagination={pagination} />
        <div className="row">
          {imageList.map((image) => (
            <Image key={image.id} image={image} />
          ))}
        </div>
      </div>
      <Pagination setPagination={setPagination} pagination={pagination} />
    </>
  );
};

export default ImageList;
