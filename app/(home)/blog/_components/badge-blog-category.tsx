import { PostCategory } from '@/app/(sanity)/schemas/postCategory';
import { Badge } from '@/app/(home)/components/catalyst/badge';

export function BadgeBlogCategory({
  categories,
}: {
  categories: PostCategory[];
}) {
  return (
    <div className="flex gap-3">
      {categories.map((category, key) => (
        <Badge key={key} color={category.color}>
          {category.title}
        </Badge>
      ))}
    </div>
  );
}
