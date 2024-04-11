import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Row from "../Layout/Row/Row";
interface SkeletonProps {
  loading: boolean;
}

export default function SkeletonLogin({ loading }: SkeletonProps) {
  return (
    <Box sx={{ width: "100%" }}>
      <Skeleton
        animation="wave"
        width="100%"
        height={40}
        sx={{ fontSize: "7rem", margin: "auto", display: "flex" }}
      />
      <Skeleton variant="rounded" width="100%" height={200} />
      <Row />
      <Skeleton
        animation="wave"
        width="100%"
        height={40}
        sx={{ fontSize: "7rem", margin: "auto", display: "flex" }}
      />
      <Skeleton
        animation="wave"
        width="100%"
        height={40}
        sx={{ fontSize: "7rem", margin: "auto", display: "flex" }}
      />
      <Skeleton variant="rounded" width="100%" height={90} />
    </Box>
  );
}
