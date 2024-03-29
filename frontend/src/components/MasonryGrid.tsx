import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import Loader from "./Loader";


function MasonryGrid() {
  const [ImagesUrl, setImagesUrl] = useState([]);

  // const propsImages = [
  //   "https://source.unsplash.com/OyCl7Y4y0Bk",
  //   "https://source.unsplash.com/Kl1gC0ve620",
  //   "https://source.unsplash.com/55btQzyDiO8",
  //   "https://source.unsplash.com/g0dBbrGmMe0",
  //   "https://source.unsplash.com/v1OW17UcR-Q",
  //   "https://source.unsplash.com/Wpg3Qm0zaGk",
  //   "https://source.unsplash.com/W3FC_bCPw8E",
  //   "https://source.unsplash.com/rBRZLPVLQg0",
  //   "https://source.unsplash.com/RRksEVVoU8o",
  //   "https://source.unsplash.com/OyCl7Y4y0Bk",
  //   "https://source.unsplash.com/OyCl7Y4y0Bk",
  //   "https://source.unsplash.com/Kl1gC0ve620",
  //   "https://source.unsplash.com/55btQzyDiO8",
  //   "https://source.unsplash.com/g0dBbrGmMe0",
  //   "https://source.unsplash.com/v1OW17UcR-Q",
  //   "https://source.unsplash.com/Wpg3Qm0zaGk",
  //   "https://source.unsplash.com/W3FC_bCPw8E",
  //   "https://source.unsplash.com/rBRZLPVLQg0",
  //   "https://source.unsplash.com/RRksEVVoU8o",
  //   "https://source.unsplash.com/OyCl7Y4y0Bk",
  //   "https://source.unsplash.com/OyCl7Y4y0Bk",
  //   "https://source.unsplash.com/Kl1gC0ve620",
  //   "https://source.unsplash.com/55btQzyDiO8",
  //   "https://source.unsplash.com/g0dBbrGmMe0",
  //   "https://source.unsplash.com/v1OW17UcR-Q",
  //   "https://source.unsplash.com/Wpg3Qm0zaGk",
  //   "https://source.unsplash.com/W3FC_bCPw8E",
  //   "https://source.unsplash.com/rBRZLPVLQg0",
  //   "https://source.unsplash.com/RRksEVVoU8o",
  //   "https://source.unsplash.com/OyCl7Y4y0Bk",
  //   "https://source.unsplash.com/OyCl7Y4y0Bk",
  //   "https://source.unsplash.com/Kl1gC0ve620",
  //   "https://source.unsplash.com/55btQzyDiO8",
  //   "https://source.unsplash.com/g0dBbrGmMe0",
  //   "https://source.unsplash.com/v1OW17UcR-Q",
  //   "https://source.unsplash.com/Wpg3Qm0zaGk",
  //   "https://source.unsplash.com/W3FC_bCPw8E",
  //   "https://source.unsplash.com/rBRZLPVLQg0",
  //   "https://source.unsplash.com/RRksEVVoU8o",
  //   "https://source.unsplash.com/OyCl7Y4y0Bk",
  // ];

  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    700: 2,
    500: 1,
  };

  const accessKey = import.meta.env.VITE_UNSPLASH_API;

  async function apiFetcher() {
    await axios
      .get(
        `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=10&query=cartoon-artwork`
      )
      .then((res) => {
        setImagesUrl((prev) => prev.concat(res.data));
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    apiFetcher();
  },[]); // don't remove this dependency array, will cause non-stop loading

  return (
    <div className="w-[98%] m-auto pt-20 pb-10">
      <div className="container"></div>
      <InfiniteScroll
        dataLength={ImagesUrl.length}
        next={apiFetcher}
        hasMore={true}
        loader={<Loader/>}
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto "
          columnClassName="pl-4 bg-clip-padding"
        >
          {ImagesUrl.map((image, i) => (
            <div className="mb-4 hover:opacity-70 duration-300 hover:scale-95" key={i}>
              <img
                className="rounded-[7px]"
                width={640}
                height={480}
                alt=""
                src={image.urls.regular} //.urls.regular
              />
            </div>
          ))}
        </Masonry>
      </InfiniteScroll>
    </div>
  );
}

export default MasonryGrid;
