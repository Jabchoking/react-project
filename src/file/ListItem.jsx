import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchData } from "../redux/item/listSlice";
import { ListItemDiv } from "../assets/css/MusicSubcss";
import Footer from "../footer/Footer";
import { Homecontent } from "../assets/css/MusicSub";

const ListItem = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.data);
  const { listID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const ListSubitem = data.list.find((item) => item.id === Number(listID));
  const { id, title, days, editor, content, category } = ListSubitem;

  const goBackToList = () => {
    navigate("/list");
  };

  return (
    <>
      <ListItemDiv>
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
                <strong>({ListSubitem.content0})</strong>
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
          <p className="button_onprev">
            <button onClick={goBackToList}>목록으로</button>
          </p>
        </div>
      </ListItemDiv>
      <Homecontent>
        <Footer />
      </Homecontent>
    </>
  );
};

export default ListItem;
