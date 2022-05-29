import React from "react";
import { Widget } from "../widget/Widget";
import "./Widgets.css";

interface WidgetsProps {
  data: any;
}

export const Widgets = (props: React.PropsWithChildren<WidgetsProps>) => {
  const { data } = props;

  return (
    <div className="widgets">
      <Widget header="Terrain">
        <div>Type: {data?.weather[0]?.main}</div>
        <div>Description: {data?.weather[0]?.description}</div>
      </Widget>
      <Widget header="Weather">
        <div>Humidity: {data?.main?.humidity}</div>
        <div>Pressure:{data?.main?.pressure}</div>
        <div>Sea Level: {data?.main?.sea_level}</div>
        <div>Ground: Level: {data?.main?.grnd_level}</div>
      </Widget>

      <Widget header="Wind">
        <div>Speed: {data?.wind?.speed} kmph</div>
        <div>Deg: {data?.wind?.deg}&#176;</div>
        <div>Gust: {data?.wind?.gust} mph</div>
      </Widget>

      <Widget header="Country">
        <div>Country: {data?.sys?.country}</div>
        <div>Sunset: {data?.sys?.sunrise}</div>
        <div>Sunrise: {data?.sys?.sunset}</div>
      </Widget>
    </div>
  );
};
