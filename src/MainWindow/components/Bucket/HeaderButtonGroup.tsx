import React from "react";
import Button from "../BaseButton";

type PropTypes = { fileUpload: () => void };
const HeaderButtonGroup = ({ fileUpload }: PropTypes) => {
  return (
    <section className="buttons-wrapper">
      <Button value="上传文件" icon="arrow-up" onClick={fileUpload} />
      <Button value="下载" icon="arrow-down" disabled onClick={() => {}} />
      <Button value="删除" onClick={() => {}} />
      <Button value="新建文件夹" onClick={() => {}} />
      <Button value="离线下载" onClick={() => {}} />
    </section>
  );
};
export default HeaderButtonGroup;
