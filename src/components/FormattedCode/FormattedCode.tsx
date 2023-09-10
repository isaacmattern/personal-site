"use client";

import { Code, CodeBlock, CopyBlock, dracula } from 'react-code-blocks';
import "./FormattedCode.css"

interface FormattedCodeProps {
  text: string | React.ReactNode;
  language?: string;
  block: boolean
}

export default function FormattedCode({ text, language, block } : FormattedCodeProps) : JSX.Element {

  const theme = dracula
  
  return (
    <>
      {block
        ? (
            // <div className='formatted-code-block'>
              // {/* @ts-ignore */}
              <CopyBlock text={text} language={language || 'javascript'} theme={theme}  showLineNumbers={false} />
            // </div>
          )
        : ( 
            <>
              {/* @ts-ignore */}
              <Code text={text} language={language || 'javascript'} theme={theme} />
            </>
          )
      }
    </>
  )
}