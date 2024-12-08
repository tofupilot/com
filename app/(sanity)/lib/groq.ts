import { groq } from "next-sanity";

// ====== Blog ======

// Get all posts
export const postquery = groq`
*[_type == "post"] | order(publishedAt desc, _createdAt desc) {
  _id,
  _createdAt,
  publishedAt,
  mainImage {
    ...,
    "blurDataURL":asset->metadata.lqip,
    "ImageColor": asset->metadata.palette.dominant.background,
  },
  featured,
  excerpt,
  slug,
  title,
  summary,
  author-> {
    _id,
    image,
    slug,
    name,
    role
  },
  categories[]->{ title, color },
}
`;

// Get all posts with 0..limit
export const limitquery = groq`
*[_type == "post"] | order(publishedAt desc, _createdAt desc) [0..$limit] {
  ...,
  author->,
  categories[]->
}
`;
// [(($pageIndex - 1) * 10)...$pageIndex * 10]{
// Get subsequent paginated posts
export const paginatedquery = groq`
*[_type == "post"] | order(publishedAt desc, _createdAt desc) [$pageIndex...$limit] {
  ...,
  author->,
  categories[]->
}
`;

// Get Site Config
export const configQuery = groq`
*[_type == "settings"][0] {
  ...,
}
`;

// Single Post
export const singlequery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ...,
  body[]{
    ...,
    markDefs[]{
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug
      }
    },
    // Fetching full details of the user in testimonials
    _type == "testimonial" => {
      ...,
      "user": user->{
        ..., // Retrieves all properties of the referenced user
        // Specify further fields you want from the user here
      }
    },
    _type == "image" => {
      ...,
      "caption": caption // Fetch the caption for images in body content
    }
  },
  author->,
  categories[]->{ title, color },
  "estReadingTime": round(length(pt::text(body)) / 5 / 180 ),
  "related": *[_type == "post" && count(categories[@._ref in ^.^.categories[]._ref]) > 0 ] | order(publishedAt desc, _createdAt desc) [0...5] {
    title,
    slug,
    "date": coalesce(publishedAt,_createdAt),
    "image": mainImage
  },
}
`;

// Paths for generateStaticParams
export const pathquery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;
export const catpathquery = groq`
*[_type == "category" && defined(slug.current)][].slug.current
`;
export const authorsquery = groq`
*[_type == "author" && defined(slug.current)][].slug.current
`;

// Get Posts by Authors
export const postsbyauthorquery = groq`
*[_type == "post" && $slug match author->slug.current ] {
  ...,
  author->,
  categories[]->,
}
`;

// Get Posts by Category
export const postsbycatquery = groq`
*[_type == "post" && $slug in categories[]->slug.current ] {
  ...,
  author->,
  categories[]->,
}
`;

// Get top 5 categories
export const catquery = groq`*[_type == "category"] {
  ...,
  "count": count(*[_type == "post" && references(^._id)])
} | order(count desc) [0...5]`;

export const searchquery = groq`*[_type == "post" && _score > 0]
| score(title match $query || excerpt match $query || pt::text(body) match $query)
| order(_score desc)
{
  _score,
  _id,
  _createdAt,
  mainImage,
  author->,
  categories[]->,
   title,
   slug
}`;

// Get all Authors
export const allauthorsquery = groq`
*[_type == "author"] {
 ...,
 'slug': slug.current,
}
`;

// get everything from sanity
// to test connection
export const getAll = groq`*[]`;

// ====== Releases ======

// Get all releases
export const releasequery = groq`
*[_type == "release"] | order(publishedAt desc, _createdAt desc) {
  _id,
  _createdAt,
  releasedAt,
  title,
  body[]{
    ...,
    markDefs[]{
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug
      },
    }
  },
  highlights[]{
    title,
    mainImage {
      ...,
      "blurDataURL":asset->metadata.lqip,
      "ImageColor": asset->metadata.palette.dominant.background,
    },
    body[]{
      ...,
      markDefs[]{
        ...,
        _type == "internalLink" => {
          "slug": @.reference->slug
        }
      }
    },
    categories[]->{
      title,
      color
    },
  }
}
`;

// ====== Templates ======

// Get all templates
export const templatesquery = groq`
*[_type == "template"] | order(publishedAt desc, _createdAt desc) {
  _id,
  _createdAt,
  mainImage {
    ...,
    "blurDataURL":asset->metadata.lqip,
    "ImageColor": asset->metadata.palette.dominant.background,
  },
  featured,
  excerpt,
  slug,
  title,
  summary,
  author-> {
    _id,
    image,
    slug,
    name,
    role
  },
  usecase,
  framework,
}
`;

// Get single template
export const templatequery = groq`
*[_type == "template" && slug.current == $slug][0] {
  ...,
  body[]{
    ...,
    markDefs[]{
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug
      }
    },
    // Fetching full details of the user in testimonials
    _type == "testimonial" => {
      ...,
      "user": user->{
        ..., // Retrieves all properties of the referenced user
        // Specify further fields you want from the user here
      }
    },
    _type == "image" => {
      ...,
      "caption": caption // Fetch the caption for images in body content
    },
  },
  author->,
  githubProject,
  usecase,
  framework,
  language,
  "headings": body[style in ["h1"]]{ 
      "level": style, 
      "text": children[].text 
  },
  "related": *[_type == "post" && count(categories[@._ref in ^.^.categories[]._ref]) > 0 ] | order(_createdAt desc) [0...5] {
    title,
    slug,
    "date": coalesce(publishedAt,_createdAt),
    "image": mainImage
  },
}
`;

// Paths for generateStaticParams
export const templatepathquery = groq`
*[_type == "template" && defined(slug.current)][].slug.current
`;
