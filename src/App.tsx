import "./App.css";

import TagList from "./components/TagList";

function App() {
  return (
    <div className="bg-primary w-screen h-screen">
      <TagList
        tagList={["All", "React", "TypeScript"]}
        onTagClick={console.log}
      />
    </div>
  );
}

export default App;
