import { use } from 'react'
import { allRecipes } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import { notFound } from 'next/navigation'
import { mdxComponents } from '@/components/MdxComponents'

export async function generateStaticParams() {
  return allRecipes.map((recipe) => ({
    slug: recipe._raw.flattenedPath.replace('recipes/', ''),
  }))
}

export const generateMetadata = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params
  const recipe = allRecipes.find((r) => r._raw.flattenedPath === `recipes/${params.slug}`)
  if (!recipe) notFound()
  return {
    title: recipe.title,
    description: recipe.description,
    authors: [{ name: 'Isaac Mattern', url: 'https://isaacmattern.com' }],
  }
}

export default function Page(props: { params: Promise<{ slug: string }> }) {
  const params = use(props.params)
  // Find the recipe for the current page.
  const recipe = allRecipes.find((r) => r._raw.flattenedPath === `recipes/${params.slug}`)

  // 404 if the recipe does not exist.
  if (!recipe) notFound()

  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(recipe.body.code)

  return (
    <>
      <div className="recipe-wrapper paper-effect">
        <h1>{recipe.title}</h1>
        <div className="secondary-text">{recipe.description}</div>
        <MDXContent components={mdxComponents} />
      </div>
    </>
  )
}
