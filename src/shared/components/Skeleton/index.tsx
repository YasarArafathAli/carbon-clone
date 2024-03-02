import React, { FC } from "react";
import {
  Skeleton as AntSkeleton,
  SkeletonProps as AntSkeletonProps,
} from "antd";

import "./skeleton.module.scss";

const Skeleton: FC<AntSkeletonProps> = ({ ...props }) => {
  return (
    <div className="skeleton">
      <AntSkeleton active round {...props} />
    </div>
  );
};

export default Skeleton;
