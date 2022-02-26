import React, { useContext } from "react";
import { AppContext } from "../context/appContext";

const PastHistory = () => {
  const context: any = useContext(AppContext);
  const { checkHistoryData } = context.storeData;

  const renderHistory = () => {
    let lst = checkHistoryData.map((i: any, index: number) => {
      return (
        <React.Fragment key={index}>
          <div>Number: {index + 1}</div>
          <div>{i.name}</div>
          <div>{i.sys.country}</div>
          <div>{i.time}</div>
        </React.Fragment>
      );
    });
    if (lst.length === 0) {
      lst.push(<div>No search history</div>);
    }
    return lst;
  };
  return (
    <React.Fragment>
      <div>PastHistory</div>
      {renderHistory()}
    </React.Fragment>
  );
};

export default PastHistory;
