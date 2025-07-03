export function checkedClickedOutside(activeDropdown, setActiveDropdown, refs) {
  function handleClickOutside(event) {
    if (!activeDropdown) return;

    const currentRef = refs[activeDropdown];
    if (
      currentRef &&
      currentRef.current &&
      !currentRef.current.contains(event.target)
    ) {
      setActiveDropdown(null);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}
