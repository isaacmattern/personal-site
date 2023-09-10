"use client";

import FormattedCode from "../FormattedCode/FormattedCode";

interface BlockTransformerPropTypes {
  children: React.ReactNode
}

export default function BlockTransformer({children} : BlockTransformerPropTypes) : JSX.Element {
  return (
    <>
      {/* @ts-ignore */}
      <FormattedCode text={children?.toString()} language={"javascript"} block={true} />
    </>
  )
}