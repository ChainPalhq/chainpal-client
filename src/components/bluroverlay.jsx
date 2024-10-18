export default function BlurOverlay({ closeSelf = null }) {
  function handleClose() {
    if ("function" === typeof closeSelf) {
      closeSelf();
    }
  }

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 bg-white/40 backdrop-blur-[2px] bg-opacity-50 z-20"
    ></div>
  );
}
