"use client";

import FormattedCode from "../FormattedCode/FormattedCode";

interface PreTransformerPropTypes {
  children: React.ReactNode
}

export default function PreTransformer({children} : PreTransformerPropTypes) : JSX.Element {
  return (
    <>
      {/* @ts-ignore */}
      <FormattedCode text={children.props.children?.toString()} language={"javascript"} block={false} />
    </>
  )
}