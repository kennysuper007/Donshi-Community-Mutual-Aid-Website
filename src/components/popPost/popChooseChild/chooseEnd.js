import React, { useState } from "react";

// react Calendar 套件
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

/**
 *
 * @param setEnd 設定 PO文 結束時間
 * @param setShowChoosePop 設定彈跳視窗-貼文內容(時間、圖片、位址)選擇區塊 是否出現
 * @param setShowMainPop 彈跳視窗-設定彈跳視窗-發布貼文區塊 是否出現
 */
export default function ChooseEnd({
  setEnd,
  setShowChoosePop,
  setShowMainPop,
}) {
  const [date, setDate] = useState(new Date()); // 日曆上的日期State

  // 點擊日曆 事件
  const clickCalendat = (date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    setDate(date);
    if (new Date().getTime() - date.getTime() > 0) {
      alert("請輸入大於今天的日期");
    } else {
      setEnd(`${year}-${month}-${day}`);
      setShowChoosePop(0);
      setShowMainPop(1);
    }
  };
  return (
    <div className="pop-choose-end d-flex jc-center my-3">
      <Calendar onChange={clickCalendat} value={date} />
    </div>
  );
}
