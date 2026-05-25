export default function Loader() {
  return (
    <div
      className="relative mx-auto grid h-[320px] w-full max-w-[420px] place-items-center sm:h-[420px]"
      aria-label="Loading 3D globe"
    >
      <div className="h-[48px] w-[48px] animate-earth-loader-spin border-2 border-neutral-800 border-t-white" />
    </div>
  )
}
