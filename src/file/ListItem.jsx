import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ListItem = () => {
  const { data } = useSelector((state) => state.data);
  const { ListID } = useParams();
  const ListSubitem = data.list.find((item) => item.id === Number(ListID));
  const { id, title, days, editor, content, category } = ListSubitem;

  return (
    <div>
      <h2>{title}</h2>
      <div className="item_textbox">
        <p>{category}</p>
        <p>작성일 : {days}</p>
        <p>작성자 : {editor}</p>
      </div>
      <div className="info">
        {ListSubitem.content1 && (
          <div className="itm_box">
            <strong>{ListSubitem.content0}</strong>
            <p>{ListSubitem.content1}</p>
            <img src={ListSubitem.constent1_img} alt="" />
            <p>{ListSubitem.content2}</p>
            <img src={ListSubitem.constent2_img} alt="" />
            <p>{ListSubitem.content3}</p>
            <img src={ListSubitem.constent3_img} alt="" />
          </div>
        )}
        {ListSubitem.slide1 && (
          <div>
            {ListSubitem.slide1.map((item, index) => (
              <img key={index} src={item} alt="" />
            ))}
          </div>
        )}
        <p>{content}</p>
      </div>

      <button>목록으로</button>
    </div>
  );
};

export default ListItem;
