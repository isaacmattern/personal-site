"use client";
import './Tile.css'

interface ITile {
  key?: string | number,
  title: string,
  url: string,
  description: string | JSX.Element | JSX.Element[]
}

export default function Tile({key, title, url, description} : ITile) {
  return (
    <div
      key={key ? key : ""}
      className='tile-comp block bg-tile-blue p-6 rounded-md'
    >
      <a href={url} target='_blank' className='my-0 font-bold text-lg blue-link'>{title}</a>
      <p className='my-0 text-sm tile-comp-description'>{description}</p>
    </div>
  )
}