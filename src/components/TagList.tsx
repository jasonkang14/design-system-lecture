import { useState } from "react";
import TagButton from "./TagButton";
import { flexRow } from "../mixins/styles";

interface ITagListProps<T extends string> {
  tagList: T[];
  onTagClick: (tag: T) => void;
}

export default function TagList<T extends string>({
  tagList,
  onTagClick,
}: ITagListProps<T>) {
  const [selectedTag, setSelectedTag] = useState<T>(tagList[0]);

  return (
    <div
      className={`${flexRow} gap-x-4`}
      onClick={(event) => {
        const eventTarget = event.target as HTMLButtonElement;
        const tag = eventTarget.textContent as T;
        onTagClick(tag);
      }}
    >
      {tagList.map((tag) => (
        <TagButton
          key={tag}
          isChecked={tag === selectedTag}
          onClick={() => setSelectedTag(tag)}
        >
          {tag}
        </TagButton>
      ))}
    </div>
  );
}
