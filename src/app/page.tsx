'use client';

import { Viewer, Entity } from "resium";
import { Ion, Cartesian3 } from "cesium";

// 클라이언트에서만 실행되므로, 안전하게 token 세팅
Ion.defaultAccessToken = process.env.NEXT_PUBLIC_CESIUM_TOKEN || "";

const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);
const pointGraphics = { pixelSize: 10 };

export default function Home() {
  return (
    <Viewer full>
      <Entity position={position} point={pointGraphics} />
    </Viewer>
  );
}