export const renderText = (text: string) =>
  text.split("\n").map((text) => {
    return <span key={Math.random()} className="inline-block" dangerouslySetInnerHTML={{ __html: text }}></span>;
  });

export const scrollToComponent = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
  e.stopPropagation();
  // Check if the current path is not the home page
  if (window.location.pathname !== "/" && window.location.pathname !== "/platform") {
    // Navigate to the home page
    window.location.href = `/#${targetId}`;
  } else {
    // Scroll to the target component
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -50; // Offset to scroll 50px above the component
      const yPosition = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  }
};
