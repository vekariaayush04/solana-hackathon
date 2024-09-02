import AirdropFaucet from '@/components/AirdropFaucet'

export default function AirdropPage() {
  return (
    <div className="container mx-auto px-4 py-8 h-[600px]">
      <div>
      <h1 className="text-4xl font-bold  text-center mt-14">Solana Airdrop Faucet</h1>
      <div className='flex items-center justify-center m-14 '>
      <AirdropFaucet />
      </div>
      </div>
    </div>
  )
}