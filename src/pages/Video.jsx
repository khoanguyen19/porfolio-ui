import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import VideoGallery from "../components/VideoGallery";
import Intro from "../components/Intro";
import { useLocation } from "react-router-dom";

const Video = () => {
  const data = [
    {
      url: "https://www.youtube.com/watch?v=72lsTtY0FGI",
      img: "https://i.ytimg.com/vi/72lsTtY0FGI/hq720.jpg",
      channelId: 1,
      cat: "streaming",
    },
    {
      url: "https://www.youtube.com/watch?v=6Y_lKDPfk5M",
      img: "https://i.ytimg.com/vi/6Y_lKDPfk5M/hq720.jpg",
      channelId: 2,
      cat: "streaming",
    },
    {
      url: "https://www.youtube.com/watch?v=NmIuf5Jb4CM",
      img: "https://i.ytimg.com/vi/NmIuf5Jb4CM/hq720.jpg",
      channelId: 1,
      cat: "streaming",
    },
    {
      url: "https://www.youtube.com/watch?v=VPICBjFtSTY",
      img: "https://i.ytimg.com/vi/VPICBjFtSTY/hq720.jpg",
      channelId: 3,
      cat: "streaming",
    },
    {
      url: "https://www.youtube.com/watch?v=trOFJ13zIoU",
      img: "https://i.ytimg.com/vi/trOFJ13zIoU/hq720.jpg",
      channelId: 3,
      cat: "streaming",
    },
    {
      url: "https://www.youtube.com/watch?v=D9n2hDxGguE",
      img: "https://i.ytimg.com/vi/D9n2hDxGguE/hq720.jpg",
      cat: "highlight",
    },
    {
      url: "https://www.youtube.com/watch?v=lUABWqLVsOU",
      img: "https://i.ytimg.com/vi/lUABWqLVsOU/hq720.jpg",
      cat: "highlight",
    },
    {
      url: "https://www.dailymotion.com/video/k1563FExlPS0dZxSuin",
      img: "https://www.dailymotion.com/thumbnail/video/k1563FExlPS0dZxSuin",
      cat: "intro",
    },
    {
      url: "https://www.youtube.com/watch?v=xJ9wwwVmom0",
      img: "https://i.ytimg.com/vi/xJ9wwwVmom0/hq720.jpg",
      cat: "other",
    },
  ];

  const introObj = [
    {
      cat: "highlight",
      name: "Montage / Highlight",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure magnam quibusdam nam.",
    },
    {
      cat: "intro",
      name: "Intro / Trailer",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam iure explicabo eaque commodi voluptatibus ab!",
    },
    {
      cat: "other",
      name: "Other",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea iste eius perspiciatis molestiae ducimus?",
    },
  ];

  const [open, setOpen] = useState(false);
  const [channelId, setChannelId] = useState(1);

  const onChangeChannel = (id) => {
    setChannelId(id);
  };
  const onOpenModal = () => setOpen(!open);

  const location = useLocation();
  const category = location.pathname.split("/")[2];

  return (
    <div>
      <Navbar />
      {category === "streaming" ? (
        <Categories changeChannel={onChangeChannel} />
      ) : (
        <Intro content={introObj.find((o) => o.cat === category)} />
      )}
      <VideoGallery
        open={open}
        toggleModal={onOpenModal}
        channelId={channelId}
        videos={data.filter((d) => d.cat === category)}
        category={category}
      />
    </div>
  );
};

export default Video;
