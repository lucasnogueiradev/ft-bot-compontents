import React from "react";
import { Container } from "./styles";
import PieChart from "../Charts/PieChart";
import LineCharts from "../Charts/LineCharts";
import CardBetween from "../Layout/Cards/CardBetween";
import CardCenter from "../Layout/Cards/CardCenter";
import CardContent from "../Layout/Cards/CardContent";
import Row from "../Layout/Row/Row";
import Column from "../Layout/Column/Column";

interface Ipros {
  children: React.ReactNode;
}
const Content = ({ children }: Ipros) => {
  return <Container>{children}</Container>;
};

export default Content;
