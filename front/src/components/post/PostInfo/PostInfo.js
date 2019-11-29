import React from "react";
import styles from "./PostInfo.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const PostList = () => (
  <div className={cx("post-info")}>
    <div className={cx("info")}>
      <h1>타이틀</h1>
      <div className={cx("tags")}>
        <a href="/">태그</a>
        <a href="/">태그</a>
        <a href="/">태그</a>
      </div>
      <div className={cx("date")}>Nov 30, 2019</div>
    </div>
  </div>
);

export default PostList;
