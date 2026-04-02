import SlugView from "@/app/view/view_slug"

export default async function SearchCarPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <SlugView slug={slug} />
}
