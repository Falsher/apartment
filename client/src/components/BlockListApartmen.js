import React from "react";
import { HTTP_REQ, HTTP_REQ_LOCAL } from "./constant";

const BlockListApartmen = ({ props }) => {
  return (
    <div className="block-list-apart p-2">
      <div style={{ height: 200 * 5, overflow: "auto" }}>
        <ul className="list-group">
          {props.map((data) => {
            return (
              <li className="list-group-item heightL p-2 m-0" key={data.id}>
                <img width="100%" alt="" src={`${HTTP_REQ}${data.img}`} />
                <p className="m-0">{data.adress}</p>
                <p className="m-0">{data.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default BlockListApartmen;
