import VideoBanner from "./components/videobanner/videobanner";
import Bottombanner from "./components/bottombanner/bottombanner";
import Comments from "./components/comments/comments";
import TopBanner from "./components/topbanner/topbanner";

import React from 'react'

const page = () => {
  return (
    <div>
      <TopBanner/>
      <VideoBanner/>
      <Bottombanner/>
      <Comments/>
    </div>
  )
}

export default page