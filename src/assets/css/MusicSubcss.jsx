import styled from "styled-components";

export const ListH2 = styled.h2`
  font-size: 50px;
  text-align: center;
  margin: 80px 0;
`;
export const ListUl = styled.ul`
  height: 100px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  margin: 40px;
  li {
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0 25px;
    min-width: 100px;
    height: 100%;
    cursor: pointer;
    font-size: 25px;
    a {
      font-size: 25px;
      padding: 0 25px;
    }
  }
`;
export const TableContainer = styled.div``;
export const ListForm = styled.form`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 20px;
  input {
    width: 700px;
    height: 60px;
    border-radius: 30px;
    border: 1px solid #222;
    text-indent: 50px;
    font-size: 20px;
  }
  button {
    background-color: transparent;
    border: none;
    font-size: 40px;
    position: relative;
    right: 60px;
    width: 20px;
    height: 20px;
    transform: translateY(50%);
  }
`;
export const ListTable = styled.table`
  margin: 80px auto;
  width: 60%;
  caption {
    display: none;
  }
  .NO {
    width: 80px;
  }
  .table_editor {
    width: 48px;
  }
  thead {
    display: none;
  }
  tbody {
    tr {
      height: 150px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      td {
        text-align: left;
        vertical-align: middle;
        font-size: 20px;
        color: rgba(0, 0, 0, 0.7);
        a {
          font-size: 20px;
          color: rgba(0, 0, 0, 0.7);
        }
      }
      :hover {
        td {
          border-bottom: none;
        }
      }
    }
    td:nth-child(3),
    td:nth-child(4) {
      font-size: 13px;
      color: rgba(0, 0, 0, 0.5);
    }
    td:nth-child(1) {
      font-size: 15px;
      font-weight: 700;
    }
  }
`;

export const ListbuttonMore = styled.p`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  button {
    width: 320px;
    height: 50px;
    font-size: 12px;
    font-weight: 700;
    background-color: transparent;
    border: 1px solid #000;
    border-radius: 20px;
  }
`;
export const QnaUl = styled.ul`
  height: 100px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  margin: 40px;
  li {
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0 25px;
    min-width: 100px;
    height: 100%;
    cursor: pointer;
    font-size: 25px;
    a {
      font-size: 25px;
      padding: 0 25px;
    }
  }
`;
export const Qnatable = styled.table`
  margin: 50px auto;
  width: 70%;
  caption {
    display: none;
  }
  .table_No {
    width: 120px;
  }
  .tableQna_title {
    text-align: center;
  }
  thead {
    height: 40px;
    tr {
      border-top: 1px solid rgb(235, 235, 235);
      border-bottom: 1px solid rgb(235, 235, 235);
      th {
        font-size: 12px;
        vertical-align: middle;
      }
    }
  }
  tbody {
    tr {
      height: 80px;
      border-bottom: 1px solid rgb(235, 235, 235);
      td {
        vertical-align: middle;
        position: relative;
        strong {
          display: block;
        }
        strong.on {
          box-sizing: border-box;
          height: 40px;
          width: 100%;
          padding-top: 10px;
          background-color: whitesmoke;
          padding-left: 20px;
        }
        p {
          position: absolute;
          right: 3%;
          top: 50%;
          transform: translateY(-50%);
          font-size: 15px;
          color: gray;
        }
        p.on {
          position: absolute;
          right: 3%;
          top: 20px;
          transform: translateY(-50%);
          font-size: 15px;
          color: gray;
        }
        ul {
          display: none;
          flex-direction: column;
          li {
            font-size: 12px;
            background-color: #f5f5f5;
            line-height: 2;
            display: flex;
            justify-content: center;
            display: flex;
            width: 80%;
            padding-left: 20px;
            img {
              width: 360px;
              height: 280px;
              margin: 20px 0;
            }
          }
        }
      }
    }
    tr td:first-child {
      text-align: center;
      font-weight: 700;
    }
    tr td:nth-child(2) ul.on {
      background-color: #f9f9f9f9;
      font-size: 14px;
    }
    ul.on {
      display: flex;
      padding: 50px 0;
    }
  }
`;
export const QnaButton = styled.button`
  margin: 50px 0;
  background-color: transparent;
  border: none;
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    width: 320px;
    height: 50px;
    font-size: 12px;
    font-weight: 700;
    background-color: transparent;
    border: 1px solid #000;
    border-radius: 20px;
  }
`;
export const LoginFORM = styled.form`
  width: 700px;
  height: 600px;
  border: 1px solid rgb(217, 217, 217);
  border-radius: 20px;
  margin: 100px auto;
  padding: 50px 120px;
  box-sizing: border-box;
  position: relative;
  input[type="text"] {
    width: 440px;
    height: 60px;
    border: none;
    border-bottom: 1px solid rgb(235, 235, 235);
    font-size: 16px;
    font-weight: 700;
    color: rgb(51, 51, 51);
    outline: none;
  }
  .login_submit {
    width: 410px;
    height: 110px;
    padding-top: 20px;

    input[type="checkbox"] {
      width: 15px;
      height: 15px;
      margin-left: 10px;
    }
    label {
      font-size: 14px;
      color: rgb(24, 24, 24);
      margin-left: 30px;
    }
    .Login_Btn {
      width: 440px;
      height: 60px;
      margin-top: 30px;
      background-color: rgb(63, 63, 255);
      border: none;
      font-size: 18px;
      font-weight: 700;
      color: #fff;
    }
  }
  .LoginJoin_btn {
    position: absolute;
    right: 140px;
    transform: translateY(50%);
  }
  .Login_type {
    display: flex;
    margin-top: 70px;
    justify-content: center;
    button {
      width: 215px;
      height: 60px;
      font-size: 14px;
      font-weight: 700;
      color: #fff;
      border: none;
      margin-right: 10px;
      border: 1px solid rgb(217, 217, 217);
    }
    button:first-child {
      background-color: rgb(51, 51, 51);
      color: #fff;
    }
    button:last-child {
      background-color: #fff;
      color: #000;
    }
  }
`;
export const JoinConditions = styled.div`
  width: 1040px;
  height: 1000px;
  margin: 100px auto;
  box-sizing: border-box;
  position: relative;
  h2 {
    text-align: center;
    img {
      width: 60px;
      height: 60px;
    }
  }
  form {
    margin: 100px;
    padding: 60px 120px;
    border: 1px solid rgb(217, 217, 217);
    border-radius: 20px;

    h3 {
      text-align: center;
      font-size: 30px;
      font-weight: 700;
      padding-bottom: 30px;
      border-bottom: 1px solid rgb(217, 217, 217);
    }
    div {
      margin-top: 20px;
      height: 40px;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      font-size: 16px;
      input {
        width: 15px;
        height: 15px;
        margin-right: 15px;
      }
      strong {
        position: absolute;
        right: 0;
        font-size: 12px;
        font-weight: 700;
      }
      label {
        p {
          display: inline;
          color: rgb(63, 63, 255);
          font-weight: 700;
          margin-right: 10px;
        }
        span {
        }
      }
      .total {
        font-size: 16px;
        font-weight: 700;
      }
      em {
        display: block;
        margin-left: 35px;
        font-size: 14px;
        font-weight: 500;
      }
    }
    div:last-of-type {
      padding-top: 20px;
      border-top: 1px solid rgb(217, 217, 217);
      span {
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
  p {
    margin: 70px 0;
    text-align: center;
    button {
      width: 480px;
      height: 60px;
      background-color: #3f3fff;
      border: none;
      font-size: 18px;
      font-weight: 700;
      color: #fff;
    }
  }
`;
export const JoinTable = styled.div`
  width: 1040px;
  height: 1000px;
  margin: 100px auto;
  box-sizing: border-box;
  position: relative;
  h2 {
    text-align: center;
    img {
      width: 60px;
      height: 60px;
    }
  }
  form {
    margin: 100px;
    padding: 60px 120px;
    border: 1px solid rgb(217, 217, 217);
    border-radius: 20px;
    text-align: center;
    h3 {
      text-align: center;
      font-size: 30px;
      font-weight: 700;
      padding-bottom: 30px;
      border-bottom: 1px solid rgb(217, 217, 217);
    }
    div {
      position: relative;
      width: 100%;
      input {
        width: 440px;
        height: 60px;
        border: none;
        border-bottom: 1px solid rgb(235, 235, 235);
        font-size: 20px;
        font-weight: 700;
        font-weight: normal;
        color: rgb(51, 51, 51);
        outline: none;
      }
      input::placeholder {
        font-size: 18px;
        font-weight: 600;
        color: rgb(51, 51, 51);
      }
      p {
        display: block;
        width: 380px;
        margin: 20px;
        text-align: left;
        font-size: 14px;
        padding-left: 60px;
        color: lightgray;
      }
      .emil {
        width: 210px;
        height: 60px;
        margin-right: 10px;
        outline: none;
        border-bottom: 1px solid rgb(217, 217, 217);
      }
      select {
        width: 210px;
        height: 60px;
        margin-left: 10px;
        outline: none;
        border: none;
        border-bottom: 1px solid rgb(217, 217, 217);
        font-size: 18px;
        font-weight: 700;
        color: rgb(51, 51, 51);
      }
    }
    .Certified {
      width: 440px;
      height: 60px;
      background-color: #3f3fff;
      border: none;
      font-size: 18px;
      font-weight: 700;
      color: #fff;
      margin: 60px auto;
      line-height: 3;
    }
  }
`;
export const LoginComplet = styled.div`
  width: 1400px;
  margin: 100px auto;
  position: relative;
  h2 {
    font-size: 60px;
    color: #3f3fff;
  }
  div {
    padding: 100px 40px;
    width: 100%;
    height: 500px;
    margin: auto;
    border: 1px solid #000;
    box-sizing: border-box;
    position: relative;
    text-align: center;

    h3 {
      font-size: 50px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 30px;
    }
    strong {
      margin: auto;
      display: block;
      width: 50%;
      font-size: 18px;
      color: rgb(51, 51, 51);
    }
  }
  p {
    button {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translatex(-50%);
      width: 220px;
      height: 60px;
      background-color: #3f3fff;
      border: none;
      font-size: 18px;
      font-weight: 700;
      color: #fff;
      margin: 30px 0;
    }
  }
`;
