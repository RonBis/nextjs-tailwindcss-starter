import Image from 'next/image'
import Button from './shared/Button'

export default function Appbar() {
  return (
    <div className="sticky top-0 z-50 flex h-[56px] items-center bg-transparent px-5 py-3 shadow-lg">
      <Image src="/images/logo.png" height={32} width={32} alt="logo" />
      <p className="ml-3 text-xl font-semibold text-gray-900">Uplyft</p>

      <Button text="Log in" style={{ shadow: true }} />
    </div>
  )
}
