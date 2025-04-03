export const renderText = (text: string) =>
  text.split("\n").map((text) => {
    return <span key={Math.random()} className="inline-block" dangerouslySetInnerHTML={{ __html: text }}></span>;
  });
